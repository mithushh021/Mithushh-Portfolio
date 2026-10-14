const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeId }) {
  return (
    <nav>
      <div className="logo">
        MP<span>.</span>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
