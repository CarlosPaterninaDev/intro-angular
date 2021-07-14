import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      atk: 140,
    },
    {
      name: 'Vegeta',
      atk: 120,
    },
    {
      name: 'Piccolo',
      atk: 100,
    },
    {
      name: 'Buu',
      atk: 200,
    },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacters(character: Character) {
    this._characters.push(character);
  }
}
