<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";
import SmileGalleryPromo from "./SmileGalleryPromo.vue";
</script>

<template>
    <section class="w-full py-5 px-6">
        <div class="mx-auto space-y-12 items-center justify-center flex flex-col">
            <!-- Section Title -->
            <h1 class="w-full mx-auto text-4xl font-bold max-w-xl text-center">
                Read About Our Patients Incredible
                All-on-4™ <span class="text-highlight-blue">Transformation!</span>
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-700/20 rounded-2xl p-5">
                <!-- Left: Before & After Images -->
                <div class="grid grid-cols-2 gap-4 w-full mx-auto max-w-lg p-2 items-center">
                    <img src="/Before.png" alt="Before - Decay" class="rounded-md shadow-md w-full object-cover" />
                    <img src="/After.png" alt="After - Restored" class="rounded-md shadow-md w-full object-cover" />
                </div>

                <!-- Right: Case Study Text -->
                <div class="space-y-4">
                    <h2 class="text-3xl font-bold text-gray-800">
                        Smile <span class="text-highlight-blue">Restored</span> with All-on-4 After Decay-Full
                    </h2>
                    <p class="text-gray-700 text-base leading-relaxed text-justify">
                        Manhattan's very esthetics-oriented, had a lot of treatment done in Brazil (all upper teeth
                        pulled out due to excessive decay-full upper denture). Upper jaw partial denture with metal
                        clasps and remaining anterior teeth moderately periodontally involved. Now with a smile to be
                        proud of.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <ConsultationButton />
                    </div>
                </div>
            </div>

            <!-- Case Study 2: Periodontal Disease -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-700/20 rounded-2xl p-5">
                <!-- Left: Before & After Images -->


                <!-- Right: Case Study Text -->
                <div class="grid md:hidden grid-cols-2 gap-4 w-full mx-auto max-w-lg p-2 items-center">
                    <img src="/Before.png" alt="Before - Decay" class="rounded-md shadow-md w-full object-cover" />
                    <img src="/After.png" alt="After - Restored" class="rounded-md shadow-md w-full object-cover" />
                </div>
                <div class="space-y-4">
                    <h2 class="text-3xl font-bold text-gray-800">
                        Smile <span class="text-highlight-blue">Restored</span> with All-on-4 After Periodontal Disease
                    </h2>
                    <p class="text-gray-700 text-base leading-relaxed text-justify">
                        Manhattan pt very esthetics-oriented, had a lot of treatment done in Brazil (all upper teeth
                        pulled out due to excessive decay-full upper denture placed, lower jaw partial denture w/ metal
                        clasps and remaining anterior teeth moderately periodontally involved). Now working on her lower
                        jaw.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <ConsultationButton />
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-2 gap-4 w-full mx-auto max-w-lg p-2 items-center">
                    <img src="/Before.png" alt="Before - Decay" class="rounded-md shadow-md w-full object-cover" />
                    <img src="/After.png" alt="After - Restored" class="rounded-md shadow-md w-full object-cover" />
                </div>
            </div>
        </div>
        <SmileGalleryPromo />
    </section>
</template>