import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SampleComponent } from './sample.component';
import { SamplesComponent } from './samples.component';
import { WarningComponent } from './alerts/warning.component';
import { SuccessComponent } from './alerts/success.component';
import { UsernameComponent } from './username/username.component';
import { DetailsComponent } from './details/details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SampleComponent,
    SamplesComponent,
    SuccessComponent,
    WarningComponent,
    UsernameComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
