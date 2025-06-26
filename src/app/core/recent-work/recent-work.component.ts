import { Component, OnInit } from '@angular/core';
import { IProjectItem } from 'src/app/shared/dtos/project-item'
import { MockdataService } from 'src/app/shared/services/mockdata.service';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss'],
})
export class RecentWorkComponent implements OnInit {
  projects: IProjectItem[] = [];

  constructor(private readonly service: MockdataService) {}

  ngOnInit(): void {
    this.projects = this.service.getProjectItems();
  }
}