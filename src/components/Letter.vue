<template>
  <div
    :class="classList"
    :style="background"
  >
    {{ letter }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Letter',
  props: {
    coords: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['gameField']),
    letter () {
      return this.gameField[this.coords.y][this.coords.x].letter
    },
    state () {
      return this.gameField[this.coords.y][this.coords.x].state
    },
    background () {
      return this.state.color
        ? `background-color: ${this.state.color};`
        : false
    },
    classList () {
      return this.state.order === 'middle'
        ? 'game-field__letter'
        : `game-field__letter game-field__letter_${this.state.orientation}-${this.state.order}`
    }
  }
}
</script>

<style lang="scss">
  .game-field__letter {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;

    user-select: none;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color .2s ease-in-out;

    &_vertical-first { border-radius: 50% 50% 0 0; }
    &_vertical-last { border-radius: 0 0 50% 50%; }
    &_horizontal-first { border-radius: 50% 0 0 50%; }
    &_horizontal-last { border-radius: 0 50% 50% 0; }
  }
</style>
