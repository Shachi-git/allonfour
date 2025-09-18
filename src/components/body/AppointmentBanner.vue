<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";
import CallButton from "../ui/CallButton.vue";

</script>

<template>
    <div class="w-full banner-bg text-white py-12 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Text Section -->
            <div class="space-y-4">
                <h1 class="text-4xl font-bold">
                    BOOK YOUR APPOINTMENT
                </h1>
                <p class="text-lg leading-relaxed">
                    Don't wait! Our current promotion for All-on-4 expires on <span class="font-semibold">June 30th
                        2023</span>.
                    When you book, you will lock in your discount and first <span class="font-semibold">FREE
                        Consultation</span>.
                </p>
            </div>

            <!-- Button Section -->
            <div class="flex flex-col gap-4 lg:justify-center">
                <ConsultationButton />
                <CallButton class="border-white text-white hover:bg-white hover:text-blue-600" />
            </div>
        </div>
    </div>
</template>