import { useEffect, RefObject } from "react";

export default function useDisableBodyTabIndex(modalRef: RefObject<HTMLElement | null>, isActive: boolean) {
  useEffect(() => {
    if (!isActive) {
      // Restore tabIndex on unmount or disable
      return;
    }

    if (!modalRef.current) return;

    // Find all tabbable elements outside modal
    const tabbableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "textarea:not([disabled])",
      "select:not([disabled])",
      "details",
      "[tabindex]:not([tabindex='-1'])",
    ].join(", ");

    const allTabbable = Array.from(document.querySelectorAll<HTMLElement>(tabbableSelectors));

    const outsideElements = allTabbable.filter(el => !modalRef.current?.contains(el));

    outsideElements.forEach(el => {
      const current = el.getAttribute("tabindex");
      if (current !== null) {
        el.setAttribute("data-original-tabindex", current);
      }
      el.setAttribute("tabindex", "-1");
    });

    // Cleanup function restores tabIndex
    return () => {
      outsideElements.forEach(el => {
        const originalTabIndex = el.getAttribute("data-original-tabindex");
        if (originalTabIndex === null) {
          el.removeAttribute("tabindex");
        } else {
          el.setAttribute("tabindex", originalTabIndex);
          el.removeAttribute("data-original-tabindex");
        }
      });
    };
  }, [modalRef, isActive]);
}