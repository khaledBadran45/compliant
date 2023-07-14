import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComplaintTypeComponent } from './complaint-type/complaint-type.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ChangeOnClickDirective } from './change-on-click.directive';
import { ColorWDirective } from './color-w.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintTypeComponent,
    DashboardComponent,
    NavComponent,
    ChangeOnClickDirective,
    ColorWDirective
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([
      {path: '', component: ComplaintTypeComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
