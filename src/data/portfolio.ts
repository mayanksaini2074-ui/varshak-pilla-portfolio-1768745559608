import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Varshak Pilla",
    "title": "Computer Science Engineering Student",
    "email": "saivarshak14@gmail.com",
    "phone": "+91 8247624897",
    "linkedin": "",
    "github": "",
    "location": "Kakinada, India",
    "summary": "Aspiring computer science engineer with experience in developing full-stack applications using Django and MySQL. Skilled in frontend technologies and dedicated to building seamless web platforms with a focus on API integration and user experience."
  },
  "experience": [
    {
      "title": "Internship Experience",
      "company": "Resume Builder",
      "dates": "",
      "description": "Created a web application using Django to let users design, modify, and download resumes interactively.",
      "highlights": [
        "Built form logic, data management, and dynamic templates through Django models and views for an efficient user flow."
      ]
    }
  ],
  "education": [
    {
      "degree": "Diploma in Computer Science Engineering",
      "institution": "Kakinada Institute of Engineering & Technology",
      "years": "2022 – 2025",
      "gpa": "68.40"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "E-Commerce Web Application",
      "description": "I developed a full-stack shopping platform with secure user login, REST APIs, and payment integration using Django and MySQL.",
      "technologies": [
        "Django",
        "MySQL"
      ],
      "link": "",
      "github": "Git Link"
    },
    {
      "name": "Job Hub",
      "description": "Built a responsive job listing website using HTML, CSS, and Bootstrap with search filters, structured job cards, and full browser compatibility.",
      "technologies": [
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      "link": "Project Link",
      "github": ""
    },
    {
      "name": "Online Gaming Platform",
      "description": "Created a mobile-friendly gaming website using HTML, CSS, and Bootstrap featuring an interactive UI and adaptive layout.",
      "technologies": [
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      "link": "Project Link",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "purple"
};
