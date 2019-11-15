
import { FilterPipe } from './appPipes/filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterPipe
  ],
 
  imports: [
    FormsModule,
],

  exports: [ FilterPipe, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
