"use client";

import { useRef, useEffect, useCallback, useState } from "react";

import { useTheme } from "next-themes";

import { parsePhoneNumberFromString } from "libphonenumber-js";

import { formFields } from "./index";

import styles from "./Form.module.css";

const Form = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const elemRef = useRef<HTMLDivElement | null>(null);
  const cfRef = useRef<any>(null);

  const submitCallback = useCallback(() => {
    if (cfRef.current) {
      const formData = cfRef.current.getFormData(true);
      console.log("Form Data:", formData);
      cfRef.current.addRobotChatResponse(
        "Thanks for sharing!&&I’ll get back to you as soon as I can.",
      );
    }
  }, []);

  const removeExistingForm = useCallback(() => {
    if (cfRef.current) {
      try {
        if (cfRef.current.el && cfRef.current.el.parentNode) {
          cfRef.current.el.parentNode.removeChild(cfRef.current.el);
        }
        cfRef.current = null;
      } catch (error) {
        console.error("Error removing existing form:", error);
      }
    }
  }, []);

  const initConversationalForm = useCallback(() => {
    if (typeof window !== "undefined" && elemRef.current) {
      removeExistingForm();

      // @ts-ignore - ConversationalForm has no declaration file
      import("conversational-form").then(({ ConversationalForm }) => {
        try {
          cfRef.current = ConversationalForm.startTheConversation({
            options: {
              submitCallback,
              preventAutoFocus: true,
              robotImage: "/robot.png",
              theme: currentTheme === "dark" ? "dark" : "light",
              flowStepCallback: (
                dto: any,
                success: () => void,
                error: (optionalErrorMessage?: string) => void,
              ) => {
                if (dto.tag.type === "tel") {
                  const phoneNumber = parsePhoneNumberFromString(
                    dto.text,
                    "SA",
                  );
                  if (phoneNumber && phoneNumber.isPossible()) {
                    return success();
                  } else {
                    return error();
                  }
                }
                return success();
              },
            },
            tags: formFields,
          });
          elemRef.current?.appendChild(cfRef.current.el);
        } catch (error) {
          console.error("Error initializing Conversational Form:", error);
        }
      });
    }
  }, [submitCallback, currentTheme, removeExistingForm]);

  useEffect(() => {
    initConversationalForm();
    return removeExistingForm;
  }, [initConversationalForm, removeExistingForm]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme, initConversationalForm]);

  return <div ref={elemRef} className={styles.formContainer} />;
};

export default Form;
