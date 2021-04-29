import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { AuthenticationGuard } from './auth.guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:AccessComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
