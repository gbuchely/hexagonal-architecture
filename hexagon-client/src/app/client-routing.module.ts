import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CallbackComponent} from './shared/auth/callback/callback.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {HexagonApiSecComponent} from './hexagon-api-sec/hexagon-api-sec.component';
import {ConfigComponent} from './config/config.component';
import {PoemsComponent} from './poems/poems.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './shared/auth/jwt-interceptor';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'api-sec', component: HexagonApiSecComponent, canActivate: [AuthGuard] },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
  { path: 'poems', component: PoemsComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})

export class ClientRoutingModule { }
