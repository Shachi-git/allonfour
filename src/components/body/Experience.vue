<script setup>
import ConsultationButton from '../ui/ConsultationButton.vue';
import { StarIcon } from '@heroicons/vue/24/solid';
import Image from '../ui/Image.vue';
</script>

<template>
    <div
        class="relative flex flex-col lg:flex-row items-center justify-center w-full p-6 lg:p-8 space-y-6 lg:space-y-0 gap-10">

        <div class="lg:relative lg:max-w-[470px]">
            <div class="w-full p-1 lg:p-10">
                <Image src="/copyparty/u/johnpaul.olimpo/allonfour/ALLAN-GALLAWAY-Experience.webp"
                    alt="Dentist with patient" className="rounded-lg shadow-md w-full h-auto z-10 object-cover" />
                <div
                    class="absolute top-2 left-2 md:top-0 md:left-0 bg-blue-700 text-white border-1 border-white p-6 rounded-full text-center">
                    <h2 class="text-xl font-bold leading-tight">
                        <span class="block">25</span>
                        <span class="block">Years</span>
                    </h2>
                </div>
            </div>
        </div>

        <div class="space-y-4 lg:max-w-[400px]">
            <h1 class="text-4xl font-bold text-black text-center md:text-start">
                What Our <span class="text-blue-700">Patients</span> Say
            </h1>
            <h3 class="text-lg font-light text-center md:text-start">
                Life-Changing Smiles, Unforgettable Experiences
            </h3>
            <div class="bg-gray-300/70 p-2 rounded-xl space-y-3">
                <p class="text-base text-gray-800">
                    “At 85, I was tired of dealing with unstable dentures and tooth decay.
                    After getting All-On-4 implants with a Nanoceramic bridge at the Grand Central office,
                    I can now eat, speak, and smile with confidence. It's never too late for a beautiful,
                    permanent smile!”
                </p>
                <span class="text-blue-700 font-semibold text-sm">Allan Gallaway</span>

                <div class="flex mt-3" aria-hidden="true">
                    <StarIcon v-for="i in 5" :key="i" class="text-yellow-400 h-4 w-4" />
                </div>
            </div>
            <div class="flex justify-center md:justify-start">
                <ConsultationButton />
            </div>
        </div>
    </div>
</template>
