import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../directives/dropdown.directive';
import { SortPipe } from '../pipes/sort.pipe';
import { ReversePipe } from '../pipes/reverse.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    SortPipe,
    ReversePipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    SortPipe,
    ReversePipe
  ]
})
export class SharedModule { }
