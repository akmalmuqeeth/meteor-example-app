Products = [
	{
		"sku" : "illq36",
		"name" : "Ill Q 365",
		"summary" : "illudium is the best",
		"description" : "at last after 400 years there is something which can do something",
		"price" : "4995",
		"image" : "illudium-q36.jpg",
		"vendor" : {
			"id" : 1,
			"slug" : "martin-armaments",
			 "name" : "Martin Armaments"
		}
	},
	{
		"sku" : "honmars",
		"name" : "Ill Q 365",
		"summary" : "illudium is the best",
		"description" : "at last after 400 years there is something which can do something",
		"price" : "4995",
		"image" : "honeymoon-mars.jpg",
		"vendor" : {
			"id" : 1,
			"slug" : "martin-armaments",
			 "name" : "Martin Armaments"
		}
	},
	{
		"sku" : "mars",
		"name" : "Ill Q 365",
		"summary" : "illudium is the best",
		"description" : "at last after 400 years there is something which can do something",
		"price" : "4995",
		"image" : "mars-mobile.jpg",
		"vendor" : {
			"id" : 1,
			"slug" : "martin-armaments",
			 "name" : "Martin Armaments"
		}
	},
];

Products.featured = function(){
	return Products;
}

Products.findOne = function(args){
	return _.find(Products, function(product){
		return product.sku === args.sku;
	});
}