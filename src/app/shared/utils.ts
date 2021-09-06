import { CoreTypes } from "@nativescript/core";

export const Icons = {
  heart: String.fromCharCode(0xf32e),
  heartOutline: String.fromCharCode(0xf15e),
  send: String.fromCharCode(0xf194),
  save: String.fromCharCode(0xf21d),
  play: String.fromCharCode(0xf472),
  back: String.fromCharCode(0xf208),
  star: String.fromCharCode(0xf535),
  menu: String.fromCharCode(0xf3fd),
  close: String.fromCharCode(0xf223),
  home: String.fromCharCode(0xf346),
  account: String.fromCharCode(0xf451),
  downloads: String.fromCharCode(0xf289),
  settings: String.fromCharCode(0xf1a2),
  notifications: String.fromCharCode(0xf421),
  help: String.fromCharCode(0xf18d),
  info: String.fromCharCode(0xf389),
  share: String.fromCharCode(0xf51a),
  filter: String.fromCharCode(0xf2f5),
  search: String.fromCharCode(0xf505),
  check: String.fromCharCode(0xf207),
  menu_m: String.fromCharCode(0xf197),
  search_m: String.fromCharCode(0xf1c3),
  filter_m: String.fromCharCode(0xf160),
  chevron_left: String.fromCharCode(0xf2fa),
  app: String.fromCharCode(0xf313),
  ballon: String.fromCharCode(0xf265),
  hearth: String.fromCharCode(0xf15f),
  clock: String.fromCharCode(0xf32d),
  plus: String.fromCharCode(0xf277)
};

export const EASE_ANIMATION_CURVE = CoreTypes.AnimationCurve.ease;

export const EASEIN_ANIMATION_CURVE = CoreTypes.AnimationCurve.easeIn;

export const EASEOUT_ANIMATION_CURVE = CoreTypes.AnimationCurve.easeOut;

export const EASEINOUT_ANIMATION_CURVE = CoreTypes.AnimationCurve.easeInOut;

export const LINEAR_ANIMATION_CURVE = CoreTypes.AnimationCurve.linear;

export const SPRING_ANIMATION_CURVE = CoreTypes.AnimationCurve.spring;

export const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(
  0.17,
  0.89,
  0.24,
  1.11
);
