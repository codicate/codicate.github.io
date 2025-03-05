import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [react()],
	build: {
		outDir: 'dist',
	},
});
