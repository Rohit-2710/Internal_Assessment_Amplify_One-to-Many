import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-coach',
  templateUrl: './update-coach.component.html',
  styleUrls: ['./update-coach.component.css']
})
export class UpdateCoachComponent {
  myForm:FormGroup
  id:any
  submitted:boolean=false
constructor(private fb:FormBuilder, private api:APIService,private route:ActivatedRoute){
 this.myForm = this.fb.group({
     name:['',Validators.required],
     experience:['',Validators.required]
 })
}
ngOnInit():void{
  this.route.paramMap.subscribe((params) => {
    this.id = params.get('id')})
    console.log(this.id)
}

updateCoach=(value:any)=>{
  value.id=this.id;
  this.api.UpdateCoach(value).then((data)=>{
    console.log(data)
    this.submitted=true;
  }).catch((err)=>{
    console.log(err)
  })
}
reset=()=>{
  this.submitted=false
  this.myForm.reset()
}
}
