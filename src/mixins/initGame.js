import { mapMutations } from 'vuex'
import { wordfind } from '../vendor/wordfind'

export default {
  methods: {
    ...mapMutations(['fillGameField']),

    async initGame () {
      const response = await fetch('http://localhost:3000/init')

      if (response.ok) {
        const words = await response.json()
        console.log(words)
        const field = wordfind.newPuzzle(words.words, {
          width: 18,
          height: 12,
          orientations: ['horizontal', 'vertical'],
          fillBlanks: true,
          preferOverlap: false
        })
        this.fillGameField({ field: field })
      } else {
        alert('Не удалось подключиться к серверу')
      }
    }
  }
}
