"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MainDropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default MainDropzone;
