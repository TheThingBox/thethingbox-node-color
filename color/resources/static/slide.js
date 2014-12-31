//(function( $ ) {
	$.fn.slide = function(opt) {
		
		var content = this;
		var line = $('<div class="line"></div>');
			var line_style = {
				top: "0px",
				left: "10px",
				height: "1px",
				width: "100px",
				background: "black",
			}
			line.css(line_style);
		
		var header = $('<div class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">Advanced</div>');
	//	header.css({
			//	top: "0px",
			//	left: "10px",
			//	height: "1px",
			//	width: "100px",
		//		background: "black",
		//	});
//		header.append(line);
		
		content.hide();
		var isShown = false;
		if(opt.onUp) opt.onUp();
		
		function change(){
			if (isShown){
				content.slideUp();
				if(opt.onUp) opt.onUp();
				isShown = false;
			}
			else{
				content.slideDown();
				if(opt.onDown) opt.onDown();
				isShown = true;
			}
		}
		
		content.before(header);
		header.click(function(){
			change();
		});

	};
//}( jQuery ));