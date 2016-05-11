Products = new Mongo.Collection("products");

Products.featured = function(){
	return Products.find();
}
