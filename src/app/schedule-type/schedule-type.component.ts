import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-type',
  templateUrl: './schedule-type.component.html',
  styleUrls: ['./schedule-type.component.css']
})
export class ScheduleTypeComponent implements OnInit {
  scheduleTypeForm: FormGroup;
  scheduleTypes: any[] = [];
  defaultFieldValue: string = 'SystemOne Batch Dependent';

  constructor(private fb: FormBuilder) {
    this.scheduleTypeForm = this.fb.group({
      scheduleType: [this.defaultFieldValue, Validators.required]
    });
  }

  ngOnInit(): void {
    this.scheduleTypes =  [
    
      { 'value': 'SystemOne Batch Dependent', label: 'SystemOne Batch Dependent' },
      { 'value': 'Non-Batch - Eligible Days to Run', label: 'Non-Batch - Eligible Days to Run' }
    ];

  }

  onSubmit(): void {
    if (this.scheduleTypeForm.valid) {
      console.log('Form Submitted!', this.scheduleTypeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
