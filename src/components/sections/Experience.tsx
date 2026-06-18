// Experience data grouped by company; roles ordered most-recent first
const experiences = [
  {
    id: 'netpower',
    company: 'Netpower',
    companyUrl: 'https://www.netpower.no/',
    location: 'Dhaka, Bangladesh',
    period: 'April 2026 - Present',
    roles: [
      {
        title: 'Senior Software Engineer (Backend)',
        period: 'April 2026 - Present',
        description: [
          'Engineered a .NET 10 document intelligence system for HTML documents with smart chunking, plus sparse vector and dense embeddings using Microsoft.Extensions.AI.',
          'Built a private .NET NuGet package for distributed systems, enabling cross-service communication through RabbitMQ event-driven workflows such as notifications and email sending.',
          'Led the engineering of a common background job management system handling recurring and scheduled events with Quartz for a distributed quality management system.'
        ],
        technologies: ['.NET 10', 'Microsoft.Extensions.AI', 'RabbitMQ', 'Quartz.NET', 'Embeddings', 'Distributed Systems']
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
          'Led the design of a tax automation system using GraphBit AI agent framework, ensuring security and efficiency for sensitive data analysis.',
          'Led backend development for a Python multi-agent chat system with GraphRAG and Local LLM, optimizing for unstructured data and privacy.',
          'Built a pipeline converting 3TB of documents to metadata-rich text, boosting vectorization and model training efficiency by 10x.'
        ],
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'CrewAI', 'GraphBit', 'Local LLM', 'Docker']
      },
      {
        title: 'Backend Developer (.NET)',
        period: 'November 2024 - November 2025',
        description: [
          'Developed a .NET 8 bid management platform for a top German energy company with RAG-based AI agents, achieving a 40% efficiency boost in document analysis.',
          'Architected services for long-running AI analysis, versioning, and e-signatures, significantly improving process workflows.',
          'Integrated Snowflake, Adobe e-Sign, SharePoint, and AWS services (S3, SES) to automate complex enterprise data workflows.',
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
          'Migrated a hiring platform from Node.js to .NET 8, establishing a modular architecture for enhanced scalability.',
          'Managed development of substantial features for a leading Angular-based project management software.'
        ],
        technologies: ['.NET 8', 'C#', 'Angular', 'Modular Monolith', 'Node.js']
      },
      {
        title: 'Software Engineer',
        period: 'January 2022 - March 2024',
        description: [
          'Migrated a US-based dental practice management system, upgrading applications from VB.NET 3.5 to C# .NET 6 to integrate cloud-native Azure services.',
          'Built a microservice with Azure Functions for sending transactional emails on behalf of client emails with customized templates.',
          'Developed SSO with Azure Active Directory (Microsoft Entra) for multi-tenant SaaS platform with 100k+ users.',
          'Identified security vulnerabilities and implemented a backend RBAC authorization layer in API endpoints to prevent data breaches.'
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
