import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Test } from '../models/test.model';
import { TestDto } from './mappers/dtos/test.dto';
import { TestMapper } from './mappers/test.mapper';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private readonly testMapper: TestMapper) {}

  public getList(): Observable<Test[]> {
    const testDtoList: TestDto[] = [
      {
        name_model: '1',
      },
      {
        name_model: '2',
      },
    ];

    return of(testDtoList.map((dto) => this.testMapper.fromDto(dto)));
  }
}
