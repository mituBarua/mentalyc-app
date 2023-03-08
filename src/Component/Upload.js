import React, { useState, useEffect } from "react";

const MAX_UPLOAD_TIME = 5000;
const MIN_UPLOAD_TIME = 2000;

export default function Upload({ id, deleteData }) {
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const uploadTime =
      Math.floor(Math.random() * (MAX_UPLOAD_TIME - MIN_UPLOAD_TIME + 1)) +
      MIN_UPLOAD_TIME;
    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(uploadInterval);
          deleteData(id);
        }
        return newProgress;
      });
    }, uploadTime / 100);

    return () => clearInterval(uploadInterval);
  }, [uploadProgress]);

  return (
    <div>
      <div
        style={{
          width: `${uploadProgress > 100 ? "100" : uploadProgress}%`,
          height: "10px",
          backgroundColor: "#3BC171",
        }}
      />
    </div>
  );
}
