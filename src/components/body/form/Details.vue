<script setup>
import { reactive, computed } from 'vue'
import Survey from './Survey.vue'

const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactTime: "",
    location: "",
    missingTeeth: "",
    gumDisease: "",
    previousImplants: "",
    currentlyWearDentures: ""
})

const touched = reactive({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
})

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone) {
    return /^[0-9]{7,15}$/.test(phone.replace(/\D/g, ''))
}

const errors = computed(() => ({
    firstName: touched.firstName && !form.firstName.trim() ? "First name is required." : "",
    lastName: touched.lastName && !form.lastName.trim() ? "Last name is required." : "",
    email: touched.email && (!form.email.trim() ? "Email is required." : !isValidEmail(form.email) ? "Invalid email format." : ""),
    phone: touched.phone && (!form.phone.trim() ? "Phone number is required." : !isValidPhone(form.phone) ? "Invalid phone number." : "")
}))

const isFormComplete = computed(() => {
    return (
        form.firstName.trim() &&
        form.lastName.trim() &&
        form.email.trim() &&
        isValidEmail(form.email) &&
        form.phone.trim() &&
        isValidPhone(form.phone) &&
        form.contactTime &&
        form.location &&
        form.missingTeeth &&
        form.gumDisease &&
        form.previousImplants &&
        form.currentlyWearDentures
    )
})

function submitForm(e) {
    e.preventDefault()
    console.log("Submitting form:", JSON.parse(JSON.stringify(form)))

    Object.keys(form).forEach(key => {
        form[key] = ""
    })

    Object.keys(touched).forEach(key => {
        touched[key] = false
    })
}
</script>

<template>
    <div class="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
        <h3 class="text-xl font-semibold text-gray-800">
            Schedule Your FREE CONSULTATION
        </h3>

        <form class="space-y-4" @submit="submitForm" novalidate>
            <!-- Name Fields -->
            <div class="flex flex-row gap-4">
                <div class="flex flex-grow flex-col">
                    <label class="block text-sm font-medium text-gray-700">First Name <span
                            class="text-red-500">*</span></label>
                    <input v-model="form.firstName" @blur="touched.firstName = true" type="text"
                        class="w-full border border-gray-300 rounded-md p-2" required />
                    <p v-if="errors.firstName" class="text-sm text-red-500 mt-1">{{ errors.firstName }}</p>
                </div>

                <div class="flex flex-grow flex-col">
                    <label class="block text-sm font-medium text-gray-700">Last Name <span
                            class="text-red-500">*</span></label>
                    <input v-model="form.lastName" @blur="touched.lastName = true" type="text"
                        class="w-full border border-gray-300 rounded-md p-2" required />
                    <p v-if="errors.lastName" class="text-sm text-red-500 mt-1">{{ errors.lastName }}</p>
                </div>
            </div>

            <!-- Contact Fields -->
            <div class="flex flex-row gap-4">
                <div class="flex flex-grow flex-col">
                    <label class="block text-sm font-medium text-gray-700">Email Address <span
                            class="text-red-500">*</span></label>
                    <input v-model="form.email" @blur="touched.email = true" type="email"
                        class="w-full border border-gray-300 rounded-md p-2" required />
                    <p v-if="errors.email" class="text-sm text-red-500 mt-1">{{ errors.email }}</p>
                </div>

                <div class="flex flex-grow flex-col">
                    <label class="block text-sm font-medium text-gray-700">Mobile Number <span
                            class="text-red-500">*</span></label>
                    <input v-model="form.phone" @blur="touched.phone = true" type="tel"
                        class="w-full border border-gray-300 rounded-md p-2" required />
                    <p v-if="errors.phone" class="text-sm text-red-500 mt-1">{{ errors.phone }}</p>
                </div>
            </div>

            <!-- Dropdowns -->
            <div class="flex flex-row gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Contact Time <span
                            class="text-red-500">*</span></label>
                    <select v-model="form.contactTime" class="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select contact time</option>
                        <option value="8AM-Noon">8AM-Noon</option>
                        <option value="Noon-4PM">Noon-4PM</option>
                        <option value="4PM-7PM">4PM-7PM</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Choose Your Location <span
                            class="text-red-500">*</span></label>
                    <select v-model="form.location" class="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select location</option>
                        <option value="New York">New York</option>
                        <option value="Long Island">Long Island</option>
                        <option value="Nutley, New Jersey">Nutley, New Jersey</option>
                        <option value="Bronxville, Westchester">Bronxville, Westchester</option>
                    </select>
                </div>
            </div>

            <Survey :form="form" />

            <!-- Submit Button -->
            <button type="submit" :disabled="!isFormComplete" class="w-full py-2 rounded-md transition
          text-white
          bg-blue-500 hover:bg-blue-600
          disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                Submit
            </button>
        </form>
    </div>
</template>