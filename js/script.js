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

        counter : 0,
    },

    methods:{

        removeItem: function(currentItem) {
            console.log(this.todos[currentItem].done)
            if (!this.todos[currentItem].done) {
                this.counter--;
            }
            this.todos.splice((currentItem), 1)
            console.log(this.counter)
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

                this.counter++;
            }
        },

        toggleDone: function(currentItem) {

            this.todos[currentItem].done = !this.todos[currentItem].done;

            if (this.todos[currentItem].done) {
                this.counter--;
            } else {
                this.counter++;
            }
            
            
            console.log(this.counter)
         
        },

        complTodos: function() {

            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].done == false){
                    this.counter++;
                }
                console.log(this.counter)
            }
        }

    },

    created(){
        this.complTodos();
    }


})