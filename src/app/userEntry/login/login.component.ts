import { HttpClient } from '@angular/common/http';
import { Expansion } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, MinValidator, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageToken } from 'src/app/local';
import { LogserviceService } from 'src/app/logservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private _snackBar: MatSnackBar,private logservice: LogserviceService,@Inject(LocalStorageToken) private storage: Storage) { }

  userSignUp = this.fb.group({
    mail: ['', [Validators.minLength(8), Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8)]]
  })

  ngOnInit() {

  }

  @ViewChild('confirm') con !: ElementRef;

  arr : any;
  confirmPassword: boolean = false;
  normalVAl : any = '';

  navigateUrl:any;
  
  onSubmit() {
    this.navigateUrl = this.storage.getItem('loginURL');
    if(this.userSignUp.valid) {
      this.http.get('http://localhost:3000/Logins').subscribe( (data) => {
        this.arr = data;
        let found = false;
        for(let x = 0; x < this.arr.length;x++) {

          if(this.arr[x].mail == this.userSignUp.controls['mail'].value && this.arr[x].password == this.userSignUp.controls['password'].value) {
            this.logservice.getLogin(this.arr[x].name);
            this.logservice.getUserDetails(this.arr[x]);
            found = true;
            this._snackBar.dismiss();
            this.router.navigateByUrl(this.navigateUrl);
          }
        }
        if(found == false) {
          this.openSnackBar();
        }
      })
    }
  }

  openSnackBar() {
    this._snackBar.open("user Not Found",'close');
  }

  toRegister() {
    this.router.navigateByUrl('signup');
  }

}
