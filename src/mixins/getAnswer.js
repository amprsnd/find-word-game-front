import { mapState, mapMutations } from 'vuex'
import { wordfind } from '../vendor/wordfind'

export default {
  computed: mapState(['rawGameField']),
  methods: {
    ...mapMutations(['markWord', 'addGameLogRecord']),
    async getAnswer () {
      const response = await fetch('http://localhost:3000/answer')
      if (response.ok) {
        const answer = await response.json()
        const solution = wordfind.solve(this.rawGameField, [answer.answer])

        this.markWord(solution)
        this.addGameLogRecord(answer)
      }
    }
  }
}
