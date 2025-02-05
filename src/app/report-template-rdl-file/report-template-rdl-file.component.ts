import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report-template-rdl-file',
  templateUrl: './report-template-rdl-file.component.html',
  styleUrls: ['./report-template-rdl-file.component.css']
})
export class ReportTemplateRdlFileComponent implements OnInit {
  rdlForm: FormGroup;
 // uploadUrl: string = `${environment.apiUrl}/uploadRdlFile`;
 // downloadUrl: string = `${environment.apiUrl}/downloadRdlFile`;
   uploadUrl: string = `uploadRdlFile`;
  downloadUrl: string = `downloadRdlFile`;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rdlForm = this.fb.group({
      rdlFile: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.rdlForm = this.fb.group({
      rdlFile: [null, Validators.required]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0] != undefined ? event.target.files[0] : '';
    if (file!= undefined && this.isValidFile(file)) {
      this.rdlForm.patchValue({ rdlFile: file });
    } else {
      alert('Invalid file type. Please upload a .rdl, .xml, or .rdlc file.');
    }
  }

  isValidFile(file: File): boolean {
    const allowedExtensions = ['rdl', 'xml', 'rdlc'];
    const fileExtension =  file!.name!.split('.')!.pop()!.toLowerCase();
    return allowedExtensions.includes(fileExtension);
  }

  onUpload(): void {
    if (this.rdlForm.valid) {
      const formData = new FormData();
      formData.append('rdlFile', this!.rdlForm!.get('rdlFile')!.value);

      this.http.post(this.uploadUrl, formData).subscribe(
        response => {
          alert('File uploaded successfully.');
        },
        error => {
          alert('File upload failed.');
        }
      );
    }
  }

  onDownload(): void {
    window.location.href = this.downloadUrl;
  }
}
