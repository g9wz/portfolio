import "./styles/Form.css";

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
    "cf-conditional-contact-method": "email",
    "cf-questions": "Awesome!&&What’s your email address?",
    "cf-error": "Hmm, that doesn’t look like a valid email address.",
    required: true,
  },
  {
    tag: "input",
    type: "tel",
    "cf-conditional-contact-method": "mobile",
    "cf-questions": "Great!&&What’s your mobile number?",
    "cf-validation": "validatePhoneNumber",
    "cf-error": "Hmm, that doesn’t look like a valid phone number.",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    "cf-conditional-contact-method": "other",
    "cf-questions": "Sure!&&How would you like me to get back to you?",
    required: true,
  },
];
