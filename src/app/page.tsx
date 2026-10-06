import Link from "next/link";
import { students } from "../data/students";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark">F</span>
          <span>Future<span className="wordmark-light">Engineers</span></span>
        </Link>
        <a className="header-link" href="#students">Meet the students <span aria-hidden="true">↘</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> THE NEXT GENERATION OF BUILDERS</p>
          <h1>Bright minds.<br /><span>Bold futures.</span></h1>
          <p className="hero-description">
            Meet the people turning big ideas into thoughtful technology. A showcase of the engineers,
            makers, and creative minds building what comes next.
          </p>
          <a className="button button-primary" href="#students">Explore the showcase <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✳</div>
          <div className="art-card">
            <span className="art-card-label">IDEAS IN MOTION</span>
            <span className="art-card-symbol">✳</span>
            <span className="art-card-caption">Curiosity is<br />the first step.</span>
          </div>
          <span className="art-note">MADE FOR<br />WHAT'S NEXT</span>
        </div>
        <div className="hero-footer"><span>SCROLL TO DISCOVER</span><span className="hero-line" /><span>01 — 02</span></div>
      </section>

      <section className="students-section" id="students">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE ABOUT US</p>
            <h2>People to <span>watch.</span></h2>
          </div>
          <p className="section-intro">Different paths, shared curiosity.<br />Get to know the people behind the projects.</p>
        </div>
        <div className="student-grid">
          {students.map((student, index) => {
            const initials = student.name.split(" ").map((part) => part[0]).slice(0, 2).join("");
            return (
              <article className={`student-card student-card-${index + 1}`} key={student.slug}>
                <div className="student-card-top">
                  <span className="card-index">0{index + 1} / 0{students.length}</span>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="avatar">{initials}</div>
                <p className="student-role">{student.role}</p>
                <h3>{student.name}</h3>
                <p className="student-bio">{student.bio}</p>
                <div className="skill-list">
                  {student.skills.slice(0, 3).map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
                  {student.skills.length > 3 && <span className="skill-more">+{student.skills.length - 3}</span>}
                </div>
                <Link className="student-link" href={`/portfolio/${student.slug}`}>
                  Explore portfolio <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <Link className="wordmark" href="/"><span className="wordmark-mark">F</span><span>Future<span className="wordmark-light">Engineers</span></span></Link>
        <span>Curious minds, making meaningful things.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}