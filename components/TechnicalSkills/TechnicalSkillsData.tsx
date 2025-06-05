import { TechnicalSkills } from "@/types/technicalskills";

const technicalSkillsData: TechnicalSkills[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Sitecore",
    description: [
      "Sitecore 9.3, 10.1, 10.2", 
      "SXA", 
      "Headless", 
      "XM Cloud",
      "Helix Architecture"
    ],
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Backend",
    description: [
      "ASP.NET, ASP.NET MVC, ASP.NET Core",
      "C#",
      "Web API",
      "LINQ",
      "Entity Framework"
    ],
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Frontend",
    description: [
      "JavaScript", 
      "jQuery", 
      "SCSS", 
      "HTML5", 
      "React (basic)"
    ],
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Search & Serialization",
    description: [
      "Solr Search", 
      "Unicorn Serialization"
    ],
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Database",
    description: [
      "MSSQL", 
      "Query Optimization", 
      "Database Design"
    ],
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "DevOps & Tools",
    description: [
      "Docker", 
      "Azure DevOps, Jira", 
      "Git, Tortoise SVN", 
      "PowerShell Scripting"
    ],
  },
];

export default technicalSkillsData;