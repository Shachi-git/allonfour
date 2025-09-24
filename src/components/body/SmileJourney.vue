<script setup>
import CallButton from "../ui/CallButton.vue";
import Image from "../ui/Image.vue";
</script>

<template>
    <div class="w-full py-10 bg-gray-100">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-6 lg:px-12 py-10 w-full max-w-6xl mx-auto border border-gray-700/10 rounded-2xl">
            <!-- Image Section -->
            <div class="w-full">
                <Image src="/allonfour/doctor-and-patient-1.webp" alt="Doctor with patient consultation"
                    className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>

            <!-- Text Section -->
            <div class="flex flex-col justify-start space-y-6">
                <h1 class="text-4xl font-bold text-black text-center md:text-start">
                    Our <span class="text-blue-700">approach</span> is tailored to
                    your unique needs
                </h1>
                <p class="text-gray text-lg whitespace-pre-line text-justify">
                    With 25+ years of experience perfecting the All-On-4™ procedure, our
                    work shines in every smile we restore!
                </p>
                <p class="text-gray text-lg whitespace-pre-line text-justify">
                    With our gentle approach and advanced techniques, we ensure a painless
                    process that leads to a healthy, beautiful smile of your dreams.
                </p>
                <CallButton class="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white" />
            </div>
        </div>
    </div>
</template>
