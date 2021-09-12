import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';

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

  light ! : string;

  constructor(private sharingService:SharingService) { }

  ngOnInit(): void {
    this.light = this.sharingService.getData();
  }

}
