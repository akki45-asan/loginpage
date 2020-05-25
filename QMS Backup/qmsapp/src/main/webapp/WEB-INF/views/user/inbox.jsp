<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Axis Bank</title>

	<!-- Global stylesheets -->
	<link href="../global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
	<link href="../global_assets/css/icons/fontawesome/styles.min.css" rel="stylesheet" type="text/css">
	<link href="../global_assets/css/icons/material/styles.min.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/bootstrap_evo.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/layout.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/components.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/colors.min.css" rel="stylesheet" type="text/css">
	<link href="../assets/css/bootstrap-table.min.css" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="../global_assets/js/main/jquery.min.js"></script>
	<script src="../global_assets/js/main/bootstrap.bundle.min.js"></script>
	<script src="../global_assets/js/plugins/loaders/blockui.min.js"></script>
	<!-- /core JS files -->
	<script src="../global_assets/js/plugins/extensions/jquery_ui/interactions.min.js"></script>
    <script src="../global_assets/js/plugins/forms/selects/select2.min.js"></script>

	<!-- Theme JS files -->
	<script src="../assets/js/app.js"></script>
	<script src="../global_assets/js/plugins/forms/styling/uniform.min.js"></script>
	<script src="../global_assets/js/demo_pages/form_checkboxes_radios.js"></script>
	<script src="../assets/js/bootstrap-table.min.js"></script>
	<script src="../global_assets/js/plugins/forms/wizards/steps.min.js"></script>
	<script src="../global_assets/js/demo_pages/form_wizard.js"></script>
	<script src="../global_assets/js/plugins/ui/moment/moment.min.js"></script>
	<script src="../global_assets/js/plugins/pickers/daterangepicker.js"></script>
	<script src="../global_assets/js/plugins/pickers/pickadate/picker.js"></script>
	<script src="../global_assets/js/plugins/pickers/pickadate/picker.date.js"></script>
	<script src="../global_assets/js/plugins/pickers/pickadate/legacy.js"></script>
	<script src="../global_assets/js/demo_pages/picker_date.js"></script>
	<script src="../global_assets/js/demo_pages/form_multiselect.js"></script>
	<script src="../global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
	
	<!-- /theme JS files -->
  <!-- for composer -->
  <script src="../global_assets/js/plugins/editors/summernote/summernote.min.js"></script>
  <script src="../global_assets/js/demo_pages/editor_summernote.js"></script>

  <script src="../global_assets/js/demo_pages/mail_list_write.js"></script>

  <script src="../global_assets/js/demo_pages/form_select2.js"></script>
</head>

