import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { ListComponent } from './list/list.component';
import { AddCoachComponent } from './add-coach/add-coach.component';

import { UpdateCentreComponent } from './update-centre/update-centre.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';

const routes: Routes = [
  {path:'add',component:AddCentreComponent},
  {path:'',component:ListComponent},
  {path:'list',component:ListComponent},
  {path:'coach/:id',component:AddCoachComponent},
  {path:'update/:id',component:UpdateCentreComponent},
  {path:'update-coach/:id', component:UpdateCoachComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
