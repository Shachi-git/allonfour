<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const plans = [
    {
        title: 'One Full Arch',
        monthly: 299,
        features: ['Affordable Financing', 'Zero Down-Payment'],
    },
    {
        title: 'Full Mouth',
        monthly: 597,
        features: ['Affordable Financing', 'Zero Down-Payment'],
    },
]
</script>
<template>
    <div class="bg-blue-700 p-4  max-w-[650px] rounded-2xl space-y-4">
        <h3 class="text-xl text-white font-semibold"> SPECIAL OFFER:</h3>
        <div class="flex flex-col md:flex-row gap-6 max-w-[600px] mx-auto">
            <div v-for="(plan, index) in plans" :key="index"
                class="flex-1 bg-white rounded-lg shadow-md p-3 text-center">
                <h2 class="text-3xl font-bold mb-2 text-highlight-orange">{{ plan.title }}</h2>
                <div class="flex items-center gap-4 mb-4">
                    <hr class="flex-grow border-t border-gray-900" />
                    <p class="text-3xl font-semibold text-blue-700 whitespace-nowrap">
                        ${{ plan.monthly }}<span class="text-base">/mo</span>
                    </p>
                    <hr class="flex-grow border-t border-gray-900" />
                </div>

                <ul class="grid text-gray-700">
                    <li v-for="(feature, i) in plan.features" :key="i"
                        class="flex items-center justify-center gap-2 text-base leading-none">
                        <CheckCircleIcon class="w-5 h-5 text-blue-700 " aria-hidden="true" />
                        <span class="text-blue-700 font-medium">{{ feature }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>