import { useState } from 'react';

export default function Section({ title, children, variant, collapsible, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseClass = variant
    ? `content-section content-section--${variant}`
    : 'content-section';
  const className = collapsible
    ? `${baseClass} content-section--collapsible ${open ? 'content-section--open' : ''}`
    : baseClass;

  if (collapsible) {
    return (
      <section className={className}>
        <button
          type="button"
          className="content-section__trigger"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span>{title}</span>
          <span className="content-section__chevron" aria-hidden>▼</span>
        </button>
        <div className="content-section__panel" hidden={!open}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
