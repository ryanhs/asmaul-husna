import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UseLayoutService } from '@services/use-layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asmaulhusna card';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public useLayout: UseLayoutService,
  ) {}
}
