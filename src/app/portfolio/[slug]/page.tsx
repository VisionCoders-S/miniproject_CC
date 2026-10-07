import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../../data/students";

export function generateStaticParams() {
  return students.map((student) => ({ slug: student.slug }));
}

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const student = students.find((item) => item.slug === slug);

  if (!student) notFound();

  const initials = student.name.split(" ").map((part) => part[0]).slice(0, 2).join("");

  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark">F</span>
          <span>Future<span className="wordmark-light">Engineers</span></span>
        </Link>
        <Link className="header-link" href="/"><span aria-hidden="true">←</span> Back to showcase</Link>
      </header>

      <section className="profile-hero">
        <div className="profile-copy">
          <p className="eyebrow"><span className="status-dot" /> STUDENT SPOTLIGHT</p>
          <p className="profile-role">{student.role}</p>
          <h1>{student.name.split(" ")[0]}<br /><span>{student.name.split(" ").slice(1).join(" ")}</span></h1>
          <p className="hero-description">{student.bio}</p>
          <div className="profile-actions">
            {student.github && <a className="button button-primary" href={student.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
            {student.linkedin && <a className="button button-outline" href={student.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
        <div className="profile-art" aria-label={`${student.name} initials`}>
          <div className="profile-art-ring" />
          <div className="profile-monogram">{initials}</div>
          <span className="profile-art-note">CREATING<br />WHAT'S NEXT</span>
          <span className="profile-art-star" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="profile-details">
        <div className="detail-block">
          <p className="eyebrow">01 — THE PERSON</p>
          <h2>Always<br /><span>learning.</span></h2>
          <p className="detail-copy">{student.bio}</p>
        </div>
        <div className="detail-block skills-block">
          <p className="eyebrow">02 — THE TOOLKIT</p>
          <h2>Things I <span>work with.</span></h2>
          <div className="profile-skills">
            {student.skills.map((skill, index) => (
              <div className="profile-skill" key={skill}><span>0{index + 1}</span>{skill}<span aria-hidden="true">↗</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-heading">
          <div><p className="eyebrow">03 — SELECTED WORK</p><h2>Made with <span>purpose.</span></h2></div>
          <p className="section-intro">A few ideas brought to life<br />through code and creativity.</p>
        </div>
        <div className="project-grid">
          {student.projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.name}>
              <div className="project-card-top"><span>PROJECT / 0{index + 1}</span><span aria-hidden="true">↗</span></div>
              <div className="project-symbol" aria-hidden="true">{index === 0 ? "✳" : "◈"}</div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <Link className="wordmark" href="/"><span className="wordmark-mark">F</span><span>Future<span className="wordmark-light">Engineers</span></span></Link>
        <span>Curious minds, making meaningful things.</span>
        <Link className="footer-back" href="/">ALL STUDENTS ↗</Link>
      </footer>
    </main>
  );
}