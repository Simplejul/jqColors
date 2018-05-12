// good luck !

	
$('.color').each(function () {
	console.log($(this).attr('data-color'));
	$(this).css('background-color',$(this).attr('data-color')); // Du premier coup, incroyable! (Juste pour cette ligne)
	$(this).click(function(){
		$('body').css('background-color',$(this).attr('data-color'));
	});
});



$('#modify-texte').click(function(){
	if ($(this).is(':checked')) {
		$('.main').css('color','black');
	}else if ($(this).not(':checked')){
		$('.main').css('color','red');
	}
});
