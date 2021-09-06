import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule
} from "@nativescript/angular";
import { ItemDetailComponent } from "./item-detail.component";

export const routes: Routes = [
  {
    path: "",
    component: ItemDetailComponent
  }
];

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)]
})
export class ItemDetailRoutingModule {}
