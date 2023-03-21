import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent {
  myForm:FormGroup
  id:any

  constructor(private api:APIService, private fb:FormBuilder, private route:ActivatedRoute){
    this.myForm=this.fb.group({
       experience:['',Validators.required],
       name:['',Validators.required]
    })
  }
  submitted:boolean=false

  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')})
      console.log(this.id)

  }
  addCoach=(value:any)=>{
    value.centreCoachsId=this.id
    console.log(value)
    this.api.CreateCoach(value).then((data)=>{
      console.log(data)
      this.submitted=true
    }).catch((err)=>{
      console.log(err)
    })
   
  }
  reset=()=>{
   this.submitted=false
   this.myForm.reset() 
  }
  

  

}
