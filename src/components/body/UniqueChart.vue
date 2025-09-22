<script setup>
import ConsultationButton from '../ui/ConsultationButton.vue';
import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/solid';

const features = [
    "Leave SAME DAY with Your Smile",
    "Doctors with 20+ Years of Experience",
    "Get a Dedicated Treatment Counselor & Team",
    "Personalized Treatments for Your Needs & Budget",
    "In-House Financing",
    "Free Digital Smile Design (see how you'll look)",
    "Meet Your Surgeon at Your 1st Appointment",
    "In-Office Hygienists Trained for All-On-4™ Cleanings",
    "Metal-Free - Metal Allergy-Free Ceramic Implants",
    "Alternatives if All-On-4™ is Not an Option for You",
    "Minimally Invasive All-On-4™ (no incisions or bone/gum cutting)",
    "No Hard Sell. We listen, educate, and advise. That's it."
]
</script>

<template>
    <div class="w-full bg-white p-8 space-y-3">
        <!-- Header -->
        <div>
            <p class="text-center text-sm text-neutral-700">OUR BEST SERVICE</p>
            <h1 class="text-4xl font-bold text-black text-center">
                What Makes Us <span class="text-blue-700">Unique</span>?
            </h1>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto w-full max-w-full justify-start md:justify-center flex" tabindex="0">
            <table class="min-w-[800px] table-fixed border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <thead class="bg-gray-100 border-b border-gray-300">
                    <tr>
                        <th class="px-4 py-2 w-2/3 font-medium text-gray-700 border-r border-gray-200">Features</th>
                        <th class="px-4 py-2 w-1/6 font-medium text-center text-gray-600 border-r border-gray-200">
                            Others
                        </th>
                        <th class="px-4 py-2 w-1/6 font-medium text-center text-blue-700">All-On-Four</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="(feature, index) in features" :key="index"
                        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                        <td class="px-4 py-3 text-gray-800 border-r border-gray-200">{{ feature }}</td>

                        <td class="px-4 py-3 text-center border-r border-gray-200">
                            <XMarkIcon class="h-5 text-red-600 mx-auto" aria-hidden="true" />
                        </td>

                        <td class="px-4 py-3 text-center">
                            <div class="bg-highlight-blue/10 text-blue-700 p-1 rounded-full flex justify-center">
                                <CheckIcon class="h-5" aria-hidden="true" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex justify-center pt-2">
            <ConsultationButton />
        </div>
    </div>
</template>
