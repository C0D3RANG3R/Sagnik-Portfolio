import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillWrapperComponent } from './skill-wrapper.component';

describe('SkillWrapperComponent', () => {
  let component: SkillWrapperComponent;
  let fixture: ComponentFixture<SkillWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
