import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from '../parent/parent.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
{

  // nested routing means content of the  children router will visible to the same page 
  // it will saerch for parent path
    // path:"parent",  children:[
    //     {
    //       path: '',
    //       component: ParentComponent
    //   },
    path:'parent', component: ParentComponent,
    children:[
   
      {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
