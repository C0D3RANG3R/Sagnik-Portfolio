import { Component, Input } from '@angular/core';
import { ISkillItem } from '../../dtos/skill-item';

@Component({
  selector: 'app-skill-wrapper',
  templateUrl: './skill-wrapper.component.html',
  styleUrls: ['./skill-wrapper.component.css'],
})
export class SkillWrapperComponent {
  @Input() data: ISkillItem[] = [];

  isFirstItem(item: ISkillItem): boolean {
    return this.data.findIndex(x => x === item) === 0;
  }
}