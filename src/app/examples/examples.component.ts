import { Component, OnInit } from '@angular/core';

import { Card } from '../models/card';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'fl-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  cards: Card[];

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.cards = this.exampleService.getCards();
  }
}
