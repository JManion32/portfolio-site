// src/components/Breadcrumbs.tsx
import { useLocation } from 'react-router-dom';
import useNavigateTop from "../hooks/useNavigateTop";

function toTitle(s: string) {
  return s
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → camel Case
    .replace(/-/g, ' ')                  // kebab-case → kebab case
    .replace(/([a-z])(?=[A-Z])/g, '$1 ') // optional extra split
    .replace(/speedroulette/i, 'Speed Roulette')
    .replace(/psoft/i, 'Course Website')
    .replace(/portfolio/i, 'Portfolio Site')
    .replace(/rensselaer/i, 'RPI')
    .replace(/stewarts/i, 'Stewarts Shops')
    .replace(/lambdachi/i, 'Lambda Chi Alpha')
    .replace(/pricechopper/i, 'Price Chopper')
    .replace(/hudsonvalley/i, 'HVCC')
    .replace(/streamer/i, 'Twitch Streamer')
    .replace(/\b\w/g, char => char.toUpperCase());
}


export default function Breadcrumbs({ labelMap = {} }: { labelMap?: Record<string, string> }) {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const navigateTop = useNavigateTop();

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
            <a
              className="breadcrumb-link"
              role="link"
              tabIndex={0}
              onClick={() => navigateTop(href)}
              onKeyDown={(e) => e.key === "Enter" && navigateTop(href)}
            >
              {label}
            </a>
          )}
          {index < crumbs.length - 1 && (
            <span className="breadcrumb-sep"> &gt; </span>
          )}
        </span>
      ))}
    </nav>
  );
}
