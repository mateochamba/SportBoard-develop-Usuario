import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio-sesion',

  templateUrl: './inicio_sesion.component.html',
  styleUrls: ['./inicio_sesion.component.scss']
})

export class InicioSesionComponent {
  username: string = '';
  password: string = '';
  hide: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:4200/accounts/login/', {
      username: this.username,
      password: this.password
    }).subscribe(response => {
      console.log('Login successful', response);
      this.router.navigate(['/home']);
    }, error => {
      console.error('Login failed', error);
    });
  }
  navigateToRegister() {
    this.router.navigate(['/usuarios/registro']);
  }
}
