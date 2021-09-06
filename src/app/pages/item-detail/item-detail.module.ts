import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ItemDetailComponent } from "./item-detail.component";
import { ItemDetailRoutingModule } from './item-detail-routing.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        ItemDetailRoutingModule
    ],
    declarations: [ItemDetailComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ItemDetailModule {}
