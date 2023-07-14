import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorW]'
})
export class ColorWDirective {

  constructor(private el:ElementRef) { }
  @Input('appColorW')
  highlightColor!: string;
  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor);   
}

 private highlight(color: string) {
    this.el.nativeElement.style.color =' #fff'
 }
}
