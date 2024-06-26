"use client";

import { useRef, useEffect, useCallback } from "react";

import { useTheme } from "next-themes";

import { parsePhoneNumberFromString } from "libphonenumber-js";

import { formFields } from "./index";

const Form = () => {
  const { theme } = useTheme();

  const elemRef = useRef<HTMLDivElement | null>(null);
  const cfRef = useRef<any>(null);

  const handleSubmit = useCallback(() => {
    if (cfRef.current) {
      const formData = cfRef.current.getFormData(true);
      console.log("Form Data:", formData);
      cfRef.current.addRobotChatResponse(
        "Thanks for sharing!&&I’ll get back to you as soon as I can.",
      );

      const cfInputElement = cfRef.current.el.querySelector("cf-input");
      if (cfInputElement) {
        cfInputElement.remove();
      }
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
            robotImage: "/contact/robot.png",
            userImage:
              theme === "dark"
                ? "/contact/user/white.jpg"
                : "/contact/user/black.jpg",
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
