import { Component, OnInit } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-testimonialform',
  templateUrl: './testimonialform.component.html',
  styleUrls: ['./testimonialform.component.scss']
})
export class TestimonialformComponent implements OnInit {
  images:any;
 
    testimonialDetails={
      name:"",
      position:"",
      organization:"",
      testimonial:"",
      course_title:"",
      image:""
  
    }
  
   constructor(private testService:TestService,private router:Router) { }
    ngOnInit(): void {
    }
    addTestimonial(){
      this.testimonialDetails.image = this.testimonialDetails.image.replace('C:\\fakepath\\','');
      this.testService.newTestimonial(this.images,this.testimonialDetails);
      console.log(`upload image ${this.images}`);
      console.log("called");
      alert("success")
      this.router.navigate(['/pages/testimonials'])
    }
  
    deleteTestimonial(testimonial : any){}

    editTestimonial(testimonial : any){}

    viewTestimonial(testimonial : any){}
  
  
  
  
  }
