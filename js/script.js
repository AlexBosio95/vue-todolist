const app = new Vue ({
    el: '#app',
    data: {
        index: 0,
        currentItem: '',
        newItem: '',
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
            },
        ]
    },

    methods:{

        removeItem: function(currentItem) {
            this.todos.splice(this.todos.indexOf({text: currentItem}))
        },
    
        log(arg) {
            console.log(arg)
        },

        newItemToPush: function(itemToPush){
            this.todos.push({
                text: itemToPush,
                done: false
            })
            
            this.newItem = '';

        }
    }

})