const Upload = () => {
  return (
    <>
      <form
        action="http://localhost:8000/products/upload"
        method="POST"
        class="image-form"
      >
        <input type="file" accept="image/*" name="imageUpload" />
        <button type="submit" id="image-upload" class="sinsup-button">
          Upload Image
        </button>
      </form>
    </>
  );
};

export default Upload;
