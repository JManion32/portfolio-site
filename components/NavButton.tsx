import { useNavigate } from 'react-router-dom';

type Props = {
  left?: string;
  leftNav?: string;
  right?: string;
  rightNav?: string;
};

export default function NavButton({ left, leftNav, right, rightNav }: Props) {
  const navigate = useNavigate();
  const showLeft = !!left && !!leftNav;
  const showRight = !!right && !!rightNav;

  if (!showLeft && !showRight) return null;

  // Always navigate to the top of the page.
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };


  return (
    <footer className={`guide-footer`}>
      {showLeft && (
        <button className="left-guide-button" onClick={() => handleNavigate(leftNav!)}>
          <span className="left-arrow-spacer">{'<<'}</span> {left}
        </button>
      )}
      {showRight && (
        <button className="right-guide-button" onClick={() => handleNavigate(rightNav!)}>
          {right} <span className="right-arrow-spacer">{'>>'}</span>
        </button>
      )}
    </footer>
  );
}
