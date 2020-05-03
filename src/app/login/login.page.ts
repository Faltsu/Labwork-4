import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
//Jarkko Hämäläinen 1701558
//calls function to login for the login button and moves user to home page after with navcontroller
  constructor(private authService: AuthenticationService, public navCtrl: NavController) { }
  ngOnInit() {
  }
  login() {
    this.authService.login();
    console.log('logged in');
    this.navCtrl.navigateForward('menu/home');
  }
}
