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
        ],

        counterItemsCompleted : 0,
    },

    methods:{

        removeItem: function(currentItem) {
            console.log(this.todos[currentItem].done)
            if (!this.todos[currentItem].done) {
                this.counterItemsCompleted--;
            }
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

                this.counterItemsCompleted++;
            }
        },

        toggleDone: function(currentItem) {

            this.todos[currentItem].done = !this.todos[currentItem].done;

            if (this.todos[currentItem].done) {
                this.counterItemsCompleted--;
            } else {
                this.counterItemsCompleted++;
            }
         
        },

        complTodos: function() {

            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].done == false){
                    this.counterItemsCompleted++;
                }
            }
        }

    },

    created(){
        this.complTodos();
    }


})