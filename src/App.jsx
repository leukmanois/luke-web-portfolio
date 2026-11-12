import React, { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Web Portfolio",
    type: "WEB PORTFOLIO · CLASS",
    description: "This website, a portfolio to showcase my school and personal projects!",
    image: "/projects/project-1.png",
    alt: "Illustrated preview of a personal portfolio website",
    tags: ["React", "CSS", "Responsive Design"]
  },
  {
    number: "02",
    title: "Graphic Design Mock Portfolio",
    type: "GRAPHIC DESIGN PORTFOLIO · GALLERY",
    description: "Another portfolio website that I used to showcase my graphic design work, and to test some design ideas.",
    image: "/projects/project-2.png",
    alt: "Illustrated preview of a task checklist app",
    tags: ["UI Design", "JavaScript", "Art"]
  },
  {
    number: "03",
    title: "Nothing Here Yet!",
    type: "None",
    description: "This is a placeholder, yes.",
    image: "/projects/project-3.svg",
    alt: "Placeholder",
    tags: ["WIP"]
  }
];

const skills = ["HTML & CSS", "JavaScript", "React", "Python", "Responsive Design", "UI/UX Basics"];

function SectionTitle({ note, title, description }) {
  return (
    <div className="section-title">
      <span className="hand-note">{note}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <header className="topbar">
        <a className="logo" href="#home">luke<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a className="contact-nav" href="#contact">Say hello ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-text">
            <div className="student-label"><span>✳</span> BS Computer Science 3-4 Student</div>
            <h1>Hi, I'm Luke!<br /><span>Still learning,</span><br />always making.</h1>
            <p>I'm a CS student who is learning website development and design, trying out new ideas, and figuring out how things work and connect. This is where I keep some of the things I've made along the way.</p>
            <div className="hero-buttons">
              <a className="primary-button" href="#projects">See my projects <span>↓</span></a>
              <a className="simple-link" href="#about">A little about me ↗</a>
            </div>
            <div className="little-update"><span className="tiny-dot" /> currently learning: web development and (always improving) graphic design</div>
          </div>
          <div className="hero-image">
            <img src="/images/profile.png" alt="My graphic design portfolio" />
          </div>
        </section>

        <section className="about page-width section-space" id="about">
          <SectionTitle note="01 / introduction?" title="A bit about me" />
          <div className="about-grid">
            <p className="about-main">I'm currently studying Computer Science and learning more about how websites and applications are made.</p>
            <div className="about-side">
              <p>I like working on little projects where I can mix a lot of design with coding. Most of the things here are school activities, personal experiments, or ideas I'm trying to turn into something pleasing to look at.</p>
              <p>I'm <b>still</b> learning, so this portfolio will probably change as I pick up new skills and make more stuff.</p>
            </div>
          </div>
          <div className="skills-box">
            <div><span className="hand-note">things I'm currently learning</span><h3>My current toolkit</h3></div>
            <div className="skill-chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section className="projects-section section-space" id="projects">
          <div className="page-width">
            <SectionTitle note="02 / things I've worked/been working on" title="A few projects" description="A mix of school work, practice, and little ideas. Some are still works in progress!" />
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.number}>
                  <button
                    className="project-preview image-button"
                    type="button"
                    onClick={() => setSelectedImage({ image: project.image, alt: project.alt, title: project.title, subtitle: project.description })}
                    aria-label={`Enlarge ${project.title} image`}
                  >
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <span className="project-number">{project.number}</span>
                  </button>
                  <div className="project-details">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certificates page-width section-space" id="certificates">
          <SectionTitle note="03 / certificates" title="Certificates" description="Workshops, online courses, and other things I pick up along the way." />
          <div className="certificate-grid">
            <article className="certificate-card">
              <button className="certificate-image image-button" type="button" onClick={() => setSelectedImage({ placeholder: true, title: "Certificate title", subtitle: "Description placeholder." })} aria-label="Enlarge certificate placeholder">
                <span>Image placeholder</span>
              </button>
              <h3>Certificate title</h3>
              <p>Description placeholder.</p>
            </article>
            <article className="certificate-card">
              <button className="certificate-image image-button" type="button" onClick={() => setSelectedImage({ placeholder: true, title: "Certificate title", subtitle: "Description placeholder." })} aria-label="Enlarge certificate placeholder">
                <span>Image placeholder</span>
              </button>
              <h3>Certificate title</h3>
              <p>Description placeholder.</p>
            </article>
            <article className="certificate-card">
              <button className="certificate-image image-button" type="button" onClick={() => setSelectedImage({ placeholder: true, title: "Some Future Achievement", subtitle: "Description placeholder." })} aria-label="Enlarge achievement placeholder">
                <span>Image placeholder</span>
              </button>
              <h3>Some Future Achievement</h3>
              <p>Description placeholder.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-content">
            <div><span className="hand-note">04 / get in touch with me?</span><h2>Have a question<br />or an idea?</h2><p>I'm open to learning from others and working on interesting projects.</p></div>
            <div className="email-card"><span>YOU CAN REACH ME AT</span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=luke.manaois080@gmail.com" target="_blank" rel="noreferrer">luke.manaois080@gmail.com ↗</a></div>
          </div>
        </section>
      </main>

      <footer className="footer page-width"><a className="logo" href="#home">luke<span>.</span></a><p>Made by Luke R. Manaois · {new Date().getFullYear()}</p><a href="#home">back to top ↑</a></footer>

      {selectedImage && (
        <div className="image-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={event => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close image">×</button>
            {selectedImage.placeholder ? (
              <div className="lightbox-placeholder">Image placeholder</div>
            ) : (
              <img src={selectedImage.image} alt={selectedImage.alt} />
            )}
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
