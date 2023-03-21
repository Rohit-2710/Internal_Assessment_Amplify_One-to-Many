import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-centre',
  templateUrl: './update-centre.component.html',
  styleUrls: ['./update-centre.component.css']
})
export class UpdateCentreComponent {
  myForm:FormGroup
  id:any
  submitted:boolean=false
  constructor(private api:APIService,private fb:FormBuilder, private route:ActivatedRoute){
    this.myForm=this.fb.group({
      name:['',Validators.required]
    })
  }

  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')})
      console.log(this.id)

  }
  updateCentre=(value:any)=>{
    value.id=this.id
    this.api.UpdateCentre(value).then((data)=>{
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
