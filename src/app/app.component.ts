import { Component, OnInit, OnDestroy } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { View } from "@nativescript/core";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { UIService } from "~/app/shared/services/ui.service";
import { PullToRefresh } from "@nativescript-community/ui-pulltorefresh";

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);
registerElement("PullToRefresh", () => PullToRefresh);

@Component({
  selector: "ns-app",
  moduleId: module.id,
  template: `
    <RootLayout>
      <page-router-outlet></page-router-outlet>
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
