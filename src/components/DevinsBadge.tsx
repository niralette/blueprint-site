import React from 'react';

interface DevinsBadgeProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  category:
    | 'available'
    | 'built-with'
    | 'documentation'
    | 'donate'
    | 'requires'
    | 'social'
    | 'supported'
    | 'unsupported'
    | 'translate';
  format: 'png' | 'svg';
  height?: number;
  name: string;
  type: 'compact' | 'compact-minimal' | 'cozy' | 'cozy-minimal';
}

export function DevinsBadge({
  category,
  format,
  height = 48,
  name,
  type,
  alt = name,
  loading = 'lazy',
  ...props
}: DevinsBadgeProps) {
  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/${type}/${category}/${name}${format === 'png' ? `_${height}h` : ''}.${format}`}
      alt={name}
      loading={loading}
      {...props}
    />
  );
}
