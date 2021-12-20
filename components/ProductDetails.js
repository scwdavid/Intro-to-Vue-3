app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },

    template:
    /*html*/
    `<p> {{ isWarm }} </p>`,

    computed: {
        isWarm() {
            if (this.details == 'warm') {
                return 'These are warm!'
            }
            return 'These are cold!'
        }
    }
})