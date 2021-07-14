import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
})
export class AddCharactersComponent {
  newCharacter: Character = {
    name: '',
    atk: 0,
  };
  // @Output() onNewCharacther: EventEmitter<Character> = new EventEmitter();

  constructor(private _dbzService: DbzService) {}

  handleAdd(): void {
    // this.onNewCharacther.emit(this.newCharacter);
    this._dbzService.addCharacters(this.newCharacter);

    this.newCharacter = {
      name: '',
      atk: 0,
    };
  }
}
