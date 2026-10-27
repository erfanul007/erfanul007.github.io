import { useState } from 'react';

interface Role {
  title: string;
  period: string;
  summary?: string;
  highlights: string[];
  more?: string[];
  technologies: string[];
}

interface CompanyStint {
  id: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  roles: Role[];
}

// Experience data grouped by company stint; roles ordered most-recent first.
// `highlights` are always shown; `more` sits behind a per-role "Show more" toggle.
const experiences: CompanyStint[] = [
  {
    id: 'infinitibit-current',
    company: 'InfinitiBit',
    companyUrl: 'https://www.infinitibit.com/',
    location: 'Dhaka, Bangladesh',
    period: 'August 2026 - Present',
    roles: [
      {
        title: 'Senior Backend Developer',
        period: 'August 2026 - Present',
        highlights: [
          'Led the backend architecture of an AI VAT validation product that checks invoices against German and EU tax law, citing the exact law behind every verdict.',
          'Turned the demo into a multi-tenant SaaS MVP, adding single sign-on, role-based access, per-customer storage, credit billing and audit logs.',
          'Isolated each customer in its own PostgreSQL schema and role, enforced on every query, so tax data never leaks between customers.',
          "Designed the shared RabbitMQ event contract for the company's SaaS platform and led the adoption of Temporal, so every product app integrates the same way.",
          'Built crash-safe background processing with Temporal and a transactional outbox, designed for 10,000 validations from one click and resuming after a restart.'
        ],
        more: [
          'Built tools to build, monitor and sync the tax-law knowledge graph for each customer, with human approval before any law change goes live.',
          'Set up observability with OpenTelemetry, Grafana, Tempo, Loki and Prometheus, so any failure across the API, workers and LLM calls is traced in one place.',
          'Introduced an AI-driven delivery workflow with Claude Code, reviewed 35+ pull requests and mentored two junior developers.'
        ],
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Temporal', 'RabbitMQ', 'OpenTelemetry', 'Grafana', 'Knowledge Graph', 'AI Agents', 'Multi-tenant SaaS']
      }
    ]
  },
  {
    id: 'sds-manager',
    company: 'SDS Manager (Netpower)',
    companyUrl: 'https://www.netpower.no/',
    location: 'Dhaka, Bangladesh',
    period: 'April 2026 - July 2026',
    roles: [
      {
        title: 'Senior Software Engineer (Backend)',
        period: 'April 2026 - July 2026',
        summary: 'Norway-based quality management system focused on workplace quality, safety and regulations.',
        highlights: [
          'Built a .NET 10 document intelligence service with smart chunking and sparse and dense embeddings using Microsoft.Extensions.AI.',
          'Led a shared background job system on Quartz.NET that runs recurring and scheduled work for all Certain QMS microservices.',
          'Created a private NuGet messaging package so services exchange events over RabbitMQ for workflows like notifications and email.',
          'Built an email template manager with branding and multi-language support, letting admins edit notification emails themselves.'
        ],
        technologies: ['.NET 10', 'Microsoft.Extensions.AI', 'Embeddings', 'RabbitMQ', 'Quartz.NET', 'NuGet', 'Microservices']
      }
    ]
  },
  {
    id: 'infinitibit',
    company: 'InfinitiBit',
    companyUrl: 'https://www.infinitibit.com/',
    location: 'Dhaka, Bangladesh',
    period: 'November 2024 - March 2026',
    roles: [
      {
        title: 'Senior Backend Developer',
        period: 'November 2025 - March 2026',
        highlights: [
          'Led the backend of a private GraphRAG chat system on a local GPU cluster, cutting response time from 10–12 minutes to under 2 with a fully async agent pipeline.',
          'Designed the backend architecture of GT Tax, a transfer-pricing tax platform, and built its single sign-on, role-based access, document storage and working-paper ingestion.',
          'Built a document ingestion tool that converted 3TB of PDFs, Office files and images into text with metadata for the knowledge graph and model training.'
        ],
        more: [
          'Cut the memory use of AI document classification by streaming files in chunks, and re-ran classification only on new documents.',
          'Reviewed 45+ pull requests across the chat and tax platforms and planned work for two developers.',
          'Built a VAT audit agent with GraphBit in a 3-day hackathon that extracts rules from legal text and explains each finding.'
        ],
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Neo4j', 'CrewAI', 'GraphRAG', 'Local LLM', 'Entra ID', 'Docker']
      },
      {
        title: 'Backend Developer (.NET)',
        period: 'November 2024 - November 2025',
        highlights: [
          'Built core modules of a .NET 8 bid management platform for a leading German energy company as its largest contributor, with 150+ merged pull requests.',
          'Built the orchestration that runs AI analysis of bid documents (RFQ, technical, pricing), with background jobs, progress tracking and a circuit breaker.',
          'Automated bid approval and e-signature with workflow rules, document version locking, approval reports and Adobe Acrobat Sign.'
        ],
        more: [
          'Connected modules with event-driven messaging on MassTransit and RabbitMQ, and integrated SharePoint, AWS S3, SES and CloudWatch.',
          'Added exchange-rate management so commercial offers convert currency per work package.',
          'Designed the architecture and AWS cost model for a real-time power-utility data platform handling about 7,500 sensor messages per second.'
        ],
        technologies: ['.NET 8', 'EF Core', 'SQL Server', 'CQRS', 'MassTransit', 'RabbitMQ', 'Quartz.NET', 'AWS', 'SharePoint', 'Adobe Acrobat Sign']
      }
    ]
  },
  {
    id: 'enosis',
    company: 'Enosis Solutions',
    companyUrl: 'https://www.enosisbd.com/',
    location: 'Dhaka, Bangladesh',
    period: 'January 2022 - July 2024',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'April 2024 - July 2024',
        highlights: [
          'Migrated a hiring platform from Node.js to .NET 8 with a modular architecture that is easier to scale and extend.',
          'Delivered major UI features for a leading Angular-based project management product.',
          'Reviewed code and mentored teammates to keep quality consistent.'
        ],
        technologies: ['.NET 8', 'C#', 'Angular', 'TypeScript', 'Modular Monolith', 'Node.js']
      },
      {
        title: 'Software Engineer',
        period: 'January 2022 - March 2024',
        highlights: [
          'Migrated the US dental practice system Denticon from VB.NET 3.5 to C# .NET 6, preparing it for Azure cloud services.',
          'Implemented Microsoft Entra single sign-on (OAuth2/OIDC) for a multi-tenant B2B SaaS platform with 100k+ users.',
          'Fixed high-priority production issues, including unauthorised data access, with a central authorization layer across APIs.'
        ],
        more: [
          'Introduced onion architecture to split services into clean, modular layers.',
          "Built a serverless email service with Azure Functions and Service Bus that sends mail from clients' own accounts and scales independently."
        ],
        technologies: ['.NET 6', 'C#', 'Azure Functions', 'Azure Service Bus', 'Microsoft Entra', 'SQL Server', 'VB.NET']
      }
    ]
  }
];

