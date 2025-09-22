<script setup>
import { computed } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})

const mergedClass = computed(() =>
    `border text-center font-semibold px-6 py-3 rounded-md transition duration-200${props.class}`.trim()
)
</script>


<template>
    <a href="tel:8777319866" :class="mergedClass" aria-label="Call">
        Call (877) 696-4738
    </a>
</template>