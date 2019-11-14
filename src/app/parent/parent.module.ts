import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component'
import {ParentRoutingModule} from './parent.routing.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from '../appPipes/filter.pipe';
import { ShareModule } from './../share.module';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [ParentComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    
    ParentRoutingModule,
    // FormsModule,
   ShareModule
 
  ]
})
export class ParentModule { }
