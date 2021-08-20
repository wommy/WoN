module.exports = function(config) {
	config.setDataDeepMerge(true)
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
