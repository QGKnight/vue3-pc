import Vue from 'vue'
import Vuex from 'vuex'
import * as utils from './utils'

Vue.use(Vuex)

const types = {
  SET_Token: 'SET_Token',
  LOG_OUT:'LOG_OUT'
}
const state = { 
  token: utils.storage.get('token')  
}
const getters = {
  token: state => state.token
}
const mutations = {
  [types.SET_Token](state, data) {
    if (data){
      utils.storage.set('token', data)
      state.token = data
    }else{
      state.token = null
      utils.storage.remove('token');
    }  
  },
  [types.LOG_OUT](state,data){
    if(!data){
      utils.storage.remove('token')
      state.token=null;
    }
  }
}
const actions = {
  setToken: ({ commit }, data) => {
    commit(types.SET_Token, data)
  },
  logout:({ commit })=>{
    commit(types.LOG_OUT,null)

  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
