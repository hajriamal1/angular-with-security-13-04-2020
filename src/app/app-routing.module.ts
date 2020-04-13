import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './modules/users/users.component';
import { UpdateUserComponent } from './modules/update-user/update-user.component';
import { AddUserComponent } from './modules/add-user/add-user.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }
  ,
  {
    path: 'signup',
    component: RegisterComponent
  },{
  path : 'home',
  component: DefaultComponent,
  children : [{
    path: 'dashboard', 
    component: DashboardComponent},
    {
      path:'posts',
      component: PostsComponent
    
   },
    {
      path:'users',
      component: UsersComponent

    },
        {path: 'addUser',
        component:AddUserComponent
      },
    {
      path:'updateUser/:id',
      component: UpdateUserComponent
    }]
    

 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
