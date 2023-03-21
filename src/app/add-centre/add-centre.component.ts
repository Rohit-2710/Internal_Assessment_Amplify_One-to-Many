import { Component } from '@angular/core';
import { FormControl, FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { APIService } from '../API.service';


@Component({
  selector: 'app-add-centre',
  templateUrl: './add-centre.component.html',
  styleUrls: ['./add-centre.component.css']
})
export class AddCentreComponent {
  myForm:FormGroup
  data:any[]=[]
  submitted:boolean = false
constructor(private api:APIService, private fb:FormBuilder){
this.myForm=this.fb.group({
  name:['',Validators.required]
})
  }
  addCentre=(values:any)=>{
    this.api.CreateCentre(values).then((data)=>{
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
