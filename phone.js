$(document).ready(function() {
	$("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_addContact").hide();
	$("#content_help").hide();
});

$("#dialer").click(function() {
	$("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_addContact").hide();
	$("#content_help").hide();
});

$("#contacts").click(function() {
	$("#content_dialer").hide();
	$("#content_contacts").show();
	$("#content_addContact").hide();
	$("#content_help").hide();
});

$("#addContact").click(function() {
	$("#content_dialer").hide();
	$("#content_contacts").hide();
	$("#content_addContact").show();
	$("#content_help").hide();
});

$("#help").click(function() {
	$("#content_dialer").hide();
	$("#content_contacts").hide();
	$("#content_addContact").hide();
	$("#content_help").show();
});