"use client";

import { useEffect } from "react";

const RemoveTabIndex = () => {
  useEffect(() => {
    const removeTabIndex = (element: HTMLElement) => {
      if (element.hasAttribute("tabindex")) {
        element.removeAttribute("tabindex");
      }
      element.querySelectorAll("[tabindex]").forEach((el) => {
        el.removeAttribute("tabindex");
      });
    };

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              removeTabIndex(node as HTMLElement);
            }
          });
        } else if (
          mutation.type === "attributes" &&
          mutation.attributeName === "tabindex"
        ) {
          (mutation.target as HTMLElement).removeAttribute("tabindex");
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default RemoveTabIndex;
