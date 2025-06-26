import { Component, Input, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  url: string;
  demo?: string;
  screenshot: string;
  tags: string[];
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {}
}