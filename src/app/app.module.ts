
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { LoginComponent } from './access/login/login.component';
import { BannerComponent } from './access/banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './access/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from './auth.service';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './home/publications/publications.component';
import { AuthenticationGuard } from './auth.guard.service';
import { PublicationEditComponent } from './home/publications/publication-edit/publication-edit.component';
import { Bd } from './bd.service';





@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PublicationsComponent,
    PublicationEditComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [Auth,AuthenticationGuard,Bd],
  bootstrap: [AppComponent]
})
export class AppModule { }
