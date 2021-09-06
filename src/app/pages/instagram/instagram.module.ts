import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from "@nativescript/angular";
import { SharedModule } from "../../shared/shared.module";
import { InstagramRoutingModule } from "./instagram-routing.module";
import { InstagramComponent } from "./instagram.component";

@NgModule({
  imports: [
    InstagramRoutingModule,
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SharedModule
  ],
  declarations: [InstagramComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InstagramModule {}
