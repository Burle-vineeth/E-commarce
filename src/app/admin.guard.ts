import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { LocalStorageToken } from './local';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(@Inject(LocalStorageToken) private storage: Storage,private router: Router) { }

  name = this.storage.getItem('userName');

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.name == 'vin') {
        return true;
      }
      this.router.navigateByUrl('/home');
    return false;
  }
  
}
