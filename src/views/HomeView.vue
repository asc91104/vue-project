<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import CollapseCard from '@/components/CollapseCard.vue'
import TodoListView from '@/components/TodoListView.vue';
import { getTodoList, saveTodoList } from '~/localstorage.js'

const todoList = reactive([]);

const todoName = ref('');

const AddTodo = () => {
  if (todoName.value !== "" ) {
    const todoIndex = todoList.findIndex((todo) => todo.name == todoName.value);
    if (todoIndex === -1) {
      const todo = { name: todoName.value };
      todoList.unshift(todo);
      saveTodoList(todoList);
      todoName.value = '';
    } else {
      alert(`TODO Name: ${todoName.value} 已存在，不可新增`)
    }
  }
};

onBeforeMount(() => {
  const data = getTodoList()
  if (data) {
    todoList.push(...data)
  }
});

</script>

<template>
  <CollapseCard title="ADD TODO">
    <div class="flex">
      <input type="text" placeholder="TODO Name為唯一" class="input input-lg input-bordered w-full max-w-xs text-2xl" v-model="todoName"/>
      <button class="btn btn-lg btn-primary ml-2" @click="AddTodo">ADD</button>
    </div>
  </CollapseCard>
  <CollapseCard title="TODO List">
    <TodoListView :todoList="todoList"></TodoListView>
  </CollapseCard>
</template>
