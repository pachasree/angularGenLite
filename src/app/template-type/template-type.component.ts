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

  constructor(private fb: FormBuilder, private templateTypeService: TemplateTypeService) {
    this.templateTypeForm = this.fb.group({
      templateType: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.templateTypeService.getTemplateTypes().subscribe(data => {
      this.templateTypes = [this.defaultOption, ...data];
    });
  }

  onSubmit(): void {
    if (this.templateTypeForm.valid) {
      console.log('Form Submitted', this.templateTypeForm.value);
    }
  }
}
