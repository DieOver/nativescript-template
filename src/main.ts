import { PullToRefresh } from "@nativescript-community/ui-pulltorefresh";
import {
  platformNativeScript,
  registerElement,
  runNativeScriptAngularApp
} from "@nativescript/angular";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { AppModule } from "~/app/app.module";

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule)
});

registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);
registerElement("PullToRefresh", () => PullToRefresh);
