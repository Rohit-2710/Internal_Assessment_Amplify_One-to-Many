import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  data:any
  constructor(private api:APIService, private route:ActivatedRoute){}
  
  ngOnInit():void{
    this.api.ListCentres().then((data)=>{
      
      this.data=data.items 
      console.log(this.data)
    }).catch((err)=>{
      console.log(err)
    })

  }
  deleteCentre=(id:any)=>{
    console.log(id)
    this.api.DeleteCentre({id:id}).then((data)=>{
      console.log(data)
      const coachData=data.coachs?.items
      coachData?.forEach((x:any)=>(this.api.DeleteCoach({id:x.id},{centreCoachsId: {eq: id}}))) 
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  onDeleteSub=this.api.OnDeleteCentreListener().subscribe((data)=>{
    console.log(data)
    const newData=data.value.data?.onDeleteCentre
    this.data=this.data.filter((x:any)=>x.id!=data.value.data?.onDeleteCentre.id)

  })
  deleteCoach=(id:any)=>{
    this.api.DeleteCoach({id:id}).then((data)=>{
      console.log(data)
      this.data=this.data.filter((x:any)=>x.id!=data.centre?.id)
      this.data=[...this.data,data.centre]   
    }).catch((err)=>{
      console.log(err)
    }) 
  }
  
  
  

}
