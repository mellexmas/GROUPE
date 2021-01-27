import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public title: string | null = '';
  @Input()
  public subtitle: string | null = '';
  @Input()
  public description: string | null = '';
  @Input()
  public lien: string | null = '';



  constructor() { }

  ngOnInit(): void {
  }

}
