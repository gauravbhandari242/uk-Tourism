import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // We use "instant" or "auto" to prevent scrolling animation and jump straight to the top immediately.
    });
  }, [pathname]);

  return null;
}
