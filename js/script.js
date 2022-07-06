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
            console.log(currentItem)
            this.todos.splice((currentItem), 1)
        },

        newItemToPush: function(itemToPush){
            if (this.newItem == '') {
                alert('Elemento non inserito')
            } else {
                this.todos.push({
                    text: itemToPush,
                    done: false
                })
                
                this.newItem = '';
            }
        },

        toggleDone: function(currentItem) {

            this.todos[currentItem].done = !this.todos[currentItem].done
         
        }

    },


})