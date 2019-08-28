import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MushavaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MushavaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MushavaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MushavaSharedModule {
  static forRoot() {
    return {
      ngModule: MushavaSharedModule
    };
  }
}
