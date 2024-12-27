import { useEffect, useState } from "react";

const useOfflineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    addEventListener("offline", () => {
      setStatus(true);
    });

    addEventListener("online", () => {
      setStatus(false);
    });
  }, []);

  return status;
};

export default useOfflineStatus;
