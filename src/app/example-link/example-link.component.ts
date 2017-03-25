import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../models/card';

@Component({
  selector: 'fl-example-link',
  templateUrl: './example-link.component.html',
  styleUrls: ['./example-link.component.scss']
})
export class ExampleLinkComponent implements OnInit {
  @Input() card: Card;

  ngOnInit() { }
}
