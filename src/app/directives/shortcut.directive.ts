import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[convertor]'
})

export class ConverterDirective {
  private val: any;
  constructor(private el: ElementRef){
    this.val = this.el.nativeElement
  }

  @HostListener('input', ["$event.target.value"])
  onInput(value: any) {
    var index = value.length - 1
    if(value[index] === 'k' || value[index] === 'K') {
      this.val.value = value.slice(0, index) * 1000;
    }

     if(value[index] === 'm' || value[index] === 'M') {
      this.val.value = value.slice(0, index) * 1000000;
    }
  }
}  