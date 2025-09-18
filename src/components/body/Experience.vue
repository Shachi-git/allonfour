<script setup>
import ConsultationButton from '../ui/ConsultationButton.vue';
import { StarIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div
        class="relative flex flex-col lg:flex-row items-center justify-center w-full p-6 lg:p-8 space-y-6 lg:space-y-0 gap-10">
        <!-- Left: Image Section -->
        <div class="lg:relative w-full mx-auto lg:max-w-[470px]">
            <div class="w-full p-1 lg:p-10">
                <img src="../../assets/ALLAN GALLAWAY-Experience.png" alt="Dentist with patient"
                    class="rounded-lg shadow-md w-full h-auto z-10 object-cover" />
                <div
                    class="absolute top-0 left-0 bg-blue-600 text-white border-1 border-white px-6 py-6 rounded-full text-center">
                    <h2 class="text-xl font-bold leading-tight">
                        <span class="block">25</span>
                        <span class="block">Years</span>
                    </h2>
                </div>
            </div>
        </div>

        <!-- Right: Text Section -->
        <div class="w-full space-y-4 mx-auto lg:max-w-[400px] ">
            <h1 class="text-4xl font-bold text-black text-center md:text-start">
                What Our <span class="text-highlight-blue">Patients</span> Say
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
                <span class="text-highlight-blue font-semibold text-sm">Allan Gallaway</span>

                <div class="flex mt-3">
                    <StarIcon v-for="i in 5" :key="i" class="text-yellow-400 h-4 w-4" />
                </div>
            </div>
            <div class="flex justify-center md:justify-start">
                <ConsultationButton />
            </div>
        </div>
    </div>
</template>