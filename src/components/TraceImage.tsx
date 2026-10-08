import React, { useState, useEffect, useRef } from 'react';
import { TraceVectorAvatar } from './SvgAssets';

interface TraceImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  zoom?: boolean;
  filterMode?: 'normal' | 'standard' | 'silhouette' | 'ocular';
}

export const TraceImage: React.FC<TraceImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  style,
  zoom = false,
  filterMode = 'normal',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate fallback URL candidates
  const getFallbackCandidates = (originalSrc: string): string[] => {
    const list = [originalSrc];
    // If src is /src/assets/images/xyz.jpg, also try /assets/images/xyz.jpg
    if (originalSrc.includes('/src/assets/images/')) {
      list.push(originalSrc.replace('/src/assets/images/', '/assets/images/'));
    } else if (originalSrc.includes('/assets/images/')) {
      list.push(originalSrc.replace('/assets/images/', '/src/assets/images/'));
    }
    // Extract filename if possible
    const filenameMatch = originalSrc.match(/character_[a-z0-9_]+\.jpg/i);
    if (filenameMatch) {
      const filename = filenameMatch[0];
      const p1 = `/assets/images/${filename}`;
      const p2 = `/src/assets/images/${filename}`;
      if (!list.includes(p1)) list.push(p1);
      if (!list.includes(p2)) list.push(p2);
    }
    return list;
  };

  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIndex(0);
    setHasError(false);
  }, [src]);

  useEffect(() => {
    // If the image is already loaded from cache, ensure error is false
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setHasError(false);
    }
  }, [currentSrc]);

  // If in silhouette mode
  if (filterMode === 'silhouette') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-[#14F195] overflow-hidden ${className}`} style={style}>
        <TraceVectorAvatar size={280} silhouetteOnly={true} className="drop-shadow-md" />
      </div>
    );
  }

  // If in ocular mode
  if (filterMode === 'ocular') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-[#05060B] overflow-hidden ${className}`} style={style}>
        <TraceVectorAvatar size={280} eyesOnly={true} glow={true} />
      </div>
    );
  }

  const handleError = () => {
    const candidates = getFallbackCandidates(src);
    const nextIndex = fallbackIndex + 1;
    if (nextIndex < candidates.length) {
      setFallbackIndex(nextIndex);
      setCurrentSrc(candidates[nextIndex]);
    } else {
      setHasError(true);
    }
  };

  // Fallback if image load truly fails after all candidate paths
  if (hasError) {
    return (
      <div className={`relative w-full h-full flex flex-col items-center justify-center bg-[#080915] overflow-hidden border border-[#1E233D] ${className}`} style={style}>
        <TraceVectorAvatar size={240} glow={true} />
        <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-mono text-[#14F195] bg-[#0A0D1F]/90 px-2 py-1 rounded border border-[#1E233D]">
          {alt} · SOLANA VECTOR ACTIVE
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#07080E] ${className}`} style={style}>
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        onError={handleError}
        className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? 'scale-125' : 'scale-100'} ${imgClassName}`}
      />
    </div>
  );
};
