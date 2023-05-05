import { Component } from '@angular/core';
import { TestService } from '@common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';
  protected readonly testModelNames$: Observable<string[]>;
  constructor(readonly testService: TestService) {
    this.testModelNames$ = testService
      .getList()
      .pipe(map((test) => test.map(({ nameModel }) => nameModel)));
  }
}
