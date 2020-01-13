import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {AppComponent} from './app.component';
import {PoemsComponent} from './poems/poems.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';

import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {ConfigComponent} from './config/config.component';
import {AppRoutingModule} from './app-routing.module';
import {CallbackComponent} from './shared/auth/callback/callback.component';
import {AdminComponent} from './admin/admin.component';
import {HexagonApiSecComponent} from './hexagon-api-sec/hexagon-api-sec.component';
import {NavComponent} from './shared/nav/nav.component';
import {JwtModule} from '@auth0/angular-jwt';
import {ClientRoutingModule} from './client-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocked/in-memory-data.service';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PoemsComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    CallbackComponent,
    AdminComponent,
    HexagonApiSecComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    AppRoutingModule,
    ClientRoutingModule,
    environment.useMockServer ?
      HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false, passThruUnknownUrl: true
      }
    ) : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
