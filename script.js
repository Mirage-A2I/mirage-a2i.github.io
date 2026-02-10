(function () {
  // Footer year
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

  // Email template + mailto (ONLY one email address used across the whole site)
  const email = "mirage-a2i@outlook.com";
  const subject = "Project Inquiry — AI/LLM/RAG/Agents/Chatbots";

  const template =
`Hello Mirage-AI Team,

I would like to request a proposal for an AI project.

1) Objective / Use-case:
- (Example: RAG knowledge assistant, customer support chatbot, agentic automation, CV video analytics, ML prediction)

2) Data sources:
- (PDFs, web pages, database, APIs, tickets/logs, images, video, etc.)

3) Required integrations:
- (Slack/Teams, CRM, Notion/Confluence, Google Drive, internal DB, ERP, etc.)

4) Deployment preference:
- (Cloud / On-prem / VPC / Edge)

5) Constraints:
- Accuracy target:
- Latency target:
- Security/compliance needs (PII, access control, etc.):

6) Timeline & budget:
- Timeline:
- Budget range:

Please respond with scope, milestones, deliverables, estimated cost, and next steps.

Best regards,
(Name)
(Company)
(Contact)
`;

  // Render template
  const tmplEl = document.getElementById("emailTemplate");
  if (tmplEl) tmplEl.textContent = template;

  // Button mailto
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn) {
    const body = encodeURIComponent(template);
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    emailBtn.setAttribute("href", mailto);
  }
})();
