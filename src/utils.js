// localStorage 存储、获取、删除
export const storage = {
    set: function (key, data) {
      return window.localStorage.setItem(key, window.JSON.stringify(data))
    },
    get: function (key) {
      return window.JSON.parse(window.localStorage.getItem(key))
    },
    remove: function (key) {
      return window.localStorage.removeItem(key)
    }
  }