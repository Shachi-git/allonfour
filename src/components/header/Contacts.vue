<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline"
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"

const showContact = ref(false)
const contactRef = ref(null)

onClickOutside(contactRef, () => (showContact.value = false))
</script>

<template>
    <!-- Desktop -->
    <div class="hidden lg:flex flex-row items-center gap-2">
        <p class="text-xs text-gray-500 text-right">
            Got an urgent implant question?
            <span class="block">
                Call us now - se habla español!
            </span>
        </p>
        <a href="tel:8773499270"
            class="bg-blue-200 px-3 py-1 rounded-2xl flex flex-row items-center gap-1 transform transition-transform duration-200 hover:scale-105">
            <PhoneIcon class="w-4 h-4 text-blue-500" />
            <span class="text-lg text-blue-500 font-semibold">(877) 696-4738</span>
        </a>
    </div>

    <!-- Mobile -->
    <div class="flex lg:hidden flex-row gap-3 items-center">
        <div class="relative" ref="contactRef">
            <button @click="showContact = !showContact"
                class="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center transform transition-transform duration-200 active:scale-105">
                <PhoneIcon class="w-5 h-5" />
            </button>

            <Transition name="fade">
                <div v-if="showContact" class="absolute right-0 mt-2 bg-blue-100 shadow-lg rounded-xl p-3 w-64 z-50">
                    <p class="text-sm text-gray-600 mb-2">
                        Got an urgent implant question?<br />
                        Call us now - se habla español!
                    </p>
                    <a href="tel:8773499270"
                        class="bg-blue-500 text-white px-3 py-2 rounded-lg flex flex-row items-center gap-2 w-full justify-center transform transition-transform duration-200 active:scale-105">
                        <PhoneIcon class="w-5 h-5" />
                        <span class="font-semibold">(877) 696-4738</span>
                    </a>
                </div>
            </Transition>
        </div>
    </div>
</template>
