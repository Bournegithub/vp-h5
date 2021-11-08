import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

const path = require('path')

// https://vitejs.dev/config/
export default ((mode) => {
  return defineConfig({
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => {
              return `vant/es/${name}/style`
            },
          }
        ]
      }),
      viteCompression({
        verbose: true, // 是否在控制台输出压缩结果
        disable: false,
        threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
        algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz',
        deleteOriginFile: false // 压缩后是否删除源文件
      })
    ],
    optimizeDeps: {
      include: ['vue-i18n', 'js-cookie', 'postcss-pxtorem', 'amfe-flexible', 'vant']
    },
    base: loadEnv(mode, process.cwd()).VITE_APP_LOCAL, // 打包后文件（存放网站的目录）地址
    build: {
      brotliSize: false, // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      chunkSizeWarningLimit: 500, // //大小警告的限制（kb
      outDir: 'dist',
      terserOptions: {
        compress: { // 处理打包去掉console.log
          drop_console: true,
          drop_debugger: true
        }
      },
      // rollupOptions: {
      //   input: {
      //     main: path.resolve(__dirname, 'index.html'),
      //     nested: path.resolve(__dirname, 'nested/index.html')
      //   }
      // }
    },
    server: {
      open: true,
      // https: true,
      // proxy: {
      //   '/api': {
      //     target: '',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@components': path.resolve(__dirname, './src/components'),
        '@locale': path.resolve(__dirname, './src/locale')
      }
    }
  })
})
