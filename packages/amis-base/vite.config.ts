import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import typescript from "@rollup/plugin-typescript"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), , typescript({
    target: 'esnext',
    rootDir: path.resolve(__dirname, "src/components/"),
    declaration: true,
    declarationDir: path.resolve(__dirname, "dist"),
    exclude: path.resolve(__dirname, "node_modules/**"),
    allowSyntheticDefaultImports: true,
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: 'AmisBase',
      fileName: 'amis-base'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: "React",
          'react-dom': "ReactDOM"
        }
      }
    }
  },
  define: {
    AmisService: {
      baiduApi: "https://aisuda.bce.baidu.com"
    }
  }
})
