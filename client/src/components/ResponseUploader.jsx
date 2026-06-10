import { useState } from "react";

function ResponseUploader() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Upload Response Sheets
      </h2>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        onChange={handleUpload}
      />

      <p className="mt-4">
        Uploaded: {images.length} pages
      </p>

    </div>
  );
}

export default ResponseUploader;