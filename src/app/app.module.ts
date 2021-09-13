import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptAnimationsModule,
  NativeScriptCommonModule,
  NativeScriptModule
} from "@nativescript/angular";
import { AppRoutingModule } from "~/app/app-routing.module";
import { AppComponent } from "~/app/app.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptAnimationsModule,
    SharedModule
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
