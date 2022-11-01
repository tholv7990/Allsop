import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'formGroupAt'
})
export class FormGroupAtPipe implements PipeTransform {

  transform(formArray: FormArray, index: number): FormGroup {

    if (!formArray?.controls?.length)
      return null;

    const form = formArray?.controls[index] as FormGroup;

    return form;
  }

}
