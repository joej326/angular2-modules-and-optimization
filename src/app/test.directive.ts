import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  @HostBinding('style.backgroundColor') elemBackgroundColor: string = '';

  constructor() { }
  

  @HostListener('mouseenter') changeBackground(){
    this.elemBackgroundColor = 'orange';
  }

  @HostListener('mouseleave') revertBackground(){
    this.elemBackgroundColor = 'transparent';
  }

}
