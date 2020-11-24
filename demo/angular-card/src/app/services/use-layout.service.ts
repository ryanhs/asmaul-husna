import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UseLayoutService {
  private _show = new BehaviorSubject<boolean>(true);

  constructor(
    private route: ActivatedRoute,
  ) {
    // render from queryParams
    this.route.queryParams.subscribe(params => {
      this._show.next(!(params['layout'] === 'false'));
    });
  }

  get show(): Boolean {
    return this._show.getValue();
  }
}
