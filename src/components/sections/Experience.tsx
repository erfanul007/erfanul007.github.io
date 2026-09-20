// Experience data grouped by company stint; roles ordered most-recent first
const experiences = [
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
        description: [
          'Integrated an app into a multi-tenant, multi-app B2B SaaS platform, maintaining enterprise security compliance while validating VAT transactions under EU and German regulations.',
          'Led the design and development of a tax automation system with the GraphBit AI agent framework, enabling auditable analysis of sensitive data while maintaining security and efficiency.'
        ],
        technologies: ['GraphBit', 'AI Agents', 'Multi-tenant SaaS', 'VAT Compliance']
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
        description: [
          'Engineered a .NET 10 document intelligence system for HTML documents with smart chunking, plus sparse vector and dense embeddings using Microsoft.Extensions.AI.',
          'Built a private .NET NuGet package for distributed systems, enabling cross-service communication through RabbitMQ event-driven workflows such as notifications and email sending.',
          'Led the engineering of a common background job management system handling recurring and scheduled events with Quartz for the distributed quality management system Certain QMS.',
          'Crafted an email template management system with a branding shell and multi-cultural support, allowing admins to modify system notification email contents and placeholders.'
        ],
        technologies: ['.NET 10', 'Microsoft.Extensions.AI', 'RabbitMQ', 'Quartz.NET', 'Embeddings', 'Email Templates', 'Distributed Systems']
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
        description: [
          'Led backend development for a Python multi-agent chat system with GraphRAG and Local LLM in a clustered GPU system, enabling better querying over huge unstructured data while maximizing data privacy.',
          'Built a data processing pipeline CLI tool converting 3TB of documents to metadata-rich text, boosting vectorization and model training efficiency by 10x.'
        ],
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'CrewAI', 'GraphRAG', 'Local LLM', 'Docker']
      },
      {
        title: 'Backend Developer (.NET)',
        period: 'November 2024 - November 2025',
        description: [
          'Developed a .NET 8 bid management platform for a top German energy company with RAG-based AI agent workflows, achieving a 40% efficiency boost in document analysis.',
          'Designed microservices for long-running AI analysis, document versioning, and signature workflow management, significantly improving process workflows.',
          'Integrated Snowflake, Adobe e-Sign, SharePoint, SAP, and AWS services (S3, SES) to automate complex enterprise data workflows.',
          'Designed an event-driven platform processing 100M+ events/day using Go, Kafka, TimescaleDB, and Kubernetes.'
        ],
        technologies: ['.NET 8', 'EF Core', 'SQL Server', 'CQRS', 'RabbitMQ', 'RAG', 'AWS']
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
        description: [
          'Migrated a hiring platform from Node.js to .NET 8, establishing a modular architecture for enhanced scalability and extensibility.',
          'Managed development of substantial features for a leading Angular-based project management software.'
        ],
        technologies: ['.NET 8', 'C#', 'Angular', 'Modular Monolith', 'Node.js']
      },
      {
        title: 'Software Engineer',
        period: 'January 2022 - March 2024',
        description: [
          'Migrated the US-based dental practice management system Denticon, upgrading applications from VB.NET 3.5 to C# .NET 6 to integrate cloud-native Azure services.',
          'Built a serverless microservice with Azure Functions for sending transactional emails on behalf of clients, using their email and customized templates.',
          'Developed SSO with Microsoft Entra (Azure Active Directory) for a multi-tenant B2B SaaS platform with 100k+ users.',
          'Identified authorization gaps and implemented a backend RBAC authorization layer across API endpoints to reduce unauthorized data-access risk.'
        ],
        technologies: ['.NET 6', 'C#', 'Azure Functions', 'Microsoft Entra', 'Microservices', 'VB.NET']
      }
    ]
  }
];

const Experience = () => {
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
                  {company.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Dot on the bar, aligned to the role title */}
                      <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>

                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {role.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                        {role.period}
                      </p>

                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                        {role.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

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
                  ))}
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
