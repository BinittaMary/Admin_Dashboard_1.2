import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {

  constructor(private http : HttpClient) { }

  getOfferings(){
    return this.http.get('http://localhost:5000/partnershipapplicationList')
  };

  getEnquires(){
    return this.http.get('http://localhost:5000/EnquiryList')
  };

  getEnquiry(id:any){
    return this.http.get("http://localhost:5000/enquiry/"+id);
  } 

 
  sendemail(mail : any)
  {
    console.log('send mail');
    console.log(mail);
    return this.http.post("http://localhost:5000/Enquiry/sendmail",mail);
  }

  sendemailwithAttachment(attachment:any, item:any){
    
    console.log('inside service upload')
    const formData = new FormData();
    for(let i=0; i<attachment.length; i++){
      formData.append("attachments", attachment[i], attachment[i]['name']);
      console.log(`${i} ${attachment[i]}`);
    }
    formData.append('_id', item._id); 
    formData.append('to', item.to); 
    formData.append('subject', item.subject); 
    formData.append('text', item.text); 
    formData.append('message', item.message); 
     

    return this.http.post("http://localhost:5000/Enquiry/sendmailWithAttachment",formData)
    // .subscribe(data =>{console.log(data)})

  }
}
