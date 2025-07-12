

function Image({src,alt, className}) {
  return (
    <img
      src={"./src/assets/adobe Express - file (1).png"} // Adjust the path as necessary
      alt={alt}
      className={`rounded-lg shadow-lg ${className}`}
    />
  );
}

export default Image;