<script setup>
import { computed } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})

const mergedClass = computed(() =>
    `bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 ${props.class}`.trim()
)

function scrollToHome() {
    const el = document.getElementById('Home')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <button @click="scrollToHome" :class="mergedClass">
        <slot>Schedule Your FREE Consultation</slot>
    </button>
</template>