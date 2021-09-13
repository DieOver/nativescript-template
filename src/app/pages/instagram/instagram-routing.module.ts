import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule
} from "@nativescript/angular";
import { InstagramComponent } from "~/app/pages/instagram/instagram.component";

export const routes: Routes = [
  {
    path: "",
    component: InstagramComponent
  }
];

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)]
})
export class InstagramRoutingModule {}
