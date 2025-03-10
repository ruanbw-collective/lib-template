import { defineBuildConfig } from 'unbuild'
import { resolve } from 'node:path'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['./src/index'],
  outDir: 'dist',
  alias: {
    '@': resolve(__dirname, './src')
  }
})
