$(document).ready(function() { 

   	$.material.init();

    new WOW().init();


	$("a.transicion").transicion();

	$('.carousel').carousel({
		interval: 5000
	})


	$(".click_a").click(function() {
		$(".collapse").removeClass("in");
	});


	/*funcion del menu:hover boton arriba*/

	$(".btn_arriba").on("click",function(){
		$("body,html").animate({
			scrollTop:0
		},1000)
	});

	$(window).scroll(function(){
		var cambio=($(window).scrollTop()>0)?true:false;
		if (cambio){
			$(".navbar").addClass('header_movil');	
			$(".btn_arriba").css({
				'display':'block'
			});
			$(".info_subcontacto").css({
				'display':'none'
			})

		}else{
			$(".navbar").removeClass('header_movil');
			$(".btn_arriba").css({
				'display':'none'
			});
			$(".info_subcontacto").css({
				'display':'block'
			});
		};
	});

	/*funcion del mapa*/

	$(".sec_mapa").on("click",function(){
		$(".mapa").toggle();

	});



	$(".btn_mision").on("click",function(){
		$(".mision").removeClass("oculto");
		$(".vision").addClass("oculto");
		$(this).addClass("color_hover");
		$(".btn_vision").removeClass("color_hover");
	})

	$(".btn_vision").on("click",function(){
		$(".vision").removeClass("oculto");
		$(".mision").addClass("oculto");
		$(this).addClass("color_hover");
		$(".btn_mision").removeClass("color_hover");
	})

});





