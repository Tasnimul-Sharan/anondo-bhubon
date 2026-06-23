import Image from "next/image";

export default function FramedImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  style,
  imageStyle,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}) {
  return (
    <div className={`image-frame ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        style={imageStyle}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
