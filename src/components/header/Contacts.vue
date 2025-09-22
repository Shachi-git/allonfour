<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline"
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"
import CallButton from "../ui/CallButton.vue" // <-- your reusable CallButton

const showContact = ref(false)
const contactRef = ref(null)

onClickOutside(contactRef, () => (showContact.value = false))
</script>

<template>
    <!-- Desktop -->
    <div class="hidden lg:flex flex-row items-center gap-2">
        <p class="text-xs text-gray-800 text-right">
            Got an urgent implant question?
            <span class="block">
                Call us now - se habla español!
            </span>
        </p>
        <CallButton class="border-blue-700 py-1 text-blue-700 hover:bg-blue-700 hover:text-white" />
    </div>

    <!-- Mobile -->
    <div class="flex lg:hidden flex-row gap-3 items-center">
        <div class="relative" ref="contactRef">
            <button @click="showContact = !showContact"
                class="bg-blue-700 text-white p-2 rounded-full flex items-center justify-center transform transition-transform duration-200 active:scale-105">
                <PhoneIcon class="w-5 h-5" aria-hidden="true" />
            </button>

            <Transition name="fade">
                <div v-if="showContact" class="absolute right-0 mt-2 bg-blue-100 shadow-lg rounded-xl p-3 w-64 z-50">
                    <p class="text-sm text-black mb-2">
                        Got an urgent implant question?<br />
                        Call us now - se habla español!
                    </p>
                    <CallButton
                        class="border-blue-700 flex justify-center text-blue-700 hover:bg-blue-700 hover:text-white" />
                </div>
            </Transition>
        </div>
    </div>
</template>
