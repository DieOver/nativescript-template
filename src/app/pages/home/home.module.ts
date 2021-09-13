import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from "@nativescript/angular";
import { HomeRoutingModule } from "~/app/pages/home/home-routing.module";
import { HomeComponent } from "~/app/pages/home/home.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
  imports: [
    HomeRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
