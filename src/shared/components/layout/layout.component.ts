import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [RouterModule, SideNavbarComponent, HeaderComponent]
})
export class LayoutComponent {

}
