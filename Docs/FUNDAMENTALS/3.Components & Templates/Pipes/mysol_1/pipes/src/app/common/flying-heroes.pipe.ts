import { Pipe, PipeTransform } from '@angular/core';

import { Flyer } from '../interfaces/heroes';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]): Flyer[] {
    return allHeroes.filter(hero => hero.canFly);
  }

}
