import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateTypeService } from './template-type.service';

@Component({
  selector: 'app-template-type',
  templateUrl: './template-type.component.html',
  styleUrls: ['./template-type.component.css']
})
export class TemplateTypeComponent implements OnInit {

  templateTypeForm: FormGroup;
  templateTypes: any[] = [];
  defaultOption = { RDLTypeCde: '', RDLTypeDesc: '-- Select --' };
  submitDisabled=false;

  constructor(private fb: FormBuilder, private templateTypeService: TemplateTypeService) {
    this.templateTypeForm = this.fb.group({
      templateType: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.templateTypes = [this.defaultOption,{ RDLTypeCde: 'ABC', RDLTypeDesc: 'RDL Type ABC' },{ RDLTypeCde: 'XYZ', RDLTypeDesc: 'RDL Type XYZ' }];
    this.templateTypeService.getTemplateTypes().subscribe(data => {
      //this.templateTypes = [this.defaultOption, ...data];
    });

    // Listen to dropdown changes to enable/disable the button
this.templateTypeForm.get('templateType')?.valueChanges.subscribe((value) => {
  console.log(value);
  if (value) {
    this.submitDisabled = false; // Enable submit button
  } else {
    this.submitDisabled = true; // Disable submit button if no value is selected
  }
});

  }

  onSubmit(): void {
    if (this.templateTypeForm.valid) {
      console.log('Form Submitted', this.templateTypeForm.value);
    }
  }

  
}
