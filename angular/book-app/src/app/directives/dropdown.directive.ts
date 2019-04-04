import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  private isOpen = false;
  private dropDownElement;
  private dropDownMenuElement;

  constructor(private elRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.dropDownElement = this.elRef.nativeElement;
    this.dropDownMenuElement = this.elRef.nativeElement.lastChild;
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {

    console.log(event)
    // If was clicked out close the dropdown
    if (!this.dropDownElement.contains(event.target)) {
      this.render.removeClass(this.dropDownMenuElement, 'show');
      this.isOpen = false;
      return;
    }

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.render.addClass(this.dropDownMenuElement, 'show');
      return;
    }

    this.render.removeClass(this.dropDownMenuElement, 'show');
  }
}