<body>

	<!-- Main navbar -->
	<div class="navbar-expand-md">
		<div class="">
			<a href="index.html" class="">
				<img src="../global_assets/images/AxisBand (2).png" alt="" style="width: 100%; height: 65px;">
			</a>
		</div>
	</div>
	<!-- /main navbar -->


	<!-- Page header -->
	<div class="page-header">
		<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
			<div class="d-flex">
				<div class="breadcrumb">
					<span class="breadcrumb-item">Manage Mail</span>
					<span class="breadcrumb-item active" style="margin-right: 2rem;">Inbox</span>
				</div>

				<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
				<div class="navbar-expand-md">
					<div class="d-md-none">
						<button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
							<i class="icon-paragraph-justify3"></i>
						</button>
					</div>
				</div>
			</div>

			<div class="header-elements d-none">
				<div class="breadcrumb-elements-item dropdown p-0">
					<a href="#" class="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
						<img src="../global_assets/images/placeholders/placeholder.jpg"
							class="rounded-circle mr-2" height="20" alt="">
						<span>Jay</span>
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="myProfile.html" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item" style="color: #97144d;">Last Successful Login: 2020-01-30
							13:14:37</a>
						<a href="#" class="dropdown-item" style="color: #97144d;">Last Failed Login: 2020-02-03
							16:37:15</a>
					</div>
				</div>
				<!-- <div class="breadcrumb justify-content-center">
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
							<i class="icon-bell2"></i>
							<span class="badge badge-pill badge-mark border-orange-400 ml-auto ml-md-0"></span>
							<span class="d-md-none ml-2">Activity</span>

						</a>

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
							<div class="dropdown-content-header">
								<span class="font-weight-semibold">Latest activity</span>
								<a href="#" class="text-default"><i class="icon-search4 font-size-base"></i></a>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list">
									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-success-400 rounded-round btn-icon"><i
													class="icon-mention"></i></a>
										</div>

										<div class="media-body">
											<a href="#">Taylor Swift</a> mentioned you in a post "Angular JS. Tips and
											tricks"
											<div class="font-size-sm text-muted mt-1">4 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-pink-400 rounded-round btn-icon"><i
													class="icon-paperplane"></i></a>
										</div>

										<div class="media-body">
											Special offers have been sent to subscribed users by <a href="#">Donna
												Gordon</a>
											<div class="font-size-sm text-muted mt-1">36 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-blue rounded-round btn-icon"><i
													class="icon-plus3"></i></a>
										</div>

										<div class="media-body">
											<a href="#">Chris Arney</a> created a new <span
												class="font-weight-semibold">Design</span> branch in <span
												class="font-weight-semibold">XYZ</span> repository
											<div class="font-size-sm text-muted mt-1">2 hours ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-purple-300 rounded-round btn-icon"><i
													class="icon-truck"></i></a>
										</div>

										<div class="media-body">
											Shipping cost to the Netherlands has been reduced, database updated
											<div class="font-size-sm text-muted mt-1">Feb 8, 11:30</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-warning-400 rounded-round btn-icon"><i
													class="icon-comment"></i></a>
										</div>

										<div class="media-body">
											New review received on <a href="#">Server side integration</a> services
											<div class="font-size-sm text-muted mt-1">Feb 2, 10:20</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-teal-400 rounded-round btn-icon"><i
													class="icon-spinner11"></i></a>
										</div>

										<div class="media-body">
											<strong>January, 2018</strong> - 1320 new users, 3284 orders, $49,390
											revenue
											<div class="font-size-sm text-muted mt-1">Feb 1, 05:46</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="dropdown-content-footer bg-light">
								<a href="#" class="text-grey mr-auto">All activity</a>
								<div>
									<a href="#" class="text-grey" data-popup="tooltip" title="Clear list"><i
											class="icon-checkmark3"></i></a>
									<a href="#" class="text-grey ml-2" data-popup="tooltip" title="Settings"><i
											class="icon-gear"></i></a>
								</div>
							</div>
						</div>
					</li>
				</div> -->
				<div class="breadcrumb-elements-item">
					<a href="#" class=""><i class="icon-switch2" data-popup="tooltip" title="Logout"></i></a>
				</div>
			</div>
		</div>
	</div>
	<!-- /page header -->


	<!-- Page content -->
	<div class="page-content pt-0">

		<!-- Main sidebar -->
		<div class="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start">

			<!-- Sidebar mobile toggler -->
			<div class="sidebar-mobile-toggler text-center">
				<a href="#" class="sidebar-mobile-main-toggle">
					<i class="icon-arrow-left8"></i>
				</a>
				<span class="font-weight-semibold">Main sidebar</span>
				<a href="#" class="sidebar-mobile-expand">
					<i class="icon-screen-full"></i>
					<i class="icon-screen-normal"></i>
				</a>
			</div>
			<!-- /sidebar mobile toggler -->


			<!-- Sidebar content -->
			<div class="sidebar-content">

				<!-- User menu -->
				<div class="sidebar-user-material">
					<div class="sidebar-user-material-body card-img-top">
						<div class="card-body text-center">
							<a href="#">
								<img src="../global_assets/images/placeholders/placeholder.jpg"
									class="img-fluid rounded-circle shadow-2 mb-3" width="80" height="80" alt="">
							</a>
							<h6 class="mb-0 text-white text-shadow-dark">Jay Nadar</h6>
							<span class="font-size-sm text-white text-shadow-dark">RBI Compliance</span>
						</div>

						<!-- <div class="sidebar-user-material-footer">
							<a href="#user-nav" class="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle" data-toggle="collapse"><span>My account</span></a>
						</div> -->
					</div>


				</div>
				<!-- /user menu -->


				<!-- Navigation -->
				<div class="card card-sidebar-mobile">

					<div class="card-body p-0">
						<ul class="nav nav-sidebar" data-nav-type="accordion">

							<!-- Main -->
							<li class="nav-item">
								<a href="/qmsapp/dashboardcontroller/index" class="nav-link">
									<i class="icon-home4"></i>
									<span>
										Dashboard
									</span>
								</a>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-mail5"></i> <span>Manage
										Mail</span></a>
								<ul class="nav nav-group-sub" data-submenu-title="Manage Process">
									<li class="nav-item">
										<a href="inbox.html" class="nav-link">
											<i class="fas fa-inbox fainboxSize"></i>
											<span>Inbox (6)</span>
										</a>
									</li>
									<!-- <li class="nav-item">
										<a href="#" class="nav-link">
											<i class="icon-list-unordered"></i>
											<span>Sent</span>
										</a>
									</li> -->
									<li class="nav-item">
										<a href="irrelevant_Mail.html" class="nav-link">
											<i class="mi-delete-sweep"></i>
											<span>Irrelevant Mail (10)</span></a>
									</li>
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-gear"></i>
									<span>Settings</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Settings">
									<li class="nav-item">
										<a href="manage_department.html" class="nav-link"><i
												class="icon-list-unordered"></i><span>Manage Department</span></a>
									</li>
									<li class="nav-item">
										<a href="manage_mail.html" class="nav-link"><i
												class="icon-list-unordered"></i><span>Manage Emailers</span></a>
									</li>
								</ul>
							</li>
							<li class="nav-item ">
								<a href="reports.html" class="nav-link"><i class="icon-clipboard3"></i>
									<span>Reports</span></a>
							</li>
							<!-- /main -->
						</ul>
					</div>
				</div>
				<!-- /navigation -->

			</div>
			<!-- /sidebar content -->

		</div>
		<div class="row">
			<div class="col toggle-icon">
				<a href="#" class="sidebar-control sidebar-main-toggle d-none d-md-block arrow-toggle"
					style="margin-top: 225px;">
					<i class="icon-arrow-left5 icon-2x toggle-iconBg"></i>
				</a>
			</div>
		</div>
		<!-- /main sidebar -->

		<!-- Main content -->
		<div class="content-wrapper">
			<!-- Content area -->
			<div class="content">
				<div class="card">
					<div class="card-header header-elements-inline">
						<h5 class="card-title">Inbox</h5>
						<div class="header-elements">
							<div class="list-icons">
								<a class="list-icons-item" data-toggle="modal" data-target="#setFlag_modal"><i class="icon-file-plus2"  data-toggle='tooltip' title='Initiate Requirement' data-placement='left' style="font-size: 20px;"></i></a>
		                		<a class="list-icons-item" href="initiate_queryWith_rbi.html"><i class="icon-file-text3" style="font-size: 20px;" data-toggle='tooltip' title='Initiate Query With RBI' data-placement='left'></i></a>
		                	</div>
	                	</div>
					</div>
					<div class="card-header row">
						<div class="form-group col-lg-2">
							<label class="mb-0">Date</label>
							<!-- <input type="text" class="form-control" id="rangeDemoStart" placeholder="Start date"> -->
							<input type="text" class="form-control daterange-basic" aria-haspopup="true" aria-expanded="false" aria-readonly="false" aria-owns="P1190267321_root">
						</div>
						<div class="col-lg-3">
							<div class="form-group">
								<label></label>
								<div class="input-group">
									<select class="form-control multiselect" multiple="multiple" data-fouc>
										<option value="Confidential">Confidential</option>
										<option value="Internal">Internal</option>
										<option value="Critical">Critical</option>
										<option value="NeedsAttention">Needs Attention</option>
										<option value="OtherFlag">Other Flag</option>
										<option value="RAR">RAR</option>
										<option value="Tranche">Tranche</option>
										<option value="SCRUTINY/GENERAL">SCRUTINY/GENERAL</option>
										<option value="Othercategory">Other category</option>
										<option value="Query1">Query 1</option>
										<option value="Query2">Query 2</option>
										<option value="QueryOther">Query Other</option>
										<option value="Theme1">Theme 1</option>
										<option value="Theme2">Theme 2</option>
										<option value="Othertheme">Other Theme</option>
										<option value=""></option>
									</select>
									<div class="input-group-prepend">
										<button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">Action</button>
                                        <div class="dropdown-menu">
											<!-- <a href="#" class="dropdown-item">Flag</a>
											<a href="#" class="dropdown-item">Another action</a>
											<a href="#" class="dropdown-item">Something else here</a>
											<div class="dropdown-divider"></div> -->
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Flag</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">Confidential</a>
														<a href="#" class="dropdown-item">Internal</a>
														<!-- <div class="dropdown-menu"> -->
															<a href="#" class="dropdown-item">Critical</a>
															<a href="#" class="dropdown-item">Needs Attention</a>
															<a href="#" class="dropdown-item">Important</a>
														<!-- </div> -->
														<div class="dropdown-submenu dropup">										<a href="#" class="dropdown-item dropdown-toggle">Other</a>
															<div class="dropdown-menu">
																<a href="#" class="dropdown-item">Other flag 1</a>
																<a href="#" class="dropdown-item">Other flag 2</a>
																<a href="#" class="dropdown-item">Other flag 3</a>
															</div>
														</div>
												</div>
											</div>
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Category</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">RAR</a>
														<a href="#" class="dropdown-item">Tranche</a>
														<!-- <div class="dropdown-menu"> -->
															<a href="#" class="dropdown-item">SCRUTINY/GENERAL</a>
															<div class="dropdown-submenu dropup">
															<a href="#" class="dropdown-item">Other</a>
															<div class="dropdown-menu">
																<a href="#" class="dropdown-item">Other category 1</a>
																<a href="#" class="dropdown-item">Other category 2</a>
															</div>
															</div>
														<!-- </div> -->													
													</div>
											</div>
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Nature of Query</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">Query 1</a>
														<a href="#" class="dropdown-item">Query 2</a>
														<!-- <div class="dropdown-menu"> -->
															<a href="#" class="dropdown-item">Query 3</a>
															<a href="#" class="dropdown-item">Query 4</a>
															<a href="#" class="dropdown-item">Query 5</a>
														<!-- </div> -->
													<div class="dropdown-submenu dropup">
														<a href="#" class="dropdown-item dropdown-toggle">Others</a>
														<div class="dropdown-menu">
															<a href="#" class="dropdown-item">Other query 1</a>
															<a href="#" class="dropdown-item">Other query 2</a>
															<a href="#" class="dropdown-item">Other query 3</a>
														</div>
													</div>
												</div>
											</div>
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Nature of Theme</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">Theme 1</a>
														<a href="#" class="dropdown-item">Theme 2</a>
														<!-- <div class="dropdown-menu"> -->
															<a href="#" class="dropdown-item">Theme 3</a>
															<a href="#" class="dropdown-item">Theme 4</a>
															<a href="#" class="dropdown-item">Theme 5</a>
														<!-- </div> -->
													<div class="dropdown-submenu dropup">
														<a href="#" class="dropdown-item dropdown-toggle">Others</a>
														<div class="dropdown-menu">
															<a href="#" class="dropdown-item">Other theme 1</a>
															<a href="#" class="dropdown-item">Other theme 2</a>
															<a href="#" class="dropdown-item">Other theme 3</a>
														</div>
													</div>
												</div>
											</div>
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Tag Department</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">Department 1</a>
													<a href="#" class="dropdown-item">Department 2</a>
														<!-- <div class="dropdown-menu"> -->
													<a href="#" class="dropdown-item">Department 3</a>
													<a href="#" class="dropdown-item">Department 4</a>
													<a href="#" class="dropdown-item">Department 5</a>
													<a href="#" class="dropdown-item">Department 6</a>
													<a href="#" class="dropdown-item">Department 7</a>
														<!-- </div> -->													
												</div>
											</div>
											<div class="dropdown-submenu dropup">
												<a href="#" class="dropdown-item dropdown-toggle">Phase</a>
												<div class="dropdown-menu">
													<a href="#" class="dropdown-item">Pre-Onsite</a>
													<a href="#" class="dropdown-item">Onsite</a>
													<!-- <div class="dropdown-menu"> -->
													<a href="#" class="dropdown-item">Post-Onsite</a>
													<!-- </div> -->
												</div>
											</div>
										</div>
									</div>
								</div>	
							</div>								
						</div>
						<div class="col-lg-5">
							<div class="form-group">
									<label class="mb-0">Keyword Search</label>
									<select multiple="multiple" class="form-control select" data-fouc>
										<optgroup label="RBI Official Name">
											<option value="AZ" selected>Chandler Bing</option>
											<option value="CO">Ross Geller</option>
											<option value="ID">William Smith</option>
											<option value="WY">Tom Henry</option>
										</optgroup>
										<optgroup label="Subject">
											<option value="AL">On Tower-hill, as you go down</option>
											<option value="IA" selected>On Tower-hill, as you go down</option>
											<option value="KS">On Tower-hill, as you go down</option>
											<option value="KY">On Tower-hill, as you go down</option>
										</optgroup>
									</select>
								</div> 
						</div>
					</div>
						<!-- <div class="card-header row col-12" style="padding-bottom: 10; padding-top: 0;">
						<div class="form-group col-lg-2 col-md-1">
							<label class="mb-0">Flag</label>
							<select name="select_flag" class="form-control multiselect-full-featured" multiple="multiple"
								data-fouc="" id="multiselectDropdown_flag">
								<option value="">Select Flag</option>
								<option value="Confidential">Confidential</option>
								<option value="Internal">Internal</option>
								<option value="Critical">Critical</option>
								<option value="Needs Attention">Needs Attention</option>
								<option value="Important">Important</option>
								<option value="OTHERS">OTHERS</option>
							</select>
						</div>
						<div class="form-group col-lg-2 col-md-1">
							<label class="mb-0">Category</label>
							<select class="form-control multiselect-full-featured" multiple="multiple"
								data-fouc=""  id="multiselectDropdown_category">
								<option value="rar">RAR</option>
								<option value="tranche">Tranche</option>
								<option value="scurtiny/general">SCRUTINY/GENERAL</option>
								<option value="other">OTHER</option>
							</select>
						</div>
						<div class="form-group col-lg-2 col-md-1">
							<div class="col-lg-7">
								<label class="mb-0">Name of RBI Official</label>
								<select class="form-control multiselect" multiple="multiple" data-fouc required name="selectName_rbi">
									<option value="op10">Chandler Bing</option>
									<option value="op20">Ross Geller</option>
									<option value="op30">William Smith</option>
									<option value="op40">Tom Henry</option>
									<option value="op50">Chris Smith</option>
									<option value="op60">Elle Jackson</option>
									<option value="op70">Lily Anniston</option>
								</select>
							</div>
						</div>
						<div class="form-group col-lg-2 col-md-1">
							<label class="mb-0">Nature of Query/Theme</label>
							<select class="form-control multiselect-full-featured" multiple="multiple"
								data-fouc="" id="multiselect-full-featured_themequery">
								<option value="query1">Query 1</option>
								<option value="query2">Query 2</option>
								<option value="query3">Query 3</option>
								<option value="query4">Query 4</option>
								<option value="theme1">Theme1</option>
								<option value="theme2">Theme2</option>
								<option value="theme3">Theme3</option>
								<option value="otherthemequery">Others</option>
							</select>
						</div>
						<div class="form-group col-lg-2 col-md-1">
							<label class="mb-0">Tag Department</label>
							<select class="form-control multiselect" multiple="multiple" data-fouc required name="selectTag_depart">
								<option value="op111">Department 1</option>
								<option value="op222">Department 2</option>
								<option value="op333">Department 3</option>
								<option value="op444">Department 4</option>
								<option value="op555">Department 5</option>
								<option value="op666">Department 6</option>
								<option value="op777">Department 7</option>
							</select>
						</div>
						<div class="form-group col-lg-2 col-md-1">
							<label class="mb-0">Phase</label>
								<select name="select_phase" class="form-control" required>
									<option value="" hidden>Select Phase</option>
									<option value="Pre-Onsite">Pre-Onsite</option>
									<option value="Onsite">Onsite</option>
									<option value="Post-Onsite">Post-Onsite</option>
								</select>
						</div>
					</div> -->
					<div class="">
						<table id="table" class="inboxTable" style="background-color: #FFFFFF; border-bottom: 1px solid #e6e6e6;"
							data-pagination="true"
							data-page-list="[10, 25, 50, 100, All]"
							data-pagination-pre-text="&larr;" data-pagination-next-text="&rarr;">
							<thead>
								<tr>
									<th data-field="downIcon" class=""></th>
									<!-- <th data-field="checkbox"> -->
										<!-- <div class="list-icons" style="left: -14px; position: relative;">
											<a href="JavaScript:void(0);" style="color: #97144d;"
												class="deletebuttonInbox" data-toggle="modal"
												data-target="#modal_default">
												<i class="icon-trash" data-toggle="tooltip" title=""
													data-placement="right"
													style="font-size: 13px;margin-left: 11px;										"
													data-original-title="DeleteSelected"></i></a>
										</div> -->
										<!-- <div class="uniform-checker"><span><input type="checkbox"
													class="form-input-styled checkered" data-fouc=""></span>
										</div> -->
										<!-- <div>
											<button type="button" class="btn btn-light btn-icon dropdown-toggle"
												data-toggle="dropdown" aria-expanded="false"></button>
											<div class="dropdown-menu">
												<a href="#" class="dropdown-item">Select read</a>
												<a href="#" class="dropdown-item">Select unread</a>
											</div>
										</div> -->
									<!-- </th> -->
									
									<!-- <th data-field="star" class="columnSpacing"></th> -->
									<th data-field="name">From</th>
									<th data-field="message">Subject</th>
									<th data-field="timestamp">Date & Time</th>
									<th data-field="actions" class="text-center">Actions</th>
									<th data-field="readFlag" data-class='hidden'></th>
									<!-- <th data-field="readFlag" data-class='hidden'></th> -->
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- /main content -->
		<div id="setFlag_modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Set Flag</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
						<div class="row col-12">
							<label class="col-form-label col-lg-1">Type:</label>
							<div class="col-lg-11">
								<select name="SetFlag_select" class="form-control" required>
									<option value="" hidden>Select an option</option>
									<option value="initiated_over_call">Initiated over Call</option>
									<option value="initiated_via_department_head">Initiated via Department Head</option>
								</select>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary"><a href="initiate_requirement.html" style="color: #FFFFFF;">Yes</a></button>
						<button type="button" class="btn btn-link" data-dismiss="modal">No</button>
					</div>
				</div>
			</div>
		</div>
		<div id="tagMail_modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Tag Mail</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<div class="form-group row">
							<div class="col-lg-6">
								<div class="row">
									<label class="col-form-label col-lg-2 text-center">Date:</label>
									<div class="col-lg-10">
										<div class="input-group">
											<input type="text" class="form-control daterange-single" value="" id="date">
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="row">
									<label class="col-form-label col-lg-2 text-center">Subject:</label>
									<div class="col-lg-10">
										<div class="input-group">
											<select name="status_select"  class="form-control multiselect-full-featured" multiple="multiple"
											data-fouc="" required>
												<option value="sub1">On Tower-hill, as you go down</option>
												<option value="sub2">On Tower-hill, as you go down</option>
												<option value="sub3">On Tower-hill, as you go down</option>
												<option value="sub4">On Tower-hill, as you go down</option>
												<option value="sub4">On Tower-hill, as you go down</option>
												<option value="sub5">On Tower-hill, as you go down</option>
												<option value="sub6">On Tower-hill, as you go down</option>
												<option value="sub7">On Tower-hill, as you go down</option>
												<option value="sub8">On Tower-hill, as you go down</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">Yes</button>
						<button type="button" class="btn btn-link" data-dismiss="modal">No</button>
					</div>
				</div>
			</div>
		</div>
		<div id="composeMail_modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-full">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Compose Mail</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<div class="flex-fill overflow-auto">

							<!-- Single mail -->
							<div class="card">

								<!-- Action toolbar -->
								<div class="navbar navbar-light bg-light navbar-expand-lg border-bottom-0 py-lg-2 rounded-top">
									<div class="text-center d-lg-none w-100">
										<button type="button" class="navbar-toggler w-100 h-100" data-toggle="collapse" data-target="#inbox-toolbar-toggle-write">
											<i class="icon-circle-down2"></i>
										</button>
									</div>

									<div class="navbar-collapse text-center text-lg-left flex-wrap collapse" id="inbox-toolbar-toggle-write">

										<div class="mt-3 mt-lg-0 mr-lg-3">
											<button type="button" class="btn bg-blue"><i class="icon-paperplane mr-2"></i> Send mail</button>
										</div>


										<div class="mt-3 mt-lg-0 mr-lg-3">
											<div class="btn-group">
												<button type="button" class="btn btn-light">
													<i class="icon-checkmark3"></i>
													<span class="d-none d-lg-inline-block ml-2">Save</span>
												</button>
												<button type="button" class="btn btn-light">
													<i class="icon-cross2"></i>
													<span class="d-none d-lg-inline-block ml-2">Cancel</span>
												</button>
											</div>
										</div>

										<!-- <div class="navbar-text ml-lg-auto">12:49 pm</div> -->
									</div>
								</div>
								<!-- /action toolbar -->


								<!-- Mail details -->
								<div class="table-responsive">
									<table class="table">
										<tbody>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">To:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<input type="text" class="form-control flex-fill w-auto py-2 px-0 border-0 rounded-0" placeholder="Add recipients">
														<!-- <ul class="list-inline list-inline-dotted text-nowrap pt-sm-2 pb-2 mb-0 ml-sm-3">
															<li class="list-inline-item"><a href="#">Cc</a></li>
															<li class="list-inline-item"><a href="#">Bcc</a></li>
														</ul> -->
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">CC:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<input type="text" class="form-control flex-fill w-auto py-2 px-0 border-0 rounded-0" placeholder="Add recipients">
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">BCC:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<input type="text" class="form-control flex-fill w-auto py-2 px-0 border-0 rounded-0" placeholder="Add recipients">
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0">
													<div class="py-2 mr-sm-3">Subject:</div>
												</td>
												<td class="align-top py-0">
													<input type="text" class="form-control py-2 px-0 border-0 rounded-0" placeholder="Add subject">
												</td>
											</tr>
											<tr>
												<td colspan="3">
													<ul class="list-inline d-sm-flex flex-sm-wrap mb-0">
														<li class="list-inline-item">
															<a href="#" class="attachFile"><i class="icon-attachment mr-2"></i> Attach files</a>
															<input type="file" name="files[]" class="myFile" style="display: none" multiple data-show-upload="true" data-show-caption="true"/>
															<span class="customfileupload"></span>
															<!-- <label for="file-upload" class="attachFile">
																<i class="icon-attachment mr-2"></i> Attach files
															</label>
															<input id="file-upload" name="files[]" type="file" class="myFile" style="display: none" multiple data-show-upload="true" data-show-caption="true"/>
															<span class="customfileupload"></span> -->
														</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- /mail details -->


								<!-- Mail container -->
								<div class="card-body p-0">
									<div class="overflow-auto mw-100">
										<div class="summernote summernote-borderless">
										</div>
									</div>
								</div>
								<!-- /mail container -->


								<!-- Attachments -->
								<!-- <div class="card-body border-top">
									<h6 class="mb-0">2 Attachments</h6>

									<ul class="list-inline mb-0">
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-3 mb-0">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold"><span class="customfileupload"></span></div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-3 mb-0">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">assignment_letter.pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">736 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div> -->
								<!-- /attachments -->

							</div>
							<!-- /single mail -->

					</div>
					</div>
				</div>
			</div>
		</div>
		<div id="viewMail_modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-full">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">View Mail Details</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<div class="flex-fill overflow-auto">

							<!-- Single mail -->
							<div class="card">

								<!-- Action toolbar -->
								<div class="navbar navbar-light bg-light navbar-expand-lg border-bottom-0 py-lg-2 rounded-top">
									<div class="text-center d-lg-none w-100">
										<button type="button" class="navbar-toggler w-100 h-100" data-toggle="collapse" data-target="#inbox-toolbar-toggle-write">
											<i class="icon-circle-down2"></i>
										</button>
									</div>

									<!-- <div class="navbar-collapse text-center text-lg-left flex-wrap collapse" id="inbox-toolbar-toggle-write">
										<div class="navbar-text ml-lg-auto">2/21/2020 12:49 pm</div>
									</div> -->
								</div>
								<!-- /action toolbar -->


								<!-- Mail details -->
								<div class="table-responsive">
									<table class="table">
										<tbody>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">From:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<label class="col-form-label">RBI</label>
														<!-- <ul class="list-inline list-inline-dotted text-nowrap pt-sm-2 pb-2 mb-0 ml-sm-3">
															<li class="list-inline-item"><a href="#">Cc</a></li>
															<li class="list-inline-item"><a href="#">Bcc</a></li>
														</ul> -->
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">To:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<label class="col-form-label">DFhJS</label>
														<!-- <ul class="list-inline list-inline-dotted text-nowrap pt-sm-2 pb-2 mb-0 ml-sm-3">
															<li class="list-inline-item"><a href="#">Cc</a></li>
															<li class="list-inline-item"><a href="#">Bcc</a></li>
														</ul> -->
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">Cc:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<label class="col-form-label">Xsyxz</label>
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0" style="width: 1%">
													<div class="py-2 mr-sm-3">Bcc:</div>
												</td>
												<td class="align-top py-0">
													<div class="d-sm-flex flex-sm-wrap">
														<label class="col-form-label">SDSDkkdsf</label>
													</div>
												</td>
											</tr>
											<tr>
												<td class="align-top py-0">
													<div class="py-2 mr-sm-3">Subject:</div>
												</td>
												<td class="align-top py-0">
													<label class="col-form-label">On Tower-hill, as you go down</label>
												</td>
											</tr>
											<!-- <tr>
												<td colspan="3">
													<ul class="list-inline d-sm-flex flex-sm-wrap mb-0">
														<li class="list-inline-item">
															<a href="#" class="attachFile"><i class="icon-attachment mr-2"></i> Attach files</a>
															<input type="file" name="files[]" class="myFile" style="display: none" multiple data-show-upload="true" data-show-caption="true"/>
															<span class="customfileupload"></span>
															<label for="file-upload" class="attachFile">
																<i class="icon-attachment mr-2"></i> Attach files
															</label>
															<input id="file-upload" name="files[]" type="file" class="myFile" style="display: none" multiple data-show-upload="true" data-show-caption="true"/>
															<span class="customfileupload"></span>
														</li>
													</ul>
												</td>
											</tr> -->
										</tbody>
									</table>
								</div>
								<!-- /mail details -->


								<!-- Mail container -->
								<div class="card-body p-0">
									<div class="overflow-auto mw-100">
										<p class="show-read-more customScroll ml-2">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
											Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
											Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
									</div>
								</div>
								<!-- /mail container -->


								<!-- Attachments -->
								<div class="card-body border-top">
									<h6 class="mb-0">2 Attachments</h6>

									<ul class="list-inline mb-0">
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-3 mb-0">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-3 mb-0">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">assignment_letter.pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">736 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<!-- /attachments -->

							</div>
							<!-- /single mail -->

					</div>
					</div>
				</div>
			</div>
		</div>
		<div id="irrelevantMail_model" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Irrelevant Mail</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
						<h6 class="font-weight-semibold mb-3">Do you want to forward this Mail?</h6>
						<div class="modal-footer checkButton">
							<button type="button" class="btn btn-primary showOptions">Yes</button>
							<button type="button" class="btn btn-link" data-dismiss="modal">No</button>
						</div>
						<div class="ForwardOption">
							<div class="row mb-3">
								<div class="col-lg-6">
									<div class="form-group row">
										<label class="col-form-label col-lg-4" style="padding-left: 10px;">Departments:</label>
										<div class="col-lg-8">
											<select class="form-control multiselect" multiple="multiple" data-fouc name="select_Departments">
												<option value="AK">Alaska</option>
												<option value="HI">Hawaii</option>
												<option value="CA">California</option>
												<option value="AZ">Arizona</option>
												<option value="CO">Colorado</option>
												<option value="WY">Wyoming</option>
												<option value="AL">Alabama</option>
												<option value="AR">Arkansas</option>
												<option value="KY">Kentucky</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group row">
										<label class="col-form-label col-lg-4">Member:</label>
										<div class="col-lg-8">
											<select class="form-control multiselect" multiple="multiple" data-fouc name="selectTo_assignee">
												<option value="op1">ABC</option>
												<option value="op2">XYZ</option>
												<option value="op3">PQR</option>
												<option value="op4">TQR</option>
												<option value="op5">NPC</option>
												<option value="op6">Dahi</option>
												<option value="op7">Fox</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-primary" id="forward-button" data-dismiss="modal">Forward</button>
								<button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="initiateRequirment_model" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-full modal-query">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Initiate Requirement / Initiated via Department Head</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body text-center">
						<form class="wizard-form steps-state-saving22" action="#" data-fouc style="text-align: start;">
							<h6>Requirement Details</h6>
							<fieldset class="	">
								<div class="row" style="justify-content: space-evenly;">
									<!-- <div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Unique Identifier:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Undsf02</label>
											</div>
										</div>
									</div> -->
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-2">Status:</label>
											<div class="col-lg-8">
												<label class="col-form-label">Status1</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Received Date:</label>
											<div class="col-lg-7">
												<label class="col-form-label">02/20/2020</label>
											</div>
										</div>
									</div>
								</div>         
								<div class="row" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-2">Subject:</label>
											<div class="col-lg-8">
												<label class="col-form-label">Subject Subject1</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Description:</label>
											<div class="col-lg-9">
												<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
													Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
													Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
							<h6>Additional Requirement</h6>
							<fieldset class="">
								<div class="row" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Name of RBI Official:</label>
											<div class="col-lg-7">
												<label class="col-form-label">ABC</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Nature of Query/Theme:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ XYZ</label>
											</div>
										</div>
									</div>
								</div>
								<div class="row" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Tag Departments:</label>
											<div class="col-lg-7">
												<label class="col-form-label">Department 1</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Phase:</label>
											<div class="col-lg-7">
													<label class="col-form-label">Onsite</label>
												</select>
											</div>
										</div>
										</div>
								</div>
								<div class="row" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-7">
												<label class="col-form-label">02/24/2020</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Category:</label>
											<div class="col-lg-7">
												<label class="col-form-label">RAR</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
							<h6>Compose Mail</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="mainMail">
									<div class="row newMail ml-1">
										<div class="col-lg-3">
											<div class="form-group row ">
												<label class="col-form-label col-lg-3">Mail To:</label>
												<div class="col-lg-9">
													<label class="col-form-label">PQL</label>
												</div>
											</div>
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Flag:</label>
												<div class="col-lg-9">
													<label class="col-form-label">Important</label>
													<!-- <div class="form-group" id="textBox1" style="padding-top: 5px;">
														<input type="text" name="" class="form-control" placeholder="">
													</div> -->
												</div>
											</div>
											<!-- <div class="form-group row">
												<div class="col-lg-9">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold">pdf</div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div> -->
											<li class="list-inline-item">
												<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold">pdf</div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</div>
										<div class="col-lg-8">
											<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
												Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
												Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
										</div>
										<!-- <div class="col-lg-1 text-center">
											<i class='icon-add addMail' style="font-size:22px;" data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Mail'></i>
										</div> -->
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="mainMail">
									<div class="row newMail ml-1">
										<div class="col-lg-3">
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Mail To:</label>
												<div class="col-lg-9">
													<label class="col-form-label">PQL XYZ</label>
												</div>
											</div>
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Flag:</label>
												<div class="col-lg-9">
													<label class="col-form-label">Critical</label>
													<!-- <div class="form-group" id="textBox1" style="padding-top: 5px;">
														<input type="text" name="" class="form-control" placeholder="">
													</div> -->
												</div>
											</div>
											<!-- <div class="form-group row">
												<div class="col-lg-9">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold"><span class="customfileupload"></span></div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#" >View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
																
															</ul>
														</div>
													</div>
												</div>
											</div> -->
											<li class="list-inline-item">
												<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -5%;">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold">pdf</div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</div>
										<div class="col-lg-8">
											<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
												Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
												Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
										</div>
										<!-- <div class="col-lg-1 text-center">
											<i class='icon-add addMail' style="font-size:22px;" data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Mail'></i>
										</div> -->
									</div>
								</div>
							</fieldset>
							<h6>Assign</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-1">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCPfd</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCPdsf</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-8">
												<label class="col-form-label">02/21/2020</label>
											</div>
										</div>
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="row ml-1">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCPgfgfsd</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCPsdsddf</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-6">
												<label class="col-form-label">-</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div id="initiateQuery_model" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-full">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Initiate Query with RBI</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
						<form class="wizard-form steps-state-saving11" action="#" data-fouc style="text-align: start;">
							<h6>Summary</h6>
							<fieldset class="mb-3 mr-4">
								<div class="row ml-4" style="justify-content: space-evenly;">
									<!-- <div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Unique Identifier:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Undsf02</label>
											</div>
										</div>
									</div> -->
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Status:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Status3</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Date:</label>
											<div class="col-lg-9">
												<div class="input-group">
													<label class="col-form-label">02/21/2020</label>
												</div>
											</div>
										</div>
									</div>
								</div>         
								<div class="row ml-4" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Subject:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Subject Subject2</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Description:</label>
											<div class="col-lg-9">
												<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
													Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
													Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
							<h6>Additional Requirement</h6>
							<fieldset class="mb-3 mr-4 ml-4">
								<div class="row ml-1" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Name of RBI Official:</label>
											<div class="col-lg-7">
												<label class="col-form-label">NGET</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Nature of Query/Theme:</label>
											<div class="col-lg-7">
												<label class="col-form-label">asdfdfe asdf</label>
											</div>
										</div>
									</div>
								</div>
								<div class="row ml-1" style="justify-content: space-evenly;">
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Tag Departments:</label>
											<div class="col-lg-7">
												<label class="col-form-label">Department3</label>
											</div>
										</div>
									</div>
									<div class="col-lg-5">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Category:</label>
											<div class="col-lg-7">
												<label class="col-form-label">TRANCHE</label>
											</div>
										</div>
										</div>
								</div>
							</fieldset>
							<h6>Compose Mail</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="mainMail">
									<div class="row newMail ml-1" style="justify-content: space-evenly;">
										<div class="col-lg-3">
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Mail To:</label>
												<div class="col-lg-9">
													<label class="col-form-label">PQL</label>
												</div>
											</div>
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Flag:</label>
												<div class="col-lg-9">
													<label class="col-form-label">Important</label>
													<!-- <div class="form-group" id="textBox1" style="padding-top: 5px;">
														<input type="text" name="" class="form-control" placeholder="">
													</div> -->
												</div>
											</div>
											<!-- <div class="form-group row">
												<div class="col-lg-9">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold"><span class="customfileupload"></span></div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div> -->
											<li class="list-inline-item">
												<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold">pdf</div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</div>
										<div class="col-lg-8">
											<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
												Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
												Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
										</div>
										<!-- <div class="col-lg-1 text-center">
											<i class='icon-add addMail' style="font-size:22px;" data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Mail'></i>
										</div> -->
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="mainMail">
									<div class="row newMail ml-1" style="justify-content: space-evenly;">
										<div class="col-lg-3">
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Mail To:</label>
												<div class="col-lg-9">
													<label class="col-form-label">PQL XYZ</label>
												</div>
											</div>
											<div class="form-group row">
												<label class="col-form-label col-lg-3">Flag:</label>
												<div class="col-lg-9">
													<label class="col-form-label">Critical</label>
													<!-- <div class="form-group" id="textBox1" style="padding-top: 5px;">
														<input type="text" name="" class="form-control" placeholder="">
													</div> -->
												</div>
											</div>
											<!-- <div class="form-group row">
												<div class="col-lg-9">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold"><span class="customfileupload"></span></div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div> -->
											<li class="list-inline-item">
												<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
													<div class="media my-1">
														<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
														<div class="media-body">
															<div class="font-weight-semibold">pdf</div>
	
															<ul class="list-inline list-inline-condensed mb-0">
																<li class="list-inline-item text-muted">174 KB</li>
																<li class="list-inline-item"><a href="#">View</a></li>
																<li class="list-inline-item"><a href="#">Download</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</div>
										<div class="col-lg-8">
											<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
												Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
												Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
										</div>
										<!-- <div class="col-lg-1 text-center">
											<i class='icon-add addMail' style="font-size:22px;" data-toggle='tooltip'title='' data-placement='top' data-original-title='Add Mail'></i>
										</div> -->
									</div>
								</div>
							</fieldset>
							<h6>Assign</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-4">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCCCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MBBCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-8">
												<label class="col-form-label">02/21/2020</label>
											</div>
										</div>
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="row ml-4">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCdfP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">MCsdP</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-8">
												<label class="col-form-label">-</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div id="addRequirement_model" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-full">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add Requirement</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
						<form class="wizard-form steps-state-saving44" action="#" data-fouc style="text-align: start;">
							<h6>Summary</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Unique Identifier:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Undsf02</label>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-2">Status:</label>
											<div class="col-lg-9">
												<label class="col-form-label">Kentucky</label>
											</div>
										</div>
									</div>
								</div>         
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Received Date:</label>
											<div class="col-lg-9">
												<label class="col-form-label">12-2-2020</label>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-2">Mail From:</label>
											<div class="col-lg-9">
												<label class="col-form-label"> aSdfasadf</label>
											</div>
										</div>
									</div>
								</div>
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Subject:</label>
											<div class="col-lg-9">
												<label class="col-form-label">FSDdsf</label>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group row ml-4">
									<label class="col-form-label col-lg-1">Description:</label>
									<div class="col-lg-9" style="margin-left: 38px;">
										<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
											Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
											Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
									</div>
								</div>
								<div class="form-group row ml-4">
									<div class="col-lg-6">
                                    <div class="form-group row">
                                        <label class="col-form-label col-lg-3">Attachment:</label>
                                        <div class="col-lg-9">
                                            <li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
