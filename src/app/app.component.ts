import { PlatformLocation } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { EventData, View } from "@nativescript/core";
import { UIService } from "~/app/shared/services/ui.service";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  template: `
    <RootLayout>
      <Page (loaded)="loaded($event)">
        <page-router-outlet></page-router-outlet>
      </Page>
    </RootLayout>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private ui: UIService, private location: PlatformLocation) {}

  ngOnInit(): void {
    View.on(View.layoutChangedEvent, () => {
      console.log("layoutChangedEvent");
      this.ui.checkResponsiviness();
    });

    this.location.onPopState(arg => {
      console.log("############### onPopState ##########", arg);
    });
  }

  ngOnDestroy(): void {
    View.off(View.layoutChangedEvent);
  }

  loaded(args: EventData) {
    var page = args.object;
    if (global.isIOS) {
      let statusBar = new UIView({
        frame:
          UIApplication.sharedApplication.keyWindow?.windowScene
            ?.statusBarManager?.statusBarFrame
      });
      if (statusBar) {
        statusBar.backgroundColor = UIColor.blackColor;
        UIApplication.sharedApplication.keyWindow?.addSubview(statusBar);
      }
    }
  }
}
