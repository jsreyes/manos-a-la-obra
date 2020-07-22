import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any) {
    if (value) {
      let viewVal = value.trim().replace(/^\+/, '');
      viewVal = viewVal.replace(/[^0-9]/g, '').slice(0, 10);
      let area: string;
      let phone: string;

      switch (viewVal.length) {
        case 1:
        case 2:
        case 3:
          area = viewVal;
          break;
        default:
          area = viewVal.slice(0, 3);
          phone = viewVal.slice(3);
      }

      if (phone) {
        if (phone.length > 3) {
          phone = phone.slice(0, 3) + '-' + phone.slice(3, 7);
        } else {
          phone = phone;
        }
        return ('(' + area + ') ' + phone).trim().slice(0, 13);
      } else {
        return '(' + area;
      }
    } else {
      return '';
    }

  }

}
