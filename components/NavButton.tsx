// src/components/NavButton.tsx
import { useNavigate } from 'react-router-dom';

type Props = {
  left?: string;
  leftNav?: string;
  right?: string;
  rightNav?: string;
  className?: string;
};

export default function NavButton({ left, leftNav, right, rightNav, className }: Props) {
  const navigate = useNavigate();
  const showLeft = !!left && !!leftNav;
  const showRight = !!right && !!rightNav;

  if (!showLeft && !showRight) return null;

  return (
    <footer className={`guide-footer ${className ?? ''}`}>
      {showLeft && (
        <button className="left-guide-button" onClick={() => navigate(leftNav!)}>
          <span className="left-arrow-spacer">{'<<'}</span> {left}
        </button>
      )}
      {showRight && (
        <button className="right-guide-button" onClick={() => navigate(rightNav!)}>
          {right} <span className="right-arrow-spacer">{'>>'}</span>
        </button>
      )}
    </footer>
  );
}
