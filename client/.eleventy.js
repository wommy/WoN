module.exports = function(config) {
	config.addPassthroughCopy({ "static" : "/" })
	config.addShortcode( "menuItem", require('./11ty/_components/client/menuItem.11ty.js') )
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
