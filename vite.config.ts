import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'


// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins: [vue()],
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        // 启动端口
        port: 4321,
        hmr: {
            host: '127.0.0.1',
            port: 4321
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'www.gojava.cn:8888',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
})
