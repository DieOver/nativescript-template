import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ItemDetailRoutingModule } from "~/app/pages/item-detail/item-detail-routing.module";
import { ItemDetailComponent } from "~/app/pages/item-detail/item-detail.component";

@NgModule({
  imports: [NativeScriptCommonModule, CommonModule, ItemDetailRoutingModule],
  declarations: [ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemDetailModule {}
