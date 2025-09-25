import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: [
				'/',
				'/en',
				'/en/wiki/00_overview',
				'/en/wiki/01_context_climate',
				'/en/wiki/04_agronomy_corn'
			]
		},
		paths: {
			base: process.env.NODE_ENV === 'production' 
				? '/foolsgoldtoshi-star-nixtaveganic-corn'  // GitHub Pages path
				: ''
		},
		alias: {
			$content: 'static/content'
		}
	}
};

export default config;

