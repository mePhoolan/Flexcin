import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { TemplateformComponent } from './templateform/templateform.component';
const routes: Routes = [
{
  path:'' ,redirectTo:"banner",pathMatch:"full"
},
 
 {
 path:'',
 loadChildren:'./parent/parent.module#ParentModule'
},

  {
    path:'banner',component:BannerComponent
  },
 
  {
    path:'user',component:UserComponent
  },

  {
    path:'admin',component:AdminComponent
  },

  {
    path:'componentcommunication',component:ComponentcommunicationComponent 
  },

  {
    path:'contact',component:TemplateformComponent 
  },
//   {
//     path:'footer',component:FooterComponent
//   },


  {
    path:'**',component:PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    
  ]
})
export class AppRoutingModule { }
