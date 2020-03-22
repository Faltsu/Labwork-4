import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = '';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authStatus = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(res=>{
      this.checkToken();
    });
  }
    checkToken() {
      return this.storage.get(TOKEN_KEY).then(res =>{
        if (res){
          this.authStatus.next(true);
        }
      });
    }
      login() {
        return this.storage.set(TOKEN_KEY, 'Bearer 1').then(() =>{
          this.authStatus.next(true);
      });
    }
      logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
          this.authStatus.next(false);
      });
    }
      isAuthenticated() {
        return this.authStatus.value;
    };
}
