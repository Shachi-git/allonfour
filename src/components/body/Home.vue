<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'
import Table from './specialoffer/Table.vue'
</script>

<template>
    <!-- Main Wrapper with immediate background -->
    <section class="w-full px-3 md:px-0 shadow-xs z-5 bg-white py-3 pb-8 md:pb-14 lg:pb-26 background">
        <!-- Content container -->
        <div class="flex flex-col gap-4 py-6 items-start w-full max-w-[900px] px-4">
            <!-- Text + Offer -->
            <div class="flex flex-col w-full space-y-2">
                <!-- Headings -->
                <header class="space-y-2">
                    <h2 class="text-3xl font-normal text-blue-700">
                        #1 Dental Implant Centers in the
                        <span class="text-highlight-orange font-semibold">Tri-State area</span>
                    </h2>
                    <h1 class="text-5xl font-semibold text-blue-700">
                        Rediscover Your Smile with All-on-4™ Dental Implants
                    </h1>
                    <h3 class="text-2xl text-blue-700 font-semibold">
                        Most PPO insurance accepted.
                    </h3>
                </header>

                <!-- Info Section -->
                <div class="space-y-4">
                    <p class="text-black text-base leading-relaxed">
                        <span class="text-red-600 font-bold">Not accepted:</span> HMO, Medicare,
                        Medicaid, Fidelis, Healthfirst,
                        <span class="block">Metroplus and Affinity insurance.</span>
                    </p>

                    <h3 class="text-lg font-normal text-neutral-800 leading-tight">
                        A Permanent, Natural-Looking Solution in
                        <span class="text-highlight-orange font-semibold">Just One Day!</span>
                    </h3>

                    <!-- TV Logo -->
                    <figure class="flex md:justify-start justify-center">
                        <img src="/TV_Social_NYC_APID.webp" alt="As seen on TV and social in NYC" class="h-16 md:h-20"
                            width="447" loading="eager" />

                    </figure>

                    <!-- Offer Tables -->
                    <Table />

                    <!-- Note -->
                    <div class="flex flex-row gap-1 justify-start items-center">
                        <InformationCircleIcon class="h-5 w-5 text-highlight-orange" aria-hidden="true" />
                        <p class="text-highlight-orange italic text-sm font-medium">
                            Credit-check/Approval Required
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>