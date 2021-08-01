import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import Swal from 'sweetalert2';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { NbListModule,NbCardModule, NbWindowModule,NbDatepickerModule} from '@nebular/theme';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourseFormComponent } from './course-form/course-form.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { TestimonialformComponent } from './testimonialform/testimonialform.component';
import { SearchCourseTitlePipe } from './search-course-title.pipe';
import { SearchCourseCategoryPipe } from './search-course-category.pipe';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbAccordionModule, NbIconModule, NbTreeGridModule, NbSelectModule } from '@nebular/theme';
import { SearchStaffNamePipe } from './search-staff-name.pipe';
import { SearchStaffDesignationPipe } from './search-staff-designation.pipe';
import { AddStaffsComponent } from './add-staffs/add-staffs.component';
import { EditStaffsComponent } from './edit-staffs/edit-staffs.component';
import { ViewStaffsComponent } from './view-staffs/view-staffs.component';
import { PartnershipApplicationComponent } from './partnership-application/partnership-application.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryResponseComponent } from './enquiry-response/enquiry-response.component';
import { CorporateApplicationsComponent } from './corporate-applications/corporate-applications.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbListModule,
    NbCardModule,
    DragDropModule,
    NbWindowModule,
    CKEditorModule,
    FormsModule,
    NbThemeModule, 
    NbLayoutModule, 
    NbButtonModule, 
    NbAccordionModule, 
    NbIconModule, 
    NbTreeGridModule, 
    NbDatepickerModule.forRoot(),
    NbSelectModule
  ],
  declarations: [
    PagesComponent,
    CoursesComponent,
    CourseFormComponent,
    ViewCourseComponent,
    StaffsComponent,
    StaffFormComponent,
    TestimonialsComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    EditCourseComponent,
    TestimonialformComponent,
    SearchCourseTitlePipe,
    SearchCourseCategoryPipe,
    UserRegistrationComponent,
    SearchStaffNamePipe,
    SearchStaffDesignationPipe,
    AddStaffsComponent,
    EditStaffsComponent,
    ViewStaffsComponent,
    PartnershipApplicationComponent,
    EnquiryComponent,
    EnquiryResponseComponent,
    CorporateApplicationsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
