(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tmp_demo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br />\r\n<div align='center'>\r\n	<select id='lan-demo'>\r\n		<option value='es'>Español</option>\r\n		<option value='en'>English</option>\r\n	</select>\r\n	<h3 id='demo-date' data-date='"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.propa : depth0)) != null ? stack1.date : stack1), depth0))
    + "'><h3>\r\n</div>\r\n<script>\r\n	var date;\r\n	date = $('h3#demo-date').data('date');\r\n	newDate = COM.momentToRoman(date, 'es');\r\n	$('h3#demo-date').text(newDate);\r\n</script>\r\n";
},"useData":true});
})();