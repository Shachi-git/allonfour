<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";

const sections = [
    {
        title: `Create a <span class="text-highlight-blue">Personalized</span> Plan with Your Implant Surgeon!`,
        content: `We're all unique, so creating a Personalized Treatment Plan for your smile is the most important step towards getting the smile of your dreams! Your dental implant surgeon will meet with you and start this process on day one. S/he listens to your story, your wishes, the functionality you've lost, any pain you've been feeling, etc. It's our time to listen and absorb every detail 
    in a safe, nurturing, non-rushed, and empathetic environment. If you have photos of the smile you want, great! We have many no-dentures, same-day All-on-4™ treatment options, so if budget is a factor, let us know, we'll work with you. Botched job? We'll fix that. The idea is to creatively personalize your plan so All-on-4™ SAME DAY dental implants, which avoids dentures, is an option for you.`,
        image: "/Perio_banner-image-1.png",
        reverse: true
    },
    {
        title: `Your Treatment <span class="text-highlight-blue">Counselor</span> Makes This Easy`,
        content: `Next, you'll meet your dedicated Treatment Counselor, your friendly point person who will take care of you all throughout your dental implant journey.
She aims to make every step easy and to ensure your total comfort throughout the process.`,
        image: "/doctor-and-patient-2.png",
        reverse: false
    },
    {
        title: `Create Your <span class="text-highlight-blue">3D Smile Design</span> with Your Surgeon`,
        content: `Next, we do a simple 3D image that allows us to see your jawbone and create 3D models of your teeth in our in-house lab. That's right, you won't have to travel elsewhere. During a follow-up appointment, you'll get to see your new smile and you and your doctor can tweak it to your liking with our 3D computer-aided software, choose color shades, etc. If you are traveling long distances or need to shorten the process, we are able to accommodate you. Then, you are ready for your new smile!`,
        image: "/3D-smile-design.png",
        reverse: true
    },
    {
        title: `Go home with your new <span class="text-highlight-blue">smile</span> today!`,
        content: `Next, you'll meet your dedicated Treatment Counselor, your friendly point person who will take care of you all throughout your dental implant journey. S/he has many years of dental implant and All-on-4™ experience and will answer any questions, handle any issues, keep you informed, deal with finances, and coordinate your treatment plan with you and your doctor from start to finish. S/he aims to make every step easy and to ensure your total comfort throughout the process. Your Treatment Counselor also plays a big role in Personalizing your Plan and will do everything possible to make All-on-4™ possible for you from financing to 3D smile design.`,
        image: "/doctor-and-patient-3.png",
        reverse: false
    }
];
</script>

<template>
    <div>
        <div v-for="(section, index) in sections" :key="index"
            :class="['w-full py-10', section.reverse ? 'bg-white' : 'bg-gray-100']">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-6 lg:px-12 py-10 max-w-6xl mx-auto">
                <!-- Image Section -->
                <div :class="['w-full', section.reverse ? 'lg:order-2' : 'lg:order-1']">
                    <img :src="section.image" alt="Section image"
                        class="rounded-lg shadow-md w-full h-auto object-cover" />
                </div>

                <!-- Text Section -->
                <div :class="['flex flex-col justify-start space-y-6', section.reverse ? 'lg:order-1' : 'lg:order-2']">
                    <h1 class="text-4xl font-bold text-black text-center md:text-start" v-html="section.title">
                    </h1>
                    <p class="text-gray-700 text-lg whitespace-pre-line text-justify">
                        {{ section.content }}
                    </p>
                    <ConsultationButton />
                </div>
            </div>
        </div>
    </div>
</template>