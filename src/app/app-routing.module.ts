import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  },
  {
    path: 'who-we-serve',
    loadChildren: () => import('./who-we-serve/who-we-serve.module').then(
      (m) => m.WhoWeServeModule
    ),
  },
  {
    path: 'our-expertise',
    loadChildren: () => import('./our-expertise/our-expertise.module').then(
      (m) => m.OurExpertiseModule
    ),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(
      (m) => m.AboutUsModule
    ),
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(
      (m) => m.ContactUsModule
    )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
