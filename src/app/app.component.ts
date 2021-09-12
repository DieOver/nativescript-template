import { Component, OnInit, OnDestroy } from "@angular/core";
import { View } from "@nativescript/core";
import { UIService } from "~/app/shared/services/ui.service";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  template: `
    <RootLayout>
      <Page>
        <page-router-outlet></page-router-outlet>
      </Page>
    </RootLayout>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private ui: UIService) {}

  ngOnInit(): void {
    View.on(View.layoutChangedEvent, () => {
      console.log("layoutChangedEvent");
      this.ui.checkResponsiviness();
    });
  }

  ngOnDestroy(): void {
    View.off(View.layoutChangedEvent);
  }

  // loaded(args: EventData) {
  //   var page = args.object;
  //   if (global.isIOS) {
  //     let statusBar = new UIView({
  //       frame:
  //         UIApplication.sharedApplication.keyWindow?.windowScene
  //           ?.statusBarManager?.statusBarFrame
  //     });
  //     if (statusBar) {
  //       statusBar.backgroundColor = UIColor.blackColor;
  //       UIApplication.sharedApplication.keyWindow?.addSubview(statusBar);
  //     }
  //   }
  // }
}
