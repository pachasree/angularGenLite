import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
//import { AppComponent } from './app.component';
//import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { CategoryService } from './category-dropdown/category.service';
import {ReportTypeService} from './report-type/report-type.service'
import { ReportTemplateDescriptionComponent } from './report-template-description/report-template-description.component';
import { ReportTemplateNameComponent } from './report-template-name/report-template-name.component';
import { ReportTemplateRdlFileComponent } from './report-template-rdl-file/report-template-rdl-file.component';
import { ReportTypeComponent } from './report-type/report-type.component';
import { ScheduleTypeComponent } from './schedule-type/schedule-type.component';
import { TemplateTypeComponent } from './template-type/template-type.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CategoryDropdownComponent,
    ReportTemplateDescriptionComponent,
    ReportTemplateNameComponent,
    //ReportTemplateRdlFileComponent,
    ReportTypeComponent,
    ScheduleTypeComponent,
    //RouterModule.forRoot(appRoutes),
    TemplateTypeComponent,
    
  
  ],
  imports: [
    //AppModule,
    ServerModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownsModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [CategoryService,ReportTypeService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
