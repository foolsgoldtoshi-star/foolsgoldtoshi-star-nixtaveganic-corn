import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		host: true
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true
	},
	optimizeDeps: {
		include: ['marked', 'prismjs']
	}
});

