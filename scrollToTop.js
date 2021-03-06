(function ( $ ) {
 
    $.fn.scrollToTop = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            backgroundColor: "white",
			bordercolor: "#fff",
			svg: {
				fill: "green"
			},
			animation: {
				scrollPosition: "150",
				speed: "800"
			}
        }, options );

		 $(this).append("<div id=\"scrollToTop\" style=\"display: none; cursor: pointer;position: fixed; bottom:30px; right: 30px; height: 50px; width: 50px; border-radius:30px; background-color:"+ settings.backgroundColor +"; padding: 10px 9px; border: 1px solid "+ settings.bordercolor +"; box-shadow:0px 0px 15px rgba(0,0,0,0.15);\"><svg width=\"30px\" height=\"24px\" viewBox=\"0 0 30 24\" fill="+ settings.svg.fill +" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">"+
  "<path d=\"M13.9689893,0.718351245 C14.5384008,-0.230667942 15.4653686,-0.224385619 16.0310107,0.718351245 L28.9689893,22.2816488 C29.5384008,23.2306679 29.1021596,24 28.008383,24 L1.99161703,24 C0.891677316,24 0.465368629,23.2243856 1.03101075,22.2816488 L13.9689893,0.718351245 Z\" id=\"s\" fill-rule=\"nonzero\"></path>"+
"</svg></div>"); 
		
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
							var show = $("#scrollToTop");
			if (scroll > settings.animation.scrollPosition) {
				show.fadeIn('slow');
		}
			else{
				show.fadeOut('slow');
			}
		})

        // Greenify the collection based on the settings variable.
      
		return $("#scrollToTop").click(function(){
		$('html, body').animate({
            scrollTop: 0
        }, settings.animation.speed);
			});
    };
 
}( jQuery ));
