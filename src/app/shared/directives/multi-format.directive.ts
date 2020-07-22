import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[multiFormat]'
})
export class MultiFormatDirective {

  private el: HTMLInputElement;

  @Input('multiFormat')
  private formatter: string = undefined;

  constructor(
    public elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
   }

  @HostListener('input', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.getValue(value, this.formatter);
  }

  private getValue(input, formatter): string {
    let regex;
    let value;
    let newValue;

    if (formatter) {
      switch (formatter) {
        case 'letters':
        case 'letter':
          regex = /([A-Z]|[a-z]|[\s])+/g;
          value = regex.exec(input);
          newValue = value ? value[0] : '';
          break;
        case 'numbers':
        case 'number':
          regex = /\d+/g;
          value = regex.exec(input);
          newValue = value ? value[0] : '';
          break;
        case 'phone':
          newValue = input.replace(/[^\d, \+()-]+/g, '').replace(/\,/g, '');
          break;
        case 'EYinput':
          regex = /([A-Z]|[a-z]|[0-9]|[-]|[\s])+/g;
          value = regex.exec(input);
          newValue = value ? value[0] : '';
          break;
      }
      return newValue;
    } else {
      return input;
    }
  }
}
