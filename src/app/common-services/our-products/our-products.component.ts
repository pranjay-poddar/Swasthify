import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../../Utilities/animations/animation';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class OurProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
