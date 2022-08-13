import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import react from '@vitejs/plugin-react'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //配置别名 @为src 引入
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
    plugins: [
        react(),
        vitePluginImp({
            optimize: true,
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        // 9月更新
        assetsDir: 'assets', //指定静态资源存放路径
        sourcemap: false, //是否构建source map 文件
        terserOptions: {
            // 生产环境移除console
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    server: {
        https: false, // 是否开启 https
        open: false, // 是否自动在浏览器打开
        cors: true, // 允许跨域  8月更新
        port: 3000, // 端口号
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: '', // 后台接口
                changeOrigin: true,
                secure: false, // 如果是https接口，需要配置这个参数
                // ws: true, //websocket支持
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
