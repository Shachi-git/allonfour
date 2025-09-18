<script setup>
import Location from "../components/header/Location.vue"
import Contacts from "../components/header/Contacts.vue"
</script>

<template>
  <header class="w-full bg-white p-6 flex items-center justify-between z-10 shadow-sm relative">
    <div class="flex items-center flex-shrink-0 lg:w-1/3 w-auto">
      <img src="/AOF-Logo.webp" alt="AllonFour Logo" class="h-8" />
    </div>
    <div class="flex justify-between items-center w-auto gap-2 lg:w-2/3">
      <div class="flex flex-1 justify-center">
        <Location />
      </div>
      <div class="flex flex-1 flex-shrink-10 justify-end">
        <Contacts />
      </div>
    </div>
  </header>

</template>
