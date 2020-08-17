import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}