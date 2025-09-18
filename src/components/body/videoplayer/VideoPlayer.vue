<script setup>
import { ref } from "vue"

const videoLoaded = ref(false)

function loadVideo() {
    videoLoaded.value = true
}
</script>

<template>
    <div class="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        @click="loadVideo">
        <template v-if="!videoLoaded">
            <img src="https://img.youtube.com/vi/l5nVouN2wpI/hqdefault.jpg" alt="Margaret's Smile Makeover"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50">
                <svg class="w-16 h-16 text-white opacity-90 group-hover:opacity-100" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </template>

        <iframe v-else src="https://www.youtube.com/embed/l5nVouN2wpI?autoplay=1" title="Margaret's Smile Makeover"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen class="w-full h-full"></iframe>
    </div>

</template>
