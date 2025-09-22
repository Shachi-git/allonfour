<script setup>
defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    sizes: { type: String, default: "(max-width: 768px) 100vw, 470px" },
    className: { type: String, default: "rounded-lg shadow-md w-full h-auto object-cover" },
    width: { type: [String, Number], default: 300 },
    height: { type: [String, Number], default: 80 }

});
</script>

<template>
    <img :src="src" :srcset="`${src} 480w, ${src} 768w, ${src} 1200w`" :sizes="sizes" :alt="alt" :class="className"
        :width="width" :height="height" loading="lazy" decoding="async" />
</template>