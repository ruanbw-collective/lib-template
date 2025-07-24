import { defineConfig } from 'tsdown'
import { resolve } from 'node:path'

export default defineConfig({
    clean: true,
    dts: {
        sourcemap: true,
    },
    entry: ['./src/index.ts'],
    outDir: 'dist',
    alias: {
        '@': resolve(__dirname, './src')
    }
})
