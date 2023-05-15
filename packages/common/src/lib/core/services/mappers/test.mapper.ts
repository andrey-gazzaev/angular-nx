import { Injectable } from '@angular/core';

import { Test } from '../../models/test.model';
import { TestDto } from './dtos/test.dto';

@Injectable({
  providedIn: 'root',
})
export class TestMapper {
  public fromDto(dto: TestDto): Test {
    return {
      nameModel: dto.name_model,
    };
  }
}
