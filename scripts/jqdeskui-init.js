$(document).ready(function() {
	//$('body').unselectable();
	
	$('#accordion').deskbuild({
		winid: "xhr-accordion-1",
		title: "XHR Accordion 1",
		links: "sources/xhr-accordion-1.html"
	});
	$('#accordion').deskbuild({
		winid: "xhr-accordion-2",
		title: "XHR Accordion 2",
		links: "sources/xhr-accordion-2.html"
	});
	$('#accordion').deskbuild({
		winid: "xhr-accordion-3",
		title: "XHR Accordion 3",
		links: "sources/xhr-accordion-3.html"
	});
	
	$('#sidetabs').deskbuild({
		winid: "xhr-tabs-1",
		title: "XHR Tabs 1",
		links: "sources/sidebar-tabs-1.html",
		type: "tabs"
	});
	$('#sidetabs').deskbuild({
		winid: "xhr-tabs-2",
		title: "XHR Tabs 2",
		links: "sources/sidebar-tabs-2.html",
		type: "tabs"
	});
	
	$('ul#menu').superfish({ 
		delay: 1000,
		speed: 'fast',
		animation: {
			opacity:'show',
			height:'show'
		},
		autoArrows: true,
		dropShadows: true,
		hoverClass: 'ui-state-default'
	});
	$('#show-hide, ul#icons li, #deskicons a').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
	$('#accordion').accordion({ header: "h3", fillSpace: true });
	$('#deskicons').sortable({
		revert: true
	});
	
	if ( $('#sidetabs ul > li').length != "" ) {
		$('#sidetabs').tabs({
			ajaxOptions: {
				error: function(xhr, status, index, anchor) {
					$(anchor.hash).html("Couldn't load this tab. We'll try to fix this as soon as possible. If this wouldn't be a demo.");
				}
			}
		});
	}
	else {
		$('#sidetabs').css('display','none');
	}
	
	$('#datepicker').datepicker({
		inline: true
	});
	
	$('#show-hide').click(function() {
		$(this).parent().hide();
		$('#maincolumn').css('right','35px');
		var showhide = "<a href='#' id='show-hide' class='ui-state-default ui-corner-all hidden'><span id='ui-icon' class='ui-icon ui-icon-arrowthickstop-1-w'></span></a>"
		$('#desk').append(showhide);
		$('#show-hide.hidden').append('<br/>S<br/>h<br/>o<br/>w<br/><br/>S<br/>i<br/>d<br/>e<br/>B<br/>a<br/>r');
		$('#ui-icon').css({
			'margin': '-8px 3px 0 0',
			'top':'10px',
		});
		$('#show-hide.hidden').css({
			'position': 'absolute',
			'height': '180px',
			'padding':'10px 4px 0',
			'right': '10px',
			'top': '10px',
			'text-align':'center',
			'width': '15px'
		}).hover(
			function() { $(this).addClass('ui-state-hover'); }, 
			function() { $(this).removeClass('ui-state-hover'); }
		).click(function() {
			$(this).remove();
			$('#sidecolumn').show();
			$('#maincolumn').css('right','250px');
		});
		return false;
	});
	
	$('#homeTrigger').click(function(){
		homeInitCall();
	});
	$('#jquerycoreTrigger').click(function(){
		jquerycoreInitCall();
	});
	$('#jqueryuiTrigger').click(function(){
		jqueryuiInitCall();
	});
	$('#windowfsTrigger').click(function(){
		windowfsInitCall();
	});
	$('#superfishTrigger').click(function(){
		superfishInitCall();
	});
	
});

function homeInitCall() {
	$.window({
		wndid:'homeWindow',
		title:'Home Window',
		url: 'sources/ui-sample.html',
		width:800,
		height:480,
		maximizable:true,
		resizable:true
	});
}
function jquerycoreInitCall() {
	$.window({
		wndid:'jquerycore',
		title:'jQuery Website',
		url: 'http://jquery.com',
		width: 925,
		height:480,
		maximizable:true,
		resizable:true
	});
}
function jqueryuiInitCall() {
	$.window({
		wndid:'jqueryui',
		title:'jQuery UI Website',
		url: 'http://jqueryui.com',
		width: 975,
		height:480,
		maximizable:true,
		resizable:true
	});
}
function windowfsInitCall() {
	$.window({
		wndid:'windowfs',
		title:'jQuery Window Plugin',
		url: 'http://fstoke.me/blog/?p=696&cpage=3',
		width: 1015,
		height:480,
		maximizable:true,
		resizable:true
	});
}
function superfishInitCall() {
	$.window({
		wndid:'superfish',
		title:'jQuery Menu Plugin',
		url: 'http://users.tpg.com.au/j_birch/plugins/superfish/',
		width: 900,
		height:480,
		maximizable:true,
		resizable:true
	});
}