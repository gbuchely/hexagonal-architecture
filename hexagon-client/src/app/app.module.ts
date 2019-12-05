import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { PoemsComponent } from './poems/poems.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from './app-routing.module';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemsComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
