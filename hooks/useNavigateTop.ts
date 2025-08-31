// utils/useNavigateTop.ts
import { useNavigate } from "react-router-dom";

export default function useNavigateTop() {
  const navigate = useNavigate();

  return (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0 });
  };
}
