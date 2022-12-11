import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
    base: "/landingpage-new-year/",
    resolve: {
        alias: {
            '~/assets': path.join(__dirname, './assets'),
        }
    },
})