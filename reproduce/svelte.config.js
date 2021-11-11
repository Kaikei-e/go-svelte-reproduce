import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {

	kit: {
		adapter: adapter({
			pages: '../svelteBuild',
			assets: '../svelteBuild',
			fallback: null
		})
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};




