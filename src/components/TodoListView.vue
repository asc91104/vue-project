<script setup>
import { defineProps, computed } from 'vue'
import { saveTodoList } from '~/localstorage.js'

const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
});

const todoCount = computed(() => props.todoList.length);

const removeTodo = (e) => {
    const todoName = e.currentTarget?.dataset.name;
    if (todoName) {
        const todoIndex = props.todoList.findIndex((todo) => todo.name == todoName);
        if (todoIndex !== -1) {
            props.todoList.splice(todoIndex, 1);
            saveTodoList(props.todoList);
        }
    }
};

</script>

<template>
    <div class="overflow-x-auto">
        <table class="table" v-if="todoList.length">
            <!-- head -->
            <thead>
                <tr>
                    <th>TODO Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr v-for="todo in todoList">
                <th>
                    <router-link :to="{ name: 'detail', params: { todoName: todo.name } }">
                        {{ todo.name }}
                    </router-link>
                </th>
                <th><button :data-name="todo.name" @click="removeTodo"><font-awesome-icon icon="trash" style="color: #ff0000;"/></button></th>
            </tr>
            </tbody>
        </table>
        <div class="mt-2">
            <p>Todo總數：{{ todoCount }}</p>
        </div>
    </div>
</template>