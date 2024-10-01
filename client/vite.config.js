import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: '../server/public', // Output directory for build files
        emptyOutDir: true // Clears the output directory before building
    },
    server: {
        proxy: {
            '/gifts': {
                target: 'http://localhost:3001', // Proxy settings for the API
                changeOrigin: true, // Changes the origin of the host header to the target URL
                secure: false // Set to false if the target URL is using HTTP
            }
        }
    }
});
