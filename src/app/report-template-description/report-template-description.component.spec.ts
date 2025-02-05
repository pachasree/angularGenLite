import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTemplateDescriptionComponent } from './report-template-description.component';

describe('ReportTemplateDescriptionComponent', () => {
  let component: ReportTemplateDescriptionComponent;
  let fixture: ComponentFixture<ReportTemplateDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportTemplateDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportTemplateDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
