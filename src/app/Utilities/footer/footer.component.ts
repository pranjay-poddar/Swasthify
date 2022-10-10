import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isHome: boolean = false;

  constructor(private sharingService: SharingService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //check if it is the home component
    this.activeRoute.url.subscribe(params => {
      this.isHome = params[0].path == 'home';
    });
  }

  navToElement(el: any): void {
    if (this.isHome) {
      //Scroll into Home componet
      this.sharingService.navToElement(el);
    } else {
      //navigate to home from another component with the parameters to select the about
      this.router.navigate(['home', { goAbout: true }], { skipLocationChange: true });
    }
  }

}
