import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameField: [],
    gameLog: []
  },
  mutations: {
    fillGameField (state, payload) {
      state.gameField = payload.field
    },
    addGameLogRecord (state, payload) {
      state.gameLog.push(payload.answer)
    }
  }
})
