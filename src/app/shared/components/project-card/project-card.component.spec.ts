import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects input property', () => {
    component.projects = [
      {
        title: 'Test Project',
        description: 'This is a test project.',
        url: 'http://example.com',
        demo: 'http://demo.example.com',
        screenshot: 'http://example.com/screenshot.png',
        tags: ['Angular', 'TypeScript'],
      },
    ];
    expect(component.projects.length).toBe(1);
    expect(component.projects[0].title).toBe('Test Project');
  });
});