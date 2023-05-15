import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { TestComponentComponent } from './components/test-component/test-component.component';

const PRIVATE_DECLARATIONS: Type<unknown>[] = [];

const EXPORTED_DECLARATIONS: Type<unknown>[] = [TestComponentComponent];

const EXPORTED_MODULES: Type<unknown>[] = [];

/** Common module. Contains entities shared across applications. */
@NgModule({
  declarations: [...PRIVATE_DECLARATIONS, ...EXPORTED_DECLARATIONS],
  imports: [CommonModule, ...EXPORTED_MODULES],
  exports: [...EXPORTED_DECLARATIONS, ...EXPORTED_MODULES],
})
export class CommonSharedModule {}
