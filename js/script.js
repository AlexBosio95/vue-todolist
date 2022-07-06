const app = new Vue ({
    el: '#app',
    data: {
        index: 0,
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
    },

    newItem: function() {

    }
})