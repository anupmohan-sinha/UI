import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding(' class.show') isOpen = false;
  @HostListener('click', ['$event']) toggleOpen(event: Event) {
   this.elRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
  constructor(private elRef: ElementRef) {}
}
