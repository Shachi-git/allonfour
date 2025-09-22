<script setup>
import CallButton from "../ui/CallButton.vue";
import { MapPinIcon } from "@heroicons/vue/24/outline"


const locations = [
    {
        name: "Manhattan",
        address: "12 East 40th St #508",
        city: "New York, NY 10016",
    },
    {
        name: "Long Island",
        address: "110 New Hyde Park Road",
        city: "Franklin Square, NY 11010",
    },
    {
        name: "Nutley",
        address: "230 Centre St.",
        city: "Nutley, NJ 07110",
    },
    {
        name: "Westchester",
        address: "21 Kraft Ave",
        city: "Bronxville, NY 10708",
    }
];
</script>
<template>
    <section class="w-full bg-white py-10 px-6">
        <div class="w-full max-w-6xl mx-auto space-y-12">
            <!-- Header -->
            <div class="text-center space-y-4">
                <h1 class="text-4xl font-bold text-center">
                    Our <span class="text-blue-700">Locations</span></h1>
                <p class="text-lg text-gray">Discover Our Convenient Locations Near You</p>
            </div>

            <!-- Location Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(location, index) in locations" :key="index"
                    class="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm space-y-3 text-center">

                    <div class="flex justify-center">
                        <MapPinIcon class="h-14 text-blue-700" aria-hidden="true" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800">{{ location.name }}</h3>
                    <p class="text-gray-700">{{ location.address }}</p>
                    <p class="text-gray-700">{{ location.city }}</p>
                    <div class="mt-7">
                        <CallButton class="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white" />
                    </div>
                </div>
            </div>
            <div class="text-center pt-10 space-y-2">
                <h3 class="text-xl text-blue-700 font-semibold">
                    Most PPO insurance accepted.
                </h3>
                <p class="text-black text-lg leading-relaxed">
                    <span class="text-red-600 font-bold">Not accepted:</span> HMO, Medicare,
                    Medicaid, Fidelis, Healthfirst,
                    <span class="block">Metroplus and Affinity insurance.</span>
                </p>
            </div>
        </div>
    </section>
</template>