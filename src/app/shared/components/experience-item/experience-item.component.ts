import { Component, Input } from '@angular/core';
import { IExperienceItem } from '../../dtos/experience-item';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent {
  @Input() item!: IExperienceItem;
  @Input() alternativeColor = false;
}