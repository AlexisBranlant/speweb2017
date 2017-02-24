var $ = require('jquery');

var header  = {
	init : function(){
		$('header').css('background','blue');
		$('header').css({'color':'yellow','font-size':'20px'}); 
	}	
}

module.exports = header;