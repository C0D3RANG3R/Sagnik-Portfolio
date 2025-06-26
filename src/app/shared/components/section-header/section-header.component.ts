import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() teaser: string = '';

  constructor() {}

  ngOnInit(): void {}
}
