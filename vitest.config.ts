import tsconfigPaths from 'vite-plugin-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true, // Habilita os globals do Vitest
  },
})
