import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss'],
})
export class TagItemComponent {
  @Input() tag: string = '';
  @Input() spacing: string = 'p-2 me-3 mb-3';
}
