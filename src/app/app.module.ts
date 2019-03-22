import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { HappyClientsComponent } from './happy-clients/happy-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    WhyUsComponent,
    HappyClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
