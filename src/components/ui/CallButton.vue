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
    <a href="tel:8777319866" :class="mergedClass">
        Call (877) 731-9866
    </a>
</template>