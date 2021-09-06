import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { MenuComponent } from '~/app/shared/components/menu/menu.component';
import { TruncatePipe } from '~/app/shared/pipes/truncate.pipe';
import { CustomModalComponent } from "./components/custom-modal/custom-modal.component";

const DE = [MenuComponent, CustomModalComponent, TruncatePipe];

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  declarations: [...DE],
  exports: [...DE],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
