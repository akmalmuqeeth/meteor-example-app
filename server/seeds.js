
var productSeeds = [
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

if(Products.find().count() === 0) {
	_.each(productSeeds, function(product){
		Products.insert(product);
		console.log("Inserted ", product.sku);
	})
}