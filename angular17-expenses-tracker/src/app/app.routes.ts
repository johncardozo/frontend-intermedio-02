import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddTransactionComponent },
];
