import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { BusinessComponent } from './business/business.component';
import { ConsolidationComponent } from './consolidation/consolidation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    PersonalComponent,
    BusinessComponent,
    ConsolidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
