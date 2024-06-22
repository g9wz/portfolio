export { default as Form } from "./Form";

export const formFields = [
  {
    tag: "input",
    type: "text",
    "cf-questions": "Hey there! What’s your name?",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    "cf-questions":
      "Nice to meet you, {previous-answer}!&&Who are you representing today?",
    required: true,
  },
  {
    tag: "input",
    type: "text",
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
    "cf-questions": "Awesome!&&What’s your email address?",
    "cf-conditional-contact-method": "email",
    required: true,
  },
  {
    tag: "input",
    type: "tel",
    "cf-error": "Hmm, that doesn’t look like a valid phone number.",
    "cf-questions": "Great!&&What’s your mobile number?",
    "cf-conditional-contact-method": "mobile",
    "cf-validation": "validatePhoneNumber",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    "cf-questions": "Sure!&&How would you like me to get back to you?",
    "cf-conditional-contact-method": "other",
    required: true,
  },
];
