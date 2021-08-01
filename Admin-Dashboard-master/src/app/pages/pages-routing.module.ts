import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { StaffsComponent } from './staffs/staffs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { TestimonialformComponent } from './testimonialform/testimonialform.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddStaffsComponent } from './add-staffs/add-staffs.component';
import { EditStaffsComponent } from './edit-staffs/edit-staffs.component';
import { ViewStaffsComponent } from './view-staffs/view-Staffs.component';
import { PartnershipApplicationComponent } from './partnership-application/partnership-application.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryResponseComponent } from './enquiry-response/enquiry-response.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'Enquires',
      component: EnquiryComponent,
    },
    {
      path: 'SendResponse',
      component: EnquiryResponseComponent,
    },
    {
      path: 'staffs',
      component: StaffsComponent,
    },
    {
      path: 'PartnershipApplication',
      component: PartnershipApplicationComponent,
    },
    {
      path: 'addstaff',
      component: AddStaffsComponent,
    },
    {
      path: 'editstaff',
      component:EditStaffsComponent,
    },
    {
      path:'viewstaff',
      component:ViewStaffsComponent,
    },
    {
      path: 'courses',
      component:CoursesComponent,
    },
    {
      path: 'viewcourse',
      component:ViewCourseComponent,
    },
    {
      path: 'editcourse',
      component:EditCourseComponent,
    },
    {
      path: 'addcourse',
      component:AddCourseComponent,
    },
    {
      path: 'addtestimonial',
      component:TestimonialformComponent,
    },
    {
      path: 'testimonials',
      component:TestimonialsComponent,
    },
    {
      path: 'CourseRegistration',
      component:UserRegistrationComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
