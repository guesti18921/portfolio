import { useState } from "react";

export default function ProjectPreviewImage({ image, priority }) {
  const [useOriginal, setUseOriginal] = useState(false);
  const { alt, width, height, src, srcSet, sizes, original } = image;

  return (
    <img
      width={width}
      height={height}
      style={{ "--preview-ratio": `${width} / ${height}` }}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      sizes={useOriginal ? undefined : sizes}
      srcSet={useOriginal ? undefined : srcSet}
      src={useOriginal ? original : src}
      onError={useOriginal ? undefined : () => setUseOriginal(true)}
    />
  );
}
