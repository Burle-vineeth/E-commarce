import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VivoMobile';
  constructor(private router: Router) {}

  headerDisplay : boolean = true;

  ngOnInit() {
    this.router.events.subscribe( (event) => {
      if(event instanceof NavigationEnd) {
        if(event.url == '/login' || event.url == '/signup') {
          this.headerDisplay = false;
        } else {
          this.headerDisplay = true;
        }
      }
    })
  }

}
