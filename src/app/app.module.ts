import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { UpdateCentreComponent } from './update-centre/update-centre.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCentreComponent,
    ListComponent,
    AddCoachComponent,
    UpdateCentreComponent,
    UpdateCoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
