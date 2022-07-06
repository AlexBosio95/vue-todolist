const app = new Vue ({
    el: '#app',
    data: {
        index: 0,
        currentItem: '',
        newItem: '',
        isDone: false,
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

        toggleDone: function(currentDone) {
            console.log(this.todos[currentDone].done)
            // if (this.todos[currentDone].done == false) {
            //     this.todos[currentDone].done = true
            // } else {
            //     this.todos[currentDone].done = false
            // }

            this.todos[currentDone].done = !this.todos[currentDone].done
         
        }

    }

})