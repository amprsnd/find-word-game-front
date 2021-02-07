<template>
  <div class="game-field-container">
    <div class="game-field">
      <h1 v-show="gameField.length > 0">Round: {{ gameLog.length }}/20</h1>
      <div class="row" v-for="(row, y) in gameField" :key="y">
        <letter
          v-for="(letter, x) in row"
          :key="`${y}${x}`"
          :coords="{y: y, x: x}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Letter from './Letter'

export default {
  name: 'TheGameField',
  components: {
    Letter
  },
  computed: mapState(['gameField', 'gameLog'])
}
</script>

<style lang="scss">
  .game-field-container {
    flex-grow: 2;

    display: flex;
    align-items: center;
    justify-content: center;

    .game-field {
      display: flex;
      flex-direction: column;

      background: var(--background2);
      border-radius: 20px;
      padding: 20px;

      .row {
        display: flex;
        flex-direction: row;
      }
    }
  }

</style>
