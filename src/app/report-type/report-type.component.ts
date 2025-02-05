import { Component, OnInit } from '@angular/core';
import { ReportTypeService } from './report-type.service';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent implements OnInit {
  reportTypeOptions: Array<{ value: string, label: string }> = [];
  selectedReportType: string = '';
  defaultFieldValue: string = '-- Select --';
  validationMessage: string = '';

  constructor(private reportTypeService: ReportTypeService) {}

  ngOnInit(): void {
    this.loadReportTypeOptions();
  }

  loadReportTypeOptions(): void {
    this.reportTypeService.getReportTypeOptions().subscribe(
      options => {
        this.reportTypeOptions = options;
      },
      error => {
        console.error('Error loading report type options', error);
      }
    );
  }

  onReportTypeChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (!selectedValue) {
      this.validationMessage = 'Please select a report type.';
    } else {
      this.validationMessage = '';
    }
  }
}
