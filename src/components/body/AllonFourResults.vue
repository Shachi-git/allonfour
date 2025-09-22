<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";
import SmileGalleryPromo from "./SmileGalleryPromo.vue";
import Image from "../ui/Image.vue";

const caseStudies = [
    {
        title: `Smile <span class="text-blue-700">Restored</span> with All-on-4 After Decay-Full`,
        description: `Manhattan's very esthetics-oriented, had a lot of treatment done in Brazil (all upper teeth pulled out due to excessive decay-full upper denture). Upper jaw partial denture with metal clasps and remaining anterior teeth moderately periodontally involved. Now with a smile to be proud of.`,
        images: [
            { src: "/copyparty/u/johnpaul.olimpo/allonfour/Before.webp", alt: "Before - Decay" },
            { src: "/copyparty/u/johnpaul.olimpo/allonfour/After.webp", alt: "After - Restored" }
        ]
    },
    {
        title: `Smile <span class="text-blue-700">Restored</span> with All-on-4 After Periodontal Disease`,
        description: `Manhattan pt very esthetics-oriented, had a lot of treatment done in Brazil (all upper teeth pulled out due to excessive decay-full upper denture placed, lower jaw partial denture w/ metal clasps and remaining anterior teeth moderately periodontally involved). Now working on her lower jaw.`,
        images: [
            { src: "/copyparty/u/johnpaul.olimpo/allonfour/Before.webp", alt: "Before - Periodontal" },
            { src: "/copyparty/u/johnpaul.olimpo/allonfour/After.webp", alt: "After - Restored" }
        ]
    }
];
</script>

<template>
    <section class="w-full py-5 px-6">
        <div class="mx-auto space-y-12 items-center justify-center flex flex-col">
            <h1 class="w-full mx-auto text-4xl font-bold max-w-xl text-center">
                Read About Our Patients Incredible
                All-on-4™ <span class="text-blue-700">Transformation!</span>
            </h1>

            <div v-for="(study, index) in caseStudies" :key="index"
                class="flex flex-col lg:flex-row lg:items-center lg:gap-10 border border-gray-700/20 rounded-2xl p-5"
                :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''">
                <div class="grid grid-cols-2 gap-4 w-full mx-auto max-w-lg p-2">
                    <Image v-for="(img, i) in study.images" :key="`study-${index}-${i}`" :src="img.src" :alt="img.alt"
                        className="rounded-md shadow-md w-full object-cover" />
                </div>
                <div class="space-y-4 mt-4 lg:mt-0">
                    <h2 class="text-3xl font-bold text-gray-800" v-html="study.title"></h2>
                    <p class="text-gray-700 text-base leading-relaxed text-justify">{{ study.description }}</p>
                    <div class="flex justify-center md:justify-start">
                        <ConsultationButton />
                    </div>
                </div>
            </div>
        </div>

        <SmileGalleryPromo />
    </section>
</template>
