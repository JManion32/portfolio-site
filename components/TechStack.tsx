// TechStack.tsx
type Badge = string | { name: string; className?: string };
type Section = { title: string; items: Badge[] };

type Props = {
  heading?: string;
  sections: Section[];
  id?: string;
};

export default function TechStack({ heading = "Tech Stack", sections, id = "tech-stack-title" }: Props) {
  const getName  = (b: Badge) => (typeof b === "string" ? b : b.name);
  const getClass = (b: Badge) => (typeof b === "string" ? "" : (b.className ?? ""));

  return (
    <section className="techStack" aria-labelledby={id}>
      <h2 id={id} className="techStack__heading">{heading}</h2>
      <div className="techStack__grid">
        {sections.map((sec) => (
          <div key={sec.title} className="techStack__section">
            <h3 className="techStack__title">{sec.title}</h3>
            <div className="techStack__badges">
              {sec.items.map((b) => {
                const name = getName(b);
                const cls  = getClass(b);
                return <span key={name} className={["badge", cls].filter(Boolean).join(" ")}>{name}</span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
