import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
// Creating the array of the pages, define page names and path inside
@Component({
selector: 'app-menu',
templateUrl: './menu.page.html',
styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
activePath = '';
pages = [
{
name: 'Register',
path: '/menu/register'
},
{
name: 'Home',
path: '/menu/home'
},
{
name: 'Contact',
path: '/menu/contact'
},
{
name: 'login',
path: '/menu/login'
}
]
constructor(private router: Router, private authService: AuthenticationService) {
this.router.events.subscribe((event: RouterEvent) => {
this.activePath = event.url
})
}
ngOnInit() {
}
logout() {
  this.authService.logout();
  console.log('Logged out');
}
}