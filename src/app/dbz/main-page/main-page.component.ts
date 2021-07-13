import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  atk: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  characters: Character[] = [
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

  newCharacter: Character = {
    name: '',
    atk: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  handleAdd(): void {
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      atk: 0,
    };
  }
}
