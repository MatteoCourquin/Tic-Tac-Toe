new Vue({
    el : '#app',

    data : {
        counter: 0,
        winner: '-',
    },

    methods : {
        getId(e) {
            this.counter++

            if (this.counter % 2 == 0) {
                e.target.classList.add('checkedPlayer1')
            } else {
                e.target.classList.add('checkedPlayer2')
            }
            e.target.classList.remove('unchecked')

            // console.log(e.target)

            this.verifWin(e)
        },
        verifWin() {
            let case1 = this.$refs.refCase1[0].className[this.$refs.refCase1[0].className.length - 1]
            let case2 = this.$refs.refCase2[0].className[this.$refs.refCase2[0].className.length - 1]
            let case3 = this.$refs.refCase3[0].className[this.$refs.refCase3[0].className.length - 1]
            let case4 = this.$refs.refCase4[0].className[this.$refs.refCase4[0].className.length - 1]
            let case5 = this.$refs.refCase5[0].className[this.$refs.refCase5[0].className.length - 1]
            let case6 = this.$refs.refCase6[0].className[this.$refs.refCase6[0].className.length - 1]
            let case7 = this.$refs.refCase7[0].className[this.$refs.refCase7[0].className.length - 1]
            let case8 = this.$refs.refCase8[0].className[this.$refs.refCase8[0].className.length - 1]
            let case9 = this.$refs.refCase9[0].className[this.$refs.refCase9[0].className.length - 1]

            if (case1 === case2 && case2 === case3 && case1 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case4 === case5 && case5 === case6 && case4 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case7 === case8 && case8 === case9 && case7 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case1 === case4 && case4 === case7 && case1 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case2 === case5 && case5 === case8 && case2 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case3 === case6 && case6 === case9 && case3 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case1 === case5 && case5 === case9 && case1 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            } else if (case3 === case5 && case5 === case7 && case3 !== 'd') {
                this.winner = `Winner : Player ${case1}`
            }
        },
    },
})