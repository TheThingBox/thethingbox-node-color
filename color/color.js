module.exports = function ( RED ) {
    "use strict";
	
	var express = require('express');
	
	function color ( n ) {
		RED.nodes.createNode( this, n );
		
		
		var farb_path = __dirname+"/resources/farbtastic/";

		RED.httpNode.use('/farbtastic', express.static(farb_path));
		
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
}
