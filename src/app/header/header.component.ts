import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { LocalStorageToken } from '../local';
import { LogserviceService } from '../logservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private logservice: LogserviceService,@Inject(LocalStorageToken) private storage: Storage,private router: Router) {}

  profile : any = "profile";
  userDisplay = false;

  ngOnInit() {

    this.logservice.dataEmit.subscribe( (data) => {
      this.profile = data;
    })
    this.profile = this.storage.getItem('userName');
    if(!this.profile) {
      this.profile = "Log In";
      this.userDisplay = false;
    } else {
      this.userDisplay = true;
    }
  }

  logOut() {
    this.storage.removeItem('userName');
    this.storage.removeItem('userId');
    this.profile = "Log In"
    this.userDisplay = false;
    this.router.navigateByUrl('/home');
  }

  logIn() {
    this.storage.setItem('loginURL','home');
    this.router.navigateByUrl('/login');
  }

}
