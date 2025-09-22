<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";
import Image from "../ui/Image.vue"

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <section class="w-full py-10 px-6">
        <div class="w-full max-w-6xl mx-auto text-center space-y-8">
            <!-- Top Message -->
            <h2 class="text-3xl font-bold text-gray-800">
                Here to Help All-on-4™ <span class="text-blue-700">step</span>, Every of the Way!
            </h2>
            <p class="text-lg text-gray">
                We Provide The Treatment OPTIONS To Match Your BUDGET
            </p>

            <!-- Smile Gallery -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 px-8">
                <Image v-for="n in 6" :key="n" :src="`${baseUrl}smile/smile${n}.webp`" :alt="`Smile ${n}`"
                    className="rounded-md shadow-md object-cover w-full h-auto" />
            </div>

            <!-- Bottom Message -->
            <h1 class="text-4xl font-bold text-center">
                A <span class="text-blue-700">brand-new</span>, smile. One day. No more dentures. Just a
                lifetime of confidence and comfort.
            </h1>

            <!-- CTA Button -->
            <div class="flex justify-center">
                <ConsultationButton />
            </div>
        </div>
    </section>
</template>
