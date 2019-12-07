import Bus from 'vue'
import { Loading } from 'element-ui';
export default {
    install(Vue, options) {
        // 全局Bus
        Vue.prototype.Bus = new Bus();
        // 有历史记录跳转
        Vue.prototype.jumpTo = function (path) {
            options.router.push(path)
        }
        // 无历史记录跳转
        Vue.prototype.pathTo = function (path) {
            options.router.replace(path)
        }
        // 路由返回
        Vue.prototype.goBack = function (path) {
            window.history.length > 1 ? options.router.go(-1) : options.router.push('/')
        }
        // 时间戳转年月日时分秒
        Vue.prototype.timetrans = function (val) {
            let date = new Date(val * 1000)
            let Y = date.getFullYear() + '-'
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
            let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
            return Y + M + D + h + m + s
        }
    }
}