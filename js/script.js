	$('.page-scroll').on('click',function(e){

		var tujuan = $(this).attr('href');

		var halaman = $(tujuan);

		$('html').animate({

			scrollTop: halaman.offset().top - 150
		});

		e.preventDefault();

	});

//paralax

$(window).scroll(function(){

	var ascroll = $(this).scrollTop();

	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ascroll/3+'%)'
	}); 

	$('.jumbotron h2').css({
		'transform' : 'translate(0px,'+ascroll/2+'%)'
	});	

	$('.jumbotron p').css({	
		'transform' : 'translate(0px,'+ascroll/2.5+'%)'
	});


	//Navigasi
	if(ascroll > $('.Navigasi').offset().top -200){
		
		$('.Navigasi .thumbnail').each(function(){

			setTimeout(function(){
				
				$('.Navigasi .thumbnail').addClass('muncul');

			}, 300);
		});
	};

	//about
	if(ascroll > $('.about').offset().top -200){

			setTimeout(function(){
				
				$('.about .pSatu').addClass('muncul');
				$('.about .pDua').addClass('muncul');

			}, 300);
	};

});