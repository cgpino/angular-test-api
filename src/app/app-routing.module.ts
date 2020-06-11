import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { SessionGuard } from './session.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'users', component: UserlistComponent},
  { path: 'users/:id', component: UserdetailComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
