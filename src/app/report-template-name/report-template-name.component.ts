import { Component } from '@angular/core';

@Component({
  selector: 'app-report-template-name',
  templateUrl: './report-template-name.component.html',
  styleUrls: ['./report-template-name.component.css']
})
export class ReportTemplateNameComponent {
  reportTemplateName: string = '';
  isSubmitted: boolean = false;

  // Method to handle form submission
  onSubmit() {
    this.isSubmitted = true;
    if (this.reportTemplateName) {
      // Handle valid form submission
      console.log('Report Template Name:', this.reportTemplateName);
    }
  }
}
