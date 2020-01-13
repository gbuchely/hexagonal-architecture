import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/auth/auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'client', canActivate: [AuthGuard], loadChildren: './ClientRoutingModule' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
