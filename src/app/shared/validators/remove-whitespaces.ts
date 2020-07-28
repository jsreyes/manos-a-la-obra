import { AbstractControl } from '@angular/forms';

export function removeWhiteSpacesValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {

  if (control && control.value && !control.value.replace(/\s/g, '').length) {
    control.setValue('');
  }

  if (control && control.value && control.value !== '' && control.value !== control.value.replace(/ +(?= )/g, '')) {
    control.setValue(control.value.replace(/ +(?= )/g, ''));
  }

  return null;
}
