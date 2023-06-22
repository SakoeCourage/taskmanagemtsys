import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/index.css','resources/css/app.css', 'resources/js/main.jsx'],
            refresh: true,
        })
    ],
    resolve: {
       alias:  [{find: '@', replacement: '/resources/js'}]
    },
});
