import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../../Utilities/animations/animation';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
