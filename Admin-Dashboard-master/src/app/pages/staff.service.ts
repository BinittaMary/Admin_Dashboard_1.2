import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  item={
    name:"",
    designation:"",
    about:"",
    image:""
  }
  
  getstaff(id:any){
    return this.http.get("http://localhost:5000/staff/"+id);
  }


  getstaffs(){
    return this.http.get("http://localhost:5000/staffs");
  }

  updateStaffIndex(staff:any){
    console.log(staff);
    return this.http.put("http://localhost:5000/Staffs/updateIndex/",staff);
  };


  newStaff(image:any,item:any){

    console.log('inside service upload')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('name', item.name); 
    formData.append('designation', item.designation); 
    formData.append('about', item.about); 
    formData.append('image', item.image);   
    return this.http.post("http://localhost:5000/Staff/insert",formData);
    // .subscribe(data =>{console.log(data)})
  }

  deletestaff(staff:any){
    return this.http.post("http://localhost:5000/Staff/remove/",staff);
  }

  editStaff(item:any)
  {
    console.log('client update')
    return this.http.post("http://localhost:5000/staff/update",item)
    // .subscribe(data =>{console.log(`response recieved ${data}`)})
  };

  
  editStaffWithImage(image:any, item:any){
    
    console.log('inside service upload')
    const formData = new FormData();
    formData.append('_id', item._id); 
    formData.append('file', image);  
    formData.append('name', item.name); 
    formData.append('designation', item.designation); 
    formData.append('about', item.about); 
    formData.append('image', item.image); 
     

    return this.http.post("http://localhost:5000/staff/updateWithFile",formData)
    // .subscribe(data =>{console.log(data)})

  }
}
