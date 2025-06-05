import { Projects } from "@/types/projects";

// Optionally import images or use a string path
import image1 from "@/public/images/projects/Manufacturing_commercial.png";
import image2 from "@/public/images/projects/Healthcare_banking.png";
import image3 from "@/public/images/projects/Accu_application.png";
import image4 from "@/public/images/projects/Mastersoft.png";
import image5 from "@/public/images/projects/4Play.png";

export const ProjectsData: Projects[] = [
  {
    id: "1",
    title: "Manufacturing & Commercial",
    shortDescription: `
    <ul>
      <li>
        Built modular components in XM Cloud for a scalable and consistent frontend.
      </li>
      <li>
        Fixed bugs, boosted performance, and maintained deployment docs.
      </li>
    </ul>`,
    longDescription: `
    <ul>
      <li>
        <strong>Project Description:</strong>
        <ul>
          <li>Developed a modular and reusable component library for an enterprise-grade web application hosted on Sitecore XM Cloud.</li>
          <li>Addressed critical application bugs to enhance performance and reliability.</li>
          <li>Maintained detailed technical documentation to support seamless collaboration and deployment processes.</li>
        </ul>
      </li>
      <li>
        <strong>Role & Responsibilities:</strong>
        <ul>
          <li>Interpreted business requirements into actionable development tasks, achieving a 95% on-time delivery rate.</li>
          <li>Produced comprehensive technical documentation and conducted solution walkthroughs to streamline team handovers.</li>
          <li>Partnered with cross-functional Agile teams to deliver high-impact features, participate in sprint demos, and support production releases.</li>
        </ul>
      </li>
    </ul>`,
    technologies: [
      "Sitecore XM Cloud",
      "C#",
      "Next.js",
      "Docker",
      "Azure DevOps",
      "Git",
    ],
    duration: "2 Months",
    image: image1.src,
  },
  {
    id: "2",
    title: "Healthcare and Banking",
    shortDescription: `
    <ul>
      <li>
        Developed scalable components in Sitecore SXA and resolved key bugs.
      </li>
      <li>
        Led offshore teams, gathered client requirements, and demoed features.
      </li>
    </ul>`,
    longDescription: `
    <ul>
      <li>
        <strong>Project Description:</strong>
        <ul>
          <li>Developed scalable, high-performance components for enterprise-grade web applications built on Sitecore SXA.</li>
          <li>Supported complex multi-site configurations to deliver consistent and personalized digital experiences.</li>
          <li>Focused on enhancing performance and stability to ensure reliable and responsive user interactions.</li>
          <li>Improved application maintainability through clean architecture and component-based design.</li>
          <li>Ensured seamless collaboration with clients throughout the project for continuous feedback and alignment.</li>
        </ul>
      </li>
      <li>
        <strong>Role & Responsibilities:</strong>
        <ul>
          <li>Developed modular and reusable components using Sitecore SXA to support scalable multi-site architecture.</li>
          <li>Identified and resolved critical bugs and performance bottlenecks, resulting in improved application stability and speed.</li>
          <li>Led the offshore development team, providing technical guidance and ensuring alignment with project goals and timelines.</li>
          <li>Collaborated directly with clients to gather requirements, clarify technical expectations, and offer solutions to business needs.</li>
          <li>Conducted feature demonstrations, gathered feedback from stakeholders, and incorporated iterative improvements based on client input.</li>
        </ul>
      </li>
    </ul>`,
    technologies: [
      "Sitecore SXA",
      "C#",
      "jQuery",
      "Docker",
      "Azure DevOps",
      "Git",
      "Unicorn",
      "SOLR",
    ],
    duration: "2 Years+",
    image: image2.src,
  },
  {
    id: "3",
    title: "ACCU Application",
    shortDescription: `
    <ul>
      <li>
        Built a banking app with balance sheet management and streamlined workflows.
      </li>
      <li>
        Automated tax calculations and delivered accurate financial reports.
      </li>
    </ul>`,
    longDescription: `
    <ul>
      <li>
        <strong>Project Description:</strong>
        <ul>
          <li>Built a custom banking application to streamline and optimize complex financial operations.</li>
          <li>Implemented robust balance sheet management features to maintain accurate financial records.</li>
          <li>Automated tax calculations in compliance with financial regulations.</li>
          <li>Generated comprehensive financial reports and statements to support decision-making.</li>
          <li>Focused on enhancing operational efficiency, accuracy, and system reliability.</li>
        </ul>
      </li>
      <li>
        <strong>Role & Responsibilities:</strong>
        <ul>
          <li>Developed core modules using ASP.NET MVC and C# to manage financial workflows.</li>
          <li>Enhanced user experience by building interactive UI components with jQuery.</li>
          <li>Wrote optimized SQL queries and managed data operations for performance and integrity.</li>
          <li>Utilized Git for version control and team collaboration.</li>
          <li>Collaborated with stakeholders to translate requirements into scalable and reliable features.</li>
        </ul>
      </li>
    </ul>`,
    technologies: ["ASP.NET MVC", "C#", "jQuery", "SQL", "Git"],
    duration: "6 Months",
    image: image3.src,
  },
  {
    id: "4",
    title: "Mastersoft Cloud",
    shortDescription: `
    <ul>
      <li>
        Built an ERP for education using modular design across academic modules.
      </li>
      <li>
        Created submodules to handle operations and improve administration.
      </li>
    </ul>`,
    longDescription: `
    <ul>
      <li>
        <strong>Project Description:</strong>
        <ul>
          <li>Developed a comprehensive educational ERP system for multi-client cloud environments.</li>
          <li>Designed a modular architecture with well-defined academic and non-academic sections to ensure scalability and flexibility.</li>
          <li>Implemented system-wide features to support institutional operations such as student management, scheduling, and reporting.</li>
          <li>Enhanced administrative efficiency and decision-making through centralized digital solutions.</li>
          <li>Enabled support for multiple educational entities using configuration-driven deployment.</li>
        </ul>
      </li>
      <li>
        <strong>Role & Responsibilities:</strong>
        <ul>
          <li>Developed various functional submodules using ASP.NET MVC and C# aligned with real-world academic workflows.</li>
          <li>Built dynamic, user-friendly interfaces using jQuery to streamline administrative tasks.</li>
          <li>Managed data handling and reporting logic with SQL for accuracy and performance.</li>
          <li>Utilized Tortoise SVN for version control and collaborative development.</li>
          <li>Engaged with clients to gather requirements and ensure alignment with educational processes.</li>
        </ul>
      </li>
    </ul>`,
    technologies: [
      "ASP.NET",
      "ASP.NET MVC",
      "C#",
      "jQuery",
      "SQL",
      "Tortoise SVN",
    ],
    duration: "2 Years+",
    image: image4.src,
  },
  {
    id: "5",
    title: "4Play",
    shortDescription: `
    <ul>
      <li>
        Built audio UI with upload/play/download and role-based access.
      </li>
      <li>
        Added subscriptions and developed a secure Windows player app.
      </li>
    </ul>`,
    longDescription: `
    <ul>
      <li>
        <strong>Project Description:</strong>
        <ul>
          <li>Developed a secure and user-friendly audio management interface with upload, playback, and download capabilities.</li>
          <li>Implemented role-based access control to manage user permissions effectively.</li>
          <li>Integrated a subscription module to control content access based on user plans.</li>
          <li>Designed a Windows desktop application enabling authenticated users to securely play audio files.</li>
          <li>Ensured a consistent and seamless audio experience across web and desktop platforms.</li>
        </ul>
      </li>
      <li>
        <strong>Role & Responsibilities:</strong>
        <ul>
          <li>Developed core audio features using ASP.NET MVC, Web API, and C# for robust backend processing.</li>
          <li>Built intuitive and responsive UI elements with jQuery to enhance user interaction.</li>
          <li>Implemented secure user authentication and role-based permissions to safeguard audio access.</li>
          <li>Managed media storage and retrieval using SQL, ensuring data accuracy and fast access.</li>
          <li>Created a Windows Forms application integrated with backend APIs for desktop-based audio playback.</li>
          <li>Used Git for version control and maintained a clean, collaborative development workflow.</li>
        </ul>
      </li>
    </ul>`,
    technologies: [
      "ASP.NET MVC",
      "Web API",
      "C#",
      "jQuery",
      "SQL",
      "Git",
    ],
    duration: "6 Months",
    image: image5.src,
  },
];
