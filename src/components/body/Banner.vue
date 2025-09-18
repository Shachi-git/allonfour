<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";
import CallButton from "../ui/CallButton.vue";

</script>

<template>
  <div class="w-full relative shadow-xs z-5 py-10">
    <!-- Background Layer -->
    <div class="SO-bg absolute inset-0"></div>

    <!-- Content Layer -->
    <div
      class="relative z-10 flex flex-col w-full lg:flex-row gap-4 py-6 items-center justify-center px-4 max-w-[640px] mx-auto">
      <div class="space-y-4">
        <h1 class="text-4xl font-semibold text-white leading-tight text-center md:text-start">
          Get a FREE Second Opinion and Best Price Guarantee on
          <span class="text-highlight-blue">Dental Implants!</span>
        </h1>

        <p class="text-base text-white text-justify ">
          Bring in a treatment plan from any local dental implant licensed
          competitor and we'll beat the total treatment plan price. In many
          instances, we'll be able to save you even more money because we have
          our own lab, CBCT Scanner, and other technology in-house. The
          treatment plan must come from a US licensed local dentist dated within
          the past six months for comparable, credible dental services and it's
          subject to our verification.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 pt-4">
          <ConsultationButton class="flex-grow" />
          <CallButton class="border border-blue-600 text-white hover:text-white hover:bg-blue-600" />
        </div>
      </div>
    </div>
  </div>
</template>
