import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarGeneralComponent } from './components/nav-bar-general/nav-bar-general.component';

const routes: Routes = [
  { path: 'nav', component: NavBarGeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
