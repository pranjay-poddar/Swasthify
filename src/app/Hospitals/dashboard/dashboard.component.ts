import { Component, OnInit } from '@angular/core';
import { flyInOut , expand} from '../../Utilities/animations/animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class DashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
