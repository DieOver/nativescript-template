import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from "@nativescript/angular";
import { InstagramRoutingModule } from "~/app/pages/instagram/instagram-routing.module";
import { InstagramComponent } from "~/app/pages/instagram/instagram.component";
import { SharedModule } from "~/app/shared/shared.module";

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
