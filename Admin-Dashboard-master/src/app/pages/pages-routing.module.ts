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
import { CorporateApplicationsComponent } from './corporate-applications/corporate-applications.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AddAdminUserComponent } from './add-admin-user/add-admin-user.component';
import { ViewAdminUserComponent } from './view-admin-user/view-admin-user.component';
import { EditAdminUserComponent } from './edit-admin-user/edit-admin-user.component';
import { DeleteAdminUserComponent } from './delete-admin-user/delete-admin-user.component';
import { ViewTestimonyComponent } from './view-testimony/view-testimony.component';
import { EditTestimonyComponent } from './edit-testimony/edit-testimony.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      component: AdminHomeComponent,
    },   
    {
      path: 'home',
      component: AdminHomeComponent,
    }, 
    {
      path: 'viewtestimonial',
      component: ViewTestimonyComponent,
    },
    {
      path: 'edittestimonial',
      component: EditTestimonyComponent,
    },
    {
      path: 'AdminUsers',
      component: AdminUsersComponent,
    },
    {
      path: 'ViewAdminUser',
      component: ViewAdminUserComponent,
    },
    {
      path: 'EditAdminUser',
      component: EditAdminUserComponent,
    },
    {
      path: 'DeleteAdminUser',
      component: DeleteAdminUserComponent,
    },
    {
      path: 'AddAdminUser',
      component: AddAdminUserComponent,
    },
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
      path: 'CorporateApplication',
      component: CorporateApplicationsComponent,
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
