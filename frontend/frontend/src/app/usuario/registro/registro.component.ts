import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registro',

  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  hide: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:4200/accounts/register/', {
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe(response => {
      console.log('Registration successful', response);
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration failed', error);
    });
  }
  navigateToLoginInicioSession() {
    this.router.navigate(['/login']);
  }
}