const Experience = () => {
  // Expanded roles, keyed by company id and role index
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">

        <div className="space-y-12">
          {experiences.map((company) => (
            <div key={company.id}>
              {/* Company header, aligned to the left edge */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  <a href={company.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {company.company}
                  </a>
                </h3>
                <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-300">
                  <span>{company.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 dark:text-blue-400">{company.period}</span>
                </div>
              </div>

              {/* Roles: one continuous bar (first role to last role), a dot per role */}
              <div className="relative pl-8">
                {/* Shared vertical bar under the company name's left edge */}
                <div className="absolute left-[6px] top-2 bottom-2 w-0.5 bg-blue-600 dark:bg-blue-500"></div>

                <div className="space-y-8">
                  {company.roles.map((role, roleIndex) => {
                    const key = `${company.id}-${roleIndex}`;
                    const isExpanded = expanded[key] ?? false;
                    const more = role.more ?? [];
                    const shown = isExpanded ? [...role.highlights, ...more] : role.highlights;

                    return (
                      <div key={roleIndex} className="relative">
                        {/* Dot on the bar, aligned to the role title */}
                        <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {role.title}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                          {role.period}
                        </p>

                        {role.summary && (
                          <p className="italic text-gray-600 dark:text-gray-400 mb-3">
                            {role.summary}
                          </p>
                        )}

                        <ul id={`${key}-points`} className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                          {shown.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>

                        {more.length > 0 && (
                          <button
                            type="button"
                            onClick={() => toggle(key)}
                            aria-expanded={isExpanded}
                            aria-controls={`${key}-points`}
                            className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {isExpanded ? 'Show less' : `Show ${more.length} more`}
                          </button>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {role.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
