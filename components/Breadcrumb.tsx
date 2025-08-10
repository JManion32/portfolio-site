// src/components/Breadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function toTitle(s: string) {
  return s
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function Breadcrumbs({ labelMap = {} }: { labelMap?: Record<string, string> }) {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const label = labelMap[seg] ?? toTitle(seg);
    return { href, label, isLast: i === segments.length - 1 };
  });

  if (segments.length === 0) {
    return <nav className="breadcrumb">Home</nav>;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {crumbs.map(({ href, label, isLast }, index) => (
        <span key={href}>
          {isLast ? (
            <span className="breadcrumb-current">{label}</span>
          ) : (
            <Link to={href} className="breadcrumb-link">{label}</Link>
          )}
          {index < crumbs.length - 1 && <span className="breadcrumb-sep"> &gt; </span>}
        </span>
      ))}
    </nav>
  );
}
