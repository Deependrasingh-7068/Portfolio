

function Image({src,alt, className}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg shadow-lg ${className}`}
    />
  );
}

export default Image;