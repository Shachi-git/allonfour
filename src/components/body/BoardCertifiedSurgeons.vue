<script setup>
import ConsultationButton from "../ui/ConsultationButton.vue";


const surgeons = [
    {
        name: "Dr. Richard Nejat, DDS",
        title: "Diplomate, American Board of Periodontology",
        image: import.meta.env.BASE_URL + "surgeon/Dr.Richard-Nejat.webp"
    },
    {
        name: "Dr. Eugenie Lee, DDS",
        title: "Diplomate, American Board of Periodontology",
        image: import.meta.env.BASE_URL + "surgeon/Dr.Eugenie-Lee.webp"
    },
    {
        name: "Dr. Daniel Schinazi, DDS",
        title: "Diplomate, American Board of Periodontology",
        image: import.meta.env.BASE_URL + "surgeon/Dr.Daniel-Schinazi.webp"
    },
    {
        name: "Dr. Daniel Nejat, DMD",
        title: "Diplomate, American Board of Periodontology",
        image: import.meta.env.BASE_URL + "surgeon/Dr.Daniel-Nejat.webp"
    },
    {
        name: "Dr. Anne Marie, DDS",
        title: "Diplomate, American Board of Periodontology",
        image: import.meta.env.BASE_URL + "surgeon/Dr.Anne-Marie.webp"
    }
];
</script>

<template>
    <section class="w-full bg-white py-16 px-6">
        <div class="max-w-7xl mx-auto text-center space-y-6">
            <!-- Header -->
            <h1 class="text-4xl font-bold text-center">
                Our Board <span class="text-highlight-blue">Certified</span> All-on-4™ Surgeons
            </h1>
            <p class="text-gray-700 text-lg max-w-3xl mx-auto">
                Our team of board-certified periodontists are experts in All-on-4™ dental implant surgeries. Each doctor
                is a Diplomate of the American Board of Periodontology and holds advanced credentials in dental surgery
                and implantology.
            </p>

            <!-- Surgeon Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 pt-10">
                <div v-for="(surgeon, index) in surgeons" :key="index"
                    class="flex flex-col items-center text-center space-y-2">
                    <img :src="surgeon.image" :alt="surgeon.name"
                        class="w-32 h-32 rounded-full object-cover shadow-md" />
                    <h3 class="text-lg font-semibold text-gray-900">{{ surgeon.name }}</h3>
                    <p class="text-sm text-gray-600">{{ surgeon.title }}</p>
                    <p class="text-sm text-gray-500 italic">Periodontist</p>
                </div>
            </div>
            <div class="pt-10">
                <ConsultationButton />
            </div>
        </div>
    </section>
</template>