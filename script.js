(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open) {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") !== "true";
      setMenu(open);
    });

    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => setMenu(false));
    });
  }

  // Email template + mailto
  const email = "mirage-a2i@outlook.com";
  const subject = "Project Inquiry — AI/LLM/RAG/Agent/Chatbot";
  const template =
`Hello Mirage-AI Team,

I’m interested in a project with the following details:

1) Goal / Use-case:
- (e.g., RAG chatbot over internal docs, customer support agent, CV video analytics, ML prediction, etc.)

2) Data sources:
- (PDFs, website, database, API, tickets, logs, images, video, etc.)

3) Required integrations:
- (Slack, WhatsApp, CRM, ERP, Notion, Google Drive, internal DB, etc.)

4) Deployment preference:
- (Cloud / On-prem / VPC / Edge)

5) Timeline & budget range:
- Timeline:
- Budget:

Please share a proposal with scope, milestones, deliverables, and estimated cost.

Best regards,
(Name)
(Company)
(Contact)
`;

  const tmplEl = document.getElementById("emailTemplate");
  if (tmplEl) tmplEl.textContent = template;

  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn) {
    const body = encodeURIComponent(template);
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    emailBtn.setAttribute("href", mailto);
  }
})();
