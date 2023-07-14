import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appChangeOnClick]',
})
export class ChangeOnClickDirective  {

  @Input('appChangeOnClick') 
  highlightColor: string= '#33835C'
  constructor(
    private el: ElementRef,
  ) {}
  
  @HostListener('click') onMouseClick() {
    this.highlight()
  }

  private highlight() {
    this.el.nativeElement.style.backgroundColor = '#33835C';
    this.el.nativeElement.style.color = `#fff`;
    const e = this.el.nativeElement
    e.children[0].querySelector('i').style.color = '#fff'
  }

  
}
