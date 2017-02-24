var $ = require('jquery');

 function getXMLHttpRequest() {
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}

	return xhr;
}

function request(url, callback, Async) {
	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			console.log(xhr.response);
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", url, Async);
	xhr.send(null);
}


$(function(){	//page ready
	var products = null;
	/*request('datas/products.json',function(data){
		products = JSON.parse(data);
	},false);*/
	$.ajax({
		url: "datas/products.json",
		async: false
	}).done(function(data){
		products = data;
	});
	
	console.log(products);
	
	
	var productList = $('.ProductList');

	$.each(products,function(i,product){

		productList.append('<li class="ProductList-item"></li>');

		productList.find('.ProductList-item:last-child')
			.append('<p class="ProductList-productName">'+ product.name +'</p>');

		productList.find('.ProductList-item:last-child')
			.append('<p class="ProductList-productPrice">'+ product.price +'</p>');

		productList.find('.ProductList-item:last-child')
			.append('<p class="ProductList-productColor">'+ product.color +'</p>');
		

		productList.find('.ProductList-item:last-child')
			.append('<img class="ProductList-productVisual" src="images/'+ product.visual +'" />');

	});
	
});