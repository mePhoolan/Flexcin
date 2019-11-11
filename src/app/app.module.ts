import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParentModule} from './parent/parent.module'
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BannerComponent } from './banner/banner.component';
import  {UserService} from './services/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ChildcommunicationComponent } from './componentcommunication/childcommunication/childcommunication.component';
// import { HeaderComponent } from './parent/header/header.component';
//  import { FooterComponent } from './parent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  
    UserComponent,
    AdminComponent,
    BannerComponent,
    PageNotFoundComponent,
    NgContentComponent,
    ComponentcommunicationComponent,
    ChildcommunicationComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
