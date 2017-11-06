import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from 'app/shared/dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective
  ],
  exports: [
    DropdownDirective  //we export the directive b/c everyhting inside a module is exclusive to that module
  ]                    // unless we export something. 
})
export class SharedModule { }
