import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node', // 确保环境正确
        globals: true,
    },
});
