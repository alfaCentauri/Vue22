/* 
    Created on : 04/02/2019, 03:38:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
/**Componente para modificar una propiedad*/
Vue.component('todo-add',{
    template: `
        <div>
            <input type="text" v-model="title" />
            <button @click="onClick">Añadir</button>
        </div>
    `,
    data: function(){
        return {
            title: null
        }
    },
    methods: {
        onClick: function(){
            this.$emit('new', { title: this.title});
        }
    }
});
/**Componente hijo*/
Vue.component('todo-item', {
    props: ['todo'],
    template: `
        <li>{{ todo.title }}</li>
    `
});
/**Componente padre*/
Vue.component('todo-list', {
    props: ['todos'],
    template: `
    <ul>
        <todo-item 
          v-for="(todo, index) in todos" 
          :key="index"
          :todo="todo">
        </todo-item>
    </ul> 
    `
    });
var vue = new Vue({
    el: '#app',
    data: {
        todos: [
            { title: 'Tarea 1', completed: false},
            { title: 'Tarea 2', completed: false},
            { title: 'Tarea 3', completed: false},
        ]
    },
    template: `
    <div>
        <todo-list 
            :todos="todos">
        </todo-list> 
        <todo-add @new="addNewTodo"></todo-add>
    </div>
    `,
    methods: {
        addNewTodo: function(todo){
            this.todos.push(todo);
        }
    }
});

