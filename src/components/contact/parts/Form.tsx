"use client";

import { useRef, useEffect, useCallback } from "react";

import { parsePhoneNumberFromString } from "libphonenumber-js";

import { formFields } from "./index";

import styles from "./Form.module.css";

const Form = () => {
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

  useEffect(() => {
    // @ts-ignore - ConversationalForm has no declaration file
    import("conversational-form").then(({ ConversationalForm }) => {
      if (typeof window !== "undefined" && elemRef.current) {
        cfRef.current = ConversationalForm.startTheConversation({
          options: {
            submitCallback,
            preventAutoFocus: true,
            robotImage: "/robot.png",
            flowStepCallback: (
              dto: any,
              success: () => void,
              error: (optionalErrorMessage?: string) => void,
            ) => {
              if (dto.tag.type === "tel") {
                const phoneNumber = parsePhoneNumberFromString(dto.text, "SA");
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
        elemRef.current.appendChild(cfRef.current.el);
      }
    });

    return () => {
      if (cfRef.current) {
        cfRef.current.remove();
      }
    };
  }, [submitCallback]);

  return <div ref={elemRef} className={styles.formContainer} />;
};

export default Form;
