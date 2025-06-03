import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (code) => {
  const messages = {
    INPUT_TOO_LONG: "Message exceeds 280 characters.",
    UNSUPPORTED_CONTROL_CHAR: "Input contains unsupported control characters.",
    UNKNOWN_SYMBOL: "Encoded text contains unknown symbols.",
    NETWORK_ERROR: "Server unreachable. Please try again.",
  };
  toast.error(messages[code] || "Unexpected error occurred");
};

export const Toast = () => <ToastContainer position="top-right" />;
