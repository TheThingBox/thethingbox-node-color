module.exports = function ( RED ) {
    "use strict";
	
//	var express = require('express');
	
	function color ( n ) {
		RED.nodes.createNode( this, n );
				
		this.color = n.color;
		this.property = n.property;
		var node = this;
		
		this.on("input", function(msg) {
			var property = node.property;
			if(property == "" || typeof property == "undefined"){
				msg.color = node.color
			}
			else{
				msg[property] = node.color;
			}
			node.send(msg);
		});
	}
	RED.nodes.registerType("color", color);
	
	var static_resourses_path = __dirname+"/resources/static/";
	//RED.httpNode.use('/color', express.static(static_resourses_path));
	
	RED.httpAdmin.get('/color/*', function(req, res){
		var filename = static_resourses_path+req.params[0];
		res.sendfile(filename);
	});
}
