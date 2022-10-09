import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarcolour: string = "navbar-dark";
  light !: string;
  isHome: boolean = false;

  constructor(private sharingService: SharingService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //check if it is the home component
    this.activeRoute.url.subscribe(params => {
      this.isHome = params[0].path == 'home';
    });

    setInterval(() => {
      this.light = this.sharingService.getData();
      if (this.light == "light") {
        this.navbarcolour = "navbar-light";
      }
      else {
        this.navbarcolour = "navbar-dark";
      }
    }, 0.0001);
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

