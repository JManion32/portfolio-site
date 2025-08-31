// src/components/PreviewCard.tsx
import { useNavigate } from 'react-router-dom';

type Props = {
  img: string;
  header: string;
  date?: string | null; 
  desc: string;
  nav: string;
  animation: string;
};

export default function PreviewCard({img: previewImg, header: previewHeader, date: previewDate, desc: previewDesc, nav: previewNav, animation: previewAnimation}: Props) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(previewNav)} className={`project-preview-container ${previewAnimation}`}>
      <img src={previewImg} className="project-image" alt={`${previewHeader} preview`} />
      <h2 className="project-preview-header">{previewHeader}</h2>
      <p className="experience-date">{previewDate}</p>
      <p className="project-preview-desc">{previewDesc}</p>
    </div>
  );
}
