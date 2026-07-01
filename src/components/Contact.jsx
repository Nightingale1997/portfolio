const contactMethods = [
  {
    label: "kevin.solovjov@gmail.com",
    href: "mailto:kevin.solovjov@gmail.com",
    ariaLabel: "Email Kevin Solovjov",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "+46760079742",
    href: "tel:+46760079742",
    ariaLabel: "Call Kevin Solovjov",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2h2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-solovjov-396254143/?locale=sv",
    ariaLabel: "Visit Kevin Solovjov on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9h3v10H6z" />
        <path d="M7.5 5.5v0" />
        <path d="M13 9h3v1.5c.5-.9 1.5-1.5 3-1.5 2.5 0 4 1.7 4 5v5h-3v-5c0-1.3-.7-2-1.8-2-1.3 0-2.2.9-2.2 2.5V19h-3z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-4">Start a conversation</h1>
        <h2 className="subtitle is-6">
          Interested in working together, talking UX, or building something
          useful? I would love to hear from you.
        </h2>
        <div className="columns is-centered contact-methods">
          {contactMethods.map((method) => (
            <div className="column is-one-third" key={method.label}>
              <a
                className="contact-button"
                href={method.href}
                aria-label={method.ariaLabel}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {method.icon}
              </a>
              <p className="contact-label">{method.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
