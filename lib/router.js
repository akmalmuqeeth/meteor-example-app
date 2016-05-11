Router.configure({
	layoutTemplate : 'layout',
	loadingTemplate : 'loading',
	notFoundTemplate : 'notFound'
});

Router.route("/", {
	name :  "homeIndex",
	data : function(){
		return {
			message : "Welcome to Rocket Shop!"
		}
	}
});

Router.route("/about", {
	name :  "homeAbout",
});

Router.route("/contact", {
	name :  "homeContact",
});

Router.route("/products/:sku", {
	name : "productsShow",
	data : function(){
		var sku = this.params.sku;
		return Products.findOne({sku : this.params.sku});
	}
});
