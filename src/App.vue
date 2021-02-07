<template>
  <div class="game">
    <the-game-field />
    <the-game-log />
  </div>
</template>

<script>
import './assets/styles/style.scss'

import { mapState } from 'vuex'
import initGame from './mixins/initGame'
import getAnswer from './mixins/getAnswer'

import TheGameField from './components/TheGameField'
import TheGameLog from './components/TheGameLog'

export default {
  name: 'App',
  mixins: [initGame, getAnswer],
  components: {
    TheGameField,
    TheGameLog
  },
  computed: {
    ...mapState(['gameField', 'gameLog'])
  },
  mounted () {
    this.initGame()
      .then(() => {
        const answersInterval = setInterval(() => {
          this.getAnswer()
          if (this.gameLog.length === 19) clearInterval(answersInterval)
        }, 1500)
      })
      .catch((error) => {
        console.log(error)
        alert('Не удалось подключиться к серверу')
        return error
      })
  }
}
</script>

<style lang="scss">
  .game {
    display: flex;
    flex-direction: row;
    align-items: stretch;

    min-height: 100vh;

    background: var(--background1);
  }
</style>
