import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
// import {OrderByPipe} from 'fuel-ui/fuel-ui';

//My components
import { LoginComponent } from './login/login.component';
import { VotingComponent } from './voting/voting.component';

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
