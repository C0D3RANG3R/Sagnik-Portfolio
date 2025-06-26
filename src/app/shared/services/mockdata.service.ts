import { Injectable } from '@angular/core';
import { ISkillItem } from '../dtos/skill-item';
import { IExperienceItem } from '../dtos/experience-item';
import { IProjectItem } from '../dtos/project-item';

@Injectable({
  providedIn: 'root',
})
export class MockdataService {
  getSkillitems(): ISkillItem[] {
    return [
      {
        title: 'Backend (Java)',
        items: [
          'Java 8/11+',
          'Spring Boot',
          'Spring Data JPA',
          'Spring Security',
          'REST API Development',
          'JUnit/ Mockito',
          'MySQL',
        ],
      },
      {
        title: 'Frontend (Angular)',
        items: [
          'Angular 17+',
          'TypeScript',
          'HTML5',
          'SCSS',
          'JavaScript',
          'JUnit',
        ],
      },
      {
        title: 'Tools & workflow',
        items: [
          'Git',
          'Bitbucket',
          'GitLab',
          'Postman',
          'SonarQube',
          'VS Code / IntelliJ IDEA',
          'Agile / Scrum',
        ],
      },
      {
        title: 'Other skills',
        items: [
          'Responsive Design',
          'Clean Code (SOLID Principles)',
          'Problem Solving',
          'Debugging & Troubleshooting',
        ],
      },
    ];
  }

  getExperienceItems(): IExperienceItem[] {
    return [
      {
        jobTitle: 'Analyst',
        companyName: 'Capgemini',
        timeRange: 'January 2024 – Present',
        description:
          'Working on a client project for De Volksbank as a full stack developer, contributing to the development of dynamic and secure web applications. Responsible for creating and maintaining RESTful APIs using Java Spring Boot, and building responsive, component-driven UIs using Angular. Collaborated with the frontend and backend projects to integrate features with XC (XperianCentral) CMS. Actively involved in testing, debugging, and enhancing UI/UX to ensure high-quality deliverables within agile sprints.',
        place: 'In-office (based in Mumbai, India)',
      },
    ];
  }

  getEducationItems(): IExperienceItem[] {
    return [
      {
        jobTitle: 'B.Tech in Computer Science and Engineering',
        companyName: 'Narula Institute of Technology',
        timeRange: 'CGPA: 8.82 | June 2019 - June 2023',
        description:
          'Completed a 4-year undergraduate program focused on core computer science concepts including data structures, algorithms, databases, operating systems, and software engineering. Gained hands-on experience in full stack development, particularly in Java, web technologies, and frontend frameworks. Participated in academic projects, coding competitions, and collaborative development activities that strengthened my technical and problem-solving skills.',
        place: 'Kolkata, India',
      },
      {
        jobTitle: 'Higher Secondary Education (ISC)',
        companyName: 'Methodist School',
        timeRange: 'Percentage: 85.5 | March 2018 - April 2019',
        description:
          'Completed higher secondary education with a focus on Physics, Chemistr, Mathematics, and Computer Science. Built a strong foundation in analytical thinking and problem-solving, which later fueled my interest in software development.',
        place: 'Kolkata, India',
      },
    ];
  }

  getProjectItems(): IProjectItem[] {
    return [
      {
      title: 'Developer Portfolio',
      description:
        'A modern, responsive portfolio website built with Angular, showcasing my skills, experience, and recent projects. Features a clean UI, mobile-first design, and easy navigation.',
      url: 'https://github.com/C0D3RANG3R/Sagnik-Portfolio',
      demo: 'https://sagnik-portfolio-five.vercel.app/',
      screenshot: 'assets/portfolio-screenshot.png',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
    },
    ]
  }
}