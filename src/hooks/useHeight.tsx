import { useEffect, useState } from "react";

const useHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    // Update the current height
    setHeight(window.innerHeight);

    // Add an event listener to update the height when the window is resized
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    // Cleanup function to run when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { height };
};

export default useHeight;
