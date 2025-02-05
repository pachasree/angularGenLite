import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTemplateRdlFileComponent } from './report-template-rdl-file.component';

describe('ReportTemplateRdlFileComponent', () => {
  let component: ReportTemplateRdlFileComponent;
  let fixture: ComponentFixture<ReportTemplateRdlFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportTemplateRdlFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportTemplateRdlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
