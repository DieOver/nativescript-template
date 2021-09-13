import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  { path: "", redirectTo: "/instagram", pathMatch: "full" },
  {
    path: "instagram",
    loadChildren: () =>
      import("./pages/instagram/instagram.module").then(m => m.InstagramModule)
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "detail/:id",
    loadChildren: () =>
      import("./pages/item-detail/item-detail.module").then(
        m => m.ItemDetailModule
      )
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
