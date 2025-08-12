import React from "react";

type Badge =
  | string
  | { name: string; className?: string }; // className maps to your CSS brand color

type Section = {
  title: string;
  items: Badge[];
};

type Props = {
  heading?: string;
  sections: Section[];
  id?: string; // optional aria id if you want
  classMap?: Record<string, string>; // optional global map name -> className
};

export default function TechStack(props: Props) {
  const heading = props.heading ?? "Tech Stack";
  const id = props.id ?? "tech-stack-title";
  const classMap = props.classMap ?? {};

  const resolveClass = (name: string, override?: string) => {
    if (override) return override;
    const key = name.trim().toLowerCase();
    return classMap[key] ?? ""; // fallback: no brand class, just .badge
  };

  return (
    <section className="techStack" aria-labelledby={id}>
      <h2 id={id} className="techStack__heading">{heading}</h2>

      <div className="techStack__grid">
        {props.sections.map((sec) => (
          <div key={sec.title} className="techStack__section">
            <h3 className="techStack__title">{sec.title}</h3>
            <div className="techStack__badges">
              {sec.items.map((b) => {
                const name = typeof b === "string" ? b : b.name;
                const cls = typeof b === "string" ? undefined : b.className;
                const brand = resolveClass(name, cls);
                const classes = ["badge", brand].filter(Boolean).join(" ");
                return (
                  <span key={name} className={classes}>
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
