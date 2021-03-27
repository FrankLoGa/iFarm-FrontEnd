import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { ProfileComponent } from './profile/profile.component';
import { TracingComponent } from './tracing/tracing.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomePageComponent,
    PredictionsComponent,
    ProfileComponent,
    TracingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
