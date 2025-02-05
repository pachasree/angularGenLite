import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-template-description',
  templateUrl: './report-template-description.component.html',
  styleUrls: ['./report-template-description.component.css']
})
export class ReportTemplateDescriptionComponent implements OnInit {
  reportTemplateDescription: string = '';
  descriptionControl: FormControl;

  constructor(){
    this.descriptionControl = new FormControl(this.reportTemplateDescription, [Validators.required]);
  }
  ngOnInit(): void {
    this.descriptionControl = new FormControl(this.reportTemplateDescription, [Validators.required]);
  }

  // ngOnInit(): void {
  //   this.descriptionControl = new FormControl(this.reportTemplateDescription, [Validators.required]);
  // }
}
