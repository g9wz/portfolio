import "../styles/form.css";

export const formFields = [
  {
    tag: "input",
    type: "text",
    name: "name",
    "cf-questions": "Hey there! What’s your name?",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    name: "company",
    "cf-questions":
      "Nice to meet you, {previous-answer}!&&Who are you representing today?",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    name: "purpose",
    "cf-questions": "Cool!&&What do you have on your mind?",
    required: true,
  },
  {
    tag: "fieldset",
    "cf-questions": "Got it!&&How would you like me to get back to you?",
    required: true,
    children: [
      {
        tag: "input",
        type: "radio",
        name: "contact-method",
        value: "email",
        "cf-label": "Email",
      },
      {
        tag: "input",
        type: "radio",
        name: "contact-method",
        value: "mobile",
        "cf-label": "Mobile",
      },
      {
        tag: "input",
        type: "radio",
        name: "contact-method",
        value: "other",
        "cf-label": "Other",
      },
    ],
  },
  {
    tag: "input",
    type: "email",
    name: "email",
    "cf-conditional-contact-method": "email",
    "cf-questions": "Awesome!&&What’s your email address?",
    "cf-error": "Hmm, that doesn’t look like a valid email address.",
    required: true,
  },
  {
    tag: "input",
    type: "tel",
    name: "mobile",
    "cf-conditional-contact-method": "mobile",
    "cf-questions": "Great!&&What’s your mobile number?",
    "cf-validation": "validatePhoneNumber",
    "cf-error": "Hmm, that doesn’t look like a valid phone number.",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    name: "method",
    "cf-conditional-contact-method": "other",
    "cf-questions": "Sure!&&What's your preferred contact method?",
    required: true,
  },
];
