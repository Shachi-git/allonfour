import { reactive, ref, computed } from "vue";
import axios from "axios";

export function useConsultationForm() {
  const step = ref(1);
  const surveyIndex = ref(0);

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
    currentlyWearDentures: "",
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isValidPhone(phone) {
    // strip non-digits then test length between 7 and 15
    const digits = String(phone || "").replace(/\D/g, "");
    return /^[0-9]{7,15}$/.test(digits);
  }

  const formSteps = [
    { key: "firstName", label: "First Name", type: "text", required: true },
    { key: "lastName", label: "Last Name", type: "text", required: true },
    { key: "email", label: "Email Address", type: "email", required: true },
    { key: "phone", label: "Mobile Number", type: "tel", required: true },
    {
      key: "contactTime",
      label: "Contact Time",
      type: "select",
      choices: ["8AM-Noon", "Noon-4PM", "4PM-7PM"],
      required: true,
    },
    {
      key: "location",
      label: "Choose Your Location",
      type: "select",
      choices: [
        "New York",
        "Long Island",
        "Nutley, New Jersey",
        "Bronxville, Westchester",
      ],
      required: true,
    },
  ];

  const surveyQnA = [
    {
      key: "missingTeeth",
      label: "1. Are you missing teeth?",
      type: "radio",
      choices: [
        { value: "None", label: "None" },
        { value: "One", label: "One" },
        { value: "Two", label: "Two" },
        { value: "Three+", label: "Three+" },
      ],
    },
    {
      key: "gumDisease",
      label: "2. Do you have Gum Disease?",
      type: "radio",
      choices: [
        { value: "None", label: "None" },
        { value: "Mild", label: "Mild" },
        { value: "Severe", label: "Severe" },
      ],
    },
    {
      key: "previousImplants",
      label: "3. Do you have any previous dental implants?",
      type: "radio",
      choices: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      key: "currentlyWearDentures",
      label: "4. Do you currently wear dentures?",
      type: "radio",
      choices: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
  ];

  // touched flags for form steps
  const touched = reactive({});
  formSteps.forEach((f) => {
    touched[f.key] = false;
  });

  const surveyTouched = reactive({});
  surveyQnA.forEach((q) => {
    surveyTouched[q.key] = false;
  });

  const errors = computed(() => {
    const e = {};
    e.firstName =
      touched.firstName && !String(form.firstName || "").trim()
        ? "First name is required."
        : "";
    e.lastName =
      touched.lastName && !String(form.lastName || "").trim()
        ? "Last name is required."
        : "";
    e.email = touched.email
      ? !String(form.email || "").trim()
        ? "Email is required."
        : !isValidEmail(form.email)
        ? "Invalid email format."
        : ""
      : "";
    e.phone = touched.phone
      ? !String(form.phone || "").trim()
        ? "Phone number is required."
        : !isValidPhone(form.phone)
        ? "Invalid phone number."
        : ""
      : "";
    return e;
  });

  const isFormComplete = computed(
    () =>
      String(form.firstName || "").trim() &&
      String(form.lastName || "").trim() &&
      String(form.email || "").trim() &&
      isValidEmail(form.email) &&
      String(form.phone || "").trim() &&
      isValidPhone(form.phone) &&
      form.contactTime &&
      form.location &&
      form.missingTeeth &&
      form.gumDisease &&
      form.previousImplants &&
      form.currentlyWearDentures
  );

  const currentSurvey = () => surveyQnA[surveyIndex.value] || null;

  function containerNext() {
    if (step.value <= formSteps.length) {
      const f = formSteps[step.value - 1];
      const value = form[f.key];
      const isBlank = !value || (typeof value === "string" && !value.trim());
      if (f.required && isBlank) {
        touched[f.key] = true;
        return;
      }
      if (f.key === "email" && !isValidEmail(form.email)) {
        touched.email = true;
        return;
      }
      if (f.key === "phone" && !isValidPhone(form.phone)) {
        touched.phone = true;
        return;
      }
      step.value++;
      return;
    }

    const q = currentSurvey();
    if (!q) return;
    if (!form[q.key] || form[q.key] === "") {
      surveyTouched[q.key] = true;
      return;
    }

    surveyTouched[q.key] = false;
    if (surveyIndex.value < surveyQnA.length - 1) {
      surveyIndex.value++;
    }
  }

  function containerPrev() {
    if (step.value <= formSteps.length) {
      if (step.value > 1) step.value--;
      return;
    }
    if (surveyIndex.value > 0) {
      surveyIndex.value--;
    } else {
      step.value = formSteps.length;
    }
  }

  async function submitForm(e) {
    if (e && e.preventDefault) e.preventDefault();

    if (!isFormComplete.value) {
      surveyQnA.forEach((q) => {
        if (!form[q.key]) surveyTouched[q.key] = true;
      });
      Object.keys(touched).forEach((k) => {
        if (!form[k]) touched[k] = true;
      });
      return;
    }

    try {
      const payload = {
        fields: [
          { name: "firstname", value: form.firstName },
          { name: "lastname", value: form.lastName },
          { name: "email", value: form.email },
          { name: "phone", value: form.phone },
          { name: "contact_time", value: form.contactTime },
          { name: "location", value: form.location },
          { name: "missing_teeth", value: form.missingTeeth },
          { name: "gum_disease", value: form.gumDisease },
          { name: "previous_implants", value: form.previousImplants },
          {
            name: "currently_wear_dentures",
            value: form.currentlyWearDentures,
          },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      await axios.post(
        "https://api.hsforms.com/submissions/v3/integration/submit/243916844/38c4532e-b17f-48b4-a2e0-1fa904ae8308",
        payload
      );

      alert("Form submitted successfully!");
      // reset form and state
      Object.keys(form).forEach((k) => (form[k] = ""));
      Object.keys(touched).forEach((k) => (touched[k] = false));
      Object.keys(surveyTouched).forEach((k) => (surveyTouched[k] = false));
      step.value = 1;
      surveyIndex.value = 0;
    } catch (err) {
      console.error("HubSpot submission failed:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return {
    // state
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

    // actions
    containerNext,
    containerPrev,
    submitForm,
  };
}
