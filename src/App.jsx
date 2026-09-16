import React, { useState } from "react"
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiMenu,
  FiSend,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi"
import {
  currentFocus,
  education,
  experiences,
  featuredProject,
  languages,
  profileData,
  projects,
  proofPoints,
  recognitions,
  services,
  skillGroups,
} from "./data"

const navItems = [
  { href: "#enfoque", label: "Enfoque" },
  { href: "#proyectos", label: "Trabajo" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#habilidades", label: "Stack" },
]

const serviceIcons = {
  code: FiCode,
  layers: FiLayers,
  users: FiUsers,
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <div className="ambient" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <span className="brand-mark">MM</span>
          <span className="brand-slash">/</span>
          <span className="brand-label">Product engineering</span>
        </a>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>
            Hablemos <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </header>

      <main id="contenido">
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Mateo Moreira <span className="eyebrow-divider">/</span> Product engineering
            </p>

            <h1>
              Del problema real
              <span className="headline-accent"> al software que funciona.</span>
            </h1>

            <p className="hero-lede">{profileData.summary}</p>

            <div className="hero-actions">
              <a className="button button--primary" href="#proyectos">
                Explorar trabajo <FiArrowDown aria-hidden="true" />
              </a>
              <a className="button button--secondary" href={"mailto:" + profileData.email}>
                Hablemos <FiSend aria-hidden="true" />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <FiMapPin aria-hidden="true" /> {profileData.location}
              </span>
              <span className="meta-separator" aria-hidden="true" />
              <span className="meta-availability">
                <span className="status-dot" aria-hidden="true" /> {profileData.availability}
              </span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <FiExternalLink aria-hidden="true" />
              </a>
              <a href={profileData.github} target="_blank" rel="noreferrer">
                GitHub <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-topline">
                <span className="portrait-index">01 / Perfil</span>
                <span className="portrait-signal">Disponible</span>
              </div>
              <img src={profileData.profileImage} alt="Mateo Moreira" width="469" height="600" />
              <div className="portrait-wash" aria-hidden="true" />
              <div className="portrait-caption">
                <span>{profileData.role}</span>
                <strong>{profileData.title}</strong>
              </div>
              <div className="portrait-bottomline">
                <span>Buenos Aires, AR</span>
                <span>MM / 2026</span>
              </div>
            </div>

            <aside className="current-focus" aria-label="En qué estoy trabajando">
              <div className="current-focus-heading">
                <span>
                  <span className="signal-mark" aria-hidden="true" /> Ahora
                </span>
                <FiArrowUpRight aria-hidden="true" />
              </div>
              {currentFocus.map((item) => (
                <div className="focus-row" key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="Datos destacados">
          {proofPoints.map((point) => (
            <div className="proof-item" key={point.label}>
              <strong>{point.value}</strong>
              <div>
                <span>{point.label}</span>
                <small>{point.detail}</small>
              </div>
            </div>
          ))}
        </section>

        <section className="section section--tight" id="enfoque">
          <SectionHeading
            number="02"
            eyebrow="Cómo trabajo"
            title="Un pie en producto. Otro en el sistema."
            description="Me muevo entre estrategia, interfaz y backend para que cada decisión técnica tenga contexto y cada entrega tenga un porqué."
          />

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon]
              return (
                <article className={`service-card service-card--${index + 1}`} key={service.number}>
                  <div className="service-topline">
                    <span>{service.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section" id="proyectos">
          <SectionHeading
            number="03"
            eyebrow="Trabajo seleccionado"
            title="Cuando el problema es real, el stack se nota."
            description="Productos, plataformas y sistemas donde participé desde la interfaz hasta las decisiones que los hacen posibles."
          />

          <article className="featured-project">
            <div className="featured-visual">
              <div className="case-window">
                <div className="case-window-bar">
                  <span className="window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>peakmind.com.ar</span>
                  <FiExternalLink aria-hidden="true" />
                </div>
                <div className="case-window-body">
                  <img
                    className="case-preview"
                    src={featuredProject.preview}
                    alt={featuredProject.previewAlt}
                    width="738"
                    height="1600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <span className="visual-stamp visual-stamp--top">Caso destacado</span>
              <span className="visual-stamp visual-stamp--bottom">Impacto social</span>
            </div>

            <div className="featured-content">
              <p className="project-eyebrow">
                01 <span>/</span> Producto digital
              </p>
              <div className="project-title-row">
                <div>
                  <span className="project-category">{featuredProject.category}</span>
                  <h3>{featuredProject.title}</h3>
                </div>
                <FiArrowUpRight className="project-title-icon" aria-hidden="true" />
              </div>
              <p className="project-description">{featuredProject.description}</p>

              <div className="project-role">
                <span>Mi rol</span>
                <strong>{featuredProject.role}</strong>
                <small>{featuredProject.period}</small>
              </div>

              <TagList tags={featuredProject.tags} />

              <div className="award-row">
                <FiAward aria-hidden="true" />
                <div>
                  {featuredProject.awards.map((award) => (
                    <span key={award}>
                      <FiCheck aria-hidden="true" /> {award}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a className="text-link text-link--light" href={featuredProject.site} target="_blank" rel="noreferrer">
                  Ver PeakMind <FiExternalLink aria-hidden="true" />
                </a>
                <a className="text-link text-link--muted" href={featuredProject.repository} target="_blank" rel="noreferrer">
                  GitHub <FiGithub aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card--${project.tone}`} key={project.title}>
                <div className={`project-card-media${project.preview ? "" : " project-card-media--system"}`}>
                  {project.preview ? (
                    <img
                      src={project.preview}
                      alt={project.previewAlt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="system-preview">
                      <span className="system-preview-kicker">{project.visualLabel}</span>
                      <strong>{project.mark}</strong>
                      <small>{project.visualDetail}</small>
                      <span className="system-preview-line" aria-hidden="true" />
                    </div>
                  )}
                  <span className="project-card-number" aria-hidden="true">
                    0{index + 2}
                  </span>
                </div>
                <div className="project-card-content">
                  <div className="project-card-topline">
                    <span className="project-category">{project.category}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <TagList tags={project.tags} />
                  {project.link ? (
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      {project.label} <FiExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="project-note">
                      <span className="status-dot" aria-hidden="true" /> {project.label}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--trajectory" id="trayectoria">
          <SectionHeading
            number="04"
            eyebrow="Trayectoria"
            title="Cuando el software toca el mundo."
            description="Producto, desarrollo y educación. Roles distintos, una misma obsesión por hacer que las cosas funcionen mejor para alguien."
          />

          <div className="trajectory-layout">
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={experience.company + experience.date}>
                  <div className="timeline-date">{experience.date}</div>
                  <div className="timeline-marker" aria-hidden="true">
                    <span />
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-heading">
                      <div>
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                      </div>
                      <FiBriefcase aria-hidden="true" />
                    </div>
                    <span className="timeline-location">{experience.location}</span>
                    <p>{experience.description}</p>
                    <TagList tags={experience.tags} />
                  </div>
                </article>
              ))}
            </div>

            <aside className="education-panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <FiBookOpen aria-hidden="true" />
                </span>
                <div>
                  <span className="panel-eyebrow">Formación</span>
                  <h3>Aprender para hacerlo mejor.</h3>
                </div>
              </div>

              <div className="education-list">
                {education.map((item) => (
                  <div className="education-item" key={item.company}>
                    <span className="education-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p>{item.company}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>

              <a className="panel-link" href={profileData.cv} target="_blank" rel="noreferrer">
                Ver CV completo <FiDownload aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        <section className="section section--skills" id="habilidades">
          <SectionHeading
            number="05"
            eyebrow="Stack & reconocimientos"
            title="Un stack que cruza capas."
            description="Tecnologías que aparecen en mis proyectos y la forma de trabajo que las vuelve útiles: producto, frontend, backend, datos, tiempo real y delivery."
          />

          <div className="skills-layout">
            <div className="skills-groups">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-heading">
                    <span className="skill-group-number">0{index + 1}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <span>{group.caption}</span>
                    </div>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <aside className="recognition-panel">
              <div className="panel-heading">
                <span className="panel-icon panel-icon--signal">
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <span className="panel-eyebrow">Logros</span>
                  <h3>Resultados que validan el proceso.</h3>
                </div>
              </div>
              <div className="recognition-list">
                {recognitions.map((recognition) => (
                  <div className="recognition-item" key={recognition.title}>
                    <span>{recognition.year}</span>
                    <div>
                      <strong>{recognition.title}</strong>
                      <small>{recognition.detail}</small>
                    </div>
                  </div>
                ))}
              </div>
              <div className="language-row">
                <FiGlobe aria-hidden="true" />
                <div>
                  <span>Idiomas</span>
                  <strong>{languages.map((language) => language.name).join(" · ")}</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark">
              <span className="eyebrow-line" aria-hidden="true" />
              Próximo desafío
            </p>
            <h2>Si el problema tiene muchas piezas, hablemos.</h2>
            <p>
              Si tenés una idea, un equipo o un sistema difícil de ordenar, escribime. Siempre hay una primera
              conversación posible.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button--dark" href={"mailto:" + profileData.email}>
              {profileData.email} <FiArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a href={profileData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <FiLinkedin aria-hidden="true" />
              </a>
              <a href={profileData.github} target="_blank" rel="noreferrer">
                GitHub <FiGithub aria-hidden="true" />
              </a>
              <a href={profileData.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <FiSend aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-brand">MM/</span>
        <span>Mateo Moreira · PM & Tech Lead / Full Stack</span>
        <a href="#inicio">
          Volver arriba <FiArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </div>
  )
}

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-heading-topline">
        <span className="section-number">{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  )
}

export default App
