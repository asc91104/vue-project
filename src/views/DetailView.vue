<script setup>
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from "vue-router"
import { getTodo } from '~/localstorage.js'
import CollapseCard from '@/components/CollapseCard.vue'

let todoName = reactive({});

const route = useRoute();

onBeforeMount(() => {
  const { params } = route;
  todoName = getTodo(params.todoName);
  console.log(todoName);
})

</script>

<template>
  <CollapseCard title="TODO Detail">
      <div>
        <p class="text-2xl">TODO NAME: {{ todoName.name }}</p>
      </div>
  </CollapseCard>
</template>
