import Vue from 'vue'
import Vuex from 'vuex'

import random from '../mixins/random'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawGameField: [],
    gameField: [],
    gameLog: []
  },
  mutations: {
    setRawGameField (state, payload) {
      state.rawGameField = payload.field
    },
    fillGameField (state, payload) {
      state.gameField = payload.field.map(row => {
        return row.map(letter => {
          return {
            letter: letter,
            state: {
              orientation: null,
              color: null,
              order: 'middle'
            }
          }
        })
      })
    },
    markWord (state, payload) {
      const word = payload.found[0]
      const color = `hsla(${random(0, 360)}, 75%, 70%, 0.6)`

      for (let i = 0; i < word.overlap; i++) {
        let letter
        if (word.orientation === 'horizontal') {
          letter = state.gameField[word.y][word.x + i]
          letter.state.orientation = 'horizontal'
        }
        if (word.orientation === 'vertical') {
          letter = state.gameField[word.y + i][word.x]
          letter.state.orientation = 'vertical'
        }
        if (i === 0) letter.state.order = 'first'
        if (i === word.overlap - 1) letter.state.order = 'last'
        letter.state.color = color
      }
    },
    addGameLogRecord (state, payload) {
      state.gameLog.push(payload)
    }
  },
  actions: {
    setGameData ({ commit, state }, payload) {
      commit('setRawGameField', payload)
      commit('fillGameField', payload)
    }
  }
})
