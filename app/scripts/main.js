(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = product;
	});

	var product = [
	
	{
		img: "../images/kids.jpg",
		name: "Dodecahedron",
		price: 2.95,
		description: "GET IT"
	},
	{
		img: "../images/man-shirt.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/mum-kid.jpeg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/woman-shirt.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/gloves.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/woman-shirt.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/man-shirt.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	},
	{
		img: "../images/kids.jpg",
		name: "Pentagonal Gem",
		price: 5.95,
		description: "GET IT"
	}
	
	];
})();

