import { ComponentRef, Injectable, Injector } from "@angular/core";
import { generateNativeScriptView } from "@nativescript/angular";
import { getRootLayout, View } from "@nativescript/core";
import { screen } from "@nativescript/core/platform";
import { CustomModalComponent } from "~/app/shared/components/custom-modal/custom-modal.component";
import { MenuComponent } from "~/app/shared/components/menu/menu.component";
import {
  DEFAULT_ANIMATION_CURVE, EASEINOUT_ANIMATION_CURVE
} from "~/app/shared/utils";

@Injectable({
  providedIn: "root"
})
export class UIService {
  private _customModal: View = undefined;
  private _menu: View = undefined;
  public classResponsive: string = "mobile";

  constructor(private injector: Injector) {}

  checkResponsiviness(): void {
    switch ((screen as any).mainScreen.widthDIPs.toString()) {
      case "320":
      case "480":
        this.classResponsive = "mobile-sm";
        break;
      case "540":
      case "600":
        this.classResponsive = "mobile";
        break;
      case "800":
        this.classResponsive = "tablet";
        break;
      case "1024":
      case "1280":
        this.classResponsive = "cpu";
        break;
      default:
        this.classResponsive = "mobile";
        break;
    }
    console.log("checkResponsiviness:", this.classResponsive);
  }

  openMenu(): void {
    this.getView(MenuComponent).then(v => {
      this._menu = v;
      getRootLayout()
        .open(this._menu, {
          shadeCover: {
            color: "#000000",
            opacity: 0.7,
            tapToClose: true,
            animation: {
              enterFrom: {
                opacity: 0
              },
              exitTo: {
                opacity: 0
              }
            }
          },
          animation: {
            enterFrom: {
              translateX: -600,
              opacity: 1,
              duration: 300,
              curve: EASEINOUT_ANIMATION_CURVE
            },
            exitTo: {
              translateX: -600,
              opacity: 1,
              duration: 300,
              curve: EASEINOUT_ANIMATION_CURVE
            }
          }
        })
        .then(() => {
          console.log("opened...");
        })
        .catch(err => {
          console.log("error opening", err);
        });
    });
  }

  closeMenu(): void {
    getRootLayout()
      .close(this._menu)
      .then(() => {
        this.destroyNgRef(this._menu);
        console.log("closed");
      })
      .catch(err => {
        console.log("error closing", err);
      });
  }

  destroyNgRef(view: View): void {
    if ((<any>view).__ngRef) {
      ((<any>view).__ngRef as ComponentRef<View>).destroy();
    }
  }

  getView(component: any, input?: any): Promise<View> {
    return new Promise(resolve => {
      const cmpRef = generateNativeScriptView(component, {
        injector: this.injector
      });
      (<any>cmpRef.firstNativeLikeView).__ngRef = cmpRef.ref;
      resolve(cmpRef.firstNativeLikeView);
    });
  }

  showCustomModal(): void {
    this.getView(CustomModalComponent).then(v => {
      this._customModal = v;
      getRootLayout()
        .open(this._customModal, {
          shadeCover: {
            color: "#000",
            opacity: 0.7,
            tapToClose: true
          },
          animation: {
            enterFrom: {
              translateY: 200,
              duration: 300,
              curve: DEFAULT_ANIMATION_CURVE
            },
            exitTo: {
              translateY: 200,
              opacity: 0,
              duration: 300,
              curve: DEFAULT_ANIMATION_CURVE
            }
          }
        })
        .then(() => {
          console.log("opened");
        })
        .catch(err => {
          console.log("error opening", err);
        });
    });
  }

  closeCustomModal(): void {
    if (this._customModal) {
      getRootLayout()
        .close(this._customModal)
        .then(() => {
          this.destroyNgRef(this._customModal);
          this._customModal = undefined;
          console.log("closed");
        })
        .catch(err => {
          console.log("error closing", err);
        });
    }
  }
}
