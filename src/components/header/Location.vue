<script setup>
import { MapPinIcon } from "@heroicons/vue/24/outline"
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"

const locations = ["Westchester", "Manhattan", "Long Island", "New Jersey"]

const showLocations = ref(false)
const locationsRef = ref(null)

onClickOutside(locationsRef, () => (showLocations.value = false))
</script>

<template>
    <div class="relative" ref="locationsRef">
        <div class="hidden lg:flex flex-row gap-4">
            <div v-for="(place, index) in locations" :key="index" class="flex flex-row gap-1 items-center">
                <MapPinIcon class="flex-none w-4 h-4 text-blue-700" aria-hidden="true" />
                <p class="text-sm">{{ place }}</p>
            </div>
        </div>
        <!--Mobile UI-->
        <div class="flex lg:hidden flex-row items-center">
            <div class="relative" ref="locationsRef">
                <button @click="showLocations = !showLocations"
                    class="bg-blue-700 text-white p-2 rounded-full flex items-center justify-center transform transition-transform duration-200 active:scale-105">
                    <MapPinIcon class="w-5 h-5" aria-hidden="true" />
                </button>
                <Transition name="fade">
                    <div v-if="showLocations"
                        class="absolute right-0 mt-2 bg-blue-100 shadow-lg rounded-xl p-3 w-65 z-50">
                        <div class="grid grid-cols-2 gap-2">
                            <div v-for="(place, index) in locations" :key="index"
                                class="flex flex-row gap-1 items-center">
                                <MapPinIcon class="w-4 h-4 text-blue-700" aria-hidden="true" />
                                <p class="text-sm">{{ place }}</p>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>
