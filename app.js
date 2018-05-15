// good luck !

	
$('.color').each(function () {
	console.log($(this).attr('data-color'));
	$(this).css('background-color',$(this).attr('data-color')); 
	$(this).click(function(){
		$('body').css('background-color',$(this).attr('data-color'));
	});
});



$('#modify-texte').click(function(){
	if ($(this).is(':checked')) {
		$('.main').css('color','red');
	}else{
		$('.main').css('color','black');
	}
});

// if ($(this).not(':checked'))