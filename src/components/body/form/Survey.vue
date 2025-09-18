<script setup>
defineProps({
    form: { type: Object, required: true }
})
</script>

<template>
    <div class="space-y-4 pt-2">
        <!-- 1. Are you missing teeth? -->
        <fieldset class="border border-transparent">
            <legend class="text-sm font-medium text-gray-800">1. Are you missing teeth? <span
                    class="text-red-500">*</span></legend>
            <div class="flex flex-wrap gap-4 mt-2 items-center">
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="missingTeeth" value="None" v-model="form.missingTeeth"
                        class="form-radio" />
                    <span class="text-sm">None</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="missingTeeth" value="One" v-model="form.missingTeeth"
                        class="form-radio" />
                    <span class="text-sm">One</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="missingTeeth" value="Two" v-model="form.missingTeeth"
                        class="form-radio" />
                    <span class="text-sm">Two</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="missingTeeth" value="Three+" v-model="form.missingTeeth"
                        class="form-radio" />
                    <span class="text-sm">Three+</span>
                </label>
            </div>
        </fieldset>

        <!-- 2. Do you have Gum Disease? -->
        <fieldset class="border border-transparent">
            <legend class="text-sm font-medium text-gray-800">2. Do you have Gum Disease? <span
                    class="text-red-500">*</span></legend>
            <div class="flex flex-wrap gap-4 mt-2 items-center">
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="gumDisease" value="None" v-model="form.gumDisease" class="form-radio" />
                    <span class="text-sm">None</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="gumDisease" value="Mild" v-model="form.gumDisease" class="form-radio" />
                    <span class="text-sm">Mild</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="gumDisease" value="Severe" v-model="form.gumDisease" class="form-radio" />
                    <span class="text-sm">Severe</span>
                </label>
            </div>
        </fieldset>

        <!-- 3. Do you have any previous dental implants? -->
        <fieldset class="border border-transparent">
            <legend class="text-sm font-medium text-gray-800">3. Do you have any previous dental
                implants? <span class="text-red-500">*</span></legend>
            <div class="flex gap-6 mt-2 items-center">
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="previousImplants" value="Yes" v-model="form.previousImplants"
                        class="form-radio" />
                    <span class="text-sm">Yes</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="previousImplants" value="No" v-model="form.previousImplants"
                        class="form-radio" />
                    <span class="text-sm">No</span>
                </label>
            </div>
        </fieldset>

        <!-- 4. Do you currently wear dentures? -->
        <fieldset class="border border-transparent">
            <legend class="text-sm font-medium text-gray-800">4. Do you currently wear dentures? <span
                    class="text-red-500">*</span></legend>
            <div class="flex gap-6 mt-2 items-center">
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="currentlyWearDentures" value="Yes" v-model="form.currentlyWearDentures"
                        class="form-radio" />
                    <span class="text-sm">Yes</span>
                </label>
                <label class="inline-flex items-center gap-2">
                    <input type="radio" name="currentlyWearDentures" value="No" v-model="form.currentlyWearDentures"
                        class="form-radio" />
                    <span class="text-sm">No</span>
                </label>
            </div>
        </fieldset>
    </div>
</template>