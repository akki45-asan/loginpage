/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config


	// Setup
	// ------------------------------

    // RTL version uses different config file
    if (document.dir == "rtl") {
		config.skin = 'default_rtl';
	    config.contentsLangDirection = 'rtl';
	    config.dialog_buttonsOrder = 'rtl';
	    config.language = 'ar';
	    config.defaultLanguage = 'en';
    }
    else {
		config.skin = 'default';
    }

    // Load content styles
	config.contentsCss = '../../../../global_assets/js/plugins/editors/ckeditor/skins/' + config.skin + '/contents.css';


	// Toolbar
	// ------------------------------

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		// { name: 'clipboard',   groups: [ 'clipboard', 'undo',] },
		// { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		// { name: 'links' },
		{ name: 'forms' },
		// { name: 'tools' },
		// { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		// { name: 'others' },
		// '/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup','list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'insert' },
		// { name: 'others' },
		// { name: 'paragraph',   groups: [  ] },
		{ name: 'styles' },
		{ name: 'colors' },
		// { name: 'about' }
	];
	// config.toolbar = [
	// 	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
	// 	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
	// 	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
	// 	{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
	// 	'/',
	// 	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup', 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
	// 	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
	// 	{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
	// 	{ name: 'insert', items: [ 'Table', 'HorizontalRule', 'SpecialChar' ] },
	// 	'/',
	// 	{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
	// 	{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
	// 	{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
	// 	{ name: 'others', items: [ '-' ] },
	// 	{ name: 'about', items: [ 'About' ] }
	// ];

	// Extra config
	// ------------------------------
	// config.extraPlugins = 'attach';
	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	// Allow content rules
	config.allowedContent = true;

	// Allow any class and any inline style
	config.extraAllowedContent = '*(*);*{*}';
};
