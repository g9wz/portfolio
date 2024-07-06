"use client";

import { useRef, useEffect, useCallback } from "react";

import { useTheme } from "next-themes";

import { parsePhoneNumberFromString } from "libphonenumber-js";

import { formFields } from "./index";

const Form = () => {
  const { theme } = useTheme();

  const elemRef = useRef<HTMLDivElement | null>(null);
  const cfRef = useRef<any>(null);

  const handleSubmit = useCallback(async () => {
    if (!cfRef.current) return;

    try {
      const formDataObject = cfRef.current.getFormData(true);
      const formData = new FormData();

      Object.entries(formDataObject).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      if (result.success) {
        cfRef.current.addRobotChatResponse(
          "Thanks for sharing!&&I’ll get back to you as soon as I can.",
        );

        const cfInputElement = cfRef.current.el.querySelector("cf-input");
        if (cfInputElement) {
          cfInputElement.remove();
        }
      } else {
        throw new Error("Form submission was not successful");
      }
    } catch (error) {
      cfRef.current.addRobotChatResponse(
        "Sorry, there was an error submitting the form!&&Please try again later.",
      );
    }
  }, []);

  const removeExistingForm = useCallback(() => {
    if (cfRef.current?.el?.parentNode) {
      cfRef.current.el.parentNode.removeChild(cfRef.current.el);
      cfRef.current = null;
    }
  }, []);

  const validatePhoneNumber = (
    dto: any,
    success: () => void,
    error: () => void,
  ) => {
    if (dto.tag.type === "tel") {
      const phoneNumber = parsePhoneNumberFromString(dto.text, "SA");
      phoneNumber && phoneNumber.isPossible() ? success() : error();
    } else {
      success();
    }
  };

  const initConversationalForm = useCallback(() => {
    if (typeof window === "undefined" || !elemRef.current) return;

    removeExistingForm();

    // @ts-ignore - ConversationalForm has no declaration file
    import("conversational-form").then(({ ConversationalForm }) => {
      try {
        cfRef.current = ConversationalForm.startTheConversation({
          options: {
            submitCallback: handleSubmit,
            preventAutoFocus: true,
            robotImage: "/images/contact/robot.png",
            userImage:
              theme === "dark"
                ? "/images/contact/user/white.jpg"
                : "/images/contact/user/black.jpg",
            loadExternalStyleSheet: false,
            flowStepCallback: validatePhoneNumber,
          },
          tags: formFields,
        });
        elemRef.current?.appendChild(cfRef.current.el);
      } catch (error) {
        console.error("Error initializing Conversational Form:", error);
      }
    });
  }, [handleSubmit, removeExistingForm, theme]);

  useEffect(() => {
    initConversationalForm();
    return removeExistingForm;
  }, [initConversationalForm, removeExistingForm]);

  return <div ref={elemRef} />;
};

export default Form;
