import { mapActions } from 'vuex'
import { wordfind } from '../vendor/wordfind'

export default {
  methods: {
    ...mapActions(['setGameData']),

    initGame () {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/init')
          .then((response) => {
            if (response.ok) return response.json()
            if (!response.ok) return reject(response)
          })
          .then(response => {
            const field = wordfind.newPuzzle(response.words, {
              width: 20,
              height: 15,
              orientations: ['horizontal', 'vertical'],
              fillBlanks: true,
              preferOverlap: false
            })
            this.setGameData({ field: field })
            return resolve()
          })
          .catch((error) => reject(error))
      })
    }
  }
}
