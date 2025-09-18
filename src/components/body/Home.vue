<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'
import ConsultationForm from './form/ConsultationForm.vue';
</script>

<template>
    <div class="min-h-screen w-full relative shadow-xs z-5">
        <!-- 1. Background Section -->
        <div class="background absolute inset-0"></div>

        <!-- 2. Content Layer -->
        <div class="relative z-10 flex flex-col">
            <div class="flex flex-col lg:flex-row gap-4 py-6 items-center w-full">
                <!-- Left Column: Text + Offer -->
                <div class="flex flex-col max-w-[640px] space-y-2 px-4">
                    <!-- Header Section -->
                    <div class="space-y-2">
                        <h2 class="text-2xl font-base text-highlight-blue">
                            #1 Dental Implant Centers in the
                            <span class="text-highlight-orange font-semibold">Tri-State area</span>
                        </h2>
                        <h1 class="text-4xl font-semibold text-blue-500 leading-tight">
                            Rediscover Your Smile with All-on-4™ Dental Implants
                        </h1>
                        <h3 class="text-xl text-highlight-blue font-semibold">
                            Most PPO insurance accepted.
                        </h3>
                    </div>

                    <!-- Info Section -->
                    <div class="space-y-4">
                        <p class="text-black text-base leading-relaxed">
                            <span class="text-red-500 font-bold">Not accepted:</span> HMO, Medicare,
                            Medicaid, Fidelis, Healthfirst,
                            <span class="block">Metroplus and Affinity insurance.</span>
                        </p>

                        <h3 class="text-lg font-normal text-neutral-800 leading-tight">
                            A Permanent, Natural-Looking Solution in
                            <span class="text-highlight-orange font-semibold">Just One Day!</span>
                        </h3>

                        <div class="flex justify-start">
                            <img src="../../assets/TV_Social_NYC_APID.png" alt="TV Social" class="h-16 md:h-20" />
                        </div>

                        <div class="hidden md:flex justify-start">
                            <img src="../../assets/special-offer-table.png" alt="Special Offer" class="h-63" />
                        </div>


                        <div class="flex md:hidden justify-center items-center flex-col gap-2">
                            <img src="../../assets/one-full-arch-table.png" alt="One full arch table" class="h-65" />
                            <img src="../../assets/full-month-table.png" alt="Full month table" class="h-65" />
                        </div>

                        <div class="flex flex-row gap-1 justify-start items-center">
                            <InformationCircleIcon class="h-5 w-5 text-highlight-orange" aria-hidden="true" />
                            <p class="text-highlight-orange italic text-sm font-medium">
                                Credit-check/Approval Required
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Consultation Form -->
                <div class="w-[400px] md:w-[500px] flex-shrink-0 lg:ml-[-80px]">
                    <ConsultationForm />
                </div>
            </div>
        </div>
    </div>
</template>