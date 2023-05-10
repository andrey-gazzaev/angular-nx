import { Component, Input } from '@angular/core';
import { TestService } from '@common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected readonly testModelNames$: Observable<string[]>;

  @Input()
  title = 'web';

  constructor(readonly testService: TestService) {
    this.testModelNames$ = testService
      .getList()
      .pipe(map((test) => test.map(({ nameModel }) => nameModel)));
  }
}
