import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
// import {OrderByPipe} from 'fuel-ui/fuel-ui';

//My components
import { LoginComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
// import { OrderByPipe } from './voting/voting.filter';



@NgModule({
  declarations: [
    LoginComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class VotingAppModule { }
