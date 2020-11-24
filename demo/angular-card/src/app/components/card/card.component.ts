import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { UseLayoutService } from '@services/use-layout.service';

// import { random } from '@db';
import { getRandomIndex, getItem } from '../../../../../../db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  index: number;
  arabic: String;
  latin: String;
  transliteration: String;
  meaning: String;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    public useLayout: UseLayoutService,
  ) {}

  ngOnInit(): void {
    // render as param
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.renderItem(this.index);
    });

    // random as default
    if (!this.index) {
      this.renderItem(getRandomIndex());
    }
  }


  random(): void {
    this.router.navigate([`card/${getRandomIndex()}`]);
  }

  next(): void {
    let nextIndex: number = +this.index === 99 ? 1 : +this.index + 1;
    this.router.navigate([`card/${nextIndex}`]);
  }

  renderItem(index): void {
    const item = getItem(index, 'id');

    this.index = item.index;
    this.arabic = item.arabic;
    this.latin = item.latin;
    this.transliteration = item.transliteration;
    this.meaning = item.meaning;
    this.titleService.setTitle(`${item.latin} | Asmaul Husna`);
  }

}
