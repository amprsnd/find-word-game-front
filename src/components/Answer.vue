<template>
  <div class="answer">
    <div class="answer__avatar" :style="background">
      <img
        class="answer__avatar-image"
        :src="author.picture"
        :alt="author.name"
      />
    </div>
    <div class="answer__text">
      {{author.name}}
      <span class="answer__word">
        {{word}}
      </span>
    </div>
  </div>
</template>

<script>
import random from '../mixins/random'

export default {
  name: 'Answer',
  props: {
    word: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    imgIsLoaded: false
  }),
  computed: {
    background () {
      return `background-color: hsl(${random(0, 360)}, 100%, 70%);`
    }
  }
}
</script>

<style lang="scss">
  .answer {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    background: var(--background4);

    &__avatar {
      display: block;
      width: 40px;
      height: 40px;
      margin: 0 10px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__avatar-image {
      width: 46px;
      height: auto;
      position: relative;
      left: -8px;
      top: 3px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    &__word {
      display: block;
      padding: 5px;
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
      background: var(--background3);
      margin-top: 3px;
    }
  }
</style>
