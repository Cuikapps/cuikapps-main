import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRoute',
})
export class ToRoutePipe implements PipeTransform {
  transform(value: string[], addChildRoutes: boolean, skip?: string): string[] {
    let returnValue: string[] = new Array();

    /**If @param addChildRoutes, then every space replaced with /*/
    for (const title of value) {
      if (addChildRoutes) {
        let finalValue;

        finalValue = './' + title.toLowerCase().replace(' ', '/');

        returnValue.push(finalValue);
        continue;
      }
      let finalValue;

      finalValue = './' + title.toLowerCase().replace(' ', '');

      returnValue.push(finalValue);
    }

    return returnValue;
  }
}
