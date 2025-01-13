
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    // Add the Crisp script to the document
    if (typeof window !== "undefined") {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "91525ed5-034b-479d-9d57-791635921f3d";

      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;

      // Ensure the script is only added once
      if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.head.appendChild(script);
      }
    }
  }, []);

  return null; // Nothing renders visually
};

export default CrispChat;
