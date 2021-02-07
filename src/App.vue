<template>
  <div id="app">
    <div class="game-field">
      <div class="row" v-for="(row, i) in gameField" :key="i">
        <div class="letter" v-for="(letter, i) in row" :key="i" >{{ letter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import initGame from './mixins/initGame'

export default {
  name: 'App',
  mixins: [initGame],
  components: {},
  computed: {
    ...mapState(['gameField'])
  },
  mounted () {
    this.initGame()
  }
}
</script>

<style lang="scss">
  #app {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    font-family: 'Poppins', sans-serif;
  }

  .game-field {
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: row;

      .letter {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 20px;

        background: #fff;
        transition: background 500ms ease-in-out;

        &:hover {
          background: #777;
          transition: background 100ms ease-in-out;

        }
      }
    }
  }
</style>
