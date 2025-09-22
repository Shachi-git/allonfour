<script setup>
import { useConsultationForm } from '../../../composables/useConsultationForm'

const {
    step,
    surveyIndex,
    form,
    formSteps,
    surveyQnA,
    touched,
    surveyTouched,
    errors,
    isFormComplete,
    currentSurvey,
    containerNext,
    containerPrev,
    submitForm
} = useConsultationForm()
</script>

<template>
    <div class="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
        <h3 class="text-xl font-semibold text-gray-800">Schedule Your FREE CONSULTATION</h3>

        <form class="space-y-4" @submit="submitForm" novalidate>
            <!-- Steps 1..6 -->
            <div v-if="step <= formSteps.length">
                <label :for="formSteps[step - 1].key" class="block text-base font-medium text-gray-700">
                    {{ formSteps[step - 1].label }}
                    <span v-if="formSteps[step - 1].required" class="text-red-600">*</span>
                </label>

                <input v-if="['text', 'email', 'tel'].includes(formSteps[step - 1].type)" :id="formSteps[step - 1].key"
                    v-model="form[formSteps[step - 1].key]" :type="formSteps[step - 1].type"
                    :placeholder="formSteps[step - 1].placeholder || `Enter ${formSteps[step - 1].label}`"
                    class="w-full border border-gray-300 rounded-md p-2"
                    @blur="touched[formSteps[step - 1].key] = true" />

                <select v-else-if="formSteps[step - 1].type === 'select'" :id="formSteps[step - 1].key"
                    v-model="form[formSteps[step - 1].key]" class="w-full border border-gray-300 rounded-md p-2">
                    <option value="">Select option</option>
                    <option v-for="choice in formSteps[step - 1].choices" :key="choice" :value="choice">
                        {{ choice }}
                    </option>
                </select>

                <p v-if="errors[formSteps[step - 1].key]" class="text-sm text-red-600 mt-1">
                    {{ errors[formSteps[step - 1].key] }}
                </p>
            </div>

            <!-- Step 7: Survey -->
            <div v-else-if="step === formSteps.length + 1" class="p-3">
                <div v-if="currentSurvey()">
                    <fieldset>
                        <legend class="text-sm font-medium text-gray-800 mb-2">
                            {{ currentSurvey().label }} <span class="text-red-600">*</span>
                        </legend>

                        <div v-if="currentSurvey().type === 'radio'" class="flex flex-wrap gap-4 items-center">
                            <label v-for="choice in currentSurvey().choices" :key="choice.value"
                                class="inline-flex items-center gap-2 text-sm">
                                <input type="radio" :id="`${currentSurvey().key}-${choice.value}`"
                                    :name="currentSurvey().key" :value="choice.value"
                                    v-model="form[currentSurvey().key]" class="form-radio h-4 w-4" />
                                <span class="text-sm">{{ choice.label }}</span>
                            </label>
                        </div>

                        <p v-if="surveyTouched[currentSurvey().key] && !form[currentSurvey().key]"
                            class="text-sm text-red-600 mt-2">
                            Please answer this question to continue.
                        </p>
                    </fieldset>
                </div>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between items-center">
                <button type="button" @click="containerPrev" class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    aria-label="Back">
                    Back
                </button>

                <button
                    v-if="(step <= formSteps.length) || (step === formSteps.length + 1 && surveyIndex < surveyQnA.length - 1)"
                    type="button" @click="containerNext"
                    class="ml-auto px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800" aria-label="Next">
                    Next
                </button>

                <button v-else type="submit" :disabled="!isFormComplete" aria-label="Submit form"
                    class="ml-auto px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>