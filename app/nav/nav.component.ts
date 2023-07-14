import { Component, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends DashboardComponent  {
@Input() override isDashboard: boolean=false
constructor(){
  super()
}
}
