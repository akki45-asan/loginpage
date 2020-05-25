var Glb_currRow;
var Glb_currIndex;


/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------


var App = function () {


    //
    // Setup module components
    //

    // Transitions
    // -------------------------

    // Disable all transitions
    var _transitionsDisabled = function () {
        $('body').addClass('no-transitions');
    };

    // Enable all transitions
    var _transitionsEnabled = function () {
        $('body').removeClass('no-transitions');
    };


    // Sidebars
    // -------------------------

    //
    // On desktop
    //

    // Resize main sidebar
    var _sidebarMainResize = function () {

        // Flip 2nd level if menu overflows
        // bottom edge of browser window
        var revertBottomMenus = function () {
$('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function () {
                var totalHeight = 0,
                    $this = $(this),
                    navSubmenuClass = 'nav-group-sub',
                    navSubmenuReversedClass = 'nav-item-submenu-reversed';

                totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight();
                if ($this.children('.' + navSubmenuClass).length) {
                    if (($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()) > document.body.clientHeight) {
                        $this.addClass(navSubmenuReversedClass)
                    }
                    else {
                        $this.removeClass(navSubmenuReversedClass)
                    }
                }
            });
        }

        // If sidebar is resized by default
        if ($('body').hasClass('sidebar-xs')) {
            revertBottomMenus();
        }

        // Toggle min sidebar class
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();

$('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main');
            revertBottomMenus();
        });
    };

    // Toggle main sidebar
    var _sidebarMainToggle = function () {
        $(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-main-hidden');
        });
    };

    // Toggle secondary sidebar
    var _sidebarSecondaryToggle = function () {
        $(document).on('click', '.sidebar-secondary-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-secondary-hidden');
        });
    };


    // Show right, resize main
    var _sidebarRightMainToggle = function () {
        $(document).on('click', '.sidebar-right-main-toggle', function (e) {
            e.preventDefault();

            // Right sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {

                // Make main sidebar mini
                $('body').addClass('sidebar-xs');

                // Hide children lists if they are opened, since sliding animation adds inline CSS
                $('.sidebar-main .nav-sidebar').children('.nav-item').children('.nav-group-sub').css('display', '');
            }
            else {
                $('body').removeClass('sidebar-xs');
            }
        });
    };

    // Show right, hide main
    var _sidebarRightMainHide = function () {
        $(document).on('click', '.sidebar-right-main-hide', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-main-hidden');
            }
            else {
                $('body').removeClass('sidebar-main-hidden');
            }
        });
    };

    // Toggle right sidebar
    var _sidebarRightToggle = function () {
        $(document).on('click', '.sidebar-right-toggle', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-right-visible');
        });
    };

    // Show right, hide secondary
    var _sidebarRightSecondaryToggle = function () {
        $(document).on('click', '.sidebar-right-secondary-toggle', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-secondary-hidden');
            }
            else {
                $('body').removeClass('sidebar-secondary-hidden');
            }
        });
    };


    // Toggle content sidebar
    var _sidebarComponentToggle = function () {
        $(document).on('click', '.sidebar-component-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-component-hidden');
        });
    };


    //
    // On mobile
    //

    // Expand sidebar to full screen on mobile
    var _sidebarMobileFullscreen = function () {
        $('.sidebar-mobile-expand').on('click', function (e) {
            e.preventDefault();
            var $sidebar = $(this).parents('.sidebar'),
                sidebarFullscreenClass = 'sidebar-fullscreen'

            if (!$sidebar.hasClass(sidebarFullscreenClass)) {
                $sidebar.addClass(sidebarFullscreenClass);
            }
            else {
                $sidebar.removeClass(sidebarFullscreenClass);
            }
        });
    };

    // Toggle main sidebar on mobile
    var _sidebarMobileMainToggle = function () {
        $('.sidebar-mobile-main-toggle').on('click', function (e) {
            e.preventDefault();
$('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');

            if ($('.sidebar-main').hasClass('sidebar-fullscreen')) {
$('.sidebar-main').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle secondary sidebar on mobile
    var _sidebarMobileSecondaryToggle = function () {
        $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
            e.preventDefault();
$('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-right');

            // Fullscreen mode
            if ($('.sidebar-secondary').hasClass('sidebar-fullscreen')) {
$('.sidebar-secondary').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle right sidebar on mobile
    var _sidebarMobileRightToggle = function () {
        $('.sidebar-mobile-right-toggle').on('click', function (e) {
            e.preventDefault();
$('body').toggleClass('sidebar-mobile-right').removeClass('sidebar-mobile-main sidebar-mobile-secondary');

            // Hide sidebar if in fullscreen mode on mobile
            if ($('.sidebar-right').hasClass('sidebar-fullscreen')) {
$('.sidebar-right').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle component sidebar on mobile
    var _sidebarMobileComponentToggle = function () {
        $('.sidebar-mobile-component-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-component');
        });
    };


    // Navigations
    // -------------------------

    // Sidebar navigation
    var _navigationSidebar = function () {

        // Define default class names and options
        var navClass = 'nav-sidebar',
            navItemClass = 'nav-item',
            navItemOpenClass = 'nav-item-open',
            navLinkClass = 'nav-link',
            navSubmenuClass = 'nav-group-sub',
            navSlidingSpeed = 250;

        // Configure collapsible functionality
        $('.' + navClass).each(function () {
            $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
                e.preventDefault();

                // Simplify stuff
                var $target = $(this),
                    $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

                // Collapsible
                if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                    $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
                else {
                    $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
                }

                // Accordion
                if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                    $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
            });
        });

        // Disable click in disabled navigation items
        $(document).on('click', '.' + navClass + ' .disabled', function (e) {
            e.preventDefault();
        });

        // Scrollspy navigation
        $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
    };

    // Navbar navigation
    var _navigationNavbar = function () {

        // Prevent dropdown from closing on click
        $(document).on('click', '.dropdown-content', function (e) {
            e.stopPropagation();
        });

        // Disabled links
        $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
            $(this).tab('show');
        });
    };


    // Components
    // -------------------------

    // Tooltip
    var _componentTooltip = function () {

        // Initialize
        $('[data-popup="tooltip"]').tooltip();

        // Demo tooltips, remove in production
        var demoTooltipSelector = '[data-popup="tooltip-demo"]';
        if ($(demoTooltipSelector).is(':visible')) {
            $(demoTooltipSelector).tooltip('show');
            setTimeout(function () {
                $(demoTooltipSelector).tooltip('hide');
            }, 2000);
        }
    };

    // Popover
    var _componentPopover = function () {
        $('[data-popup="popover"]').popover();
    };


    // Card actions
    // -------------------------

    // Reload card (uses BlockUI extension)
    var _cardActionReload = function () {
        $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                block = $target.closest('.card');

            // Block card
            $(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                $(block).unblock();
            }, 2000);
        });
    };

    // Collapse card
    var _cardActionCollapse = function () {
        var $cardCollapsedClass = $('.card-collapsed');

        // Hide if collapsed by default
$cardCollapsedClass.children('.card-header').nextAll().hide();

        // Rotate icon if collapsed by default
$cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180');

        // Collapse on click
        $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
            var $target = $(this),
                slidingSpeed = 150;

            e.preventDefault();
            $target.parents('.card').toggleClass('card-collapsed');
            $target.toggleClass('rotate-180');
$target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
        });
    };

    // Remove card
    var _cardActionRemove = function () {
        $('.card [data-action=remove]').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                slidingSpeed = 150;

            // If not disabled
            if (!$target.hasClass('disabled')) {
                $target.closest('.card').slideUp({
                    duration: slidingSpeed,
                    start: function () {
                        $target.addClass('d-block');
                    },
                    complete: function () {
                        $target.remove();
                    }
                });
            }
        });
    };

    // Card fullscreen mode
    var _cardActionFullscreen = function () {
        $('.card [data-action=fullscreen]').on('click', function (e) {
            e.preventDefault();

            // Define vars
            var $target = $(this),
                cardFullscreen = $target.closest('.card'),
                overflowHiddenClass = 'overflow-hidden',
                collapsedClass = 'collapsed-in-fullscreen',
                fullscreenAttr = 'data-fullscreen';

            // Toggle classes on card
            cardFullscreen.toggleClass('fixed-top h-100 rounded-0');

            // Configure
            if (!cardFullscreen.hasClass('fixed-top')) {
                $target.removeAttr(fullscreenAttr);
                cardFullscreen.children('.' + collapsedClass).removeClass('show');
                $('body').removeClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
            }
            else {
                $target.attr(fullscreenAttr, 'active');
cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
                $('body').addClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
            }
        });
    };


    // Misc
    // -------------------------

    // Dropdown submenus. Trigger on click
    var _dropdownSubmenu = function () {

        // All parent levels require .dropdown-toggle class
$('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            // Remove "show" class in all siblings
$(this).parent().siblings().removeClass('show').find('.show').removeClass('show');

            // Toggle submenu
$(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show');

            // Hide all levels when parent dropdown is closed
            $(this).parents('.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
            });
        });
    };

    // Header elements toggler
    var _headerElements = function () {

        // Toggle visible state of header elements
        $('.header-elements-toggle').on('click', function (e) {
            e.preventDefault();
$(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
        });

        // Toggle visible state of footer elements
        $('.footer-elements-toggle').on('click', function (e) {
            e.preventDefault();
$(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
        });
    };


    //
    // Return objects assigned to module
    //

    return {

        // Disable transitions before page is fully loaded
        initBeforeLoad: function () {
            _transitionsDisabled();
        },

        // Enable transitions when page is fully loaded
        initAfterLoad: function () {
            _transitionsEnabled();
        },

        // Initialize all sidebars
        initSidebars: function () {

            // On desktop
            _sidebarMainResize();
            _sidebarMainToggle();
            _sidebarSecondaryToggle();
            _sidebarRightMainToggle();
            _sidebarRightMainHide();
            _sidebarRightToggle();
            _sidebarRightSecondaryToggle();
            _sidebarComponentToggle();

            // On mobile
            _sidebarMobileFullscreen();
            _sidebarMobileMainToggle();
            _sidebarMobileSecondaryToggle();
            _sidebarMobileRightToggle();
            _sidebarMobileComponentToggle();
        },

        // Initialize all navigations
        initNavigations: function () {
            _navigationSidebar();
            _navigationNavbar();
        },

        // Initialize all components
        initComponents: function () {
            _componentTooltip();
            _componentPopover();
        },

        // Initialize all card actions
        initCardActions: function () {
            _cardActionReload();
            _cardActionCollapse();
            _cardActionRemove();
            _cardActionFullscreen();
        },

        // Dropdown submenu
        initDropdownSubmenu: function () {
            _dropdownSubmenu();
        },

        initHeaderElementsToggle: function () {
            _headerElements();
        },

        // Initialize core
        initCore: function () {
            App.initSidebars();
            App.initNavigations();
            App.initComponents();
            App.initCardActions();
            App.initDropdownSubmenu();
            App.initHeaderElementsToggle();
        }
    }
}();


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function () {
    App.initBeforeLoad();
    App.initCore();
});

