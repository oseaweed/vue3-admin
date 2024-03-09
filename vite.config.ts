import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //template 语法转化html
import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    server: {
      port: 3100,
      host: true,// 本地网页ip可以被其他电脑访问
      open: false, // 运行后自动打开地址
      strictPort: false, // 端口被占用自动结束
      proxy: {
        '/basic': { target: "192.168.1.10" },
        '/upload': { target: '192.3.188.2' }
      }
    },
    // 预览 打包后查看
    preview: {
      port: 5100
    },
    resolve: {
      alias: {
        '/@/': `${pathSrc}/`
      }
    },
    plugins: [vue()],

  }
})

