import 'tooqingphaser';

var ButtonMode;
(function (ButtonMode) {
    ButtonMode[ButtonMode["Common"] = 0] = "Common";
    ButtonMode[ButtonMode["Check"] = 1] = "Check";
    ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
})(ButtonMode || (ButtonMode = {}));
var AutoSizeType;
(function (AutoSizeType) {
    AutoSizeType[AutoSizeType["None"] = 0] = "None";
    AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
    AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
})(AutoSizeType || (AutoSizeType = {}));
var AlignType;
(function (AlignType) {
    AlignType[AlignType["Left"] = 0] = "Left";
    AlignType[AlignType["Center"] = 1] = "Center";
    AlignType[AlignType["Right"] = 2] = "Right";
})(AlignType || (AlignType = {}));
var VertAlignType;
(function (VertAlignType) {
    VertAlignType[VertAlignType["Top"] = 0] = "Top";
    VertAlignType[VertAlignType["Middle"] = 1] = "Middle";
    VertAlignType[VertAlignType["Bottom"] = 2] = "Bottom";
})(VertAlignType || (VertAlignType = {}));
var LoaderFillType;
(function (LoaderFillType) {
    LoaderFillType[LoaderFillType["None"] = 0] = "None";
    LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
    LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
    LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
    LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
    LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
})(LoaderFillType || (LoaderFillType = {}));
var ListLayoutType;
(function (ListLayoutType) {
    ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
    ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
    ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
    ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
    ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
})(ListLayoutType || (ListLayoutType = {}));
var ListSelectionMode;
(function (ListSelectionMode) {
    ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
    ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
    ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
    ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
})(ListSelectionMode || (ListSelectionMode = {}));
var OverflowType;
(function (OverflowType) {
    OverflowType[OverflowType["Visible"] = 0] = "Visible";
    OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
    OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
})(OverflowType || (OverflowType = {}));
var PackageItemType;
(function (PackageItemType) {
    PackageItemType[PackageItemType["Image"] = 0] = "Image";
    PackageItemType[PackageItemType["MovieClip"] = 1] = "MovieClip";
    PackageItemType[PackageItemType["Sound"] = 2] = "Sound";
    PackageItemType[PackageItemType["Component"] = 3] = "Component";
    PackageItemType[PackageItemType["Atlas"] = 4] = "Atlas";
    PackageItemType[PackageItemType["Font"] = 5] = "Font";
    PackageItemType[PackageItemType["Swf"] = 6] = "Swf";
    PackageItemType[PackageItemType["Misc"] = 7] = "Misc";
    PackageItemType[PackageItemType["Unknown"] = 8] = "Unknown";
    PackageItemType[PackageItemType["Spine"] = 9] = "Spine";
    PackageItemType[PackageItemType["DragonBones"] = 10] = "DragonBones";
})(PackageItemType || (PackageItemType = {}));
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Image"] = 0] = "Image";
    ObjectType[ObjectType["MovieClip"] = 1] = "MovieClip";
    ObjectType[ObjectType["Swf"] = 2] = "Swf";
    ObjectType[ObjectType["Graph"] = 3] = "Graph";
    ObjectType[ObjectType["Loader"] = 4] = "Loader";
    ObjectType[ObjectType["Group"] = 5] = "Group";
    ObjectType[ObjectType["Text"] = 6] = "Text";
    ObjectType[ObjectType["RichText"] = 7] = "RichText";
    ObjectType[ObjectType["InputText"] = 8] = "InputText";
    ObjectType[ObjectType["Component"] = 9] = "Component";
    ObjectType[ObjectType["List"] = 10] = "List";
    ObjectType[ObjectType["Label"] = 11] = "Label";
    ObjectType[ObjectType["Button"] = 12] = "Button";
    ObjectType[ObjectType["ComboBox"] = 13] = "ComboBox";
    ObjectType[ObjectType["ProgressBar"] = 14] = "ProgressBar";
    ObjectType[ObjectType["Slider"] = 15] = "Slider";
    ObjectType[ObjectType["ScrollBar"] = 16] = "ScrollBar";
    ObjectType[ObjectType["Tree"] = 17] = "Tree";
    ObjectType[ObjectType["Loader3D"] = 18] = "Loader3D";
})(ObjectType || (ObjectType = {}));
var ProgressTitleType;
(function (ProgressTitleType) {
    ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
    ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
    ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
    ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
})(ProgressTitleType || (ProgressTitleType = {}));
var ScrollBarDisplayType;
(function (ScrollBarDisplayType) {
    ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
    ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
    ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
    ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
})(ScrollBarDisplayType || (ScrollBarDisplayType = {}));
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
    ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
    ScrollType[ScrollType["Both"] = 2] = "Both";
})(ScrollType || (ScrollType = {}));
var FlipType;
(function (FlipType) {
    FlipType[FlipType["None"] = 0] = "None";
    FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
    FlipType[FlipType["Vertical"] = 2] = "Vertical";
    FlipType[FlipType["Both"] = 3] = "Both";
})(FlipType || (FlipType = {}));
var ChildrenRenderOrder;
(function (ChildrenRenderOrder) {
    ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
    ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
    ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
})(ChildrenRenderOrder || (ChildrenRenderOrder = {}));
var GroupLayoutType;
(function (GroupLayoutType) {
    GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
    GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
    GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
})(GroupLayoutType || (GroupLayoutType = {}));
var PopupDirection;
(function (PopupDirection) {
    PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
    PopupDirection[PopupDirection["Up"] = 1] = "Up";
    PopupDirection[PopupDirection["Down"] = 2] = "Down";
})(PopupDirection || (PopupDirection = {}));
var RelationType;
(function (RelationType) {
    RelationType[RelationType["Left_Left"] = 0] = "Left_Left";
    RelationType[RelationType["Left_Center"] = 1] = "Left_Center";
    RelationType[RelationType["Left_Right"] = 2] = "Left_Right";
    RelationType[RelationType["Center_Center"] = 3] = "Center_Center";
    RelationType[RelationType["Right_Left"] = 4] = "Right_Left";
    RelationType[RelationType["Right_Center"] = 5] = "Right_Center";
    RelationType[RelationType["Right_Right"] = 6] = "Right_Right";
    RelationType[RelationType["Top_Top"] = 7] = "Top_Top";
    RelationType[RelationType["Top_Middle"] = 8] = "Top_Middle";
    RelationType[RelationType["Top_Bottom"] = 9] = "Top_Bottom";
    RelationType[RelationType["Middle_Middle"] = 10] = "Middle_Middle";
    RelationType[RelationType["Bottom_Top"] = 11] = "Bottom_Top";
    RelationType[RelationType["Bottom_Middle"] = 12] = "Bottom_Middle";
    RelationType[RelationType["Bottom_Bottom"] = 13] = "Bottom_Bottom";
    RelationType[RelationType["Width"] = 14] = "Width";
    RelationType[RelationType["Height"] = 15] = "Height";
    RelationType[RelationType["LeftExt_Left"] = 16] = "LeftExt_Left";
    RelationType[RelationType["LeftExt_Right"] = 17] = "LeftExt_Right";
    RelationType[RelationType["RightExt_Left"] = 18] = "RightExt_Left";
    RelationType[RelationType["RightExt_Right"] = 19] = "RightExt_Right";
    RelationType[RelationType["TopExt_Top"] = 20] = "TopExt_Top";
    RelationType[RelationType["TopExt_Bottom"] = 21] = "TopExt_Bottom";
    RelationType[RelationType["BottomExt_Top"] = 22] = "BottomExt_Top";
    RelationType[RelationType["BottomExt_Bottom"] = 23] = "BottomExt_Bottom";
    RelationType[RelationType["Size"] = 24] = "Size";
})(RelationType || (RelationType = {}));
var FillMethod;
(function (FillMethod) {
    FillMethod[FillMethod["None"] = 0] = "None";
    FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
    FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
    FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
    FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
    FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
})(FillMethod || (FillMethod = {}));
var FillOrigin;
(function (FillOrigin) {
    FillOrigin[FillOrigin["Top"] = 0] = "Top";
    FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
    FillOrigin[FillOrigin["Left"] = 2] = "Left";
    FillOrigin[FillOrigin["Right"] = 3] = "Right";
    FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
    FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
    FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
    FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
})(FillOrigin || (FillOrigin = {}));
var FillOrigin90;
(function (FillOrigin90) {
    FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
    FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
    FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
    FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
})(FillOrigin90 || (FillOrigin90 = {}));
var ObjectPropID;
(function (ObjectPropID) {
    ObjectPropID[ObjectPropID["Text"] = 0] = "Text";
    ObjectPropID[ObjectPropID["Icon"] = 1] = "Icon";
    ObjectPropID[ObjectPropID["Color"] = 2] = "Color";
    ObjectPropID[ObjectPropID["OutlineColor"] = 3] = "OutlineColor";
    ObjectPropID[ObjectPropID["Playing"] = 4] = "Playing";
    ObjectPropID[ObjectPropID["Frame"] = 5] = "Frame";
    ObjectPropID[ObjectPropID["DeltaTime"] = 6] = "DeltaTime";
    ObjectPropID[ObjectPropID["TimeScale"] = 7] = "TimeScale";
    ObjectPropID[ObjectPropID["FontSize"] = 8] = "FontSize";
    ObjectPropID[ObjectPropID["Selected"] = 9] = "Selected";
})(ObjectPropID || (ObjectPropID = {}));

class EaseType {
}
EaseType.Linear = 0;
EaseType.SineIn = 1;
EaseType.SineOut = 2;
EaseType.SineInOut = 3;
EaseType.QuadIn = 4;
EaseType.QuadOut = 5;
EaseType.QuadInOut = 6;
EaseType.CubicIn = 7;
EaseType.CubicOut = 8;
EaseType.CubicInOut = 9;
EaseType.QuartIn = 10;
EaseType.QuartOut = 11;
EaseType.QuartInOut = 12;
EaseType.QuintIn = 13;
EaseType.QuintOut = 14;
EaseType.QuintInOut = 15;
EaseType.ExpoIn = 16;
EaseType.ExpoOut = 17;
EaseType.ExpoInOut = 18;
EaseType.CircIn = 19;
EaseType.CircOut = 20;
EaseType.CircInOut = 21;
EaseType.ElasticIn = 22;
EaseType.ElasticOut = 23;
EaseType.ElasticInOut = 24;
EaseType.BackIn = 25;
EaseType.BackOut = 26;
EaseType.BackInOut = 27;
EaseType.BounceIn = 28;
EaseType.BounceOut = 29;
EaseType.BounceInOut = 30;
EaseType.Custom = 31;

// Author: Daniele Giardini - http://www.demigiant.com
// Created: 2014/07/19 14:11
// 
// License Copyright (c) Daniele Giardini.
// This work is subject to the terms at http://dotween.demigiant.com/license.php
// 
// =============================================================
// Contains Daniele Giardini's C# port of the easing equations created by Robert Penner
// (all easing equations except for Flash, InFlash, OutFlash, InOutFlash,
// which use some parts of Robert Penner's equations but were created by Daniele Giardini)
// http://robertpenner.com/easing, see license below:
// =============================================================
//
// TERMS OF USE - EASING EQUATIONS
//
// Open source under the BSD License.
//
// Copyright ? 2001 Robert Penner
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
// - Redistributions of source code must retain the above copyright notice,
// this list of conditions and the following disclaimer.
// - Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// - Neither the name of the author nor the names of contributors may be used to endorse
// or promote products derived from this software without specific prior written permission.
// - THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
const _PiOver2 = Math.PI * 0.5;
const _TwoPi = Math.PI * 2;
function evaluateEase(easeType, time, duration, overshootOrAmplitude, period) {
    switch (easeType) {
        case EaseType.Linear:
            return time / duration;
        case EaseType.SineIn:
            return -Math.cos(time / duration * _PiOver2) + 1;
        case EaseType.SineOut:
            return Math.sin(time / duration * _PiOver2);
        case EaseType.SineInOut:
            return -0.5 * (Math.cos(Math.PI * time / duration) - 1);
        case EaseType.QuadIn:
            return (time /= duration) * time;
        case EaseType.QuadOut:
            return -(time /= duration) * (time - 2);
        case EaseType.QuadInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time;
            return -0.5 * ((--time) * (time - 2) - 1);
        case EaseType.CubicIn:
            return (time /= duration) * time * time;
        case EaseType.CubicOut:
            return ((time = time / duration - 1) * time * time + 1);
        case EaseType.CubicInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time;
            return 0.5 * ((time -= 2) * time * time + 2);
        case EaseType.QuartIn:
            return (time /= duration) * time * time * time;
        case EaseType.QuartOut:
            return -((time = time / duration - 1) * time * time * time - 1);
        case EaseType.QuartInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time * time;
            return -0.5 * ((time -= 2) * time * time * time - 2);
        case EaseType.QuintIn:
            return (time /= duration) * time * time * time * time;
        case EaseType.QuintOut:
            return ((time = time / duration - 1) * time * time * time * time + 1);
        case EaseType.QuintInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time * time * time;
            return 0.5 * ((time -= 2) * time * time * time * time + 2);
        case EaseType.ExpoIn:
            return (time == 0) ? 0 : Math.pow(2, 10 * (time / duration - 1));
        case EaseType.ExpoOut:
            if (time == duration)
                return 1;
            return (-Math.pow(2, -10 * time / duration) + 1);
        case EaseType.ExpoInOut:
            if (time == 0)
                return 0;
            if (time == duration)
                return 1;
            if ((time /= duration * 0.5) < 1)
                return 0.5 * Math.pow(2, 10 * (time - 1));
            return 0.5 * (-Math.pow(2, -10 * --time) + 2);
        case EaseType.CircIn:
            return -(Math.sqrt(1 - (time /= duration) * time) - 1);
        case EaseType.CircOut:
            return Math.sqrt(1 - (time = time / duration - 1) * time);
        case EaseType.CircInOut:
            if ((time /= duration * 0.5) < 1)
                return -0.5 * (Math.sqrt(1 - time * time) - 1);
            return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);
        case EaseType.ElasticIn:
            var s0;
            if (time == 0)
                return 0;
            if ((time /= duration) == 1)
                return 1;
            if (period == 0)
                period = duration * 0.3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s0 = period / 4;
            }
            else
                s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));
        case EaseType.ElasticOut:
            var s1;
            if (time == 0)
                return 0;
            if ((time /= duration) == 1)
                return 1;
            if (period == 0)
                period = duration * 0.3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s1 = period / 4;
            }
            else
                s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return (overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1);
        case EaseType.ElasticInOut:
            var s;
            if (time == 0)
                return 0;
            if ((time /= duration * 0.5) == 2)
                return 1;
            if (period == 0)
                period = duration * (0.3 * 1.5);
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s = period / 4;
            }
            else
                s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            if (time < 1)
                return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
            return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * 0.5 + 1;
        case EaseType.BackIn:
            return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
        case EaseType.BackOut:
            return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1);
        case EaseType.BackInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1) * time - overshootOrAmplitude));
            return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1) * time + overshootOrAmplitude) + 2);
        case EaseType.BounceIn:
            return bounce_easeIn(time, duration);
        case EaseType.BounceOut:
            return bounce_easeOut(time, duration);
        case EaseType.BounceInOut:
            return bounce_easeInOut(time, duration);
        default:
            return -(time /= duration) * (time - 2);
    }
}
function bounce_easeIn(time, duration) {
    return 1 - bounce_easeOut(duration - time, duration);
}
function bounce_easeOut(time, duration) {
    if ((time /= duration) < (1 / 2.75)) {
        return (7.5625 * time * time);
    }
    if (time < (2 / 2.75)) {
        return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75);
    }
    if (time < (2.5 / 2.75)) {
        return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375);
    }
    return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375);
}
function bounce_easeInOut(time, duration) {
    if (time < duration * 0.5) {
        return bounce_easeIn(time * 2, duration) * 0.5;
    }
    return bounce_easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
}

class ColorMatrix {
    constructor(p_brightness, p_contrast, p_saturation, p_hue) {
        this.matrix = new Array(LENGTH);
        this.reset();
        if (p_brightness !== undefined || p_contrast !== undefined || p_saturation !== undefined || p_hue !== undefined)
            this.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
    }
    reset() {
        for (var i = 0; i < LENGTH; i++) {
            this.matrix[i] = IDENTITY_MATRIX[i];
        }
    }
    invert() {
        this.multiplyMatrix([-1, 0, 0, 0, 255,
            0, -1, 0, 0, 255,
            0, 0, -1, 0, 255,
            0, 0, 0, 1, 0]);
    }
    adjustColor(p_brightness, p_contrast, p_saturation, p_hue) {
        this.adjustHue(p_hue || 0);
        this.adjustContrast(p_contrast || 0);
        this.adjustBrightness(p_brightness || 0);
        this.adjustSaturation(p_saturation || 0);
    }
    adjustBrightness(p_val) {
        p_val = this.cleanValue(p_val, 1) * 255;
        this.multiplyMatrix([
            1, 0, 0, 0, p_val,
            0, 1, 0, 0, p_val,
            0, 0, 1, 0, p_val,
            0, 0, 0, 1, 0
        ]);
    }
    adjustContrast(p_val) {
        p_val = this.cleanValue(p_val, 1);
        var s = p_val + 1;
        var o = 128 * (1 - s);
        this.multiplyMatrix([
            s, 0, 0, 0, o,
            0, s, 0, 0, o,
            0, 0, s, 0, o,
            0, 0, 0, 1, 0
        ]);
    }
    adjustSaturation(p_val) {
        p_val = this.cleanValue(p_val, 1);
        p_val += 1;
        var invSat = 1 - p_val;
        var invLumR = invSat * LUMA_R;
        var invLumG = invSat * LUMA_G;
        var invLumB = invSat * LUMA_B;
        this.multiplyMatrix([
            (invLumR + p_val), invLumG, invLumB, 0, 0,
            invLumR, (invLumG + p_val), invLumB, 0, 0,
            invLumR, invLumG, (invLumB + p_val), 0, 0,
            0, 0, 0, 1, 0
        ]);
    }
    adjustHue(p_val) {
        p_val = this.cleanValue(p_val, 1);
        p_val *= Math.PI;
        var cos = Math.cos(p_val);
        var sin = Math.sin(p_val);
        this.multiplyMatrix([
            ((LUMA_R + (cos * (1 - LUMA_R))) + (sin * -(LUMA_R))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * -(LUMA_G))), ((LUMA_B + (cos * -(LUMA_B))) + (sin * (1 - LUMA_B))), 0, 0,
            ((LUMA_R + (cos * -(LUMA_R))) + (sin * 0.143)), ((LUMA_G + (cos * (1 - LUMA_G))) + (sin * 0.14)), ((LUMA_B + (cos * -(LUMA_B))) + (sin * -0.283)), 0, 0,
            ((LUMA_R + (cos * -(LUMA_R))) + (sin * -((1 - LUMA_R)))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * LUMA_G)), ((LUMA_B + (cos * (1 - LUMA_B))) + (sin * LUMA_B)), 0, 0,
            0, 0, 0, 1, 0
        ]);
    }
    concat(p_matrix) {
        if (p_matrix.length != LENGTH) {
            return;
        }
        this.multiplyMatrix(p_matrix);
    }
    clone() {
        var result = new ColorMatrix();
        result.copyMatrix(this.matrix);
        return result;
    }
    copyMatrix(p_matrix) {
        var l = LENGTH;
        for (var i = 0; i < l; i++) {
            this.matrix[i] = p_matrix[i];
        }
    }
    multiplyMatrix(p_matrix) {
        var col = [];
        var i = 0;
        for (var y = 0; y < 4; ++y) {
            for (var x = 0; x < 5; ++x) {
                col[i + x] = p_matrix[i] * this.matrix[x] +
                    p_matrix[i + 1] * this.matrix[x + 5] +
                    p_matrix[i + 2] * this.matrix[x + 10] +
                    p_matrix[i + 3] * this.matrix[x + 15] +
                    (x == 4 ? p_matrix[i + 4] : 0);
            }
            i += 5;
        }
        this.copyMatrix(col);
    }
    cleanValue(p_val, p_limit) {
        return Math.min(p_limit, Math.max(-p_limit, p_val));
    }
}
// identity matrix constant:
const IDENTITY_MATRIX = [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0
];
const LENGTH = IDENTITY_MATRIX.length;
const LUMA_R = 0.299;
const LUMA_G = 0.587;
const LUMA_B = 0.114;

class ToolSet {
    static startsWith(source, str, ignoreCase) {
        if (!source)
            return false;
        else if (source.length < str.length)
            return false;
        else {
            source = source.substring(0, str.length);
            if (!ignoreCase)
                return source == str;
            else
                return source.toLowerCase() == str.toLowerCase();
        }
    }
    static endsWith(source, str, ignoreCase) {
        if (!source)
            return false;
        else if (source.length < str.length)
            return false;
        else {
            source = source.substring(source.length - str.length);
            if (!ignoreCase)
                return source == str;
            else
                return source.toLowerCase() == str.toLowerCase();
        }
    }
    static trimRight(targetString) {
        var tempChar = "";
        for (var i = targetString.length - 1; i >= 0; i--) {
            tempChar = targetString.charAt(i);
            if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                break;
            }
        }
        return targetString.substring(0, i + 1);
    }
    static convertToHtmlColor(argb, hasAlpha) {
        var alpha;
        if (hasAlpha)
            alpha = (argb >> 24 & 0xFF).toString(16);
        else
            alpha = "";
        var red = (argb >> 16 & 0xFF).toString(16);
        var green = (argb >> 8 & 0xFF).toString(16);
        var blue = (argb & 0xFF).toString(16);
        if (alpha.length == 1)
            alpha = "0" + alpha;
        if (red.length == 1)
            red = "0" + red;
        if (green.length == 1)
            green = "0" + green;
        if (blue.length == 1)
            blue = "0" + blue;
        return "#" + alpha + red + green + blue;
    }
    static convertFromHtmlColor(str, hasAlpha) {
        if (str.length < 1)
            return 0;
        if (str.charAt(0) == "#")
            str = str.substr(1);
        if (str.length == 8)
            return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16);
        else if (hasAlpha)
            return 0xFF000000 + parseInt(str, 16);
        else
            return parseInt(str, 16);
    }
    static displayObjectToGObject(obj) {
        // public static displayObjectToGObject(obj: Laya.Node): GObject {
        // while (obj && !(obj instanceof Laya.Stage)) {
        //     if (obj["$owner"])
        //         return obj["$owner"];
        //     obj = obj.parent;
        // }
        // TODO
        throw new Error("TODO");
    }
    static encodeHTML(str) {
        if (!str)
            return "";
        else
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                .replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    }
    static clamp(value, min, max) {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    }
    static clamp01(value) {
        if (isNaN(value))
            value = 0;
        else if (value > 1)
            value = 1;
        else if (value < 0)
            value = 0;
        return value;
    }
    static lerp(start, end, percent) {
        return (start + percent * (end - start));
    }
    static repeat(t, length) {
        return t - Math.floor(t / length) * length;
    }
    static distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    // public static setColorFilter(obj: Laya.Sprite, color?: string | number[] | boolean): void {
    static setColorFilter(obj, color) {
        // TODO
        throw new Error("TODO");
        // var filter: Laya.ColorFilter = (<any>obj).$_colorFilter_; //cached instance
        // var filters: any[] = obj.filters;
        // var toApplyColor: any;
        // var toApplyGray: boolean;
        // var tp: string = typeof (color);
        // if (tp == "boolean") //gray
        // {
        //     toApplyColor = filter ? (<any>filter).$_color_ : null;
        //     toApplyGray = <boolean>color;
        // }
        // else {
        //     if (tp == "string") {
        //         var arr: any[] = Laya.ColorUtils.create(color).arrColor;
        //         if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1)
        //             color = null;
        //         else {
        //             color = [arr[0], 0, 0, 0, 0,
        //                 0, arr[1], 0, 0, 0,
        //                 0, 0, arr[2], 0, 0,
        //                 0, 0, 0, 1, 0];
        //         }
        //     }
        //     toApplyColor = color;
        //     toApplyGray = filter ? (<any>filter).$_grayed_ : false;
        // }
        // if ((!toApplyColor && toApplyColor != 0) && !toApplyGray) {
        //     if (filters && filter) {
        //         let i: number = filters.indexOf(filter);
        //         if (i != -1) {
        //             filters.splice(i, 1);
        //             if (filters.length > 0)
        //                 obj.filters = filters;
        //             else
        //                 obj.filters = null;
        //         }
        //     }
        //     return;
        // }
        // if (!filter) {
        //     filter = new Laya.ColorFilter();
        //     (<any>obj).$_colorFilter_ = filter;
        // }
        // if (!filters)
        //     filters = [filter];
        // else {
        //     let i: number = filters.indexOf(filter);
        //     if (i == -1)
        //         filters.push(filter);
        // }
        // obj.filters = filters;
        // (<any>filter).$_color_ = toApplyColor;
        // (<any>filter).$_grayed_ = toApplyGray;
        // filter.reset();
        // if (toApplyGray)
        //     filter.gray();
        // else if (toApplyColor.length == 20)
        //     filter.setByMatrix(toApplyColor);
        // else
        //     filter.setByMatrix(getColorMatrix(toApplyColor[0], toApplyColor[1], toApplyColor[2], toApplyColor[3]));
    }
}
new ColorMatrix();

var CurveType;
(function (CurveType) {
    CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
    CurveType[CurveType["Bezier"] = 1] = "Bezier";
    CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
    CurveType[CurveType["Straight"] = 3] = "Straight";
})(CurveType || (CurveType = {}));
class GPathPoint {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.control1_x = 0;
        this.control1_y = 0;
        this.control2_x = 0;
        this.control2_y = 0;
        this.curveType = 0;
    }
    static newPoint(x = 0, y = 0, curveType = 0) {
        var pt = new GPathPoint();
        pt.x = x;
        pt.y = y;
        pt.control1_x = 0;
        pt.control1_y = 0;
        pt.control2_x = 0;
        pt.control2_y = 0;
        pt.curveType = curveType;
        return pt;
    }
    static newBezierPoint(x = 0, y = 0, control1_x = 0, control1_y = 0) {
        var pt = new GPathPoint();
        pt.x = x;
        pt.y = y;
        pt.control1_x = control1_x;
        pt.control1_y = control1_y;
        pt.control2_x = 0;
        pt.control2_y = 0;
        pt.curveType = CurveType.Bezier;
        return pt;
    }
    static newCubicBezierPoint(x = 0, y = 0, control1_x = 0, control1_y = 0, control2_x = 0, control2_y = 0) {
        var pt = new GPathPoint();
        pt.x = x;
        pt.y = y;
        pt.control1_x = control1_x;
        pt.control1_y = control1_y;
        pt.control2_x = control2_x;
        pt.control2_y = control2_y;
        pt.curveType = CurveType.CubicBezier;
        return pt;
    }
    clone() {
        var ret = new GPathPoint();
        ret.x = this.x;
        ret.y = this.y;
        ret.control1_x = this.control1_x;
        ret.control1_y = this.control1_y;
        ret.control2_x = this.control2_x;
        ret.control2_y = this.control2_y;
        ret.curveType = this.curveType;
        return ret;
    }
}

class GPath {
    constructor() {
        this._segments = new Array();
        this._points = new Array();
    }
    get length() {
        return this._fullLength;
    }
    create(pt1, pt2, pt3, pt4) {
        var points;
        if (Array.isArray(pt1))
            points = pt1;
        else {
            points = new Array();
            points.push(pt1);
            points.push(pt2);
            if (pt3)
                points.push(pt3);
            if (pt4)
                points.push(pt4);
        }
        this._segments.length = 0;
        this._points.length = 0;
        this._fullLength = 0;
        var cnt = points.length;
        if (cnt == 0)
            return;
        var splinePoints = s_points;
        splinePoints.length = 0;
        var prev = points[0];
        if (prev.curveType == CurveType.CRSpline)
            splinePoints.push(new Phaser.Geom.Point(prev.x, prev.y));
        for (var i = 1; i < cnt; i++) {
            var current = points[i];
            if (prev.curveType != CurveType.CRSpline) {
                var seg = {};
                seg.type = prev.curveType;
                seg.ptStart = this._points.length;
                if (prev.curveType == CurveType.Straight) {
                    seg.ptCount = 2;
                    this._points.push(new Phaser.Geom.Point(prev.x, prev.y));
                    this._points.push(new Phaser.Geom.Point(current.x, current.y));
                }
                else if (prev.curveType == CurveType.Bezier) {
                    seg.ptCount = 3;
                    this._points.push(new Phaser.Geom.Point(prev.x, prev.y));
                    this._points.push(new Phaser.Geom.Point(current.x, current.y));
                    this._points.push(new Phaser.Geom.Point(prev.control1_x, prev.control1_y));
                }
                else if (prev.curveType == CurveType.CubicBezier) {
                    seg.ptCount = 4;
                    this._points.push(new Phaser.Geom.Point(prev.x, prev.y));
                    this._points.push(new Phaser.Geom.Point(current.x, current.y));
                    this._points.push(new Phaser.Geom.Point(prev.control1_x, prev.control1_y));
                    this._points.push(new Phaser.Geom.Point(prev.control2_x, prev.control2_y));
                }
                seg.length = ToolSet.distance(prev.x, prev.y, current.x, current.y);
                this._fullLength += seg.length;
                this._segments.push(seg);
            }
            if (current.curveType != CurveType.CRSpline) {
                if (splinePoints.length > 0) {
                    splinePoints.push(new Phaser.Geom.Point(current.x, current.y));
                    this.createSplineSegment();
                }
            }
            else
                splinePoints.push(new Phaser.Geom.Point(current.x, current.y));
            prev = current;
        }
        if (splinePoints.length > 1)
            this.createSplineSegment();
    }
    createSplineSegment() {
        var splinePoints = s_points;
        var cnt = splinePoints.length;
        splinePoints.splice(0, 0, splinePoints[0]);
        splinePoints.push(splinePoints[cnt]);
        splinePoints.push(splinePoints[cnt]);
        cnt += 3;
        var seg = {};
        seg.type = CurveType.CRSpline;
        seg.ptStart = this._points.length;
        seg.ptCount = cnt;
        this._points = this._points.concat(splinePoints);
        seg.length = 0;
        for (var i = 1; i < cnt; i++) {
            seg.length += ToolSet.distance(splinePoints[i - 1].x, splinePoints[i - 1].y, splinePoints[i].x, splinePoints[i].y);
        }
        this._fullLength += seg.length;
        this._segments.push(seg);
        splinePoints.length = 0;
    }
    clear() {
        this._segments.length = 0;
        this._points.length = 0;
    }
    getPointAt(t, result) {
        if (!result)
            result = new Phaser.Geom.Point();
        else
            result.x = result.y = 0;
        t = ToolSet.clamp01(t);
        var cnt = this._segments.length;
        if (cnt == 0) {
            return result;
        }
        var seg;
        if (t == 1) {
            seg = this._segments[cnt - 1];
            if (seg.type == CurveType.Straight) {
                result.x = ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                result.y = ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                return result;
            }
            else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                return this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
            else
                return this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
        }
        var len = t * this._fullLength;
        for (var i = 0; i < cnt; i++) {
            seg = this._segments[i];
            len -= seg.length;
            if (len < 0) {
                t = 1 + len / seg.length;
                if (seg.type == CurveType.Straight) {
                    result.x = ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                    result.y = ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                }
                else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                    result = this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                else
                    result = this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                break;
            }
        }
        return result;
    }
    get segmentCount() {
        return this._segments.length;
    }
    getAnchorsInSegment(segmentIndex, points) {
        if (points == null)
            points = new Array();
        var seg = this._segments[segmentIndex];
        for (var i = 0; i < seg.ptCount; i++)
            points.push(new Phaser.Geom.Point(this._points[seg.ptStart + i].x, this._points[seg.ptStart + i].y));
        return points;
    }
    getPointsInSegment(segmentIndex, t0, t1, points, ts, pointDensity) {
        if (points == null)
            points = new Array();
        if (!pointDensity || isNaN(pointDensity))
            pointDensity = 0.1;
        if (ts)
            ts.push(t0);
        var seg = this._segments[segmentIndex];
        if (seg.type == CurveType.Straight) {
            points.push(new Phaser.Geom.Point(ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
            points.push(new Phaser.Geom.Point(ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
        }
        else {
            var func;
            if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                func = this.onBezierCurve;
            else
                func = this.onCRSplineCurve;
            points.push(func.call(this, seg.ptStart, seg.ptCount, t0, new Phaser.Geom.Point()));
            var SmoothAmount = Math.min(seg.length * pointDensity, 50);
            for (var j = 0; j <= SmoothAmount; j++) {
                var t = j / SmoothAmount;
                if (t > t0 && t < t1) {
                    points.push(func.call(this, seg.ptStart, seg.ptCount, t, new Phaser.Geom.Point()));
                    if (ts)
                        ts.push(t);
                }
            }
            points.push(func.call(this, seg.ptStart, seg.ptCount, t1, new Phaser.Geom.Point()));
        }
        if (ts)
            ts.push(t1);
        return points;
    }
    getAllPoints(points, ts, pointDensity) {
        if (points == null)
            points = new Array();
        if (!pointDensity || isNaN(pointDensity))
            pointDensity = 0.1;
        var cnt = this._segments.length;
        for (var i = 0; i < cnt; i++)
            this.getPointsInSegment(i, 0, 1, points, ts, pointDensity);
        return points;
    }
    onCRSplineCurve(ptStart, ptCount, t, result) {
        var adjustedIndex = Math.floor(t * (ptCount - 4)) + ptStart; //Since the equation works with 4 points, we adjust the starting point depending on t to return a point on the specific segment
        var p0x = this._points[adjustedIndex].x;
        var p0y = this._points[adjustedIndex].y;
        var p1x = this._points[adjustedIndex + 1].x;
        var p1y = this._points[adjustedIndex + 1].y;
        var p2x = this._points[adjustedIndex + 2].x;
        var p2y = this._points[adjustedIndex + 2].y;
        var p3x = this._points[adjustedIndex + 3].x;
        var p3y = this._points[adjustedIndex + 3].y;
        var adjustedT = (t == 1) ? 1 : ToolSet.repeat(t * (ptCount - 4), 1); // Then we adjust t to be that value on that new piece of segment... for t == 1f don't use repeat (that would return 0f);
        var t0 = ((-adjustedT + 2) * adjustedT - 1) * adjustedT * 0.5;
        var t1 = (((3 * adjustedT - 5) * adjustedT) * adjustedT + 2) * 0.5;
        var t2 = ((-3 * adjustedT + 4) * adjustedT + 1) * adjustedT * 0.5;
        var t3 = ((adjustedT - 1) * adjustedT * adjustedT) * 0.5;
        result.x = p0x * t0 + p1x * t1 + p2x * t2 + p3x * t3;
        result.y = p0y * t0 + p1y * t1 + p2y * t2 + p3y * t3;
        return result;
    }
    onBezierCurve(ptStart, ptCount, t, result) {
        var t2 = 1 - t;
        var p0x = this._points[ptStart].x;
        var p0y = this._points[ptStart].y;
        var p1x = this._points[ptStart + 1].x;
        var p1y = this._points[ptStart + 1].y;
        var cp0x = this._points[ptStart + 2].x;
        var cp0y = this._points[ptStart + 2].y;
        if (ptCount == 4) {
            var cp1x = this._points[ptStart + 3].x;
            var cp1y = this._points[ptStart + 3].y;
            result.x = t2 * t2 * t2 * p0x + 3 * t2 * t2 * t * cp0x + 3 * t2 * t * t * cp1x + t * t * t * p1x;
            result.y = t2 * t2 * t2 * p0y + 3 * t2 * t2 * t * cp0y + 3 * t2 * t * t * cp1y + t * t * t * p1y;
        }
        else {
            result.x = t2 * t2 * p0x + 2 * t2 * t * cp0x + t * t * p1x;
            result.y = t2 * t2 * p0y + 2 * t2 * t * cp0y + t * t * p1y;
        }
        return result;
    }
}
var s_points = new Array();

class TweenValue {
    constructor() {
        this.x = this.y = this.z = this.w = 0;
    }
    get color() {
        return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
    }
    set color(value) {
        this.x = (value & 0xFF0000) >> 16;
        this.y = (value & 0x00FF00) >> 8;
        this.z = (value & 0x0000FF);
        this.w = (value & 0xFF000000) >> 24;
    }
    getField(index) {
        switch (index) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("Index out of bounds: " + index);
        }
    }
    setField(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            case 2:
                this.z = value;
                break;
            case 3:
                this.w = value;
                break;
            default:
                throw new Error("Index out of bounds: " + index);
        }
    }
    setZero() {
        this.x = this.y = this.z = this.w = 0;
    }
}

class GTweener {
    constructor() {
        this._startValue = new TweenValue();
        this._endValue = new TweenValue();
        this._value = new TweenValue();
        this._deltaValue = new TweenValue();
        this._reset();
    }
    setDelay(value) {
        this._delay = value;
        return this;
    }
    get delay() {
        return this._delay;
    }
    setDuration(value) {
        this._duration = value;
        return this;
    }
    get duration() {
        return this._duration;
    }
    setBreakpoint(value) {
        this._breakpoint = value;
        return this;
    }
    setEase(value) {
        this._easeType = value;
        return this;
    }
    setEasePeriod(value) {
        this._easePeriod = value;
        return this;
    }
    setEaseOvershootOrAmplitude(value) {
        this._easeOvershootOrAmplitude = value;
        return this;
    }
    setRepeat(repeat, yoyo = false) {
        this._repeat = repeat;
        this._yoyo = yoyo;
        return this;
    }
    get repeat() {
        return this._repeat;
    }
    setTimeScale(value) {
        this._timeScale = value;
        return this;
    }
    setSnapping(value) {
        this._snapping = value;
        return this;
    }
    setTarget(value, propType) {
        this._target = value;
        this._propType = propType;
        return this;
    }
    get target() {
        return this._target;
    }
    setPath(value) {
        this._path = value;
        return this;
    }
    setUserData(value) {
        this._userData = value;
        return this;
    }
    get userData() {
        return this._userData;
    }
    onUpdate(callback, caller) {
        this._onUpdate = callback;
        this._onUpdateCaller = caller;
        return this;
    }
    onStart(callback, caller) {
        this._onStart = callback;
        this._onStartCaller = caller;
        return this;
    }
    onComplete(callback, caller) {
        this._onComplete = callback;
        this._onCompleteCaller = caller;
        return this;
    }
    get startValue() {
        return this._startValue;
    }
    get endValue() {
        return this._endValue;
    }
    get value() {
        return this._value;
    }
    get deltaValue() {
        return this._deltaValue;
    }
    get normalizedTime() {
        return this._normalizedTime;
    }
    get completed() {
        return this._ended != 0;
    }
    get allCompleted() {
        return this._ended == 1;
    }
    setPaused(paused) {
        this._paused = paused;
        return this;
    }
    /**
     * seek position of the tween, in seconds.
     */
    seek(time) {
        if (this._killed)
            return;
        this._elapsedTime = time;
        if (this._elapsedTime < this._delay) {
            if (this._started)
                this._elapsedTime = this._delay;
            else
                return;
        }
        this.update();
    }
    kill(complete) {
        if (this._killed)
            return;
        if (complete) {
            if (this._ended == 0) {
                if (this._breakpoint >= 0)
                    this._elapsedTime = this._delay + this._breakpoint;
                else if (this._repeat >= 0)
                    this._elapsedTime = this._delay + this._duration * (this._repeat + 1);
                else
                    this._elapsedTime = this._delay + this._duration * 2;
                this.update();
            }
            this.callCompleteCallback();
        }
        this._killed = true;
    }
    _to(start, end, duration) {
        this._valueSize = 1;
        this._startValue.x = start;
        this._endValue.x = end;
        this._value.x = start;
        this._duration = duration;
        return this;
    }
    _to2(start, start2, end, end2, duration) {
        this._valueSize = 2;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._value.x = start;
        this._value.y = start2;
        this._duration = duration;
        return this;
    }
    _to3(start, start2, start3, end, end2, end3, duration) {
        this._valueSize = 3;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._startValue.z = start3;
        this._endValue.z = end3;
        this._value.x = start;
        this._value.y = start2;
        this._value.z = start3;
        this._duration = duration;
        return this;
    }
    _to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
        this._valueSize = 4;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._startValue.z = start3;
        this._endValue.z = end3;
        this._startValue.w = start4;
        this._endValue.w = end4;
        this._value.x = start;
        this._value.y = start2;
        this._value.z = start3;
        this._value.w = start4;
        this._duration = duration;
        return this;
    }
    _toColor(start, end, duration) {
        this._valueSize = 5;
        this._startValue.color = start;
        this._endValue.color = end;
        this._value.color = start;
        this._duration = duration;
        return this;
    }
    _shake(startX, startY, amplitude, duration) {
        this._valueSize = 6;
        this._startValue.x = startX;
        this._startValue.y = startY;
        this._startValue.w = amplitude;
        this._duration = duration;
        return this;
    }
    _init() {
        this._delay = 0;
        this._duration = 0;
        this._breakpoint = -1;
        this._easeType = EaseType.QuadOut;
        this._timeScale = 1;
        this._easePeriod = 0;
        this._easeOvershootOrAmplitude = 1.70158;
        this._snapping = false;
        this._repeat = 0;
        this._yoyo = false;
        this._valueSize = 0;
        this._started = false;
        this._paused = false;
        this._killed = false;
        this._elapsedTime = 0;
        this._normalizedTime = 0;
        this._ended = 0;
    }
    _reset() {
        this._target = null;
        this._propType = null;
        this._userData = null;
        this._path = null;
        this._onStart = this._onUpdate = this._onComplete = null;
        this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
    }
    _update(dt) {
        if (this._timeScale != 1)
            dt *= this._timeScale;
        if (dt == 0)
            return;
        if (this._ended != 0) //Maybe completed by seek
         {
            this.callCompleteCallback();
            this._killed = true;
            return;
        }
        this._elapsedTime += dt;
        this.update();
        if (this._ended != 0) {
            if (!this._killed) {
                this.callCompleteCallback();
                this._killed = true;
            }
        }
    }
    update() {
        this._ended = 0;
        if (this._valueSize == 0) //DelayedCall
         {
            if (this._elapsedTime >= this._delay + this._duration)
                this._ended = 1;
            return;
        }
        if (!this._started) {
            if (this._elapsedTime < this._delay)
                return;
            this._started = true;
            this.callStartCallback();
            if (this._killed)
                return;
        }
        var reversed = false;
        var tt = this._elapsedTime - this._delay;
        if (this._breakpoint >= 0 && tt >= this._breakpoint) {
            tt = this._breakpoint;
            this._ended = 2;
        }
        if (this._repeat != 0) {
            var round = Math.floor(tt / this._duration);
            tt -= this._duration * round;
            if (this._yoyo)
                reversed = round % 2 == 1;
            if (this._repeat > 0 && this._repeat - round < 0) {
                if (this._yoyo)
                    reversed = this._repeat % 2 == 1;
                tt = this._duration;
                this._ended = 1;
            }
        }
        else if (tt >= this._duration) {
            tt = this._duration;
            this._ended = 1;
        }
        this._normalizedTime = evaluateEase(this._easeType, reversed ? (this._duration - tt) : tt, this._duration, this._easeOvershootOrAmplitude, this._easePeriod);
        this._value.setZero();
        this._deltaValue.setZero();
        if (this._valueSize == 6) {
            if (this._ended == 0) {
                var r = this._startValue.w * (1 - this._normalizedTime);
                var rx = r * (Math.random() > 0.5 ? 1 : -1);
                var ry = r * (Math.random() > 0.5 ? 1 : -1);
                this._deltaValue.x = rx;
                this._deltaValue.y = ry;
                this._value.x = this._startValue.x + rx;
                this._value.y = this._startValue.y + ry;
            }
            else {
                this._value.x = this._startValue.x;
                this._value.y = this._startValue.y;
            }
        }
        else if (this._path) {
            var pt = s_vec2$1;
            this._path.getPointAt(this._normalizedTime, pt);
            if (this._snapping) {
                pt.x = Math.round(pt.x);
                pt.y = Math.round(pt.y);
            }
            this._deltaValue.x = pt.x - this._value.x;
            this._deltaValue.y = pt.y - this._value.y;
            this._value.x = pt.x;
            this._value.y = pt.y;
        }
        else {
            for (var i = 0; i < this._valueSize; i++) {
                var n1 = this._startValue.getField(i);
                var n2 = this._endValue.getField(i);
                var f = n1 + (n2 - n1) * this._normalizedTime;
                if (this._snapping)
                    f = Math.round(f);
                this._deltaValue.setField(i, f - this._value.getField(i));
                this._value.setField(i, f);
            }
        }
        if (this._target && this._propType) {
            if (this._propType instanceof Function) {
                switch (this._valueSize) {
                    case 1:
                        this._propType.call(this._target, this._value.x);
                        break;
                    case 2:
                        this._propType.call(this._target, this._value.x, this._value.y);
                        break;
                    case 3:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z);
                        break;
                    case 4:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);
                        break;
                    case 5:
                        this._propType.call(this._target, this._value.color);
                        break;
                    case 6:
                        this._propType.call(this._target, this._value.x, this._value.y);
                        break;
                }
            }
            else {
                if (this._valueSize == 5)
                    this._target[this._propType] = this._value.color;
                else
                    this._target[this._propType] = this._value.x;
            }
        }
        this.callUpdateCallback();
    }
    callStartCallback() {
        if (this._onStart != null) {
            try {
                this._onStart.call(this._onStartCaller, this);
            }
            catch (err) {
                console.log("FairyGUI: error in start callback > " + err);
            }
        }
    }
    callUpdateCallback() {
        if (this._onUpdate != null) {
            try {
                this._onUpdate.call(this._onUpdateCaller, this);
            }
            catch (err) {
                console.log("FairyGUI: error in update callback > " + err);
            }
        }
    }
    callCompleteCallback() {
        if (this._onComplete != null) {
            try {
                this._onComplete.call(this._onCompleteCaller, this);
            }
            catch (err) {
                console.log("FairyGUI: error in complete callback > " + err);
            }
        }
    }
}
var s_vec2$1 = new Phaser.Geom.Point();

class TweenManager {
    static createTween() {
        {
            // TODO
            throw new Error("TODO");
        }
        var tweener;
    }
    static isTweening(target, propType) {
        if (target == null)
            return false;
        var anyType = !propType;
        for (var i = 0; i < _totalActiveTweens; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType))
                return true;
        }
        return false;
    }
    static killTweens(target, completed, propType) {
        if (target == null)
            return false;
        var flag = false;
        var cnt = _totalActiveTweens;
        var anyType = !propType;
        for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType)) {
                tweener.kill(completed);
                flag = true;
            }
        }
        return flag;
    }
    static getTween(target, propType) {
        if (target == null)
            return null;
        var cnt = _totalActiveTweens;
        var anyType = !propType;
        for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType)) {
                return tweener;
            }
        }
        return null;
    }
    static update() {
        // var dt: number = Laya.timer.delta / 1000;
        throw new Error("TODO");
        // var cnt: number = _totalActiveTweens;
        // var freePosStart: number = -1;
        // for (var i: number = 0; i < cnt; i++) {
        //     var tweener: GTweener = _activeTweens[i];
        //     if (tweener == null) {
        //         if (freePosStart == -1)
        //             freePosStart = i;
        //     }
        //     else if (tweener._killed) {
        //         tweener._reset();
        //         _tweenerPool.push(tweener);
        //         _activeTweens[i] = null;
        //         if (freePosStart == -1)
        //             freePosStart = i;
        //     }
        //     else {
        //         if ((tweener._target instanceof GObject) && tweener._target.isDisposed)
        //             tweener._killed = true;
        //         else if (!tweener._paused)
        //             tweener._update(dt);
        //         if (freePosStart != -1) {
        //             _activeTweens[freePosStart] = tweener;
        //             _activeTweens[i] = null;
        //             freePosStart++;
        //         }
        //     }
        // }
        // if (freePosStart >= 0) {
        //     if (_totalActiveTweens != cnt) //new tweens added
        //     {
        //         var j: number = cnt;
        //         cnt = _totalActiveTweens - cnt;
        //         for (i = 0; i < cnt; i++)
        //             _activeTweens[freePosStart++] = _activeTweens[j++];
        //     }
        //     _totalActiveTweens = freePosStart;
        // }
    }
}
var _activeTweens = [];
var _totalActiveTweens = 0;

class GTween {
    static to(start, end, duration) {
        return TweenManager.createTween()._to(start, end, duration);
    }
    static to2(start, start2, end, end2, duration) {
        return TweenManager.createTween()._to2(start, start2, end, end2, duration);
    }
    static to3(start, start2, start3, end, end2, end3, duration) {
        return TweenManager.createTween()._to3(start, start2, start3, end, end2, end3, duration);
    }
    static to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
        return TweenManager.createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration);
    }
    static toColor(start, end, duration) {
        return TweenManager.createTween()._toColor(start, end, duration);
    }
    static delayedCall(delay) {
        return TweenManager.createTween().setDelay(delay);
    }
    static shake(startX, startY, amplitude, duration) {
        return TweenManager.createTween()._shake(startX, startY, amplitude, duration);
    }
    static isTweening(target, propType) {
        return TweenManager.isTweening(target, propType);
    }
    static kill(target, complete, propType) {
        TweenManager.killTweens(target, complete, propType);
    }
    static getTween(target, propType) {
        return TweenManager.getTween(target, propType);
    }
}
GTween.catchCallbackExceptions = true;

class GearBase {
    dispose() {
        if (this._tweenConfig && this._tweenConfig._tweener) {
            this._tweenConfig._tweener.kill();
            this._tweenConfig._tweener = null;
        }
    }
    get controller() {
        return this._controller;
    }
    set controller(val) {
        if (val != this._controller) {
            this._controller = val;
            if (this._controller)
                this.init();
        }
    }
    get tweenConfig() {
        if (!this._tweenConfig)
            this._tweenConfig = new GearTweenConfig();
        return this._tweenConfig;
    }
    setup(buffer) {
        this._controller = this._owner.parent.getControllerAt(buffer.readShort());
        this.init();
        var i;
        var page;
        var cnt = buffer.readShort();
        if ("pages" in this) {
            this.pages = buffer.readSArray(cnt);
        }
        else {
            for (i = 0; i < cnt; i++) {
                page = buffer.readS();
                if (page == null)
                    continue;
                this.addStatus(page, buffer);
            }
            if (buffer.readBool())
                this.addStatus(null, buffer);
        }
        if (buffer.readBool()) {
            this._tweenConfig = new GearTweenConfig();
            this._tweenConfig.easeType = buffer.readByte();
            this._tweenConfig.duration = buffer.readFloat();
            this._tweenConfig.delay = buffer.readFloat();
        }
        if (buffer.version >= 2) {
            if ("positionsInPercent" in this) {
                if (buffer.readBool()) {
                    this.positionsInPercent = true;
                    for (i = 0; i < cnt; i++) {
                        page = buffer.readS();
                        if (page == null)
                            continue;
                        this.addExtStatus(page, buffer);
                    }
                    if (buffer.readBool())
                        this.addExtStatus(null, buffer);
                }
            }
            else if ("condition" in this)
                this.condition = buffer.readByte();
        }
    }
    updateFromRelations(dx, dy) {
    }
    addStatus(pageId, buffer) {
    }
    init() {
    }
    apply() {
    }
    updateState() {
    }
}
class GearTweenConfig {
    constructor() {
        this.tween = true;
        this.easeType = EaseType.QuadOut;
        this.duration = 0.3;
        this.delay = 0;
    }
}

class GearDisplay2 extends GearBase {
    constructor() {
        super(...arguments);
        this._visible = 0;
    }
    init() {
        this.pages = null;
    }
    apply() {
        if (this.pages == null || this.pages.length == 0
            || this.pages.indexOf(this._controller.selectedPageId) != -1)
            this._visible = 1;
        else
            this._visible = 0;
    }
    evaluate(connected) {
        var v = this._controller == null || this._visible > 0;
        if (this.condition == 0)
            v = v && connected;
        else
            v = v || connected;
        return v;
    }
}

class GearDisplay extends GearBase {
    init() {
        this.pages = null;
    }
    apply() {
        this._displayLockToken++;
        if (this._displayLockToken == 0)
            this._displayLockToken = 1;
        if (this.pages == null || this.pages.length == 0
            || this.pages.indexOf(this._controller.selectedPageId) != -1)
            this._visible = 1;
        else
            this._visible = 0;
    }
    addLock() {
        this._visible++;
        return this._displayLockToken;
    }
    releaseLock(token) {
        if (token == this._displayLockToken)
            this._visible--;
    }
    get connected() {
        return this._controller == null || this._visible > 0;
    }
}

class UIConfig {
    constructor() {
    }
}
//Default font name
UIConfig.defaultFont = "SimSun";
//When a modal window is in front, the background becomes dark.
UIConfig.modalLayerColor = "rgba(33,33,33,0.2)";
UIConfig.buttonSoundVolumeScale = 1;
//Scrolling step in pixels
UIConfig.defaultScrollStep = 25;
//Deceleration ratio of scrollpane when its in touch dragging.
UIConfig.defaultScrollDecelerationRate = 0.967;
//Default scrollbar display mode. Recommened visible for Desktop and Auto for mobile.
UIConfig.defaultScrollBarDisplay = ScrollBarDisplayType.Visible;
//Allow dragging the content to scroll. Recommeded true for mobile.
UIConfig.defaultScrollTouchEffect = true;
//The "rebound" effect in the scolling container. Recommeded true for mobile.
UIConfig.defaultScrollBounceEffect = true;
/**
  * 当滚动容器设置为“贴近ITEM”时，判定贴近到哪一个ITEM的滚动距离阀值。
  */
UIConfig.defaultScrollSnappingThreshold = 0.1;
/**
  * 当滚动容器设置为“页面模式”时，判定翻到哪一页的滚动距离阀值。
  */
UIConfig.defaultScrollPagingThreshold = 0.3;
//Max items displayed in combobox without scrolling.
UIConfig.defaultComboBoxVisibleItemCount = 10;
// Pixel offsets of finger to trigger scrolling.
UIConfig.touchScrollSensitivity = 20;
// Pixel offsets of finger to trigger dragging.
UIConfig.touchDragSensitivity = 10;
// Pixel offsets of mouse pointer to trigger dragging.
UIConfig.clickDragSensitivity = 2;
// When click the window, brings to front automatically.
UIConfig.bringWindowToFrontOnClick = true;
UIConfig.frameTimeForAsyncUIConstruction = 2;
UIConfig.textureLinearSampling = true;
UIConfig.packageFileExtension = "fui";

class DisplayObjectEvent {
}
DisplayObjectEvent.XY_CHANGED = "__xyChanged";
DisplayObjectEvent.SIZE_CHANGED = "__sizeChanged";
DisplayObjectEvent.VISIBLE_CHANGED = "__visibleChanged";
DisplayObjectEvent.SIZE_DELAY_CHANGE = "__sizeDelayChange";
DisplayObjectEvent.MOUSE_WHEEL = "__mouseWheel";
class InteractiveEvent {
}
InteractiveEvent.POINTER_DOWN = "pointerdown";
InteractiveEvent.POINTER_UP = "pointerup";
InteractiveEvent.POINTER_OVER = "pointerover";
InteractiveEvent.POINTER_OUT = "pointerout";
InteractiveEvent.POINTER_MOVE = "pointermove";
InteractiveEvent.GAMEOBJECT_DOWN = "gameobjectdown";
InteractiveEvent.GAMEOBJECT_UP = "gameobjectup";
InteractiveEvent.GAMEOBJECT_OVER = "gameobjectover";
InteractiveEvent.GAMEOBJECT_OUT = "gameobjectout";
InteractiveEvent.GAMEOBJECT_MOVE = "gameobjectmove";

class Events {
    static createEvent(type, target, source) {
        // this.$event.setTo(type, target, source ? (source.target || target) : target);
        // this.$event.touchId = source ? (source.touchId || 0) : 0;
        // this.$event.nativeEvent = source;
        // this.$event["_stoped"] = false;
        throw new Error("TODO");
    }
    static dispatch(type, target, source) {
        // target.event(type, this.createEvent(type, target, source));
        throw new Error("TODO");
    }
}
Events.STATE_CHANGED = "fui_state_changed";
Events.XY_CHANGED = "fui_xy_changed";
Events.SIZE_CHANGED = "fui_size_changed";
Events.SIZE_DELAY_CHANGE = "fui_size_delay_change";
Events.CLICK_ITEM = "fui_click_item";
Events.SCROLL = "fui_scroll";
Events.SCROLL_END = "fui_scroll_end";
Events.DROP = "fui_drop";
Events.DRAG_START = "fui_drag_start";
Events.DRAG_MOVE = "fui_drag_move";
Events.DRAG_END = "fui_drag_end";
Events.PULL_DOWN_RELEASE = "fui_pull_down_release";
Events.PULL_UP_RELEASE = "fui_pull_up_release";
Events.GEAR_STOP = "fui_gear_stop";
Events.$event = new InteractiveEvent();

class RelationItem {
    constructor(owner) {
        this._owner = owner;
        this._defs = new Array();
    }
    get owner() {
        return this._owner;
    }
    set target(value) {
        if (this._target != value) {
            if (this._target)
                this.releaseRefTarget();
            this._target = value;
            if (this._target)
                this.addRefTarget();
        }
    }
    get target() {
        return this._target;
    }
    add(relationType, usePercent) {
        if (relationType == RelationType.Size) {
            this.add(RelationType.Width, usePercent);
            this.add(RelationType.Height, usePercent);
            return;
        }
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            if (this._defs[i].type == relationType)
                return;
        }
        this.internalAdd(relationType, usePercent);
    }
    internalAdd(relationType, usePercent) {
        if (relationType == RelationType.Size) {
            this.internalAdd(RelationType.Width, usePercent);
            this.internalAdd(RelationType.Height, usePercent);
            return;
        }
        var info = new RelationDef();
        info.percent = usePercent;
        info.type = relationType;
        info.axis = (relationType <= RelationType.Right_Right || relationType == RelationType.Width || relationType >= RelationType.LeftExt_Left && relationType <= RelationType.RightExt_Right) ? 0 : 1;
        this._defs.push(info);
    }
    remove(relationType) {
        if (relationType == RelationType.Size) {
            this.remove(RelationType.Width);
            this.remove(RelationType.Height);
            return;
        }
        var dc = this._defs.length;
        for (var k = 0; k < dc; k++) {
            if (this._defs[k].type == relationType) {
                this._defs.splice(k, 1);
                break;
            }
        }
    }
    copyFrom(source) {
        this._target = source.target;
        this._defs.length = 0;
        var cnt = source._defs.length;
        for (var i = 0; i < cnt; i++) {
            var info = source._defs[i];
            var info2 = new RelationDef();
            info2.copyFrom(info);
            this._defs.push(info2);
        }
    }
    dispose() {
        if (this._target) {
            this.releaseRefTarget();
            this._target = null;
        }
    }
    get isEmpty() {
        return this._defs.length == 0;
    }
    applyOnSelfResized(dWidth, dHeight, applyPivot) {
        var cnt = this._defs.length;
        if (cnt == 0)
            return;
        var ox = this._owner.x;
        var oy = this._owner.y;
        for (var i = 0; i < cnt; i++) {
            var info = this._defs[i];
            switch (info.type) {
                case RelationType.Center_Center:
                    this._owner.x -= (0.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                    break;
                case RelationType.Right_Center:
                case RelationType.Right_Left:
                case RelationType.Right_Right:
                    this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                    break;
                case RelationType.Middle_Middle:
                    this._owner.y -= (0.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                    break;
                case RelationType.Bottom_Middle:
                case RelationType.Bottom_Top:
                case RelationType.Bottom_Bottom:
                    this._owner.y -= (1 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                    break;
            }
        }
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
    }
    applyOnXYChanged(info, dx, dy) {
        var tmp;
        switch (info.type) {
            case RelationType.Left_Left:
            case RelationType.Left_Center:
            case RelationType.Left_Right:
            case RelationType.Center_Center:
            case RelationType.Right_Left:
            case RelationType.Right_Center:
            case RelationType.Right_Right:
                this._owner.x += dx;
                break;
            case RelationType.Top_Top:
            case RelationType.Top_Middle:
            case RelationType.Top_Bottom:
            case RelationType.Middle_Middle:
            case RelationType.Bottom_Top:
            case RelationType.Bottom_Middle:
            case RelationType.Bottom_Bottom:
                this._owner.y += dy;
                break;
            case RelationType.Width:
            case RelationType.Height:
                break;
            case RelationType.LeftExt_Left:
            case RelationType.LeftExt_Right:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.xMin;
                    this._owner.width = this._owner._rawWidth - dx;
                    this._owner.xMin = tmp + dx;
                }
                else
                    this._owner.width = this._owner._rawWidth - dx;
                break;
            case RelationType.RightExt_Left:
            case RelationType.RightExt_Right:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.xMin;
                    this._owner.width = this._owner._rawWidth + dx;
                    this._owner.xMin = tmp;
                }
                else
                    this._owner.width = this._owner._rawWidth + dx;
                break;
            case RelationType.TopExt_Top:
            case RelationType.TopExt_Bottom:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.yMin;
                    this._owner.height = this._owner._rawHeight - dy;
                    this._owner.yMin = tmp + dy;
                }
                else
                    this._owner.height = this._owner._rawHeight - dy;
                break;
            case RelationType.BottomExt_Top:
            case RelationType.BottomExt_Bottom:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.yMin;
                    this._owner.height = this._owner._rawHeight + dy;
                    this._owner.yMin = tmp;
                }
                else
                    this._owner.height = this._owner._rawHeight + dy;
                break;
        }
    }
    applyOnSizeChanged(info) {
        var pos = 0, pivot = 0, delta = 0;
        var v, tmp;
        if (info.axis == 0) {
            if (this._target != this._owner.parent) {
                pos = this._target.x;
                if (this._target.pivotAsAnchor)
                    pivot = this._target.pivotX;
            }
            if (info.percent) {
                if (this._targetWidth != 0)
                    delta = this._target._width / this._targetWidth;
            }
            else
                delta = this._target._width - this._targetWidth;
        }
        else {
            if (this._target != this._owner.parent) {
                pos = this._target.y;
                if (this._target.pivotAsAnchor)
                    pivot = this._target.pivotY;
            }
            if (info.percent) {
                if (this._targetHeight != 0)
                    delta = this._target._height / this._targetHeight;
            }
            else
                delta = this._target._height - this._targetHeight;
        }
        switch (info.type) {
            case RelationType.Left_Left:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else if (pivot != 0)
                    this._owner.x += delta * (-pivot);
                break;
            case RelationType.Left_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Left_Right:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else
                    this._owner.x += delta * (1 - pivot);
                break;
            case RelationType.Center_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * 0.5 - pos) * delta - this._owner._rawWidth * 0.5;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Right_Left:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else if (pivot != 0)
                    this._owner.x += delta * (-pivot);
                break;
            case RelationType.Right_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Right_Right:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else
                    this._owner.x += delta * (1 - pivot);
                break;
            case RelationType.Top_Top:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else if (pivot != 0)
                    this._owner.y += delta * (-pivot);
                break;
            case RelationType.Top_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Top_Bottom:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else
                    this._owner.y += delta * (1 - pivot);
                break;
            case RelationType.Middle_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * 0.5 - pos) * delta - this._owner._rawHeight * 0.5;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Bottom_Top:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else if (pivot != 0)
                    this._owner.y += delta * (-pivot);
                break;
            case RelationType.Bottom_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Bottom_Bottom:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else
                    this._owner.y += delta * (1 - pivot);
                break;
            case RelationType.Width:
                if (this._owner._underConstruct && this._owner == this._target.parent)
                    v = this._owner.sourceWidth - this._target.initWidth;
                else
                    v = this._owner._rawWidth - this._targetWidth;
                if (info.percent)
                    v = v * delta;
                if (this._target == this._owner.parent) {
                    if (this._owner.pivotAsAnchor) {
                        tmp = this._owner.xMin;
                        this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                        this._owner.xMin = tmp;
                    }
                    else
                        this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                }
                else
                    this._owner.width = this._target._width + v;
                break;
            case RelationType.Height:
                if (this._owner._underConstruct && this._owner == this._target.parent)
                    v = this._owner.sourceHeight - this._target.initHeight;
                else
                    v = this._owner._rawHeight - this._targetHeight;
                if (info.percent)
                    v = v * delta;
                if (this._target == this._owner.parent) {
                    if (this._owner.pivotAsAnchor) {
                        tmp = this._owner.yMin;
                        this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                        this._owner.yMin = tmp;
                    }
                    else
                        this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                }
                else
                    this._owner.height = this._target._height + v;
                break;
            case RelationType.LeftExt_Left:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (-pivot);
                this._owner.width = this._owner._rawWidth - v;
                this._owner.xMin = tmp + v;
                break;
            case RelationType.LeftExt_Right:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (1 - pivot);
                this._owner.width = this._owner._rawWidth - v;
                this._owner.xMin = tmp + v;
                break;
            case RelationType.RightExt_Left:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                else
                    v = delta * (-pivot);
                this._owner.width = this._owner._rawWidth + v;
                this._owner.xMin = tmp;
                break;
            case RelationType.RightExt_Right:
                tmp = this._owner.xMin;
                if (info.percent) {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.width = pos + this._target._width - this._target._width * pivot +
                                (this._owner.sourceWidth - pos - this._target.initWidth + this._target.initWidth * pivot) * delta;
                        else
                            this._owner.width = pos + (this._owner._rawWidth - pos) * delta;
                    }
                    else {
                        v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                        this._owner.width = this._owner._rawWidth + v;
                        this._owner.xMin = tmp;
                    }
                }
                else {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - pivot);
                        else
                            this._owner.width = this._owner._rawWidth + delta * (1 - pivot);
                    }
                    else {
                        v = delta * (1 - pivot);
                        this._owner.width = this._owner._rawWidth + v;
                        this._owner.xMin = tmp;
                    }
                }
                break;
            case RelationType.TopExt_Top:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (-pivot);
                this._owner.height = this._owner._rawHeight - v;
                this._owner.yMin = tmp + v;
                break;
            case RelationType.TopExt_Bottom:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (1 - pivot);
                this._owner.height = this._owner._rawHeight - v;
                this._owner.yMin = tmp + v;
                break;
            case RelationType.BottomExt_Top:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                else
                    v = delta * (-pivot);
                this._owner.height = this._owner._rawHeight + v;
                this._owner.yMin = tmp;
                break;
            case RelationType.BottomExt_Bottom:
                tmp = this._owner.yMin;
                if (info.percent) {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.height = pos + this._target._height - this._target._height * pivot +
                                (this._owner.sourceHeight - pos - this._target.initHeight + this._target.initHeight * pivot) * delta;
                        else
                            this._owner.height = pos + (this._owner._rawHeight - pos) * delta;
                    }
                    else {
                        v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                        this._owner.height = this._owner._rawHeight + v;
                        this._owner.yMin = tmp;
                    }
                }
                else {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - pivot);
                        else
                            this._owner.height = this._owner._rawHeight + delta * (1 - pivot);
                    }
                    else {
                        v = delta * (1 - pivot);
                        this._owner.height = this._owner._rawHeight + v;
                        this._owner.yMin = tmp;
                    }
                }
                break;
        }
    }
    addRefTarget() {
        throw new Error("TODO");
        // if (this._target != this._owner.parent)
        //     this._target.on(Events.XY_CHANGED, this, this.__targetXYChanged);
        // this._target.on(Events.SIZE_CHANGED, this, this.__targetSizeChanged);
        // this._target.on(Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange);
        // this._targetX = this._target.x;
        // this._targetY = this._target.y;
        // this._targetWidth = this._target._width;
        // this._targetHeight = this._target._height;
    }
    releaseRefTarget() {
        throw new Error("TODO");
        // if (this._target.displayObject == null)
        //     return;
        // this._target.off(Events.XY_CHANGED, this, this.__targetXYChanged);
        // this._target.off(Events.SIZE_CHANGED, this, this.__targetSizeChanged);
        // this._target.off(Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange);
    }
    __targetXYChanged() {
        if (this._owner.relations.handling != null || this._owner.group != null && this._owner.group._updating) {
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            return;
        }
        this._owner.relations.handling = this._target;
        var ox = this._owner.x;
        var oy = this._owner.y;
        var dx = this._target.x - this._targetX;
        var dy = this._target.y - this._targetY;
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            this.applyOnXYChanged(this._defs[i], dx, dy);
        }
        this._targetX = this._target.x;
        this._targetY = this._target.y;
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
        this._owner.relations.handling = null;
    }
    __targetSizeChanged() {
        if (this._owner.relations.sizeDirty)
            this._owner.relations.ensureRelationsSizeCorrect();
        if (this._owner.relations.handling != null) {
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
            return;
        }
        this._owner.relations.handling = this._target;
        var ox = this._owner.x;
        var oy = this._owner.y;
        var ow = this._owner._rawWidth;
        var oh = this._owner._rawHeight;
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            this.applyOnSizeChanged(this._defs[i]);
        }
        this._targetWidth = this._target._width;
        this._targetHeight = this._target._height;
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
        if (ow != this._owner._rawWidth || oh != this._owner._rawHeight) {
            ow = this._owner._rawWidth - ow;
            oh = this._owner._rawHeight - oh;
            this._owner.updateGearFromRelations(2, ow, oh);
        }
        this._owner.relations.handling = null;
    }
    __targetSizeWillChange() {
        this._owner.relations.sizeDirty = true;
    }
}
class RelationDef {
    constructor() {
    }
    copyFrom(source) {
        this.percent = source.percent;
        this.type = source.type;
        this.axis = source.axis;
    }
}

class Relations {
    constructor(owner) {
        this._owner = owner;
        this._items = [];
    }
    add(target, relationType, usePercent) {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            if (item.target == target) {
                item.add(relationType, usePercent);
                return;
            }
        }
        var newItem = new RelationItem(this._owner);
        newItem.target = target;
        newItem.add(relationType, usePercent);
        this._items.push(newItem);
    }
    remove(target, relationType) {
        relationType = relationType || 0;
        var cnt = this._items.length;
        var i = 0;
        while (i < cnt) {
            var item = this._items[i];
            if (item.target == target) {
                item.remove(relationType);
                if (item.isEmpty) {
                    item.dispose();
                    this._items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
            else
                i++;
        }
    }
    contains(target) {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            if (item.target == target)
                return true;
        }
        return false;
    }
    clearFor(target) {
        var cnt = this._items.length;
        var i = 0;
        while (i < cnt) {
            var item = this._items[i];
            if (item.target == target) {
                item.dispose();
                this._items.splice(i, 1);
                cnt--;
            }
            else
                i++;
        }
    }
    clearAll() {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.dispose();
        }
        this._items.length = 0;
    }
    copyFrom(source) {
        this.clearAll();
        var arr = source._items;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            var ri = arr[i];
            var item = new RelationItem(this._owner);
            item.copyFrom(ri);
            this._items.push(item);
        }
    }
    dispose() {
        this.clearAll();
    }
    onOwnerSizeChanged(dWidth, dHeight, applyPivot) {
        if (this._items.length == 0)
            return;
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.applyOnSelfResized(dWidth, dHeight, applyPivot);
        }
    }
    ensureRelationsSizeCorrect() {
        if (this._items.length == 0)
            return;
        this.sizeDirty = false;
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.target.ensureSizeCorrect();
        }
    }
    get empty() {
        return this._items.length == 0;
    }
    setup(buffer, parentToChild) {
        var cnt = buffer.readByte();
        var target;
        for (var i = 0; i < cnt; i++) {
            var targetIndex = buffer.readShort();
            if (targetIndex == -1)
                target = this._owner.parent;
            else if (parentToChild)
                target = (this._owner).getChildAt(targetIndex);
            else
                target = this._owner.parent.getChildAt(targetIndex);
            var newItem = new RelationItem(this._owner);
            newItem.target = target;
            this._items.push(newItem);
            var cnt2 = buffer.readByte();
            for (var j = 0; j < cnt2; j++) {
                var rt = buffer.readByte();
                var usePercent = buffer.readBool();
                newItem.internalAdd(rt, usePercent);
            }
        }
    }
}

class GearAnimation extends GearBase {
    init() {
        this._default = {
            playing: this._owner.getProp(ObjectPropID.Playing),
            frame: this._owner.getProp(ObjectPropID.Frame)
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            this._storage[pageId] = gv = {};
        gv.playing = buffer.readBool();
        gv.frame = buffer.readInt();
    }
    apply() {
        this._owner._gearLocked = true;
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            gv = this._default;
        this._owner.setProp(ObjectPropID.Playing, gv.playing);
        this._owner.setProp(ObjectPropID.Frame, gv.frame);
        this._owner._gearLocked = false;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            this._storage[this._controller.selectedPageId] = gv = {};
        gv.playing = this._owner.getProp(ObjectPropID.Playing);
        gv.frame = this._owner.getProp(ObjectPropID.Frame);
    }
}

class GearColor extends GearBase {
    init() {
        this._default = {
            color: this._owner.getProp(ObjectPropID.Color),
            strokeColor: this._owner.getProp(ObjectPropID.OutlineColor)
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            this._storage[pageId] = gv = {};
        gv.color = buffer.readColorS();
        gv.strokeColor = buffer.readColorS();
    }
    apply() {
        this._owner._gearLocked = true;
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            gv = this._default;
        this._owner.setProp(ObjectPropID.Color, gv.color);
        this._owner.setProp(ObjectPropID.OutlineColor, gv.strokeColor);
        this._owner._gearLocked = false;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            this._storage[this._controller.selectedPageId] = gv = {};
        gv.color = this._owner.getProp(ObjectPropID.Color);
        gv.strokeColor = this._owner.getProp(ObjectPropID.OutlineColor);
    }
}

class GearFontSize extends GearBase {
    constructor() {
        super(...arguments);
        this._default = 0;
    }
    init() {
        this._default = this._owner.getProp(ObjectPropID.FontSize);
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (pageId == null)
            this._default = buffer.readInt();
        else
            this._storage[pageId] = buffer.readInt();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data != undefined)
            this._owner.setProp(ObjectPropID.FontSize, data);
        else
            this._owner.setProp(ObjectPropID.FontSize, this._default);
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.getProp(ObjectPropID.FontSize);
    }
}

class GearIcon extends GearBase {
    init() {
        this._default = this._owner.icon;
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (pageId == null)
            this._default = buffer.readS();
        else
            this._storage[pageId] = buffer.readS();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data !== undefined)
            this._owner.icon = data;
        else
            this._owner.icon = this._default;
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.icon;
    }
}

class GearLook extends GearBase {
    init() {
        this._default = {
            alpha: this._owner.alpha,
            rotation: this._owner.rotation,
            grayed: this._owner.grayed,
            touchable: this._owner.touchable
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            this._storage[pageId] = gv = {};
        gv.alpha = buffer.readFloat();
        gv.rotation = buffer.readFloat();
        gv.grayed = buffer.readBool();
        gv.touchable = buffer.readBool();
    }
    apply() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            gv = this._default;
        if (this._tweenConfig && this._tweenConfig.tween && !GearBase.disableAllTweenEffect) {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.touchable = gv.touchable;
            this._owner._gearLocked = false;
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var a = gv.alpha != this._owner.alpha;
            var b = gv.rotation != this._owner.rotation;
            if (a || b) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.touchable = gv.touchable;
            this._owner.alpha = gv.alpha;
            this._owner.rotation = gv.rotation;
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        var flag = tweener.userData;
        this._owner._gearLocked = true;
        if ((flag & 1) != 0)
            this._owner.alpha = tweener.value.x;
        if ((flag & 2) != 0)
            this._owner.rotation = tweener.value.y;
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            this._storage[this._controller.selectedPageId] = gv = {};
        gv.alpha = this._owner.alpha;
        gv.rotation = this._owner.rotation;
        gv.grayed = this._owner.grayed;
        gv.touchable = this._owner.touchable;
    }
}

class GearSize extends GearBase {
    init() {
        this._default = {
            width: this._owner.width,
            height: this._owner.height,
            scaleX: this._owner.scaleX,
            scaleY: this._owner.scaleY
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            this._storage[pageId] = gv = {};
        gv.width = buffer.readInt();
        gv.height = buffer.readInt();
        gv.scaleX = buffer.readFloat();
        gv.scaleY = buffer.readFloat();
    }
    apply() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            gv = this._default;
        if (this._tweenConfig && this._tweenConfig.tween && !GearBase.disableAllTweenEffect) {
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != gv.width || this._tweenConfig._tweener.endValue.y != gv.height
                    || this._tweenConfig._tweener.endValue.z != gv.scaleX || this._tweenConfig._tweener.endValue.w != gv.scaleY) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var a = gv.width != this._owner.width || gv.height != this._owner.height;
            var b = gv.scaleX != this._owner.scaleX || gv.scaleY != this._owner.scaleY;
            if (a || b) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, gv.width, gv.height, gv.scaleX, gv.scaleY, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.setSize(gv.width, gv.height, this._owner.getGear(1).controller == this._controller);
            this._owner.setScale(gv.scaleX, gv.scaleY);
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        var flag = tweener.userData;
        this._owner._gearLocked = true;
        if ((flag & 1) != 0)
            this._owner.setSize(tweener.value.x, tweener.value.y, this._owner.checkGearController(1, this._controller));
        if ((flag & 2) != 0)
            this._owner.setScale(tweener.value.z, tweener.value.w);
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            this._storage[this._controller.selectedPageId] = gv = {};
        gv.width = this._owner.width;
        gv.height = this._owner.height;
        gv.scaleX = this._owner.scaleX;
        gv.scaleY = this._owner.scaleY;
    }
    updateFromRelations(dx, dy) {
        if (this._controller == null || this._storage == null)
            return;
        for (var key in this._storage) {
            var gv = this._storage[key];
            gv.width += dx;
            gv.height += dy;
        }
        this._default.width += dx;
        this._default.height += dy;
        this.updateState();
    }
}

class GearText extends GearBase {
    init() {
        this._default = this._owner.text;
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (pageId == null)
            this._default = buffer.readS();
        else
            this._storage[pageId] = buffer.readS();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data !== undefined)
            this._owner.text = data;
        else
            this._owner.text = this._default;
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.text;
    }
}

class GearXY extends GearBase {
    init() {
        this._default = {
            x: this._owner.x,
            y: this._owner.y,
            px: this._owner.x / this._owner.parent.width,
            py: this._owner.y / this._owner.parent.height
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            this._storage[pageId] = gv = {};
        gv.x = buffer.readInt();
        gv.y = buffer.readInt();
    }
    addExtStatus(pageId, buffer) {
        var gv;
        if (pageId == null)
            gv = this._default;
        else
            gv = this._storage[pageId];
        gv.px = buffer.readFloat();
        gv.py = buffer.readFloat();
    }
    apply() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            gv = this._default;
        var ex;
        var ey;
        if (this.positionsInPercent && this._owner.parent) {
            ex = gv.px * this._owner.parent.width;
            ey = gv.py * this._owner.parent.height;
        }
        else {
            ex = gv.x;
            ey = gv.y;
        }
        if (this._tweenConfig && this._tweenConfig.tween && !GearBase.disableAllTweenEffect) {
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var ox = this._owner.x;
            var oy = this._owner.y;
            if (ox != ex || oy != ey) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to2(ox, oy, ex, ey, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.setXY(ex, ey);
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        this._owner._gearLocked = true;
        this._owner.setXY(tweener.value.x, tweener.value.y);
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv)
            this._storage[this._controller.selectedPageId] = gv = {};
        gv.x = this._owner.x;
        gv.y = this._owner.y;
        gv.px = this._owner.x / this._owner.parent.width;
        gv.py = this._owner.y / this._owner.parent.height;
    }
    updateFromRelations(dx, dy) {
        if (this._controller == null || this._storage == null || this.positionsInPercent)
            return;
        for (var key in this._storage) {
            var pt = this._storage[key];
            pt.x += dx;
            pt.y += dy;
        }
        this._default.x += dx;
        this._default.y += dy;
        this.updateState();
    }
}

class DisplayStyle {
    constructor() {
        /**水平缩放 */
        this.scaleX = 1;
        /**垂直缩放 */
        this.scaleY = 1;
        /**水平倾斜角度 */
        this.skewX = 0;
        /**垂直倾斜角度 */
        this.skewY = 0;
        /**X轴心点 */
        this.pivotX = 0;
        /**Y轴心点 */
        this.pivotY = 0;
        /**旋转角度 */
        this.rotation = 0;
        /**透明度 */
        this.alpha = 1;
    }
}
DisplayStyle.EMPTY = new DisplayStyle();
class GObject {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._alpha = 1;
        this._rotation = 0;
        this._visible = true;
        this._dpr = 1;
        // 可交互默认false
        this._touchable = false;
        this._scaleX = 1;
        this._scaleY = 1;
        this._skewX = 0;
        this._skewY = 0;
        this._pivotX = 0;
        this._pivotY = 0;
        this._pivotOffsetX = 0;
        this._pivotOffsetY = 0;
        this._sortingOrder = 0;
        this._internalVisible = true;
        this._yOffset = 0;
        this.minWidth = 0;
        this.minHeight = 0;
        this.maxWidth = 0;
        this.maxHeight = 0;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
        this.initWidth = 0;
        this.initHeight = 0;
        this._width = 0;
        this._height = 0;
        this._rawWidth = 0;
        this._rawHeight = 0;
        this._sizePercentInGroup = 0;
        this._id = "" + _gInstanceCounter++;
        this._name = "";
        // todo 优先传入scene在创建display
        // this.createDisplayObject();
        this._displayStyle = new DisplayStyle();
        this._relations = new Relations(this);
        this._gears = new Array(10);
    }
    get dpr() {
        return this._dpr;
    }
    set dpr(value) {
        this._dpr = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this.setXY(value, this._y);
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this.setXY(this._x, value);
    }
    get scene() {
        return this._scene;
    }
    set scene(value) {
        this._scene = value;
    }
    get timeEvent() {
        return this._timeEvent;
    }
    set timeEvent(value) {
        this._timeEvent = value;
    }
    setXY(xv, yv) {
        if (this._x != xv || this._y != yv) {
            var dx = xv - this._x;
            var dy = yv - this._y;
            this._x = xv;
            this._y = yv;
            this.handleXYChanged();
            if (this instanceof GGroup)
                this.moveChildren(dx, dy);
            this.updateGear(1);
            // if (this._parent && !(this._parent instanceof GList)) {
            if (this._parent) {
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag(true);
                this.displayObject.emit(Events.XY_CHANGED);
            }
            if (GObject.draggingObject == this && !sUpdateInDragging)
                this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
        }
    }
    get xMin() {
        return this._pivotAsAnchor ? (this._x - this._width * this._pivotX) : this._x;
    }
    set xMin(value) {
        if (this._pivotAsAnchor)
            this.setXY(value + this._width * this._pivotX, this._y);
        else
            this.setXY(value, this._y);
    }
    get yMin() {
        return this._pivotAsAnchor ? (this._y - this._height * this._pivotY) : this._y;
    }
    set yMin(value) {
        if (this._pivotAsAnchor)
            this.setXY(this._x, value + this._height * this._pivotY);
        else
            this.setXY(this._x, value);
    }
    get pixelSnapping() {
        return this._pixelSnapping;
    }
    set pixelSnapping(value) {
        if (this._pixelSnapping != value) {
            this._pixelSnapping = value;
            this.handleXYChanged();
        }
    }
    center(restraint) {
        let r;
        if (this._parent)
            r = this.parent;
        else
            r = this.root;
        this.setXY((r.width - this.width) / 2, (r.height - this.height) / 2);
        if (restraint) {
            this.addRelation(r, RelationType.Center_Center);
            this.addRelation(r, RelationType.Middle_Middle);
        }
    }
    get width() {
        this.ensureSizeCorrect();
        if (this._relations.sizeDirty)
            this._relations.ensureRelationsSizeCorrect();
        return this._width;
    }
    set width(value) {
        this.setSize(value, this._rawHeight);
    }
    get height() {
        this.ensureSizeCorrect();
        if (this._relations.sizeDirty)
            this._relations.ensureRelationsSizeCorrect();
        return this._height;
    }
    set height(value) {
        this.setSize(this._rawWidth, value);
    }
    setSize(wv, hv, ignorePivot) {
        if (this._rawWidth != wv || this._rawHeight != hv) {
            this._rawWidth = wv;
            this._rawHeight = hv;
            if (wv < this.minWidth)
                wv = this.minWidth;
            if (hv < this.minHeight)
                hv = this.minHeight;
            if (this.maxWidth > 0 && wv > this.maxWidth)
                wv = this.maxWidth;
            if (this.maxHeight > 0 && hv > this.maxHeight)
                hv = this.maxHeight;
            var dWidth = wv - this._width;
            var dHeight = hv - this._height;
            this._width = wv;
            this._height = hv;
            this.handleSizeChanged();
            if (this._pivotX != 0 || this._pivotY != 0) {
                if (!this._pivotAsAnchor) {
                    if (!ignorePivot)
                        this.setXY(this.x - this._pivotX * dWidth, this.y - this._pivotY * dHeight);
                    this.updatePivotOffset();
                }
                else
                    this.applyPivot();
            }
            if (this instanceof GGroup)
                this.resizeChildren(dWidth, dHeight);
            this.updateGear(2);
            if (this._parent) {
                this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag();
            }
            this.displayObject.emit(Events.SIZE_CHANGED);
        }
    }
    ensureSizeCorrect() {
    }
    makeFullScreen() {
        // this.setSize(GRoot.inst.width, GRoot.inst.height);
    }
    get actualWidth() {
        return this.width * Math.abs(this._scaleX);
    }
    get actualHeight() {
        return this.height * Math.abs(this._scaleY);
    }
    get scaleX() {
        return this._scaleX;
    }
    set scaleX(value) {
        this.setScale(value, this._scaleY);
    }
    get scaleY() {
        return this._scaleY;
    }
    set scaleY(value) {
        this.setScale(this._scaleX, value);
    }
    setScale(sx, sy) {
        if (this._scaleX != sx || this._scaleY != sy) {
            this._scaleX = sx;
            this._scaleY = sy;
            this.handleScaleChanged();
            this.applyPivot();
            this.updateGear(2);
        }
    }
    get skewX() {
        return this._skewX;
    }
    set skewX(value) {
        this.setSkew(value, this._skewY);
    }
    get skewY() {
        return this._skewY;
    }
    set skewY(value) {
        this.setSkew(this._skewX, value);
    }
    setSkew(sx, sy) {
        if (this._skewX != sx || this._skewY != sy) {
            this._skewX = sx;
            this._skewY = sy;
            if (this._displayObject) {
                this._displayStyle.skewX = -sx,
                    this._displayStyle.skewY = sy;
                this._adjustTransform();
                // this._displayObject.skew(-sx, sy);
                this.applyPivot();
            }
        }
    }
    _adjustTransform() {
        var sx = this._displayStyle.scaleX, sy = this._displayStyle.scaleY;
        var sskx = this._displayStyle.skewX;
        var ssky = this._displayStyle.skewY;
        var rot = this._displayStyle.rotation;
        const m = this._displayObject.getLocalTransformMatrix();
        // var m: Matrix = this._transform || (this._transform = this._createTransform());
        if (rot || sx !== 1 || sy !== 1 || sskx !== 0 || ssky !== 0) {
            // m._bTransform = true;
            var skx = (rot - sskx) * 0.0174532922222222; //laya.CONST.PI180;
            var sky = (rot + ssky) * 0.0174532922222222;
            var cx = Math.cos(sky);
            var ssx = Math.sin(sky);
            var cy = Math.sin(skx);
            var ssy = Math.cos(skx);
            m.a = sx * cx;
            m.b = sx * ssx;
            m.c = -sy * cy;
            m.d = sy * ssy;
            m.tx = m.ty = 0;
        }
        else {
            m.loadIdentity();
            // this._renderType &= ~SpriteConst.TRANSFORM;
            // this._setRenderType(this._renderType);
        }
        return m;
    }
    get pivotX() {
        return this._pivotX;
    }
    set pivotX(value) {
        this.setPivot(value, this._pivotY);
    }
    get pivotY() {
        return this._pivotY;
    }
    set pivotY(value) {
        this.setPivot(this._pivotX, value);
    }
    setPivot(xv, yv = 0, asAnchor) {
        if (this._pivotX != xv || this._pivotY != yv || this._pivotAsAnchor != asAnchor) {
            this._pivotX = xv;
            this._pivotY = yv;
            this._pivotAsAnchor = asAnchor;
            this.updatePivotOffset();
            this.handleXYChanged();
        }
    }
    get pivotAsAnchor() {
        return this._pivotAsAnchor;
    }
    internalSetPivot(xv, yv, asAnchor) {
        this._pivotX = xv;
        this._pivotY = yv;
        this._pivotAsAnchor = asAnchor;
        if (this._pivotAsAnchor)
            this.handleXYChanged();
    }
    updatePivotOffset() {
        if (this._displayObject) {
            const transform = this._displayObject.getLocalTransformMatrix();
            if (transform && (this._pivotX != 0 || this._pivotY != 0)) {
                sHelperPoint.x = this._pivotX * this._width;
                sHelperPoint.y = this._pivotY * this._height;
                const pt = new Phaser.Geom.Point();
                transform.transformPoint(this._pivotX * this._width, this._pivotY * this._height, pt);
                this._pivotOffsetX = this._pivotX * this._width - pt.x;
                this._pivotOffsetY = this._pivotY * this._height - pt.y;
            }
            else {
                this._pivotOffsetX = 0;
                this._pivotOffsetY = 0;
            }
        }
    }
    applyPivot() {
        if (this._pivotX != 0 || this._pivotY != 0) {
            this.updatePivotOffset();
            this.handleXYChanged();
        }
    }
    get touchable() {
        return this._touchable;
    }
    set touchable(value) {
        if (this._touchable != value) {
            this._touchable = value;
            this.updateGear(3);
            // if ((this instanceof GImage) || (this instanceof GMovieClip)
            //     || (this instanceof GTextField) && !(this instanceof GTextInput) && !(this instanceof GRichTextField))
            //     //Touch is not supported by GImage/GMovieClip/GTextField
            //     return;
            if (this._displayObject)
                if (this._touchable) {
                    this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width / this.scaleX, this._height / this.scaleY), Phaser.Geom.Rectangle.Contains);
                }
                else {
                    this._displayObject.disableInteractive();
                }
        }
    }
    get grayed() {
        return this._grayed;
    }
    set grayed(value) {
        if (this._grayed != value) {
            this._grayed = value;
            this.handleGrayedChanged();
            this.updateGear(3);
        }
    }
    get enabled() {
        return !this._grayed && this._touchable;
    }
    set enabled(value) {
        this.grayed = !value;
        this.touchable = value;
    }
    get rotation() {
        return this._rotation;
    }
    set rotation(value) {
        if (this._rotation != value) {
            this._rotation = value;
            if (this._displayObject) {
                this._displayObject.rotation = this.normalizeRotation;
                this.applyPivot();
            }
            this.updateGear(3);
        }
    }
    get normalizeRotation() {
        var rot = this._rotation % 360;
        if (rot > 180)
            rot = rot - 360;
        else if (rot < -180)
            rot = 360 + rot;
        return rot;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (this._alpha != value) {
            this._alpha = value;
            this.handleAlphaChanged();
            this.updateGear(3);
        }
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible != value) {
            this._visible = value;
            this.handleVisibleChanged();
            if (this._parent)
                this._parent.setBoundsChangedFlag();
            if (this._group && this._group.excludeInvisibles)
                this._group.setBoundsChangedFlag();
        }
    }
    get internalVisible() {
        return this._internalVisible && (!this._group || this._group.internalVisible)
            && !this._displayObject._cacheStyle.maskParent;
    }
    get internalVisible2() {
        return this._visible && (!this._group || this._group.internalVisible2);
    }
    get internalVisible3() {
        return this._internalVisible && this._visible;
    }
    get sortingOrder() {
        return this._sortingOrder;
    }
    set sortingOrder(value) {
        if (value < 0)
            value = 0;
        if (this._sortingOrder != value) {
            var old = this._sortingOrder;
            this._sortingOrder = value;
            if (this._parent)
                this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
        }
    }
    get focused() {
        return this.root.focus == this;
    }
    requestFocus() {
        this.root.focus = this;
    }
    get tooltips() {
        return this._tooltips;
    }
    set tooltips(value) {
        if (this._tooltips) {
            this.off(InteractiveEvent.GAMEOBJECT_OVER, this.__rollOver);
            this.off(InteractiveEvent.GAMEOBJECT_OUT, this.__rollOut);
        }
        this._tooltips = value;
        if (this._tooltips) {
            this.on(InteractiveEvent.GAMEOBJECT_OVER, this.__rollOver);
            this.on(InteractiveEvent.GAMEOBJECT_OUT, this.__rollOut);
        }
    }
    __rollOver(evt) {
        // this._timeEvent = GRoot.inst.addTimeEvent(new Phaser.Time.TimerEvent({ delay: 100, callback: this.__doShowTooltips }));
        // Laya.timer.once(100, this, this.__doShowTooltips);
    }
    __doShowTooltips() {
        // var r: GRoot = this.root;
        // if (r)
        // this.root.showTooltips(this._tooltips);
    }
    __rollOut(evt) {
        // if (this._timeEvent) GRoot.inst.removeTimeEvent(this._timeEvent);
        // Laya.timer.clear(this, this.__doShowTooltips);
        // this.root.hideTooltips();
    }
    get blendMode() {
        return this._displayObject.blendMode;
    }
    set blendMode(value) {
        this._displayObject.blendMode = value;
    }
    get filters() {
        return null; // this._displayObject.filters;
    }
    set filters(value) {
        // this._displayObject.filters = value;
    }
    get inContainer() {
        return this._displayObject != null && this._displayObject.parentContainer != null;
    }
    get onStage() {
        return this._displayObject != null;
        // return this._displayObject != null && this._displayObject.stage != null;
    }
    get resourceURL() {
        if (this.packageItem)
            return "ui://" + this.packageItem.owner.id + this.packageItem.id;
        else
            return null;
    }
    set group(value) {
        if (this._group != value) {
            if (this._group)
                this._group.setBoundsChangedFlag();
            this._group = value;
            if (this._group)
                this._group.setBoundsChangedFlag();
        }
    }
    get group() {
        return this._group;
    }
    getGear(index) {
        var gear = this._gears[index];
        if (!gear)
            this._gears[index] = gear = createGear(this, index);
        return gear;
    }
    updateGear(index) {
        if (this._underConstruct || this._gearLocked)
            return;
        var gear = this._gears[index];
        if (gear && gear.controller)
            gear.updateState();
    }
    checkGearController(index, c) {
        return this._gears[index] && this._gears[index].controller == c;
    }
    updateGearFromRelations(index, dx, dy) {
        if (this._gears[index])
            this._gears[index].updateFromRelations(dx, dy);
    }
    addDisplayLock() {
        var gearDisplay = (this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            var ret = gearDisplay.addLock();
            this.checkGearDisplay();
            return ret;
        }
        else
            return 0;
    }
    releaseDisplayLock(token) {
        var gearDisplay = (this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            gearDisplay.releaseLock(token);
            this.checkGearDisplay();
        }
    }
    checkGearDisplay() {
        if (this._handlingController)
            return;
        var connected = !this._gears[0] || (this._gears[0]).connected;
        if (this._gears[8])
            connected = this._gears[8].evaluate(connected);
        if (connected != this._internalVisible) {
            this._internalVisible = connected;
            if (this._parent) {
                this._parent.childStateChanged(this);
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        }
    }
    get relations() {
        return this._relations;
    }
    addRelation(target, relationType, usePercent) {
        this._relations.add(target, relationType, usePercent);
    }
    removeRelation(target, relationType) {
        this._relations.remove(target, relationType);
    }
    get displayObject() {
        return this._displayObject;
    }
    get parent() {
        return this._parent;
    }
    set parent(val) {
        this._parent = val;
    }
    removeFromParent() {
        if (this._parent)
            this._parent.removeChild(this);
    }
    get root() {
        // if (this instanceof GRoot)
        //     return this;
        // let p: GObject = this._parent;
        // while (p) {
        //     if (p instanceof GRoot)
        //         return p;
        //     p = p.parent;
        // }
        // return GRoot.inst;
        return null;
    }
    get asCom() {
        return this;
    }
    // public get asButton(): GButton {
    //     return <GButton><any>this;
    // }
    // public get asLabel(): GLabel {
    //     return <GLabel><any>this;
    // }
    // public get asProgress(): GProgressBar {
    //     return <GProgressBar><any>this;
    // }
    // public get asTextField(): GTextField {
    //     return <GTextField><any>this;
    // }
    // public get asRichTextField(): GRichTextField {
    //     return <GRichTextField><any>this;
    // }
    // public get asTextInput(): GTextInput {
    //     return <GTextInput><any>this;
    // }
    // public get asLoader(): GLoader {
    //     return <GLoader><any>this;
    // }
    // public get asList(): GList {
    //     return <GList><any>this;
    // }
    get asTree() {
        return this;
    }
    // public get asGraph(): GGraph {
    //     return <GGraph><any>this;
    // }
    get asGroup() {
        return this;
    }
    // public get asSlider(): GSlider {
    //     return <GSlider><any>this;
    // }
    // public get asComboBox(): GComboBox {
    //     return <GComboBox><any>this;
    // }
    // public get asImage(): GImage {
    //     return <GImage><any>this;
    // }
    // public get asMovieClip(): GMovieClip {
    //     return <GMovieClip><any>this;
    // }
    get text() {
        return null;
    }
    set text(value) {
    }
    get icon() {
        return null;
    }
    set icon(value) {
    }
    get treeNode() {
        return this._treeNode;
    }
    get isDisposed() {
        return this._displayObject == null;
    }
    get scrollRect() {
        return this._displayStyle && this._displayStyle.scrollRect;
    }
    set scrollRect(val) {
        this._displayStyle.scrollRect = val;
    }
    /**
     * <p>可以设置一个Rectangle区域作为点击区域，或者设置一个<code>HitArea</code>实例作为点击区域，HitArea内可以设置可点击和不可点击区域。</p>
     * <p>如果不设置hitArea，则根据宽高形成的区域进行碰撞。</p>
    */
    get hitArea() {
        return this._displayStyle.hitArea;
    }
    set hitArea(value) {
        this._displayStyle.hitArea = value;
    }
    dispose() {
        this.removeFromParent();
        this._relations.dispose();
        this._displayObject.destroy();
        this._displayObject = null;
        for (var i = 0; i < 10; i++) {
            var gear = this._gears[i];
            if (gear)
                gear.dispose();
        }
    }
    onClick(listener) {
        this.on(InteractiveEvent.GAMEOBJECT_UP, listener);
    }
    offClick(listener, once = false) {
        this.off(InteractiveEvent.GAMEOBJECT_UP, listener, once);
    }
    hasClickListener() {
        return this._displayObject && this._touchable; // hasListener(InteractiveEvent.CLICK);
    }
    on(type, listener) {
        this._displayObject.on(type, listener, this);
    }
    off(type, listener, once = false) {
        this._displayObject.off(type, listener, this, once);
    }
    get draggable() {
        return this._draggable;
    }
    set draggable(value) {
        if (this._draggable != value) {
            this._draggable = value;
            this.initDrag();
        }
    }
    get dragBounds() {
        return this._dragBounds;
    }
    set dragBounds(value) {
        this._dragBounds = value;
    }
    startDrag(touchID) {
        // if (this._displayObject.stage == null)
        //     return;
        this.dragBegin(touchID);
    }
    stopDrag() {
        this.dragEnd();
    }
    get dragging() {
        return GObject.draggingObject == this;
    }
    localToGlobal(ax, ay, result) {
        ax = ax || 0;
        ay = ay || 0;
        if (this._pivotAsAnchor) {
            ax += this._pivotX * this._width;
            ay += this._pivotY * this._height;
        }
        result = result || new Phaser.Geom.Point();
        result.x = ax;
        result.y = ay;
        return this._localToGlobal(result, false);
    }
    _localToGlobal(point, createNewPoint = false) {
        if (createNewPoint === true) {
            point = new Phaser.Geom.Point(point.x, point.y);
        }
        let ele = this._displayObject;
        while (ele) {
            if (!ele.parentContainer)
                break;
            ele = ele.parentContainer;
        }
        return new Phaser.Geom.Point(ele.x, ele.y);
    }
    globalToLocal(ax, ay, result) {
        ax = ax || 0;
        ay = ay || 0;
        result = result || new Phaser.Geom.Point();
        result.x = ax;
        result.y = ay;
        result = this._globalToLocal(result, false);
        if (this._pivotAsAnchor) {
            result.x -= this._pivotX * this._width;
            result.y -= this._pivotY * this._height;
        }
        return result;
        // let ele: Phaser.GameObjects.Container = this._displayObject;
        // let list: any[] = [];
        // while (ele) {
        //     list.push(ele);
        //     if (!ele.parentContainer) break;
        //     ele = ele.parentContainer;
        // }
        // var i: number = list.length - 1;
        // while (i >= 0) {
        //     ele = list[i];
        //     i--;
        // }
        // return new Phaser.Geom.Point(ele.x, ele.y);
    }
    _globalToLocal(point, createNewPoint = false) {
        if (createNewPoint) {
            point = new Phaser.Geom.Point(point.x, point.y);
        }
        let ele = this._displayObject;
        let list = [];
        while (ele) {
            list.push(ele);
            if (!ele.parentContainer)
                break;
            ele = ele.parentContainer;
        }
        var i = list.length - 1;
        while (i >= 0) {
            ele = list[i];
            point = this.fromParentPoint(point);
            i--;
        }
        return point;
    }
    /**
 * 将本地坐标系坐标转转换到父容器坐标系。
 * @param point 本地坐标点。
 * @return  转换后的点。
 */
    toParentPoint(point) {
        if (!point)
            return point;
        point.x -= this.pivotX;
        point.y -= this.pivotY;
        const tmpPoint = new Phaser.Geom.Point();
        if (this._displayObject) {
            const matrix = this._displayObject.getLocalTransformMatrix();
            matrix.transformPoint(point.x, point.y, tmpPoint);
        }
        tmpPoint.x += this._displayObject.x;
        tmpPoint.y += this._displayObject.y;
        var scroll = this._displayStyle.scrollRect;
        if (scroll) {
            point.x -= scroll.x;
            point.y -= scroll.y;
        }
        return point;
    }
    /**
     * 将父容器坐标系坐标转换到本地坐标系。
     * @param point 父容器坐标点。
     * @return  转换后的点。
     */
    fromParentPoint(point) {
        if (!point)
            return point;
        point.x -= this._displayObject.x;
        point.y -= this._displayObject.y;
        var scroll = this._displayStyle.scrollRect;
        if (scroll) {
            point.x += scroll.x;
            point.y += scroll.y;
        }
        const matrix = this._displayObject.getLocalTransformMatrix();
        if (matrix) {
            //_transform.setTranslate(0,0);
            this.invertTransformPoint(point);
        }
        point.x += this.pivotX;
        point.y += this.pivotY;
        return point;
    }
    /**
 * 对指定的点应用当前矩阵的逆转化并返回此点。
 * @param	out 待转化的点 Point 对象。
 * @return	返回out
 */
    invertTransformPoint(out) {
        const matrix = this._displayObject.getLocalTransformMatrix();
        var a1 = matrix.a;
        var b1 = matrix.b;
        var c1 = matrix.c;
        var d1 = matrix.d;
        var tx1 = matrix.tx;
        var n = a1 * d1 - b1 * c1;
        var a2 = d1 / n;
        var b2 = -b1 / n;
        var c2 = -c1 / n;
        var d2 = a1 / n;
        var tx2 = (c1 * matrix.ty - d1 * tx1) / n;
        var ty2 = -(a1 * matrix.ty - b1 * tx1) / n;
        return out.setTo(a2 * out.x + c2 * out.y + tx2, b2 * out.x + d2 * out.y + ty2);
    }
    localToGlobalRect(ax, ay, aw, ah, result) {
        ax = ax || 0;
        ay = ay || 0;
        aw = aw || 0;
        ah = ah || 0;
        result = result || new Phaser.Geom.Rectangle();
        var pt = this.localToGlobal(ax, ay);
        result.x = pt.x;
        result.y = pt.y;
        pt = this.localToGlobal(ax + aw, ay + ah);
        result.width = pt.x - result.x;
        result.height = pt.y - result.y;
        return result;
    }
    globalToLocalRect(ax, ay, aw, ah, result) {
        ax = ax || 0;
        ay = ay || 0;
        aw = aw || 0;
        ah = ah || 0;
        result = result || new Phaser.Geom.Rectangle();
        var pt = this.globalToLocal(ax, ay);
        result.x = pt.x;
        result.y = pt.y;
        pt = this.globalToLocal(ax + aw, ay + ah);
        result.width = pt.x - result.x;
        result.height = pt.y - result.y;
        return result;
    }
    handleControllerChanged(c) {
        this._handlingController = true;
        for (var i = 0; i < 10; i++) {
            var gear = this._gears[i];
            if (gear && gear.controller == c)
                gear.apply();
        }
        this._handlingController = false;
        this.checkGearDisplay();
    }
    createDisplayObject() {
        this._displayObject = new Phaser.GameObjects.Container(this.scene);
        this._displayObject["$owner"] = this;
    }
    setDisplayObject(val) {
        this._displayObject = val;
        this._displayObject["$owner"] = this;
    }
    handleXYChanged() {
        var xv = this._x;
        var yv = this._y + this._yOffset;
        if (this._pivotAsAnchor) {
            xv -= this._pivotX * this._width;
            yv -= this._pivotY * this._height;
        }
        if (this._pixelSnapping) {
            xv = Math.round(xv);
            yv = Math.round(yv);
        }
        this._displayObject.setPosition(xv + this._pivotOffsetX, yv + this._pivotOffsetY);
    }
    handleSizeChanged() {
        this._displayObject.setSize(this._width, this._height);
    }
    handleScaleChanged() {
        this._displayObject.setScale(this._scaleX, this._scaleY);
    }
    handleGrayedChanged() {
        ToolSet.setColorFilter(this._displayObject, this._grayed);
    }
    handleAlphaChanged() {
        this._displayObject.alpha = this._alpha;
    }
    handleVisibleChanged() {
        this._displayObject.visible = this.internalVisible2;
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Text:
                return this.text;
            case ObjectPropID.Icon:
                return this.icon;
            case ObjectPropID.Color:
                return null;
            case ObjectPropID.OutlineColor:
                return null;
            case ObjectPropID.Playing:
                return false;
            case ObjectPropID.Frame:
                return 0;
            case ObjectPropID.DeltaTime:
                return 0;
            case ObjectPropID.TimeScale:
                return 1;
            case ObjectPropID.FontSize:
                return 0;
            case ObjectPropID.Selected:
                return false;
            default:
                return undefined;
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Text:
                this.text = value;
                break;
            case ObjectPropID.Icon:
                this.icon = value;
                break;
        }
    }
    constructFromResource() {
    }
    setup_beforeAdd(buffer, beginPos) {
        buffer.seek(beginPos, 0);
        buffer.skip(5);
        var f1;
        var f2;
        this._id = buffer.readS();
        this._name = buffer.readS();
        f1 = buffer.readInt();
        f2 = buffer.readInt();
        this.setXY(f1, f2);
        if (buffer.readBool()) {
            this.initWidth = buffer.readInt();
            this.initHeight = buffer.readInt();
            this.setSize(this.initWidth, this.initHeight, true);
        }
        if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
        }
        if (buffer.readBool()) {
            f1 = buffer.readShort();
            f2 = buffer.readShort();
            this.setScale(f1, f2);
        }
        if (buffer.readBool()) {
            f1 = buffer.readShort();
            f2 = buffer.readShort();
            this.setSkew(f1, f2);
        }
        if (buffer.readBool()) {
            f1 = buffer.readShort();
            f2 = buffer.readShort();
            this.setPivot(f1, f2, buffer.readBool());
        }
        f1 = buffer.readShort();
        if (f1 != 1)
            this.alpha = f1;
        f1 = buffer.readShort();
        if (f1 != 0)
            this.rotation = f1;
        if (!buffer.readBool())
            this.visible = false;
        if (!buffer.readBool())
            this.touchable = false;
        if (buffer.readBool())
            this.grayed = true;
        var bm = buffer.readByte();
        if (BlendMode[bm])
            this.blendMode = BlendMode[bm];
        var filter = buffer.readByte();
        if (filter == 1) {
            ToolSet.setColorFilter(this._displayObject, [buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()]);
        }
        var str = buffer.readS();
        if (str != null)
            this.data = str;
    }
    setup_afterAdd(buffer, beginPos) {
        buffer.seek(beginPos, 1);
        var str = buffer.readS();
        if (str != null)
            this.tooltips = str;
        var groupId = buffer.readShort();
        if (groupId >= 0)
            this.group = this.parent.getChildAt(groupId);
        buffer.seek(beginPos, 2);
        var cnt = buffer.readShort();
        for (var i = 0; i < cnt; i++) {
            var nextPos = buffer.readShort();
            nextPos += buffer.position;
            var gear = this.getGear(buffer.readByte());
            gear.setup(buffer);
            buffer.position = nextPos;
        }
    }
    //drag support
    //-------------------------------------------------------------------
    initDrag() {
        if (this._draggable)
            this.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__begin);
        else
            this.off(InteractiveEvent.GAMEOBJECT_DOWN, this.__begin);
    }
    dragBegin(touchID) {
        if (GObject.draggingObject) {
            let tmp = GObject.draggingObject;
            tmp.stopDrag();
            GObject.draggingObject = null;
            Events.dispatch(Events.DRAG_END, tmp._displayObject, { touchId: touchID });
        }
        sGlobalDragStart.x = this.scene.input.activePointer.x; // Laya.stage.mouseX;
        sGlobalDragStart.y = this.scene.input.activePointer.y; // Laya.stage.mouseY;
        this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
        this._dragTesting = true;
        GObject.draggingObject = this;
        this._displayObject.on(InteractiveEvent.GAMEOBJECT_MOVE, this.__moving);
        this._displayObject.on(InteractiveEvent.GAMEOBJECT_UP, this.__end);
    }
    dragEnd() {
        if (GObject.draggingObject == this) {
            this.reset();
            this._dragTesting = false;
            GObject.draggingObject = null;
        }
        sDraggingQuery = false;
    }
    reset() {
        this._displayObject.off(InteractiveEvent.GAMEOBJECT_MOVE, this.__moving);
        this._displayObject.off(InteractiveEvent.GAMEOBJECT_UP, this.__end);
    }
    __begin() {
        if (!this._dragStartPos)
            this._dragStartPos = new Phaser.Geom.Point();
        this._dragStartPos.x = this.scene.input.activePointer.x;
        this._dragStartPos.y = this.scene.input.activePointer.y;
        this._dragTesting = true;
        this._displayObject.on(InteractiveEvent.GAMEOBJECT_MOVE, this.__moving);
        this._displayObject.on(InteractiveEvent.GAMEOBJECT_UP, this.__end);
    }
    __moving(evt) {
        if (GObject.draggingObject != this && this._draggable && this._dragTesting) {
            var sensitivity = UIConfig.touchDragSensitivity;
            if (this._dragStartPos
                && Math.abs(this._dragStartPos.x - this.scene.input.activePointer.x) < sensitivity
                && Math.abs(this._dragStartPos.y - this.scene.input.activePointer.y) < sensitivity)
                return;
            this._dragTesting = false;
            sDraggingQuery = true;
            Events.dispatch(Events.DRAG_START, this._displayObject, evt);
            if (sDraggingQuery)
                this.dragBegin();
        }
        if (GObject.draggingObject == this) {
            var xx = this.scene.input.activePointer.x - sGlobalDragStart.x + sGlobalRect.x;
            var yy = this.scene.input.activePointer.y - sGlobalDragStart.y + sGlobalRect.y;
            if (this._dragBounds) {
                var rect;
                if (xx < rect.x)
                    xx = rect.x;
                else if (xx + sGlobalRect.width > rect.right) {
                    xx = rect.right - sGlobalRect.width;
                    if (xx < rect.x)
                        xx = rect.x;
                }
                if (yy < rect.y)
                    yy = rect.y;
                else if (yy + sGlobalRect.height > rect.bottom) {
                    yy = rect.bottom - sGlobalRect.height;
                    if (yy < rect.y)
                        yy = rect.y;
                }
            }
            sUpdateInDragging = true;
            var pt = this.parent.globalToLocal(xx, yy, sHelperPoint);
            this.setXY(Math.round(pt.x), Math.round(pt.y));
            sUpdateInDragging = false;
            Events.dispatch(Events.DRAG_MOVE, this._displayObject, evt);
        }
    }
    __end(evt) {
        if (GObject.draggingObject == this) {
            GObject.draggingObject = null;
            this.reset();
            Events.dispatch(Events.DRAG_END, this._displayObject, evt);
        }
        else if (this._dragTesting) {
            this._dragTesting = false;
            this.reset();
        }
    }
    //-------------------------------------------------------------------
    static cast(sprite) {
        return (sprite["$owner"]);
    }
}
let GearClasses = [
    GearDisplay, GearXY, GearSize, GearLook, GearColor,
    GearAnimation, GearText, GearIcon, GearDisplay2, GearFontSize
];
function createGear(owner, index) {
    let ret = new (GearClasses[index])();
    ret._owner = owner;
    return ret;
}
const BlendMode = {
    2: Phaser.BlendModes.LIGHTER,
    3: Phaser.BlendModes.MULTIPLY,
    4: Phaser.BlendModes.SCREEN
};
var _gInstanceCounter = 0;
var sGlobalDragStart = new Phaser.Geom.Point();
var sGlobalRect = new Phaser.Geom.Rectangle();
var sHelperPoint = new Phaser.Geom.Point();
new Phaser.Geom.Rectangle();
var sUpdateInDragging;
var sDraggingQuery;

class GGroup extends GObject {
    constructor() {
        super();
        this._layout = 0;
        this._lineGap = 0;
        this._columnGap = 0;
        this._mainGridIndex = -1;
        this._mainGridMinSize = 50;
        this._mainChildIndex = -1;
        this._totalSize = 0;
        this._numChildren = 0;
        this._updating = 0;
    }
    dispose() {
        this._boundsChanged = false;
        super.dispose();
    }
    get layout() {
        return this._layout;
    }
    set layout(value) {
        if (this._layout != value) {
            this._layout = value;
            this.setBoundsChangedFlag();
        }
    }
    get lineGap() {
        return this._lineGap;
    }
    set lineGap(value) {
        if (this._lineGap != value) {
            this._lineGap = value;
            this.setBoundsChangedFlag(true);
        }
    }
    get columnGap() {
        return this._columnGap;
    }
    set columnGap(value) {
        if (this._columnGap != value) {
            this._columnGap = value;
            this.setBoundsChangedFlag(true);
        }
    }
    get excludeInvisibles() {
        return this._excludeInvisibles;
    }
    set excludeInvisibles(value) {
        if (this._excludeInvisibles != value) {
            this._excludeInvisibles = value;
            this.setBoundsChangedFlag();
        }
    }
    get autoSizeDisabled() {
        return this._autoSizeDisabled;
    }
    set autoSizeDisabled(value) {
        this._autoSizeDisabled = value;
    }
    get mainGridMinSize() {
        return this._mainGridMinSize;
    }
    set mainGridMinSize(value) {
        if (this._mainGridMinSize != value) {
            this._mainGridMinSize = value;
            this.setBoundsChangedFlag();
        }
    }
    get mainGridIndex() {
        return this._mainGridIndex;
    }
    set mainGridIndex(value) {
        if (this._mainGridIndex != value) {
            this._mainGridIndex = value;
            this.setBoundsChangedFlag();
        }
    }
    setBoundsChangedFlag(positionChangedOnly) {
        if (this._updating == 0 && this._parent) {
            if (!positionChangedOnly)
                this._percentReady = false;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                // if (this._layout != GroupLayoutType.None)
                //     Laya.timer.callLater(this, this.ensureBoundsCorrect);
            }
        }
    }
    ensureSizeCorrect() {
        if (!this._parent || !this._boundsChanged || this._layout == 0)
            return;
        this._boundsChanged = false;
        if (this._autoSizeDisabled)
            this.resizeChildren(0, 0);
        else {
            this.handleLayout();
            this.updateBounds();
        }
    }
    ensureBoundsCorrect() {
        if (!this._parent || !this._boundsChanged)
            return;
        this._boundsChanged = false;
        if (this._layout == 0)
            this.updateBounds();
        else {
            if (this._autoSizeDisabled)
                this.resizeChildren(0, 0);
            else {
                this.handleLayout();
                this.updateBounds();
            }
        }
    }
    updateBounds() {
        // Laya.timer.clear(this, this.ensureBoundsCorrect);
        var cnt = this._parent.numChildren;
        var i;
        var child;
        var ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
        var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
        var tmp;
        var empty = true;
        for (i = 0; i < cnt; i++) {
            child = this._parent.getChildAt(i);
            if (child.group != this || this._excludeInvisibles && !child.internalVisible3)
                continue;
            tmp = child.xMin;
            if (tmp < ax)
                ax = tmp;
            tmp = child.yMin;
            if (tmp < ay)
                ay = tmp;
            tmp = child.xMin + child.width;
            if (tmp > ar)
                ar = tmp;
            tmp = child.yMin + child.height;
            if (tmp > ab)
                ab = tmp;
            empty = false;
        }
        var w = 0, h = 0;
        if (!empty) {
            this._updating |= 1;
            this.setXY(ax, ay);
            this._updating &= 2;
            w = ar - ax;
            h = ab - ay;
        }
        if ((this._updating & 2) == 0) {
            this._updating |= 2;
            this.setSize(w, h);
            this._updating &= 1;
        }
        else {
            this._updating &= 1;
            this.resizeChildren(this._width - w, this._height - h);
        }
    }
    handleLayout() {
        this._updating |= 1;
        var child;
        var i;
        var cnt;
        if (this._layout == GroupLayoutType.Horizontal) {
            var curX = this.x;
            cnt = this._parent.numChildren;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3)
                    continue;
                child.xMin = curX;
                if (child.width != 0)
                    curX += child.width + this._columnGap;
            }
        }
        else if (this._layout == GroupLayoutType.Vertical) {
            var curY = this.y;
            cnt = this._parent.numChildren;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3)
                    continue;
                child.yMin = curY;
                if (child.height != 0)
                    curY += child.height + this._lineGap;
            }
        }
        this._updating &= 2;
    }
    moveChildren(dx, dy) {
        if ((this._updating & 1) != 0 || !this._parent)
            return;
        this._updating |= 1;
        var cnt = this._parent.numChildren;
        var i;
        var child;
        for (i = 0; i < cnt; i++) {
            child = this._parent.getChildAt(i);
            if (child.group == this) {
                child.setXY(child.x + dx, child.y + dy);
            }
        }
        this._updating &= 2;
    }
    resizeChildren(dw, dh) {
        if (this._layout == GroupLayoutType.None || (this._updating & 2) != 0 || !this._parent)
            return;
        this._updating |= 2;
        if (this._boundsChanged) {
            this._boundsChanged = false;
            if (!this._autoSizeDisabled) {
                this.updateBounds();
                return;
            }
        }
        var cnt = this._parent.numChildren;
        var i;
        var child;
        if (!this._percentReady) {
            this._percentReady = true;
            this._numChildren = 0;
            this._totalSize = 0;
            this._mainChildIndex = -1;
            var j = 0;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (!this._excludeInvisibles || child.internalVisible3) {
                    if (j == this._mainGridIndex)
                        this._mainChildIndex = i;
                    this._numChildren++;
                    if (this._layout == 1)
                        this._totalSize += child.width;
                    else
                        this._totalSize += child.height;
                }
                j++;
            }
            if (this._mainChildIndex != -1) {
                if (this._layout == 1) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    this._totalSize += this._mainGridMinSize - child.width;
                    child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                }
                else {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    this._totalSize += this._mainGridMinSize - child.height;
                    child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                }
            }
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (i == this._mainChildIndex)
                    continue;
                if (this._totalSize > 0)
                    child._sizePercentInGroup = (this._layout == 1 ? child.width : child.height) / this._totalSize;
                else
                    child._sizePercentInGroup = 0;
            }
        }
        var remainSize = 0;
        var remainPercent = 1;
        var priorHandled = false;
        if (this._layout == 1) {
            remainSize = this.width - (this._numChildren - 1) * this._columnGap;
            if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                child = this._parent.getChildAt(this._mainChildIndex);
                child.setSize(remainSize - (this._totalSize - this._mainGridMinSize), child._rawHeight + dh, true);
                remainSize -= child.width;
                remainPercent -= child._sizePercentInGroup;
                priorHandled = true;
            }
            var curX = this.x;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3) {
                    child.setSize(child._rawWidth, child._rawHeight + dh, true);
                    continue;
                }
                if (!priorHandled || i != this._mainChildIndex) {
                    child.setSize(Math.round(child._sizePercentInGroup / remainPercent * remainSize), child._rawHeight + dh, true);
                    remainPercent -= child._sizePercentInGroup;
                    remainSize -= child.width;
                }
                child.xMin = curX;
                if (child.width != 0)
                    curX += child.width + this._columnGap;
            }
        }
        else {
            remainSize = this.height - (this._numChildren - 1) * this._lineGap;
            if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                child = this._parent.getChildAt(this._mainChildIndex);
                child.setSize(child._rawWidth + dw, remainSize - (this._totalSize - this._mainGridMinSize), true);
                remainSize -= child.height;
                remainPercent -= child._sizePercentInGroup;
                priorHandled = true;
            }
            var curY = this.y;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3) {
                    child.setSize(child._rawWidth + dw, child._rawHeight, true);
                    continue;
                }
                if (!priorHandled || i != this._mainChildIndex) {
                    child.setSize(child._rawWidth + dw, Math.round(child._sizePercentInGroup / remainPercent * remainSize), true);
                    remainPercent -= child._sizePercentInGroup;
                    remainSize -= child.height;
                }
                child.yMin = curY;
                if (child.height != 0)
                    curY += child.height + this._lineGap;
            }
        }
        this._updating &= 1;
    }
    handleAlphaChanged() {
        if (this._underConstruct)
            return;
        var cnt = this._parent.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = this._parent.getChildAt(i);
            if (child.group == this)
                child.alpha = this.alpha;
        }
    }
    handleVisibleChanged() {
        if (!this._parent)
            var cnt = this._parent.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = this._parent.getChildAt(i);
            if (child.group == this)
                child.handleVisibleChanged();
        }
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        this._layout = buffer.readByte();
        this._lineGap = buffer.readInt();
        this._columnGap = buffer.readInt();
        if (buffer.version >= 2) {
            this._excludeInvisibles = buffer.readBool();
            this._autoSizeDisabled = buffer.readBool();
            this._mainGridIndex = buffer.readShort();
        }
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!this.visible)
            this.handleVisibleChanged();
    }
}

class GGraph extends GObject {
    constructor() {
        super();
        this._type = 0;
        this._lineSize = 1;
        this._lineColor = "#000000";
        this._fillColor = "#FFFFFF";
    }
    drawRect(lineSize, lineColor, fillColor, cornerRadius) {
        this._type = 1;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._cornerRadius = cornerRadius;
        this.updateGraph();
    }
    drawEllipse(lineSize, lineColor, fillColor) {
        this._type = 2;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this.updateGraph();
    }
    drawRegularPolygon(lineSize, lineColor, fillColor, sides, startAngle, distances) {
        this._type = 4;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._sides = sides;
        this._startAngle = startAngle || 0;
        this._distances = distances;
        this.updateGraph();
    }
    drawPolygon(lineSize, lineColor, fillColor, points) {
        this._type = 3;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._polygonPoints = points;
        this.updateGraph();
    }
    get distances() {
        return this._distances;
    }
    set distances(value) {
        this._distances = value;
        if (this._type == 3)
            this.updateGraph();
    }
    get color() {
        return this._fillColor;
    }
    set color(value) {
        this._fillColor = value;
        this.updateGear(4);
        if (this._type != 0)
            this.updateGraph();
    }
    updateGraph() {
        // TODO
        throw new Error("TODO");
        // this._displayObject.mouseEnabled = this.touchable;
        // var gr: Laya.Graphics = this._displayObject.graphics;
        // gr.clear();
        // var w: number = this.width;
        // var h: number = this.height;
        // if (w == 0 || h == 0)
        //     return;
        // var fillColor: string = this._fillColor;
        // var lineColor: string = this._lineColor;
        // if (/*Render.isWebGL &&*/ ToolSet.startsWith(fillColor, "rgba")) {
        //     //webgl下laya未支持rgba格式
        //     var arr: any[] = fillColor.substring(5, fillColor.lastIndexOf(")")).split(",");
        //     var a: number = parseFloat(arr[3]);
        //     if (a == 0)
        //         fillColor = null;
        //     else {
        //         fillColor = Laya.Utils.toHexColor((parseInt(arr[0]) << 16) + (parseInt(arr[1]) << 8) + parseInt(arr[2]));
        //         this.alpha = a;
        //     }
        // }
        // if (this._type == 1) {
        //     if (this._cornerRadius) {
        //         var paths: any[] = [
        //             ["moveTo", this._cornerRadius[0], 0],
        //             ["lineTo", w - this._cornerRadius[1], 0],
        //             ["arcTo", w, 0, w, this._cornerRadius[1], this._cornerRadius[1]],
        //             ["lineTo", w, h - this._cornerRadius[3]],
        //             ["arcTo", w, h, w - this._cornerRadius[3], h, this._cornerRadius[3]],
        //             ["lineTo", this._cornerRadius[2], h],
        //             ["arcTo", 0, h, 0, h - this._cornerRadius[2], this._cornerRadius[2]],
        //             ["lineTo", 0, this._cornerRadius[0]],
        //             ["arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0]],
        //             ["closePath"]
        //         ];
        //         gr.drawPath(0, 0, paths, fillColor ? { fillStyle: fillColor } : null, this._lineSize > 0 ? { strokeStyle: lineColor, lineWidth: this._lineSize } : null);
        //     }
        //     else
        //         gr.drawRect(0, 0, w, h, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        // } else if (this._type == 2) {
        //     gr.drawCircle(w / 2, h / 2, w / 2, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        // }
        // else if (this._type == 3) {
        //     gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        // }
        // else if (this._type == 4) {
        //     if (!this._polygonPoints)
        //         this._polygonPoints = [];
        //     var radius: number = Math.min(this._width, this._height) / 2;
        //     this._polygonPoints.length = 0;
        //     var angle: number = Laya.Utils.toRadian(this._startAngle);
        //     var deltaAngle: number = 2 * Math.PI / this._sides;
        //     var dist: number;
        //     for (var i: number = 0; i < this._sides; i++) {
        //         if (this._distances) {
        //             dist = this._distances[i];
        //             if (isNaN(dist))
        //                 dist = 1;
        //         }
        //         else
        //             dist = 1;
        //         var xv: number = radius + radius * dist * Math.cos(angle);
        //         var yv: number = radius + radius * dist * Math.sin(angle);
        //         this._polygonPoints.push(xv, yv);
        //         angle += deltaAngle;
        //     }
        //     gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        // }
        // this._displayObject.repaint();
    }
    replaceMe(target) {
        throw new Error("TODO");
        // if (!this._parent)
        //     throw "parent not set";
        // target.name = this.name;
        // target.alpha = this.alpha;
        // target.rotation = this.rotation;
        // target.visible = this.visible;
        // target.touchable = this.touchable;
        // target.grayed = this.grayed;
        // target.setXY(this.x, this.y);
        // target.setSize(this.width, this.height);
        // var index: number = this._parent.getChildIndex(this);
        // this._parent.addChildAt(target, index);
        // target.relations.copyFrom(this.relations);
        // this._parent.removeChild(this, true);
    }
    addBeforeMe(target) {
        throw new Error("TODO");
        // var index: number = this._parent.getChildIndex(this);
        // this._parent.addChildAt(target, index);
    }
    addAfterMe(target) {
        throw new Error("TODO");
        // var index: number = this._parent.getChildIndex(this);
        // index++;
        // this._parent.addChildAt(target, index);
    }
    setNativeObject(obj) {
        this._type = 0;
        throw new Error("TODO");
        // this._displayObject.mouseEnabled = this.touchable;
        // this._displayObject.graphics.clear();
        // this._displayObject.addChild(obj);
    }
    createDisplayObject() {
        throw new Error("TODO");
        // this._displayObject.mouseEnabled = false;
        // this._hitArea = new Laya.HitArea();
        // this._hitArea.hit = this._displayObject.graphics;
        // this._displayObject.hitArea = this._hitArea;
    }
    getProp(index) {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }
    setProp(index, value) {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._type != 0)
            this.updateGraph();
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        this._type = buffer.readByte();
        if (this._type != 0) {
            var i;
            var cnt;
            this._lineSize = buffer.readInt();
            this._lineColor = buffer.readColorS(true);
            this._fillColor = buffer.readColorS(true);
            if (buffer.readBool()) {
                this._cornerRadius = [];
                for (i = 0; i < 4; i++)
                    this._cornerRadius[i] = buffer.readFloat();
            }
            if (this._type == 3) {
                cnt = buffer.readShort();
                this._polygonPoints = [];
                this._polygonPoints.length = cnt;
                for (i = 0; i < cnt; i++)
                    this._polygonPoints[i] = buffer.readFloat();
            }
            else if (this._type == 4) {
                this._sides = buffer.readShort();
                this._startAngle = buffer.readFloat();
                cnt = buffer.readShort();
                if (cnt > 0) {
                    this._distances = [];
                    for (i = 0; i < cnt; i++)
                        this._distances[i] = buffer.readFloat();
                }
            }
            this.updateGraph();
        }
    }
}

function fillImage(w, h, method, origin, clockwise, amount) {
    if (amount <= 0)
        return null;
    else if (amount >= 0.9999)
        return [0, 0, w, 0, w, h, 0, h];
    var points;
    switch (method) {
        case FillMethod.Horizontal:
            points = fillHorizontal(w, h, origin, amount);
            break;
        case FillMethod.Vertical:
            points = fillVertical(w, h, origin, amount);
            break;
        case FillMethod.Radial90:
            points = fillRadial90(w, h, origin, clockwise, amount);
            break;
        case FillMethod.Radial180:
            points = fillRadial180(w, h, origin, clockwise, amount);
            break;
        case FillMethod.Radial360:
            points = fillRadial360(w, h, origin, clockwise, amount);
            break;
    }
    return points;
}
function fillHorizontal(w, h, origin, amount) {
    var w2 = w * amount;
    if (origin == FillOrigin.Left || origin == FillOrigin.Top)
        return [0, 0, w2, 0, w2, h, 0, h];
    else
        return [w, 0, w, h, w - w2, h, w - w2, 0];
}
function fillVertical(w, h, origin, amount) {
    var h2 = h * amount;
    if (origin == FillOrigin.Left || origin == FillOrigin.Top)
        return [0, 0, 0, h2, w, h2, w, 0];
    else
        return [0, h, w, h, w, h - h2, 0, h - h2];
}
function fillRadial90(w, h, origin, clockwise, amount) {
    if (clockwise && (origin == FillOrigin.TopRight || origin == FillOrigin.BottomLeft)
        || !clockwise && (origin == FillOrigin.TopLeft || origin == FillOrigin.BottomRight)) {
        amount = 1 - amount;
    }
    var v, v2, h2;
    v = Math.tan(Math.PI / 2 * amount);
    h2 = w * v;
    v2 = (h2 - h) / h2;
    var points;
    switch (origin) {
        case FillOrigin.TopLeft:
            if (clockwise) {
                if (h2 <= h)
                    points = [0, 0, w, h2, w, 0];
                else
                    points = [0, 0, w * (1 - v2), h, w, h, w, 0];
            }
            else {
                if (h2 <= h)
                    points = [0, 0, w, h2, w, h, 0, h];
                else
                    points = [0, 0, w * (1 - v2), h, 0, h];
            }
            break;
        case FillOrigin.TopRight:
            if (clockwise) {
                if (h2 <= h)
                    points = [w, 0, 0, h2, 0, h, w, h];
                else
                    points = [w, 0, w * v2, h, w, h];
            }
            else {
                if (h2 <= h)
                    points = [w, 0, 0, h2, 0, 0];
                else
                    points = [w, 0, w * v2, h, 0, h, 0, 0];
            }
            break;
        case FillOrigin.BottomLeft:
            if (clockwise) {
                if (h2 <= h)
                    points = [0, h, w, h - h2, w, 0, 0, 0];
                else
                    points = [0, h, w * (1 - v2), 0, 0, 0];
            }
            else {
                if (h2 <= h)
                    points = [0, h, w, h - h2, w, h];
                else
                    points = [0, h, w * (1 - v2), 0, w, 0, w, h];
            }
            break;
        case FillOrigin.BottomRight:
            if (clockwise) {
                if (h2 <= h)
                    points = [w, h, 0, h - h2, 0, h];
                else
                    points = [w, h, w * v2, 0, 0, 0, 0, h];
            }
            else {
                if (h2 <= h)
                    points = [w, h, 0, h - h2, 0, 0, w, 0];
                else
                    points = [w, h, w * v2, 0, w, 0];
            }
            break;
    }
    return points;
}
function movePoints(points, offsetX, offsetY) {
    var cnt = points.length;
    for (var i = 0; i < cnt; i += 2) {
        points[i] += offsetX;
        points[i + 1] += offsetY;
    }
}
function fillRadial180(w, h, origin, clockwise, amount) {
    var points;
    switch (origin) {
        case FillOrigin.Top:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial90(w / 2, h, clockwise ? FillOrigin.TopLeft : FillOrigin.TopRight, clockwise, amount);
                if (clockwise)
                    movePoints(points, w / 2, 0);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial90(w / 2, h, clockwise ? FillOrigin.TopRight : FillOrigin.TopLeft, clockwise, amount);
                if (clockwise)
                    points.push(w, h, w, 0);
                else {
                    movePoints(points, w / 2, 0);
                    points.push(0, h, 0, 0);
                }
            }
            break;
        case FillOrigin.Bottom:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial90(w / 2, h, clockwise ? FillOrigin.BottomRight : FillOrigin.BottomLeft, clockwise, amount);
                if (!clockwise)
                    movePoints(points, w / 2, 0);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial90(w / 2, h, clockwise ? FillOrigin.BottomLeft : FillOrigin.BottomRight, clockwise, amount);
                if (clockwise) {
                    movePoints(points, w / 2, 0);
                    points.push(0, 0, 0, h);
                }
                else
                    points.push(w, 0, w, h);
            }
            break;
        case FillOrigin.Left:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial90(w, h / 2, clockwise ? FillOrigin.BottomLeft : FillOrigin.TopLeft, clockwise, amount);
                if (!clockwise)
                    movePoints(points, 0, h / 2);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial90(w, h / 2, clockwise ? FillOrigin.TopLeft : FillOrigin.BottomLeft, clockwise, amount);
                if (clockwise) {
                    movePoints(points, 0, h / 2);
                    points.push(w, 0, 0, 0);
                }
                else
                    points.push(w, h, 0, h);
            }
            break;
        case FillOrigin.Right:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial90(w, h / 2, clockwise ? FillOrigin.TopRight : FillOrigin.BottomRight, clockwise, amount);
                if (clockwise)
                    movePoints(points, 0, h / 2);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial90(w, h / 2, clockwise ? FillOrigin.BottomRight : FillOrigin.TopRight, clockwise, amount);
                if (clockwise)
                    points.push(0, h, w, h);
                else {
                    movePoints(points, 0, h / 2);
                    points.push(0, 0, w, 0);
                }
            }
            break;
    }
    return points;
}
function fillRadial360(w, h, origin, clockwise, amount) {
    var points;
    switch (origin) {
        case FillOrigin.Top:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial180(w / 2, h, clockwise ? FillOrigin.Left : FillOrigin.Right, clockwise, amount);
                if (clockwise)
                    movePoints(points, w / 2, 0);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial180(w / 2, h, clockwise ? FillOrigin.Right : FillOrigin.Left, clockwise, amount);
                if (clockwise)
                    points.push(w, h, w, 0, w / 2, 0);
                else {
                    movePoints(points, w / 2, 0);
                    points.push(0, h, 0, 0, w / 2, 0);
                }
            }
            break;
        case FillOrigin.Bottom:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial180(w / 2, h, clockwise ? FillOrigin.Right : FillOrigin.Left, clockwise, amount);
                if (!clockwise)
                    movePoints(points, w / 2, 0);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial180(w / 2, h, clockwise ? FillOrigin.Left : FillOrigin.Right, clockwise, amount);
                if (clockwise) {
                    movePoints(points, w / 2, 0);
                    points.push(0, 0, 0, h, w / 2, h);
                }
                else
                    points.push(w, 0, w, h, w / 2, h);
            }
            break;
        case FillOrigin.Left:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial180(w, h / 2, clockwise ? FillOrigin.Bottom : FillOrigin.Top, clockwise, amount);
                if (!clockwise)
                    movePoints(points, 0, h / 2);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial180(w, h / 2, clockwise ? FillOrigin.Top : FillOrigin.Bottom, clockwise, amount);
                if (clockwise) {
                    movePoints(points, 0, h / 2);
                    points.push(w, 0, 0, 0, 0, h / 2);
                }
                else
                    points.push(w, h, 0, h, 0, h / 2);
            }
            break;
        case FillOrigin.Right:
            if (amount <= 0.5) {
                amount = amount / 0.5;
                points = fillRadial180(w, h / 2, clockwise ? FillOrigin.Top : FillOrigin.Bottom, clockwise, amount);
                if (clockwise)
                    movePoints(points, 0, h / 2);
            }
            else {
                amount = (amount - 0.5) / 0.5;
                points = fillRadial180(w, h / 2, clockwise ? FillOrigin.Bottom : FillOrigin.Top, clockwise, amount);
                if (clockwise)
                    points.push(0, h, w, h, w, h / 2);
                else {
                    movePoints(points, 0, h / 2);
                    points.push(0, 0, w, 0, w, h / 2);
                }
            }
            break;
    }
    return points;
}

var GRAPHICSTYPE;
(function (GRAPHICSTYPE) {
    GRAPHICSTYPE["RECTANGLE"] = "rectangle";
    GRAPHICSTYPE["CIRCLE"] = "circle";
    GRAPHICSTYPE["POLY"] = "POLY";
    GRAPHICSTYPE["ELLIPSE"] = "ellipse";
})(GRAPHICSTYPE || (GRAPHICSTYPE = {}));
class Graphics extends Phaser.GameObjects.Graphics {
    constructor(scene) {
        super(scene);
        // 默认矩形
        this._graphicsType = GRAPHICSTYPE.RECTANGLE;
        this._width = 0;
        this._height = 0;
        this._radius = 0;
        this._points = [];
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get radius() {
        return this._radius;
    }
    get points() {
        return this._points;
    }
    fillRect(x, y, width, height) {
        this._graphicsType = GRAPHICSTYPE.RECTANGLE;
        this._width = width;
        this._height = height;
        return super.fillRect(x, y, width, height);
    }
    fillCircle(x, y, radius) {
        this._graphicsType = GRAPHICSTYPE.CIRCLE;
        this._radius = radius;
        return super.fillCircle(x, y, radius);
    }
    fillTriangle(x0, y0, x1, y1, x2, y2) {
        // 三角形是多边形
        // todo 扩展其他正多边形
        this._graphicsType = GRAPHICSTYPE.POLY;
        this._points = [new Phaser.Geom.Point(x0, y0), new Phaser.Geom.Point(x1, y1), new Phaser.Geom.Point(x2, y2)];
        return super.fillTriangle(x0, y0, x1, y1, x2, y2);
    }
    fillEllipse(x, y, width, height, smoothness) {
        this._graphicsType = GRAPHICSTYPE.ELLIPSE;
        return super.fillEllipse(x, y, width, height, smoothness);
    }
    get graphicsType() {
        return this._graphicsType;
    }
    set graphicsType(value) {
        this._graphicsType = value;
    }
    clear() {
        this._width = 0;
        this._height = 0;
        this._radius = 0;
        this._points = [];
        return super.clear();
    }
}

class Image extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene);
        this._tileGridIndice = 0;
        this._needRebuild = 0;
        this._fillMethod = 0;
        this._fillOrigin = 0;
        this._fillAmount = 0;
        // this.mouseEnabled = false;
        this._color = "#FFFFFF";
        this.width;
    }
    // public set width(value: number) {
    //     if (this["_width"] !== value) {
    //         super.set_width(value);
    //         this.markChanged(1);
    //     }
    // }
    // public set height(value: number) {
    //     if (this["_height"] !== value) {
    //         super.set_height(value);
    //         this.markChanged(1);
    //     }
    // }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.markChanged(1);
        return this;
    }
    get texture() {
        return this._source;
    }
    set texture(value) {
        if (this._source != value) {
            this._source = value;
            if (this["_width"] == 0) {
                if (this._source)
                    this.setSize(this._source.source[0].width, this._source.source[0].height);
                else
                    this.setSize(0, 0);
            }
            // todo 重绘
            // this.repaint();
            this.markChanged(1);
        }
    }
    get scale9Grid() {
        return this._scale9Grid;
    }
    set scale9Grid(value) {
        this._scale9Grid = value;
        this._sizeGrid = null;
        this.markChanged(1);
    }
    get scaleByTile() {
        return this._scaleByTile;
    }
    set scaleByTile(value) {
        if (this._scaleByTile != value) {
            this._scaleByTile = value;
            this.markChanged(1);
        }
    }
    get tileGridIndice() {
        return this._tileGridIndice;
    }
    set tileGridIndice(value) {
        if (this._tileGridIndice != value) {
            this._tileGridIndice = value;
            this.markChanged(1);
        }
    }
    get fillMethod() {
        return this._fillMethod;
    }
    set fillMethod(value) {
        if (this._fillMethod != value) {
            this._fillMethod = value;
            if (this._fillMethod != 0) {
                if (!this._mask) {
                    this._mask = new Graphics(this.scene);
                    // this._mask.mouseEnabled = false;
                }
                this.mask = this._mask.createGeometryMask();
                this.markChanged(2);
            }
            else if (this.mask) {
                this._mask.clear();
                this.mask = null;
            }
        }
    }
    get fillOrigin() {
        return this._fillOrigin;
    }
    set fillOrigin(value) {
        if (this._fillOrigin != value) {
            this._fillOrigin = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get fillClockwise() {
        return this._fillClockwise;
    }
    set fillClockwise(value) {
        if (this._fillClockwise != value) {
            this._fillClockwise = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get fillAmount() {
        return this._fillAmount;
    }
    set fillAmount(value) {
        if (this._fillAmount != value) {
            this._fillAmount = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this._color != value) {
            this._color = value;
            ToolSet.setColorFilter(this, value);
        }
    }
    markChanged(flag) {
        if (!this._needRebuild) {
            this._needRebuild = flag;
            // Laya.timer.callLater(this, this.rebuild);
        }
        else
            this._needRebuild |= flag;
    }
    rebuild() {
        if ((this._needRebuild & 1) != 0)
            this.doDraw();
        if ((this._needRebuild & 2) != 0 && this._fillMethod != 0)
            this.doFill();
        this._needRebuild = 0;
    }
    doDraw() {
        var w = this["_width"];
        var h = this["_height"];
        var g = new Graphics(this.scene);
        var tex = this._source;
        g.clear();
        if (tex == null || w == 0 || h == 0) {
            return;
        }
        if (this._scaleByTile) ;
        else if (this._scale9Grid) {
            if (!this._sizeGrid) {
                var tw = tex.source[0].width;
                var th = tex.source[0].height;
                var left = this._scale9Grid.x;
                var right = Math.max(tw - this._scale9Grid.right, 0);
                var top = this._scale9Grid.y;
                var bottom = Math.max(th - this._scale9Grid.bottom, 0);
                this._sizeGrid = [top, right, bottom, left, this._tileGridIndice];
            }
            // todo draw9Grid
            //g.draw9Grid(tex, 0, 0, w, h, this._sizeGrid);
        }
        else ;
    }
    doFill() {
        var w = this["_width"];
        var h = this["_height"];
        var g = this._mask;
        g.clear();
        if (w == 0 || h == 0)
            return;
        var points = fillImage(w, h, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
        if (points == null) {
            //不知道为什么，不这样操作一下空白的遮罩不能生效
            this.mask = null;
            this.mask = this._mask.createGeometryMask();
            return;
        }
        // todo drawPoly
        // g.drawPoly(0, 0, points, "#FFFFFF");
    }
}

class GImage extends GObject {
    constructor() {
        super();
        this._flip = 0;
    }
    get image() {
        return this._image;
    }
    get color() {
        return this.image.color;
    }
    set color(value) {
        if (this.image.color != value) {
            this.image.color = value;
            this.updateGear(4);
        }
    }
    get flip() {
        return this._flip;
    }
    set flip(value) {
        if (this._flip != value) {
            this._flip = value;
            var sx = 1, sy = 1;
            if (this._flip == FlipType.Horizontal || this._flip == FlipType.Both)
                sx = -1;
            if (this._flip == FlipType.Vertical || this._flip == FlipType.Both)
                sy = -1;
            this.setScale(sx, sy);
            this.handleXYChanged();
        }
    }
    get fillMethod() {
        return this.image.fillMethod;
    }
    set fillMethod(value) {
        this.image.fillMethod = value;
    }
    get fillOrigin() {
        return this.image.fillOrigin;
    }
    set fillOrigin(value) {
        this.image.fillOrigin = value;
    }
    get fillClockwise() {
        return this.image.fillClockwise;
    }
    set fillClockwise(value) {
        this.image.fillClockwise = value;
    }
    get fillAmount() {
        return this.image.fillAmount;
    }
    set fillAmount(value) {
        this.image.fillAmount = value;
    }
    createDisplayObject() {
        this._displayObject = this._image = new Image(this.scene);
        // this.image.mouseEnabled = false;
        this._displayObject["$owner"] = this;
    }
    constructFromResource() {
        this._contentItem = this.packageItem.getBranch();
        this.sourceWidth = this._contentItem.width;
        this.sourceHeight = this._contentItem.height;
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;
        this._contentItem = this._contentItem.getHighResolution();
        this._contentItem.load();
        this.image.scale9Grid = this._contentItem.scale9Grid;
        this.image.scaleByTile = this._contentItem.scaleByTile;
        this.image.tileGridIndice = this._contentItem.tileGridIndice;
        this.image.texture = this._contentItem.texture;
        this.setSize(this.sourceWidth, this.sourceHeight);
    }
    handleXYChanged() {
        super.handleXYChanged();
        if (this._flip != FlipType.None) {
            if (this.scaleX == -1)
                this.image.x += this.width;
            if (this.scaleY == -1)
                this.image.y += this.height;
        }
    }
    getProp(index) {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }
    setProp(index, value) {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        if (buffer.readBool())
            this.color = buffer.readColorS();
        this.flip = buffer.readByte();
        this.image.fillMethod = buffer.readByte();
        if (this.image.fillMethod != 0) {
            this.image.fillOrigin = buffer.readByte();
            this.image.fillClockwise = buffer.readBool();
            this.image.fillAmount = buffer.readFloat();
        }
    }
}

class GMovieClip extends GObject {
    constructor() {
        super();
    }
    get color() {
        return this._movieClip.color;
    }
    set color(value) {
        this._movieClip.color = value;
    }
    createDisplayObject() {
        throw new Error("TODO");
        // this._displayObject = this._movieClip = new MovieClip();
        // this._movieClip.mouseEnabled = false;
        // this._displayObject["$owner"] = this;
    }
    get playing() {
        return this._movieClip.playing;
    }
    set playing(value) {
        if (this._movieClip.playing != value) {
            this._movieClip.playing = value;
            this.updateGear(5);
        }
    }
    get frame() {
        return this._movieClip.frame;
    }
    set frame(value) {
        if (this._movieClip.frame != value) {
            this._movieClip.frame = value;
            this.updateGear(5);
        }
    }
    get timeScale() {
        return this._movieClip.timeScale;
    }
    set timeScale(value) {
        this._movieClip.timeScale = value;
    }
    rewind() {
        this._movieClip.rewind();
    }
    syncStatus(anotherMc) {
        this._movieClip.syncStatus(anotherMc._movieClip);
    }
    advance(timeInMiniseconds) {
        this._movieClip.advance(timeInMiniseconds);
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    setPlaySettings(start, end, times, endAt, endHandler) {
        this._movieClip.setPlaySettings(start, end, times, endAt, endHandler);
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.Playing:
                return this.playing;
            case ObjectPropID.Frame:
                return this.frame;
            case ObjectPropID.TimeScale:
                return this.timeScale;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.Playing:
                this.playing = value;
                break;
            case ObjectPropID.Frame:
                this.frame = value;
                break;
            case ObjectPropID.TimeScale:
                this.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructFromResource() {
        var displayItem = this.packageItem.getBranch();
        this.sourceWidth = displayItem.width;
        this.sourceHeight = displayItem.height;
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;
        this.setSize(this.sourceWidth, this.sourceHeight);
        displayItem = displayItem.getHighResolution();
        displayItem.load();
        this._movieClip.interval = displayItem.interval;
        this._movieClip.swing = displayItem.swing;
        this._movieClip.repeatDelay = displayItem.repeatDelay;
        this._movieClip.frames = displayItem.frames;
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        if (buffer.readBool())
            this.color = buffer.readColorS();
        buffer.readByte(); //flip
        this._movieClip.frame = buffer.readInt();
        this._movieClip.playing = buffer.readBool();
    }
}

class DOMEventManager extends Phaser.Events.EventEmitter {
    constructor() {
        super();
        this.retEvent = {};
        this.nullLowestDeltaTimeout = null;
        /*******************keys*******************/
        this.$pressedKeys = {};
        this.$releasedKeys = {};
        this.$downKeys = [];
        //resize
        window.addEventListener("resize", e => this.notifyResizeEvents(e), false);
        //modifer keys
        window.addEventListener('keydown', e => this.onWindowKeyDown(e), false);
        window.addEventListener('keyup', e => this.onWindowKeyUp(e), false);
        //mouse wheel
        const toBind = ('onwheel' in document || document["documentMode"] >= 9) ?
            ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
        for (let i = toBind.length; i;) {
            window.addEventListener(toBind[--i], e => this.onMouseWheel(e), false);
        }
    }
    //resize
    notifyResizeEvents(e) {
        this.emit('resize');
    }
    onMouseWheel(event) {
        let orgEvent = (event || window.event), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0;
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        //FF DOMMouseScroll
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return;
        }
        // Delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            const lineHeight = 16; //fontSize - line-height;
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        }
        else if (orgEvent.deltaMode === 2) {
            const pageHeight = 16; //dom.clientHeight = page-height
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!this.lowestDelta || absDelta < this.lowestDelta) {
            this.lowestDelta = absDelta;
            if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0)
                this.lowestDelta /= 40;
        }
        if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / this.lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / this.lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / this.lowestDelta);
        this.retEvent.delta = delta;
        this.retEvent.deltaX = deltaX;
        this.retEvent.deltaY = deltaY;
        this.retEvent.deltaFactor = this.lowestDelta;
        this.retEvent.deltaMode = 0;
        if (this.nullLowestDeltaTimeout) {
            clearTimeout(this.nullLowestDeltaTimeout);
        }
        this.nullLowestDeltaTimeout = setTimeout(() => this.nullLowestDelta(), 200);
        this.emit(DisplayObjectEvent.MOUSE_WHEEL, this.retEvent);
    }
    nullLowestDelta() {
        this.lowestDelta = null;
    }
    isKeyDown(key) {
        return this.$downKeys.indexOf(key) >= 0;
    }
    isKeyPressed(key) {
        return !!this.$pressedKeys[key];
    }
    isKeyReleased(key) {
        return !!this.$releasedKeys[key];
    }
    onWindowKeyDown(evt) {
        let key = evt.which || evt.keyCode;
        if (!this.isKeyDown(key)) {
            this.$downKeys.push(key);
            this.$pressedKeys[key] = true;
            this.emit('keyPressed', key);
        }
    }
    onWindowKeyUp(evt) {
        let key = evt.which || evt.keyCode;
        if (this.isKeyDown(key)) {
            this.$pressedKeys[key] = false;
            this.$releasedKeys[key] = true;
            let index = this.$downKeys.indexOf(key);
            if (index >= 0)
                this.$downKeys.splice(index, 1);
            this.emit('keyReleased', key);
        }
    }
}
DOMEventManager.inst = new DOMEventManager();

var StageOrientation;
(function (StageOrientation) {
    StageOrientation["AUTO"] = "auto";
    StageOrientation["PORTRAIT"] = "portrait";
    StageOrientation["LANDSCAPE"] = "landscape";
})(StageOrientation || (StageOrientation = {}));
var StageScaleMode;
(function (StageScaleMode) {
    StageScaleMode["NO_SCALE"] = "noScale";
    StageScaleMode["SHOW_ALL"] = "showAll";
    StageScaleMode["NO_BORDER"] = "noBorder";
    StageScaleMode["EXACT_FIT"] = "exactFit";
    StageScaleMode["FIXED_WIDTH"] = "fixedWidth";
    StageScaleMode["FIXED_HEIGHT"] = "fixedHeight";
    StageScaleMode["FIXED_AUTO"] = "fixedAuto";
})(StageScaleMode || (StageScaleMode = {}));
var StageAlign;
(function (StageAlign) {
    StageAlign[StageAlign["LEFT"] = 0] = "LEFT";
    StageAlign[StageAlign["CENTER"] = 1] = "CENTER";
    StageAlign[StageAlign["RIGHT"] = 2] = "RIGHT";
    StageAlign[StageAlign["TOP"] = 3] = "TOP";
    StageAlign[StageAlign["MIDDLE"] = 4] = "MIDDLE";
    StageAlign[StageAlign["BOTTOM"] = 5] = "BOTTOM";
})(StageAlign || (StageAlign = {}));
class DefaultBoudingRectCalculator {
    getRect(view, fallbackWidth, fallbackHeight) {
        let p = view.parentElement;
        if (!p)
            //this should be impossible situation unless the user forget to append the view into the DOM.
            throw new Error("Your view of Phaser are still in memory but not appended to DOM yet? it's necessary that there is a parent element to wrap your view up.");
        let rect = p.getBoundingClientRect();
        let ret = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        if (!rect || rect.width <= 0 || rect.height <= 0) {
            console.warn("It seems that you did not set a explicit size for the parent element of your view, now fall back to window size instead.");
            ret.width = window.innerWidth;
            ret.height = window.innerHeight;
            ret.x = 0;
            ret.y = 0;
        }
        else {
            ret.x = rect.left;
            ret.y = rect.top;
            ret.width = rect.width;
            ret.height = rect.height;
        }
        //consider the worst situation: window does not have size!!
        if (ret.width <= 0 || ret.height <= 0) {
            console.warn("fetch container size to initialize Phaser in all ways have failed, now use default size (fallbackWidth / fallbackHeight) specified in the options instead.");
            ret.width = fallbackWidth;
            ret.height = fallbackHeight;
        }
        return ret;
    }
}
class UIStage extends Phaser.Events.EventEmitter {
    constructor(scene) {
        super();
        this.scene = scene;
        this.$width = 0;
        this.$height = 0;
        this.$scaleX = 1;
        this.$scaleY = 1;
        this.$canvasMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        this.offsetX = 0;
        this.offsetY = 0;
        this.$sizeCalcer = new DefaultBoudingRectCalculator();
        UIStageInst.push(this);
    }
    get nativeStage() {
        return this.scene.input;
    }
    get stageWidth() {
        return this.$width;
    }
    get stageHeight() {
        return this.$height;
    }
    addChild(child, type, index = -1) {
        if (index < 0) {
            this.scene.sys.displayList[type].addChild(child);
        }
        else {
            this.scene.sys.displayList[type].addChildAt(child, index);
        }
    }
    removeChild(child, type) {
        this.scene.sys.displayList[type].removeChild(child);
    }
    /**@internal */
    updateScreenSize() {
        // todo resize screen
        // if (HTMLInput.isTyping) return;
        // let canvas = this.$appContext.view;
        // let canvasStyle: any = canvas.style;
        // let rect = this.$sizeCalcer.getRect(canvas, this.$options.fallbackWidth, this.$options.fallbackHeight);
        // let shouldRotate = false;
        // let orientation: string = this.$options.orientation;
        // if (orientation != StageOrientation.AUTO) {
        //     shouldRotate = orientation != StageOrientation.PORTRAIT && rect.height > rect.width
        //         || orientation == StageOrientation.PORTRAIT && rect.width > rect.height;
        // }
        // let screenWidth = shouldRotate ? rect.height : rect.width;
        // let screenHeight = shouldRotate ? rect.width : rect.height;
        // let stageSize = this.calculateStageSize(this.$options.scaleMode, screenWidth, screenHeight, this.$options.designWidth, this.$options.designHeight);
        // let stageWidth = stageSize.stageWidth;
        // let stageHeight = stageSize.stageHeight;
        // let displayWidth = stageSize.displayWidth;
        // let displayHeight = stageSize.displayHeight;
        // if (canvas.width !== stageWidth)
        //     canvas.width = stageWidth;
        // if (canvas.height !== stageHeight)
        //     canvas.height = stageHeight;
        // canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
        // canvasStyle.width = displayWidth + "px";
        // canvasStyle.height = displayHeight + "px";
        // //kevin add
        // this.$appContext.renderer.resize(stageWidth, stageHeight);
        // let mat = this.$canvasMatrix.identity();
        // let dispWidth = shouldRotate ? displayHeight : displayWidth;
        // let dispHeight = shouldRotate ? displayWidth : displayHeight;
        // let offx: number, offy: number;
        // if (this.$options.alignH == StageAlign.LEFT) offx = 0;
        // else if (this.$options.alignH == StageAlign.RIGHT) offx = rect.width - dispWidth;
        // else offx = (rect.width - dispWidth) * 0.5;
        // if (this.$options.alignV == StageAlign.TOP) offy = 0;
        // else if (this.$options.alignV == StageAlign.BOTTOM) offy = rect.height - dispHeight;
        // else offy = (rect.height - dispHeight) * 0.5;
        // let rotDeg = 0;
        // if (shouldRotate) {
        //     if (this.$options.orientation == StageOrientation.LANDSCAPE) {
        //         mat.rotate(Math.PI / 2);
        //         mat.translate(screenHeight - offx, offy);
        //         rotDeg = 90;
        //     }
        //     else {
        //         mat.rotate(-Math.PI / 2);
        //         mat.translate(offx, screenWidth - offy);
        //         rotDeg = -90;
        //     }
        // }
        // else
        //     mat.translate(offx, offy);
        // if (shouldRotate) {
        //     mat.tx += this.offsetY;
        //     mat.ty += this.offsetX;
        // }
        // else {
        //     mat.tx += this.offsetX;
        //     mat.ty += this.offsetY;
        // }
        // mat.a = this.formatData(mat.a), mat.d = this.formatData(mat.d),
        //     mat.tx = this.formatData(mat.tx), mat.ty = this.formatData(mat.ty);
        // canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
        // canvasStyle.transform = canvasStyle.webkitTransform = canvasStyle.msTransform = canvasStyle.mozTransform = canvasStyle.oTransform = `matrix(${mat.a},${mat.b},${mat.c},${mat.d},${mat.tx},${mat.ty})`;
        // this.$width = stageWidth;
        // this.$height = stageHeight;
        // this.$scaleX = stageWidth / displayWidth
        // this.$scaleY = stageHeight / displayHeight;
        // let im = this.$appContext.renderer.plugins.interaction as PIXI.extras.InteractionManager;
        // im.stageRotation = rotDeg;
        // im.stageScaleX = this.$scaleX;
        // im.stageScaleY = this.$scaleY;
        // this.$appContext.renderer.resize(stageWidth, stageHeight);
        // HTMLInput.inst.updateSize(displayWidth / stageWidth, displayHeight / stageHeight);
        this.emit(DisplayObjectEvent.SIZE_CHANGED, this);
    }
}
let UIStageInst = [];
let resizeCheckTimer = NaN;
function resizeHandler() {
    UIStageInst.forEach(stage => {
        stage.updateScreenSize();
    });
}
DOMEventManager.inst.on("resize", function () {
    clearTimeout(resizeCheckTimer);
    resizeCheckTimer = window.setTimeout(resizeHandler, 300);
});

class TranslationHelper {
    static loadFromXML(source) {
        let strings = {};
        TranslationHelper.strings = strings;
        const xml = Phaser.DOM.ParseXML(source);
        const resNode = findChildNode(xml, "resources");
        const nodes = resNode.childNodes;
        const length1 = nodes.length;
        for (let i1 = 0; i1 < length1; i1++) {
            const cxml = nodes[i1];
            if (cxml.nodeName == "string") {
                var key = cxml.getAttribute("name");
                var text = cxml.textContent;
                var i = key.indexOf("-");
                if (i == -1)
                    continue;
                var key2 = key.substr(0, i);
                var key3 = key.substr(i + 1);
                var col = strings[key2];
                if (!col) {
                    col = {};
                    strings[key2] = col;
                }
                col[key3] = text;
            }
        }
    }
    static translateComponent(item) {
        if (TranslationHelper.strings == null) {
            return;
        }
        const compStrings = TranslationHelper.strings[item.owner.id + item.id];
        if (compStrings == null) {
            return;
        }
        var elementId, value;
        var buffer = item.rawData;
        var nextPos;
        var itemCount;
        var i, j, k;
        var dataLen;
        var curPos;
        var valueCnt;
        var page;
        buffer.seek(0, 2);
        var childCount = buffer.readShort();
        for (i = 0; i < childCount; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.position;
            buffer.seek(curPos, 0);
            var baseType = buffer.readByte();
            var type = baseType;
            buffer.skip(4);
            elementId = buffer.readS();
            if (type == ObjectType.Component) {
                if (buffer.seek(curPos, 6))
                    type = buffer.readByte();
            }
            buffer.seek(curPos, 1);
            if ((value = compStrings[elementId + "-tips"]) != null)
                buffer.writeS(value);
            buffer.seek(curPos, 2);
            var gearCnt = buffer.readShort();
            for (j = 0; j < gearCnt; j++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                if (buffer.readByte() == 6) //gearText
                 {
                    buffer.skip(2); //controller
                    valueCnt = buffer.readShort();
                    for (k = 0; k < valueCnt; k++) {
                        page = buffer.readS();
                        if (page != null) {
                            if ((value = compStrings[elementId + "-texts_" + k]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                        }
                    }
                    if (buffer.readBool() && (value = compStrings[elementId + "-texts_def"]) != null)
                        buffer.writeS(value);
                }
                buffer.position = nextPos;
            }
            if (baseType == ObjectType.Component && buffer.version >= 2) {
                buffer.seek(curPos, 4);
                buffer.skip(2); //pageController
                buffer.skip(4 * buffer.readShort());
                var cpCount = buffer.readShort();
                for (var k = 0; k < cpCount; k++) {
                    var target = buffer.readS();
                    var propertyId = buffer.readShort();
                    if (propertyId == 0 && (value = compStrings[elementId + "-cp-" + target]) != null)
                        buffer.writeS(value);
                    else
                        buffer.skip(2);
                }
            }
            switch (type) {
                case ObjectType.Text:
                case ObjectType.RichText:
                case ObjectType.InputText:
                    {
                        if ((value = compStrings[elementId]) != null) {
                            buffer.seek(curPos, 6);
                            buffer.writeS(value);
                        }
                        if ((value = compStrings[elementId + "-prompt"]) != null) {
                            buffer.seek(curPos, 4);
                            buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.List:
                case ObjectType.Tree:
                    {
                        buffer.seek(curPos, 8);
                        buffer.skip(2);
                        itemCount = buffer.readShort();
                        for (j = 0; j < itemCount; j++) {
                            nextPos = buffer.readShort();
                            nextPos += buffer.position;
                            buffer.skip(2); //url
                            if (type == ObjectType.Tree)
                                buffer.skip(2);
                            //title
                            if ((value = compStrings[elementId + "-" + j]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            //selected title
                            if ((value = compStrings[elementId + "-" + j + "-0"]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            if (buffer.version >= 2) {
                                buffer.skip(6);
                                buffer.skip(buffer.readUshort() * 4); //controllers
                                var cpCount = buffer.readUshort();
                                for (var k = 0; k < cpCount; k++) {
                                    var target = buffer.readS();
                                    var propertyId = buffer.readUshort();
                                    if (propertyId == 0 && (value = compStrings[elementId + "-" + j + "-" + target]) != null)
                                        buffer.writeS(value);
                                    else
                                        buffer.skip(2);
                                }
                            }
                            buffer.position = nextPos;
                        }
                        break;
                    }
                case ObjectType.Label:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            buffer.skip(2);
                            if (buffer.readBool())
                                buffer.skip(4);
                            buffer.skip(4);
                            if (buffer.readBool() && (value = compStrings[elementId + "-prompt"]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.Button:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            if ((value = compStrings[elementId + "-0"]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.ComboBox:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            itemCount = buffer.readShort();
                            for (j = 0; j < itemCount; j++) {
                                nextPos = buffer.readShort();
                                nextPos += buffer.position;
                                if ((value = compStrings[elementId + "-" + j]) != null)
                                    buffer.writeS(value);
                                buffer.position = nextPos;
                            }
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
            }
            buffer.position = curPos + dataLen;
        }
    }
}
function findChildNode(xml, name) {
    var col = xml.childNodes;
    var length1 = col.length;
    if (length1 > 0) {
        for (var i1 = 0; i1 < length1; i1++) {
            var cxml = col[i1];
            if (cxml.nodeName == name) {
                return cxml;
            }
        }
    }
    return null;
}

/**
 * 鼠标点击区域，可以设置绘制一系列矢量图作为点击区域和非点击区域（目前只支持圆形，矩形，多边形）
 *
 */
class HitArea {
    /**
     * 检测对象是否包含指定的点。
     * @param	x	点的 X 轴坐标值（水平位置）。
     * @param	y	点的 Y 轴坐标值（垂直位置）。
     * @return	如果包含指定的点，则值为 true；否则为 false。
     */
    contains(x, y) {
        if (!HitArea._isHitGraphic(x, y, this.hit))
            return false;
        return !HitArea._isHitGraphic(x, y, this.unHit);
    }
    /**
     * @internal
     * 是否击中Graphic
     */
    static _isHitGraphic(x, y, graphic) {
        if (!graphic)
            return false;
        if (HitArea._isHitCmd(x, y, graphic))
            return true;
        return false;
    }
    /**
     * @internal
     * 是否击中绘图指令
     */
    static _isHitCmd(x, y, g) {
        let rst = false;
        const type = g.graphicsType;
        switch (type) {
            case GRAPHICSTYPE.CIRCLE:
                var d;
                x -= g.x;
                y -= g.y;
                d = x * x + y * y;
                rst = d < g.radius * g.radius;
                break;
            case GRAPHICSTYPE.POLY:
                x -= g.x;
                y -= g.y;
                rst = HitArea._ptInPolygon(x, y, g.points);
                break;
            case GRAPHICSTYPE.RECTANGLE:
            default:
                HitArea._rect.setTo(g.x, g.y, g.width, g.height);
                rst = HitArea._rect.contains(x, y);
                break;
        }
        return rst;
    }
    /**
     * @internal
     * 坐标是否在多边形内
     */
    static _ptInPolygon(x, y, areaPoints) {
        var p = HitArea._ptPoint;
        p.setTo(x, y);
        // 交点个数
        var nCross = 0;
        var p1x, p1y, p2x, p2y;
        var len;
        len = areaPoints.length;
        for (var i = 0; i < len; i += 2) {
            p1x = areaPoints[i];
            p1y = areaPoints[i + 1];
            p2x = areaPoints[(i + 2) % len];
            p2y = areaPoints[(i + 3) % len];
            //var p1:Point = areaPoints[i];
            //var p2:Point = areaPoints[(i + 1) % areaPoints.length]; // 最后一个点与第一个点连线
            if (p1y == p2y)
                continue;
            if (p.y < Math.min(p1y, p2y))
                continue;
            if (p.y >= Math.max(p1y, p2y))
                continue;
            // 求交点的x坐标
            var tx = (p.y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x;
            // 只统计p1p2与p向右射线的交点
            if (tx > p.x)
                nCross++;
        }
        // 交点为偶数，点在多边形之外
        return (nCross % 2 == 1);
    }
    /**
     * 可点击区域，可以设置绘制一系列矢量图作为点击区域（目前只支持圆形，矩形，多边形）
     */
    get hit() {
        if (!this._hit)
            this._hit = new Graphics(GRoot.inst.scene);
        return this._hit;
    }
    set hit(value) {
        this._hit = value;
    }
    /**
     * 不可点击区域，可以设置绘制一系列矢量图作为非点击区域（目前只支持圆形，矩形，多边形）
     */
    get unHit() {
        if (!this._unHit)
            this._unHit = new Graphics(GRoot.inst.scene);
        return this._unHit;
    }
    set unHit(value) {
        this._unHit = value;
    }
}
/**@private */
HitArea._rect = new Phaser.Geom.Rectangle();
/**@private */
HitArea._ptPoint = new Phaser.Geom.Point();

class PixelHitTest extends HitArea {
    constructor(data, offsetX, offsetY) {
        super();
        this._data = data;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.scaleX = 1;
        this.scaleY = 1;
    }
    contains(x, y) {
        x = Math.floor((x / this.scaleX - this.offsetX) * this._data.scale);
        y = Math.floor((y / this.scaleY - this.offsetY) * this._data.scale);
        if (x < 0 || y < 0 || x >= this._data.pixelWidth)
            return false;
        var pos = y * this._data.pixelWidth + x;
        var pos2 = Math.floor(pos / 8);
        var pos3 = pos % 8;
        if (pos2 >= 0 && pos2 < this._data.pixels.length)
            return ((this._data.pixels[pos2] >> pos3) & 0x1) == 1;
        else
            return false;
    }
}

let _func = HitArea["_isHitGraphic"];
class ChildHitArea extends HitArea {
    constructor(child, reversed) {
        super();
        this._tPos = new Phaser.Geom.Point();
        this._child = child;
        this._reversed = reversed;
        if (this._reversed)
            this.unHit = child.hitArea.hit;
        else
            this.hit = child.hitArea.hit;
    }
    ;
    contains(x, y) {
        var tPos;
        tPos = this._tPos;
        tPos.setTo(0, 0);
        tPos = this._child.toParentPoint(tPos);
        if (this._reversed)
            return !_func(x - tPos.x, y - tPos.y, this.unHit);
        else
            return _func(x - tPos.x, y - tPos.y, this.hit);
    }
}

class Margin {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    }
    copy(source) {
        this.top = source.top;
        this.bottom = source.bottom;
        this.left = source.left;
        this.right = source.right;
    }
}

class ScrollPane {
    constructor(owner) {
        this._owner = owner;
        throw new Error("TODO");
        // this._owner.on(Laya.Event.MOUSE_DOWN, this, this.__mouseDown);
        // this._owner.on(Laya.Event.MOUSE_WHEEL, this, this.__mouseWheel);
    }
    setup(buffer) {
        throw new Error("TODO");
        // this._scrollType = buffer.readByte();
        // var scrollBarDisplay: number = buffer.readByte();
        // var flags: number = buffer.readInt();
        // if (buffer.readBool()) {
        //     this._scrollBarMargin.top = buffer.readInt();
        //     this._scrollBarMargin.bottom = buffer.readInt();
        //     this._scrollBarMargin.left = buffer.readInt();
        //     this._scrollBarMargin.right = buffer.readInt();
        // }
        // var vtScrollBarRes: string = buffer.readS();
        // var hzScrollBarRes: string = buffer.readS();
        // var headerRes: string = buffer.readS();
        // var footerRes: string = buffer.readS();
        // if ((flags & 1) != 0) this._displayOnLeft = true;
        // if ((flags & 2) != 0) this._snapToItem = true;
        // if ((flags & 4) != 0) this._displayInDemand = true;
        // if ((flags & 8) != 0) this._pageMode = true;
        // if (flags & 16)
        //     this._touchEffect = true;
        // else if (flags & 32)
        //     this._touchEffect = false;
        // else
        //     this._touchEffect = UIConfig.defaultScrollTouchEffect;
        // if (flags & 64)
        //     this._bouncebackEffect = true;
        // else if (flags & 128)
        //     this._bouncebackEffect = false;
        // else
        //     this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
        // if ((flags & 256) != 0) this._inertiaDisabled = true;
        // if ((flags & 512) == 0) this._maskContainer.scrollRect = new Laya.Rectangle();
        // if ((flags & 1024) != 0) this._floating = true;
        // if ((flags & 2048) != 0) this._dontClipMargin = true;
        // if (scrollBarDisplay == ScrollBarDisplayType.Default)
        //     scrollBarDisplay = UIConfig.defaultScrollBarDisplay;
        // if (scrollBarDisplay != ScrollBarDisplayType.Hidden) {
        //     if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) {
        //         var res: string = vtScrollBarRes ? vtScrollBarRes : UIConfig.verticalScrollBar;
        //         if (res) {
        //             this._vtScrollBar = <GScrollBar>(UIPackage.createObjectFromURL(res));
        //             if (!this._vtScrollBar)
        //                 throw "cannot create scrollbar from " + res;
        //             this._vtScrollBar.setScrollPane(this, true);
        //             this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
        //         }
        //     }
        //     if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Horizontal) {
        //         res = hzScrollBarRes ? hzScrollBarRes : UIConfig.horizontalScrollBar;
        //         if (res) {
        //             this._hzScrollBar = <GScrollBar>(UIPackage.createObjectFromURL(res));
        //             if (!this._hzScrollBar)
        //                 throw "cannot create scrollbar from " + res;
        //             this._hzScrollBar.setScrollPane(this, false);
        //             this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
        //         }
        //     }
        //     if (scrollBarDisplay == ScrollBarDisplayType.Auto)
        //         this._scrollBarDisplayAuto = true;
        //     if (this._scrollBarDisplayAuto) {
        //         if (this._vtScrollBar)
        //             this._vtScrollBar.displayObject.visible = false;
        //         if (this._hzScrollBar)
        //             this._hzScrollBar.displayObject.visible = false;
        //     }
        // }
        // else
        //     this._mouseWheelEnabled = false;
        // if (headerRes) {
        //     this._header = <GComponent>UIPackage.createObjectFromURL(headerRes);
        //     if (!this._header)
        //         throw new Error("FairyGUI: cannot create scrollPane this.header from " + headerRes);
        // }
        // if (footerRes) {
        //     this._footer = <GComponent>UIPackage.createObjectFromURL(footerRes);
        //     if (!this._footer)
        //         throw new Error("FairyGUI: cannot create scrollPane this.footer from " + footerRes);
        // }
        // if (this._header || this._footer)
        //     this._refreshBarAxis = (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) ? "y" : "x";
        // this.setSize(this.owner.width, this.owner.height);
    }
    dispose() {
        if (ScrollPane.draggingPane == this) {
            ScrollPane.draggingPane = null;
        }
        if (this._tweening != 0)
            throw new Error("TODO");
        // Laya.timer.clear(this, this.tweenUpdate);
        this._pageController = null;
        if (this._hzScrollBar)
            this._hzScrollBar.dispose();
        if (this._vtScrollBar)
            this._vtScrollBar.dispose();
        if (this._header)
            this._header.dispose();
        if (this._footer)
            this._footer.dispose();
    }
    get owner() {
        return this._owner;
    }
    get hzScrollBar() {
        return this._hzScrollBar;
    }
    get vtScrollBar() {
        return this._vtScrollBar;
    }
    get header() {
        return this._header;
    }
    get footer() {
        return this._footer;
    }
    get bouncebackEffect() {
        return this._bouncebackEffect;
    }
    set bouncebackEffect(sc) {
        this._bouncebackEffect = sc;
    }
    get touchEffect() {
        return this._touchEffect;
    }
    set touchEffect(sc) {
        this._touchEffect = sc;
    }
    set scrollStep(val) {
        this._scrollStep = val;
        if (this._scrollStep == 0)
            this._scrollStep = UIConfig.defaultScrollStep;
        this._mouseWheelStep = this._scrollStep * 2;
    }
    get scrollStep() {
        return this._scrollStep;
    }
    get snapToItem() {
        return this._snapToItem;
    }
    set snapToItem(value) {
        this._snapToItem = value;
    }
    get mouseWheelEnabled() {
        return this._mouseWheelEnabled;
    }
    set mouseWheelEnabled(value) {
        this._mouseWheelEnabled = value;
    }
    get decelerationRate() {
        return this._decelerationRate;
    }
    set decelerationRate(value) {
        this._decelerationRate = value;
    }
    get isDragged() {
        return this._dragged;
    }
    get percX() {
        return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
    }
    set percX(value) {
        this.setPercX(value, false);
    }
    setPercX(value, ani) {
        this._owner.ensureBoundsCorrect();
        this.setPosX(this._overlapSize.x * ToolSet.clamp01(value), ani);
    }
    get percY() {
        return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
    }
    set percY(value) {
        this.setPercY(value, false);
    }
    setPercY(value, ani) {
        this._owner.ensureBoundsCorrect();
        this.setPosY(this._overlapSize.y * ToolSet.clamp01(value), ani);
    }
    get posX() {
        return this._xPos;
    }
    set posX(value) {
        this.setPosX(value, false);
    }
    setPosX(value, ani) {
        this._owner.ensureBoundsCorrect();
        if (this._loop == 1)
            value = this.loopCheckingNewPos(value, "x");
        value = ToolSet.clamp(value, 0, this._overlapSize.x);
        if (value != this._xPos) {
            this._xPos = value;
            this.posChanged(ani);
        }
    }
    get posY() {
        return this._yPos;
    }
    set posY(value) {
        this.setPosY(value, false);
    }
    setPosY(value, ani) {
        this._owner.ensureBoundsCorrect();
        if (this._loop == 1)
            value = this.loopCheckingNewPos(value, "y");
        value = ToolSet.clamp(value, 0, this._overlapSize.y);
        if (value != this._yPos) {
            this._yPos = value;
            this.posChanged(ani);
        }
    }
    get contentWidth() {
        return this._contentSize.x;
    }
    get contentHeight() {
        return this._contentSize.y;
    }
    get viewWidth() {
        return this._viewSize.x;
    }
    set viewWidth(value) {
        value = value + this._owner.margin.left + this._owner.margin.right;
        if (this._vtScrollBar && !this._floating)
            value += this._vtScrollBar.width;
        this._owner.width = value;
    }
    get viewHeight() {
        return this._viewSize.y;
    }
    set viewHeight(value) {
        value = value + this._owner.margin.top + this._owner.margin.bottom;
        if (this._hzScrollBar && !this._floating)
            value += this._hzScrollBar.height;
        this._owner.height = value;
    }
    get currentPageX() {
        if (!this._pageMode)
            return 0;
        var page = Math.floor(this._xPos / this._pageSize.x);
        if (this._xPos - page * this._pageSize.x > this._pageSize.x * 0.5)
            page++;
        return page;
    }
    set currentPageX(value) {
        this.setCurrentPageX(value, false);
    }
    get currentPageY() {
        if (!this._pageMode)
            return 0;
        var page = Math.floor(this._yPos / this._pageSize.y);
        if (this._yPos - page * this._pageSize.y > this._pageSize.y * 0.5)
            page++;
        return page;
    }
    set currentPageY(value) {
        this.setCurrentPageY(value, false);
    }
    setCurrentPageX(value, ani) {
        if (!this._pageMode)
            return;
        this._owner.ensureBoundsCorrect();
        if (this._overlapSize.x > 0)
            this.setPosX(value * this._pageSize.x, ani);
    }
    setCurrentPageY(value, ani) {
        if (!this._pageMode)
            return;
        this._owner.ensureBoundsCorrect();
        if (this._overlapSize.y > 0)
            this.setPosY(value * this._pageSize.y, ani);
    }
    get isBottomMost() {
        return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
    }
    get isRightMost() {
        return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
    }
    get pageController() {
        return this._pageController;
    }
    set pageController(value) {
        this._pageController = value;
    }
    get scrollingPosX() {
        return ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
    }
    get scrollingPosY() {
        return ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
    }
    scrollTop(ani) {
        this.setPercY(0, ani);
    }
    scrollBottom(ani) {
        this.setPercY(1, ani);
    }
    scrollUp(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosY(this._yPos - this._pageSize.y * ratio, ani);
        else
            this.setPosY(this._yPos - this._scrollStep * ratio, ani);
    }
    scrollDown(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosY(this._yPos + this._pageSize.y * ratio, ani);
        else
            this.setPosY(this._yPos + this._scrollStep * ratio, ani);
    }
    scrollLeft(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosX(this._xPos - this._pageSize.x * ratio, ani);
        else
            this.setPosX(this._xPos - this._scrollStep * ratio, ani);
    }
    scrollRight(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosX(this._xPos + this._pageSize.x * ratio, ani);
        else
            this.setPosX(this._xPos + this._scrollStep * ratio, ani);
    }
    scrollToView(target, ani, setFirst) {
        this._owner.ensureBoundsCorrect();
        if (this._needRefresh)
            this.refresh();
        var rect;
        if (target instanceof GObject) {
            if (target.parent != this._owner) {
                target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, s_rect);
                rect = this._owner.globalToLocalRect(s_rect.x, s_rect.y, s_rect.width, s_rect.height, s_rect);
            }
            else {
                rect = s_rect;
                rect.setTo(target.x, target.y, target.width, target.height);
            }
        }
        else
            rect = target;
        if (this._overlapSize.y > 0) {
            var bottom = this._yPos + this._viewSize.y;
            if (setFirst || rect.y <= this._yPos || rect.height >= this._viewSize.y) {
                if (this._pageMode)
                    this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                else
                    this.setPosY(rect.y, ani);
            }
            else if (rect.y + rect.height > bottom) {
                if (this._pageMode)
                    this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                else if (rect.height <= this._viewSize.y / 2)
                    this.setPosY(rect.y + rect.height * 2 - this._viewSize.y, ani);
                else
                    this.setPosY(rect.y + rect.height - this._viewSize.y, ani);
            }
        }
        if (this._overlapSize.x > 0) {
            var right = this._xPos + this._viewSize.x;
            if (setFirst || rect.x <= this._xPos || rect.width >= this._viewSize.x) {
                if (this._pageMode)
                    this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                else
                    this.setPosX(rect.x, ani);
            }
            else if (rect.x + rect.width > right) {
                if (this._pageMode)
                    this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                else if (rect.width <= this._viewSize.x / 2)
                    this.setPosX(rect.x + rect.width * 2 - this._viewSize.x, ani);
                else
                    this.setPosX(rect.x + rect.width - this._viewSize.x, ani);
            }
        }
        if (!ani && this._needRefresh)
            this.refresh();
    }
    isChildInView(obj) {
        if (this._overlapSize.y > 0) {
            var dist = obj.y + this._container.y;
            if (dist < -obj.height || dist > this._viewSize.y)
                return false;
        }
        if (this._overlapSize.x > 0) {
            dist = obj.x + this._container.x;
            if (dist < -obj.width || dist > this._viewSize.x)
                return false;
        }
        return true;
    }
    cancelDragging() {
        throw new Error("TODO");
        // this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
        // this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp);
        // this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click);
        // if (ScrollPane.draggingPane == this)
        //     ScrollPane.draggingPane = null;
        // _gestureFlag = 0;
        // this._dragged = false;
        // this._maskContainer.mouseEnabled = true;
    }
    lockHeader(size) {
        if (this._headerLockedSize == size)
            return;
        this._headerLockedSize = size;
        if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0) {
            this._tweenStart.setTo(this._container.x, this._container.y);
            this._tweenChange.setTo(0, 0);
            this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis];
            this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            this.startTween(2);
        }
    }
    lockFooter(size) {
        if (this._footerLockedSize == size)
            return;
        this._footerLockedSize = size;
        if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis]) {
            this._tweenStart.setTo(this._container.x, this._container.y);
            this._tweenChange.setTo(0, 0);
            var max = this._overlapSize[this._refreshBarAxis];
            if (max == 0)
                max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
            else
                max += this._footerLockedSize;
            this._tweenChange[this._refreshBarAxis] = -max - this._tweenStart[this._refreshBarAxis];
            this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            this.startTween(2);
        }
    }
    onOwnerSizeChanged() {
        this.setSize(this._owner.width, this._owner.height);
        this.posChanged(false);
    }
    handleControllerChanged(c) {
        if (this._pageController == c) {
            if (this._scrollType == ScrollType.Horizontal)
                this.setCurrentPageX(c.selectedIndex, true);
            else
                this.setCurrentPageY(c.selectedIndex, true);
        }
    }
    updatePageController() {
        if (this._pageController != null && !this._pageController.changing) {
            var index;
            if (this._scrollType == ScrollType.Horizontal)
                index = this.currentPageX;
            else
                index = this.currentPageY;
            if (index < this._pageController.pageCount) {
                var c = this._pageController;
                this._pageController = null; //防止HandleControllerChanged的调用
                c.selectedIndex = index;
                this._pageController = c;
            }
        }
    }
    adjustMaskContainer() {
        throw new Error("TODO");
        // var mx: number = 0, my: number = 0;
        // if (this._dontClipMargin) {
        //     if (this._displayOnLeft && this._vtScrollBar && !this._floating)
        //         mx = this._vtScrollBar.width;
        // }
        // else {
        //     if (this._displayOnLeft && this._vtScrollBar && !this._floating)
        //         mx = this._owner.margin.left + this._vtScrollBar.width;
        //     else
        //         mx = this._owner.margin.left;
        //     my = this._owner.margin.top;
        // }
        // this._maskContainer.pos(mx, my);
        // mx = this._owner._alignOffset.x;
        // my = this._owner._alignOffset.y;
        // if (mx != 0 || my != 0 || this._dontClipMargin) {
        //     if (!this._alignContainer) {
        //         throw new Error("TODO");
        //         // this._alignContainer = new Laya.Sprite();
        //         // this._maskContainer.addChild(this._alignContainer);
        //         // this._alignContainer.addChild(this._container);
        //     }
        // }
        // if (this._alignContainer) {
        //     if (this._dontClipMargin) {
        //         mx += this._owner.margin.left;
        //         my += this._owner.margin.top;
        //     }
        //     this._alignContainer.pos(mx, my);
        // }
    }
    setSize(aWidth, aHeight) {
        this.adjustMaskContainer();
        if (this._hzScrollBar) {
            this._hzScrollBar.y = aHeight - this._hzScrollBar.height;
            if (this._vtScrollBar) {
                this._hzScrollBar.width = aWidth - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                if (this._displayOnLeft)
                    this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width;
                else
                    this._hzScrollBar.x = this._scrollBarMargin.left;
            }
            else {
                this._hzScrollBar.width = aWidth - this._scrollBarMargin.left - this._scrollBarMargin.right;
                this._hzScrollBar.x = this._scrollBarMargin.left;
            }
        }
        if (this._vtScrollBar) {
            if (!this._displayOnLeft)
                this._vtScrollBar.x = aWidth - this._vtScrollBar.width;
            if (this._hzScrollBar)
                this._vtScrollBar.height = aHeight - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
            else
                this._vtScrollBar.height = aHeight - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
            this._vtScrollBar.y = this._scrollBarMargin.top;
        }
        this._viewSize.x = aWidth;
        this._viewSize.y = aHeight;
        if (this._hzScrollBar && !this._floating)
            this._viewSize.y -= this._hzScrollBar.height;
        if (this._vtScrollBar && !this._floating)
            this._viewSize.x -= this._vtScrollBar.width;
        this._viewSize.x -= (this._owner.margin.left + this._owner.margin.right);
        this._viewSize.y -= (this._owner.margin.top + this._owner.margin.bottom);
        this._viewSize.x = Math.max(1, this._viewSize.x);
        this._viewSize.y = Math.max(1, this._viewSize.y);
        this._pageSize.x = this._viewSize.x;
        this._pageSize.y = this._viewSize.y;
        this.handleSizeChanged();
    }
    setContentSize(aWidth, aHeight) {
        if (this._contentSize.x == aWidth && this._contentSize.y == aHeight)
            return;
        this._contentSize.x = aWidth;
        this._contentSize.y = aHeight;
        this.handleSizeChanged();
    }
    changeContentSizeOnScrolling(deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
        var isRightmost = this._xPos == this._overlapSize.x;
        var isBottom = this._yPos == this._overlapSize.y;
        this._contentSize.x += deltaWidth;
        this._contentSize.y += deltaHeight;
        this.handleSizeChanged();
        if (this._tweening == 1) {
            //如果原来滚动位置是贴边，加入处理继续贴边。
            if (deltaWidth != 0 && isRightmost && this._tweenChange.x < 0) {
                this._xPos = this._overlapSize.x;
                this._tweenChange.x = -this._xPos - this._tweenStart.x;
            }
            if (deltaHeight != 0 && isBottom && this._tweenChange.y < 0) {
                this._yPos = this._overlapSize.y;
                this._tweenChange.y = -this._yPos - this._tweenStart.y;
            }
        }
        else if (this._tweening == 2) {
            //重新调整起始位置，确保能够顺滑滚下去
            if (deltaPosX != 0) {
                this._container.x -= deltaPosX;
                this._tweenStart.x -= deltaPosX;
                this._xPos = -this._container.x;
            }
            if (deltaPosY != 0) {
                this._container.y -= deltaPosY;
                this._tweenStart.y -= deltaPosY;
                this._yPos = -this._container.y;
            }
        }
        else if (this._dragged) {
            if (deltaPosX != 0) {
                this._container.x -= deltaPosX;
                this._containerPos.x -= deltaPosX;
                this._xPos = -this._container.x;
            }
            if (deltaPosY != 0) {
                this._container.y -= deltaPosY;
                this._containerPos.y -= deltaPosY;
                this._yPos = -this._container.y;
            }
        }
        else {
            //如果原来滚动位置是贴边，加入处理继续贴边。
            if (deltaWidth != 0 && isRightmost) {
                this._xPos = this._overlapSize.x;
                this._container.x = -this._xPos;
            }
            if (deltaHeight != 0 && isBottom) {
                this._yPos = this._overlapSize.y;
                this._container.y = -this._yPos;
            }
        }
        if (this._pageMode)
            this.updatePageController();
    }
    handleSizeChanged() {
        throw new Error("TODO");
        // if (this._displayInDemand) {
        //     this._vScrollNone = this._contentSize.y <= this._viewSize.y;
        //     this._hScrollNone = this._contentSize.x <= this._viewSize.x;
        // }
        // if (this._vtScrollBar) {
        //     if (this._contentSize.y == 0)
        //         this._vtScrollBar.setDisplayPerc(0);
        //     else
        //         this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y));
        // }
        // if (this._hzScrollBar) {
        //     if (this._contentSize.x == 0)
        //         this._hzScrollBar.setDisplayPerc(0);
        //     else
        //         this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x));
        // }
        // this.updateScrollBarVisible();
        // var rect: Phaser.Geom.Rectangle = this._maskContainer.scrollRect;
        // if (rect) {
        //     rect.width = this._viewSize.x;
        //     rect.height = this._viewSize.y;
        //     if (this._vScrollNone && this._vtScrollBar)
        //         rect.width += this._vtScrollBar.width;
        //     if (this._hScrollNone && this._hzScrollBar)
        //         rect.height += this._hzScrollBar.height;
        //     if (this._dontClipMargin) {
        //         rect.width += (this._owner.margin.left + this._owner.margin.right);
        //         rect.height += (this._owner.margin.top + this._owner.margin.bottom);
        //     }
        //     this._maskContainer.scrollRect = rect;
        // }
        // if (this._scrollType == ScrollType.Horizontal || this._scrollType == ScrollType.Both)
        //     this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
        // else
        //     this._overlapSize.x = 0;
        // if (this._scrollType == ScrollType.Vertical || this._scrollType == ScrollType.Both)
        //     this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
        // else
        //     this._overlapSize.y = 0;
        // //边界检查
        // this._xPos = ToolSet.clamp(this._xPos, 0, this._overlapSize.x);
        // this._yPos = ToolSet.clamp(this._yPos, 0, this._overlapSize.y);
        // if (this._refreshBarAxis != null) {
        //     var max: number = this._overlapSize[this._refreshBarAxis];
        //     if (max == 0)
        //         max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
        //     else
        //         max += this._footerLockedSize;
        //     if (this._refreshBarAxis == "x") {
        //         this._container.pos(ToolSet.clamp(this._container.x, -max, this._headerLockedSize),
        //             ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
        //     }
        //     else {
        //         this._container.pos(ToolSet.clamp(this._container.x, -this._overlapSize.x, 0),
        //             ToolSet.clamp(this._container.y, -max, this._headerLockedSize));
        //     }
        //     if (this._header) {
        //         if (this._refreshBarAxis == "x")
        //             this._header.height = this._viewSize.y;
        //         else
        //             this._header.width = this._viewSize.x;
        //     }
        //     if (this._footer) {
        //         if (this._refreshBarAxis == "y")
        //             this._footer.height = this._viewSize.y;
        //         else
        //             this._footer.width = this._viewSize.x;
        //     }
        // }
        // else {
        //     this._container.pos(ToolSet.clamp(this._container.x, -this._overlapSize.x, 0),
        //         ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
        // }
        // this.updateScrollBarPos();
        // if (this._pageMode)
        //     this.updatePageController();
    }
    posChanged(ani) {
        throw new Error("TODO");
        // if (this._aniFlag == 0)
        //     this._aniFlag = ani ? 1 : -1;
        // else if (this._aniFlag == 1 && !ani)
        //     this._aniFlag = -1;
        // this._needRefresh = true;
        // Laya.timer.callLater(this, this.refresh);
    }
    refresh() {
        throw new Error("TODO");
        // if (!this._owner.displayObject) {
        //     return;
        // }
        // this._needRefresh = false;
        // Laya.timer.clear(this, this.refresh);
        // if (this._pageMode || this._snapToItem) {
        //     sEndPos.setTo(-this._xPos, -this._yPos);
        //     this.alignPosition(sEndPos, false);
        //     this._xPos = -sEndPos.x;
        //     this._yPos = -sEndPos.y;
        // }
        // this.refresh2();
        // Events.dispatch(Events.SCROLL, this._owner.displayObject);
        // if (this._needRefresh) //在onScroll事件里开发者可能修改位置，这里再刷新一次，避免闪烁
        // {
        //     this._needRefresh = false;
        //     Laya.timer.clear(this, this.refresh);
        //     this.refresh2();
        // }
        // this.updateScrollBarPos();
        // this._aniFlag = 0;
    }
    refresh2() {
        throw new Error("TODO");
        // if (this._aniFlag == 1 && !this._dragged) {
        //     var posX: number;
        //     var posY: number;
        //     if (this._overlapSize.x > 0)
        //         posX = -Math.floor(this._xPos);
        //     else {
        //         if (this._container.x != 0)
        //             this._container.x = 0;
        //         posX = 0;
        //     }
        //     if (this._overlapSize.y > 0)
        //         posY = -Math.floor(this._yPos);
        //     else {
        //         if (this._container.y != 0)
        //             this._container.y = 0;
        //         posY = 0;
        //     }
        //     if (posX != this._container.x || posY != this._container.y) {
        //         this._tweenDuration.setTo(TWEEN_TIME_GO, TWEEN_TIME_GO);
        //         this._tweenStart.setTo(this._container.x, this._container.y);
        //         this._tweenChange.setTo(posX - this._tweenStart.x, posY - this._tweenStart.y);
        //         this.startTween(1);
        //     }
        //     else if (this._tweening != 0)
        //         this.killTween();
        // }
        // else {
        //     if (this._tweening != 0)
        //         this.killTween();
        //     this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos));
        //     this.loopCheckingCurrent();
        // }
        // if (this._pageMode)
        //     this.updatePageController();
    }
    __mouseDown() {
        throw new Error("TODO");
        // if (!this._touchEffect)
        //     return;
        // if (this._tweening != 0) {
        //     this.killTween();
        //     this._dragged = true;
        // }
        // else
        //     this._dragged = false;
        // var pt = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
        // this._containerPos.setTo(this._container.x, this._container.y);
        // this._beginTouchPos.setTo(pt.x, pt.y);
        // this._lastTouchPos.setTo(pt.x, pt.y);
        // this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._isHoldAreaDone = false;
        // this._velocity.setTo(0, 0);
        // this._velocityScale = 1;
        // this._lastMoveTime = Laya.timer.currTimer / 1000;
        // this._owner.displayObject.stage.on(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
        // this._owner.displayObject.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseUp);
        // this._owner.displayObject.stage.on(Laya.Event.CLICK, this, this.__click);
    }
    __mouseMove() {
        // if (!this._touchEffect || this.owner.isDisposed)
        //     return;
        // if (ScrollPane.draggingPane && ScrollPane.draggingPane != this || GObject.draggingObject) //已经有其他拖动
        //     return;
        // var sensitivity: number = UIConfig.touchScrollSensitivity;
        // var pt: Laya.Point = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
        // var diff: number, diff2: number;
        // var sv: boolean, sh: boolean, st: boolean;
        // if (this._scrollType == ScrollType.Vertical) {
        //     if (!this._isHoldAreaDone) {
        //         //表示正在监测垂直方向的手势
        //         _gestureFlag |= 1;
        //         diff = Math.abs(this._beginTouchPos.y - pt.y);
        //         if (diff < sensitivity)
        //             return;
        //         if ((_gestureFlag & 2) != 0) //已经有水平方向的手势在监测，那么我们用严格的方式检查是不是按垂直方向移动，避免冲突
        //         {
        //             diff2 = Math.abs(this._beginTouchPos.x - pt.x);
        //             if (diff < diff2) //不通过则不允许滚动了
        //                 return;
        //         }
        //     }
        //     sv = true;
        // }
        // else if (this._scrollType == ScrollType.Horizontal) {
        //     if (!this._isHoldAreaDone) {
        //         _gestureFlag |= 2;
        //         diff = Math.abs(this._beginTouchPos.x - pt.x);
        //         if (diff < sensitivity)
        //             return;
        //         if ((_gestureFlag & 1) != 0) {
        //             diff2 = Math.abs(this._beginTouchPos.y - pt.y);
        //             if (diff < diff2)
        //                 return;
        //         }
        //     }
        //     sh = true;
        // }
        // else {
        //     _gestureFlag = 3;
        //     if (!this._isHoldAreaDone) {
        //         diff = Math.abs(this._beginTouchPos.y - pt.y);
        //         if (diff < sensitivity) {
        //             diff = Math.abs(this._beginTouchPos.x - pt.x);
        //             if (diff < sensitivity)
        //                 return;
        //         }
        //     }
        //     sv = sh = true;
        // }
        // var newPosX: number = Math.floor(this._containerPos.x + pt.x - this._beginTouchPos.x);
        // var newPosY: number = Math.floor(this._containerPos.y + pt.y - this._beginTouchPos.y);
        // if (sv) {
        //     if (newPosY > 0) {
        //         if (!this._bouncebackEffect)
        //             this._container.y = 0;
        //         else if (this._header && this._header.maxHeight != 0)
        //             this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.maxHeight));
        //         else
        //             this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * PULL_RATIO));
        //     }
        //     else if (newPosY < -this._overlapSize.y) {
        //         if (!this._bouncebackEffect)
        //             this._container.y = -this._overlapSize.y;
        //         else if (this._footer && this._footer.maxHeight > 0)
        //             this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._footer.maxHeight) - this._overlapSize.y);
        //         else
        //             this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._viewSize.y * PULL_RATIO) - this._overlapSize.y);
        //     }
        //     else
        //         this._container.y = newPosY;
        // }
        // if (sh) {
        //     if (newPosX > 0) {
        //         if (!this._bouncebackEffect)
        //             this._container.x = 0;
        //         else if (this._header && this._header.maxWidth != 0)
        //             this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.maxWidth));
        //         else
        //             this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * PULL_RATIO));
        //     }
        //     else if (newPosX < 0 - this._overlapSize.x) {
        //         if (!this._bouncebackEffect)
        //             this._container.x = -this._overlapSize.x;
        //         else if (this._footer && this._footer.maxWidth > 0)
        //             this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.maxWidth) - this._overlapSize.x);
        //         else
        //             this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * PULL_RATIO) - this._overlapSize.x);
        //     }
        //     else
        //         this._container.x = newPosX;
        // }
        // //更新速度
        // var frameRate: number = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60;
        // var now: number = Laya.timer.currTimer / 1000;
        // var deltaTime: number = Math.max(now - this._lastMoveTime, 1 / frameRate);
        // var deltaPositionX: number = pt.x - this._lastTouchPos.x;
        // var deltaPositionY: number = pt.y - this._lastTouchPos.y;
        // if (!sh)
        //     deltaPositionX = 0;
        // if (!sv)
        //     deltaPositionY = 0;
        // if (deltaTime != 0) {
        //     var elapsed: number = deltaTime * frameRate - 1;
        //     if (elapsed > 1) //速度衰减
        //     {
        //         var factor: number = Math.pow(0.833, elapsed);
        //         this._velocity.x = this._velocity.x * factor;
        //         this._velocity.y = this._velocity.y * factor;
        //     }
        //     this._velocity.x = ToolSet.lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
        //     this._velocity.y = ToolSet.lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
        // }
        // /*速度计算使用的是本地位移，但在后续的惯性滚动判断中需要用到屏幕位移，所以这里要记录一个位移的比例。
        // */
        // var deltaGlobalPositionX: number = this._lastTouchGlobalPos.x - Laya.stage.mouseX;
        // var deltaGlobalPositionY: number = this._lastTouchGlobalPos.y - Laya.stage.mouseY;
        // if (deltaPositionX != 0)
        //     this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
        // else if (deltaPositionY != 0)
        //     this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
        // this._lastTouchPos.setTo(pt.x, pt.y);
        // this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._lastMoveTime = now;
        // //同步更新pos值
        // if (this._overlapSize.x > 0)
        //     this._xPos = ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
        // if (this._overlapSize.y > 0)
        //     this._yPos = ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
        // //循环滚动特别检查
        // if (this._loop != 0) {
        //     newPosX = this._container.x;
        //     newPosY = this._container.y;
        //     if (this.loopCheckingCurrent()) {
        //         this._containerPos.x += this._container.x - newPosX;
        //         this._containerPos.y += this._container.y - newPosY;
        //     }
        // }
        // ScrollPane.draggingPane = this;
        // this._isHoldAreaDone = true;
        // this._dragged = true;
        // this._maskContainer.mouseEnabled = false;
        // this.updateScrollBarPos();
        // this.updateScrollBarVisible();
        // if (this._pageMode)
        //     this.updatePageController();
        // Events.dispatch(Events.SCROLL, this._owner.displayObject);
    }
    __mouseUp() {
        throw new Error("TODO");
        // if (this._owner.isDisposed)
        //     return;
        // this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
        // this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp);
        // this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click);
        // if (ScrollPane.draggingPane == this)
        //     ScrollPane.draggingPane = null;
        // _gestureFlag = 0;
        // if (!this._dragged || !this._touchEffect) {
        //     this._dragged = false;
        //     this._maskContainer.mouseEnabled = true;
        //     return;
        // }
        // this._dragged = false;
        // this._maskContainer.mouseEnabled = true;
        // this._tweenStart.setTo(this._container.x, this._container.y);
        // sEndPos.setTo(this._tweenStart.x, this._tweenStart.y);
        // var flag: boolean = false;
        // if (this._container.x > 0) {
        //     sEndPos.x = 0;
        //     flag = true;
        // }
        // else if (this._container.x < -this._overlapSize.x) {
        //     sEndPos.x = -this._overlapSize.x;
        //     flag = true;
        // }
        // if (this._container.y > 0) {
        //     sEndPos.y = 0;
        //     flag = true;
        // }
        // else if (this._container.y < -this._overlapSize.y) {
        //     sEndPos.y = -this._overlapSize.y;
        //     flag = true;
        // }
        // if (flag) {
        //     this._tweenChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
        //     if (this._tweenChange.x < -UIConfig.touchDragSensitivity || this._tweenChange.y < -UIConfig.touchDragSensitivity) {
        //         this._refreshEventDispatching = true;
        //         Events.dispatch(Events.PULL_DOWN_RELEASE, this._owner.displayObject);
        //         this._refreshEventDispatching = false;
        //     }
        //     else if (this._tweenChange.x > UIConfig.touchDragSensitivity || this._tweenChange.y > UIConfig.touchDragSensitivity) {
        //         this._refreshEventDispatching = true;
        //         Events.dispatch(Events.PULL_UP_RELEASE, this._owner.displayObject);
        //         this._refreshEventDispatching = false;
        //     }
        //     if (this._headerLockedSize > 0 && sEndPos[this._refreshBarAxis] == 0) {
        //         sEndPos[this._refreshBarAxis] = this._headerLockedSize;
        //         this._tweenChange.x = sEndPos.x - this._tweenStart.x;
        //         this._tweenChange.y = sEndPos.y - this._tweenStart.y;
        //     }
        //     else if (this._footerLockedSize > 0 && sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
        //         var max: number = this._overlapSize[this._refreshBarAxis];
        //         if (max == 0)
        //             max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
        //         else
        //             max += this._footerLockedSize;
        //         sEndPos[this._refreshBarAxis] = -max;
        //         this._tweenChange.x = sEndPos.x - this._tweenStart.x;
        //         this._tweenChange.y = sEndPos.y - this._tweenStart.y;
        //     }
        //     this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
        // }
        // else {
        //     //更新速度
        //     if (!this._inertiaDisabled) {
        //         var frameRate: number = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60;
        //         var elapsed: number = (Laya.timer.currTimer / 1000 - this._lastMoveTime) * frameRate - 1;
        //         if (elapsed > 1) {
        //             var factor: number = Math.pow(0.833, elapsed);
        //             this._velocity.x = this._velocity.x * factor;
        //             this._velocity.y = this._velocity.y * factor;
        //         }
        //         //根据速度计算目标位置和需要时间
        //         this.updateTargetAndDuration(this._tweenStart, sEndPos);
        //     }
        //     else
        //         this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
        //     sOldChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
        //     //调整目标位置
        //     this.loopCheckingTarget(sEndPos);
        //     if (this._pageMode || this._snapToItem)
        //         this.alignPosition(sEndPos, true);
        //     this._tweenChange.x = sEndPos.x - this._tweenStart.x;
        //     this._tweenChange.y = sEndPos.y - this._tweenStart.y;
        //     if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
        //         this.updateScrollBarVisible();
        //         return;
        //     }
        //     //如果目标位置已调整，随之调整需要时间
        //     if (this._pageMode || this._snapToItem) {
        //         this.fixDuration("x", sOldChange.x);
        //         this.fixDuration("y", sOldChange.y);
        //     }
        // }
        // this.startTween(2);
    }
    __click() {
        this._dragged = false;
    }
    __mouseWheel(evt) {
        throw new Error("TODO");
    }
    updateScrollBarPos() {
        if (this._vtScrollBar)
            this._vtScrollBar.setScrollPerc(this._overlapSize.y == 0 ? 0 : ToolSet.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y);
        if (this._hzScrollBar)
            this._hzScrollBar.setScrollPerc(this._overlapSize.x == 0 ? 0 : ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x);
        this.checkRefreshBar();
    }
    updateScrollBarVisible() {
        throw new Error("TODO");
        // if (this._vtScrollBar) {
        //     if (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone)
        //         this._vtScrollBar.displayObject.visible = false;
        //     else
        //         this.updateScrollBarVisible2(this._vtScrollBar);
        // }
        // if (this._hzScrollBar) {
        //     if (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone)
        //         this._hzScrollBar.displayObject.visible = false;
        //     else
        //         this.updateScrollBarVisible2(this._hzScrollBar);
        // }
    }
    updateScrollBarVisible2(bar) {
        throw new Error("TODO");
        // if (this._scrollBarDisplayAuto)
        //     GTween.kill(bar, false, "alpha");
        // if (this._scrollBarDisplayAuto && this._tweening == 0 && !this._dragged && !bar.gripDragging) {
        //     if (bar.displayObject.visible)
        //         GTween.to(1, 0, 0.5).setDelay(0.5).onComplete(this.__barTweenComplete, this).setTarget(bar, "alpha");
        // }
        // else {
        //     bar.alpha = 1;
        //     bar.displayObject.visible = true;
        // }
    }
    __barTweenComplete(tweener) {
        throw new Error("TODO");
        // var bar: GObject = <GObject>(tweener.target);
        // bar.alpha = 1;
        // bar.displayObject.visible = false;
    }
    getLoopPartSize(division, axis) {
        // return (this._contentSize[axis] + (axis == "x" ? (<GList>(this._owner)).columnGap : (<GList>(this._owner)).lineGap)) / division;
        return 0;
    }
    loopCheckingCurrent() {
        throw new Error("TODO");
        // var changed: boolean = false;
        // if (this._loop == 1 && this._overlapSize.x > 0) {
        //     if (this._xPos < 0.001) {
        //         this._xPos += this.getLoopPartSize(2, "x");
        //         changed = true;
        //     }
        //     else if (this._xPos >= this._overlapSize.x) {
        //         this._xPos -= this.getLoopPartSize(2, "x");
        //         changed = true;
        //     }
        // }
        // else if (this._loop == 2 && this._overlapSize.y > 0) {
        //     if (this._yPos < 0.001) {
        //         this._yPos += this.getLoopPartSize(2, "y");
        //         changed = true;
        //     }
        //     else if (this._yPos >= this._overlapSize.y) {
        //         this._yPos -= this.getLoopPartSize(2, "y");
        //         changed = true;
        //     }
        // }
        // if (changed)
        //     this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos));
        // return changed;
    }
    loopCheckingTarget(endPos) {
        if (this._loop == 1)
            this.loopCheckingTarget2(endPos, "x");
        if (this._loop == 2)
            this.loopCheckingTarget2(endPos, "y");
    }
    loopCheckingTarget2(endPos, axis) {
        var halfSize;
        var tmp;
        if (endPos[axis] > 0) {
            halfSize = this.getLoopPartSize(2, axis);
            tmp = this._tweenStart[axis] - halfSize;
            if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                endPos[axis] -= halfSize;
                this._tweenStart[axis] = tmp;
            }
        }
        else if (endPos[axis] < -this._overlapSize[axis]) {
            halfSize = this.getLoopPartSize(2, axis);
            tmp = this._tweenStart[axis] + halfSize;
            if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                endPos[axis] += halfSize;
                this._tweenStart[axis] = tmp;
            }
        }
    }
    loopCheckingNewPos(value, axis) {
        if (this._overlapSize[axis] == 0)
            return value;
        var pos = axis == "x" ? this._xPos : this._yPos;
        var changed = false;
        var v;
        if (value < 0.001) {
            value += this.getLoopPartSize(2, axis);
            if (value > pos) {
                v = this.getLoopPartSize(6, axis);
                v = Math.ceil((value - pos) / v) * v;
                pos = ToolSet.clamp(pos + v, 0, this._overlapSize[axis]);
                changed = true;
            }
        }
        else if (value >= this._overlapSize[axis]) {
            value -= this.getLoopPartSize(2, axis);
            if (value < pos) {
                v = this.getLoopPartSize(6, axis);
                v = Math.ceil((pos - value) / v) * v;
                pos = ToolSet.clamp(pos - v, 0, this._overlapSize[axis]);
                changed = true;
            }
        }
        if (changed) {
            if (axis == "x")
                this._container.x = -Math.floor(pos);
            else
                this._container.y = -Math.floor(pos);
        }
        return value;
    }
    alignPosition(pos, inertialScrolling) {
        if (this._pageMode) {
            pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
            pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
        }
        else if (this._snapToItem) {
            var xDir = 0;
            var yDir = 0;
            if (inertialScrolling) {
                xDir = pos.x - this._containerPos.x;
                yDir = pos.y - this._containerPos.y;
            }
            var pt = this._owner.getSnappingPositionWithDir(-pos.x, -pos.y, xDir, yDir, s_vec2);
            if (pos.x < 0 && pos.x > -this._overlapSize.x)
                pos.x = -pt.x;
            if (pos.y < 0 && pos.y > -this._overlapSize.y)
                pos.y = -pt.y;
        }
    }
    alignByPage(pos, axis, inertialScrolling) {
        var page;
        if (pos > 0)
            page = 0;
        else if (pos < -this._overlapSize[axis])
            page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
        else {
            page = Math.floor(-pos / this._pageSize[axis]);
            var change = inertialScrolling ? (pos - this._containerPos[axis]) : (pos - this._container[axis]);
            var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
            var delta = -pos - page * this._pageSize[axis];
            //页面吸附策略
            if (Math.abs(change) > this._pageSize[axis]) //如果滚动距离超过1页,则需要超过页面的一半，才能到更下一页
             {
                if (delta > testPageSize * 0.5)
                    page++;
            }
            else //否则只需要页面的1/3，当然，需要考虑到左移和右移的情况
             {
                if (delta > testPageSize * (change < 0 ? UIConfig.defaultScrollPagingThreshold : (1 - UIConfig.defaultScrollPagingThreshold)))
                    page++;
            }
            //重新计算终点
            pos = -page * this._pageSize[axis];
            if (pos < -this._overlapSize[axis]) //最后一页未必有pageSize那么大
                pos = -this._overlapSize[axis];
        }
        //惯性滚动模式下，会增加判断尽量不要滚动超过一页
        if (inertialScrolling) {
            var oldPos = this._tweenStart[axis];
            var oldPage;
            if (oldPos > 0)
                oldPage = 0;
            else if (oldPos < -this._overlapSize[axis])
                oldPage = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
            else
                oldPage = Math.floor(-oldPos / this._pageSize[axis]);
            var startPage = Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
            if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                if (page > startPage)
                    page = startPage + 1;
                else
                    page = startPage - 1;
                pos = -page * this._pageSize[axis];
            }
        }
        return pos;
    }
    updateTargetAndDuration(orignPos, resultPos) {
        resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
        resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
    }
    updateTargetAndDuration2(pos, axis) {
        this._velocity[axis];
        var duration = 0;
        if (pos > 0)
            pos = 0;
        else if (pos < -this._overlapSize[axis])
            pos = -this._overlapSize[axis];
        else {
            throw new Error("TODO");
            // //以屏幕像素为基准
            // var v2: number = Math.abs(v) * this._velocityScale;
            // //在移动设备上，需要对不同分辨率做一个适配，我们的速度判断以1136分辨率为基准
            // if (Laya.Browser.onMobile)
            //     v2 *= 1136 / Math.max(Laya.stage.width, Laya.stage.height);
            // //这里有一些阈值的处理，因为在低速内，不希望产生较大的滚动（甚至不滚动）
            // var ratio: number = 0;
            // if (this._pageMode || !Laya.Browser.onMobile) {
            //     if (v2 > 500)
            //         ratio = Math.pow((v2 - 500) / 500, 2);
            // }
            // else {
            //     if (v2 > 1000)
            //         ratio = Math.pow((v2 - 1000) / 1000, 2);
            // }
            // if (ratio != 0) {
            //     if (ratio > 1)
            //         ratio = 1;
            //     v2 *= ratio;
            //     v *= ratio;
            //     this._velocity[axis] = v;
            //     //算法：v*（_decelerationRate的n次幂）= 60，即在n帧后速度降为60（假设每秒60帧）。
            //     duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
            //     //计算距离要使用本地速度
            //     //理论公式貌似滚动的距离不够，改为经验公式
            //     //var change:number = (v/ 60 - 1) / (1 - this._decelerationRate);
            //     var change: number = Math.floor(v * duration * 0.4);
            //     pos += change;
            // }
        }
        if (duration < TWEEN_TIME_DEFAULT)
            duration = TWEEN_TIME_DEFAULT;
        this._tweenDuration[axis] = duration;
        return pos;
    }
    fixDuration(axis, oldChange) {
        if (this._tweenChange[axis] == 0 || Math.abs(this._tweenChange[axis]) >= Math.abs(oldChange))
            return;
        var newDuration = Math.abs(this._tweenChange[axis] / oldChange) * this._tweenDuration[axis];
        if (newDuration < TWEEN_TIME_DEFAULT)
            newDuration = TWEEN_TIME_DEFAULT;
        this._tweenDuration[axis] = newDuration;
    }
    startTween(type) {
        throw new Error("TODO");
        // this._tweenTime.setTo(0, 0);
        // this._tweening = type;
        // Laya.timer.frameLoop(1, this, this.tweenUpdate);
        // this.updateScrollBarVisible();
    }
    killTween() {
        throw new Error("TODO");
        // if (this._tweening == 1) //取消类型为1的tween需立刻设置到终点
        // {
        //     this._container.pos(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
        //     Events.dispatch(Events.SCROLL, this._owner.displayObject);
        // }
        // this._tweening = 0;
        // Laya.timer.clear(this, this.tweenUpdate);
        // this.updateScrollBarVisible();
        // Events.dispatch(Events.SCROLL_END, this._owner.displayObject);
    }
    checkRefreshBar() {
        throw new Error("TODO");
        // if (!this._header && !this._footer)
        //     return;
        // var pos: number = this._container[this._refreshBarAxis];
        // if (this._header) {
        //     if (pos > 0) {
        //         if (!this._header.displayObject.parent)
        //             this._maskContainer.addChildAt(this._header.displayObject, 0);
        //         var pt: Phaser.Geom.Point = s_vec2;
        //         pt.setTo(this._header.width, this._header.height);
        //         pt[this._refreshBarAxis] = pos;
        //         this._header.setSize(pt.x, pt.y);
        //     }
        //     else {
        //         if (this._header.displayObject.parent)
        //             this._maskContainer.removeChild(this._header.displayObject);
        //     }
        // }
        // if (this._footer) {
        //     var max: number = this._overlapSize[this._refreshBarAxis];
        //     if (pos < -max || max == 0 && this._footerLockedSize > 0) {
        //         if (!this._footer.displayObject.parent)
        //             this._maskContainer.addChildAt(this._footer.displayObject, 0);
        //         pt = s_vec2;
        //         pt.setTo(this._footer.x, this._footer.y);
        //         if (max > 0)
        //             pt[this._refreshBarAxis] = pos + this._contentSize[this._refreshBarAxis];
        //         else
        //             pt[this._refreshBarAxis] = Math.max(Math.min(pos + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize),
        //                 this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
        //         this._footer.setXY(pt.x, pt.y);
        //         pt.setTo(this._footer.width, this._footer.height);
        //         if (max > 0)
        //             pt[this._refreshBarAxis] = -max - pos;
        //         else
        //             pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
        //         this._footer.setSize(pt.x, pt.y);
        //     }
        //     else {
        //         if (this._footer.displayObject.parent)
        //             this._maskContainer.removeChild(this._footer.displayObject);
        //     }
        // }
    }
    tweenUpdate() {
        throw new Error("TODO");
        // var nx: number = this.runTween("x");
        // var ny: number = this.runTween("y");
        // this._container.pos(nx, ny);
        // if (this._tweening == 2) {
        //     if (this._overlapSize.x > 0)
        //         this._xPos = ToolSet.clamp(-nx, 0, this._overlapSize.x);
        //     if (this._overlapSize.y > 0)
        //         this._yPos = ToolSet.clamp(-ny, 0, this._overlapSize.y);
        //     if (this._pageMode)
        //         this.updatePageController();
        // }
        // if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
        //     throw new Error("TODO");
        //     // this._tweening = 0;
        //     // Laya.timer.clear(this, this.tweenUpdate);
        //     // this.loopCheckingCurrent();
        //     // this.updateScrollBarPos();
        //     // this.updateScrollBarVisible();
        //     // Events.dispatch(Events.SCROLL, this._owner.displayObject);
        //     // Events.dispatch(Events.SCROLL_END, this._owner.displayObject);
        // }
        // else {
        //     this.updateScrollBarPos();
        //     Events.dispatch(Events.SCROLL, this._owner.displayObject);
        // }
    }
    runTween(axis) {
        var newValue;
        if (this._tweenChange[axis] != 0) {
            throw new Error("TODO");
        }
        else
            newValue = this._container[axis];
        return newValue;
    }
}
const TWEEN_TIME_DEFAULT = 0.3; //惯性滚动的最小缓动时间
var s_vec2 = new Phaser.Geom.Point();
var s_rect = new Phaser.Geom.Rectangle();
new Phaser.Geom.Point();
new Phaser.Geom.Point();

class ByteBuffer {
    constructor(buffer, offset = 0, length = -1) {
        this.version = 0;
        if (length == -1)
            length = buffer.byteLength - offset;
        this._bytes = new Uint8Array(buffer, offset, length);
        this._view = new DataView(this._bytes.buffer, offset, length);
        this._pos = 0;
        this._length = length;
    }
    get data() {
        return this._bytes;
    }
    get position() {
        return this._pos;
    }
    set position(value) {
        if (value > this._length)
            throw "Out of bounds";
        this._pos = value;
    }
    skip(count) {
        this._pos += count;
    }
    validate(forward) {
        if (this._pos + forward > this._length)
            throw "Out of bounds";
    }
    readByte() {
        this.validate(1);
        return this._view.getInt8(this._pos++);
    }
    readUbyte() {
        return this._bytes[this._pos++];
    }
    readBool() {
        return this.readByte() == 1;
    }
    readShort() {
        this.validate(2);
        let ret = this._view.getInt16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }
    readUshort() {
        this.validate(2);
        let ret = this._view.getUint16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }
    readInt() {
        this.validate(4);
        let ret = this._view.getInt32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readUint() {
        this.validate(4);
        let ret = this._view.getUint32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readFloat() {
        this.validate(4);
        let ret = this._view.getFloat32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readString(len) {
        if (len == undefined)
            len = this.readUshort();
        this.validate(len);
        let v = "", max = this._pos + len, c = 0, c2 = 0, c3 = 0, f = String.fromCharCode;
        let u = this._bytes;
        let pos = this._pos;
        while (pos < max) {
            c = u[pos++];
            if (c < 0x80) {
                if (c != 0) {
                    v += f(c);
                }
            }
            else if (c < 0xE0) {
                v += f(((c & 0x3F) << 6) | (u[pos++] & 0x7F));
            }
            else if (c < 0xF0) {
                c2 = u[pos++];
                v += f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[pos++] & 0x7F));
            }
            else {
                c2 = u[pos++];
                c3 = u[pos++];
                v += f(((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 << 6) & 0x7F) | (u[pos++] & 0x7F));
            }
        }
        this._pos += len;
        return v;
    }
    readS() {
        var index = this.readUshort();
        if (index == 65534) //null
            return null;
        else if (index == 65533)
            return "";
        else
            return this.stringTable[index];
    }
    readSArray(cnt) {
        var ret = new Array(cnt);
        for (var i = 0; i < cnt; i++)
            ret[i] = this.readS();
        return ret;
    }
    writeS(value) {
        var index = this.readUshort();
        if (index != 65534 && index != 65533)
            this.stringTable[index] = value;
    }
    readColor(hasAlpha) {
        const r = this.readUbyte();
        const g = this.readUbyte();
        const b = this.readUbyte();
        const a = this.readUbyte();
        return (hasAlpha ? (a << 24) : 0) + (r << 16) + (g << 8) + b;
    }
    readColorS(hasAlpha) {
        const r = this.readUbyte();
        const g = this.readUbyte();
        const b = this.readUbyte();
        const a = this.readUbyte();
        if (hasAlpha && a != 255)
            return "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
        else {
            var sr = r.toString(16);
            var sg = g.toString(16);
            var sb = b.toString(16);
            if (sr.length == 1)
                sr = "0" + sr;
            if (sg.length == 1)
                sg = "0" + sg;
            if (sb.length == 1)
                sb = "0" + sb;
            return "#" + sr + sg + sb;
        }
    }
    readChar() {
        var i = this.readUshort();
        return String.fromCharCode(i);
    }
    readBuffer() {
        var count = this.readUint();
        this.validate(count);
        var ba = new ByteBuffer(this._bytes.buffer, this._bytes.byteOffset + this._pos, count);
        ba.stringTable = this.stringTable;
        ba.version = this.version;
        this._pos += count;
        return ba;
    }
    seek(indexTablePos, blockIndex) {
        var tmp = this._pos;
        this._pos = indexTablePos;
        var segCount = this.readByte();
        if (blockIndex < segCount) {
            var useShort = this.readByte() == 1;
            var newPos;
            if (useShort) {
                this._pos += 2 * blockIndex;
                newPos = this.readUshort();
            }
            else {
                this._pos += 4 * blockIndex;
                newPos = this.readUint();
            }
            if (newPos > 0) {
                this._pos = indexTablePos + newPos;
                return true;
            }
            else {
                this._pos = tmp;
                return false;
            }
        }
        else {
            this._pos = tmp;
            return false;
        }
    }
}

class PackageItem {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    getBranch() {
        if (this.branches && this.owner._branchIndex != -1) {
            var itemId = this.branches[this.owner._branchIndex];
            if (itemId)
                return this.owner.getItemById(itemId);
        }
        return this;
    }
    getHighResolution() {
        // if (this.highResolution && GRoot.contentScaleLevel > 0) {
        //     var itemId: string = this.highResolution[GRoot.contentScaleLevel - 1];
        //     if (itemId)
        //         return this.owner.getItemById(itemId);
        // }
        throw new Error("TODO");
    }
    toString() {
        return this.name;
    }
    load() {
        return this.owner.getItemAsset(this);
    }
}

class UIPackage {
    constructor() {
        this._items = [];
        this._itemsById = {};
        this._itemsByName = {};
        this._sprites = {};
        this._dependencies = [];
        this._branches = [];
        this._branchIndex = -1;
    }
    static get branch() {
        return UIPackage._branch;
    }
    static set branch(value) {
        UIPackage._branch = value;
        for (const pkgId in UIPackage._instById) {
            const pkg = UIPackage._instById[pkgId];
            if (pkg._branches) {
                pkg._branchIndex = pkg._branches.indexOf(value);
            }
        }
    }
    static getVar(key) {
        return UIPackage._vars[key];
    }
    static setVar(key, value) {
        UIPackage._vars[key] = value;
    }
    static getById(id) {
        return UIPackage._instById[id];
    }
    static getByName(name) {
        return UIPackage._instByName[name];
    }
    static addPackage(resKey, descData) {
        const buffer = new ByteBuffer(descData);
        const pkg = new UIPackage();
        pkg._resKey = resKey;
        pkg.loadPackage(buffer);
        UIPackage._instById[pkg.id] = pkg;
        UIPackage._instByName[pkg.name] = pkg;
        UIPackage._instById[resKey] = pkg;
        return pkg;
    }
    static loadPackage(resKey, onProgress) {
        return new Promise((resolve) => {
            let pkg = this._instById[resKey];
            if (pkg) {
                resolve(pkg);
            }
            let url = resKey;
            const extension = `.${UIConfig.packageFileExtension}`;
            if (!resKey.endsWith(extension)) {
                url += extension;
            }
            const scene = GRoot.inst.scene;
            scene.load.binary(resKey, url);
            scene.load.once(`filecomplete-spritesheet-${resKey}`, () => {
                pkg = new UIPackage();
                pkg._resKey = resKey;
                pkg.loadPackage(new ByteBuffer(scene.cache.binary.get(resKey)));
                const promises = [];
                for (const item of pkg._items) {
                    if (item.type === PackageItemType.Atlas) {
                        // TODO loadTexture
                        promises.push();
                    }
                    else if (item.type === PackageItemType.Sound) {
                        // TODO loadSound
                        promises.push();
                    }
                }
                Promise.all(promises).then(() => {
                    // this._instById
                    resolve(pkg);
                });
            });
        });
    }
    static removePackage(packageIdOrName) {
        let pkg = UIPackage._instById[packageIdOrName];
        if (!pkg) {
            pkg = UIPackage._instByName[packageIdOrName];
        }
        if (!pkg) {
            throw new Error(`unknown package: ${packageIdOrName}`);
        }
        pkg.dispose();
        delete UIPackage._instById[pkg.id];
        delete UIPackage._instByName[pkg.name];
        delete UIPackage._instById[pkg._resKey];
        if (pkg._customId) {
            delete UIPackage._instById[pkg._customId];
        }
    }
    static createObject(pkgName, resName, userClass) {
        const pkg = UIPackage.getByName(pkgName);
        if (pkg) {
            return pkg.createObject(resName, userClass);
        }
        return null;
    }
    static createObjectFromURL(url, userClass) {
        var pi = UIPackage.getItemByURL(url);
        if (pi) {
            return pi.owner.internalCreateObject(pi, userClass);
        }
        return null;
    }
    static getItemURL(pkgName, resName) {
        var pkg = UIPackage.getByName(pkgName);
        if (!pkg)
            return null;
        var pi = pkg._itemsByName[resName];
        if (!pi)
            return null;
        return "ui://" + pkg.id + pi.id;
    }
    static getItemByURL(url) {
        var pos1 = url.indexOf("//");
        if (pos1 == -1)
            return null;
        var pos2 = url.indexOf("/", pos1 + 2);
        if (pos2 == -1) {
            if (url.length > 13) {
                var pkgId = url.substr(5, 8);
                var pkg = UIPackage.getById(pkgId);
                if (pkg) {
                    var srcId = url.substr(13);
                    return pkg.getItemById(srcId);
                }
            }
        }
        else {
            var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
            pkg = UIPackage.getByName(pkgName);
            if (pkg) {
                var srcName = url.substr(pos2 + 1);
                return pkg.getItemByName(srcName);
            }
        }
        return null;
    }
    static getItemAssetByURL(url) {
        var item = UIPackage.getItemByURL(url);
        if (item == null)
            return null;
        return item.owner.getItemAsset(item);
    }
    static normalizeURL(url) {
        if (url == null)
            return null;
        var pos1 = url.indexOf("//");
        if (pos1 == -1)
            return null;
        var pos2 = url.indexOf("/", pos1 + 2);
        if (pos2 == -1)
            return url;
        var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
        var srcName = url.substr(pos2 + 1);
        return UIPackage.getItemURL(pkgName, srcName);
    }
    static setStringsSource(source) {
        TranslationHelper.loadFromXML(source);
    }
    loadPackage(buffer) {
        if (buffer.readUint() != 0x46475549)
            throw new Error("FairyGUI: old package format found in '" + this._resKey + "'");
        buffer.version = buffer.readInt();
        buffer.readBool();
        this._id = buffer.readString();
        this._name = buffer.readString();
        buffer.skip(20);
        var ver2 = buffer.version >= 2;
        var indexTablePos = buffer.position;
        var cnt;
        var i;
        var nextPos;
        var str;
        var branchIncluded;
        buffer.seek(indexTablePos, 4);
        cnt = buffer.readInt();
        var stringTable = [];
        for (i = 0; i < cnt; i++)
            stringTable[i] = buffer.readString();
        buffer.stringTable = stringTable;
        buffer.seek(indexTablePos, 0);
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++)
            this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });
        if (ver2) {
            cnt = buffer.readShort();
            if (cnt > 0) {
                this._branches = buffer.readSArray(cnt);
                if (UIPackage._branch)
                    this._branchIndex = this._branches.indexOf(UIPackage._branch);
            }
            branchIncluded = cnt > 0;
        }
        buffer.seek(indexTablePos, 1);
        var pi;
        var path = this._resKey;
        let pos = path.lastIndexOf('/');
        let shortPath = pos == -1 ? "" : path.substr(0, pos + 1);
        path = path + "_";
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readInt();
            nextPos += buffer.position;
            pi = new PackageItem();
            pi.owner = this;
            pi.type = buffer.readByte();
            pi.id = buffer.readS();
            pi.name = buffer.readS();
            buffer.readS(); //path
            str = buffer.readS();
            if (str)
                pi.file = str;
            buffer.readBool(); //exported
            pi.width = buffer.readInt();
            pi.height = buffer.readInt();
            switch (pi.type) {
                case PackageItemType.Image:
                    {
                        // pi.objectType = ObjectType.Image;
                        // var scaleOption: number = buffer.readByte();
                        // if (scaleOption == 1) {
                        // pi.scale9Grid = new Laya.Rectangle();
                        // pi.scale9Grid.x = buffer.getInt32();
                        // pi.scale9Grid.y = buffer.getInt32();
                        // pi.scale9Grid.width = buffer.getInt32();
                        // pi.scale9Grid.height = buffer.getInt32();
                        // pi.tileGridIndice = buffer.getInt32();
                        // }
                        // else if (scaleOption == 2)
                        //     pi.scaleByTile = true;
                        // pi.smoothing = buffer.readBool();
                        break;
                    }
                case PackageItemType.MovieClip:
                    {
                        // pi.smoothing = buffer.readBool();
                        // pi.objectType = ObjectType.MovieClip;
                        // pi.rawData = buffer.readBuffer();
                        break;
                    }
                case PackageItemType.Font:
                    {
                        pi.rawData = buffer.readBuffer();
                        break;
                    }
                case PackageItemType.Component:
                    {
                        var extension = buffer.readByte();
                        if (extension > 0)
                            pi.objectType = extension;
                        else
                            pi.objectType = ObjectType.Component;
                        pi.rawData = buffer.readBuffer();
                        // Decls.UIObjectFactory.resolvePackageItemExtension(pi);
                        Decls.UIObjectFactory.resolveExtension(pi);
                        break;
                    }
                case PackageItemType.Atlas:
                case PackageItemType.Sound:
                case PackageItemType.Misc:
                    {
                        pi.file = path + pi.file;
                        break;
                    }
                case PackageItemType.Spine:
                case PackageItemType.DragonBones:
                    {
                        pi.file = shortPath + pi.file;
                        // pi.skeletonAnchor = new Laya.Point();
                        // pi.skeletonAnchor.x = buffer.getFloat32();
                        // pi.skeletonAnchor.y = buffer.getFloat32();
                        break;
                    }
            }
            if (ver2) {
                str = buffer.readS(); //branch
                if (str)
                    pi.name = str + "/" + pi.name;
                var branchCnt = buffer.readByte();
                if (branchCnt > 0) {
                    if (branchIncluded)
                        pi.branches = buffer.readSArray(branchCnt);
                    else
                        this._itemsById[buffer.readS()] = pi;
                }
                var highResCnt = buffer.readByte();
                if (highResCnt > 0)
                    pi.highResolution = buffer.readSArray(highResCnt);
            }
            this._items.push(pi);
            this._itemsById[pi.id] = pi;
            if (pi.name != null)
                this._itemsByName[pi.name] = pi;
            buffer.position = nextPos;
        }
        buffer.seek(indexTablePos, 2);
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var itemId = buffer.readS();
            pi = this._itemsById[buffer.readS()];
            let sprite = { atlas: pi, rect: new Phaser.Geom.Rectangle(), offset: new Phaser.Geom.Point(), originalSize: new Phaser.Geom.Point() };
            sprite.atlas = pi;
            sprite.rect.x = buffer.readInt();
            sprite.rect.y = buffer.readInt();
            sprite.rect.width = buffer.readInt();
            sprite.rect.height = buffer.readInt();
            sprite.rotated = buffer.readBool();
            if (ver2 && buffer.readBool()) {
                sprite.offset.x = buffer.readInt();
                sprite.offset.y = buffer.readInt();
                sprite.originalSize.x = buffer.readInt();
                sprite.originalSize.y = buffer.readInt();
            }
            else {
                sprite.originalSize.x = sprite.rect.width;
                sprite.originalSize.y = sprite.rect.height;
            }
            this._sprites[itemId] = sprite;
            buffer.position = nextPos;
        }
        if (buffer.seek(indexTablePos, 3)) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readInt();
                nextPos += buffer.position;
                pi = this._itemsById[buffer.readS()];
                // if (pi && pi.type == PackageItemType.Image) {
                //     pi.pixelHitTestData = new PixelHitTestData();
                //     pi.pixelHitTestData.load(buffer);
                // }
                buffer.position = nextPos;
            }
        }
    }
    loadAllAssets() {
        this._items.length;
        for (const item of this._items) {
            this.getItemAsset(item);
        }
    }
    unloadAssets() {
        for (const item of this._items) {
            if (item.type === PackageItemType.Atlas) {
                // if (item.texture)
                throw new Error("TODO");
            }
        }
    }
    dispose() {
        for (const item of this._items) {
            throw new Error("TODO");
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get customId() {
        return this._customId;
    }
    set customId(value) {
        if (this._customId) {
            delete UIPackage._instById[this._customId];
        }
        this._customId = value;
        if (this._customId) {
            UIPackage._instById[this._customId] = this;
        }
    }
    createObject(resName, userClass) {
        const pi = this._itemsByName[resName];
        if (pi) {
            return this.internalCreateObject(pi, userClass);
        }
        else {
            return null;
        }
    }
    internalCreateObject(item, userClass) {
        const g = Decls.UIObjectFactory.newObject(item, userClass);
        if (g == null) {
            return null;
        }
        UIPackage._constructing++;
        g.constructFromResource();
        UIPackage._constructing--;
        return g;
    }
    getItemById(itemId) {
        return this._itemsById[itemId];
    }
    getItemByName(resName) {
        return this._itemsByName[resName];
    }
    getItemAssetByName(resName) {
        var pi = this._itemsByName[resName];
        if (pi == null) {
            throw "Resource not found -" + resName;
        }
        return this.getItemAsset(pi);
    }
    getItemAsset(item) {
        switch (item.type) {
            case PackageItemType.Image:
            // if (!item.decoded) {
            //     item.decoded = true;
            //     var sprite: AtlasSprite = this._sprites[item.id];
            //     if (sprite) {
            //         var atlasTexture: Laya.Texture = <Laya.Texture>(this.getItemAsset(sprite.atlas));
            //         if (atlasTexture) {
            //             item.texture = Laya.Texture.create(atlasTexture,
            //                 sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height,
            //                 sprite.offset.x, sprite.offset.y,
            //                 sprite.originalSize.x, sprite.originalSize.y);
            //         } else {
            //             item.texture = null;
            //         }
            //     }
            //     else
            //         item.texture = null;
            // }
            // return item.texture;
            case PackageItemType.Atlas:
                if (!item.decoded) {
                    item.decoded = true;
                    // item.texture = AssetProxy.inst.getRes(item.file);
                    //if(!fgui.UIConfig.textureLinearSampling)
                    //item.texture.isLinearSampling = false;
                }
            // return item.texture;
            case PackageItemType.Font:
            // if (!item.decoded) {
            //     item.decoded = true;
            // this.loadFont(item);
            // }
            // return item.bitmapFont;
            case PackageItemType.MovieClip:
            // if (!item.decoded) {
            //     item.decoded = true;
            //     this.loadMovieClip(item);
            // }
            // return item.frames;
            case PackageItemType.Component:
                return item.rawData;
            case PackageItemType.Misc:
            // if (item.file)
            //     return AssetProxy.inst.getRes(item.file);
            // else
            //     return null;
            default:
                return null;
        }
    }
    getItemAssetAsync(item, onComplete) {
        if (item.decoded) {
            onComplete(null, item);
            return;
        }
        if (item.loading) {
            item.loading.push(onComplete);
            return;
        }
        switch (item.type) {
            case PackageItemType.Spine:
            case PackageItemType.DragonBones:
            // 
            default:
                this.getItemAsset(item);
                onComplete(null, item);
                break;
        }
    }
    loadMovieClip(item) {
    }
    loadFont(item) {
    }
    loadSpine() {
        // TODO
    }
    loadDragonBones() {
        // TODO
    }
}
UIPackage._constructing = 0;
UIPackage._instById = {};
UIPackage._instByName = {};
UIPackage._branch = "";
UIPackage._vars = {};
var Decls = {};

class Transition {
    constructor(owner) {
        this._owner = owner;
        this._items = new Array();
        this._totalDuration = 0;
        this._autoPlayTimes = 1;
        this._autoPlayDelay = 0;
        this._timeScale = 1;
        this._startTime = 0;
        this._endTime = 0;
    }
    play(onComplete, times, delay, startTime, endTime) {
        this._play(onComplete, times, delay, startTime, endTime, false);
    }
    playReverse(onComplete, times, delay, startTime, endTime) {
        this._play(onComplete, 1, delay, startTime, endTime, true);
    }
    changePlayTimes(value) {
        this._totalTimes = value;
    }
    setAutoPlay(value, times, delay) {
        if (times == undefined)
            times = -1;
        if (delay == undefined)
            delay = 0;
        if (this._autoPlay != value) {
            this._autoPlay = value;
            this._autoPlayTimes = times;
            this._autoPlayDelay = delay;
            if (this._autoPlay) {
                if (this._owner.onStage)
                    this.play(null, null, this._autoPlayTimes, this._autoPlayDelay);
            }
            else {
                if (!this._owner.onStage)
                    this.stop(false, true);
            }
        }
    }
    _play(onComplete, times, delay, startTime, endTime, reversed) {
        if (times == undefined)
            times = 1;
        if (delay == undefined)
            delay = 0;
        if (startTime == undefined)
            startTime = 0;
        if (endTime == undefined)
            endTime = -1;
        this.stop(true, true);
        this._totalTimes = times;
        this._reversed = reversed;
        this._startTime = startTime;
        this._endTime = endTime;
        this._playing = true;
        this._paused = false;
        this._onComplete = onComplete;
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.target == null) {
                if (item.targetId)
                    item.target = this._owner.getChildById(item.targetId);
                else
                    item.target = this._owner;
            }
            else if (item.target != this._owner && item.target.parent != this._owner)
                item.target = null;
            if (item.target && item.type == ActionType.Transition) {
                var trans = item.target.getTransition(item.value.transName);
                if (trans == this)
                    trans = null;
                if (trans) {
                    if (item.value.playTimes == 0) //this.stop
                     {
                        var j;
                        for (j = i - 1; j >= 0; j--) {
                            var item2 = this._items[j];
                            if (item2.type == ActionType.Transition) {
                                if (item2.value.trans == trans) {
                                    item2.value.stopTime = item.time - item2.time;
                                    break;
                                }
                            }
                        }
                        if (j < 0)
                            item.value.stopTime = 0;
                        else
                            trans = null; //no need to handle this.stop anymore
                    }
                    else
                        item.value.stopTime = -1;
                }
                item.value.trans = trans;
            }
        }
        if (delay == 0)
            this.onDelayedPlay();
        else
            GTween.delayedCall(delay).setTarget(this).onComplete(this.onDelayedPlay, this);
    }
    stop(setToComplete, processCallback) {
        if (!this._playing)
            return;
        if (setToComplete == undefined)
            setToComplete = true;
        this._playing = false;
        this._totalTasks = 0;
        this._totalTimes = 0;
        var handler = this._onComplete;
        this._onComplete = null;
        GTween.kill(this); //delay start
        var cnt = this._items.length;
        if (this._reversed) {
            for (var i = cnt - 1; i >= 0; i--) {
                var item = this._items[i];
                if (item.target == null)
                    continue;
                this.stopItem(item, setToComplete);
            }
        }
        else {
            for (i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                this.stopItem(item, setToComplete);
            }
        }
        if (processCallback && handler) {
            handler();
        }
    }
    stopItem(item, setToComplete) {
        if (item.displayLockToken != 0) {
            item.target.releaseDisplayLock(item.displayLockToken);
            item.displayLockToken = 0;
        }
        if (item.tweener) {
            item.tweener.kill(setToComplete);
            item.tweener = null;
            if (item.type == ActionType.Shake && !setToComplete) //震动必须归位，否则下次就越震越远了。
             {
                item.target._gearLocked = true;
                item.target.setXY(item.target.x - item.value.lastOffsetX, item.target.y - item.value.lastOffsetY);
                item.target._gearLocked = false;
            }
        }
        if (item.type == ActionType.Transition) {
            var trans = item.value.trans;
            if (trans)
                trans.stop(setToComplete, false);
        }
    }
    setPaused(paused) {
        if (!this._playing || this._paused == paused)
            return;
        this._paused = paused;
        var tweener = GTween.getTween(this);
        if (tweener)
            tweener.setPaused(paused);
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.target == null)
                continue;
            if (item.type == ActionType.Transition) {
                if (item.value.trans)
                    item.value.trans.setPaused(paused);
            }
            else if (item.type == ActionType.Animation) {
                if (paused) {
                    item.value.flag = item.target.getProp(ObjectPropID.Playing);
                    item.target.setProp(ObjectPropID.Playing, false);
                }
                else
                    item.target.setProp(ObjectPropID.Playing, item.value.flag);
            }
            if (item.tweener)
                item.tweener.setPaused(paused);
        }
    }
    dispose() {
        if (this._playing)
            GTween.kill(this); //delay start
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.tweener) {
                item.tweener.kill();
                item.tweener = null;
            }
            item.target = null;
            item.hook = null;
            if (item.tweenConfig)
                item.tweenConfig.endHook = null;
        }
        this._items.length = 0;
        this._playing = false;
        this._onComplete = null;
    }
    get playing() {
        return this._playing;
    }
    setValue(label, ...args) {
        var cnt = this._items.length;
        var found = false;
        var value;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                if (item.tweenConfig)
                    value = item.tweenConfig.startValue;
                else
                    value = item.value;
                found = true;
            }
            else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                value = item.tweenConfig.endValue;
                found = true;
            }
            else
                continue;
            switch (item.type) {
                case ActionType.XY:
                case ActionType.Size:
                case ActionType.Pivot:
                case ActionType.Scale:
                case ActionType.Skew:
                    value.b1 = true;
                    value.b2 = true;
                    value.f1 = parseFloat(args[0]);
                    value.f2 = parseFloat(args[1]);
                    break;
                case ActionType.Alpha:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Rotation:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Color:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Animation:
                    value.frame = parseInt(args[0]);
                    if (args.length > 1)
                        value.playing = args[1];
                    break;
                case ActionType.Visible:
                    value.visible = args[0];
                    break;
                case ActionType.Sound:
                    value.sound = args[0];
                    if (args.length > 1)
                        value.volume = parseFloat(args[1]);
                    break;
                case ActionType.Transition:
                    value.transName = args[0];
                    if (args.length > 1)
                        value.playTimes = parseInt(args[1]);
                    break;
                case ActionType.Shake:
                    value.amplitude = parseFloat(args[0]);
                    if (args.length > 1)
                        value.duration = parseFloat(args[1]);
                    break;
                case ActionType.ColorFilter:
                    value.f1 = parseFloat(args[0]);
                    value.f2 = parseFloat(args[1]);
                    value.f3 = parseFloat(args[2]);
                    value.f4 = parseFloat(args[3]);
                    break;
                case ActionType.Text:
                case ActionType.Icon:
                    value.text = args[0];
                    break;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    setHook(label, callback) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                item.hook = callback;
                found = true;
                break;
            }
            else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                item.tweenConfig.endHook = callback;
                found = true;
                break;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    clearHooks() {
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            item.hook = null;
            if (item.tweenConfig)
                item.tweenConfig.endHook = null;
        }
    }
    setTarget(label, newTarget) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                item.targetId = (newTarget == this._owner || newTarget == null) ? "" : newTarget.id;
                if (this._playing) {
                    if (item.targetId.length > 0)
                        item.target = this._owner.getChildById(item.targetId);
                    else
                        item.target = this._owner;
                }
                else
                    item.target = null;
                found = true;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    setDuration(label, value) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.tweenConfig && item.label == label) {
                item.tweenConfig.duration = value;
                found = true;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    getLabelTime(label) {
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label)
                return item.time;
            else if (item.tweenConfig && item.tweenConfig.endLabel == label)
                return item.time + item.tweenConfig.duration;
        }
        return NaN;
    }
    get timeScale() {
        return this._timeScale;
    }
    set timeScale(value) {
        if (this._timeScale != value) {
            this._timeScale = value;
            if (this._playing) {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.tweener)
                        item.tweener.setTimeScale(value);
                    else if (item.type == ActionType.Transition) {
                        if (item.value.trans)
                            item.value.trans.timeScale = value;
                    }
                    else if (item.type == ActionType.Animation) {
                        if (item.target)
                            item.target.setProp(ObjectPropID.TimeScale, value);
                    }
                }
            }
        }
    }
    updateFromRelations(targetId, dx, dy) {
        var cnt = this._items.length;
        if (cnt == 0)
            return;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.type == ActionType.XY && item.targetId == targetId) {
                if (item.tweenConfig) {
                    if (!item.tweenConfig.startValue.b3) {
                        item.tweenConfig.startValue.f1 += dx;
                        item.tweenConfig.startValue.f2 += dy;
                    }
                    if (!item.tweenConfig.endValue.b3) {
                        item.tweenConfig.endValue.f1 += dx;
                        item.tweenConfig.endValue.f2 += dy;
                    }
                }
                else {
                    if (!item.value.b3) {
                        item.value.f1 += dx;
                        item.value.f2 += dy;
                    }
                }
            }
        }
    }
    onOwnerAddedToStage() {
        if (this._autoPlay && !this._playing)
            this.play(null, this._autoPlayTimes, this._autoPlayDelay);
    }
    onOwnerRemovedFromStage() {
        if ((this._options & OPTION_AUTO_STOP_DISABLED) == 0)
            this.stop((this._options & OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
    }
    onDelayedPlay() {
        this.internalPlay();
        this._playing = this._totalTasks > 0;
        if (this._playing) {
            if ((this._options & OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.target && item.target != this._owner)
                        item.displayLockToken = item.target.addDisplayLock();
                }
            }
        }
        else if (this._onComplete) {
            var handler = this._onComplete;
            this._onComplete = null;
            handler();
        }
    }
    internalPlay() {
        this._ownerBaseX = this._owner.x;
        this._ownerBaseY = this._owner.y;
        this._totalTasks = 1;
        var cnt = this._items.length;
        var item;
        var needSkipAnimations = false;
        if (!this._reversed) {
            for (var i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                if (item.type == ActionType.Animation && this._startTime != 0 && item.time <= this._startTime) {
                    needSkipAnimations = true;
                    item.value.flag = false;
                }
                else
                    this.playItem(item);
            }
        }
        else {
            for (i = cnt - 1; i >= 0; i--) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                this.playItem(item);
            }
        }
        if (needSkipAnimations)
            this.skipAnimations();
        this._totalTasks--;
    }
    playItem(item) {
        var time;
        if (item.tweenConfig) {
            if (this._reversed)
                time = (this._totalDuration - item.time - item.tweenConfig.duration);
            else
                time = item.time;
            if (this._endTime == -1 || time <= this._endTime) {
                var startValue;
                var endValue;
                if (this._reversed) {
                    startValue = item.tweenConfig.endValue;
                    endValue = item.tweenConfig.startValue;
                }
                else {
                    startValue = item.tweenConfig.startValue;
                    endValue = item.tweenConfig.endValue;
                }
                item.value.b1 = startValue.b1 || endValue.b1;
                item.value.b2 = startValue.b2 || endValue.b2;
                switch (item.type) {
                    case ActionType.XY:
                    case ActionType.Size:
                    case ActionType.Scale:
                    case ActionType.Skew:
                        item.tweener = GTween.to2(startValue.f1, startValue.f2, endValue.f1, endValue.f2, item.tweenConfig.duration);
                        break;
                    case ActionType.Alpha:
                    case ActionType.Rotation:
                        item.tweener = GTween.to(startValue.f1, endValue.f1, item.tweenConfig.duration);
                        break;
                    case ActionType.Color:
                        item.tweener = GTween.toColor(startValue.f1, endValue.f1, item.tweenConfig.duration);
                        break;
                    case ActionType.ColorFilter:
                        item.tweener = GTween.to4(startValue.f1, startValue.f2, startValue.f3, startValue.f4, endValue.f1, endValue.f2, endValue.f3, endValue.f4, item.tweenConfig.duration);
                        break;
                }
                item.tweener.setDelay(time)
                    .setEase(item.tweenConfig.easeType)
                    .setRepeat(item.tweenConfig.repeat, item.tweenConfig.yoyo)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onStart(this.onTweenStart, this)
                    .onUpdate(this.onTweenUpdate, this)
                    .onComplete(this.onTweenComplete, this);
                if (this._endTime >= 0)
                    item.tweener.setBreakpoint(this._endTime - time);
                this._totalTasks++;
            }
        }
        else if (item.type == ActionType.Shake) {
            if (this._reversed)
                time = (this._totalDuration - item.time - item.value.duration);
            else
                time = item.time;
            item.value.offsetX = item.value.offsetY = 0;
            item.value.lastOffsetX = item.value.lastOffsetY = 0;
            item.tweener = GTween.shake(0, 0, item.value.amplitude, item.value.duration)
                .setDelay(time)
                .setTimeScale(this._timeScale)
                .setTarget(item)
                .onUpdate(this.onTweenUpdate, this)
                .onComplete(this.onTweenComplete, this);
            if (this._endTime >= 0)
                item.tweener.setBreakpoint(this._endTime - item.time);
            this._totalTasks++;
        }
        else {
            if (this._reversed)
                time = (this._totalDuration - item.time);
            else
                time = item.time;
            if (time <= this._startTime) {
                this.applyValue(item);
                this.callHook(item, false);
            }
            else if (this._endTime == -1 || time <= this._endTime) {
                this._totalTasks++;
                item.tweener = GTween.delayedCall(time)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onComplete(this.onDelayedPlayItem, this);
            }
        }
        if (item.tweener)
            item.tweener.seek(this._startTime);
    }
    skipAnimations() {
        var frame;
        var playStartTime;
        var playTotalTime;
        var value;
        var target;
        var item;
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            item = this._items[i];
            if (item.type != ActionType.Animation || item.time > this._startTime)
                continue;
            value = item.value;
            if (value.flag)
                continue;
            target = item.target;
            frame = target.getProp(ObjectPropID.Frame);
            playStartTime = target.getProp(ObjectPropID.Playing) ? 0 : -1;
            playTotalTime = 0;
            for (var j = i; j < cnt; j++) {
                item = this._items[j];
                if (item.type != ActionType.Animation || item.target != target || item.time > this._startTime)
                    continue;
                value = item.value;
                value.flag = true;
                if (value.frame != -1) {
                    frame = value.frame;
                    if (value.playing)
                        playStartTime = item.time;
                    else
                        playStartTime = -1;
                    playTotalTime = 0;
                }
                else {
                    if (value.playing) {
                        if (playStartTime < 0)
                            playStartTime = item.time;
                    }
                    else {
                        if (playStartTime >= 0)
                            playTotalTime += (item.time - playStartTime);
                        playStartTime = -1;
                    }
                }
                this.callHook(item, false);
            }
            if (playStartTime >= 0)
                playTotalTime += (this._startTime - playStartTime);
            target.setProp(ObjectPropID.Playing, playStartTime >= 0);
            target.setProp(ObjectPropID.Frame, frame);
            if (playTotalTime > 0)
                target.setProp(ObjectPropID.DeltaTime, playTotalTime * 1000);
        }
    }
    onDelayedPlayItem(tweener) {
        var item = tweener.target;
        item.tweener = null;
        this._totalTasks--;
        this.applyValue(item);
        this.callHook(item, false);
        this.checkAllComplete();
    }
    onTweenStart(tweener) {
        var item = tweener.target;
        if (item.type == ActionType.XY || item.type == ActionType.Size) //位置和大小要到start才最终确认起始值
         {
            var startValue;
            var endValue;
            if (this._reversed) {
                startValue = item.tweenConfig.endValue;
                endValue = item.tweenConfig.startValue;
            }
            else {
                startValue = item.tweenConfig.startValue;
                endValue = item.tweenConfig.endValue;
            }
            if (item.type == ActionType.XY) {
                if (item.target != this._owner) {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.x;
                    else if (startValue.b3) //percent
                        tweener.startValue.x = startValue.f1 * this._owner.width;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.y;
                    else if (startValue.b3) //percent
                        tweener.startValue.y = startValue.f2 * this._owner.height;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    else if (endValue.b3)
                        tweener.endValue.x = endValue.f1 * this._owner.width;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                    else if (endValue.b3)
                        tweener.endValue.y = endValue.f2 * this._owner.height;
                }
                else {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.x - this._ownerBaseX;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.y - this._ownerBaseY;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                }
            }
            else {
                if (!startValue.b1)
                    tweener.startValue.x = item.target.width;
                if (!startValue.b2)
                    tweener.startValue.y = item.target.height;
                if (!endValue.b1)
                    tweener.endValue.x = tweener.startValue.x;
                if (!endValue.b2)
                    tweener.endValue.y = tweener.startValue.y;
            }
            if (item.tweenConfig.path) {
                item.value.b1 = item.value.b2 = true;
                tweener.setPath(item.tweenConfig.path);
            }
        }
        this.callHook(item, false);
    }
    onTweenUpdate(tweener) {
        var item = tweener.target;
        switch (item.type) {
            case ActionType.XY:
            case ActionType.Size:
            case ActionType.Scale:
            case ActionType.Skew:
                item.value.f1 = tweener.value.x;
                item.value.f2 = tweener.value.y;
                if (item.tweenConfig.path) {
                    item.value.f1 += tweener.startValue.x;
                    item.value.f2 += tweener.startValue.y;
                }
                break;
            case ActionType.Alpha:
            case ActionType.Rotation:
                item.value.f1 = tweener.value.x;
                break;
            case ActionType.Color:
                item.value.f1 = tweener.value.color;
                break;
            case ActionType.ColorFilter:
                item.value.f1 = tweener.value.x;
                item.value.f2 = tweener.value.y;
                item.value.f3 = tweener.value.z;
                item.value.f4 = tweener.value.w;
                break;
            case ActionType.Shake:
                item.value.offsetX = tweener.deltaValue.x;
                item.value.offsetY = tweener.deltaValue.y;
                break;
        }
        this.applyValue(item);
    }
    onTweenComplete(tweener) {
        var item = tweener.target;
        item.tweener = null;
        this._totalTasks--;
        if (tweener.allCompleted) //当整体播放结束时间在这个tween的中间时不应该调用结尾钩子
            this.callHook(item, true);
        this.checkAllComplete();
    }
    onPlayTransCompleted(item) {
        this._totalTasks--;
        this.checkAllComplete();
    }
    callHook(item, tweenEnd) {
        if (tweenEnd) {
            if (item.tweenConfig && item.tweenConfig.endHook)
                item.tweenConfig.endHook();
        }
        else {
            if (item.time >= this._startTime && item.hook)
                item.hook();
        }
    }
    checkAllComplete() {
        if (this._playing && this._totalTasks == 0) {
            if (this._totalTimes < 0) {
                this.internalPlay();
                if (this._totalTasks == 0)
                    GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
            }
            else {
                this._totalTimes--;
                if (this._totalTimes > 0) {
                    this.internalPlay();
                    if (this._totalTasks == 0)
                        GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                }
                else {
                    this._playing = false;
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        if (item.target && item.displayLockToken != 0) {
                            item.target.releaseDisplayLock(item.displayLockToken);
                            item.displayLockToken = 0;
                        }
                    }
                    if (this._onComplete) {
                        var handler = this._onComplete;
                        this._onComplete = null;
                        handler();
                    }
                }
            }
        }
    }
    applyValue(item) {
        item.target._gearLocked = true;
        var value = item.value;
        switch (item.type) {
            case ActionType.XY:
                if (item.target == this._owner) {
                    if (value.b1 && value.b2)
                        item.target.setXY(value.f1 + this._ownerBaseX, value.f2 + this._ownerBaseY);
                    else if (value.b1)
                        item.target.x = value.f1 + this._ownerBaseX;
                    else
                        item.target.y = value.f2 + this._ownerBaseY;
                }
                else {
                    if (value.b3) //position in percent
                     {
                        if (value.b1 && value.b2)
                            item.target.setXY(value.f1 * this._owner.width, value.f2 * this._owner.height);
                        else if (value.b1)
                            item.target.x = value.f1 * this._owner.width;
                        else if (value.b2)
                            item.target.y = value.f2 * this._owner.height;
                    }
                    else {
                        if (value.b1 && value.b2)
                            item.target.setXY(value.f1, value.f2);
                        else if (value.b1)
                            item.target.x = value.f1;
                        else if (value.b2)
                            item.target.y = value.f2;
                    }
                }
                break;
            case ActionType.Size:
                if (!value.b1)
                    value.f1 = item.target.width;
                if (!value.b2)
                    value.f2 = item.target.height;
                item.target.setSize(value.f1, value.f2);
                break;
            case ActionType.Pivot:
                item.target.setPivot(value.f1, value.f2, item.target.pivotAsAnchor);
                break;
            case ActionType.Alpha:
                item.target.alpha = value.f1;
                break;
            case ActionType.Rotation:
                item.target.rotation = value.f1;
                break;
            case ActionType.Scale:
                item.target.setScale(value.f1, value.f2);
                break;
            case ActionType.Skew:
                item.target.setSkew(value.f1, value.f2);
                break;
            case ActionType.Color:
                item.target.setProp(ObjectPropID.Color, ToolSet.convertToHtmlColor(value.f1, false));
                break;
            case ActionType.Animation:
                if (value.frame >= 0)
                    item.target.setProp(ObjectPropID.Frame, value.frame);
                item.target.setProp(ObjectPropID.Playing, value.playing);
                item.target.setProp(ObjectPropID.TimeScale, this._timeScale);
                break;
            case ActionType.Visible:
                item.target.visible = value.visible;
                break;
            case ActionType.Transition:
                if (this._playing) {
                    var trans = value.trans;
                    if (trans) {
                        this._totalTasks++;
                        var startTime = this._startTime > item.time ? (this._startTime - item.time) : 0;
                        var endTime = this._endTime >= 0 ? (this._endTime - item.time) : -1;
                        if (value.stopTime >= 0 && (endTime < 0 || endTime > value.stopTime))
                            endTime = value.stopTime;
                        trans.timeScale = this._timeScale;
                        trans._play(() => this.onPlayTransCompleted(item), value.playTimes, 0, startTime, endTime, this._reversed);
                    }
                }
                break;
            case ActionType.Sound:
                if (this._playing && item.time >= this._startTime) {
                    if (value.audioClip == null) {
                        var pi = UIPackage.getItemByURL(value.sound);
                        if (pi)
                            value.audioClip = pi.file;
                        else
                            value.audioClip = value.sound;
                    }
                    if (value.audioClip)
                        GRoot.inst.playOneShotSound(value.audioClip, value.volume);
                }
                break;
            case ActionType.Shake:
                item.target.setXY(item.target.x - value.lastOffsetX + value.offsetX, item.target.y - value.lastOffsetY + value.offsetY);
                value.lastOffsetX = value.offsetX;
                value.lastOffsetY = value.offsetY;
                break;
            case ActionType.ColorFilter:
                {
                    ToolSet.setColorFilter(item.target.displayObject, [value.f1, value.f2, value.f3, value.f4]);
                    break;
                }
            case ActionType.Text:
                item.target.text = value.text;
                break;
            case ActionType.Icon:
                item.target.icon = value.text;
                break;
        }
        item.target._gearLocked = false;
    }
    setup(buffer) {
        this.name = buffer.readS();
        this._options = buffer.readInt();
        this._autoPlay = buffer.readBool();
        this._autoPlayTimes = buffer.readInt();
        this._autoPlayDelay = buffer.readFloat();
        var cnt = buffer.readShort();
        for (var i = 0; i < cnt; i++) {
            var dataLen = buffer.readShort();
            var curPos = buffer.position;
            buffer.seek(curPos, 0);
            var item = new Item(buffer.readByte());
            this._items[i] = item;
            item.time = buffer.readFloat();
            var targetId = buffer.readShort();
            if (targetId < 0)
                item.targetId = "";
            else
                item.targetId = this._owner.getChildAt(targetId).id;
            item.label = buffer.readS();
            if (buffer.readBool()) {
                buffer.seek(curPos, 1);
                item.tweenConfig = new TweenConfig();
                item.tweenConfig.duration = buffer.readFloat();
                if (item.time + item.tweenConfig.duration > this._totalDuration)
                    this._totalDuration = item.time + item.tweenConfig.duration;
                item.tweenConfig.easeType = buffer.readByte();
                item.tweenConfig.repeat = buffer.readInt();
                item.tweenConfig.yoyo = buffer.readBool();
                item.tweenConfig.endLabel = buffer.readS();
                buffer.seek(curPos, 2);
                this.decodeValue(item, buffer, item.tweenConfig.startValue);
                buffer.seek(curPos, 3);
                this.decodeValue(item, buffer, item.tweenConfig.endValue);
                if (buffer.version >= 2) {
                    var pathLen = buffer.readInt();
                    if (pathLen > 0) {
                        item.tweenConfig.path = new GPath();
                        var pts = new Array();
                        for (var j = 0; j < pathLen; j++) {
                            var curveType = buffer.readByte();
                            switch (curveType) {
                                case CurveType.Bezier:
                                    pts.push(GPathPoint.newBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                    break;
                                case CurveType.CubicBezier:
                                    pts.push(GPathPoint.newCubicBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                    break;
                                default:
                                    pts.push(GPathPoint.newPoint(buffer.readFloat(), buffer.readFloat(), curveType));
                                    break;
                            }
                        }
                        item.tweenConfig.path.create(pts);
                    }
                }
            }
            else {
                if (item.time > this._totalDuration)
                    this._totalDuration = item.time;
                buffer.seek(curPos, 2);
                this.decodeValue(item, buffer, item.value);
            }
            buffer.position = curPos + dataLen;
        }
    }
    decodeValue(item, buffer, value) {
        switch (item.type) {
            case ActionType.XY:
            case ActionType.Size:
            case ActionType.Pivot:
            case ActionType.Skew:
                value.b1 = buffer.readBool();
                value.b2 = buffer.readBool();
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                if (buffer.version >= 2 && item.type == ActionType.XY)
                    value.b3 = buffer.readBool(); //percent
                break;
            case ActionType.Alpha:
            case ActionType.Rotation:
                value.f1 = buffer.readFloat();
                break;
            case ActionType.Scale:
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                break;
            case ActionType.Color:
                value.f1 = buffer.readColor();
                break;
            case ActionType.Animation:
                value.playing = buffer.readBool();
                value.frame = buffer.readInt();
                break;
            case ActionType.Visible:
                value.visible = buffer.readBool();
                break;
            case ActionType.Sound:
                value.sound = buffer.readS();
                value.volume = buffer.readFloat();
                break;
            case ActionType.Transition:
                value.transName = buffer.readS();
                value.playTimes = buffer.readInt();
                break;
            case ActionType.Shake:
                value.amplitude = buffer.readFloat();
                value.duration = buffer.readFloat();
                break;
            case ActionType.ColorFilter:
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                value.f3 = buffer.readFloat();
                value.f4 = buffer.readFloat();
                break;
            case ActionType.Text:
            case ActionType.Icon:
                value.text = buffer.readS();
                break;
        }
    }
}
class ActionType {
}
ActionType.XY = 0;
ActionType.Size = 1;
ActionType.Scale = 2;
ActionType.Pivot = 3;
ActionType.Alpha = 4;
ActionType.Rotation = 5;
ActionType.Color = 6;
ActionType.Animation = 7;
ActionType.Visible = 8;
ActionType.Sound = 9;
ActionType.Transition = 10;
ActionType.Shake = 11;
ActionType.ColorFilter = 12;
ActionType.Skew = 13;
ActionType.Text = 14;
ActionType.Icon = 15;
ActionType.Unknown = 16;
class Item {
    constructor(type) {
        this.type = type;
        this.value = {};
        this.displayLockToken = 0;
    }
}
class TweenConfig {
    constructor() {
        this.easeType = EaseType.QuadOut;
        this.startValue = { b1: true, b2: true };
        this.endValue = { b1: true, b2: true };
    }
}
const OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
const OPTION_AUTO_STOP_DISABLED = 2;
const OPTION_AUTO_STOP_AT_END = 4;

class ControllerAction {
    constructor() {
    }
    run(controller, prevPage, curPage) {
        if ((this.fromPage == null || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
            && (this.toPage == null || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
            this.enter(controller);
        else
            this.leave(controller);
    }
    enter(controller) {
    }
    leave(controller) {
    }
    setup(buffer) {
        var cnt;
        var i;
        cnt = buffer.readShort();
        this.fromPage = [];
        for (i = 0; i < cnt; i++)
            this.fromPage[i] = buffer.readS();
        cnt = buffer.readShort();
        this.toPage = [];
        for (i = 0; i < cnt; i++)
            this.toPage[i] = buffer.readS();
    }
}

class PlayTransitionAction extends ControllerAction {
    constructor() {
        super();
    }
    enter(controller) {
        var trans = controller.parent.getTransition(this.transitionName);
        if (trans) {
            if (this._currentTransition && this._currentTransition.playing)
                trans.changePlayTimes(this.playTimes);
            else
                trans.play(null, this.playTimes, this.delay);
            this._currentTransition = trans;
        }
    }
    leave(controller) {
        if (this.stopOnExit && this._currentTransition) {
            this._currentTransition.stop();
            this._currentTransition = null;
        }
    }
    setup(buffer) {
        super.setup(buffer);
        this.transitionName = buffer.readS();
        this.playTimes = buffer.readInt();
        this.delay = buffer.readFloat();
        this.stopOnExit = buffer.readBool();
    }
}

class ChangePageAction extends ControllerAction {
    constructor() {
        super();
    }
    enter(controller) {
        if (!this.controllerName)
            return;
        var gcom;
        if (this.objectId)
            gcom = controller.parent.getChildById(this.objectId);
        else
            gcom = controller.parent;
        if (gcom) {
            var cc = gcom.getController(this.controllerName);
            if (cc && cc != controller && !cc.changing) {
                if (this.targetPage == "~1") {
                    if (controller.selectedIndex < cc.pageCount)
                        cc.selectedIndex = controller.selectedIndex;
                }
                else if (this.targetPage == "~2")
                    cc.selectedPage = controller.selectedPage;
                else
                    cc.selectedPageId = this.targetPage;
            }
        }
    }
    setup(buffer) {
        super.setup(buffer);
        this.objectId = buffer.readS();
        this.controllerName = buffer.readS();
        this.targetPage = buffer.readS();
    }
}

var _nextPageId = 0;
class Controller extends Phaser.Events.EventEmitter {
    constructor() {
        super();
        this._pageIds = [];
        this._pageNames = [];
        this._selectedIndex = -1;
        this._previousIndex = -1;
    }
    dispose() {
        throw new Error("TODO");
        // this.offAll();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1)
                throw "index out of bounds: " + value;
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.emit(Events.STATE_CHANGED, this);
            this.changing = false;
        }
    }
    /**
     * 功能和设置selectedIndex一样，但不会触发事件
     */
    setSelectedIndex(value) {
        if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1)
                throw "index out of bounds: " + value;
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.changing = false;
        }
    }
    get previsousIndex() {
        return this._previousIndex;
    }
    get selectedPage() {
        if (this._selectedIndex == -1)
            return null;
        else
            return this._pageNames[this._selectedIndex];
    }
    set selectedPage(val) {
        var i = this._pageNames.indexOf(val);
        if (i == -1)
            i = 0;
        this.selectedIndex = i;
    }
    /**
     * 功能和设置selectedPage一样，但不会触发事件
     */
    setSelectedPage(value) {
        var i = this._pageNames.indexOf(value);
        if (i == -1)
            i = 0;
        this.setSelectedIndex(i);
    }
    get previousPage() {
        if (this._previousIndex == -1)
            return null;
        else
            return this._pageNames[this._previousIndex];
    }
    get pageCount() {
        return this._pageIds.length;
    }
    getPageName(index) {
        return this._pageNames[index];
    }
    addPage(name) {
        this.addPageAt(name, this._pageIds.length);
    }
    addPageAt(name, index) {
        var nid = "" + (_nextPageId++);
        if (index == this._pageIds.length) {
            this._pageIds.push(nid);
            this._pageNames.push(name);
        }
        else {
            this._pageIds.splice(index, 0, nid);
            this._pageNames.splice(index, 0, name);
        }
    }
    removePage(name) {
        var i = this._pageNames.indexOf(name);
        if (i != -1) {
            this._pageIds.splice(i, 1);
            this._pageNames.splice(i, 1);
            if (this._selectedIndex >= this._pageIds.length)
                this.selectedIndex = this._selectedIndex - 1;
            else
                this.parent.applyController(this);
        }
    }
    removePageAt(index) {
        this._pageIds.splice(index, 1);
        this._pageNames.splice(index, 1);
        if (this._selectedIndex >= this._pageIds.length)
            this.selectedIndex = this._selectedIndex - 1;
        else
            this.parent.applyController(this);
    }
    clearPages() {
        this._pageIds.length = 0;
        this._pageNames.length = 0;
        if (this._selectedIndex != -1)
            this.selectedIndex = -1;
        else
            this.parent.applyController(this);
    }
    hasPage(aName) {
        return this._pageNames.indexOf(aName) != -1;
    }
    getPageIndexById(aId) {
        return this._pageIds.indexOf(aId);
    }
    getPageIdByName(aName) {
        var i = this._pageNames.indexOf(aName);
        if (i != -1)
            return this._pageIds[i];
        else
            return null;
    }
    getPageNameById(aId) {
        var i = this._pageIds.indexOf(aId);
        if (i != -1)
            return this._pageNames[i];
        else
            return null;
    }
    getPageId(index) {
        return this._pageIds[index];
    }
    get selectedPageId() {
        if (this._selectedIndex == -1)
            return null;
        else
            return this._pageIds[this._selectedIndex];
    }
    set selectedPageId(val) {
        var i = this._pageIds.indexOf(val);
        this.selectedIndex = i;
    }
    set oppositePageId(val) {
        var i = this._pageIds.indexOf(val);
        if (i > 0)
            this.selectedIndex = 0;
        else if (this._pageIds.length > 1)
            this.selectedIndex = 1;
    }
    get previousPageId() {
        if (this._previousIndex == -1)
            return null;
        else
            return this._pageIds[this._previousIndex];
    }
    runActions() {
        if (this._actions) {
            var cnt = this._actions.length;
            for (var i = 0; i < cnt; i++) {
                this._actions[i].run(this, this.previousPageId, this.selectedPageId);
            }
        }
    }
    setup(buffer) {
        var beginPos = buffer.position;
        buffer.seek(beginPos, 0);
        this.name = buffer.readS();
        if (buffer.readBool())
            this.autoRadioGroupDepth = true;
        buffer.seek(beginPos, 1);
        var i;
        var nextPos;
        var cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            this._pageIds.push(buffer.readS());
            this._pageNames.push(buffer.readS());
        }
        var homePageIndex = 0;
        if (buffer.version >= 2) {
            var homePageType = buffer.readByte();
            switch (homePageType) {
                case 1:
                    homePageIndex = buffer.readShort();
                    break;
                case 2:
                    homePageIndex = this._pageNames.indexOf(UIPackage.branch);
                    if (homePageIndex == -1)
                        homePageIndex = 0;
                    break;
                case 3:
                    homePageIndex = this._pageNames.indexOf(UIPackage.getVar(buffer.readS()));
                    if (homePageIndex == -1)
                        homePageIndex = 0;
                    break;
            }
        }
        buffer.seek(beginPos, 2);
        cnt = buffer.readShort();
        if (cnt > 0) {
            if (!this._actions)
                this._actions = [];
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                var action = createAction(buffer.readByte());
                action.setup(buffer);
                this._actions.push(action);
                buffer.position = nextPos;
            }
        }
        if (this.parent && this._pageIds.length > 0)
            this._selectedIndex = homePageIndex;
        else
            this._selectedIndex = -1;
    }
}
function createAction(type) {
    switch (type) {
        case 0:
            return new PlayTransitionAction();
        case 1:
            return new ChangePageAction();
    }
    return null;
}

// import { UIObjectFactory } from './UIObjectFactory';
class GComponent extends GObject {
    constructor() {
        super();
        this._sortingChildCount = 0;
        this._children = [];
        this._controllers = [];
        this._transitions = [];
        this._margin = new Margin();
        this._alignOffset = new Phaser.Geom.Point();
        this._opaque = false;
        this._childrenRenderOrder = 0;
        this._apexIndex = 0;
    }
    createDisplayObject() {
        super.createDisplayObject();
        this._displayObject.setInteractive(true);
        this._container = this._displayObject;
    }
    dispose() {
        var i;
        var cnt;
        cnt = this._transitions.length;
        for (i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            trans.dispose();
        }
        cnt = this._controllers.length;
        for (i = 0; i < cnt; ++i) {
            var cc = this._controllers[i];
            cc.dispose();
        }
        if (this.scrollPane)
            this.scrollPane.dispose();
        cnt = this._children.length;
        for (i = cnt - 1; i >= 0; --i) {
            var obj = this._children[i];
            obj.parent = null; //avoid removeFromParent call
            obj.dispose();
        }
        this._boundsChanged = false;
        super.dispose();
    }
    get displayListContainer() {
        return this._container;
    }
    add(child) {
        this.addChildAt(child, this._children.length);
        return child;
    }
    addChildAt(child, index) {
        if (!child)
            throw "child is null";
        if (index >= 0 && index <= this._children.length) {
            if (child.parent == this) {
                this.setChildIndex(child, index);
            }
            else {
                child.removeFromParent();
                child.parent = this;
                var cnt = this._children.length;
                if (child.sortingOrder != 0) {
                    this._sortingChildCount++;
                    index = this.getInsertPosForSortingChild(child);
                }
                else if (this._sortingChildCount > 0) {
                    if (index > (cnt - this._sortingChildCount))
                        index = cnt - this._sortingChildCount;
                }
                if (index == cnt)
                    this._children.push(child);
                else
                    this._children.splice(index, 0, child);
                this.childStateChanged(child);
                this.setBoundsChangedFlag();
            }
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    getInsertPosForSortingChild(target) {
        var cnt = this._children.length;
        var i = 0;
        for (i = 0; i < cnt; i++) {
            var child = this._children[i];
            if (child == target)
                continue;
            if (target.sortingOrder < child.sortingOrder)
                break;
        }
        return i;
    }
    removeChild(child, dispose) {
        var childIndex = this._children.indexOf(child);
        if (childIndex != -1) {
            this.removeChildAt(childIndex, dispose);
        }
        return child;
    }
    removeChildAt(index, dispose) {
        if (index >= 0 && index < this._children.length) {
            var child = this._children[index];
            child.parent = null;
            if (child.sortingOrder != 0)
                this._sortingChildCount--;
            this._children.splice(index, 1);
            child.group = null;
            if (child.inContainer) {
                this._container.remove(child.displayObject);
                // if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                //     Laya.timer.callLater(this, this.buildNativeDisplayList);
            }
            if (dispose)
                child.dispose();
            this.setBoundsChangedFlag();
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    removeChildren(beginIndex, endIndex, dispose) {
        if (beginIndex == undefined)
            beginIndex = 0;
        if (endIndex == undefined)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this._children.length)
            endIndex = this._children.length - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildAt(beginIndex, dispose);
    }
    getChildAt(index) {
        if (index >= 0 && index < this._children.length)
            return this._children[index];
        else
            throw "Invalid child index";
    }
    getChild(name) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            if (this._children[i].name == name)
                return this._children[i];
        }
        return null;
    }
    getChildByPath(path) {
        var arr = path.split(".");
        var cnt = arr.length;
        var gcom = this;
        var obj;
        for (var i = 0; i < cnt; ++i) {
            obj = gcom.getChild(arr[i]);
            if (!obj)
                break;
            if (i != cnt - 1) {
                if (!(obj instanceof GComponent)) {
                    obj = null;
                    break;
                }
                else
                    gcom = obj;
            }
        }
        return obj;
    }
    getVisibleChild(name) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child.internalVisible && child.internalVisible2 && child.name == name)
                return child;
        }
        return null;
    }
    getChildInGroup(name, group) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child.group == group && child.name == name)
                return child;
        }
        return null;
    }
    getChildById(id) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            if (this._children[i]._id == id)
                return this._children[i];
        }
        return null;
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    setChildIndex(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        if (child.sortingOrder != 0) //no effect
            return;
        var cnt = this._children.length;
        if (this._sortingChildCount > 0) {
            if (index > (cnt - this._sortingChildCount - 1))
                index = cnt - this._sortingChildCount - 1;
        }
        this._setChildIndex(child, oldIndex, index);
    }
    setChildIndexBefore(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        if (child.sortingOrder != 0) //no effect
            return oldIndex;
        var cnt = this._children.length;
        if (this._sortingChildCount > 0) {
            if (index > (cnt - this._sortingChildCount - 1))
                index = cnt - this._sortingChildCount - 1;
        }
        if (oldIndex < index)
            return this._setChildIndex(child, oldIndex, index - 1);
        else
            return this._setChildIndex(child, oldIndex, index);
    }
    _setChildIndex(child, oldIndex, index) {
        var cnt = this._children.length;
        if (index > cnt)
            index = cnt;
        if (oldIndex == index)
            return oldIndex;
        this._children.splice(oldIndex, 1);
        this._children.splice(index, 0, child);
        if (child.inContainer) {
            var displayIndex = 0;
            var g;
            var i;
            if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                for (i = 0; i < index; i++) {
                    g = this._children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex === this._container.displayList.length)
                    displayIndex--;
                this._container.addAt(child.displayObject, displayIndex);
            }
            else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                for (i = cnt - 1; i > index; i--) {
                    g = this._children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex === this._container.displayList.length)
                    displayIndex--;
                this._container.addAt(child.displayObject, displayIndex);
            }
            // else {
            //     Laya.timer.callLater(this, this.buildNativeDisplayList);
            // }
            this.setBoundsChangedFlag();
        }
        return index;
    }
    swapChildren(child1, child2) {
        var index1 = this._children.indexOf(child1);
        var index2 = this._children.indexOf(child2);
        if (index1 == -1 || index2 == -1)
            throw "Not a child of this container";
        this.swapChildrenAt(index1, index2);
    }
    swapChildrenAt(index1, index2) {
        var child1 = this._children[index1];
        var child2 = this._children[index2];
        this.setChildIndex(child1, index2);
        this.setChildIndex(child2, index1);
    }
    get numChildren() {
        return this._children.length;
    }
    isAncestorOf(child) {
        if (!child)
            return false;
        var p = child.parent;
        while (p) {
            if (p == this)
                return true;
            p = p.parent;
        }
        return false;
    }
    addController(controller) {
        this._controllers.push(controller);
        controller.parent = this;
        this.applyController(controller);
    }
    getControllerAt(index) {
        return this._controllers[index];
    }
    getController(name) {
        var cnt = this._controllers.length;
        for (var i = 0; i < cnt; ++i) {
            var c = this._controllers[i];
            if (c.name == name)
                return c;
        }
        return null;
    }
    removeController(c) {
        var index = this._controllers.indexOf(c);
        if (index == -1)
            throw new Error("controller not exists");
        c.parent = null;
        this._controllers.splice(index, 1);
        var length = this._children.length;
        for (var i = 0; i < length; i++) {
            var child = this._children[i];
            child.handleControllerChanged(c);
        }
    }
    get controllers() {
        return this._controllers;
    }
    childStateChanged(child) {
        if (this._buildingDisplayList)
            return;
        var cnt = this._children.length;
        if (child instanceof GGroup) {
            for (var i = 0; i < cnt; i++) {
                var g = this._children[i];
                if (g.group == child)
                    this.childStateChanged(g);
            }
            return;
        }
        if (!child.displayObject)
            return;
        if (child.internalVisible) { // && child.displayObject !== this._displayObject.mask) {
            if (!child.displayObject.parentContainer) {
                var index = 0;
                if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                    for (i = 0; i < cnt; i++) {
                        g = this._children[i];
                        if (g == child)
                            break;
                        if (g.displayObject && g.displayObject.parentContainer)
                            index++;
                    }
                    this._container.addAt(child.displayObject, index);
                }
                else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                    for (i = cnt - 1; i >= 0; i--) {
                        g = this._children[i];
                        if (g == child)
                            break;
                        if (g.displayObject && g.displayObject.parentContainer)
                            index++;
                    }
                    this._container.addAt(child.displayObject, index);
                }
                else {
                    this._container.add(child.displayObject);
                    // Laya.timer.callLater(this, this.buildNativeDisplayList);
                }
            }
        }
        else {
            if (child.displayObject.parentContainer) {
                this._container.remove(child.displayObject);
                //     if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                //         Laya.timer.callLater(this, this.buildNativeDisplayList);
            }
        }
    }
    buildNativeDisplayList() {
        if (!this._displayObject)
            return;
        var cnt = this._children.length;
        if (cnt == 0)
            return;
        var i;
        var child;
        switch (this._childrenRenderOrder) {
            case ChildrenRenderOrder.Ascent:
                {
                    for (i = 0; i < cnt; i++) {
                        child = this._children[i];
                        if (child.displayObject && child.internalVisible)
                            this._container.add(child.displayObject);
                    }
                }
                break;
            case ChildrenRenderOrder.Descent:
                {
                    for (i = cnt - 1; i >= 0; i--) {
                        child = this._children[i];
                        if (child.displayObject && child.internalVisible)
                            this._container.add(child.displayObject);
                    }
                }
                break;
            case ChildrenRenderOrder.Arch:
                {
                    var apex = ToolSet.clamp(this._apexIndex, 0, cnt);
                    for (i = 0; i < apex; i++) {
                        child = this._children[i];
                        if (child.displayObject && child.internalVisible)
                            this._container.add(child.displayObject);
                    }
                    for (i = cnt - 1; i >= apex; i--) {
                        child = this._children[i];
                        if (child.displayObject && child.internalVisible)
                            this._container.add(child.displayObject);
                    }
                }
                break;
        }
    }
    applyController(c) {
        this._applyingController = c;
        var child;
        var length = this._children.length;
        for (var i = 0; i < length; i++) {
            child = this._children[i];
            child.handleControllerChanged(c);
        }
        this._applyingController = null;
        c.runActions();
    }
    applyAllControllers() {
        var cnt = this._controllers.length;
        for (var i = 0; i < cnt; ++i) {
            this.applyController(this._controllers[i]);
        }
    }
    adjustRadioGroupDepth(obj, c) {
        var cnt = this._children.length;
        var i;
        var child;
        var myIndex = -1, maxIndex = -1;
        for (i = 0; i < cnt; i++) {
            child = this._children[i];
            if (child == obj) {
                myIndex = i;
            }
            else if (("relatedController" in child) /*is button*/ && child.relatedController == c) {
                if (i > maxIndex)
                    maxIndex = i;
            }
        }
        if (myIndex < maxIndex) {
            //如果正在applyingController，此时修改显示列表是危险的，但真正排除危险只能用显示列表的副本去做，这样性能可能损耗较大，
            //这里取个巧，让可能漏过的child补一下handleControllerChanged，反正重复执行是无害的。
            if (this._applyingController)
                this._children[maxIndex].handleControllerChanged(this._applyingController);
            this.swapChildrenAt(myIndex, maxIndex);
        }
    }
    getTransitionAt(index) {
        return this._transitions[index];
    }
    getTransition(transName) {
        var cnt = this._transitions.length;
        for (var i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            if (trans.name == transName)
                return trans;
        }
        return null;
    }
    isChildInView(child) {
        if (this.scrollRect) {
            return child.x + child.width >= 0 && child.x <= this.width
                && child.y + child.height >= 0 && child.y <= this.height;
        }
        else if (this._scrollPane) {
            return this._scrollPane.isChildInView(child);
        }
        else
            return true;
    }
    getFirstChildInView() {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (this.isChildInView(child))
                return i;
        }
        return -1;
    }
    get scrollPane() {
        return this._scrollPane;
    }
    get opaque() {
        return this._opaque;
    }
    set opaque(value) {
        if (this._opaque != value) {
            this._opaque = value;
            if (this._opaque) {
                if (!this.hitArea)
                    this.hitArea = new Phaser.Geom.Rectangle();
                if (this.hitArea instanceof Phaser.Geom.Rectangle)
                    this.hitArea.setTo(0, 0, this._width, this._height);
                this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
            }
            else {
                if (this.hitArea instanceof Phaser.Geom.Rectangle)
                    this.hitArea = null;
                this._displayObject.disableInteractive();
                // this._displayObject.mouseThrough = true;
            }
        }
    }
    get margin() {
        return this._margin;
    }
    set margin(value) {
        this._margin.copy(value);
        if (this.scrollRect) {
            this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
        }
        this.handleSizeChanged();
    }
    get childrenRenderOrder() {
        return this._childrenRenderOrder;
    }
    set childrenRenderOrder(value) {
        if (this._childrenRenderOrder != value) {
            this._childrenRenderOrder = value;
            this.buildNativeDisplayList();
        }
    }
    get apexIndex() {
        return this._apexIndex;
    }
    set apexIndex(value) {
        if (this._apexIndex != value) {
            this._apexIndex = value;
            if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                this.buildNativeDisplayList();
        }
    }
    get mask() {
        return this._mask;
    }
    set mask(value) {
        this.setMask(value, false);
    }
    setMask(value, reversed) {
        if (this._mask && this._mask != value) {
            if (this._mask.blendMode == "destination-out")
                this._mask.blendMode = null;
        }
        this._mask = value;
        if (!this._mask) {
            this._displayObject.mask = null;
            if (this.hitArea instanceof ChildHitArea)
                this.hitArea = null;
            return;
        }
        // if (this._mask.displayObject.input.hitArea) {
        // this.hitArea = new ChildHitArea(this._mask, reversed);
        // this._displayObject.mouseThrough = false;
        // this._displayObject.hitTestPrior = true;
        // }
        const maskObj = new GObject();
        maskObj.scene = this.scene;
        maskObj.setDisplayObject(this._mask);
        this.hitArea = new ChildHitArea(maskObj, reversed);
        if (reversed) {
            this._displayObject.mask = null;
            // this._displayObject.cacheAs = "bitmap";
            this._mask.blendMode = "destination-out";
        }
        else
            this._displayObject.mask = this._mask.createGeometryMask();
    }
    get baseUserData() {
        var buffer = this.packageItem.rawData;
        buffer.seek(0, 4);
        return buffer.readS();
    }
    updateHitArea() {
        if (this.hitArea instanceof PixelHitTest) {
            var hitTest = (this.hitArea);
            if (this.sourceWidth != 0)
                hitTest.scaleX = this._width / this.sourceWidth;
            if (this.sourceHeight != 0)
                hitTest.scaleY = this._height / this.sourceHeight;
        }
        else if (this.hitArea instanceof Phaser.Geom.Rectangle) {
            this.hitArea.setTo(0, 0, this._width, this._height);
        }
    }
    updateMask() {
        var rect = this.scrollRect;
        if (!rect)
            rect = new Phaser.Geom.Rectangle();
        rect.x = this._margin.left;
        rect.y = this._margin.top;
        rect.width = this._width - this._margin.right;
        rect.height = this._height - this._margin.bottom;
        this.scrollRect = rect;
    }
    setupScroll(buffer) {
        if (this._displayObject == this._container) {
            this._container = new Phaser.GameObjects.Container(this.scene);
            this._displayObject.add(this._container);
        }
        this._scrollPane = new ScrollPane(this);
        this._scrollPane.setup(buffer);
    }
    setupOverflow(overflow) {
        if (overflow == OverflowType.Hidden) {
            if (this._displayObject == this._container) {
                this._container = new Phaser.GameObjects.Container(this.scene);
                this._displayObject.add(this._container);
            }
            this.updateMask();
            this._container.setPosition(this._margin.left, this._margin.top);
        }
        else if (this._margin.left != 0 || this._margin.top != 0) {
            if (this._displayObject == this._container) {
                this._container = new Phaser.GameObjects.Container(this.scene);
                this._displayObject.add(this._container);
            }
            this._container.setPosition(this._margin.left, this._margin.top);
        }
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._scrollPane)
            this._scrollPane.onOwnerSizeChanged();
        else if (this.scrollRect)
            this.updateMask();
        if (this.hitArea)
            this.updateHitArea();
    }
    handleGrayedChanged() {
        var c = this.getController("grayed");
        if (c) {
            c.selectedIndex = this.grayed ? 1 : 0;
            return;
        }
        var v = this.grayed;
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            this._children[i].grayed = v;
        }
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._scrollPane)
            this._scrollPane.handleControllerChanged(c);
    }
    setBoundsChangedFlag() {
        if (!this._scrollPane && !this._trackBounds)
            return;
        if (!this._boundsChanged) {
            this._boundsChanged = true;
            //Laya.timer.callLater(this, this.__render);
        }
    }
    __render() {
        if (this._boundsChanged) {
            var i1 = 0;
            var len = this._children.length;
            var child;
            for (i1 = 0; i1 < len; i1++) {
                child = this._children[i1];
                child.ensureSizeCorrect();
            }
            this.updateBounds();
        }
    }
    ensureBoundsCorrect() {
        var i1 = 0;
        var len = this._children.length;
        var child;
        for (i1 = 0; i1 < len; i1++) {
            child = this._children[i1];
            child.ensureSizeCorrect();
        }
        if (this._boundsChanged)
            this.updateBounds();
    }
    updateBounds() {
        var ax = 0, ay = 0, aw = 0, ah = 0;
        var len = this._children.length;
        if (len > 0) {
            ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
            var tmp = 0;
            var i1 = 0;
            for (i1 = 0; i1 < len; i1++) {
                var child = this._children[i1];
                tmp = child.x;
                if (tmp < ax)
                    ax = tmp;
                tmp = child.y;
                if (tmp < ay)
                    ay = tmp;
                tmp = child.x + child.actualWidth;
                if (tmp > ar)
                    ar = tmp;
                tmp = child.y + child.actualHeight;
                if (tmp > ab)
                    ab = tmp;
            }
            aw = ar - ax;
            ah = ab - ay;
        }
        this.setBounds(ax, ay, aw, ah);
    }
    setBounds(ax, ay, aw, ah) {
        this._boundsChanged = false;
        if (this._scrollPane)
            this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
    }
    get viewWidth() {
        if (this._scrollPane)
            return this._scrollPane.viewWidth;
        else
            return this.width - this._margin.left - this._margin.right;
    }
    set viewWidth(value) {
        if (this._scrollPane)
            this._scrollPane.viewWidth = value;
        else
            this.width = value + this._margin.left + this._margin.right;
    }
    get viewHeight() {
        if (this._scrollPane)
            return this._scrollPane.viewHeight;
        else
            return this.height - this._margin.top - this._margin.bottom;
    }
    set viewHeight(value) {
        if (this._scrollPane)
            this._scrollPane.viewHeight = value;
        else
            this.height = value + this._margin.top + this._margin.bottom;
    }
    getSnappingPosition(xValue, yValue, result) {
        return this.getSnappingPositionWithDir(xValue, yValue, 0, 0, result);
    }
    /**
     * dir正数表示右移或者下移，负数表示左移或者上移
     */
    getSnappingPositionWithDir(xValue, yValue, xDir, yDir, result) {
        if (!result)
            result = new Phaser.Geom.Point();
        var cnt = this._children.length;
        if (cnt == 0) {
            result.x = 0;
            result.y = 0;
            return result;
        }
        this.ensureBoundsCorrect();
        var obj = null;
        var prev = null;
        var i = 0;
        if (yValue != 0) {
            for (; i < cnt; i++) {
                obj = this._children[i];
                if (yValue < obj.y) {
                    if (i == 0) {
                        yValue = 0;
                        break;
                    }
                    else {
                        prev = this._children[i - 1];
                        if (yValue < prev.y + prev.actualHeight / 2) //top half part
                            yValue = prev.y;
                        else //bottom half part
                            yValue = obj.y;
                        break;
                    }
                }
            }
            if (i == cnt)
                yValue = obj.y;
        }
        if (xValue != 0) {
            if (i > 0)
                i--;
            for (; i < cnt; i++) {
                obj = this._children[i];
                if (xValue < obj.x) {
                    if (i == 0) {
                        xValue = 0;
                        break;
                    }
                    else {
                        prev = this._children[i - 1];
                        if (xValue < prev.x + prev.actualWidth / 2) //top half part
                            xValue = prev.x;
                        else //bottom half part
                            xValue = obj.x;
                        break;
                    }
                }
            }
            if (i == cnt)
                xValue = obj.x;
        }
        result.x = xValue;
        result.y = yValue;
        return result;
    }
    childSortingOrderChanged(child, oldValue, newValue) {
        if (newValue == 0) {
            this._sortingChildCount--;
            this.setChildIndex(child, this._children.length);
        }
        else {
            if (oldValue == 0)
                this._sortingChildCount++;
            var oldIndex = this._children.indexOf(child);
            var index = this.getInsertPosForSortingChild(child);
            if (oldIndex < index)
                this._setChildIndex(child, oldIndex, index - 1);
            else
                this._setChildIndex(child, oldIndex, index);
        }
    }
    constructFromResource() {
        this.constructFromResource2(null, 0);
    }
    constructFromResource2(objectPool, poolIndex) {
        var contentItem = this.packageItem.getBranch();
        if (!contentItem.decoded) {
            contentItem.decoded = true;
            TranslationHelper.translateComponent(contentItem);
        }
        var i;
        var dataLen;
        var curPos;
        var nextPos;
        var f1;
        var f2;
        var i1;
        var i2;
        var buffer = contentItem.rawData;
        buffer.seek(0, 0);
        this._underConstruct = true;
        this.sourceWidth = buffer.readInt();
        this.sourceHeight = buffer.readInt();
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;
        this.setSize(this.sourceWidth, this.sourceHeight);
        if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
        }
        if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.internalSetPivot(f1, f2, buffer.readBool());
        }
        if (buffer.readBool()) {
            this._margin.top = buffer.readInt();
            this._margin.bottom = buffer.readInt();
            this._margin.left = buffer.readInt();
            this._margin.right = buffer.readInt();
        }
        var overflow = buffer.readByte();
        if (overflow == OverflowType.Scroll) {
            var savedPos = buffer.position;
            buffer.seek(0, 7);
            this.setupScroll(buffer);
            buffer.position = savedPos;
        }
        else
            this.setupOverflow(overflow);
        if (buffer.readBool())
            buffer.skip(8);
        this._buildingDisplayList = true;
        buffer.seek(0, 1);
        var controllerCount = buffer.readShort();
        for (i = 0; i < controllerCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var controller = new Controller();
            this._controllers.push(controller);
            controller.parent = this;
            controller.setup(buffer);
            buffer.position = nextPos;
        }
        buffer.seek(0, 2);
        var child;
        var childCount = buffer.readShort();
        for (i = 0; i < childCount; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.position;
            if (objectPool)
                child = objectPool[poolIndex + i];
            else {
                buffer.seek(curPos, 0);
                buffer.readByte();
                buffer.readS();
                buffer.readS();
                var pi = null;
                throw "error";
                // if (pi) {
                //     child = UIObjectFactory.newObject(pi);
                //     child.constructFromResource();
                // }
                // else
                //     child = UIObjectFactory.newObject(type);
            }
            child._underConstruct = true;
            child.setup_beforeAdd(buffer, curPos);
            child.parent = this;
            this._children.push(child);
            buffer.position = curPos + dataLen;
        }
        buffer.seek(0, 3);
        this.relations.setup(buffer, true);
        buffer.seek(0, 2);
        buffer.skip(2);
        for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            buffer.seek(buffer.position, 3);
            this._children[i].relations.setup(buffer, false);
            buffer.position = nextPos;
        }
        buffer.seek(0, 2);
        buffer.skip(2);
        for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            child = this._children[i];
            child.setup_afterAdd(buffer, buffer.position);
            child._underConstruct = false;
            buffer.position = nextPos;
        }
        buffer.seek(0, 4);
        buffer.skip(2); //customData
        this.opaque = buffer.readBool();
        var maskId = buffer.readShort();
        if (maskId != -1) {
            this.setMask(this.getChildAt(maskId).displayObject, buffer.readBool());
        }
        var hitTestId = buffer.readS();
        i1 = buffer.readInt();
        i2 = buffer.readInt();
        var hitArea;
        if (hitTestId) {
            pi = contentItem.owner.getItemById(hitTestId);
            if (pi && pi.pixelHitTestData)
                hitArea = new PixelHitTest(pi.pixelHitTestData, i1, i2);
        }
        if (hitArea) {
            // this._displayObject.setInteractive(hitArea,Phaser.Geom.Rectangle.Contains);
            this.hitArea = hitArea;
            // this._displayObject.mouseThrough = false;
            // this._displayObject.hitTestPrior = true;
        }
        buffer.seek(0, 5);
        var transitionCount = buffer.readShort();
        for (i = 0; i < transitionCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var trans = new Transition(this);
            trans.setup(buffer);
            this._transitions.push(trans);
            buffer.position = nextPos;
        }
        if (this._transitions.length > 0) {
            this.displayObject.on(Phaser.GameObjects.Events.ADDED_TO_SCENE, this.___added);
            this.displayObject.on(Phaser.GameObjects.Events.REMOVED_FROM_SCENE, this.___removed);
        }
        this.applyAllControllers();
        this._buildingDisplayList = false;
        this._underConstruct = false;
        this.buildNativeDisplayList();
        this.setBoundsChangedFlag();
        if (contentItem.objectType != ObjectType.Component)
            this.constructExtension(buffer);
        this.onConstruct();
    }
    constructExtension(buffer) {
    }
    onConstruct() {
        this.constructFromXML(null); //old version
    }
    constructFromXML(xml) {
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 4);
        var pageController = buffer.readShort();
        if (pageController != -1 && this._scrollPane)
            this._scrollPane.pageController = this._parent.getControllerAt(pageController);
        var cnt;
        var i;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            var cc = this.getController(buffer.readS());
            var pageId = buffer.readS();
            if (cc)
                cc.selectedPageId = pageId;
        }
        if (buffer.version >= 2) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                var target = buffer.readS();
                var propertyId = buffer.readShort();
                var value = buffer.readS();
                var obj = this.getChildByPath(target);
                if (obj)
                    obj.setProp(propertyId, value);
            }
        }
    }
    ___added() {
        var cnt = this._transitions.length;
        for (var i = 0; i < cnt; ++i) {
            this._transitions[i].onOwnerAddedToStage();
        }
    }
    ___removed() {
        var cnt = this._transitions.length;
        for (var i = 0; i < cnt; ++i) {
            this._transitions[i].onOwnerRemovedFromStage();
        }
    }
}

class GRootMouseStatus {
    constructor() {
        this.touchDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
    }
}
var UISceneDisplay;
(function (UISceneDisplay) {
    UISceneDisplay[UISceneDisplay["LAYER_ROOT"] = 0] = "LAYER_ROOT";
    UISceneDisplay[UISceneDisplay["LAYER_UI"] = 1] = "LAYER_UI";
    UISceneDisplay[UISceneDisplay["LAYER_DIALOG"] = 2] = "LAYER_DIALOG";
    UISceneDisplay[UISceneDisplay["LAYER_TOOLTIPS"] = 3] = "LAYER_TOOLTIPS";
    UISceneDisplay[UISceneDisplay["LAYER_MASK"] = 4] = "LAYER_MASK";
})(UISceneDisplay || (UISceneDisplay = {}));
/**
 * gui根对象（逻辑对象）
 */
class GRoot extends GComponent {
    constructor() {
        super();
    }
    get displayObject() {
        return this._container;
    }
    static get inst() {
        if (GRoot._inst == null)
            new GRoot();
        return GRoot._inst;
    }
    /**
    * the current mouse/pointer data
    */
    static get globalMouseStatus() {
        return GRoot._gmStatus;
    }
    get focus() {
        return null;
    }
    set focus(value) {
        this.setFocus(value);
    }
    setFocus(value) {
    }
    /**
     * 游戏/编辑器启动ui入口,注入uiScene
     * @param scene
     * @param stageOptions
     */
    attachTo(scene, stageOptions) {
        this._scene = scene;
        this.createDisplayObject();
        // todo deal stageoptions
        if (this._uiStage) {
            this.removeListen();
            this._uiStage.removeChild(this._container, UISceneDisplay.LAYER_ROOT);
            this._uiStage.destroy();
        }
        this._uiStage = new UIStage(scene);
        this._uiStage.addChild(this._container, UISceneDisplay.LAYER_ROOT);
        this.addListen();
    }
    addListen() {
        this.removeListen();
        this._uiStage.on(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
        this._uiStage.nativeStage.on("pointerdown", this.onStageDown, this);
        this._uiStage.nativeStage.on("pointerup", this.onStageUp, this);
        this._uiStage.nativeStage.on("pointermove", this.onStageMove, this);
    }
    removeListen() {
        this._uiStage.off(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
        this._uiStage.nativeStage.off("pointerdown", this.onStageDown, this);
        this._uiStage.nativeStage.off("pointerup", this.onStageUp, this);
        this._uiStage.nativeStage.off("pointermove", this.onStageMove, this);
    }
    addTimeEvent(timeEvent) {
        return this.scene.time.addEvent(timeEvent);
    }
    removeTimeEvent(timeEvent) {
        if (timeEvent)
            timeEvent.remove();
    }
    playOneShotSound(url, volumeScale) {
        if (ToolSet.startsWith(url, "ui://"))
            return;
        this.scene.sound.play(url);
    }
    showTooltips(msg) {
        if (this._defaultTooltipWin == null) {
            var resourceURL = UIConfig.tooltipsWin;
            if (!resourceURL) {
                console.warn("UIConfig.tooltipsWin not defined");
                return;
            }
            this._defaultTooltipWin = UIPackage.createObjectFromURL(resourceURL);
        }
        this._defaultTooltipWin.text = msg;
        this.showTooltipsWin(this._defaultTooltipWin);
    }
    showTooltipsWin(tooltipWin, xx, yy) {
        // this.hideTooltips();
        // this._tooltipWin = tooltipWin;
        // if (xx == null || yy == null) {
        //     xx = Stage.touchPos.x + 10;
        //     yy = Stage.touchPos.y + 20;
        // }
        // var pt: Vector2 = this.globalToLocal(xx, yy);
        // xx = pt.x;
        // yy = pt.y;
        // if (xx + this._tooltipWin.width > this.width) {
        //     xx = xx - this._tooltipWin.width - 1;
        //     if (xx < 0)
        //         xx = 10;
        // }
        // if (yy + this._tooltipWin.height > this.height) {
        //     yy = yy - this._tooltipWin.height - 1;
        //     if (xx - this._tooltipWin.width - 1 > 0)
        //         xx = xx - this._tooltipWin.width - 1;
        //     if (yy < 0)
        //         yy = 10;
        // }
        // this._tooltipWin.x = xx;
        // this._tooltipWin.y = yy;
        // this.addChild(this._tooltipWin);
    }
    createDisplayObject() {
        this._container = this._scene.add.container(0, 0);
    }
    onStageDown(pointer) {
        GRoot._gmStatus.mouseX = pointer.worldX;
        GRoot._gmStatus.mouseY = pointer.worldY;
        GRoot._gmStatus.touchDown = true;
    }
    onStageUp(pointer) {
        GRoot._gmStatus.touchDown = false;
    }
    onStageMove(pointer) {
        GRoot._gmStatus.mouseX = pointer.worldX;
        GRoot._gmStatus.mouseY = pointer.worldY;
    }
    $winResize(stage) {
        this._container.setSize(stage.stageWidth, stage.stageHeight);
    }
}
GRoot._gmStatus = new GRootMouseStatus();

class GTextField extends GObject {
    constructor() {
        super();
    }
    get font() {
        return null;
    }
    set font(value) {
    }
    get fontSize() {
        return 0;
    }
    set fontSize(value) {
    }
    get color() {
        return null;
    }
    set color(value) {
    }
    get align() {
        return null;
    }
    set align(value) {
    }
    get valign() {
        return null;
    }
    set valign(value) {
    }
    get leading() {
        return 0;
    }
    set leading(value) {
    }
    get letterSpacing() {
        return 0;
    }
    set letterSpacing(value) {
    }
    get bold() {
        return false;
    }
    set bold(value) {
    }
    get italic() {
        return false;
    }
    set italic(value) {
    }
    get underline() {
        return false;
    }
    set underline(value) {
    }
    get singleLine() {
        return false;
    }
    set singleLine(value) {
    }
    get stroke() {
        return 0;
    }
    set stroke(value) {
    }
    get strokeColor() {
        return null;
    }
    set strokeColor(value) {
    }
    set ubbEnabled(value) {
        this._ubbEnabled = value;
    }
    get ubbEnabled() {
        return this._ubbEnabled;
    }
    get autoSize() {
        return this._autoSize;
    }
    set autoSize(value) {
        if (this._autoSize != value) {
            this._autoSize = value;
            this._widthAutoSize = this._autoSize == AutoSizeType.Both;
            this._heightAutoSize = this._autoSize == AutoSizeType.Both || this._autoSize == AutoSizeType.Height;
            this.updateAutoSize();
        }
    }
    updateAutoSize() {
    }
    get textWidth() {
        return 0;
    }
    parseTemplate(template) {
        var pos1 = 0, pos2, pos3;
        var tag;
        var value;
        var result = "";
        while ((pos2 = template.indexOf("{", pos1)) != -1) {
            if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92) //\
             {
                result += template.substring(pos1, pos2 - 1);
                result += "{";
                pos1 = pos2 + 1;
                continue;
            }
            result += template.substring(pos1, pos2);
            pos1 = pos2;
            pos2 = template.indexOf("}", pos1);
            if (pos2 == -1)
                break;
            if (pos2 == pos1 + 1) {
                result += template.substr(pos1, 2);
                pos1 = pos2 + 1;
                continue;
            }
            tag = template.substring(pos1 + 1, pos2);
            pos3 = tag.indexOf("=");
            if (pos3 != -1) {
                value = this._templateVars[tag.substring(0, pos3)];
                if (value == null)
                    result += tag.substring(pos3 + 1);
                else
                    result += value;
            }
            else {
                value = this._templateVars[tag];
                if (value != null)
                    result += value;
            }
            pos1 = pos2 + 1;
        }
        if (pos1 < template.length)
            result += template.substr(pos1);
        return result;
    }
    get templateVars() {
        return this._templateVars;
    }
    set templateVars(value) {
        if (!this._templateVars && !value)
            return;
        this._templateVars = value;
        this.flushVars();
    }
    setVar(name, value) {
        if (!this._templateVars)
            this._templateVars = {};
        this._templateVars[name] = value;
        return this;
    }
    flushVars() {
        this.text = this._text;
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.OutlineColor:
                return this.strokeColor;
            case ObjectPropID.FontSize:
                return this.fontSize;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.OutlineColor:
                this.strokeColor = value;
                break;
            case ObjectPropID.FontSize:
                this.fontSize = value;
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        var iv;
        this.font = buffer.readS();
        this.fontSize = buffer.readShort();
        this.color = buffer.readColorS();
        iv = buffer.readByte();
        this.align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
        iv = buffer.readByte();
        this.valign = iv == 0 ? "top" : (iv == 1 ? "middle" : "bottom");
        this.leading = buffer.readShort();
        this.letterSpacing = buffer.readShort();
        this.ubbEnabled = buffer.readBool();
        this.autoSize = buffer.readByte();
        this.underline = buffer.readBool();
        this.italic = buffer.readBool();
        this.bold = buffer.readBool();
        this.singleLine = buffer.readBool();
        if (buffer.readBool()) {
            this.strokeColor = buffer.readColorS();
            this.stroke = buffer.readFloat() + 1;
        }
        if (buffer.readBool()) //shadow
            buffer.skip(12);
        if (buffer.readBool())
            this._templateVars = {};
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 6);
        var str = buffer.readS();
        if (str != null)
            this.text = str;
    }
}

class UBBParser {
    constructor() {
        this._readPos = 0;
        this.defaultImgWidth = 0;
        this.defaultImgHeight = 0;
        this._handlers = {};
        this._handlers["url"] = this.onTag_URL;
        this._handlers["img"] = this.onTag_IMG;
        this._handlers["b"] = this.onTag_B;
        this._handlers["i"] = this.onTag_I;
        this._handlers["u"] = this.onTag_U;
        this._handlers["sup"] = this.onTag_Simple;
        this._handlers["sub"] = this.onTag_Simple;
        this._handlers["color"] = this.onTag_COLOR;
        this._handlers["font"] = this.onTag_FONT;
        this._handlers["size"] = this.onTag_SIZE;
    }
    onTag_URL(tagName, end, attr) {
        if (!end) {
            if (attr != null)
                return "<a href=\"" + attr + "\" target=\"_blank\">";
            else {
                var href = this.getTagText();
                return "<a href=\"" + href + "\" target=\"_blank\">";
            }
        }
        else
            return "</a>";
    }
    onTag_IMG(tagName, end, attr) {
        if (!end) {
            var src = this.getTagText(true);
            if (!src)
                return null;
            if (this.defaultImgWidth)
                return "<img src=\"" + src + "\" width=\"" + this.defaultImgWidth + "\" height=\"" + this.defaultImgHeight + "\"/>";
            else
                return "<img src=\"" + src + "\"/>";
        }
        else
            return null;
    }
    onTag_B(tagName, end, attr) {
        return end ? ("</span>") : ("<span style='font-weight:bold'>");
    }
    onTag_I(tagName, end, attr) {
        return end ? ("</span>") : ("<span style='font-style:italic'>");
    }
    onTag_U(tagName, end, attr) {
        return end ? ("</span>") : ("<span style='text-decoration:underline'>");
    }
    onTag_Simple(tagName, end, attr) {
        return end ? ("</" + tagName + ">") : ("<" + tagName + ">");
    }
    onTag_COLOR(tagName, end, attr) {
        if (!end) {
            this.lastColor = attr;
            return "<span style=\"color:" + attr + "\">";
        }
        else
            return "</span>";
    }
    onTag_FONT(tagName, end, attr) {
        if (!end)
            return "<span style=\"font-family:" + attr + "\">";
        else
            return "</span>";
    }
    onTag_SIZE(tagName, end, attr) {
        if (!end) {
            this.lastSize = attr;
            return "<span style=\"font-size:" + attr + "\">";
        }
        else
            return "</span>";
    }
    getTagText(remove) {
        var pos1 = this._readPos;
        var pos2;
        var result = "";
        while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
            if (this._text.charCodeAt(pos2 - 1) == 92) //\
             {
                result += this._text.substring(pos1, pos2 - 1);
                result += "[";
                pos1 = pos2 + 1;
            }
            else {
                result += this._text.substring(pos1, pos2);
                break;
            }
        }
        if (pos2 == -1)
            return null;
        if (remove)
            this._readPos = pos2;
        return result;
    }
    parse(text, remove) {
        this._text = text;
        this.lastColor = null;
        this.lastSize = null;
        var pos1 = 0, pos2, pos3;
        var end;
        var tag, attr;
        var repl;
        var func;
        var result = "";
        while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
            if (pos2 > 0 && this._text.charCodeAt(pos2 - 1) == 92) //\
             {
                result += this._text.substring(pos1, pos2 - 1);
                result += "[";
                pos1 = pos2 + 1;
                continue;
            }
            result += this._text.substring(pos1, pos2);
            pos1 = pos2;
            pos2 = this._text.indexOf("]", pos1);
            if (pos2 == -1)
                break;
            end = this._text.charAt(pos1 + 1) == '/';
            tag = this._text.substring(end ? pos1 + 2 : pos1 + 1, pos2);
            this._readPos = pos2 + 1;
            attr = null;
            repl = null;
            pos3 = tag.indexOf("=");
            if (pos3 != -1) {
                attr = tag.substring(pos3 + 1);
                tag = tag.substring(0, pos3);
            }
            tag = tag.toLowerCase();
            func = this._handlers[tag];
            if (func != null) {
                if (!remove) {
                    repl = func.call(this, tag, end, attr);
                    if (repl != null)
                        result += repl;
                }
            }
            else
                result += this._text.substring(pos1, this._readPos);
            pos1 = this._readPos;
        }
        if (pos1 < this._text.length)
            result += this._text.substr(pos1);
        this._text = null;
        return result;
    }
}
UBBParser.inst = new UBBParser();

class GRichTextField extends GTextField {
    constructor() {
        super();
        this._text = "";
    }
    createDisplayObject() {
        // this._displayObject = this._div = new Laya.HTMLDivElement();
        // this._displayObject.mouseEnabled = true;
        // this._displayObject["$owner"] = this;
        throw new Error("TODO");
    }
    get div() {
        throw new Error("TODO");
    }
    set text(value) {
        this._text = value;
        var text2 = this._text;
        if (this._templateVars)
            text2 = this.parseTemplate(text2);
        try {
            this._div.size(this._width, this._height);
            if (this._ubbEnabled)
                this._div.innerHTML = UBBParser.inst.parse(text2);
            else
                this._div.innerHTML = text2;
            if (this._widthAutoSize || this._heightAutoSize) {
                var w, h = 0;
                if (this._widthAutoSize) {
                    w = this._div.contextWidth;
                    if (w > 0)
                        w += 8;
                }
                else
                    w = this._width;
                if (this._heightAutoSize)
                    h = this._div.contextHeight;
                else
                    h = this._height;
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }
        }
        catch (err) {
            console.log("laya reports html error:" + err);
        }
    }
    get text() {
        return this._text;
    }
    get font() {
        return this._div.style.font;
    }
    set font(value) {
        if (value)
            this._div.style.font = value;
        else
            this._div.style.font = UIConfig.defaultFont;
    }
    get fontSize() {
        return this._div.style.fontSize;
    }
    set fontSize(value) {
        this._div.style.fontSize = value;
    }
    get color() {
        return this._div.style.color;
    }
    set color(value) {
        if (this._div.style.color != value) {
            this._div.style.color = value;
            this.refresh();
            this.updateGear(4);
        }
    }
    get align() {
        return this._div.style.align;
    }
    set align(value) {
        if (this._div.style.align != value) {
            this._div.style.align = value;
            this.refresh();
        }
    }
    get valign() {
        return this._div.style.valign;
    }
    set valign(value) {
        if (this._div.style.valign != value) {
            this._div.style.valign = value;
            this.refresh();
        }
    }
    get leading() {
        return this._div.style.leading;
    }
    set leading(value) {
        if (this._div.style.leading != value) {
            this._div.style.leading = value;
            this.refresh();
        }
    }
    get bold() {
        return this._div.style.bold;
    }
    set bold(value) {
        if (this._div.style.bold != value) {
            this._div.style.bold = value;
            this.refresh();
        }
    }
    get italic() {
        return this._div.style.italic;
    }
    set italic(value) {
        if (this._div.style.italic != value) {
            this._div.style.italic = value;
            this.refresh();
        }
    }
    get stroke() {
        return this._div.style.stroke;
    }
    set stroke(value) {
        if (this._div.style.stroke != value) {
            this._div.style.stroke = value;
            this.refresh();
        }
    }
    get strokeColor() {
        return this._div.style.strokeColor;
    }
    set strokeColor(value) {
        if (this._div.style.strokeColor != value) {
            this._div.style.strokeColor = value;
            this.refresh();
            this.updateGear(4);
        }
    }
    set ubbEnabled(value) {
        this._ubbEnabled = value;
    }
    get ubbEnabled() {
        return this._ubbEnabled;
    }
    get textWidth() {
        var w = this._div.contextWidth;
        if (w > 0)
            w += 8;
        return w;
    }
    refresh() {
        if (this._text.length > 0 && this._div._refresh)
            this._div._refresh();
    }
    updateAutoSize() {
        this._div.style.wordWrap = !this._widthAutoSize;
    }
    handleSizeChanged() {
        if (this._updatingSize)
            return;
        this._div.size(this._width, this._height);
        this._div.style.width = this._width;
        this._div.style.height = this._height;
    }
}

class GTextInput extends GTextField {
    constructor() {
        super();
    }
    createDisplayObject() {
        throw new Error("TODO");
        // this._displayObject = this._input = new Laya.Input();
        // this._displayObject.mouseEnabled = true;
        // this._displayObject["$owner"] = this;
    }
    get nativeInput() {
        return this._input;
    }
    set text(value) {
        this._input.text = value;
    }
    get text() {
        return this._input.text;
    }
    get font() {
        return this._input.font;
    }
    set font(value) {
        if (value)
            this._input.font = value;
        else
            this._input.font = UIConfig.defaultFont;
    }
    get fontSize() {
        return this._input.fontSize;
    }
    set fontSize(value) {
        this._input.fontSize = value;
    }
    get color() {
        return this._input.color;
    }
    set color(value) {
        this._input.color = value;
    }
    get align() {
        return this._input.align;
    }
    set align(value) {
        this._input.align = value;
    }
    get valign() {
        return this._input.valign;
    }
    set valign(value) {
        this._input.valign = value;
    }
    get leading() {
        return this._input.leading;
    }
    set leading(value) {
        this._input.leading = value;
    }
    get bold() {
        return this._input.bold;
    }
    set bold(value) {
        this._input.bold = value;
    }
    get italic() {
        return this._input.italic;
    }
    set italic(value) {
        this._input.italic = value;
    }
    get singleLine() {
        return !this._input.multiline;
    }
    set singleLine(value) {
        this._input.multiline = !value;
    }
    get stroke() {
        return this._input.stroke;
    }
    set stroke(value) {
        this._input.stroke = value;
    }
    get strokeColor() {
        return this._input.strokeColor;
    }
    set strokeColor(value) {
        this._input.strokeColor = value;
        this.updateGear(4);
    }
    get password() {
        return this._input.type == "password";
    }
    set password(value) {
        if (value)
            this._input.type = "password";
        else
            this._input.type = "text";
    }
    get keyboardType() {
        return this._input.type;
    }
    set keyboardType(value) {
        this._input.type = value;
    }
    set editable(value) {
        this._input.editable = value;
    }
    get editable() {
        return this._input.editable;
    }
    set maxLength(value) {
        this._input.maxChars = value;
    }
    get maxLength() {
        return this._input.maxChars;
    }
    set promptText(value) {
        throw "TODO";
        // this._prompt = value;
        // var str: string = UBBParser.inst.parse(value, true);
        // this._input.prompt = str;
        // if (UBBParser.inst.lastColor)
        //     this._input.promptColor = UBBParser.inst.lastColor;
    }
    get promptText() {
        return this._prompt;
    }
    set restrict(value) {
        this._input.restrict = value;
    }
    get restrict() {
        return this._input.restrict;
    }
    get textWidth() {
        return this._input.textWidth;
    }
    requestFocus() {
        this._input.focus = true;
        super.requestFocus();
    }
    handleSizeChanged() {
        this._input.size(this._width, this._height);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 4);
        var str = buffer.readS();
        if (str != null)
            this.promptText = str;
        str = buffer.readS();
        if (str != null)
            this._input.restrict = str;
        var iv = buffer.readInt();
        if (iv != 0)
            this._input.maxChars = iv;
        iv = buffer.readInt();
        if (iv != 0) {
            // TODO keyboardType
            throw new Error("TODO");
            // if (iv == 4)
            //     this.keyboardType = Laya.Input.TYPE_NUMBER;
            // else if (iv == 3)
            //     this.keyboardType = Laya.Input.TYPE_URL;
        }
        if (buffer.readBool())
            this.password = true;
    }
}

class GObjectPool {
    constructor() {
        this._count = 0;
        this._pool = {};
    }
    clear() {
        for (var i1 in this._pool) {
            var arr = this._pool[i1];
            var cnt = arr.length;
            for (var i = 0; i < cnt; i++)
                arr[i].dispose();
        }
        this._pool = {};
        this._count = 0;
    }
    get count() {
        return this._count;
    }
    getObject(url) {
        url = UIPackage.normalizeURL(url);
        if (url == null)
            return null;
        var arr = this._pool[url];
        if (arr && arr.length > 0) {
            this._count--;
            return arr.shift();
        }
        var child = UIPackage.createObjectFromURL(url);
        return child;
    }
    returnObject(obj) {
        var url = obj.resourceURL;
        if (!url)
            return;
        var arr = this._pool[url];
        if (arr == null) {
            arr = [];
            this._pool[url] = arr;
        }
        this._count++;
        arr.push(obj);
    }
}

var LoaderType;
(function (LoaderType) {
    LoaderType["IMAGE"] = "image";
    LoaderType["ATLAS"] = "atlas";
    LoaderType["AUDIO"] = "audio";
    LoaderType["VIDEO"] = "video";
    LoaderType["JSON"] = "json";
    LoaderType["SCRIPT"] = "script";
    LoaderType["GLSL"] = "glsl";
    LoaderType["BITMAPFONT"] = "bitmapFont";
    LoaderType["SPRITESHEET"] = "spritesheet";
})(LoaderType || (LoaderType = {}));
class AssetProxy {
    constructor() {
        this._resMap = new Map();
    }
    static get inst() {
        if (!AssetProxy._inst)
            AssetProxy._inst = new AssetProxy();
        return AssetProxy._inst;
    }
    getRes(key) {
        return this._resMap.get(key);
    }
    load(key, url, type, completeCallBack, _errorCallBack) {
        this._resMap.set(key, url);
        this._completeCallBack = completeCallBack;
        this._errorCallBack = _errorCallBack;
        if (GRoot.inst.scene.cache.obj.has(key)) {
            if (this._completeCallBack) {
                return this._completeCallBack();
            }
        }
        switch (type) {
            case LoaderType.IMAGE:
                GRoot.inst.scene.load.image(key, url);
                break;
            case LoaderType.ATLAS:
                GRoot.inst.scene.load.atlas(key, url);
                break;
            case LoaderType.AUDIO:
                GRoot.inst.scene.load.audio(key, url);
                break;
            case LoaderType.VIDEO:
                GRoot.inst.scene.load.video(key, url);
                break;
            case LoaderType.JSON:
                GRoot.inst.scene.load.json(key, url);
                break;
            case LoaderType.SCRIPT:
                GRoot.inst.scene.load.script(key, url);
                break;
            case LoaderType.GLSL:
                GRoot.inst.scene.load.glsl(key, url);
                break;
            case LoaderType.BITMAPFONT:
                GRoot.inst.scene.load.bitmapFont(key, url);
                break;
            case LoaderType.SPRITESHEET:
                GRoot.inst.scene.load.spritesheet(key, url);
                break;
            default:
                GRoot.inst.scene.load.image(key, url);
                break;
        }
    }
    startLoad() {
        GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_COMPLETE, this.onLoadComplete, this);
        GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, this.onLoadError, this);
        GRoot.inst.scene.load.start();
    }
    onLoadComplete() {
        if (this._completeCallBack)
            this._completeCallBack();
    }
    onLoadError() {
        if (this._errorCallBack)
            this._errorCallBack();
    }
}

class GLoader extends GObject {
    constructor() {
        super();
        this._url = "";
        this._fill = LoaderFillType.None;
        this._align = "left";
        this._valign = "top";
        this._showErrorSign = true;
    }
    createDisplayObject() {
        super.createDisplayObject();
        throw new Error("TODO");
        // this._content = new MovieClip();
        // this._displayObject.addChild(this._content);
        // this._displayObject.mouseEnabled = true;
    }
    dispose() {
        if (!this._contentItem && this._content.texture) {
            this.freeExternal(this._content.texture);
        }
        if (this._content2)
            this._content2.dispose();
        super.dispose();
    }
    get url() {
        return this._url;
    }
    set url(value) {
        if (this._url == value)
            return;
        this._url = value;
        this.loadContent();
        this.updateGear(7);
    }
    get icon() {
        return this._url;
    }
    set icon(value) {
        this.url = value;
    }
    get align() {
        return this._align;
    }
    set align(value) {
        if (this._align != value) {
            this._align = value;
            this.updateLayout();
        }
    }
    get verticalAlign() {
        return this._valign;
    }
    set verticalAlign(value) {
        if (this._valign != value) {
            this._valign = value;
            this.updateLayout();
        }
    }
    get fill() {
        return this._fill;
    }
    set fill(value) {
        if (this._fill != value) {
            this._fill = value;
            this.updateLayout();
        }
    }
    get shrinkOnly() {
        return this._shrinkOnly;
    }
    set shrinkOnly(value) {
        if (this._shrinkOnly != value) {
            this._shrinkOnly = value;
            this.updateLayout();
        }
    }
    get autoSize() {
        return this._autoSize;
    }
    set autoSize(value) {
        if (this._autoSize != value) {
            this._autoSize = value;
            this.updateLayout();
        }
    }
    get playing() {
        return this._content.playing;
    }
    set playing(value) {
        if (this._content.playing != value) {
            this._content.playing = value;
            this.updateGear(5);
        }
    }
    get frame() {
        return this._content.frame;
    }
    set frame(value) {
        if (this._content.frame != value) {
            this._content.frame = value;
            this.updateGear(5);
        }
    }
    get color() {
        return this._content.color;
    }
    set color(value) {
        if (this._content.color != value) {
            this._content.color = value;
            this.updateGear(4);
        }
    }
    get fillMethod() {
        return this._content.fillMethod;
    }
    set fillMethod(value) {
        this._content.fillMethod = value;
    }
    get fillOrigin() {
        return this._content.fillOrigin;
    }
    set fillOrigin(value) {
        this._content.fillOrigin = value;
    }
    get fillClockwise() {
        return this._content.fillClockwise;
    }
    set fillClockwise(value) {
        this._content.fillClockwise = value;
    }
    get fillAmount() {
        return this._content.fillAmount;
    }
    set fillAmount(value) {
        this._content.fillAmount = value;
    }
    get showErrorSign() {
        return this._showErrorSign;
    }
    set showErrorSign(value) {
        this._showErrorSign = value;
    }
    get content() {
        return this._content;
    }
    get component() {
        return this._content2;
    }
    loadContent() {
        this.clearContent();
        if (!this._url)
            return;
        if (ToolSet.startsWith(this._url, "ui://"))
            this.loadFromPackage(this._url);
        else
            this.loadExternal();
    }
    loadFromPackage(itemURL) {
        this._contentItem = UIPackage.getItemByURL(itemURL);
        if (this._contentItem) {
            this._contentItem = this._contentItem.getBranch();
            this.sourceWidth = this._contentItem.width;
            this.sourceHeight = this._contentItem.height;
            this._contentItem = this._contentItem.getHighResolution();
            this._contentItem.load();
            if (this._autoSize)
                this.setSize(this.sourceWidth, this.sourceHeight);
            if (this._contentItem.type == PackageItemType.Image) {
                if (!this._contentItem.texture) {
                    this.setErrorState();
                }
                else {
                    this._content.texture = this._contentItem.texture;
                    this._content.scale9Grid = this._contentItem.scale9Grid;
                    this._content.scaleByTile = this._contentItem.scaleByTile;
                    this._content.tileGridIndice = this._contentItem.tileGridIndice;
                    this.sourceWidth = this._contentItem.width;
                    this.sourceHeight = this._contentItem.height;
                    this.updateLayout();
                }
            }
            else if (this._contentItem.type == PackageItemType.MovieClip) {
                this.sourceWidth = this._contentItem.width;
                this.sourceHeight = this._contentItem.height;
                this._content.interval = this._contentItem.interval;
                this._content.swing = this._contentItem.swing;
                this._content.repeatDelay = this._contentItem.repeatDelay;
                this._content.frames = this._contentItem.frames;
                this.updateLayout();
            }
            else if (this._contentItem.type == PackageItemType.Component) {
                var obj = UIPackage.createObjectFromURL(itemURL);
                if (!obj)
                    this.setErrorState();
                else if (!(obj instanceof GComponent)) {
                    obj.dispose();
                    this.setErrorState();
                }
                else {
                    this._content2 = obj.asCom;
                    this._displayObject.add(this._content2.displayObject);
                    this.updateLayout();
                }
            }
            else
                this.setErrorState();
        }
        else
            this.setErrorState();
    }
    loadExternal() {
        AssetProxy.inst.load(this._url, this._url, LoaderType.IMAGE, this.__getResCompleted);
        AssetProxy.inst.startLoad();
        // AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
    }
    freeExternal(texture) {
    }
    onExternalLoadSuccess(texture) {
        throw new Error("TODO");
        // this._content.texture = texture;
        // this._content.scale9Grid = null;
        // this._content.scaleByTile = false;
        // this.sourceWidth = texture.width;
        // this.sourceHeight = texture.height;
        // this.updateLayout();
    }
    onExternalLoadFailed() {
        this.setErrorState();
    }
    __getResCompleted(tex) {
        if (tex != null)
            this.onExternalLoadSuccess(tex);
        else
            this.onExternalLoadFailed();
    }
    setErrorState() {
        if (!this._showErrorSign)
            return;
        if (!this._errorSign) {
            if (UIConfig.loaderErrorSign != null) {
                this._errorSign = GLoader._errorSignPool.getObject(UIConfig.loaderErrorSign);
            }
        }
        if (this._errorSign) {
            this._errorSign.setSize(this.width, this.height);
            throw new Error("TODO");
            // this._displayObject.addChild(this._errorSign.displayObject);
        }
    }
    clearErrorState() {
        if (this._errorSign) {
            throw new Error("TODO");
        }
    }
    updateLayout() {
        throw new Error("TODO");
        // if (!this._content2 && !this._content.texture && !this._content.frames) {
        //     if (this._autoSize) {
        //         this._updatingLayout = true;
        //         this.setSize(50, 30);
        //         this._updatingLayout = false;
        //     }
        //     return;
        // }
        // let cw = this.sourceWidth;
        // let ch = this.sourceHeight;
        // if (this._autoSize) {
        //     this._updatingLayout = true;
        //     if (cw == 0)
        //         cw = 50;
        //     if (ch == 0)
        //         ch = 30;
        //     this.setSize(cw, ch);
        //     this._updatingLayout = false;
        //     if (cw == this._width && ch == this._height) {
        //         if (this._content2) {
        //             this._content2.setXY(0, 0);
        //             this._content2.setScale(1, 1);
        //         }
        //         else {
        //             this._content.size(cw, ch);
        //             this._content.pos(0, 0);
        //         }
        //         return;
        //     }
        // }
        // var sx: number = 1, sy: number = 1;
        // if (this._fill != LoaderFillType.None) {
        //     sx = this.width / this.sourceWidth;
        //     sy = this.height / this.sourceHeight;
        //     if (sx != 1 || sy != 1) {
        //         if (this._fill == LoaderFillType.ScaleMatchHeight)
        //             sx = sy;
        //         else if (this._fill == LoaderFillType.ScaleMatchWidth)
        //             sy = sx;
        //         else if (this._fill == LoaderFillType.Scale) {
        //             if (sx > sy)
        //                 sx = sy;
        //             else
        //                 sy = sx;
        //         }
        //         else if (this._fill == LoaderFillType.ScaleNoBorder) {
        //             if (sx > sy)
        //                 sy = sx;
        //             else
        //                 sx = sy;
        //         }
        //         if (this._shrinkOnly) {
        //             if (sx > 1)
        //                 sx = 1;
        //             if (sy > 1)
        //                 sy = 1;
        //         }
        //         cw = this.sourceWidth * sx;
        //         ch = this.sourceHeight * sy;
        //     }
        // }
        // if (this._content2)
        //     this._content2.setScale(sx, sy);
        // else
        //     this._content.size(cw, ch);
        // var nx: number, ny: number;
        // if (this._align == "center")
        //     nx = Math.floor((this.width - cw) / 2);
        // else if (this._align == "right")
        //     nx = this.width - cw;
        // else
        //     nx = 0;
        // if (this._valign == "middle")
        //     ny = Math.floor((this.height - ch) / 2);
        // else if (this._valign == "bottom")
        //     ny = this.height - ch;
        // else
        //     ny = 0;
        // if (this._content2)
        //     this._content2.setXY(nx, ny);
        // else
        //     this._content.pos(nx, ny);
    }
    clearContent() {
        this.clearErrorState();
        if (!this._contentItem && this._content.texture) {
            this.freeExternal(this._content.texture);
        }
        this._content.texture = null;
        this._content.frames = null;
        if (this._content2) {
            this._content2.dispose();
            this._content2 = null;
        }
        this._contentItem = null;
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (!this._updatingLayout)
            this.updateLayout();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.Playing:
                return this.playing;
            case ObjectPropID.Frame:
                return this.frame;
            case ObjectPropID.TimeScale:
                return this._content.timeScale;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.Playing:
                this.playing = value;
                break;
            case ObjectPropID.Frame:
                this.frame = value;
                break;
            case ObjectPropID.TimeScale:
                this._content.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this._content.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        var iv;
        this._url = buffer.readS();
        iv = buffer.readByte();
        this._align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
        iv = buffer.readByte();
        this._valign = iv == 0 ? "top" : (iv == 1 ? "middle" : "bottom");
        this._fill = buffer.readByte();
        this._shrinkOnly = buffer.readBool();
        this._autoSize = buffer.readBool();
        this._showErrorSign = buffer.readBool();
        this._content.playing = buffer.readBool();
        this._content.frame = buffer.readInt();
        if (buffer.readBool())
            this.color = buffer.readColorS();
        this._content.fillMethod = buffer.readByte();
        if (this._content.fillMethod != 0) {
            this._content.fillOrigin = buffer.readByte();
            this._content.fillClockwise = buffer.readBool();
            this._content.fillAmount = buffer.readFloat();
        }
        if (this._url)
            this.loadContent();
    }
}
GLoader._errorSignPool = new GObjectPool();

class GButton extends GComponent {
    constructor() {
        super();
        this._soundVolumeScale = 0;
        this._downEffect = 0;
        this._mode = ButtonMode.Common;
        this._title = "";
        this._icon = "";
        this._sound = UIConfig.buttonSound;
        this._soundVolumeScale = UIConfig.buttonSoundVolumeScale;
        this._changeStateOnClick = true;
        this._downEffectValue = 0.8;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get selectedIcon() {
        return this._selectedIcon;
    }
    set selectedIcon(value) {
        this._selectedIcon = value;
        value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
        if (this._iconObject)
            this._iconObject.icon = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        if (this._titleObject)
            this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
        this.updateGear(6);
    }
    get text() {
        return this.title;
    }
    set text(value) {
        this.title = value;
    }
    get selectedTitle() {
        return this._selectedTitle;
    }
    set selectedTitle(value) {
        this._selectedTitle = value;
        if (this._titleObject)
            this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return "#000000";
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.fontSize;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf)
            tf.fontSize = value;
    }
    get sound() {
        return this._sound;
    }
    set sound(val) {
        this._sound = val;
    }
    get soundVolumeScale() {
        return this._soundVolumeScale;
    }
    set soundVolumeScale(value) {
        this._soundVolumeScale = value;
    }
    set selected(val) {
        if (this._mode == ButtonMode.Common)
            return;
        if (this._selected != val) {
            this._selected = val;
            if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
                if (this._selected)
                    this.setState(GButton.SELECTED_DISABLED);
                else
                    this.setState(GButton.DISABLED);
            }
            else {
                if (this._selected)
                    this.setState(this._over ? GButton.SELECTED_OVER : GButton.DOWN);
                else
                    this.setState(this._over ? GButton.OVER : GButton.UP);
            }
            if (this._selectedTitle && this._titleObject)
                this._titleObject.text = this._selected ? this._selectedTitle : this._title;
            if (this._selectedIcon) {
                var str = this._selected ? this._selectedIcon : this._icon;
                if (this._iconObject)
                    this._iconObject.icon = str;
            }
            if (this._relatedController
                && this._parent
                && !this._parent._buildingDisplayList) {
                if (this._selected) {
                    this._relatedController.selectedPageId = this._relatedPageId;
                    if (this._relatedController.autoRadioGroupDepth)
                        this._parent.adjustRadioGroupDepth(this, this._relatedController);
                }
                else if (this._mode == ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId)
                    this._relatedController.oppositePageId = this._relatedPageId;
            }
        }
    }
    get selected() {
        return this._selected;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        if (this._mode != value) {
            if (value == ButtonMode.Common)
                this.selected = false;
            this._mode = value;
        }
    }
    get relatedController() {
        return this._relatedController;
    }
    set relatedController(val) {
        if (val != this._relatedController) {
            this._relatedController = val;
            this._relatedPageId = null;
        }
    }
    get relatedPageId() {
        return this._relatedPageId;
    }
    set relatedPageId(val) {
        this._relatedPageId = val;
    }
    get changeStateOnClick() {
        return this._changeStateOnClick;
    }
    set changeStateOnClick(value) {
        this._changeStateOnClick = value;
    }
    get linkedPopup() {
        return this._linkedPopup;
    }
    set linkedPopup(value) {
        this._linkedPopup = value;
    }
    getTextField() {
        if (this._titleObject instanceof GTextField)
            return this._titleObject;
        else if ('getTextField' in this._titleObject)
            return this._titleObject.getTextField();
        else
            return null;
    }
    // public fireClick(downEffect?: boolean): void {
    //     if (downEffect == null) downEffect = true;
    //     if (downEffect && this._mode == ButtonMode.Common) {
    //         this.setState(GButton.OVER);
    //         this._downTimeEvent = GRoot.inst.addTimeEvent(new Phaser.Time.TimerEvent({ delay: 100, callback: this.setState, callbackScope: [GButton.DOWN] }));
    //         this._upTimeEvent = GRoot.inst.addTimeEvent(new Phaser.Time.TimerEvent({ delay: 200, callback: this.setState, callbackScope: [GButton.UP] }));
    //         // Laya.timer.once(100, this, this.setState, [GButton.DOWN], false);
    //         // Laya.timer.once(200, this, this.setState, [GButton.UP], false);
    //     }
    //     this.__click(Events.createEvent(InteractiveEvent.GAMEOBJECT_DOWN, this.displayObject));
    // }
    setState(val) {
        if (this._buttonController)
            this._buttonController.selectedPage = val;
        // if (this._downEffect == 1) {
        //     var cnt: number = this.numChildren;
        //     if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
        //         var r: number = this._downEffectValue * 255;
        //         var color: string = Laya.Utils.toHexColor((r << 16) + (r << 8) + r);
        //         for (var i: number = 0; i < cnt; i++) {
        //             var obj: GObject = this.getChildAt(i);
        //             if (!(obj instanceof GTextField))
        //                 obj.setProp(ObjectPropID.Color, color);
        //         }
        //     }
        //     else {
        //         for (i = 0; i < cnt; i++) {
        //             obj = this.getChildAt(i);
        //             if (!(obj instanceof GTextField))
        //                 obj.setProp(ObjectPropID.Color, "#FFFFFF");
        //         }
        //     }
        // }
        // else if (this._downEffect == 2) {
        //     if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
        //         if (!this._downScaled) {
        //             this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
        //             this._downScaled = true;
        //         }
        //     }
        //     else {
        //         if (this._downScaled) {
        //             this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
        //             this._downScaled = false;
        //         }
        //     }
        // }
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._relatedController == c)
            this.selected = this._relatedPageId == c.selectedPageId;
    }
    handleGrayedChanged() {
        if (this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
            if (this.grayed) {
                if (this._selected && this._buttonController.hasPage(GButton.SELECTED_DISABLED))
                    this.setState(GButton.SELECTED_DISABLED);
                else
                    this.setState(GButton.DISABLED);
            }
            else if (this._selected)
                this.setState(GButton.DOWN);
            else
                this.setState(GButton.UP);
        }
        else
            super.handleGrayedChanged();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        return tf.strokeColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                return this.titleFontSize;
            case ObjectPropID.Selected:
                return this.selected;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        tf.strokeColor = value;
                }
                break;
            case ObjectPropID.FontSize:
                this.titleFontSize = value;
                break;
            case ObjectPropID.Selected:
                this.selected = value;
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._mode = buffer.readByte();
        var str = buffer.readS();
        if (str)
            this._sound = str;
        this._soundVolumeScale = buffer.readFloat();
        this._downEffect = buffer.readByte();
        this._downEffectValue = buffer.readFloat();
        if (this._downEffect == 2)
            this.setPivot(0.5, 0.5, this.pivotAsAnchor);
        this._buttonController = this.getController("button");
        this._titleObject = this.getChild("title");
        this._iconObject = this.getChild("icon");
        if (this._titleObject)
            this._title = this._titleObject.text;
        if (this._iconObject)
            this._icon = this._iconObject.icon;
        if (this._mode == ButtonMode.Common)
            this.setState(GButton.UP);
        this.on(InteractiveEvent.GAMEOBJECT_OVER, this.__rollover);
        this.on(InteractiveEvent.GAMEOBJECT_OUT, this.__rollout);
        this.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__mousedown);
        this.on(InteractiveEvent.GAMEOBJECT_UP, this.__click);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var str;
        var iv;
        str = buffer.readS();
        if (str != null)
            this.title = str;
        str = buffer.readS();
        if (str != null)
            this.selectedTitle = str;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        str = buffer.readS();
        if (str != null)
            this.selectedIcon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColorS();
        iv = buffer.readInt();
        if (iv != 0)
            this.titleFontSize = iv;
        iv = buffer.readShort();
        if (iv >= 0)
            this._relatedController = this.parent.getControllerAt(iv);
        this._relatedPageId = buffer.readS();
        str = buffer.readS();
        if (str != null)
            this._sound = str;
        if (buffer.readBool())
            this._soundVolumeScale = buffer.readFloat();
        this.selected = buffer.readBool();
    }
    __rollover() {
        if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER))
            return;
        this._over = true;
        if (this._down)
            return;
        if (this.grayed && this._buttonController.hasPage(GButton.DISABLED))
            return;
        this.setState(this._selected ? GButton.SELECTED_OVER : GButton.OVER);
    }
    __rollout() {
        if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER))
            return;
        this._over = false;
        if (this._down)
            return;
        if (this.grayed && this._buttonController.hasPage(GButton.DISABLED))
            return;
        this.setState(this._selected ? GButton.DOWN : GButton.UP);
    }
    __mousedown(pointer) {
        this._down = true;
        // GRoot.inst.checkPopups(evt.target);
        this.scene.input.on(InteractiveEvent.POINTER_UP, this.__mouseup);
        if (this._mode == ButtonMode.Common) {
            if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED))
                this.setState(GButton.SELECTED_DISABLED);
            else
                this.setState(GButton.DOWN);
        }
        // if (this._linkedPopup) {
        //     if (this._linkedPopup instanceof Window)
        //         this._linkedPopup.toggleStatus();
        //     else
        //         this.root.togglePopup(this._linkedPopup, this);
        // }
    }
    __mouseup() {
        if (this._down) {
            this.scene.input.off(InteractiveEvent.POINTER_UP, this.__mouseup);
            this._down = false;
            if (this._displayObject == null)
                return;
            if (this._mode == ButtonMode.Common) {
                if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED))
                    this.setState(GButton.DISABLED);
                else if (this._over)
                    this.setState(GButton.OVER);
                else
                    this.setState(GButton.UP);
            }
        }
    }
    __click(evt) {
        if (this._sound) {
            var pi = UIPackage.getItemByURL(this._sound);
            if (pi)
                GRoot.inst.playOneShotSound(pi.file);
            else
                GRoot.inst.playOneShotSound(this._sound);
        }
        if (this._mode == ButtonMode.Check) {
            if (this._changeStateOnClick) {
                this.selected = !this._selected;
                // Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);
            }
        }
        else if (this._mode == ButtonMode.Radio) {
            if (this._changeStateOnClick && !this._selected) {
                this.selected = true;
                // Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);
            }
        }
        else {
            if (this._relatedController)
                this._relatedController.selectedPageId = this._relatedPageId;
        }
    }
}
// private _downTimeEvent: Phaser.Time.TimerEvent;
// private _upTimeEvent: Phaser.Time.TimerEvent;
GButton.UP = "up";
GButton.DOWN = "down";
GButton.OVER = "over";
GButton.SELECTED_OVER = "selectedOver";
GButton.DISABLED = "disabled";
GButton.SELECTED_DISABLED = "selectedDisabled";

class GLabel extends GComponent {
    constructor() {
        super();
    }
    get icon() {
        if (this._iconObject)
            return this._iconObject.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get title() {
        if (this._titleObject)
            return this._titleObject.text;
        else
            return null;
    }
    set title(value) {
        if (this._titleObject)
            this._titleObject.text = value;
        this.updateGear(6);
    }
    get text() {
        return this.title;
    }
    set text(value) {
        this.title = value;
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return "#000000";
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.fontSize;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf)
            tf.fontSize = value;
    }
    get color() {
        return this.titleColor;
    }
    set color(value) {
        this.titleColor = value;
    }
    set editable(val) {
        if (this._titleObject instanceof GTextInput)
            this._titleObject.editable = val;
    }
    get editable() {
        if (this._titleObject instanceof GTextInput)
            return this._titleObject.editable;
        else
            return false;
    }
    getTextField() {
        if (this._titleObject instanceof GTextField)
            return this._titleObject;
        else if ((this._titleObject instanceof GLabel) || (this._titleObject instanceof GButton))
            return this._titleObject.getTextField();
        else
            return null;
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        return tf.strokeColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                return this.titleFontSize;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        tf.strokeColor = value;
                }
                break;
            case ObjectPropID.FontSize:
                this.titleFontSize = value;
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        this._titleObject = this.getChild("title");
        this._iconObject = this.getChild("icon");
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var str;
        str = buffer.readS();
        if (str != null)
            this.title = str;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColorS();
        var iv = buffer.readInt();
        if (iv != 0)
            this.titleFontSize = iv;
        if (buffer.readBool()) {
            var input = this.getTextField();
            if (input instanceof GTextInput) {
                str = buffer.readS();
                if (str != null)
                    input.promptText = str;
                str = buffer.readS();
                if (str != null)
                    input.restrict = str;
                iv = buffer.readInt();
                if (iv != 0)
                    input.maxLength = iv;
                iv = buffer.readInt();
                if (buffer.readBool())
                    input.password = true;
            }
            else
                buffer.skip(13);
        }
    }
}

class GComboBox extends GComponent {
    constructor() {
        super();
        this._visibleItemCount = UIConfig.defaultComboBoxVisibleItemCount;
        this._itemsUpdated = true;
        this._selectedIndex = -1;
        this._popupDirection = 0;
        this._items = [];
        this._values = [];
    }
    get text() {
        if (this._titleObject)
            return this._titleObject.text;
        else
            return null;
    }
    set text(value) {
        if (this._titleObject)
            this._titleObject.text = value;
        this.updateGear(6);
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return "#000000";
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.fontSize;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf)
            tf.fontSize = value;
    }
    get icon() {
        if (this._iconObject)
            return this._iconObject.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get visibleItemCount() {
        return this._visibleItemCount;
    }
    set visibleItemCount(value) {
        this._visibleItemCount = value;
    }
    get popupDirection() {
        return this._popupDirection;
    }
    set popupDirection(value) {
        this._popupDirection = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (!value)
            this._items.length = 0;
        else
            this._items = value.concat();
        if (this._items.length > 0) {
            if (this._selectedIndex >= this._items.length)
                this._selectedIndex = this._items.length - 1;
            else if (this._selectedIndex == -1)
                this._selectedIndex = 0;
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
            this._selectedIndex = -1;
        }
        this._itemsUpdated = true;
    }
    get icons() {
        return this._icons;
    }
    set icons(value) {
        this._icons = value;
        if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length)
            this.icon = this._icons[this._selectedIndex];
    }
    get values() {
        return this._values;
    }
    set values(value) {
        if (!value)
            this._values.length = 0;
        else
            this._values = value.concat();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(val) {
        if (this._selectedIndex == val)
            return;
        this._selectedIndex = val;
        if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
        }
        this.updateSelectionController();
    }
    get value() {
        return this._values[this._selectedIndex];
    }
    set value(val) {
        var index = this._values.indexOf(val);
        if (index == -1 && val == null)
            index = this._values.indexOf("");
        this.selectedIndex = index;
    }
    getTextField() {
        if (this._titleObject instanceof GTextField)
            return this._titleObject;
        else if ((this._titleObject instanceof GLabel) || (this._titleObject instanceof GButton))
            return this._titleObject.getTextField();
        else
            return null;
    }
    setState(val) {
        if (this._buttonController)
            this._buttonController.selectedPage = val;
    }
    get selectionController() {
        return this._selectionController;
    }
    set selectionController(value) {
        this._selectionController = value;
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._selectionController == c)
            this.selectedIndex = c.selectedIndex;
    }
    updateSelectionController() {
        if (this._selectionController && !this._selectionController.changing
            && this._selectedIndex < this._selectionController.pageCount) {
            var c = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = this._selectedIndex;
            this._selectionController = c;
        }
    }
    dispose() {
        if (this.dropdown) {
            this.dropdown.dispose();
            this.dropdown = null;
        }
        this._selectionController = null;
        super.dispose();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        return tf.strokeColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                {
                    tf = this.getTextField();
                    if (tf)
                        return tf.fontSize;
                    else
                        return 0;
                }
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        tf.strokeColor = value;
                }
                break;
            case ObjectPropID.FontSize:
                {
                    tf = this.getTextField();
                    if (tf)
                        tf.fontSize = value;
                }
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        throw new Error("TODO");
        // var str: string;
        // this._buttonController = this.getController("button");
        // this._titleObject = this.getChild("title");
        // this._iconObject = this.getChild("icon");
        // str = buffer.readS();
        // if (str) {
        //     this.dropdown = <GComponent>(UIPackage.createObjectFromURL(str));
        //     if (!this.dropdown) {
        //         Laya.Log.print("下拉框必须为元件");
        //         return;
        //     }
        //     this.dropdown.name = "this._dropdownObject";
        //     this._list = <GList>this.dropdown.getChild("list");
        //     if (!this._list) {
        //         Laya.Log.print(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
        //         return;
        //     }
        //     this._list.on(Events.CLICK_ITEM, this, this.__clickItem);
        //     this._list.addRelation(this.dropdown, RelationType.Width);
        //     this._list.removeRelation(this.dropdown, RelationType.Height);
        //     this.dropdown.addRelation(this._list, RelationType.Height);
        //     this.dropdown.removeRelation(this._list, RelationType.Width);
        //     this.dropdown.displayObject.on(Laya.Event.UNDISPLAY, this, this.__popupWinClosed);
        // }
        // this.on(Laya.Event.ROLL_OVER, this, this.__rollover);
        // this.on(Laya.Event.ROLL_OUT, this, this.__rollout);
        // this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var i;
        var iv;
        var nextPos;
        var str;
        var itemCount = buffer.readShort();
        for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            this._items[i] = buffer.readS();
            this._values[i] = buffer.readS();
            str = buffer.readS();
            if (str != null) {
                if (!this._icons)
                    this._icons = [];
                this._icons[i] = str;
            }
            buffer.position = nextPos;
        }
        str = buffer.readS();
        if (str != null) {
            this.text = str;
            this._selectedIndex = this._items.indexOf(str);
        }
        else if (this._items.length > 0) {
            this._selectedIndex = 0;
            this.text = this._items[0];
        }
        else
            this._selectedIndex = -1;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColorS();
        iv = buffer.readInt();
        if (iv > 0)
            this._visibleItemCount = iv;
        this._popupDirection = buffer.readByte();
        iv = buffer.readShort();
        if (iv >= 0)
            this._selectionController = this.parent.getControllerAt(iv);
    }
    showDropdown() {
        throw new Error("TODO");
        // if (this._itemsUpdated) {
        //     this._itemsUpdated = false;
        //     this._list.removeChildrenToPool();
        //     var cnt: number = this._items.length;
        //     for (var i: number = 0; i < cnt; i++) {
        //         var item: GObject = this._list.addItemFromPool();
        //         item.name = i < this._values.length ? this._values[i] : "";
        //         item.text = this._items[i];
        //         item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
        //     }
        //     this._list.resizeToFit(this._visibleItemCount);
        // }
        // this._list.selectedIndex = -1;
        // this.dropdown.width = this.width;
        // this._list.ensureBoundsCorrect();
        // var downward: any = null;
        // if (this._popupDirection == PopupDirection.Down)
        //     downward = true;
        // else if (this._popupDirection == PopupDirection.Up)
        //     downward = false;
        // this.root.togglePopup(this.dropdown, this, downward);
        // if (this.dropdown.parent)
        //     this.setState(GButton.DOWN);
    }
    __popupWinClosed() {
        if (this._over)
            this.setState(GButton.OVER);
        else
            this.setState(GButton.UP);
    }
    __clickItem(itemObject, evt) {
        // Laya.timer.callLater(this, this.__clickItem2, [this._list.getChildIndex(itemObject), evt])
    }
    __clickItem2(index, evt) {
        throw new Error("TODO");
        // if (this.dropdown.parent instanceof GRoot)
        //     this.dropdown.parent.hidePopup();
        // this._selectedIndex = -1;
        // this.selectedIndex = index;
        // Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);
    }
    __rollover() {
        this._over = true;
        if (this._down || this.dropdown && this.dropdown.parent)
            return;
        this.setState(GButton.OVER);
    }
    __rollout() {
        this._over = false;
        if (this._down || this.dropdown && this.dropdown.parent)
            return;
        this.setState(GButton.UP);
    }
    __mousedown(evt) {
        throw new Error("TODO");
        // if (evt.target instanceof Laya.Input)
        //     return;
        // this._down = true;
        // GRoot.inst.checkPopups(evt.target);
        // Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup);
        // if (this.dropdown)
        //     this.showDropdown();
    }
    __mouseup() {
        throw new Error("TODO");
        // if (this._down) {
        //     this._down = false;
        //     Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup);
        //     if (this.dropdown && !this.dropdown.parent) {
        //         if (this._over)
        //             this.setState(GButton.OVER);
        //         else
        //             this.setState(GButton.UP);
        //     }
        // }
    }
}

class GSlider extends GComponent {
    constructor() {
        super();
        this._min = 0;
        this._max = 0;
        this._value = 0;
        this._barMaxWidth = 0;
        this._barMaxHeight = 0;
        this._barMaxWidthDelta = 0;
        this._barMaxHeightDelta = 0;
        this._clickPercent = 0;
        this._barStartX = 0;
        this._barStartY = 0;
        this.changeOnClick = true;
        /**是否可拖动开关**/
        this.canDrag = true;
        this._titleType = ProgressTitleType.Percent;
        this._value = 50;
        this._max = 100;
        this._clickPos = new Phaser.Geom.Point();
    }
    get titleType() {
        return this._titleType;
    }
    set titleType(value) {
        this._titleType = value;
    }
    get wholeNumbers() {
        return this._wholeNumbers;
    }
    set wholeNumbers(value) {
        if (this._wholeNumbers != value) {
            this._wholeNumbers = value;
            this.update();
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (this._min != value) {
            this._min = value;
            this.update();
        }
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (this._max != value) {
            this._max = value;
            this.update();
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            this._value = value;
            this.update();
        }
    }
    update() {
        this.updateWithPercent((this._value - this._min) / (this._max - this._min));
    }
    updateWithPercent(percent, evt) {
        percent = ToolSet.clamp01(percent);
        if (evt) {
            throw new Error("TODO");
        }
        if (this._titleObject) {
            switch (this._titleType) {
                case ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(percent * 100) + "%";
                    break;
                case ProgressTitleType.ValueAndMax:
                    this._titleObject.text = this._value + "/" + this._max;
                    break;
                case ProgressTitleType.Value:
                    this._titleObject.text = "" + this._value;
                    break;
                case ProgressTitleType.Max:
                    this._titleObject.text = "" + this._max;
                    break;
            }
        }
        var fullWidth = this.width - this._barMaxWidthDelta;
        var fullHeight = this.height - this._barMaxHeightDelta;
        if (!this._reverse) {
            if (this._barObjectH)
                this._barObjectH.width = Math.round(fullWidth * percent);
            if (this._barObjectV)
                this._barObjectV.height = Math.round(fullHeight * percent);
        }
        else {
            if (this._barObjectH) {
                this._barObjectH.width = Math.round(fullWidth * percent);
                this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
            }
            if (this._barObjectV) {
                this._barObjectV.height = Math.round(fullHeight * percent);
                this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
            }
        }
    }
    constructExtension(buffer) {
        throw new Error("TODO");
        // this.displayObject.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._barObjectH)
            this._barMaxWidth = this.width - this._barMaxWidthDelta;
        if (this._barObjectV)
            this._barMaxHeight = this.height - this._barMaxHeightDelta;
        if (!this._underConstruct)
            this.update();
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6)) {
            this.update();
            return;
        }
        if (buffer.readByte() != this.packageItem.objectType) {
            this.update();
            return;
        }
        this._value = buffer.readInt();
        this._max = buffer.readInt();
        if (buffer.version >= 2)
            this._min = buffer.readInt();
        this.update();
    }
    __gripMouseDown(evt) {
        // this.canDrag = true;
        // evt.stopPropagation();
        // this._clickPos = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._clickPercent = ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
        // Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
    }
    __gripMouseMove(evt) {
        throw new Error("TODO");
        // if (!this.canDrag) {
        //     return;
        // }
        // var pt: Laya.Point = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
        // var deltaX: number = pt.x - this._clickPos.x;
        // var deltaY: number = pt.y - this._clickPos.y;
        // if (this._reverse) {
        //     deltaX = -deltaX;
        //     deltaY = -deltaY;
        // }
        // var percent: number;
        // if (this._barObjectH)
        //     percent = this._clickPercent + deltaX / this._barMaxWidth;
        // else
        //     percent = this._clickPercent + deltaY / this._barMaxHeight;
        // this.updateWithPercent(percent, evt);
    }
    __gripMouseUp(evt) {
        throw new Error("TODO");
        // Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
        // Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
    }
    __barMouseDown(evt) {
        throw new Error("TODO");
        // if (!this.changeOnClick)
        //     return;
        // var pt: Laya.Point = this._gripObject.globalToLocal(evt.stageX, evt.stageY, s_vec2);
        // var percent: number = ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
        // var delta: number;
        // if (this._barObjectH)
        //     delta = pt.x / this._barMaxWidth;
        // if (this._barObjectV)
        //     delta = pt.y / this._barMaxHeight;
        // if (this._reverse)
        //     percent -= delta;
        // else
        //     percent += delta;
        // this.updateWithPercent(percent, evt);
    }
}
new Phaser.Geom.Point();

class GProgressBar extends GComponent {
    constructor() {
        super();
        this._min = 0;
        this._max = 0;
        this._value = 0;
        this._barMaxWidth = 0;
        this._barMaxHeight = 0;
        this._barMaxWidthDelta = 0;
        this._barMaxHeightDelta = 0;
        this._barStartX = 0;
        this._barStartY = 0;
        this._titleType = ProgressTitleType.Percent;
        this._value = 50;
        this._max = 100;
    }
    get titleType() {
        return this._titleType;
    }
    set titleType(value) {
        if (this._titleType != value) {
            this._titleType = value;
            this.update(value);
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (this._min != value) {
            this._min = value;
            this.update(this._value);
        }
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (this._max != value) {
            this._max = value;
            this.update(this._value);
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            GTween.kill(this, false, this.update);
            this._value = value;
            this.update(value);
        }
    }
    tweenValue(value, duration) {
        var oldValule;
        var tweener = GTween.getTween(this, this.update);
        if (tweener) {
            oldValule = tweener.value.x;
            tweener.kill();
        }
        else
            oldValule = this._value;
        this._value = value;
        return GTween.to(oldValule, this._value, duration).setTarget(this, this.update).setEase(EaseType.Linear);
    }
    update(newValue) {
        var percent = ToolSet.clamp01((newValue - this._min) / (this._max - this._min));
        if (this._titleObject) {
            switch (this._titleType) {
                case ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(percent * 100) + "%";
                    break;
                case ProgressTitleType.ValueAndMax:
                    this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                    break;
                case ProgressTitleType.Value:
                    this._titleObject.text = "" + Math.floor(newValue);
                    break;
                case ProgressTitleType.Max:
                    this._titleObject.text = "" + Math.floor(this._max);
                    break;
            }
        }
        var fullWidth = this.width - this._barMaxWidthDelta;
        var fullHeight = this.height - this._barMaxHeightDelta;
        if (!this._reverse) {
            if (this._barObjectH) {
                if (!this.setFillAmount(this._barObjectH, percent))
                    this._barObjectH.width = Math.round(fullWidth * percent);
            }
            if (this._barObjectV) {
                if (!this.setFillAmount(this._barObjectV, percent))
                    this._barObjectV.height = Math.round(fullHeight * percent);
            }
        }
        else {
            if (this._barObjectH) {
                if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                    this._barObjectH.width = Math.round(fullWidth * percent);
                    this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                }
            }
            if (this._barObjectV) {
                if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                    this._barObjectV.height = Math.round(fullHeight * percent);
                    this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                }
            }
        }
        if (this._aniObject)
            this._aniObject.setProp(ObjectPropID.Frame, Math.floor(percent * 100));
    }
    setFillAmount(bar, percent) {
        if (((bar instanceof GImage) || (bar instanceof GLoader)) && bar.fillMethod != FillMethod.None) {
            bar.fillAmount = percent;
            return true;
        }
        else
            return false;
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._titleType = buffer.readByte();
        this._reverse = buffer.readBool();
        this._titleObject = this.getChild("title");
        this._barObjectH = this.getChild("bar");
        this._barObjectV = this.getChild("bar_v");
        this._aniObject = this.getChild("ani");
        if (this._barObjectH) {
            this._barMaxWidth = this._barObjectH.width;
            this._barMaxWidthDelta = this.width - this._barMaxWidth;
            this._barStartX = this._barObjectH.x;
        }
        if (this._barObjectV) {
            this._barMaxHeight = this._barObjectV.height;
            this._barMaxHeightDelta = this.height - this._barMaxHeight;
            this._barStartY = this._barObjectV.y;
        }
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._barObjectH)
            this._barMaxWidth = this.width - this._barMaxWidthDelta;
        if (this._barObjectV)
            this._barMaxHeight = this.height - this._barMaxHeightDelta;
        if (!this._underConstruct)
            this.update(this._value);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6)) {
            this.update(this._value);
            return;
        }
        if (buffer.readByte() != this.packageItem.objectType) {
            this.update(this._value);
            return;
        }
        this._value = buffer.readInt();
        this._max = buffer.readInt();
        if (buffer.version >= 2)
            this._min = buffer.readInt();
        this.update(this._value);
    }
}

class GScrollBar extends GComponent {
    constructor() {
        super();
        this._dragOffset = new Phaser.Geom.Point();
        this._scrollPerc = 0;
    }
    setScrollPane(target, vertical) {
        this._target = target;
        this._vertical = vertical;
    }
    setDisplayPerc(value) {
        if (this._vertical) {
            if (!this._fixedGripSize)
                this._grip.height = Math.floor(value * this._bar.height);
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
        }
        else {
            if (!this._fixedGripSize)
                this._grip.width = Math.floor(value * this._bar.width);
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }
        this._grip.visible = value != 0 && value != 1;
    }
    setScrollPerc(val) {
        this._scrollPerc = val;
        if (this._vertical)
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
        else
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
    }
    get minSize() {
        if (this._vertical)
            return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0);
        else
            return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
    }
    get gripDragging() {
        return this._gripDragging;
    }
    constructExtension(buffer) {
        throw new Error("TODO");
        // buffer.seek(0, 6);
        // this._fixedGripSize = buffer.readBool();
        // this._grip = this.getChild("grip");
        // if (!this._grip) {
        //     Laya.Log.print("需要定义grip");
        //     return;
        // }
        // this._bar = this.getChild("bar");
        // if (!this._bar) {
        //     Laya.Log.print("需要定义bar");
        //     return;
        // }
        // this._arrowButton1 = this.getChild("arrow1");
        // this._arrowButton2 = this.getChild("arrow2");
        // this._grip.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown);
        // if (this._arrowButton1)
        //     this._arrowButton1.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton1Click);
        // if (this._arrowButton2)
        //     this._arrowButton2.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton2Click);
        // this.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
    }
    __gripMouseDown(evt) {
        throw new Error("TODO");
        // evt.stopPropagation();
        // this._gripDragging = true;
        // this._target.updateScrollBarVisible();
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
        // Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
        // this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, this._dragOffset);
        // this._dragOffset.x -= this._grip.x;
        // this._dragOffset.y -= this._grip.y;
    }
    __gripMouseMove() {
        throw new Error("TODO");
        // if (!this.onStage)
        //     return;
        // var pt: Laya.Point = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
        // if (this._vertical) {
        //     var curY: number = pt.y - this._dragOffset.y;
        //     this._target.setPercY((curY - this._bar.y) / (this._bar.height - this._grip.height), false);
        // }
        // else {
        //     var curX: number = pt.x - this._dragOffset.x;
        //     this._target.setPercX((curX - this._bar.x) / (this._bar.width - this._grip.width), false);
        // }
    }
    __gripMouseUp(evt) {
        throw new Error("TODO");
        // if (!this.onStage)
        //     return;
        // Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
        // Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
        // this._gripDragging = false;
        // this._target.updateScrollBarVisible();
    }
    __arrowButton1Click(evt) {
        throw new Error("TODO");
        // evt.stopPropagation();
        // if (this._vertical)
        //     this._target.scrollUp();
        // else
        //     this._target.scrollLeft();
    }
    __arrowButton2Click(evt) {
        throw new Error("TODO");
        // evt.stopPropagation();
        // if (this._vertical)
        //     this._target.scrollDown();
        // else
        //     this._target.scrollRight();
    }
    __barMouseDown(evt) {
        throw new Error("TODO");
        // var pt: Laya.Point = this._grip.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
        // if (this._vertical) {
        //     if (pt.y < 0)
        //         this._target.scrollUp(4);
        //     else
        //         this._target.scrollDown(4);
        // }
        // else {
        //     if (pt.x < 0)
        //         this._target.scrollLeft(4);
        //     else
        //         this._target.scrollRight(4);
        // }
    }
}
new Phaser.Geom.Point();

class GList extends GComponent {
    constructor() {
        super();
        this._lineCount = 0;
        this._columnCount = 0;
        this._lineGap = 0;
        this._columnGap = 0;
        this._lastSelectedIndex = 0;
        this._numItems = 0;
        this._firstIndex = 0; //the top left index
        this._curLineItemCount = 0; //item count in one line
        this._virtualListChanged = 0; //1-content changed, 2-size changed
        this.itemInfoVer = 0; //用来标志item是否在本次处理中已经被重用了
        throw new Error("TODO");
        // this._trackBounds = true;
        // this._pool = new GObjectPool();
        // this._layout = ListLayoutType.SingleColumn;
        // this._autoResizeItem = true;
        // this._lastSelectedIndex = -1;
        // this._selectionMode = ListSelectionMode.Single;
        // this.opaque = true;
        // this.scrollItemToViewOnClick = true;
        // this._align = "left";
        // this._verticalAlign = "top";
        // this._container = new Laya.Sprite();
        // this._displayObject.addChild(this._container);
    }
    dispose() {
        this._pool.clear();
        super.dispose();
    }
    get layout() {
        return this._layout;
    }
    set layout(value) {
        if (this._layout != value) {
            this._layout = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get lineCount() {
        return this._lineCount;
    }
    set lineCount(value) {
        if (this._lineCount != value) {
            this._lineCount = value;
            if (this._layout == ListLayoutType.FlowVertical || this._layout == ListLayoutType.Pagination) {
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
    }
    get columnCount() {
        return this._columnCount;
    }
    set columnCount(value) {
        if (this._columnCount != value) {
            this._columnCount = value;
            if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
    }
    get lineGap() {
        return this._lineGap;
    }
    set lineGap(value) {
        if (this._lineGap != value) {
            this._lineGap = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get columnGap() {
        return this._columnGap;
    }
    set columnGap(value) {
        if (this._columnGap != value) {
            this._columnGap = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get align() {
        return this._align;
    }
    set align(value) {
        if (this._align != value) {
            this._align = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get verticalAlign() {
        return this._verticalAlign;
    }
    set verticalAlign(value) {
        if (this._verticalAlign != value) {
            this._verticalAlign = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get virtualItemSize() {
        return this._itemSize;
    }
    set virtualItemSize(value) {
        if (this._virtual) {
            if (this._itemSize == null)
                this._itemSize = new Phaser.Geom.Point();
            this._itemSize.setTo(value.x, value.y);
            this.setVirtualListChangedFlag(true);
        }
    }
    get defaultItem() {
        return this._defaultItem;
    }
    set defaultItem(val) {
        this._defaultItem = UIPackage.normalizeURL(val);
    }
    get autoResizeItem() {
        return this._autoResizeItem;
    }
    set autoResizeItem(value) {
        if (this._autoResizeItem != value) {
            this._autoResizeItem = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get selectionMode() {
        return this._selectionMode;
    }
    set selectionMode(value) {
        this._selectionMode = value;
    }
    get selectionController() {
        return this._selectionController;
    }
    set selectionController(value) {
        this._selectionController = value;
    }
    get itemPool() {
        return this._pool;
    }
    getFromPool(url) {
        if (!url)
            url = this._defaultItem;
        var obj = this._pool.getObject(url);
        if (obj)
            obj.visible = true;
        return obj;
    }
    returnToPool(obj) {
        throw new Error("TODO");
        // obj.displayObject.cacheAs = "none";
        // this._pool.returnObject(obj);
    }
    addChildAt(child, index) {
        super.addChildAt(child, index);
        throw new Error("TODO");
        // if (child instanceof GButton) {
        //     child.selected = false;
        //     child.changeStateOnClick = false;
        // }
        // child.on(Laya.Event.CLICK, this, this.__clickItem);
        // return child;
    }
    addItem(url) {
        // if (!url)
        //     url = this._defaultItem;
        // return this.addChild(UIPackage.createObjectFromURL(url));
        throw new Error("TODO");
    }
    addItemFromPool(url) {
        throw new Error("TODO");
        // return this.addChild(this.getFromPool(url));
    }
    removeChildAt(index, dispose) {
        throw new Error("TODO");
        // var child: GObject = super.removeChildAt(index);
        // if (dispose)
        //     child.dispose();
        // else
        //     child.off(Laya.Event.CLICK, this, this.__clickItem);
        // return child;
    }
    removeChildToPoolAt(index) {
        var child = super.removeChildAt(index);
        this.returnToPool(child);
    }
    removeChildToPool(child) {
        super.removeChild(child);
        this.returnToPool(child);
    }
    removeChildrenToPool(beginIndex, endIndex) {
        if (beginIndex == undefined)
            beginIndex = 0;
        if (endIndex == undefined)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this._children.length)
            endIndex = this._children.length - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildToPoolAt(beginIndex);
    }
    get selectedIndex() {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && ii.obj.selected
                    || ii.obj == null && ii.selected) {
                    if (this._loop)
                        return i % this._numItems;
                    else
                        return i;
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj.selected)
                    return i;
            }
        }
        return -1;
    }
    set selectedIndex(value) {
        if (value >= 0 && value < this.numItems) {
            if (this._selectionMode != ListSelectionMode.Single)
                this.clearSelection();
            this.addSelection(value);
        }
        else
            this.clearSelection();
    }
    getSelection(result) {
        if (!result)
            result = new Array();
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && ii.obj.selected
                    || ii.obj == null && ii.selected) {
                    var j = i;
                    if (this._loop) {
                        j = i % this._numItems;
                        if (result.indexOf(j) != -1)
                            continue;
                    }
                    result.push(j);
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj.selected)
                    result.push(i);
            }
        }
        return result;
    }
    addSelection(index, scrollItToView) {
        if (this._selectionMode == ListSelectionMode.None)
            return;
        this.checkVirtualList();
        if (this._selectionMode == ListSelectionMode.Single)
            this.clearSelection();
        if (scrollItToView)
            this.scrollToView(index);
        this._lastSelectedIndex = index;
        var obj;
        if (this._virtual) {
            var ii = this._virtualItems[index];
            if (ii.obj)
                obj = ii.obj;
            ii.selected = true;
        }
        else
            obj = this.getChildAt(index);
        if ((obj instanceof GButton) && !obj.selected) {
            obj.selected = true;
            this.updateSelectionController(index);
        }
    }
    removeSelection(index) {
        if (this._selectionMode == ListSelectionMode.None)
            return;
        var obj;
        if (this._virtual) {
            var ii = this._virtualItems[index];
            if (ii.obj)
                obj = ii.obj;
            ii.selected = false;
        }
        else
            obj = this.getChildAt(index);
        if (obj instanceof GButton)
            obj.selected = false;
    }
    clearSelection() {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj instanceof GButton)
                    ii.obj.selected = false;
                ii.selected = false;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if (obj instanceof GButton)
                    obj.selected = false;
            }
        }
    }
    clearSelectionExcept(g) {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj != g) {
                    if (ii.obj instanceof GButton)
                        ii.obj.selected = false;
                    ii.selected = false;
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj != g)
                    obj.selected = false;
            }
        }
    }
    selectAll() {
        this.checkVirtualList();
        var last = -1;
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && !ii.obj.selected) {
                    ii.obj.selected = true;
                    last = i;
                }
                ii.selected = true;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && !obj.selected) {
                    obj.selected = true;
                    last = i;
                }
            }
        }
        if (last != -1)
            this.updateSelectionController(last);
    }
    selectNone() {
        this.clearSelection();
    }
    selectReverse() {
        this.checkVirtualList();
        var last = -1;
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj instanceof GButton) {
                    ii.obj.selected = !ii.obj.selected;
                    if (ii.obj.selected)
                        last = i;
                }
                ii.selected = !ii.selected;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if (obj instanceof GButton) {
                    obj.selected = !obj.selected;
                    if (obj.selected)
                        last = i;
                }
            }
        }
        if (last != -1)
            this.updateSelectionController(last);
    }
    handleArrowKey(dir) {
        var index = this.selectedIndex;
        if (index == -1)
            return;
        switch (dir) {
            case 1: //up
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowVertical) {
                    index--;
                    if (index >= 0) {
                        this.clearSelection();
                        this.addSelection(index, true);
                    }
                }
                else if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    var current = this._children[index];
                    var k = 0;
                    for (var i = index - 1; i >= 0; i--) {
                        var obj = this._children[i];
                        if (obj.y != current.y) {
                            current = obj;
                            break;
                        }
                        k++;
                    }
                    for (; i >= 0; i--) {
                        obj = this._children[i];
                        if (obj.y != current.y) {
                            this.clearSelection();
                            this.addSelection(i + k + 1, true);
                            break;
                        }
                    }
                }
                break;
            case 3: //right
                if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    index++;
                    if (index < this.numItems) {
                        this.clearSelection();
                        this.addSelection(index, true);
                    }
                }
                else if (this._layout == ListLayoutType.FlowVertical) {
                    current = this._children[index];
                    k = 0;
                    var cnt = this._children.length;
                    for (i = index + 1; i < cnt; i++) {
                        obj = this._children[i];
                        if (obj.x != current.x) {
                            current = obj;
                            break;
                        }
                        k++;
                    }
                    for (; i < cnt; i++) {
                        obj = this._children[i];
                        if (obj.x != current.x) {
                            this.clearSelection();
                            this.addSelection(i - k - 1, true);
                            break;
                        }
                    }
                }
                break;
            case 5: //down
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowVertical) {
                    index++;
                    if (index < this.numItems) {
                        this.clearSelection();
                        this.addSelection(index, true);
                    }
                }
                else if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    current = this._children[index];
                    k = 0;
                    cnt = this._children.length;
                    for (i = index + 1; i < cnt; i++) {
                        obj = this._children[i];
                        if (obj.y != current.y) {
                            current = obj;
                            break;
                        }
                        k++;
                    }
                    for (; i < cnt; i++) {
                        obj = this._children[i];
                        if (obj.y != current.y) {
                            this.clearSelection();
                            this.addSelection(i - k - 1, true);
                            break;
                        }
                    }
                }
                break;
            case 7: //left
                if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    index--;
                    if (index >= 0) {
                        this.clearSelection();
                        this.addSelection(index, true);
                    }
                }
                else if (this._layout == ListLayoutType.FlowVertical) {
                    current = this._children[index];
                    k = 0;
                    for (i = index - 1; i >= 0; i--) {
                        obj = this._children[i];
                        if (obj.x != current.x) {
                            current = obj;
                            break;
                        }
                        k++;
                    }
                    for (; i >= 0; i--) {
                        obj = this._children[i];
                        if (obj.x != current.x) {
                            this.clearSelection();
                            this.addSelection(i + k + 1, true);
                            break;
                        }
                    }
                }
                break;
        }
    }
    __clickItem(evt) {
        throw new Error("TODO");
        // if (this._scrollPane && this._scrollPane.isDragged)
        //     return;
        // var item: GObject = GObject.cast(evt.currentTarget);
        // this.setSelectionOnEvent(item, evt);
        // if (this._scrollPane && this.scrollItemToViewOnClick)
        //     this._scrollPane.scrollToView(item, true);
        // this.dispatchItemEvent(item, Events.createEvent(Events.CLICK_ITEM, this.displayObject, evt));
    }
    dispatchItemEvent(item, evt) {
        throw new Error("TODO");
        // this.displayObject.event(Events.CLICK_ITEM, [item, evt]);
    }
    setSelectionOnEvent(item, evt) {
        throw new Error("TODO");
        // if (!(item instanceof GButton) || this._selectionMode == ListSelectionMode.None)
        //     return;
        // var dontChangeLastIndex: boolean = false;
        // var index: number = this.childIndexToItemIndex(this.getChildIndex(item));
        // if (this._selectionMode == ListSelectionMode.Single) {
        //     if (!item.selected) {
        //         this.clearSelectionExcept(item);
        //         item.selected = true;
        //     }
        // }
        // else {
        //     if (evt.shiftKey) {
        //         if (!item.selected) {
        //             if (this._lastSelectedIndex != -1) {
        //                 var min: number = Math.min(this._lastSelectedIndex, index);
        //                 var max: number = Math.max(this._lastSelectedIndex, index);
        //                 max = Math.min(max, this.numItems - 1);
        //                 var i: number;
        //                 if (this._virtual) {
        //                     for (i = min; i <= max; i++) {
        //                         var ii: ItemInfo = this._virtualItems[i];
        //                         if (ii.obj instanceof GButton)
        //                             ii.obj.selected = true;
        //                         ii.selected = true;
        //                     }
        //                 }
        //                 else {
        //                     for (i = min; i <= max; i++) {
        //                         var obj: GObject = this.getChildAt(i);
        //                         if (obj instanceof GButton)
        //                             obj.selected = true;
        //                     }
        //                 }
        //                 dontChangeLastIndex = true;
        //             }
        //             else {
        //                 item.selected = true;
        //             }
        //         }
        //     }
        //     else if (evt.ctrlKey || this._selectionMode == ListSelectionMode.Multiple_SingleClick) {
        //         item.selected = !item.selected;
        //     }
        //     else {
        //         if (!item.selected) {
        //             this.clearSelectionExcept(item);
        //             item.selected = true;
        //         }
        //         else
        //             this.clearSelectionExcept(item);
        //     }
        // }
        // if (!dontChangeLastIndex)
        //     this._lastSelectedIndex = index;
        // if (item.selected)
        //     this.updateSelectionController(index);
    }
    resizeToFit(itemCount, minSize) {
        if (itemCount == null)
            itemCount = 100000;
        minSize = minSize || 0;
        this.ensureBoundsCorrect();
        var curCount = this.numItems;
        if (itemCount > curCount)
            itemCount = curCount;
        if (this._virtual) {
            var lineCount = Math.ceil(itemCount / this._curLineItemCount);
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap;
            else
                this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
        }
        else if (itemCount == 0) {
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                this.viewHeight = minSize;
            else
                this.viewWidth = minSize;
        }
        else {
            var i = itemCount - 1;
            var obj = null;
            while (i >= 0) {
                obj = this.getChildAt(i);
                if (!this.foldInvisibleItems || obj.visible)
                    break;
                i--;
            }
            if (i < 0) {
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                    this.viewHeight = minSize;
                else
                    this.viewWidth = minSize;
            }
            else {
                var size = 0;
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    size = obj.y + obj.height;
                    if (size < minSize)
                        size = minSize;
                    this.viewHeight = size;
                }
                else {
                    size = obj.x + obj.width;
                    if (size < minSize)
                        size = minSize;
                    this.viewWidth = size;
                }
            }
        }
    }
    getMaxItemWidth() {
        var cnt = this._children.length;
        var max = 0;
        for (var i = 0; i < cnt; i++) {
            var child = this.getChildAt(i);
            if (child.width > max)
                max = child.width;
        }
        return max;
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        this.setBoundsChangedFlag();
        if (this._virtual)
            this.setVirtualListChangedFlag(true);
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._selectionController == c)
            this.selectedIndex = c.selectedIndex;
    }
    updateSelectionController(index) {
        if (this._selectionController && !this._selectionController.changing
            && index < this._selectionController.pageCount) {
            var c = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = index;
            this._selectionController = c;
        }
    }
    shouldSnapToNext(dir, delta, size) {
        return dir < 0 && delta > UIConfig.defaultScrollSnappingThreshold * size
            || dir > 0 && delta > (1 - UIConfig.defaultScrollSnappingThreshold) * size
            || dir == 0 && delta > size / 2;
    }
    getSnappingPositionWithDir(xValue, yValue, xDir, yDir, result) {
        if (this._virtual) {
            if (!result)
                result = new Phaser.Geom.Point();
            var saved;
            var index;
            var size;
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                saved = yValue;
                s_n = yValue;
                index = this.getIndexOnPos1(false);
                yValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].height;
                    if (this.shouldSnapToNext(yDir, saved - yValue, size))
                        yValue += size + this._lineGap;
                }
            }
            else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                saved = xValue;
                s_n = xValue;
                index = this.getIndexOnPos2(false);
                xValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].width;
                    if (this.shouldSnapToNext(xDir, saved - xValue, size))
                        xValue += size + this._columnGap;
                }
            }
            else {
                saved = xValue;
                s_n = xValue;
                index = this.getIndexOnPos3(false);
                xValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].width;
                    if (this.shouldSnapToNext(xDir, saved - xValue, size))
                        xValue += size + this._columnGap;
                }
            }
            result.x = xValue;
            result.y = yValue;
            return result;
        }
        else
            return super.getSnappingPositionWithDir(xValue, yValue, xDir, yDir, result);
    }
    scrollToView(index, ani, setFirst) {
        throw new Error("TODO");
        // if (this._virtual) {
        //     if (this._numItems == 0)
        //         return;
        //     this.checkVirtualList();
        //     if (index >= this._virtualItems.length)
        //         throw new Error("Invalid child index: " + index + ">" + this._virtualItems.length);
        //     if (this._loop)
        //         index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
        //     var rect: Laya.Rectangle;
        //     var ii: ItemInfo = this._virtualItems[index];
        //     var pos: number = 0;
        //     var i: number;
        //     if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
        //         for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
        //             pos += this._virtualItems[i].height + this._lineGap;
        //         rect = new Laya.Rectangle(0, pos, this._itemSize.x, ii.height);
        //     }
        //     else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
        //         for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
        //             pos += this._virtualItems[i].width + this._columnGap;
        //         rect = new Laya.Rectangle(pos, 0, ii.width, this._itemSize.y);
        //     }
        //     else {
        //         var page: number = index / (this._curLineItemCount * this._curLineItemCount2);
        //         rect = new Laya.Rectangle(page * this.viewWidth + (index % this._curLineItemCount) * (ii.width + this._columnGap),
        //             (index / this._curLineItemCount) % this._curLineItemCount2 * (ii.height + this._lineGap),
        //             ii.width, ii.height);
        //     }
        //     if (this._scrollPane)
        //         this._scrollPane.scrollToView(rect, ani, setFirst);
        // }
        // else {
        //     var obj: GObject = this.getChildAt(index);
        //     if (this._scrollPane)
        //         this._scrollPane.scrollToView(obj, ani, setFirst);
        //     else if (this._parent && this._parent.scrollPane)
        //         this._parent.scrollPane.scrollToView(obj, ani, setFirst);
        // }
    }
    getFirstChildInView() {
        return this.childIndexToItemIndex(super.getFirstChildInView());
    }
    childIndexToItemIndex(index) {
        if (!this._virtual)
            return index;
        if (this._layout == ListLayoutType.Pagination) {
            for (var i = this._firstIndex; i < this._realNumItems; i++) {
                if (this._virtualItems[i].obj) {
                    index--;
                    if (index < 0)
                        return i;
                }
            }
            return index;
        }
        else {
            index += this._firstIndex;
            if (this._loop && this._numItems > 0)
                index = index % this._numItems;
            return index;
        }
    }
    itemIndexToChildIndex(index) {
        if (!this._virtual)
            return index;
        if (this._layout == ListLayoutType.Pagination) {
            return this.getChildIndex(this._virtualItems[index].obj);
        }
        else {
            if (this._loop && this._numItems > 0) {
                var j = this._firstIndex % this._numItems;
                if (index >= j)
                    index = index - j;
                else
                    index = this._numItems - j + index;
            }
            else
                index -= this._firstIndex;
            return index;
        }
    }
    setVirtual() {
        this._setVirtual(false);
    }
    /**
     * Set the list to be virtual list, and has loop behavior.
     */
    setVirtualAndLoop() {
        this._setVirtual(true);
    }
    _setVirtual(loop) {
        throw new Error("TODO");
        // if (!this._virtual) {
        //     if (this._scrollPane == null)
        //         throw new Error("Virtual list must be scrollable!");
        //     if (loop) {
        //         if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.FlowVertical)
        //             throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
        //         this._scrollPane.bouncebackEffect = false;
        //     }
        //     this._virtual = true;
        //     this._loop = loop;
        //     this._virtualItems = new Array<ItemInfo>();
        //     this.removeChildrenToPool();
        //     if (this._itemSize == null) {
        //         this._itemSize = new Phaser.Geom.Point();
        //         var obj: GObject = this.getFromPool(null);
        //         if (obj == null) {
        //             throw new Error("Virtual List must have a default list item resource.");
        //         }
        //         else {
        //             this._itemSize.x = obj.width;
        //             this._itemSize.y = obj.height;
        //         }
        //         this.returnToPool(obj);
        //     }
        //     if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
        //         this._scrollPane.scrollStep = this._itemSize.y;
        //         if (this._loop)
        //             this._scrollPane._loop = 2;
        //     }
        //     else {
        //         this._scrollPane.scrollStep = this._itemSize.x;
        //         if (this._loop)
        //             this._scrollPane._loop = 1;
        //     }
        //     this.on(Events.SCROLL, this, this.__scrolled);
        //     this.setVirtualListChangedFlag(true);
        // }
    }
    /**
     * Set the list item count.
     * If the list instanceof not virtual, specified number of items will be created.
     * If the list instanceof virtual, only items in view will be created.
     */
    get numItems() {
        if (this._virtual)
            return this._numItems;
        else
            return this._children.length;
    }
    set numItems(value) {
        throw new Error("TODO");
        // var i: number;
        // if (this._virtual) {
        //     if (this.itemRenderer == null)
        //         throw new Error("set itemRenderer first!");
        //     this._numItems = value;
        //     if (this._loop)
        //         this._realNumItems = this._numItems * 6;//设置6倍数量，用于循环滚动
        //     else
        //         this._realNumItems = this._numItems;
        //     //_virtualItems的设计是只增不减的
        //     var oldCount: number = this._virtualItems.length;
        //     if (this._realNumItems > oldCount) {
        //         for (i = oldCount; i < this._realNumItems; i++) {
        //             var ii: ItemInfo = {
        //                 width: this._itemSize.x,
        //                 height: this._itemSize.y,
        //                 updateFlag: 0
        //             };
        //             this._virtualItems.push(ii);
        //         }
        //     }
        //     else {
        //         for (i = this._realNumItems; i < oldCount; i++)
        //             this._virtualItems[i].selected = false;
        //     }
        //     if (this._virtualListChanged != 0)
        //         Laya.timer.clear(this, this._refreshVirtualList);
        //     //立即刷新
        //     this._refreshVirtualList();
        // }
        // else {
        //     var cnt: number = this._children.length;
        //     if (value > cnt) {
        //         for (i = cnt; i < value; i++) {
        //             if (this.itemProvider == null)
        //                 this.addItemFromPool();
        //             else
        //                 this.addItemFromPool(this.itemProvider.runWith(i));
        //         }
        //     }
        //     else {
        //         this.removeChildrenToPool(value, cnt);
        //     }
        //     if (this.itemRenderer != null) {
        //         for (i = 0; i < value; i++)
        //             this.itemRenderer.runWith([i, this.getChildAt(i)]);
        //     }
        // }
    }
    refreshVirtualList() {
        this.setVirtualListChangedFlag(false);
    }
    checkVirtualList() {
        throw new Error("TODO");
        // if (this._virtualListChanged != 0) {
        //     this._refreshVirtualList();
        //     Laya.timer.clear(this, this._refreshVirtualList);
        // }
    }
    setVirtualListChangedFlag(layoutChanged) {
        throw new Error("TODO");
        // if (layoutChanged)
        //     this._virtualListChanged = 2;
        // else if (this._virtualListChanged == 0)
        //     this._virtualListChanged = 1;
        // Laya.timer.callLater(this, this._refreshVirtualList);
    }
    _refreshVirtualList() {
        throw new Error("TODO");
        // if (!this._displayObject)
        //     return;
        // var layoutChanged: boolean = this._virtualListChanged == 2;
        // this._virtualListChanged = 0;
        // this._eventLocked = true;
        // if (layoutChanged) {
        //     if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.SingleRow)
        //         this._curLineItemCount = 1;
        //     else if (this._layout == ListLayoutType.FlowHorizontal) {
        //         if (this._columnCount > 0)
        //             this._curLineItemCount = this._columnCount;
        //         else {
        //             this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
        //             if (this._curLineItemCount <= 0)
        //                 this._curLineItemCount = 1;
        //         }
        //     }
        //     else if (this._layout == ListLayoutType.FlowVertical) {
        //         if (this._lineCount > 0)
        //             this._curLineItemCount = this._lineCount;
        //         else {
        //             this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
        //             if (this._curLineItemCount <= 0)
        //                 this._curLineItemCount = 1;
        //         }
        //     }
        //     else //pagination
        //     {
        //         if (this._columnCount > 0)
        //             this._curLineItemCount = this._columnCount;
        //         else {
        //             this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
        //             if (this._curLineItemCount <= 0)
        //                 this._curLineItemCount = 1;
        //         }
        //         if (this._lineCount > 0)
        //             this._curLineItemCount2 = this._lineCount;
        //         else {
        //             this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
        //             if (this._curLineItemCount2 <= 0)
        //                 this._curLineItemCount2 = 1;
        //         }
        //     }
        // }
        // var ch: number = 0, cw: number = 0;
        // if (this._realNumItems > 0) {
        //     var i: number;
        //     var len: number = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
        //     var len2: number = Math.min(this._curLineItemCount, this._realNumItems);
        //     if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
        //         for (i = 0; i < len; i += this._curLineItemCount)
        //             ch += this._virtualItems[i].height + this._lineGap;
        //         if (ch > 0)
        //             ch -= this._lineGap;
        //         if (this._autoResizeItem)
        //             cw = this._scrollPane.viewWidth;
        //         else {
        //             for (i = 0; i < len2; i++)
        //                 cw += this._virtualItems[i].width + this._columnGap;
        //             if (cw > 0)
        //                 cw -= this._columnGap;
        //         }
        //     }
        //     else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
        //         for (i = 0; i < len; i += this._curLineItemCount)
        //             cw += this._virtualItems[i].width + this._columnGap;
        //         if (cw > 0)
        //             cw -= this._columnGap;
        //         if (this._autoResizeItem)
        //             ch = this._scrollPane.viewHeight;
        //         else {
        //             for (i = 0; i < len2; i++)
        //                 ch += this._virtualItems[i].height + this._lineGap;
        //             if (ch > 0)
        //                 ch -= this._lineGap;
        //         }
        //     }
        //     else {
        //         var pageCount: number = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
        //         cw = pageCount * this.viewWidth;
        //         ch = this.viewHeight;
        //     }
        // }
        // this.handleAlign(cw, ch);
        // this._scrollPane.setContentSize(cw, ch);
        // this._eventLocked = false;
        // this.handleScroll(true);
    }
    __scrolled(evt) {
        throw new Error("TODO");
        // this.handleScroll(false);
    }
    getIndexOnPos1(forceUpdate) {
        throw new Error("TODO");
        // if (this._realNumItems < this._curLineItemCount) {
        //     s_n = 0;
        //     return 0;
        // }
        // var i: number;
        // var pos2: number;
        // var pos3: number;
        // if (this.numChildren > 0 && !forceUpdate) {
        //     pos2 = this.getChildAt(0).y;
        //     if (pos2 > s_n) {
        //         for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
        //             pos2 -= (this._virtualItems[i].height + this._lineGap);
        //             if (pos2 <= s_n) {
        //                 s_n = pos2;
        //                 return i;
        //             }
        //         }
        //         s_n = 0;
        //         return 0;
        //     }
        //     else {
        //         for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
        //             pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
        //             if (pos3 > s_n) {
        //                 s_n = pos2;
        //                 return i;
        //             }
        //             pos2 = pos3;
        //         }
        //         s_n = pos2;
        //         return this._realNumItems - this._curLineItemCount;
        //     }
        // }
        // else {
        //     pos2 = 0;
        //     for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
        //         pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
        //         if (pos3 > s_n) {
        //             s_n = pos2;
        //             return i;
        //         }
        //         pos2 = pos3;
        //     }
        //     s_n = pos2;
        //     return this._realNumItems - this._curLineItemCount;
        // }
    }
    getIndexOnPos2(forceUpdate) {
        throw new Error("TODO");
        // if (this._realNumItems < this._curLineItemCount) {
        //     s_n = 0;
        //     return 0;
        // }
        // var i: number;
        // var pos2: number;
        // var pos3: number;
        // if (this.numChildren > 0 && !forceUpdate) {
        //     pos2 = this.getChildAt(0).x;
        //     if (pos2 > s_n) {
        //         for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
        //             pos2 -= (this._virtualItems[i].width + this._columnGap);
        //             if (pos2 <= s_n) {
        //                 s_n = pos2;
        //                 return i;
        //             }
        //         }
        //         s_n = 0;
        //         return 0;
        //     }
        //     else {
        //         for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
        //             pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
        //             if (pos3 > s_n) {
        //                 s_n = pos2;
        //                 return i;
        //             }
        //             pos2 = pos3;
        //         }
        //         s_n = pos2;
        //         return this._realNumItems - this._curLineItemCount;
        //     }
        // }
        // else {
        //     pos2 = 0;
        //     for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
        //         pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
        //         if (pos3 > s_n) {
        //             s_n = pos2;
        //             return i;
        //         }
        //         pos2 = pos3;
        //     }
        //     s_n = pos2;
        //     return this._realNumItems - this._curLineItemCount;
        // }
    }
    getIndexOnPos3(forceUpdate) {
        throw new Error("TODO");
        // if (this._realNumItems < this._curLineItemCount) {
        //     s_n = 0;
        //     return 0;
        // }
        // var viewWidth: number = this.viewWidth;
        // var page: number = Math.floor(s_n / viewWidth);
        // var startIndex: number = page * (this._curLineItemCount * this._curLineItemCount2);
        // var pos2: number = page * viewWidth;
        // var i: number;
        // var pos3: number;
        // for (i = 0; i < this._curLineItemCount; i++) {
        //     pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
        //     if (pos3 > s_n) {
        //         s_n = pos2;
        //         return startIndex + i;
        //     }
        //     pos2 = pos3;
        // }
        // s_n = pos2;
        // return startIndex + this._curLineItemCount - 1;
    }
    handleScroll(forceUpdate) {
        // if (this._eventLocked)
        //     return;
        // if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
        //     var enterCounter: number = 0;
        //     while (this.handleScroll1(forceUpdate)) {
        //         enterCounter++;
        //         forceUpdate = false;
        //         if (enterCounter > 20) {
        //             console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
        //             break;
        //         }
        //     }
        //     this.handleArchOrder1();
        // }
        // else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
        //     enterCounter = 0;
        //     while (this.handleScroll2(forceUpdate)) {
        //         enterCounter++;
        //         forceUpdate = false;
        //         if (enterCounter > 20) {
        //             console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
        //             break;
        //         }
        //     }
        //     this.handleArchOrder2();
        // }
        // else {
        //     this.handleScroll3(forceUpdate);
        // }
        // this._boundsChanged = false;
    }
    handleScroll1(forceUpdate) {
        throw new Error("TODO");
        // var pos: number = this._scrollPane.scrollingPosY;
        // var max: number = pos + this._scrollPane.viewHeight;
        // var end: boolean = max == this._scrollPane.contentHeight;//这个标志表示当前需要滚动到最末，无论内容变化大小
        // //寻找当前位置的第一条项目
        // s_n = pos;
        // var newFirstIndex: number = this.getIndexOnPos1(forceUpdate);
        // pos = s_n;
        // if (newFirstIndex == this._firstIndex && !forceUpdate)
        //     return false;
        // var oldFirstIndex: number = this._firstIndex;
        // this._firstIndex = newFirstIndex;
        // var curIndex: number = newFirstIndex;
        // var forward: boolean = oldFirstIndex > newFirstIndex;
        // var childCount: number = this.numChildren;
        // var lastIndex: number = oldFirstIndex + childCount - 1;
        // var reuseIndex: number = forward ? lastIndex : oldFirstIndex;
        // var curX: number = 0, curY: number = pos;
        // var needRender: boolean;
        // var deltaSize: number = 0;
        // var firstItemDeltaSize: number = 0;
        // var url: string = this._defaultItem;
        // var ii: ItemInfo, ii2: ItemInfo;
        // var i: number, j: number;
        // var partSize: number = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        // this.itemInfoVer++;
        // while (curIndex < this._realNumItems && (end || curY < max)) {
        //     ii = this._virtualItems[curIndex];
        //     if (ii.obj == null || forceUpdate) {
        //         if (this.itemProvider != null) {
        //             url = this.itemProvider.runWith(curIndex % this._numItems);
        //             if (url == null)
        //                 url = this._defaultItem;
        //             url = UIPackage.normalizeURL(url);
        //         }
        //         if (ii.obj && ii.obj.resourceURL != url) {
        //             if (ii.obj instanceof GButton)
        //                 ii.selected = ii.obj.selected;
        //             this.removeChildToPool(ii.obj);
        //             ii.obj = null;
        //         }
        //     }
        //     if (ii.obj == null) {
        //         //搜索最适合的重用item，保证每次刷新需要新建或者重新render的item最少
        //         if (forward) {
        //             for (j = reuseIndex; j >= oldFirstIndex; j--) {
        //                 ii2 = this._virtualItems[j];
        //                 if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
        //                     if (ii2.obj instanceof GButton)
        //                         ii2.selected = ii2.obj.selected;
        //                     ii.obj = ii2.obj;
        //                     ii2.obj = null;
        //                     if (j == reuseIndex)
        //                         reuseIndex--;
        //                     break;
        //                 }
        //             }
        //         }
        //         else {
        //             for (j = reuseIndex; j <= lastIndex; j++) {
        //                 ii2 = this._virtualItems[j];
        //                 if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
        //                     if (ii2.obj instanceof GButton)
        //                         ii2.selected = ii2.obj.selected;
        //                     ii.obj = ii2.obj;
        //                     ii2.obj = null;
        //                     if (j == reuseIndex)
        //                         reuseIndex++;
        //                     break;
        //                 }
        //             }
        //         }
        //         if (ii.obj) {
        //             this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
        //         }
        //         else {
        //             ii.obj = this._pool.getObject(url);
        //             if (forward)
        //                 this.addChildAt(ii.obj, curIndex - newFirstIndex);
        //             else
        //                 this.addChild(ii.obj);
        //         }
        //         if (ii.obj instanceof GButton)
        //             ii.obj.selected = ii.selected;
        //         needRender = true;
        //     }
        //     else
        //         needRender = forceUpdate;
        //     if (needRender) {
        //         if (this._autoResizeItem && (this._layout == ListLayoutType.SingleColumn || this._columnCount > 0))
        //             ii.obj.setSize(partSize, ii.obj.height, true);
        //         this.itemRenderer.runWith([curIndex % this._numItems, ii.obj]);
        //         if (curIndex % this._curLineItemCount == 0) {
        //             deltaSize += Math.ceil(ii.obj.height) - ii.height;
        //             if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
        //                 //当内容向下滚动时，如果新出现的项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
        //                 firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
        //             }
        //         }
        //         ii.width = Math.ceil(ii.obj.width);
        //         ii.height = Math.ceil(ii.obj.height);
        //     }
        //     ii.updateFlag = this.itemInfoVer;
        //     ii.obj.setXY(curX, curY);
        //     if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
        //         max += ii.height;
        //     curX += ii.width + this._columnGap;
        //     if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
        //         curX = 0;
        //         curY += ii.height + this._lineGap;
        //     }
        //     curIndex++;
        // }
        // for (i = 0; i < childCount; i++) {
        //     ii = this._virtualItems[oldFirstIndex + i];
        //     if (ii.updateFlag != this.itemInfoVer && ii.obj) {
        //         if (ii.obj instanceof GButton)
        //             ii.selected = ii.obj.selected;
        //         this.removeChildToPool(ii.obj);
        //         ii.obj = null;
        //     }
        // }
        // childCount = this._children.length;
        // for (i = 0; i < childCount; i++) {
        //     var obj: GObject = this._virtualItems[newFirstIndex + i].obj;
        //     if (this._children[i] != obj)
        //         this.setChildIndex(obj, i);
        // }
        // if (deltaSize != 0 || firstItemDeltaSize != 0)
        //     this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
        // if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y)//最后一页没填满！
        //     return true;
        // else
        //     return false;
    }
    handleScroll2(forceUpdate) {
        throw new Error("TODO");
        // var pos: number = this._scrollPane.scrollingPosX;
        // var max: number = pos + this._scrollPane.viewWidth;
        // var end: boolean = pos == this._scrollPane.contentWidth;//这个标志表示当前需要滚动到最末，无论内容变化大小
        // //寻找当前位置的第一条项目
        // s_n = pos;
        // var newFirstIndex: number = this.getIndexOnPos2(forceUpdate);
        // pos = s_n;
        // if (newFirstIndex == this._firstIndex && !forceUpdate)
        //     return false;
        // var oldFirstIndex: number = this._firstIndex;
        // this._firstIndex = newFirstIndex;
        // var curIndex: number = newFirstIndex;
        // var forward: boolean = oldFirstIndex > newFirstIndex;
        // var childCount: number = this.numChildren;
        // var lastIndex: number = oldFirstIndex + childCount - 1;
        // var reuseIndex: number = forward ? lastIndex : oldFirstIndex;
        // var curX: number = pos, curY: number = 0;
        // var needRender: boolean;
        // var deltaSize: number = 0;
        // var firstItemDeltaSize: number = 0;
        // var url: string = this._defaultItem;
        // var ii: ItemInfo, ii2: ItemInfo;
        // var i: number, j: number;
        // var partSize: number = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        // this.itemInfoVer++;
        // while (curIndex < this._realNumItems && (end || curX < max)) {
        //     ii = this._virtualItems[curIndex];
        //     if (ii.obj == null || forceUpdate) {
        //         if (this.itemProvider != null) {
        //             url = this.itemProvider.runWith(curIndex % this._numItems);
        //             if (url == null)
        //                 url = this._defaultItem;
        //             url = UIPackage.normalizeURL(url);
        //         }
        //         if (ii.obj && ii.obj.resourceURL != url) {
        //             if (ii.obj instanceof GButton)
        //                 ii.selected = ii.obj.selected;
        //             this.removeChildToPool(ii.obj);
        //             ii.obj = null;
        //         }
        //     }
        //     if (ii.obj == null) {
        //         if (forward) {
        //             for (j = reuseIndex; j >= oldFirstIndex; j--) {
        //                 ii2 = this._virtualItems[j];
        //                 if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
        //                     if (ii2.obj instanceof GButton)
        //                         ii2.selected = ii2.obj.selected;
        //                     ii.obj = ii2.obj;
        //                     ii2.obj = null;
        //                     if (j == reuseIndex)
        //                         reuseIndex--;
        //                     break;
        //                 }
        //             }
        //         }
        //         else {
        //             for (j = reuseIndex; j <= lastIndex; j++) {
        //                 ii2 = this._virtualItems[j];
        //                 if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
        //                     if (ii2.obj instanceof GButton)
        //                         ii2.selected = ii2.obj.selected;
        //                     ii.obj = ii2.obj;
        //                     ii2.obj = null;
        //                     if (j == reuseIndex)
        //                         reuseIndex++;
        //                     break;
        //                 }
        //             }
        //         }
        //         if (ii.obj) {
        //             this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
        //         }
        //         else {
        //             ii.obj = this._pool.getObject(url);
        //             if (forward)
        //                 this.addChildAt(ii.obj, curIndex - newFirstIndex);
        //             else
        //                 this.addChild(ii.obj);
        //         }
        //         if (ii.obj instanceof GButton)
        //             ii.obj.selected = ii.selected;
        //         needRender = true;
        //     }
        //     else
        //         needRender = forceUpdate;
        //     if (needRender) {
        //         if (this._autoResizeItem && (this._layout == ListLayoutType.SingleRow || this._lineCount > 0))
        //             ii.obj.setSize(ii.obj.width, partSize, true);
        //         this.itemRenderer.runWith([curIndex % this._numItems, ii.obj]);
        //         if (curIndex % this._curLineItemCount == 0) {
        //             deltaSize += Math.ceil(ii.obj.width) - ii.width;
        //             if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
        //                 //当内容向下滚动时，如果新出现的一个项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
        //                 firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
        //             }
        //         }
        //         ii.width = Math.ceil(ii.obj.width);
        //         ii.height = Math.ceil(ii.obj.height);
        //     }
        //     ii.updateFlag = this.itemInfoVer;
        //     ii.obj.setXY(curX, curY);
        //     if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
        //         max += ii.width;
        //     curY += ii.height + this._lineGap;
        //     if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
        //         curY = 0;
        //         curX += ii.width + this._columnGap;
        //     }
        //     curIndex++;
        // }
        // for (i = 0; i < childCount; i++) {
        //     ii = this._virtualItems[oldFirstIndex + i];
        //     if (ii.updateFlag != this.itemInfoVer && ii.obj) {
        //         if (ii.obj instanceof GButton)
        //             ii.selected = ii.obj.selected;
        //         this.removeChildToPool(ii.obj);
        //         ii.obj = null;
        //     }
        // }
        // childCount = this._children.length;
        // for (i = 0; i < childCount; i++) {
        //     var obj: GObject = this._virtualItems[newFirstIndex + i].obj;
        //     if (this._children[i] != obj)
        //         this.setChildIndex(obj, i);
        // }
        // if (deltaSize != 0 || firstItemDeltaSize != 0)
        //     this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
        // if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > - this._container.x)//最后一页没填满！
        //     return true;
        // else
        //     return false;
    }
    handleScroll3(forceUpdate) {
        throw new Error("TODO");
        // var pos: number = this._scrollPane.scrollingPosX;
        // //寻找当前位置的第一条项目
        // s_n = pos;
        // var newFirstIndex: number = this.getIndexOnPos3(forceUpdate);
        // pos = s_n;
        // if (newFirstIndex == this._firstIndex && !forceUpdate)
        //     return;
        // var oldFirstIndex: number = this._firstIndex;
        // this._firstIndex = newFirstIndex;
        // //分页模式不支持不等高，所以渲染满一页就好了
        // var reuseIndex: number = oldFirstIndex;
        // var virtualItemCount: number = this._virtualItems.length;
        // var pageSize: number = this._curLineItemCount * this._curLineItemCount2;
        // var startCol: number = newFirstIndex % this._curLineItemCount;
        // var viewWidth: number = this.viewWidth;
        // var page: number = Math.floor(newFirstIndex / pageSize);
        // var startIndex: number = page * pageSize;
        // var lastIndex: number = startIndex + pageSize * 2; //测试两页
        // var needRender: boolean;
        // var i: number;
        // var ii: ItemInfo, ii2: ItemInfo;
        // var col: number;
        // var url: string = this._defaultItem;
        // var partWidth: number = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        // var partHeight: number = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
        // this.itemInfoVer++;
        // //先标记这次要用到的项目
        // for (i = startIndex; i < lastIndex; i++) {
        //     if (i >= this._realNumItems)
        //         continue;
        //     col = i % this._curLineItemCount;
        //     if (i - startIndex < pageSize) {
        //         if (col < startCol)
        //             continue;
        //     }
        //     else {
        //         if (col > startCol)
        //             continue;
        //     }
        //     ii = this._virtualItems[i];
        //     ii.updateFlag = this.itemInfoVer;
        // }
        // var lastObj: GObject = null;
        // var insertIndex: number = 0;
        // for (i = startIndex; i < lastIndex; i++) {
        //     if (i >= this._realNumItems)
        //         continue;
        //     ii = this._virtualItems[i];
        //     if (ii.updateFlag != this.itemInfoVer)
        //         continue;
        //     if (ii.obj == null) {
        //         //寻找看有没有可重用的
        //         while (reuseIndex < virtualItemCount) {
        //             ii2 = this._virtualItems[reuseIndex];
        //             if (ii2.obj && ii2.updateFlag != this.itemInfoVer) {
        //                 if (ii2.obj instanceof GButton)
        //                     ii2.selected = ii2.obj.selected;
        //                 ii.obj = ii2.obj;
        //                 ii2.obj = null;
        //                 break;
        //             }
        //             reuseIndex++;
        //         }
        //         if (insertIndex == -1)
        //             insertIndex = this.getChildIndex(lastObj) + 1;
        //         if (ii.obj == null) {
        //             if (this.itemProvider != null) {
        //                 url = this.itemProvider.runWith(i % this._numItems);
        //                 if (url == null)
        //                     url = this._defaultItem;
        //                 url = UIPackage.normalizeURL(url);
        //             }
        //             ii.obj = this._pool.getObject(url);
        //             this.addChildAt(ii.obj, insertIndex);
        //         }
        //         else {
        //             insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
        //         }
        //         insertIndex++;
        //         if (ii.obj instanceof GButton)
        //             ii.obj.selected = ii.selected;
        //         needRender = true;
        //     }
        //     else {
        //         needRender = forceUpdate;
        //         insertIndex = -1;
        //         lastObj = ii.obj;
        //     }
        //     if (needRender) {
        //         if (this._autoResizeItem) {
        //             if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount)
        //                 ii.obj.setSize(partWidth, partHeight, true);
        //             else if (this._curLineItemCount == this._columnCount)
        //                 ii.obj.setSize(partWidth, ii.obj.height, true);
        //             else if (this._curLineItemCount2 == this._lineCount)
        //                 ii.obj.setSize(ii.obj.width, partHeight, true);
        //         }
        //         this.itemRenderer.runWith([i % this._numItems, ii.obj]);
        //         ii.width = Math.ceil(ii.obj.width);
        //         ii.height = Math.ceil(ii.obj.height);
        //     }
        // }
        // //排列item
        // var borderX: number = (startIndex / pageSize) * viewWidth;
        // var xx: number = borderX;
        // var yy: number = 0;
        // var lineHeight: number = 0;
        // for (i = startIndex; i < lastIndex; i++) {
        //     if (i >= this._realNumItems)
        //         continue;
        //     ii = this._virtualItems[i];
        //     if (ii.updateFlag == this.itemInfoVer)
        //         ii.obj.setXY(xx, yy);
        //     if (ii.height > lineHeight)
        //         lineHeight = ii.height;
        //     if (i % this._curLineItemCount == this._curLineItemCount - 1) {
        //         xx = borderX;
        //         yy += lineHeight + this._lineGap;
        //         lineHeight = 0;
        //         if (i == startIndex + pageSize - 1) {
        //             borderX += viewWidth;
        //             xx = borderX;
        //             yy = 0;
        //         }
        //     }
        //     else
        //         xx += ii.width + this._columnGap;
        // }
        // //释放未使用的
        // for (i = reuseIndex; i < virtualItemCount; i++) {
        //     ii = this._virtualItems[i];
        //     if (ii.updateFlag != this.itemInfoVer && ii.obj) {
        //         if (ii.obj instanceof GButton)
        //             ii.selected = ii.obj.selected;
        //         this.removeChildToPool(ii.obj);
        //         ii.obj = null;
        //     }
        // }
    }
    handleArchOrder1() {
        if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
            var mid = this._scrollPane.posY + this.viewHeight / 2;
            var minDist = Number.POSITIVE_INFINITY;
            var dist = 0;
            var apexIndex = 0;
            var cnt = this.numChildren;
            for (var i = 0; i < cnt; i++) {
                var obj = this.getChildAt(i);
                if (!this.foldInvisibleItems || obj.visible) {
                    dist = Math.abs(mid - obj.y - obj.height / 2);
                    if (dist < minDist) {
                        minDist = dist;
                        apexIndex = i;
                    }
                }
            }
            this.apexIndex = apexIndex;
        }
    }
    handleArchOrder2() {
        throw new Error("TODO");
        //     if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
        //         var mid: number = this._scrollPane.posX + this.viewWidth / 2;
        //         var minDist: number = Number.POSITIVE_INFINITY;
        //         var dist: number = 0;
        //         var apexIndex: number = 0;
        //         var cnt: number = this.numChildren;
        //         for (var i: number = 0; i < cnt; i++) {
        //             var obj: GObject = this.getChildAt(i);
        //             if (!this.foldInvisibleItems || obj.visible) {
        //                 dist = Math.abs(mid - obj.x - obj.width / 2);
        //                 if (dist < minDist) {
        //                     minDist = dist;
        //                     apexIndex = i;
        //                 }
        //             }
        //         }
        //         this.apexIndex = apexIndex;
        //     }
        // }
        // private handleAlign(contentWidth: number, contentHeight: number): void {
        //     var newOffsetX: number = 0;
        //     var newOffsetY: number = 0;
        //     if (contentHeight < this.viewHeight) {
        //         if (this._verticalAlign == "middle")
        //             newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
        //         else if (this._verticalAlign == "bottom")
        //             newOffsetY = this.viewHeight - contentHeight;
        //     }
        //     if (contentWidth < this.viewWidth) {
        //         if (this._align == "center")
        //             newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
        //         else if (this._align == "right")
        //             newOffsetX = this.viewWidth - contentWidth;
        //     }
        //     if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
        //         this._alignOffset.setTo(newOffsetX, newOffsetY);
        //         if (this._scrollPane)
        //             this._scrollPane.adjustMaskContainer();
        //         else
        //             this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
        //     }
    }
    updateBounds() {
        // if (this._virtual)
        //     return;
        // var i: number;
        // var child: GObject;
        // var curX: number = 0;
        // var curY: number = 0;
        // var maxWidth: number = 0;
        // var maxHeight: number = 0;
        // var cw: number, ch: number;
        // var j: number = 0;
        // var page: number = 0;
        // var k: number = 0;
        // var cnt: number = this._children.length;
        // var viewWidth: number = this.viewWidth;
        // var viewHeight: number = this.viewHeight;
        // var lineSize: number = 0;
        // var lineStart: number = 0;
        // var ratio: number;
        // if (this._layout == ListLayoutType.SingleColumn) {
        //     for (i = 0; i < cnt; i++) {
        //         child = this.getChildAt(i);
        //         if (this.foldInvisibleItems && !child.visible)
        //             continue;
        //         if (curY != 0)
        //             curY += this._lineGap;
        //         child.y = curY;
        //         if (this._autoResizeItem)
        //             child.setSize(viewWidth, child.height, true);
        //         curY += Math.ceil(child.height);
        //         if (child.width > maxWidth)
        //             maxWidth = child.width;
        //     }
        //     ch = curY;
        //     if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
        //         viewWidth += this._scrollPane.vtScrollBar.width;
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             child.setSize(viewWidth, child.height, true);
        //             if (child.width > maxWidth)
        //                 maxWidth = child.width;
        //         }
        //     }
        //     cw = Math.ceil(maxWidth);
        // }
        // else if (this._layout == ListLayoutType.SingleRow) {
        //     for (i = 0; i < cnt; i++) {
        //         child = this.getChildAt(i);
        //         if (this.foldInvisibleItems && !child.visible)
        //             continue;
        //         if (curX != 0)
        //             curX += this._columnGap;
        //         child.x = curX;
        //         if (this._autoResizeItem)
        //             child.setSize(child.width, viewHeight, true);
        //         curX += Math.ceil(child.width);
        //         if (child.height > maxHeight)
        //             maxHeight = child.height;
        //     }
        //     cw = curX;
        //     if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
        //         viewHeight += this._scrollPane.hzScrollBar.height;
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             child.setSize(child.width, viewHeight, true);
        //             if (child.height > maxHeight)
        //                 maxHeight = child.height;
        //         }
        //     }
        //     ch = Math.ceil(maxHeight);
        // }
        // else if (this._layout == ListLayoutType.FlowHorizontal) {
        //     if (this._autoResizeItem && this._columnCount > 0) {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             lineSize += child.sourceWidth;
        //             j++;
        //             if (j == this._columnCount || i == cnt - 1) {
        //                 ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
        //                 curX = 0;
        //                 for (j = lineStart; j <= i; j++) {
        //                     child = this.getChildAt(j);
        //                     if (this.foldInvisibleItems && !child.visible)
        //                         continue;
        //                     child.setXY(curX, curY);
        //                     if (j < i) {
        //                         child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
        //                         curX += Math.ceil(child.width) + this._columnGap;
        //                     }
        //                     else {
        //                         child.setSize(viewWidth - curX, child.height, true);
        //                     }
        //                     if (child.height > maxHeight)
        //                         maxHeight = child.height;
        //                 }
        //                 //new line
        //                 curY += Math.ceil(maxHeight) + this._lineGap;
        //                 maxHeight = 0;
        //                 j = 0;
        //                 lineStart = i + 1;
        //                 lineSize = 0;
        //             }
        //         }
        //         ch = curY + Math.ceil(maxHeight);
        //         cw = viewWidth;
        //     }
        //     else {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             if (curX != 0)
        //                 curX += this._columnGap;
        //             if (this._columnCount != 0 && j >= this._columnCount
        //                 || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
        //                 //new line
        //                 curX = 0;
        //                 curY += Math.ceil(maxHeight) + this._lineGap;
        //                 maxHeight = 0;
        //                 j = 0;
        //             }
        //             child.setXY(curX, curY);
        //             curX += Math.ceil(child.width);
        //             if (curX > maxWidth)
        //                 maxWidth = curX;
        //             if (child.height > maxHeight)
        //                 maxHeight = child.height;
        //             j++;
        //         }
        //         ch = curY + Math.ceil(maxHeight);
        //         cw = Math.ceil(maxWidth);
        //     }
        // }
        // else if (this._layout == ListLayoutType.FlowVertical) {
        //     if (this._autoResizeItem && this._lineCount > 0) {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             lineSize += child.sourceHeight;
        //             j++;
        //             if (j == this._lineCount || i == cnt - 1) {
        //                 ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
        //                 curY = 0;
        //                 for (j = lineStart; j <= i; j++) {
        //                     child = this.getChildAt(j);
        //                     if (this.foldInvisibleItems && !child.visible)
        //                         continue;
        //                     child.setXY(curX, curY);
        //                     if (j < i) {
        //                         child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
        //                         curY += Math.ceil(child.height) + this._lineGap;
        //                     }
        //                     else {
        //                         child.setSize(child.width, viewHeight - curY, true);
        //                     }
        //                     if (child.width > maxWidth)
        //                         maxWidth = child.width;
        //                 }
        //                 //new line
        //                 curX += Math.ceil(maxWidth) + this._columnGap;
        //                 maxWidth = 0;
        //                 j = 0;
        //                 lineStart = i + 1;
        //                 lineSize = 0;
        //             }
        //         }
        //         cw = curX + Math.ceil(maxWidth);
        //         ch = viewHeight;
        //     }
        //     else {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             if (curY != 0)
        //                 curY += this._lineGap;
        //             if (this._lineCount != 0 && j >= this._lineCount
        //                 || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
        //                 curY = 0;
        //                 curX += Math.ceil(maxWidth) + this._columnGap;
        //                 maxWidth = 0;
        //                 j = 0;
        //             }
        //             child.setXY(curX, curY);
        //             curY += Math.ceil(child.height);
        //             if (curY > maxHeight)
        //                 maxHeight = curY;
        //             if (child.width > maxWidth)
        //                 maxWidth = child.width;
        //             j++;
        //         }
        //         cw = curX + Math.ceil(maxWidth);
        //         ch = Math.ceil(maxHeight);
        //     }
        // }
        // else //pagination
        // {
        //     var eachHeight: number;
        //     if (this._autoResizeItem && this._lineCount > 0)
        //         eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
        //     if (this._autoResizeItem && this._columnCount > 0) {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             if (j == 0 && (this._lineCount != 0 && k >= this._lineCount
        //                 || this._lineCount == 0 && curY + child.height > viewHeight)) {
        //                 //new page
        //                 page++;
        //                 curY = 0;
        //                 k = 0;
        //             }
        //             lineSize += child.sourceWidth;
        //             j++;
        //             if (j == this._columnCount || i == cnt - 1) {
        //                 ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
        //                 curX = 0;
        //                 for (j = lineStart; j <= i; j++) {
        //                     child = this.getChildAt(j);
        //                     if (this.foldInvisibleItems && !child.visible)
        //                         continue;
        //                     child.setXY(page * viewWidth + curX, curY);
        //                     if (j < i) {
        //                         child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio),
        //                             this._lineCount > 0 ? eachHeight : child.height, true);
        //                         curX += Math.ceil(child.width) + this._columnGap;
        //                     }
        //                     else {
        //                         child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
        //                     }
        //                     if (child.height > maxHeight)
        //                         maxHeight = child.height;
        //                 }
        //                 //new line
        //                 curY += Math.ceil(maxHeight) + this._lineGap;
        //                 maxHeight = 0;
        //                 j = 0;
        //                 lineStart = i + 1;
        //                 lineSize = 0;
        //                 k++;
        //             }
        //         }
        //     }
        //     else {
        //         for (i = 0; i < cnt; i++) {
        //             child = this.getChildAt(i);
        //             if (this.foldInvisibleItems && !child.visible)
        //                 continue;
        //             if (curX != 0)
        //                 curX += this._columnGap;
        //             if (this._autoResizeItem && this._lineCount > 0)
        //                 child.setSize(child.width, eachHeight, true);
        //             if (this._columnCount != 0 && j >= this._columnCount
        //                 || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
        //                 //new line
        //                 curX = 0;
        //                 curY += Math.ceil(maxHeight) + this._lineGap;
        //                 maxHeight = 0;
        //                 j = 0;
        //                 k++;
        //                 if (this._lineCount != 0 && k >= this._lineCount
        //                     || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0)//new page
        //                 {
        //                     page++;
        //                     curY = 0;
        //                     k = 0;
        //                 }
        //             }
        //             child.setXY(page * viewWidth + curX, curY);
        //             curX += Math.ceil(child.width);
        //             if (curX > maxWidth)
        //                 maxWidth = curX;
        //             if (child.height > maxHeight)
        //                 maxHeight = child.height;
        //             j++;
        //         }
        //     }
        //     ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
        //     cw = (page + 1) * viewWidth;
        // }
        // this.handleAlign(cw, ch);
        // this.setBounds(0, 0, cw, ch);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        var i1;
        this._layout = buffer.readByte();
        this._selectionMode = buffer.readByte();
        i1 = buffer.readByte();
        this._align = i1 == 0 ? "left" : (i1 == 1 ? "center" : "right");
        i1 = buffer.readByte();
        this._verticalAlign = i1 == 0 ? "top" : (i1 == 1 ? "middle" : "bottom");
        this._lineGap = buffer.readShort();
        this._columnGap = buffer.readShort();
        this._lineCount = buffer.readShort();
        this._columnCount = buffer.readShort();
        this._autoResizeItem = buffer.readBool();
        this._childrenRenderOrder = buffer.readByte();
        this._apexIndex = buffer.readShort();
        if (buffer.readBool()) {
            this._margin.top = buffer.readInt();
            this._margin.bottom = buffer.readInt();
            this._margin.left = buffer.readInt();
            this._margin.right = buffer.readInt();
        }
        var overflow = buffer.readByte();
        if (overflow == OverflowType.Scroll) {
            var savedPos = buffer.position;
            buffer.seek(beginPos, 7);
            this.setupScroll(buffer);
            buffer.position = savedPos;
        }
        else
            this.setupOverflow(overflow);
        if (buffer.readBool()) //clipSoftness
            buffer.skip(8);
        if (buffer.version >= 2) {
            this.scrollItemToViewOnClick = buffer.readBool();
            this.foldInvisibleItems = buffer.readBool();
        }
        buffer.seek(beginPos, 8);
        this._defaultItem = buffer.readS();
        this.readItems(buffer);
    }
    readItems(buffer) {
        var cnt;
        var i;
        var nextPos;
        var str;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            str = buffer.readS();
            if (str == null) {
                str = this._defaultItem;
                if (!str) {
                    buffer.position = nextPos;
                    continue;
                }
            }
            var obj = this.getFromPool(str);
            if (obj) {
                throw new Error("TODO");
            }
            buffer.position = nextPos;
        }
    }
    setupItem(buffer, obj) {
        var str;
        str = buffer.readS();
        if (str != null)
            obj.text = str;
        str = buffer.readS();
        if (str != null && (obj instanceof GButton))
            obj.selectedTitle = str;
        str = buffer.readS();
        if (str != null)
            obj.icon = str;
        str = buffer.readS();
        if (str != null && (obj instanceof GButton))
            obj.selectedIcon = str;
        str = buffer.readS();
        if (str != null)
            obj.name = str;
        var cnt;
        var i;
        if (obj instanceof GComponent) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                var cc = obj.getController(buffer.readS());
                str = buffer.readS();
                if (cc)
                    cc.selectedPageId = str;
            }
            if (buffer.version >= 2) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    var target = buffer.readS();
                    var propertyId = buffer.readShort();
                    var value = buffer.readS();
                    var obj2 = obj.getChildByPath(target);
                    if (obj2)
                        obj2.setProp(propertyId, value);
                }
            }
        }
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 6);
        var i = buffer.readShort();
        if (i != -1)
            this._selectionController = this._parent.getControllerAt(i);
    }
}
var s_n = 0;

class GTreeNode {
    constructor(hasChild, resURL) {
        this._level = 0;
        this._resURL = resURL;
        if (hasChild)
            this._children = new Array();
    }
    set expanded(value) {
        if (this._children == null)
            return;
        if (this._expanded != value) {
            this._expanded = value;
            if (this._tree) {
                if (this._expanded)
                    this._tree._afterExpanded(this);
                else
                    this._tree._afterCollapsed(this);
            }
        }
    }
    get expanded() {
        return this._expanded;
    }
    get isFolder() {
        return this._children != null;
    }
    get parent() {
        return this._parent;
    }
    get text() {
        if (this._cell)
            return this._cell.text;
        else
            return null;
    }
    set text(value) {
        if (this._cell)
            this._cell.text = value;
    }
    get icon() {
        if (this._cell)
            return this._cell.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._cell)
            this._cell.icon = value;
    }
    get cell() {
        return this._cell;
    }
    get level() {
        return this._level;
    }
    _setLevel(value) {
        this._level = value;
    }
    addChild(child) {
        this.addChildAt(child, this._children.length);
        return child;
    }
    addChildAt(child, index) {
        if (!child)
            throw new Error("child is null");
        var numChildren = this._children.length;
        if (index >= 0 && index <= numChildren) {
            if (child._parent == this) {
                this.setChildIndex(child, index);
            }
            else {
                if (child._parent)
                    child._parent.removeChild(child);
                var cnt = this._children.length;
                if (index == cnt)
                    this._children.push(child);
                else
                    this._children.splice(index, 0, child);
                child._parent = this;
                child._level = this._level + 1;
                child._setTree(this._tree);
                if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
                    throw new Error("TODO");
                // this._tree._afterInserted(child);
            }
            return child;
        }
        else {
            throw new RangeError("Invalid child index");
        }
    }
    removeChild(child) {
        var childIndex = this._children.indexOf(child);
        if (childIndex != -1) {
            this.removeChildAt(childIndex);
        }
        return child;
    }
    removeChildAt(index) {
        if (index >= 0 && index < this.numChildren) {
            var child = this._children[index];
            this._children.splice(index, 1);
            child._parent = null;
            if (this._tree) {
                child._setTree(null);
                this._tree._afterRemoved(child);
            }
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    removeChildren(beginIndex, endIndex) {
        beginIndex = beginIndex || 0;
        if (endIndex == null)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this.numChildren)
            endIndex = this.numChildren - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildAt(beginIndex);
    }
    getChildAt(index) {
        if (index >= 0 && index < this.numChildren)
            return this._children[index];
        else
            throw "Invalid child index";
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    getPrevSibling() {
        if (this._parent == null)
            return null;
        var i = this._parent._children.indexOf(this);
        if (i <= 0)
            return null;
        return this._parent._children[i - 1];
    }
    getNextSibling() {
        if (this._parent == null)
            return null;
        var i = this._parent._children.indexOf(this);
        if (i < 0 || i >= this._parent._children.length - 1)
            return null;
        return this._parent._children[i + 1];
    }
    setChildIndex(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        var cnt = this._children.length;
        if (index < 0)
            index = 0;
        else if (index > cnt)
            index = cnt;
        if (oldIndex == index)
            return;
        this._children.splice(oldIndex, 1);
        this._children.splice(index, 0, child);
        if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
            this._tree._afterMoved(child);
    }
    swapChildren(child1, child2) {
        var index1 = this._children.indexOf(child1);
        var index2 = this._children.indexOf(child2);
        if (index1 == -1 || index2 == -1)
            throw "Not a child of this container";
        this.swapChildrenAt(index1, index2);
    }
    swapChildrenAt(index1, index2) {
        var child1 = this._children[index1];
        var child2 = this._children[index2];
        this.setChildIndex(child1, index2);
        this.setChildIndex(child2, index1);
    }
    get numChildren() {
        return this._children.length;
    }
    expandToRoot() {
        var p = this;
        while (p) {
            p.expanded = true;
            p = p.parent;
        }
    }
    get tree() {
        return this._tree;
    }
    _setTree(value) {
        this._tree = value;
        if (this._tree && this._tree.treeNodeWillExpand && this._expanded)
            this._tree.treeNodeWillExpand(this, true);
        if (this._children) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; i++) {
                var node = this._children[i];
                node._level = this._level + 1;
                node._setTree(value);
            }
        }
    }
}

class GTree extends GList {
    constructor() {
        super();
        this._indent = 15;
        this._rootNode = new GTreeNode(true);
        this._rootNode._setTree(this);
        this._rootNode.expanded = true;
    }
    get rootNode() {
        return this._rootNode;
    }
    get indent() {
        return this._indent;
    }
    set indent(value) {
        this._indent = value;
    }
    get clickToExpand() {
        return this._clickToExpand;
    }
    set clickToExpand(value) {
        this._clickToExpand = value;
    }
    getSelectedNode() {
        throw new Error("TODO");
        // if (this.selectedIndex != -1)
        //     return this.getChildAt(this.selectedIndex)._treeNode;
        // else
        //     return null;
    }
    getSelectedNodes(result) {
        throw new Error("TODO");
        // if (!result)
        //     result = new Array<GTreeNode>();
        // s_list.length = 0;
        // super.getSelection(s_list);
        // var cnt: number = s_list.length;
        // var ret: Array<GTreeNode> = new Array<GTreeNode>();
        // for (var i: number = 0; i < cnt; i++) {
        //     var node: GTreeNode = this.getChildAt(s_list[i])._treeNode;
        //     ret.push(node);
        // }
        // return ret;
    }
    selectNode(node, scrollItToView) {
        var parentNode = node.parent;
        while (parentNode && parentNode != this._rootNode) {
            parentNode.expanded = true;
            parentNode = parentNode.parent;
        }
        if (!node._cell)
            return;
        this.addSelection(this.getChildIndex(node._cell), scrollItToView);
    }
    unselectNode(node) {
        if (!node._cell)
            return;
        this.removeSelection(this.getChildIndex(node._cell));
    }
    expandAll(folderNode) {
        if (!folderNode)
            folderNode = this._rootNode;
        folderNode.expanded = true;
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node.isFolder)
                this.expandAll(node);
        }
    }
    collapseAll(folderNode) {
        if (!folderNode)
            folderNode = this._rootNode;
        if (folderNode != this._rootNode)
            folderNode.expanded = false;
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node.isFolder)
                this.collapseAll(node);
        }
    }
    createCell(node) {
        throw new Error("TODO");
        //     var child: GComponent = <GComponent>this.getFromPool(node._resURL ? node._resURL : this.defaultItem);
        //     if (!child)
        //         throw new Error("cannot create tree node object.");
        //     child._treeNode = node;
        //     node._cell = child;
        //     var indentObj: GObject = child.getChild("indent");
        //     if (indentObj)
        //         indentObj.width = (node.level - 1) * this._indent;
        //     var cc: Controller;
        //     cc = child.getController("expanded");
        //     if (cc) {
        //         cc.on(Events.STATE_CHANGED, this, this.__expandedStateChanged);
        //         cc.selectedIndex = node.expanded ? 1 : 0;
        //     }
        //     cc = child.getController("leaf");
        //     if (cc)
        //         cc.selectedIndex = node.isFolder ? 0 : 1;
        //     if (node.isFolder)
        //         child.on(Laya.Event.MOUSE_DOWN, this, this.__cellMouseDown);
        //     if (this.treeNodeRender)
        //         this.treeNodeRender.runWith([node, child]);
        // }
        // public _afterInserted(node: GTreeNode): void {
        //     if (!node._cell)
        //         this.createCell(node);
        //     var index: number = this.getInsertIndexForNode(node);
        //     this.addChildAt(node._cell, index);
        //     if (this.treeNodeRender)
        //         this.treeNodeRender.runWith([node, node._cell]);
        //     if (node.isFolder && node.expanded)
        //         this.checkChildren(node, index);
    }
    getInsertIndexForNode(node) {
        var prevNode = node.getPrevSibling();
        if (!prevNode)
            prevNode = node.parent;
        var insertIndex = this.getChildIndex(prevNode._cell) + 1;
        var myLevel = node.level;
        var cnt = this.numChildren;
        for (var i = insertIndex; i < cnt; i++) {
            var testNode = this.getChildAt(i)._treeNode;
            if (testNode.level <= myLevel)
                break;
            insertIndex++;
        }
        return insertIndex;
    }
    _afterRemoved(node) {
        this.removeNode(node);
    }
    _afterExpanded(node) {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }
        if (this.treeNodeWillExpand != null)
            this.treeNodeWillExpand(node, true);
        if (!node._cell)
            return;
        if (this.treeNodeRender)
            this.treeNodeRender(node, node._cell);
        var cc = node._cell.getController("expanded");
        if (cc)
            cc.selectedIndex = 1;
        if (node._cell.parent)
            this.checkChildren(node, this.getChildIndex(node._cell));
    }
    _afterCollapsed(node) {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }
        if (this.treeNodeWillExpand)
            this.treeNodeWillExpand(node, false);
        if (!node._cell)
            return;
        if (this.treeNodeRender)
            this.treeNodeRender(node, node._cell);
        var cc = node._cell.getController("expanded");
        if (cc)
            cc.selectedIndex = 0;
        if (node._cell.parent)
            this.hideFolderNode(node);
    }
    _afterMoved(node) {
        var startIndex = this.getChildIndex(node._cell);
        var endIndex;
        if (node.isFolder)
            endIndex = this.getFolderEndIndex(startIndex, node.level);
        else
            endIndex = startIndex + 1;
        var insertIndex = this.getInsertIndexForNode(node);
        var i;
        var cnt = endIndex - startIndex;
        var obj;
        if (insertIndex < startIndex) {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex + i);
                this.setChildIndex(obj, insertIndex + i);
            }
        }
        else {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex);
                this.setChildIndex(obj, insertIndex);
            }
        }
    }
    getFolderEndIndex(startIndex, level) {
        var cnt = this.numChildren;
        for (var i = startIndex + 1; i < cnt; i++) {
            var node = this.getChildAt(i)._treeNode;
            if (node.level <= level)
                return i;
        }
        return cnt;
    }
    checkChildren(folderNode, index) {
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            index++;
            var node = folderNode.getChildAt(i);
            if (!node._cell)
                this.createCell(node);
            if (!node._cell.parent)
                this.addChildAt(node._cell, index);
            if (node.isFolder && node.expanded)
                index = this.checkChildren(node, index);
        }
        return index;
    }
    hideFolderNode(folderNode) {
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node._cell)
                this.removeChild(node._cell);
            if (node.isFolder && node.expanded)
                this.hideFolderNode(node);
        }
    }
    removeNode(node) {
        if (node._cell) {
            if (node._cell.parent)
                this.removeChild(node._cell);
            this.returnToPool(node._cell);
            node._cell._treeNode = null;
            node._cell = null;
        }
        if (node.isFolder) {
            var cnt = node.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node2 = node.getChildAt(i);
                this.removeNode(node2);
            }
        }
    }
    __cellMouseDown(evt) {
        throw new Error("TODO");
    }
    __expandedStateChanged(cc) {
        var node = cc.parent._treeNode;
        node.expanded = cc.selectedIndex == 1;
    }
    dispatchItemEvent(item, evt) {
        throw new Error("TODO");
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 9);
        this._indent = buffer.readInt();
        this._clickToExpand = buffer.readByte();
    }
    readItems(buffer) {
        var cnt;
        var i;
        var nextPos;
        var str;
        var isFolder;
        var lastNode;
        var level;
        var prevLevel = 0;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            str = buffer.readS();
            if (str == null) {
                str = this.defaultItem;
                if (!str) {
                    buffer.position = nextPos;
                    continue;
                }
            }
            isFolder = buffer.readBool();
            level = buffer.readByte();
            var node = new GTreeNode(isFolder, str);
            node.expanded = true;
            if (i == 0)
                this._rootNode.addChild(node);
            else {
                if (level > prevLevel)
                    lastNode.addChild(node);
                else if (level < prevLevel) {
                    for (var j = level; j <= prevLevel; j++)
                        lastNode = lastNode.parent;
                    lastNode.addChild(node);
                }
                else
                    lastNode.parent.addChild(node);
            }
            lastNode = node;
            prevLevel = level;
            this.setupItem(buffer, node.cell);
            buffer.position = nextPos;
        }
    }
}
new Array();

class Window extends GComponent {
    constructor() {
        super();
        this._requestingCmd = 0;
        this._uiSources = [];
        this.bringToFontOnClick = UIConfig.bringWindowToFrontOnClick;
        // this.displayObject.on(Phaser.GameObjects.Events.ADDED_TO_SCENE, this, this.__onShown);
        // this.displayObject.on(Phaser.GameObjects.Events.REMOVED_FROM_SCENE, this, this.__onHidden);
        // this.displayObject.on(Laya.Event.MOUSE_DOWN, this, this.__mouseDown);
    }
    addUISource(source) {
        this._uiSources.push(source);
    }
    set contentPane(val) {
        if (this._contentPane != val) {
            if (this._contentPane)
                this.removeChild(this._contentPane);
            this._contentPane = val;
            if (this._contentPane) {
                // this.addChild(this._contentPane);
                this.setSize(this._contentPane.width, this._contentPane.height);
                this._contentPane.addRelation(this, RelationType.Size);
                this._frame = (this._contentPane.getChild("frame"));
                if (this._frame) {
                    this.closeButton = this._frame.getChild("closeButton");
                    this.dragArea = this._frame.getChild("dragArea");
                    this.contentArea = this._frame.getChild("contentArea");
                }
            }
        }
    }
    get contentPane() {
        return this._contentPane;
    }
    get frame() {
        return this._frame;
    }
    get closeButton() {
        return this._closeButton;
    }
    set closeButton(value) {
        if (this._closeButton)
            this._closeButton.offClick(this.closeEventHandler);
        this._closeButton = value;
        if (this._closeButton)
            this._closeButton.onClick(this.closeEventHandler);
    }
    get dragArea() {
        return this._dragArea;
    }
    set dragArea(value) {
        if (this._dragArea != value) {
            if (this._dragArea) {
                this._dragArea.draggable = false;
                this._dragArea.off(Events.DRAG_START, this.__dragStart);
            }
            this._dragArea = value;
            if (this._dragArea) {
                if (this._dragArea instanceof GGraph)
                    this._dragArea.drawRect(0, null, null);
                this._dragArea.draggable = true;
                // this._dragArea.on(Events.DRAG_START, this, this.__dragStart);
            }
        }
    }
    get contentArea() {
        return this._contentArea;
    }
    set contentArea(value) {
        this._contentArea = value;
    }
    show() {
        // GRoot.inst.showWindow(this);
    }
    showOn(root) {
        // root.showWindow(this);
    }
    hide() {
        if (this.isShowing)
            this.doHideAnimation();
    }
    hideImmediately() {
        (this.parent instanceof GRoot) ? this.parent : null;
        // r.hideWindowImmediately(this);
    }
    centerOn(r, restraint) {
        this.setXY(Math.round((r.width - this.width) / 2), Math.round((r.height - this.height) / 2));
        if (restraint) {
            this.addRelation(r, RelationType.Center_Center);
            this.addRelation(r, RelationType.Middle_Middle);
        }
    }
    toggleStatus() {
        if (this.isTop)
            this.hide();
        else
            this.show();
    }
    get isShowing() {
        return this.parent != null;
    }
    get isTop() {
        return this.parent != null && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
    }
    get modal() {
        return this._modal;
    }
    set modal(val) {
        this._modal = val;
    }
    bringToFront() {
        // this.root.bringToFront(this);
    }
    showModalWait(requestingCmd) {
        if (requestingCmd != null)
            this._requestingCmd = requestingCmd;
        if (UIConfig.windowModalWaiting) {
            if (!this._modalWaitPane)
                this._modalWaitPane = UIPackage.createObjectFromURL(UIConfig.windowModalWaiting);
            this.layoutModalWaitPane();
            // this.addChild(this._modalWaitPane);
        }
    }
    layoutModalWaitPane() {
        if (this._contentArea) {
            var pt = this._frame.localToGlobal();
            pt = this.globalToLocal(pt.x, pt.y, pt);
            this._modalWaitPane.setXY(pt.x + this._contentArea.x, pt.y + this._contentArea.y);
            this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
        }
        else
            this._modalWaitPane.setSize(this.width, this.height);
    }
    closeModalWait(requestingCmd) {
        if (requestingCmd != null) {
            if (this._requestingCmd != requestingCmd)
                return false;
        }
        this._requestingCmd = 0;
        if (this._modalWaitPane && this._modalWaitPane.parent != null)
            this.removeChild(this._modalWaitPane);
        return true;
    }
    get modalWaiting() {
        return this._modalWaitPane && this._modalWaitPane.parent != null;
    }
    init() {
        if (this._inited || this._loading)
            return;
        if (this._uiSources.length > 0) {
            this._loading = false;
            var cnt = this._uiSources.length;
            for (var i = 0; i < cnt; i++) {
                var lib = this._uiSources[i];
                if (!lib.loaded) {
                    lib.load(this.__uiLoadComplete, this);
                    this._loading = true;
                }
            }
            if (!this._loading)
                this._init();
        }
        else
            this._init();
    }
    onInit() {
    }
    onShown() {
    }
    onHide() {
    }
    doShowAnimation() {
        this.onShown();
    }
    doHideAnimation() {
        this.hideImmediately();
    }
    __uiLoadComplete() {
        var cnt = this._uiSources.length;
        for (var i = 0; i < cnt; i++) {
            var lib = this._uiSources[i];
            if (!lib.loaded)
                return;
        }
        this._loading = false;
        this._init();
    }
    _init() {
        this._inited = true;
        this.onInit();
        if (this.isShowing)
            this.doShowAnimation();
    }
    dispose() {
        if (this.parent)
            this.hideImmediately();
        super.dispose();
    }
    closeEventHandler() {
        this.hide();
    }
    __onShown() {
        if (!this._inited)
            this.init();
        else
            this.doShowAnimation();
    }
    __onHidden() {
        this.closeModalWait();
        this.onHide();
    }
    __mouseDown() {
        if (this.isShowing && this.bringToFontOnClick)
            this.bringToFront();
    }
    // private __dragStart(evt: Laya.Event): void {
    __dragStart(evt) {
        // TODO
        throw new Error("TODO");
    }
}

class PopupMenu {
    constructor(resourceURL) {
        if (!resourceURL) {
            resourceURL = UIConfig.popupMenu;
            if (!resourceURL)
                throw "UIConfig.popupMenu not defined";
        }
        throw "TODO";
        // this._contentPane = UIPackage.createObjectFromURL(resourceURL).asCom;
        // this._contentPane.on(Laya.Event.DISPLAY, this, this.__addedToStage);
        // this._list = <GList>(this._contentPane.getChild("list"));
        // this._list.removeChildrenToPool();
        // this._list.addRelation(this._contentPane, RelationType.Width);
        // this._list.removeRelation(this._contentPane, RelationType.Height);
        // this._contentPane.addRelation(this._list, RelationType.Height);
        // this._list.on(Events.CLICK_ITEM, this, this.__clickItem);
    }
    dispose() {
        this._contentPane.dispose();
    }
    addItem(caption, handler) {
        throw new Error("TODO");
        // var item: GButton = this._list.addItemFromPool().asButton;
        // item.title = caption;
        // item.data = handler;
        // item.grayed = false;
        // var c: Controller = item.getController("checked");
        // if (c)
        //     c.selectedIndex = 0;
        // return item;
    }
    addItemAt(caption, index, handler) {
        throw new Error("TODO");
        // var item: GButton = this._list.getFromPool().asButton;
        // this._list.addChildAt(item, index);
        // item.title = caption;
        // item.data = handler;
        // item.grayed = false;
        // var c: Controller = item.getController("checked");
        // if (c)
        //     c.selectedIndex = 0;
        // return item;
    }
    addSeperator() {
        throw new Error("TODO");
        // if (UIConfig.popupMenu_seperator == null)
        //     throw "UIConfig.popupMenu_seperator not defined";
        // this.list.addItemFromPool(UIConfig.popupMenu_seperator);
    }
    getItemName(index) {
        var item = this._list.getChildAt(index);
        return item.name;
    }
    setItemText(name, caption) {
        var item = this._list.getChild(name);
        item.title = caption;
    }
    setItemVisible(name, visible) {
        var item = this._list.getChild(name);
        if (item.visible != visible) {
            item.visible = visible;
            this._list.setBoundsChangedFlag();
        }
    }
    setItemGrayed(name, grayed) {
        var item = this._list.getChild(name);
        item.grayed = grayed;
    }
    setItemCheckable(name, checkable) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c) {
            if (checkable) {
                if (c.selectedIndex == 0)
                    c.selectedIndex = 1;
            }
            else
                c.selectedIndex = 0;
        }
    }
    setItemChecked(name, checked) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c)
            c.selectedIndex = checked ? 2 : 1;
    }
    isItemChecked(name) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c)
            return c.selectedIndex == 2;
        else
            return false;
    }
    removeItem(name) {
        throw new Error("TODO");
        // var item: GObject = this._list.getChild(name);
        // if (item) {
        //     var index: number = this._list.getChildIndex(item);
        //     this._list.removeChildToPoolAt(index);
        //     return true;
        // }
        // else
        //     return false;
    }
    clearItems() {
        throw new Error("TODO");
        // this._list.removeChildrenToPool();
    }
    get itemCount() {
        return this._list.numChildren;
    }
    get contentPane() {
        return this._contentPane;
    }
    get list() {
        return this._list;
    }
    show(target = null, dir) {
        throw "TODO";
        // var r: GRoot = target != null ? target.root : GRoot.inst;
        // r.showPopup(this.contentPane, (target instanceof GRoot) ? null : target, dir);
    }
    __clickItem(itemObject) {
        throw "TODO";
        // Laya.timer.once(100, this, this.__clickItem2, [itemObject]);
    }
    __clickItem2(itemObject) {
        throw "TODO";
        // if (!(itemObject instanceof GButton))
        //     return;
        // if (itemObject.grayed) {
        //     this._list.selectedIndex = -1;
        //     return;
        // }
        // var c: Controller = itemObject.asCom.getController("checked");
        // if (c && c.selectedIndex != 0) {
        //     if (c.selectedIndex == 1)
        //         c.selectedIndex = 2;
        //     else
        //         c.selectedIndex = 1;
        // }
        // var r: GRoot = <GRoot>(this._contentPane.parent);
        // r.hidePopup(this.contentPane);
        // if (itemObject.data != null) {
        //     itemObject.data();
        // }
    }
    __addedToStage() {
        throw new Error("TODO");
        // this._list.selectedIndex = -1;
        // this._list.resizeToFit(100000, 10);
    }
}

class UIObjectFactory {
    constructor() {
    }
    static setExtension(url, type) {
        if (url == null)
            throw "Invaild url: " + url;
        var pi = UIPackage.getItemByURL(url);
        if (pi)
            pi.extensionType = type;
        UIObjectFactory.extensions[url] = type;
    }
    static setPackageItemExtension(url, type) {
        UIObjectFactory.setExtension(url, type);
    }
    static setLoaderExtension(type) {
        UIObjectFactory.loaderType = type;
    }
    static resolvePackageItemExtension(pi) {
        var extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
        if (!extensionType)
            extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
        if (extensionType)
            pi.extensionType = extensionType;
    }
    static newObject(type, userClass) {
        var obj;
        if (typeof type === 'number') {
            switch (type) {
                case ObjectType.Image:
                    return new GImage();
                case ObjectType.MovieClip:
                // return new GMovieClip();
                case ObjectType.Component:
                    return new GComponent();
                case ObjectType.Text:
                // return new GBasicTextField();
                case ObjectType.RichText:
                // return new GRichTextField();
                case ObjectType.InputText:
                // return new GTextInput();
                case ObjectType.Group:
                    return new GGroup();
                case ObjectType.List:
                    return new GList();
                case ObjectType.Graph:
                // return new GGraph();
                case ObjectType.Loader:
                    // if (UIObjectFactory.loaderType)
                    // return new UIObjectFactory.loaderType();
                    // else
                    // return new GLoader();
                    return;
                case ObjectType.Button:
                    return new GButton();
                case ObjectType.Label:
                    return new GLabel();
                case ObjectType.ProgressBar:
                    return new GProgressBar();
                case ObjectType.Slider:
                    return new GSlider();
                case ObjectType.ScrollBar:
                    return new GScrollBar();
                case ObjectType.ComboBox:
                    return new GComboBox();
                case ObjectType.Tree:
                    return new GTree();
                default:
                    return null;
            }
        }
        else {
            if (type.type == PackageItemType.Component) {
                if (userClass)
                    obj = new userClass();
                else if (type.extensionType)
                    obj = new type.extensionType();
                else
                    obj = UIObjectFactory.newObject(type.objectType);
            }
            else
                obj = UIObjectFactory.newObject(type.objectType);
            if (obj)
                obj.packageItem = type;
        }
        return obj;
    }
}
UIObjectFactory.extensions = {};

class DragDropManager {
    constructor() {
        throw new Error("TODO");
        // this._agent = new GLoader();
        // this._agent.draggable = true;
        // this._agent.touchable = false;////important
        // this._agent.setSize(100, 100);
        // this._agent.setPivot(0.5, 0.5, true);
        // this._agent.align = "center";
        // this._agent.verticalAlign = "middle";
        // this._agent.sortingOrder = 1000000;
        // this._agent.on(Events.DRAG_END, this, this.__dragEnd);
    }
    static get inst() {
        if (!DragDropManager._inst)
            DragDropManager._inst = new DragDropManager();
        return DragDropManager._inst;
    }
    get dragAgent() {
        return this._agent;
    }
    get dragging() {
        return this._agent.parent != null;
    }
    startDrag(source, icon, sourceData, touchID) {
        if (this._agent.parent)
            return;
        throw new Error("TODO");
        // this._sourceData = sourceData;
        // this._agent.url = icon;
        // GRoot.inst.addChild(this._agent);
        // var pt: Laya.Point = GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._agent.setXY(pt.x, pt.y);
        // this._agent.startDrag(touchID);
    }
    cancel() {
        throw new Error("TODO");
        // if (this._agent.parent) {
        //     this._agent.stopDrag();
        //     GRoot.inst.removeChild(this._agent);
        //     this._sourceData = null;
        // }
    }
    __dragEnd(evt) {
        throw new Error("TODO");
        // if (!this._agent.parent) //cancelled
        //     return;
        // GRoot.inst.removeChild(this._agent);
        // var sourceData: any = this._sourceData;
        // this._sourceData = null;
        // var obj: GObject = GObject.cast(evt.target);
        // while (obj) {
        //     if (obj.displayObject.hasListener(Events.DROP)) {
        //         obj.requestFocus();
        //         obj.displayObject.event(Events.DROP, [sourceData, Events.createEvent(Events.DROP, obj.displayObject, evt)]);
        //         return;
        //     }
        //     obj = obj.parent;
        // }
    }
}

class AsyncOperation {
    constructor() {
        this._itemList = new Array();
        this._objectPool = [];
    }
    createObject(pkgName, resName) {
        var pkg = UIPackage.getByName(pkgName);
        if (pkg) {
            var pi = pkg.getItemByName(resName);
            if (!pi)
                throw new Error("resource not found: " + resName);
            this.internalCreateObject(pi);
        }
        else
            throw new Error("package not found: " + pkgName);
    }
    createObjectFromURL(url) {
        var pi = UIPackage.getItemByURL(url);
        if (pi)
            this.internalCreateObject(pi);
        else
            throw new Error("resource not found: " + url);
    }
    cancel() {
        // Laya.timer.clear(this, this.run);
        // this._itemList.length = 0;
        // if (this._objectPool.length > 0) {
        //     var cnt: number = this._objectPool.length;
        //     for (var i: number = 0; i < cnt; i++) {
        //         this._objectPool[i].dispose();
        //     }
        //     this._objectPool.length = 0;
        // }
    }
    internalCreateObject(item) {
        throw new Error("TODO");
        // this._itemList.length = 0;
        // this._objectPool.length = 0;
        // var di: DisplayListItem = { pi: item, type: item.objectType };
        // di.childCount = this.collectComponentChildren(item);
        // this._itemList.push(di);
        // this._index = 0;
        // Laya.timer.frameLoop(1, this, this.run);
    }
    collectComponentChildren(item) {
        var buffer = item.rawData;
        buffer.seek(0, 2);
        var di;
        var pi;
        var i;
        var dataLen;
        var curPos;
        var pkg;
        var dcnt = buffer.readShort();
        for (i = 0; i < dcnt; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.position;
            buffer.seek(curPos, 0);
            var type = buffer.readByte();
            var src = buffer.readS();
            var pkgId = buffer.readS();
            buffer.position = curPos;
            if (src != null) {
                if (pkgId != null)
                    pkg = UIPackage.getById(pkgId);
                else
                    pkg = item.owner;
                pi = pkg ? pkg.getItemById(src) : null;
                di = { pi: pi, type: type };
                if (pi && pi.type == PackageItemType.Component)
                    di.childCount = this.collectComponentChildren(pi);
            }
            else {
                di = { type: type };
                if (type == ObjectType.List) //list
                    di.listItemCount = this.collectListChildren(buffer);
            }
            this._itemList.push(di);
            buffer.position = curPos + dataLen;
        }
        return dcnt;
    }
    collectListChildren(buffer) {
        buffer.seek(buffer.position, 8);
        var listItemCount = 0;
        var i;
        var nextPos;
        var url;
        var pi;
        var di;
        var defaultItem = buffer.readS();
        var itemCount = buffer.readShort();
        for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            url = buffer.readS();
            if (url == null)
                url = defaultItem;
            if (url) {
                pi = UIPackage.getItemByURL(url);
                if (pi) {
                    di = { pi: pi, type: pi.objectType };
                    if (pi.type == PackageItemType.Component)
                        di.childCount = this.collectComponentChildren(pi);
                    this._itemList.push(di);
                    listItemCount++;
                }
            }
            buffer.position = nextPos;
        }
        return listItemCount;
    }
    run() {
        throw new Error("TODO");
        // var obj: GObject;
        // var di: DisplayListItem;
        // var poolStart: number;
        // var k: number;
        // var t: number = Laya.Browser.now();
        // var frameTime: number = UIConfig.frameTimeForAsyncUIConstruction;
        // var totalItems: number = this._itemList.length;
        // while (this._index < totalItems) {
        //     di = this._itemList[this._index];
        //     if (di.pi) {
        //         obj = UIObjectFactory.newObject(di.pi);
        //         this._objectPool.push(obj);
        //         UIPackage._constructing++;
        //         if (di.pi.type == PackageItemType.Component) {
        //             poolStart = this._objectPool.length - di.childCount - 1;
        //             (<GComponent>obj).constructFromResource2(this._objectPool, poolStart);
        //             this._objectPool.splice(poolStart, di.childCount);
        //         }
        //         else {
        //             obj.constructFromResource();
        //         }
        //         UIPackage._constructing--;
        //     }
        //     else {
        //         obj = UIObjectFactory.newObject(di.type);
        //         this._objectPool.push(obj);
        //         if (di.type == ObjectType.List && di.listItemCount > 0) {
        //             poolStart = this._objectPool.length - di.listItemCount - 1;
        //             for (k = 0; k < di.listItemCount; k++) //把他们都放到pool里，这样GList在创建时就不需要创建对象了
        //                 (<GList>obj).itemPool.returnObject(this._objectPool[k + poolStart]);
        //             this._objectPool.splice(poolStart, di.listItemCount);
        //         }
        //     }
        //     this._index++;
        //     if ((this._index % 5 == 0) && Laya.Browser.now() - t >= frameTime)
        //         return;
        // }
        // Laya.timer.clear(this, this.run);
        // var result: GObject = this._objectPool[0];
        // this._itemList.length = 0;
        // this._objectPool.length = 0;
        // if (this.callback != null)
        //     this.callback(result);
    }
}

class MovieClip extends Image {
    constructor() {
        super(undefined);
        this.interval = 0;
        this.repeatDelay = 0;
        this.timeScale = 1;
        this._playing = true;
        this._frameCount = 0;
        this._frame = 0;
        this._start = 0;
        this._end = 0;
        this._times = 0;
        this._endAt = 0;
        this._status = 0; //0-none, 1-next loop, 2-ending, 3-ended
        this._frameElapsed = 0; //当前帧延迟
        this._repeatedCount = 0;
        throw new Error("TODO");
        // this.mouseEnabled = false;
        // this.setPlaySettings();
        // this.on(Laya.Event.DISPLAY, this, this.__addToStage);
        // this.on(Laya.Event.UNDISPLAY, this, this.__removeFromStage);
    }
    get frames() {
        return this._frames;
    }
    set frames(value) {
        this._frames = value;
        this._scaleByTile = false;
        this._scale9Grid = null;
        if (this._frames) {
            this._frameCount = this._frames.length;
            if (this._end == -1 || this._end > this._frameCount - 1)
                this._end = this._frameCount - 1;
            if (this._endAt == -1 || this._endAt > this._frameCount - 1)
                this._endAt = this._frameCount - 1;
            if (this._frame < 0 || this._frame > this._frameCount - 1)
                this._frame = this._frameCount - 1;
            this._frameElapsed = 0;
            this._repeatedCount = 0;
            this._reversed = false;
        }
        else
            this._frameCount = 0;
        this.drawFrame();
        this.checkTimer();
    }
    get frameCount() {
        return this._frameCount;
    }
    get frame() {
        return this._frame;
    }
    set frame(value) {
        if (this._frame != value) {
            if (this._frames && value >= this._frameCount)
                value = this._frameCount - 1;
            this._frame = value;
            this._frameElapsed = 0;
            this.drawFrame();
        }
    }
    get playing() {
        return this._playing;
    }
    set playing(value) {
        if (this._playing != value) {
            this._playing = value;
            this.checkTimer();
        }
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    rewind() {
        this._frame = 0;
        this._frameElapsed = 0;
        this._reversed = false;
        this._repeatedCount = 0;
        this.drawFrame();
    }
    syncStatus(anotherMc) {
        this._frame = anotherMc._frame;
        this._frameElapsed = anotherMc._frameElapsed;
        this._reversed = anotherMc._reversed;
        this._repeatedCount = anotherMc._repeatedCount;
        this.drawFrame();
    }
    advance(timeInMiniseconds) {
        var beginFrame = this._frame;
        var beginReversed = this._reversed;
        var backupTime = timeInMiniseconds;
        while (true) {
            var tt = this.interval + this._frames[this._frame].addDelay;
            if (this._frame == 0 && this._repeatedCount > 0)
                tt += this.repeatDelay;
            if (timeInMiniseconds < tt) {
                this._frameElapsed = 0;
                break;
            }
            timeInMiniseconds -= tt;
            if (this.swing) {
                if (this._reversed) {
                    this._frame--;
                    if (this._frame <= 0) {
                        this._frame = 0;
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
                else {
                    this._frame++;
                    if (this._frame > this._frameCount - 1) {
                        this._frame = Math.max(0, this._frameCount - 2);
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
            }
            else {
                this._frame++;
                if (this._frame > this._frameCount - 1) {
                    this._frame = 0;
                    this._repeatedCount++;
                }
            }
            if (this._frame == beginFrame && this._reversed == beginReversed) //走了一轮了
             {
                var roundTime = backupTime - timeInMiniseconds; //这就是一轮需要的时间
                timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime; //跳过
            }
        }
        this.drawFrame();
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    setPlaySettings(start, end, times, endAt, endHandler) {
        if (start == undefined)
            start = 0;
        if (end == undefined)
            end = -1;
        if (times == undefined)
            times = 0;
        if (endAt == undefined)
            endAt = -1;
        this._start = start;
        this._end = end;
        if (this._end == -1 || this._end > this._frameCount - 1)
            this._end = this._frameCount - 1;
        this._times = times;
        this._endAt = endAt;
        if (this._endAt == -1)
            this._endAt = this._end;
        this._status = 0;
        this._endHandler = endHandler;
        this.frame = start;
    }
    update() {
        throw new Error("TODO");
        // if (!this._playing || this._frameCount == 0 || this._status == 3)
        //     return;
        // var dt: number = Laya.timer.delta;
        // if (dt > 100)
        //     dt = 100;
        // if (this.timeScale != 1)
        //     dt *= this.timeScale;
        // this._frameElapsed += dt;
        // var tt: number = this.interval + this._frames[this._frame].addDelay;
        // if (this._frame == 0 && this._repeatedCount > 0)
        //     tt += this.repeatDelay;
        // if (this._frameElapsed < tt)
        //     return;
        // this._frameElapsed -= tt;
        // if (this._frameElapsed > this.interval)
        //     this._frameElapsed = this.interval;
        // if (this.swing) {
        //     if (this._reversed) {
        //         this._frame--;
        //         if (this._frame <= 0) {
        //             this._frame = 0;
        //             this._repeatedCount++;
        //             this._reversed = !this._reversed;
        //         }
        //     }
        //     else {
        //         this._frame++;
        //         if (this._frame > this._frameCount - 1) {
        //             this._frame = Math.max(0, this._frameCount - 2);
        //             this._repeatedCount++;
        //             this._reversed = !this._reversed;
        //         }
        //     }
        // }
        // else {
        //     this._frame++;
        //     if (this._frame > this._frameCount - 1) {
        //         this._frame = 0;
        //         this._repeatedCount++;
        //     }
        // }
        // if (this._status == 1) //new loop
        // {
        //     this._frame = this._start;
        //     this._frameElapsed = 0;
        //     this._status = 0;
        // }
        // else if (this._status == 2) //ending
        // {
        //     this._frame = this._endAt;
        //     this._frameElapsed = 0;
        //     this._status = 3; //ended
        //     //play end
        //     if (this._endHandler) {
        //         var handler = this._endHandler;
        //         this._endHandler = null;
        //         handler();
        //     }
        // }
        // else {
        //     if (this._frame == this._end) {
        //         if (this._times > 0) {
        //             this._times--;
        //             if (this._times == 0)
        //                 this._status = 2;  //ending
        //             else
        //                 this._status = 1; //new loop
        //         }
        //         else {
        //             this._status = 1; //new loop
        //         }
        //     }
        // }
        // this.drawFrame();
    }
    drawFrame() {
        if (this._frameCount > 0 && this._frame < this._frames.length) {
            var frame = this._frames[this._frame];
            this.texture = frame.texture;
        }
        else
            this.texture = null;
        this.rebuild();
    }
    checkTimer() {
        throw new Error("TODO");
        // if (this._playing && this._frameCount > 0 && this.stage != null)
        //     Laya.timer.frameLoop(1, this, this.update);
        // else
        //     Laya.timer.clear(this, this.update);
    }
    __addToStage() {
        throw new Error("TODO");
        // if (this._playing && this._frameCount > 0)
        //     Laya.timer.frameLoop(1, this, this.update);
    }
    __removeFromStage() {
        throw new Error("TODO");
        // Laya.timer.clear(this, this.update);
    }
}

class Event {
}

export { AlignType, AsyncOperation, AutoSizeType, ButtonMode, ByteBuffer, ChildrenRenderOrder, Controller, DragDropManager, EaseType, Event, FillMethod, FillOrigin, FillOrigin90, FlipType, GButton, GComboBox, GComponent, GGraph, GGroup, GImage, GLabel, GList, GLoader, GMovieClip, GObject, GObjectPool, GProgressBar, GRichTextField, GRoot, GScrollBar, GSlider, GTextField, GTextInput, GTree, GTreeNode, GTween, GTweener, GroupLayoutType, Image, ListLayoutType, ListSelectionMode, LoaderFillType, MovieClip, ObjectPropID, ObjectType, OverflowType, PackageItem, PackageItemType, PopupDirection, PopupMenu, ProgressTitleType, RelationType, ScrollBarDisplayType, ScrollPane, ScrollType, ToolSet, Transition, TranslationHelper, UBBParser, UIConfig, UIObjectFactory, UIPackage, VertAlignType, Window };
//# sourceMappingURL=fairygui.esm.js.map
