<template>
  <aside class="game-log">
    <h1>Words</h1>
    <answer
      v-for="(answer, i) in gamelogReverse"
      :key="i"
      :author="answer.author"
      :word="answer.answer"
    />
  </aside>
</template>

<script>
import { mapState } from 'vuex'

import Answer from './Answer'

export default {
  name: 'TheGameLog',
  components: {
    Answer
  },
  computed: {
    ...mapState(['gameLog']),
    gamelogReverse () {
      return [...this.gameLog].reverse()
    }
  }
}
</script>

<style lang="scss">
  .game-log {
    width: 420px;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--background3);
  }
</style>
