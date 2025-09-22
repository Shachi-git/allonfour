<script setup>
import Home from '../components/body/Home.vue'
import Testimonial from '../components/body/Testimonial.vue'
import Experience from '../components/body/Experience.vue'
import UniqueChart from '../components/body/UniqueChart.vue'
import Banner from '../components/body/Banner.vue'
import InfoSection from '../components/body/InfoSection.vue'
import SmileJourney from '../components/body/SmileJourney.vue'
import AppointmentBanner from '../components/body/AppointmentBanner.vue'
import BoardCertifiedSurgeons from '../components/body/BoardCertifiedSurgeons.vue'
import AllonFourResults from '../components/body/AllonFourResults.vue'
import LocationDirectory from '../components/body/LocationDirectory.vue'
import AllonFourPricingNotice from '../components/body/AllonFourPricingNotice.vue'
import ConsultationForm from '../components/body/form/ConsultationForm.vue'

const pages = [Testimonial, Experience, UniqueChart]
const pages2 = [BoardCertifiedSurgeons, AllonFourResults, LocationDirectory]
</script>

<template>
    <div class="w-full">
        <!-- Home Section -->
        <div id="Home" name="Home" class="relative">
            <Home />

            <!-- Floating Consultation Form -->
            <div
                class="absolute left-1/2 bottom-[-15rem] md:bottom-[-12rem] lg:bottom-[-6rem] transform -translate-x-1/2 w-full max-w-4xl px-4">
                <ConsultationForm />
            </div>
        </div>

        <div v-for="(Component, index) in pages" :key="index" :class="[
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
        ]">
            <component :is="Component" />
        </div>

        <Banner />
        <SmileJourney />
        <InfoSection />
        <AppointmentBanner />
        <div v-for="(Component, index) in pages2" :key="index" :class="[
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
        ]">
            <component :is="Component" />
        </div>
        <AllonFourPricingNotice />
    </div>
</template>