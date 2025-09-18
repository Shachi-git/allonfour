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
        <div>
            <p class="text-center text-sm text-neutral-400">OUR BEST SERVICE</p>
            <h1 class="text-4xl font-bold text-black text-center">
                What Makes Us <span class="text-highlight-blue">Unique</span>?</h1>
        </div>

        <div class="overflow-x-auto w-full max-w-full justify-start md:justify-center flex">
            <table class="min-w-[800px] table-fixed border border-gray-300 text-left">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 w-2/3 font-medium text-gray-700">Features</th>
                        <th class="px-4 py-2 w-1/6 font-medium text-red-500 text-center">Others</th>
                        <th class="px-4 py-2 w-1/6 font-medium text-green-600 text-center">All-On-Four</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(feature, index) in features" :key="index" class="border-t">
                        <td class="px-4 py-3 text-gray-800">{{ feature }}</td>
                        <td class="px-4 py-3 text-center text-red-500">
                            <div class="bg-red-200 p-1 rounded-full flex justify-center">
                                <XMarkIcon class="h-5" />

                            </div>
                        </td>
                        <td class="px-4 py-3 text-center text-green-600  ">
                            <div class="bg-green-200 p-1 rounded-full flex justify-center">
                                <CheckIcon class="h-5" />
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