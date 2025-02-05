import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { CategoryService } from './category-dropdown/category.service';
import { ReportTemplateDescriptionComponent } from './report-template-description/report-template-description.component';
import { ReportTemplateNameComponent } from './report-template-name/report-template-name.component';
import { ReportTemplateRdlFileComponent } from './report-template-rdl-file/report-template-rdl-file.component';
import { ReportTypeComponent } from './report-type/report-type.component';
import { ScheduleTypeComponent } from './schedule-type/schedule-type.component';
import { TemplateTypeComponent } from './template-type/template-type.component';
import { RouterModule, RouterOutlet } from '@angular/router';
//import { ReportTemplateDetailsComponent } from './report-template-details/report-template-details.component';

@NgModule({
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownsModule,
    FormsModule,
    RouterOutlet
  ],

  providers: [
    provideClientHydration()
  ]
  //bootstrap: [AppComponent]
})
export class AppModule { }