<!-- 										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li> -->
                                        </div>
                                    </div>
                                </div>
								</div>
							</fieldset>
							<h6>Additional Requirement</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Name of RBI Official:</label>
											<div class="col-lg-7">
												<label class="col-form-label">TQR</label>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Nature of Query/Theme:</label>
											<div class="col-lg-7">
												<label class="col-form-label">TQRFSF</label>
											</div>
										</div>
									</div>
								</div>
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Tag Departments:</label>
											<div class="col-lg-7">
												<label class="col-form-label">ABC</label>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Phase:</label>
											<div class="col-lg-7">
												<label class="col-form-label">Onsite</label>
											</div>
										</div>
										</div>
								</div>
								<div class="row ml-4">
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-7">
												<label class="col-form-label">12/12/2012</label>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Category:</label>
											<div class="col-lg-7">
												<label class="col-form-label">RAR</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
							<h6>Compose Mail</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-4">
									<div class="col-lg-3">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Mail To:</label>
											<div class="col-lg-9">
												<label class="col-form-label">TQR</label>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Flag</label>
											<div class="col-lg-9">
												<label class="col-form-label">Important</label>
											</div>
										</div>
										<!-- <div class="form-group row">
											<div class="col-lg-9">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div> -->
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
                                    <!-- <div class="form-group row"> -->
                                        <label class="col-form-label col-lg-3">Attachment:</label>
                                            <li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
