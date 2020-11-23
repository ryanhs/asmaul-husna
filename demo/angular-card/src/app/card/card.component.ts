import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { random } from './../../../../../db/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  arabic: String;
  latin: String;
  transliteration: String;
  meaning: String;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.next();
    // window.card = this;
  }


  next(): void {
    const item = random();

    this.arabic = item.arabic;
    this.latin = item.latin;
    this.transliteration = item.transliteration;
    this.meaning = item.meaning;
    this.titleService.setTitle(`${item.latin} | Asmaul Husna`);
  }

}