// When page is fully loaded
window.addEventListener('load', function () {
    App.initAfterLoad();
});

function loadTheme() {
    var tName = document.querySelector(".myColor").value
    document.documentElement.style.setProperty('--main-bg-color', tName);
    console.log(tName);
}
function loadMainMenuSize(e) {
    var x1 = document.getElementById(e).value;
document.documentElement.style.setProperty('--main-menu-font-size', x1);
}
function loadSubMenuSize(e) {
    var x2 = document.getElementById(e).value;
document.documentElement.style.setProperty('--sub-menu-font-size', x2);
}
function loadSepcialClasses(e) {
    var val = $('#' + e).val();
    $('h6 ,div ,label').removeClass('special');
    $(val).addClass('special');
}

function RestrictMinMax(el) {
    if (!((el.value <= parseInt(el.max) && el.value >= parseInt(el.min)) || (el.value == '-'))) {
        el.value = "";
    }
}


function onchangeCriticality(ele) {
    if ($('.' + ele).val() == 'Critical') {
        $('.biaPendingTeble .biaPendingBody tr').each(function () {
            if ($(this).children('.criticality_filter').html() != 'Critical') {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });
    }
    else if ($('.' + ele).val() == 'Non-Critical') {
        $('.biaPendingTeble .biaPendingBody tr').each(function () {
            if ($(this).children('.criticality_filter').html() != 'Non-Critical') {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });
    }
    else {
        $('.biaPendingTeble .biaPendingBody tr').each(function () {
            $(this).show();
        });
    }
}

function undoDeleteActivity() {
$('.undoActivity.selected_for_undo').parents('tr').removeClass('table-danger hide-pointer');
    // $('.table-danger').children().find('.undoActivity').css('display','inline-block');
    $('.undoActivity.selected_for_undo').hide();
    $('#undo_modal').modal('hide');
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
function showOverviewReport() {

    var custMonth = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var d1 = $('.fromDate').val();
    var d2 = $('.toDate').val();
    var fromDate = $('.fromDate').val().split('/');
    var toDate = $('.toDate').val().split('/');

    var diffMonth = monthDiff(
        new Date(fromDate[2], fromDate[0], fromDate[1]),
        new Date(toDate[2], toDate[0], toDate[1])
    );

    var startMonth = parseInt(fromDate[0]) - 1;
    var startYear = parseInt(fromDate[2]);

    if (diffMonth == 0) {
        diffMonth = -1;
    }

    for (var i = 0; i < diffMonth + 2; i++) {

        $('.reportTable tr').each(function () {
            var trow = $(this);
            if (trow.index() === 0) {
                trow.append('<td>' + custMonth[parseInt(startMonth)] + ' ' + startYear + '</td>');
            }
            if (trow.index() === 1) {
                trow.append('<td>' + Math.floor(Math.random() * 100) + '</td>');
            }
            if (trow.index() === 2) {
                trow.append('<td>' + Math.floor(Math.random() * 100) + '</td>');
            }
            if (trow.index() === 3) {
                trow.append('<td>25</td>');
            }
            if (trow.index() === 4) {
                trow.append('<td>53</td>');
            }
            if (trow.index() === 5) {
                trow.append('<td>40</td>');
            }
        });
        if (startMonth >= 11) {
            startMonth = 0;
            startYear++;
        }
        else {
            startMonth++;
        }
    }
}



$(document).ready(function () {



    $('.biaStatus').on('click', function () {
        var biaStatus = $(this).children('a').html();
        var dname = $(this).siblings('.dname').html();
        $('.biaPendingTeble .biaPendingBody tr').each(function () {
            if ($(this).children('.asses_unit').html() != dname) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });

        $('.submit_btn ,.save_btn, .approve_btn ,.recheck_btn, .cancel_btn').hide();

        if (biaStatus == 'Initiate' || biaStatus == 'ReCheck') {
            $('.submit_btn ,.save_btn, .cancel_btn').show();
        } else if (biaStatus == 'Reviewed') {
            $('.cancel_btn').show();
        }
        else {
            $('.approve_btn ,.recheck_btn, .cancel_btn').show();
        }
    });


    $('.addNewRowYes').on('click', function () {
        if ($('.processActivityInput').val() == "") {
            $('.processActivityInput').next().show();
        }
        if ($('.processActivityDescInput').val() == "") {
            $('.processActivityDescInput').next().show();
        }
        else {

            var processActivityInput = $('#addNewRowModel .processActivityInput').val();
            var processActivityDescInput = $('#addNewRowModel .processActivityDescInput').val();
            console.log(processActivityInput, processActivityDescInput)

            $('.biaPendingTeble .biaPendingBody').prepend(`
            <tr class="table-success">
            <td style="text-align: -webkit-center;">
                <input type="checkbox" class="form-input-styled" data-fouc>
            </td>
            <td>1</td>
            <td><select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt2">NCP-I, Airoli</option>
                    <option value="opt3">NCP-II,Hyderabad</option>
                    <option value="opt4">Axis House, Worli</option>
                    <option value="opt5">Axis House, Noida</option>
                    <option value="opt6">NPC-Kolkata</option>
                    <option value="opt7">Dahisar Branch</option>
                    <option value="opt8">Fort Branch</option>
                </select></td>
            <td>
                <select class="form-control multiselect" multiple="multiple" data-fouc>
                    <option value="opt22">NCP-I, Airoli</option>
                    <option value="opt33">NCP-II,Hyderabad</option>
                    <option value="opt44">Axis House, Worli</option>
                    <option value="opt55">Axis House, Noida</option>
                    <option value="opt66">NPC-Kolkata</option>
                    <option value="opt77">Dahisar Branch</option>
                    <option value="opt88">Fort Branch</option>
                </select>
            </td>
            <td>Retail Liabilities</td>
            <td>CLH</td>
            <td>`+ processActivityInput + `</td>
            <td>`+ processActivityDescInput + `</td>
            <td><input type="text" style="text-align: center;" min=0 max=5 class="form-control"
                    oninput=RestrictMinMax(this)></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><input type="text" style="text-align: center;" min=0 max=5 class="form-control"
                    oninput=RestrictMinMax(this)></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="Automated">Automated</option>
                    <option value="Manual">Manual</option>
                    <option value="Partially Automated">Partially Automated</option>
                </select></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Daily</option>
                    <option value="opt4">Weekly</option>
                    <option value="opt4">Fortnightly</option>
                    <option value="opt4">Monthly</option>
                    <option value="opt4">Annual</option>
                    <option value="opt4">Beginning of Month</option>
                    <option value="opt4">End of Month</option>
                </select>
            </td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><input type="text" style="text-align: center;" min=0 max=999999999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Paper documents</option>
                    <option value="opt4">Electronic documents</option>
                    <option value="opt4">Information field</option>
                    <option value="opt4">Specific application/Workflows used for receiving the input </option>

                </select>
            </td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Paper documents</option>
                    <option value="opt4">Electronic documents</option>
                    <option value="opt4">Information field</option>
                    <option value="opt4">Specific application/Workflows used for receiving the input </option>

                </select>
            </td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Daily</option>
                    <option value="opt4">Weekly</option>
                    <option value="opt4">Fortnightly</option>
                    <option value="opt4">Monthly</option>
                    <option value="opt4">Annual</option>
                    <option value="opt4">Beginning of Month</option>
                    <option value="opt4">End of Month</option>
                </select>
            </td>
            <td>No</td>
            <td>
                <select class="form-control multiselect-full-featured " multiple="multiple" data-fouc name="itrm_select" required>
                    <option value="External Auditor">External Auditor</option>
                    <option value="Statutory Auditor">Statutory Auditor</option>
                    <option value="Seven S Banking Pvt.Ltd">Seven S Banking Pvt.Ltd</option>
                    <option value="Eronet Servies India Pvt.Ltd">Eronet Servies India Pvt.Ltd</option>
                    <option value="ISG-Mumbai,India">ISG-Mumbai,India</option>
                    <option value="Experian">Experian</option>
                    <option value="Deloitte, Aujas">Deloitte, Aujas</option>
                </select>
            </td>
            <td>
                <select class="form-control multiselect-full-featured " multiple="multiple" data-fouc name="itrm_select" required>
                    <option value="Merchant Risk Spplication">Merchant Risk Spplication</option>
                    <option value="Hunter">Hunter</option>
                    <option value="Change Assessments">Change Assessments</option>
                </select>
            </td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Yes</option>
                    <option value="opt4">No</option>
                </select>
            </td>
            <td><textarea class="form-control"
                    style="text-align: center; overflow: hidden;"></textarea></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td>
                <select name="select" class="form-control form-input-styled" data-fouc="">
                    <option default hidden>Select an Option</option>
                    <option value="opt3">Onsite</option>
                    <option value="opt4">Offsite</option>
                </select>
            </td>
            <td><input type="text" style="text-align: center;" min=0 max=999999999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td><input type="text" style="text-align: center;" min=0 max=9999
                    class="form-control" oninput=RestrictMinMax(this)></td>
            <td>
                <select class="form-control multiselect-full-featured " multiple="multiple" data-fouc name="itrm_select" required>
                    <option value="TUFS Portal Finacle">TUFS Portal Finacle</option>
                    <option value="Finacle CRISMAC">Finacle CRISMAC</option>
                    <option value="Finacle CBO Datamart & Analytics">Finacle CBO Datamart & Analytics</option>
                    <option value="Insta Circulars">Insta Circulars</option>
                    <option value="Finacle Data Ethics software intellecte">Finacle Data Ethics software intellecte</option>
                    <option value="CGTMSE Portal Finacle">CGTMSE Portal Finacle</option>

                </select>
            </td>
            <td class="criticality_filter"></td>
            <td></td>
            <td>
                <div class="list-icons">
                    <a class="list-icons-item" href="JavaScript:void(0);">
                        <i class="icon-comments icon-1x text-primary" style="pointer-events: all;" data-toggle="modal" data-target="#modal_large1" data-popup="tooltip" title="Comment" data-placement="right"></i>
                    </a>
                    <a class="list-icons-item" href="JavaScript:void(0);">
                        <i class="icon-undo2 fa-2x undoActivity" style="pointer-events: all;color:black" data-popup="tooltip" title="Undo" data-placement="right" data-toggle="modal" data-target="#undo_modal"></i>
                    </a>
                    <a class="list-icons-item">
                        <i class="icon-pencil7 icon-1x" data-popup="tooltip" title="Change Critiaclity" data-placement="right" data-toggle="modal" data-target="#change_critiaclity_modal"></i>
                    </a>
                </div>
            </td>
        </tr>
          `);

            //for reinitializing plugin styles
            $('.biaPendingTeble .biaPendingBody tr:first .multiselect').multiselect();
            $('.biaPendingTeble .biaPendingBody tr:first .multiselect-full-featured').multiselect({
                includeSelectAllOption: true,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true
            });

            $('.biaPendingTeble .biaPendingBody tr:first select').uniform();
            $('.biaPendingTeble .biaPendingBody tr:first [type=checkbox]').uniform();
            $('.biaPendingTeble .biaPendingBody tr:first [type=checkbox]').uniform();
            $('.biaPendingTeble .biaPendingBody tr:first .icon-comments').tooltip();
            $('.biaPendingTeble .biaPendingBody tr:first .icon-pencil7').tooltip();

            //add sr no in assending order
            $('.biaPendingTeble .biaPendingBody tr td:nth-child(2)').each(function (index) {
                $(this).html(index + 1);
            });

            $('#addNewRowModel .processActivityInput').val("");
            $('#addNewRowModel .processActivityDescInput').val("");

            $('#addNewRowModel').modal('hide');

        }

    });
    $('.processActivityInput, .processActivityDescInput').blur(function () {
        if ($(this).val() == "") {
            $(this).next().show();
        }
        else {
            $(this).next().hide();
        }
    });

    $('.addRow').on('click', function () {
        $('.mainDiv').append(`<div class="form-group row subDiv">
        <div class="col-lg-3">
            <label class="col-form-label">First Name<span class="text-danger">*</span></label>
            <input type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <label class="col-form-label">Date<span class="text-danger">*</span></label>
            <input type="text" class="form-control pickadate-selectors" placeholder="">
        </div>
        <div class="col-lg-3">
            <label class="col-form-label">Description<span class="text-danger">*</span></label>
            <textarea rows="2" cols="2" class="form-control"></textarea>
        </div>
        <div class="col-lg-3" style="text-align: center;">
            <i class="icon-close2 mr-3 icon-1x closeRow"></i>
        </div>
    </div>`);
    });

    $(document).on('click', '.closeRow', function () {
        $(this).closest('.subDiv').remove();
    });
    $('.arrow-toggle').on('click', function () {
        $(".icon-arrow-left5").toggleClass('icon-rotate');
    });
    $('.checkinput1').on('click', function () {
        if (!($(this).parents('span').hasClass('checked'))) {
            $('.checkinput input').parent().addClass('checked');
        } else {
            $('.checkinput input').parent().removeClass('checked');
        }
    });

    $(document).on('click', '.biaPendingCheckbox', function () {
        if (!($(this).parents('span').hasClass('checked'))) {
            $('.biaPendingTeble .biaPendingBody input').parent().addClass('checked');
        } else {
            $('.biaPendingTeble .biaPendingBody input').parent().removeClass('checked');
        }
    });

    $(".deletebutton").on('click', function () {
        $('.checkinput .checked').parents('tr').hide();
    })

    //   $(".deletebutton").on('click', function() {
    //     $('.checkinput .checked').parents('tr').hide();
    //   });
    $(document).on('click', '.biaDeletebutton', function () {
        $('.biaPendingTeble .biaPendingBody .checked').parents('tr').addClass('table-danger hide-pointer');
$('.table-danger').children().find('.undoActivity').css('display', 'inline-block');
        // $('.biaPendingTeble .biaPendingBody .checked').parents('tr').find('.undoActivity').show();
        $('.biaPendingTeble .biaPendingBody .checked').removeClass('checked');
        //add sr no in assending order
        $('.biaPendingTeble .biaPendingBody tr td:nth-child(2)').each(function (index) {
            $(this).html(index + 1);
        });
    });


    $(document).on('click', '.newRow', function () {
        $('#myTable').append(`<tr>
        <td class="checkinput"><div class="uniform-checker"><span><input type="checkbox" class="form-input-styled" data-fouc=""></span></div></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        </tr>`);
    })
    $(document).on('click', '.checkinput input', function () {
        $(this).parent().addClass('checked');
    });
    jQuery(function () {
        // remove the below comment in case you need chnage on document ready
        // location.href=jQuery("#selectbox").val();
        jQuery("#selectbox").change(function () {
            location.href = jQuery(this).val();
        })
    })

    $(document).on('click', '.undoActivity', function () {
        $('.undoActivity').removeClass('selected_for_undo');
        $(this).addClass('selected_for_undo');
    })

    $("#business").hide();
    $('#selectbox2').change(function () {
        $('#selectbox3').prop('selectedIndex', 0);
        if ($(this).val() == 'Issue_Tracker') {
            $("#business").show();
        }
        else {
            $("#business").hide();
        }
    });
    $("#textBox").hide();
    $('#selectbox4').change(function () {
        if ($(this).val() == 'other-text') {
            $("#textBox").show();
        }
        else {
            $("#textBox").hide();
        }
    });
    $("#textBox1").hide();
    $('#selectbox5').change(function () {
        if ($(this).val() == 'other-text') {
            $("#textBox1").show();
        }
        else {
            $("#textBox1").hide();
        }
    });
});


function showteam(e) {
    if (e.value == 'f') {
        $('#selectTeam').show()
    }
    else {
        $('#selectTeam').css('display', 'none');
    }
}

// QMS


var deptType ='';
var periodType = '';
var periodArr = ["Daily","Weekly","Fortnightly","Monthly","Quaterly","Year to Date"]
var SubforFlag1_orFlag2 = '';
var receivedDateFlag1_orFlag2 = '';
$(document).ready(function () {
  setTimeout(function(){ nextTr($('#table tbody tr:eq(0)'));}, 100);
    var maxLength = 300;
	$(".show-read-more").each(function(){
		var myStr = $(this).text();
		if($.trim(myStr).length > maxLength){
			var newStr = myStr.substring(0, maxLength);
			var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
			$(this).empty().html(newStr);
			$(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	$(".read-more").click(function(){
		$(this).siblings(".more-text").contents().unwrap();
		$(this).remove();
    });


    deptType= localStorage.getItem('deptType');
    periodType= localStorage.getItem('period');
    SubforFlag1_orFlag2 = localStorage.getItem('SubforFlag1_orFlag2');
    receivedDateFlag1_orFlag2 = localStorage.getItem('receivedDateFlag1_orFlag2');
    var $table = $('#table');
    var subject = localStorage.getItem('subJect');
    var date = localStorage.getItem('DaTe');
    var mydata =
        [
         {
            "id": "1",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            // "message": subject,
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left'></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#initiateQuery_model'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": date,
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Indents Due today",
            "readFlag":"N"
        },
        {
            "id": "2",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Joey",
            "message": SubforFlag1_orFlag2 ,
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#initiateRequirment_model'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": receivedDateFlag1_orFlag2,
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Indents Responded",
            "readFlag":"N"
        },
        {
            "id": "3",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"Y"
        },
        {
            "id": "4",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "5",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            // "message": subject,
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#initiateRequirment_model'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": date,
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Indents Due today",
            "readFlag":"N"
        },
        {
            "id": "6",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "7",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "8",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "9",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "10",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        {
            "id": "11",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Ross",
            "message": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='add_requirement.html' class='dropdown-item'><i class='icon-add icon-1x' data-toggle='tooltip' title='Add Requirement' data-placement='top'></i>Add Requirement</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i>Compose For Regulator</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#setEscalation_modal'><i class='fas fa-asterisk fa-1x' data-toggle='tooltip' title='Escalation'></i>Escalation</a><a href='#' class='dropdown-item'><i class='icon-mail-read icon-1x' data-toggle='tooltip' title='Reopen'></i>Reopen</a></div></div></div>",
            "timestamp": "2020-19-02 02:34:42",
            "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
            "type":"Top Drivers",
            "readFlag":"N"
        },
        // {
        //     "id": "4",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Phoebe",
        //     "message": "On Tower-hill, as you go down ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_modal' data-toggle='tooltip'title='' data-placement='right' data-original-title='View mail'></i></div>",
        //     "timestamp": "2019-19-11 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Responded"
        // },
        // {
        //     "id": "5",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Due today"
        // },
        // {
        //     "id": "6",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Ellen",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2020-01-03 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Top Drivers"
        // },
        // {
        //     "id": "7",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Due today"
        // },
        // {
        //     "id": "8",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Zoe",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2020-29-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Responded"
        // },
        // {
        //     "id": "9",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Responded"
        // },
        // {
        //     "id": "10",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Ellen",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Top Drivers"
        // },
        // {
        //     "id": "11",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Due today"
        // },
        // {
        //     "id": "12",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Ellen",
        //     "message": "On Tower-hill, as you go down ",
        //     "attachmentIcon": "<a></a><i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2020-29-02 03:30:00",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Responded"
        // },
        // {
        //     "id": "13",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Top Drivers"
        // },
        // {
        //     "id": "14",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Received"
        // },
        // {
        //     "id": "15",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model'  data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Received"
        // },
        // {
        //     "id": "16",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Received"
        // },
        // {
        //     "id": "17",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Received"
        // },
        // {
        //     "id": "18",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Overdue"
        // },
        // {
        //     "id": "19",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Overdue"
        // },
        // {
        //     "id": "20",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Overdue"
        // },
        // {
        //     "id": "21",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Indents Overdue"
        // }
        // ,
        // {
        //     "id": "22",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Oldest Indents Pending"
        // },
        // {
        //     "id": "23",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Oldest Indents Pending"
        // },
        // {
        //     "id": "24",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-20-02 02:34:42",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Oldest Indents Pending"
        // },
        // {
        //     "id": "25",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Rachel",
        //     "message": "On Tower-hill, as you go down  - ",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip' title='Tag Mail' data-placement='left'></i><a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='Add Requirement' data-placement='top'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip' title='Compose For Regulator' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_model'></i></div>",
        //     "timestamp": "2019-25-03 11:42:35",
        //     "downIcon": "<i class='icon-arrow-down15 icon-1x getChildMails arrow-down15-size'>",
        //     "type":"Oldest Indents Pending"
        // }
    ];
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+dd+'-'+mm;
    console.log(today);
    // today = mm+'/'+dd+'/'+yyyy;
    // console.log(today);
    // today = dd+'-'+mm+'-'+yyyy;
    // console.log(today);
    // today = dd+'/'+mm+'/'+yyyy;
    // console.log(today);
    // console.log (currentDate);
    // var arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    // var dateForfortnight = currentDate;
    // var fortnightYear = dateForfortnight.getFullYear();
    // var fortnightMonth = dateForfortnight.getMonth();
    // var fortnightDay = dateForfortnight.getDate();
    // if (fortnightDay >= 16) {
    //     var fortnightLastDay = new Date(fortnightYear, fortnightMonth + 1, 0);
    //     fortnightFirstDayDisplay = '16' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
    //     fortnightLastDateDisplay = fortnightLastDay.getDate() + ' ' + arrMonth[(fortnightLastDay.getMonth() + 1) - 1] + ' ' + fortnightLastDay.getFullYear();
    //     var prevfirstDayFortnight = '1' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
    //     var prevlastDayFortnight = '15' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
    //     // var prefortnightly = prevfirstDayFortnight + ' to ' +  prevlastDayFortnight;
    //     $(".previousFortnightly").html(prevfirstDayFortnight + ' to ' +  prevlastDayFortnight);
    //     $(".currentFortnightly").html(fortnightFirstDayDisplay  + ' to ' + fortnightLastDateDisplay);

    // }

    // else {
    //     var prevfirstDayFortnight = '1' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
    //     var prevlastDayFortnight = '15' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
    //     var fortnightLastDay = new Date(fortnightYear, fortnightMonth, 0);
    //     fortnightFirstDayDisplay = '16' + ' ' + arrMonth[fortnightMonth - 1] + ' ' + fortnightYear;
    //     fortnightLastDateDisplay = fortnightLastDay.getDate() + ' ' + arrMonth[(fortnightLastDay.getMonth() + 1) - 1] + ' ' + fortnightLastDay.getFullYear();
    //     console.log('fortnightLastDaysrgtsdr', prevfirstDayFortnight, prevlastDayFortnight);
    //     $(".currentFortnightly").html(prevfirstDayFortnight + ' to ' +  prevlastDayFortnight);
    //     $(".previousFortnightly").html(fortnightFirstDayDisplay  + ' to ' + fortnightLastDateDisplay);
    // }
    // for (var i=0 ; i< mydata.length; i++) {
    //   var x= mydata[i].timestamp.split(" ")[0]
    // console.log(x)}
    //   console.log(x);    
    // var deptType = localStorage.getItem('deptType');
    // var period = localStorage.getItem('period');
    for(var i=0; i<periodArr.length; i++) {
    if(periodType == periodArr[i]){
       pType = periodArr[i];
       console.log(pType)
       pType = today
        console.log(pType);
    }
}
//   pType = new Date();
//   console.log(pType)
    if(deptType == null || periodType == null) {
        
        $('#table').bootstrapTable({
            data: mydata
        });
        var classes = ["table"];
    $('#table').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });
    }
    else {
        var newArray = [];
        for(var i=0;i<mydata.length;i++){
            if(mydata[i].type == deptType){
                // console.log(mydata[i].type);
                // delete mydata[i];
                newArray.push(mydata[i]);
            }
        }
    
        $('#table').bootstrapTable({
            data: newArray
        });
        $('#table').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });

        localStorage.removeItem('deptType');
        localStorage.removeItem('period')
    }

    $('[data-toggle="tooltip"]').tooltip();

    $(document).on('click',".star",function () {
        $(this).toggleClass('icon-star-empty3');
        $(this).toggleClass('icon-star-full2');
        $(this).toggleClass('starColor');
    });
    $(document).on('click','.tag',function () {
        $(this).toggleClass('icon-price-tag2');
        $(this).toggleClass('icon-price-tag3');
    });

    $(document).on('click', '.checkingBox', function () {
        $(this).parent().toggleClass('checked');
    });

    $(document).on('click', '.checkered', function () {
        if (!($(this).parents('span').hasClass('checked'))) {
            $('.inboxTable .uniform-checker input').parent().addClass('checked');
        } else {
            $('.inboxTable .uniform-checker input').parent().removeClass('checked');
        }
    });
    

    $(document).on('click','#table tbody tr .getChildMails', function () {

        var currRow = $(this).parents('tr');
        var currIndex = $(this).parents('tr').attr('data-index');
        var custSpace = currRow.find('td:first .hiddenDiv').css('width');

        if(custSpace) {
            custSpace = parseInt(custSpace.split('px')[0]);
            if(currRow.hasClass('childMail')) {
                custSpace += 5;
            }
        }
        else {
            custSpace = 5;
        }


    if(currRow.next('tr').attr('data-index') == currIndex + 1){ // already node open
        currRow.nextAll('tr').each(function() {
            if($(this).attr('data-index') >= currIndex + 1 && $(this).hasClass('childMail') || $(this).hasClass('childMailchild')){
                console.log('if')
                $(this).remove();
            }
            else {
                console.log('else')
                return false;
            }
        });
        $(this).toggleClass('custRotate');
    }
    else {

        $(this).toggleClass('custRotate');

    var testData =
    [
        {
            "id": "100",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            "message": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle=' tooltip'title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#addRequirement_model'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item'><i class='icon-reset icon-1x' data-toggle='modal' data-target='#modal_Recall' data-toggle='tooltip' title='Recall'></i>Recall</a></div></div></div>",
            "timestamp": "2020-29-02 03:30:00",
            "count": 2,
            "readFlag":"Y"
        },
        {
            "id": "101",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            "message": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle=' tooltip'title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#addRequirement_model'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a><a href='#' class='dropdown-item'><i class='icon-reset icon-1x' data-toggle='modal' data-target='#modal_Recall' data-toggle='tooltip' title='Recall'></i>Recall</a></div></div></div>",
            "timestamp": "2020-20-02 02:34:42",
            "count": 2,
            "readFlag":"Y"
        },
        // {
        //     "id": "102",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Chandler",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag'  data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_modal'></i></div>",
        //     "timestamp": "2020-22-02 03:30:00",
        //     "count": 0
        // },
        // {
        //     "id": "103",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Chandler",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_modal'></i></div>",
        //     "timestamp": "2020-20-02 02:34:42",
        //     "count": 2
        // }
    ];

    var listHtml = "";

    for(var i in testData) {
        listHtml +=
        `<tr class="childMail" data-index=${currIndex+1} style="border: 1px solid #e6e6e6;">
            <td class="custInline firstTD" style='max-width: 150px; border:none'>
                <div class='hiddenDiv' style='width: ${custSpace}px;'></div>
                <div class='circle'></div>
                <div class='line ${(testData[i].count) > 0 ? "" : "custHide" }'></div>
                <div><i class='icon-arrow-down15 icon-1x getChildMailsChild arrow-down15-size arrow-down15-position ${(testData[i].count) > 0 ? "" : "custHide" }'></i></div>
            </td>
            <td>${testData[i].name}</td>
            <td>${testData[i].message}</td>
            <td>${testData[i].timestamp}</td>
            <td class='text-center'>${testData[i].actions}</td>
            <td class='hidden'>${testData[i].readFlag}</td>
        </tr>`
      }
    //   <td>${testData[i].checkbox}</td>
    //   <td>${testData[i].star}</td>

    currRow.after(listHtml);

        // $('#testTable').bootstrapTable({
        //     data: testData
        // });

        $('[data-toggle="tooltip"]').tooltip();
    }

    });

    $(document).on('click','#table tbody tr .getChildMailsChild', function () {

        var currRow = $(this).parents('tr');
        var currIndex = $(this).parents('tr').attr('data-index');
        var custSpace = currRow.find('td:first .hiddenDiv').css('width');

        if(custSpace) {
            custSpace = parseInt(custSpace.split('px')[0]);
            if(currRow.hasClass('childMailchild')) {
                custSpace += 5;
            }
        }
        else {
            custSpace = 5;
        }
        $('#table tbody tr').each(function() {
            if($(this).find('td:last-child').html() === 'Y') {
                $(this).addClass('customfontstyle');

            } else {
                $(this).removeClass('customfontstyle');
            }
        });


    if(currRow.next('tr').attr('data-index') == currIndex + 1){ // already node open
        currRow.nextAll('tr').each(function() {
            if($(this).attr('data-index') >= currIndex + 1 && $(this).hasClass('childMailchild')){
                console.log('if')
                $(this).remove();
            }
            else {
                console.log('else')
                return false;
            }
        });
        $(this).toggleClass('custRotate');
    }
    else {

        $(this).toggleClass('custRotate');

    var testData1 =
    [
        {
            "id": "100",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            "message": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose' data-placement='right'></i>Compose</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle=' tooltip'title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a></div></div></div>",
            "timestamp": "2020-29-02 03:30:00",
            "count": 2,
            "readFlag":"Y"
        },
        // {
        //     "id": "101",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Chandler",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag' data-toggle='modal' data-target='#tagMail_modal' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip' title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#initiateQuery_model'></i></div>",
        //     "timestamp": "2020-20-02 02:34:42",
        //     "count": 2
        // },
        // {
        //     "id": "102",
        //     // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
        //     // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name": "Chandler",
        //     "message": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions": "<div class='list-icons'><i class='icon-price-tag3 icon-1x tag'  data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i> <a href='add_requirement.html'><i class='icon-add icon-1x' data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Requirement'></i></a> <i class='icon-pencil7 icon-1x' data-toggle='modal' data-target='#composeMail_modal' data-toggle='tooltip'title='Compose' data-placement='right'></i><i class='icon-cross icon-1x irrelevant-mail ' data-toggle='modal' data-target='#irrelevantMail_model' data-toggle='tooltip'title='Irrelevant mail' data-placement='right'></i><i class='icon-eye icon-1x' data-toggle='modal' data-target='#viewMail_modal'></i></div>",
        //     "timestamp": "2020-22-02 03:30:00",
        //     "count": 0
        // },
        {
            "id": "103",
            // "checkbox": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox' data-fouc=''></span></div>",
            // "star": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name": "Chandler",
            "message": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions": "<div class='list-icons'><div class='dropdown'><a href='#' class='list-icons-item' data-toggle='dropdown'><i class='icon-menu9'></i></a><div class='dropdown-menu dropdown-menu-right'><a href='#' class='dropdown-item' data-toggle='modal' data-target='#tagMail_modal'><i class='icon-price-tag3 icon-1x tag' data-toggle='tooltip'title='Tag Mail' data-placement='left' ></i>Tag Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#composeMail_modal'><i class='icon-pencil7 icon-1x' data-toggle='tooltip'title='Compose' data-placement='right'></i>Compose</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#irrelevantMail_model'><i class='icon-cross icon-1x irrelevant-mail ' data-toggle=' tooltip'title='Irrelevant mail' data-placement='right'></i>Irrelevant Mail</a><a href='#' class='dropdown-item' data-toggle='modal' data-target='#viewMail_modal'><i class='icon-eye icon-1x' data-tooltip='tooltip' title='View Mail' data-original-title='View Mail' data-placement='top'></i>View Mail</a></div></div></div>",
            "timestamp": "2020-20-02 02:34:42",
            "count": 2,
            "readFlag":"N"
        }
    ];

    var listHtml1 = "";

    for(var i in testData1) {
        listHtml1 +=
        `<tr class="childMailchild" data-index=${currIndex+1} style="border: 1px solid #e6e6e6;">
            <td class="custInline firstTD" style='max-width: 150px; border:none'>
                <div class='hiddenDiv' style='width: ${custSpace +5}px;'></div>
                <div class='circle'></div>
                <div class='line ${(testData1[i].count) > 0 ? "" : "custHide" }'></div>
                <div><i class='icon-arrow-down15 icon-1x getChildMailsChild arrow-down15-size arrow-down15-position ${(testData1[i].count) > 0 ? "" : "custHide" }'></i></div>
            </td>
            <td>${testData1[i].name}</td>
            <td>${testData1[i].message}</td>
            <td>${testData1[i].timestamp}</td>
            <td class='text-center'>${testData1[i].actions}</td>
            <td class='hidden'>${testData1[i].readFlag}</td>
        </tr>`
      }
    //   <td>${testData[i].checkbox}</td>
    //   <td>${testData[i].star}</td>

    currRow.after(listHtml1);

        // $('#testTable').bootstrapTable({
        //     data: testData
        // });

        $('[data-toggle="tooltip"]').tooltip();
    }
       $('#table tbody tr').each(function() {
            if($(this).find('td:last-child').html() === 'Y') {
                $(this).addClass('customfontstyle');

            } else {
                $(this).removeClass('customfontstyle');
            }
    });


    });
    $(document).on('click', '.irrelevant-mail', function(){
        $(this).mouseout();
        Glb_currRow = $(this).parents('tr');
        Glb_currIndex = $(this).parents('tr').attr('data-index');

        $('#forward-button').on('click',function(){
            deleteMail(Glb_currRow, Glb_currIndex);
        });
        

        

    });

    $(document).on('click', '.attachFile', function () {
        console.log('asyhdfsy1')
        $(this).next('.myFile').click();
    });
    
    $(document).on('change','input[type=file]',function (e) {
        console.log('asyhdfsy2');
        $(this).next('.customfileupload').html($(this).val());
    });

    // $(document).on('change','input[type=file]',function (e) {
        
    //     $(this).next('.customfileupload').html($(this).val());
    //     var fileName = e.target.files[0].name;
    //         alert('The file "' + fileName +  '" has been selected.');

    //     let fileName = $(this).val().split('\\').pop(); 
    //     $(this).next('.customfileupload').addClass("selected").html(fileName); 
    // });

    $("#fill_category").hide();
    $("#newFlag").hide();
    $('#select_flag').change(function () {
      if ( $(this).val() == 'OTHERS')
      {
        $("#newFlag").show();
      }
      else
      {
        $("#newFlag").hide();
      }
    });
    $('#select_category').change(function () {
        if ( $(this).val() == 'OTHERS')
        {
          $("#fill_category").show();
        }
        else
        {
          $("#fill_category").hide();
        }
      });
      $('.ForwardOption').hide();
      $('.showOptions').on('click', function () {
          $('.ForwardOption').show();
          $('.checkButton').hide();
      });
    //   $('#multiselect-full-featured_themequery').change(function () {
    //     if ( $(this).val() == 'otherthemequery' && $('.form-check .active'))
    //     {
    //       $("#myModalmultiselectDropdown_themequery").modal('show');
    //     }
    //     else
    //     {
    //       $("#myModalmultiselectDropdown_themequery").modal('hide');
    //     }
    //   });
    //   $('#multiselectDropdown_category').change(function () {
    //     if ( $(this).val() == 'other'&& $('.form-check .active'))
    //     {
    //       $("#myModalmultiselectDropdown_category").modal('show');
    //     }
    //     else
    //     {
    //       $("#myModalmultiselectDropdown_category").modal('hide');
    //     }
    //   });
    //   $('#multiselectDropdown_flag').change(function () {
    //     if ( $(this).val() == 'OTHERS'&& $('.form-check .active'))
    //     {
    //       $("#myModalmultiselectDropdown_flag").modal('show');
    //     }
    //     else
    //     {
    //       $("#myModalmultiselectDropdown_flag").modal('hide');
    //     }
    //   });
})
function deleteMail(currRow, currIndex) {
    if(currRow.next('tr').attr('data-index') == currIndex + 1){ // already node open
        currRow.nextAll('tr').each(function() {
            if($(this).attr('data-index') >= currIndex + 1 && $(this).hasClass('childMail')){
                console.log('if')
                $(this).remove();
            }
            else {
                console.log('else')
                return false;
            }
        });
        $(currRow).remove();
    }
    else {
        $(currRow).remove();
    }

}

function nextTr(currentTr) {
    console.log('inside nextTr')
    if(currentTr.is(":last-child")) {
        console.log('Last')
        return;
    }



    if(currentTr.find('td:last-child').html()=='Y') {
     console.log('if')
     currentTr.find('td:first-child .getChildMails').click();
        if(currentTr.hasClass('childMail')) {
            currentTr.find('td:first-child .getChildMailsChild').click();
        }    
    }
    nextTr(currentTr.next());
}


// nextTr($('#table tbody tr:eq(0)'));
