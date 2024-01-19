import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
