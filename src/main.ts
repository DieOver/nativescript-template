import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module'

import { registerElement } from "@nativescript/angular";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { PullToRefresh } from "@nativescript-community/ui-pulltorefresh";

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);
registerElement("PullToRefresh", () => PullToRefresh);
