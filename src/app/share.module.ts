
import { FilterPipe } from './appPipes/filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterPipe
  ],
 
  imports: [
    FormsModule,
],

  exports: [ FilterPipe, FormsModule],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
