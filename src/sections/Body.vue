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


const pages = [Testimonial, Experience, UniqueChart]
const pages2 = [BoardCertifiedSurgeons, AllonFourResults, LocationDirectory]
</script>

<template>
    <div class="flex flex-col w-full">
        <div id="Home" name="Home">
            <Home />
        </div>

        <div v-for="(Component, index) in pages" :key="index" :class="[
            'flex w-full  p-4',
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
        ]">
            <component :is="Component" />
        </div>

        <Banner />
        <SmileJourney />
        <InfoSection />
        <AppointmentBanner />
        <div v-for="(Component, index) in pages2" :key="index" :class="[
            'p-4',
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
        ]">
            <component :is="Component" />
        </div>
        <AllonFourPricingNotice />
    </div>
</template>