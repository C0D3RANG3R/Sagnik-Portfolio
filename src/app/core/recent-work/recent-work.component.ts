import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  url: string;
  demo?: string;
  screenshot: string;
  tags: string[];
}

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss'],
})
export class RecentWorkComponent {
  projects: Project[] = [
    {
      title: 'Developer Portfolio',
      description:
        'A modern, responsive portfolio website built with Angular, showcasing my skills, experience, and recent projects. Features a clean UI, mobile-first design, and easy navigation.',
      url: 'https://github.com/C0D3RANG3R/Sagnik-Portfolio',
      demo: 'https://sagnik-portfolio-five.vercel.app/',
      screenshot: 'assets/portfolio-screenshot.png',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
    },
  ];
}
