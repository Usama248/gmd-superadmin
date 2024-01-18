import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    {
        path: 'login',
        title: 'Log in to Gaudian MD',
        loadComponent: () => import('./pages/auth/auth-layout/auth-layout.component').then(x => x.AuthLayoutComponent),
        children: [
          { path: '', title: 'Log in to Gaudian MD', loadComponent: () => import('./pages/auth/login/login.component').then(x => x.LoginComponent) },
          { path: 'forgot-password', title: 'Reset your password', loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then(x => x.ForgotPasswordComponent) },
        ],
    },
];
