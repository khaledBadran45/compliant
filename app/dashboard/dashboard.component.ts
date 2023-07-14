import { Component, OnInit } from '@angular/core';
import { ComplaintTypeComponent } from '../complaint-type/complaint-type.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
}) 
  export class DashboardComponent implements OnInit {
   constructor(){}
  ngOnInit(): void {
  }
  isDashboard: boolean = true
}
