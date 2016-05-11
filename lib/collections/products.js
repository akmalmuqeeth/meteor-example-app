Products = new Mongo.Collection("products");

Products.featured = function(){
	return Products.find();
}

Products.allow({
	update : function (userid, product) {
		return isAdmin();
	},
	insert : function (userid, product) {
		return isAdmin();
	},
	remove : function (userid, product) {
		return isAdmin();
	}
});
