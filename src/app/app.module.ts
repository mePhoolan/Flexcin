import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShareModule } from './share.module';
import {HttpClientModule } from '@angular/common/http';
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
import { ChildcommunicationComponent } from './childcommunication/childcommunication.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { TestDirectiveDirective } from './appDirectives/test-directive.directive';
import { UxPipe } from './appPipes/ux.pipe';
// import { FilterPipe } from './appPipes/filter.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

// import { HeaderComponent } from './parent/header/header.component';
//  import { FooterComponent } from './parent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, // return value.filter(function(search){
      //   return search.name.indexOf(searchTerm)> -1
      // })
  
    UserComponent,
    AdminComponent,
    BannerComponent,
    PageNotFoundComponent,
    NgContentComponent,
    ComponentcommunicationComponent,
    ChildcommunicationComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestDirectiveDirective,
    UxPipe,
    TemplateformComponent,
    ReactiveformComponent,
    // FilterPipe,
    // HeaderComponent,
    // FooterComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule,
    HttpClientModule,
    ShareModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
