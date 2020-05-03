import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

//Jarkko Hämäläinen 1701558
//Authguard code
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthenticationService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
  }
  
