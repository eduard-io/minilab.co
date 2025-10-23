export default function(eleventyConfig) {
	eleventyConfig.addFilter('split', (str, delimiter = '/') => {
		if (!str) return [];
		return String(str)
			.split(delimiter)
			.filter(Boolean);
	});

	eleventyConfig.addWatchTarget('public/'); // Watch /assets for changes
	eleventyConfig.addPassthroughCopy({ public: '/' });

	// Pass environment variables to templates
	eleventyConfig.addGlobalData('env', {
		CONTEXT: process.env.CONTEXT || 'development',
	});

	return {
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: '_site',
		},
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		templateFormats: ['njk', 'md', 'html'],
	};
}
