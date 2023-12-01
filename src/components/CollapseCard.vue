<script setup>
import { ref, defineProps } from 'vue'

const isCollapseOpen = ref(true);
defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="card w-200 bg-base-100 shadow-xl mt-4">
      <div class="card-body">
        <div class="collapse" :class="isCollapseOpen ? 'collapse-open' : 'collapse-close'">
            <div class="collapse-title text-4xl font-medium">
                <div class="flex">
                    <p class="text-4xl mb-4">{{ title }}</p>
                    <div class="justify-end">
                        <label class="swap">
                            <input type="checkbox" @click="isCollapseOpen = !isCollapseOpen"/> 
                            <div class="swap-on">+</div>
                            <div class="swap-off">-</div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="collapse-content"> 
                <slot></slot>
            </div>
        </div>
      </div>
    </div>
</template>