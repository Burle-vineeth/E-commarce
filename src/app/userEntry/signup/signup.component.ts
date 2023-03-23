import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, TestabilityRegistry, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { LocalStorageToken } from 'src/app/local';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  hide = true;

  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router,@Inject(LocalStorageToken) private storage: Storage,private _snackBar: MatSnackBar) {}

  userSignUp = this.fb.group({
    name : [null,[Validators.required]],
    mail : [null,[Validators.minLength(8),Validators.required]],
    password : [null,[Validators.required,Validators.minLength(8)]],
    items : [[]],
    fruit: [[]],
    others : [[]],
    myorders: [[]],
    myfruits: [[]],
    myothers:[[]],
  })

  ngOnInit() {

    this.userExist = false;

  }

  @ViewChild('confirm') con !: ElementRef;

  confirmPassword : boolean = false;

  totalUserData : any;

  userExist = false;

  onSubmit() {
    if(this.con.nativeElement.value == this.userSignUp.controls['password'].value) {
      if(this.userSignUp.valid) {
        this.http.get('http://localhost:3000/Logins').subscribe( (data) => {
          this.totalUserData = data;

          for(let x = 0; x< this.totalUserData.length; x++) {
            if(this.totalUserData[x].mail == this.userSignUp.controls['mail'].value) {
              this.userExist = true;
              break;
            }
          } if(this.userExist) {
            this.openSnackBar();
          } else {
            this.http.post('http://localhost:3000/Logins',this.userSignUp.value).subscribe( (data) => {
    
            });
            this.router.navigateByUrl('login');
          }
        })
       
      }
      this.confirmPassword = false;
    } else {
      this.confirmPassword = true;
      setTimeout( () => {
        this.confirmPassword = false;
      },2000)
    }
  } 

  openSnackBar() {
    this._snackBar.open('user already Exists','close');
    setTimeout( () => {
      this._snackBar.dismiss();
    },3000);
  }
  toRegister() {
    this.router.navigateByUrl('login');
  }
}
