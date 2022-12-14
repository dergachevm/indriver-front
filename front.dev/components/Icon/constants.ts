import arrowRightUrl, {
    ReactComponent as ArrowRight,
} from "@assets/svg/arrow-right.svg";
import arrowRightBigUrl, {
    ReactComponent as ArrowRightBig,
} from "@assets/svg/arrow-right-big.svg";
import arrowRightBigGreenMobileUrl, {
    ReactComponent as ArrowRightBigGreenMobile,
} from "@assets/svg/arrow-right-big-green-m.svg";
import arrowBottomUrl, {
    ReactComponent as ArrowBottom,
} from "@assets/svg/arrow-bottom.svg";
import logoUrl, { ReactComponent as Logo } from "@assets/svg/logo.svg";
import logoMobileUrl, {
    ReactComponent as LogoMobile,
} from "@assets/svg/logo-mobile.svg";
import logoMobileWhiteUrl, {
    ReactComponent as LogoMobileWhite,
} from "@assets/svg/logo-mobile-white.svg";
import rocketUrl, { ReactComponent as Rocket } from "@assets/svg/rocket.svg";
import clipUrl, { ReactComponent as Clip } from "@assets/svg/clip.svg";
import starUrl, { ReactComponent as Star } from "@assets/svg/star.svg";
import fireUrl, { ReactComponent as Fire } from "@assets/svg/fire.svg";
import heartUrl, { ReactComponent as Heart } from "@assets/svg/heart.svg";
import plusUrl, { ReactComponent as Plus } from "@assets/svg/plus.svg";
import markerStarUrl, {
    ReactComponent as markerStar,
} from "@assets/svg/marker-star.svg";
import markerCircleUrl, {
    ReactComponent as markerCircle,
} from "@assets/svg/marker-circle.svg";
import markerRectUrl, {
    ReactComponent as markerRect,
} from "@assets/svg/marker-rect.svg";
import markerSuperellipseUrl, {
    ReactComponent as markerSuperellipse,
} from "@assets/svg/marker-superellipse.svg";
import messageCornerUrl, {
    ReactComponent as MessageCorner,
} from "@assets/svg/message-corner.svg";
import friendUrl, { ReactComponent as Friend } from "@assets/svg/friend.svg";
import likeUrl, { ReactComponent as Like } from "@assets/svg/like.svg";
import likeBigUrl, {
    ReactComponent as LikeBig,
} from "@assets/svg/like-big.svg";
import okUrl, { ReactComponent as Ok } from "@assets/svg/ok.svg";
import logoThinUrl, {
    ReactComponent as LogoThin,
} from "@assets/svg/logo-thin.svg";
import logoThinSmallUrl, {
    ReactComponent as LogoThinSmall,
} from "@assets/svg/logo-thin-small.svg";
import logoThinWhiteUrl, {
    ReactComponent as LogoThinWhite,
} from "@assets/svg/logo-thin-white.svg";
import romanNumeralUrl_1, {
    ReactComponent as RomanNumeral_1,
} from "@assets/svg/roman-numeral-1.svg";
import romanNumeralUrl_2, {
    ReactComponent as RomanNumeral_2,
} from "@assets/svg/roman-numeral-2.svg";
import romanNumeralUrl_3, {
    ReactComponent as RomanNumeral_3,
} from "@assets/svg/roman-numeral-3.svg";
import romanNumeralUrl_4, {
    ReactComponent as RomanNumeral_4,
} from "@assets/svg/roman-numeral-4.svg";
import unionUrl, { ReactComponent as Union } from "@assets/svg/union.svg";
import arrowRightBigGreenUrl, {
    ReactComponent as ArrowRightBigGreen,
} from "@assets/svg/arrow-right-big-green.svg";
import minusUrl, { ReactComponent as Minus } from "@assets/svg/minus.svg";
import crossUrl, { ReactComponent as Cross } from "@assets/svg/cross.svg";
import cursorLeftUrl, {
    ReactComponent as CursorLeft,
} from "@assets/svg/cursor-left.svg";
import cursorRightUrl, {
    ReactComponent as CursorRight,
} from "@assets/svg/cursor-right.svg";
import { TIconDataObj } from "./types";
import { createIconData } from "./utils";
import arrowTopUrl, {
    ReactComponent as ArrowTop,
} from "@assets/svg/arrow-top.svg";

export const iconDataObj: TIconDataObj = {
    "arrow-bottom": createIconData(arrowBottomUrl, ArrowBottom),
    "arrow-right": createIconData(arrowRightUrl, ArrowRight),
    "arrow-right-big": createIconData(arrowRightBigUrl, ArrowRightBig),
    "arrow-right-big-green": createIconData(
        arrowRightBigGreenUrl,
        ArrowRightBigGreen
    ),
    "arrow-right-big-green-m": createIconData(
        arrowRightBigGreenMobileUrl,
        ArrowRightBigGreenMobile
    ),
    "arrow-top": createIconData(arrowTopUrl, ArrowTop),
    "clip": createIconData(clipUrl, Clip),
    "cross": createIconData(crossUrl, Cross),
    "cursor-left": createIconData(cursorLeftUrl, CursorLeft),
    "cursor-right": createIconData(cursorRightUrl, CursorRight),
    "fire": createIconData(fireUrl, Fire),
    "friend": createIconData(friendUrl, Friend),
    "heart": createIconData(heartUrl, Heart),
    "like": createIconData(likeUrl, Like),
    "like-big": createIconData(likeBigUrl, LikeBig),
    "logo": createIconData(logoUrl, Logo),
    "logo-mobile": createIconData(logoMobileUrl, LogoMobile),
    "logo-mobile-white": createIconData(logoMobileWhiteUrl, LogoMobileWhite),
    "logo-thin": createIconData(logoThinUrl, LogoThin),
    "logo-thin-small": createIconData(logoThinSmallUrl, LogoThinSmall),
    "logo-thin-white": createIconData(logoThinWhiteUrl, LogoThinWhite),
    "marker-circle": createIconData(markerCircleUrl, markerCircle),
    "marker-rect": createIconData(markerRectUrl, markerRect),
    "marker-star": createIconData(markerStarUrl, markerStar),
    "marker-superellipse": createIconData(
        markerSuperellipseUrl,
        markerSuperellipse
    ),
    "message-corner": createIconData(messageCornerUrl, MessageCorner),
    "minus": createIconData(minusUrl, Minus),
    "ok": createIconData(okUrl, Ok),
    "plus": createIconData(plusUrl, Plus),
    "rocket": createIconData(rocketUrl, Rocket),
    "roman-numeral-1": createIconData(romanNumeralUrl_1, RomanNumeral_1),
    "roman-numeral-2": createIconData(romanNumeralUrl_2, RomanNumeral_2),
    "roman-numeral-3": createIconData(romanNumeralUrl_3, RomanNumeral_3),
    "roman-numeral-4": createIconData(romanNumeralUrl_4, RomanNumeral_4),
    "star": createIconData(starUrl, Star),
    "union": createIconData(unionUrl, Union),
};
