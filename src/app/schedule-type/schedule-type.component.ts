import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-type',
  templateUrl: './schedule-type.component.html',
  styleUrls: ['./schedule-type.component.css']
})
export class ScheduleTypeComponent implements OnInit {
  scheduleTypeForm: FormGroup;
  defaultFieldValue: string = 'SystemOne Batch Dependent';

  constructor(private fb: FormBuilder) {
    this.scheduleTypeForm = this.fb.group({
      scheduleType: [this.defaultFieldValue, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.scheduleTypeForm.valid) {
      console.log('Form Submitted!', this.scheduleTypeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
