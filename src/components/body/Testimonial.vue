<script setup>
import VideoPlayer from "./videoplayer/VideoPlayer.vue";
import ConsultationButton from "../ui/ConsultationButton.vue";
</script>

<template>
    <div class="space-y-4 justify-center px-10 pt-62 md:pt-52 lg:pt-38 pb-10 items-center flex flex-col w-full">
        <h1 class="text-4xl font-bold w-full mx-auto max-w-xl text-center">
            A <span class="text-blue-700">Transformation</span> in Confidence and Smile
        </h1>
        <div class="flex flex-col items-center mx-auto max-w-[800px] w-full space-y-4">
            <div class="w-full aspect-video max-w-[800px]">
                <VideoPlayer />
            </div>
            <p class="text-sm italic text-gray-700 max-w-lg text-center">
                “I never thought at the age of 40, I would have all my teeth removed and
                wear dentures. With <span class="text-blue-700">All-On-Four</span>, I was able to smile again with
                new teeth” - Margaret
            </p>
        </div>

        <div class="flex justify-center md:justify-start">
            <ConsultationButton />
        </div>
    </div>
</template>
