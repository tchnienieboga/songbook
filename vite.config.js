import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico'],
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf}']

            },
            manifest: {
                name: 'Śpiewnik - Tchnienie Boga',
                short_name: 'Śpiewnik',
                icons: [
                    {
                        src: 'favicon.ico',
                        sizes: '64x64 32x32 24x24 16x16',
                        type: 'image/x-icon'
                    },
                    {
                        src: 'logo192.png',
                        type: 'image/png',
                        sizes: '192x192'
                    },
                    {
                        src: 'logo512.png',
                        type: 'image/png',
                        sizes: '512x512'
                    }
                ],
                start_url: '.',
                display: 'standalone',
                theme_color: '#000000',
                background_color: '#ffffff'
            }

        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                quietDeps: true,
                silenceDeprecations: ['import']
            }
        }
    },
    server: {
        host: true,
        open: true
    },
    build: {
        outDir: 'build'
    }
})