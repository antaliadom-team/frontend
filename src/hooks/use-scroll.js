import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useScrollToLocation = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetScrollTop = rect.top + scrollTop + -140;
          window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
          navigate({ hash: '' });
        }
      };
    };

    scrollToElement();
  }, [hash, navigate]);
};