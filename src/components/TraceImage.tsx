import React, { useState } from 'react';
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
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If in silhouette mode
  if (filterMode === 'silhouette') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-[#0DF569] overflow-hidden ${className}`} style={style}>
        <TraceVectorAvatar size={280} silhouetteOnly={true} className="drop-shadow-md" />
      </div>
    );
  }

  // If in ocular mode
  if (filterMode === 'ocular') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-[#020303] overflow-hidden ${className}`} style={style}>
        <TraceVectorAvatar size={280} eyesOnly={true} glow={true} />
      </div>
    );
  }

  // Fallback if image load fails
  if (hasError) {
    return (
      <div className={`relative w-full h-full flex flex-col items-center justify-center bg-[#090A0A] overflow-hidden border border-[#1C201F] ${className}`} style={style}>
        <TraceVectorAvatar size={240} glow={true} />
        <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-mono text-[#0DF569] bg-[#090A0A]/90 px-2 py-1 rounded border border-[#1C201F]">
          {alt} · VECTOR FALLBACK ACTIVE
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#090A0A]">
          <TraceVectorAvatar size={160} glow={false} className="opacity-40 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${zoom ? 'scale-125' : 'scale-100'} ${imgClassName}`}
      />
    </div>
  );
};
