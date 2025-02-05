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

    this.reportTypeOptions = [
    { 'value': '-- Select --', label: '-- Select --' },
    { 'value': 'Standard Customer Report Template', label: 'Standard Customer Report Template' },
    { 'value': 'Custom Customer Report Template', label: 'Custom Customer Report Template' },
    { 'value': 'Internal Report Template', label: 'Internal Report Template' },
  ];
    this.reportTypeService.getReportTypeOptions().subscribe(
      options => {
       // this.reportTypeOptions = options;
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
