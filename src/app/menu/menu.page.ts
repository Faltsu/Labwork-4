import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
// Jarkko Hämäläinen 1701558
// Array for hamburger menu and paths for all the pages.
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
name: 'Login',
path: '/menu/login'
},
{
  name: 'Personal Information',
  path: '/menu/personalinfo'
  },
{
  name: 'Technical Skills',
  path: '/menu/technical'
},
{
  name: 'Soft Skills',
  path: '/menu/soft'
},
{
  name: 'Personal Projects',
  path: '/menu/personal'
},
{
  name: 'Team Projects',
  path: '/menu/team'
},
{
  name: 'Extra curriculum activities',
  path: '/menu/extra'
}
]
//Jarkko Hämäläinen 1701558
//subscribe authservice to events
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