<!-- 										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li> -->
									</div>
									<div class="col-lg-8">
										<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
											Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
											Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="row ml-4">
									<div class="col-lg-3">
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Mail To:</label>
											<div class="col-lg-9">
												<label class="col-form-label">TQR,XYZ,Fox</label>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-form-label col-lg-3">Flag</label>
											<div class="col-lg-9">
												<label class="col-form-label">Critical</label>
											</div>
										</div>
										<!-- <div class="form-group row">
											<div class="col-lg-9">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div> -->
										<li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<label class="col-form-label col-lg-3">Attachment:</label>
                                            <li class="list-inline-item">
											<div class="card bg-light py-2 px-3 mt-2 mb-0" style="margin-left: -4%;">
												<div class="media my-1">
													<div class="mr-3 align-self-center"><i class="icon-file-pdf icon-2x text-danger-400 top-0"></i></div>
													<div class="media-body">
														<div class="font-weight-semibold">pdf</div>

														<ul class="list-inline list-inline-condensed mb-0">
															<li class="list-inline-item text-muted">174 KB</li>
															<li class="list-inline-item"><a href="#">View</a></li>
															<li class="list-inline-item"><a href="#">Download</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<!-- <li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li>
										<li class="list-inline-item">
											<a href="#">SDFS.excel</a>
										</li> -->
									</div>
									<div class="col-lg-8">
										<p class="show-read-more customScroll">Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
											Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis. Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.Etiam posuere tellus mauris, et dignissim nisl rutrum quis. Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet. Morbi nec lacus et metus semper porttitor. Sed pellentesque ex at pellentesque scelerisque. Aliquam placerat gravida tortor, in fermentum ante commodo quis. Etiam vehicula elementum quam. Aliquam eu augue eu lacus dignissim efficitur. Proin ex metus, ornare placerat nisi at, porta lobortis turpis.
											Praesent euismod nec nulla ultrices maximus. Vivamus imperdiet quam ac lobortis cursus. Nam dapibus ullamcorper magna vehicula aliquam. Vivamus hendrerit molestie neque. Ut interdum diam a purus ultrices facilisis. Suspendisse molestie tempor dolor, sed tristique enim sagittis vitae. Integer eu dignissim lectus, commodo efficitur metus. Morbi quis justo finibus, interdum sem quis, imperdiet tellus. Curabitur blandit vel magna nec elementum. Vivamus tempor, urna pharetra euismod euismod, elit elit tincidunt sem, ut consectetur arcu massa non diam. Etiam scelerisque nisi magna. Nulla facilisi. Sed pharetra nunc lectus, in maximus dolor ornare sit amet.</p>
									</div>
								</div>
							</fieldset>
							<h6>Assign</h6>
							<fieldset class="mb-3 mr-4 ml-5">
								<div class="row ml-3">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XYZ</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">NPC</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">NPCdsfd</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">NPCsd</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-8">
												<label class="col-form-label">21/12/2019</label>
											</div>
										</div>
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<div class="row ml-3">
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-5">Department:</label>
											<div class="col-lg-7">
												<label class="col-form-label">XPCXS</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail To:</label>
											<div class="col-lg-8">
												<label class="col-form-label">ASD</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Bcc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">ASDSD</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Mail Cc:</label>
											<div class="col-lg-8">
												<label class="col-form-label">ASsd</label>
											</div>
										</div>
									</div>
									<div class="col-lg-2">
										<div class="form-group row">
											<label class="col-form-label col-lg-4">Due Date:</label>
											<div class="col-lg-8">
												<label class="col-form-label">-</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div id="setEscalation_modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Escalation</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
							<div class="row col-12">
								<label class="col-form-label col-lg-2" style="padding-left: 10px;">Members:</label>
								<div class="col-lg-10">
									<div class="input-group">
										<select class="form-control multiselect" multiple="multiple" data-fouc name="selectTo_assignee">
											<option value="op10">Chandler Bing</option>
									<option value="op20">Ross Geller</option>
									<option value="op30">William Smith</option>
									<option value="op40">Tom Henry</option>
									<option value="op50">Chris Smith</option>
									<option value="op60">Elle Jackson</option>
									<option value="op70">Lily Anniston</option>
										</select>
									</div>
								</div>
							</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">Yes</button>
						<button type="button" class="btn btn-link" data-dismiss="modal">No</button>
					</div>
				</div>
			</div>
		</div>
		<!-- <div id="myLgjH2m5c8emE66pjdExmgep47BAdKTrCJ7y" class="modal fade" role="dialog">
			<div class="modal-dialog">
	
			Modal content
			<div class="modal-content">
				<div class="modal-body">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<label>Other Theme / Query :</label>
					<select class="form-control multiselect-full-featured" multiple="multiple"
						data-fouc="">
						<option value="query1">Query 1</option>
						<option value="query2">Query 2</option>
						<option value="query3">Query 3</option>
						<option value="query4">Query 4</option>
						<option value="theme1">Theme1</option>
						<option value="theme2">Theme2</option>
						<option value="theme3">Theme3</option>
					</select>
				</div>
			</div>
	
			</div>
		</div>
		<div id="myModalmultiselectDropdown_category" class="modal fade" role="dialog">
			<div class="modal-dialog">
	
			Modal content
			<div class="modal-content">
				<div class="modal-header">
				</div>
				<div class="modal-body">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<label>Other Category :</label>
					<select class="form-control multiselect-full-featured" multiple="multiple"
						data-fouc="">
						<option value="category 1">Category 1</option>
						<option value="category 2">Category 2</option>
						<option value="category 3">Category 3</option>
						<option value="category 4">Category 4</option>
						<option value="category 5">Category 5</option>
					</select>
					<input type="text" class="form-control" placeholder="Type Other Category" style="display: inline-block;">
				</div>
				<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
	
			</div>
		</div>
		<div id="myModalmultiselectDropdown_flag" class="modal fade" role="dialog">
			<div class="modal-dialog">
	
			Modal content
			<div class="modal-content">
				<div class="modal-body">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<label>Other Flag :</label>
					<select class="form-control multiselect-full-featured" multiple="multiple"
						data-fouc="">
						<option value="flag 1">Flag 1</option>
						<option value="flag 2">Flag 2</option>
						<option value="flag 3">Flag 3</option>
						<option value="flag 4">Flag 4</option>
						<option value="flag 5">Flag 5</option>
					</select>
				</div>
			</div>
	
			</div>
		</div> -->
		<div id="modal_Recall" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Recall Mail</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<div class="modal-body">
						<h6 class="font-weight-semibold">Are you sure you want to recall?</h6>
					</div>

					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">Yes</button>
						<button type="button" class="btn btn-link" data-dismiss="modal">No</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /page content -->


	<!-- Footer -->
	<div class="navbar navbar-expand-lg navbar-light">
		<div class="text-center d-lg-none w-100">
			<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse"
				data-target="#navbar-footer">
				<i class="icon-unfold mr-2"></i>
				Footer
			</button>
		</div>

		<div class="navbar-collapse collapse" id="navbar-footer">
			<span class="navbar-text">
				&copy;<a href="#">EvoNext @ 2020</a> By <a href="#"
					target="_blank">Depronto</a>
			</span>
		</div>
	</div>
	<!-- /footer -->

</body>

</html>