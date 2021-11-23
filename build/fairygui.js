(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('phaser3')) :
    typeof define === 'function' && define.amd ? define(['exports', 'phaser3'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fgui = {}));
}(this, (function (exports) { 'use strict';

    exports.ButtonMode = void 0;
    (function (ButtonMode) {
        ButtonMode[ButtonMode["Common"] = 0] = "Common";
        ButtonMode[ButtonMode["Check"] = 1] = "Check";
        ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
    })(exports.ButtonMode || (exports.ButtonMode = {}));
    exports.AutoSizeType = void 0;
    (function (AutoSizeType) {
        AutoSizeType[AutoSizeType["None"] = 0] = "None";
        AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
        AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
    })(exports.AutoSizeType || (exports.AutoSizeType = {}));
    exports.AlignType = void 0;
    (function (AlignType) {
        AlignType[AlignType["Left"] = 0] = "Left";
        AlignType[AlignType["Center"] = 1] = "Center";
        AlignType[AlignType["Right"] = 2] = "Right";
    })(exports.AlignType || (exports.AlignType = {}));
    exports.VertAlignType = void 0;
    (function (VertAlignType) {
        VertAlignType[VertAlignType["Top"] = 0] = "Top";
        VertAlignType[VertAlignType["Middle"] = 1] = "Middle";
        VertAlignType[VertAlignType["Bottom"] = 2] = "Bottom";
    })(exports.VertAlignType || (exports.VertAlignType = {}));
    exports.LoaderFillType = void 0;
    (function (LoaderFillType) {
        LoaderFillType[LoaderFillType["None"] = 0] = "None";
        LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
        LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
        LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
        LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
        LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
    })(exports.LoaderFillType || (exports.LoaderFillType = {}));
    exports.ListLayoutType = void 0;
    (function (ListLayoutType) {
        ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
        ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
        ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
        ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
        ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
    })(exports.ListLayoutType || (exports.ListLayoutType = {}));
    exports.ListSelectionMode = void 0;
    (function (ListSelectionMode) {
        ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
        ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
        ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
        ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
    })(exports.ListSelectionMode || (exports.ListSelectionMode = {}));
    exports.OverflowType = void 0;
    (function (OverflowType) {
        OverflowType[OverflowType["Visible"] = 0] = "Visible";
        OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
        OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
    })(exports.OverflowType || (exports.OverflowType = {}));
    exports.PackageItemType = void 0;
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
    })(exports.PackageItemType || (exports.PackageItemType = {}));
    exports.ObjectType = void 0;
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
    })(exports.ObjectType || (exports.ObjectType = {}));
    exports.ProgressTitleType = void 0;
    (function (ProgressTitleType) {
        ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
        ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
        ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
        ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
    })(exports.ProgressTitleType || (exports.ProgressTitleType = {}));
    exports.ScrollBarDisplayType = void 0;
    (function (ScrollBarDisplayType) {
        ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
        ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
        ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
        ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
    })(exports.ScrollBarDisplayType || (exports.ScrollBarDisplayType = {}));
    exports.ScrollType = void 0;
    (function (ScrollType) {
        ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
        ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
        ScrollType[ScrollType["Both"] = 2] = "Both";
    })(exports.ScrollType || (exports.ScrollType = {}));
    exports.FlipType = void 0;
    (function (FlipType) {
        FlipType[FlipType["None"] = 0] = "None";
        FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
        FlipType[FlipType["Vertical"] = 2] = "Vertical";
        FlipType[FlipType["Both"] = 3] = "Both";
    })(exports.FlipType || (exports.FlipType = {}));
    exports.ChildrenRenderOrder = void 0;
    (function (ChildrenRenderOrder) {
        ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
        ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
        ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
    })(exports.ChildrenRenderOrder || (exports.ChildrenRenderOrder = {}));
    exports.GroupLayoutType = void 0;
    (function (GroupLayoutType) {
        GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
        GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
        GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
    })(exports.GroupLayoutType || (exports.GroupLayoutType = {}));
    exports.PopupDirection = void 0;
    (function (PopupDirection) {
        PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
        PopupDirection[PopupDirection["Up"] = 1] = "Up";
        PopupDirection[PopupDirection["Down"] = 2] = "Down";
    })(exports.PopupDirection || (exports.PopupDirection = {}));
    exports.RelationType = void 0;
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
    })(exports.RelationType || (exports.RelationType = {}));
    exports.FillMethod = void 0;
    (function (FillMethod) {
        FillMethod[FillMethod["None"] = 0] = "None";
        FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
        FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
        FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
        FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
        FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
    })(exports.FillMethod || (exports.FillMethod = {}));
    exports.FillOrigin = void 0;
    (function (FillOrigin) {
        FillOrigin[FillOrigin["Top"] = 0] = "Top";
        FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
        FillOrigin[FillOrigin["Left"] = 2] = "Left";
        FillOrigin[FillOrigin["Right"] = 3] = "Right";
        FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
        FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
        FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
    })(exports.FillOrigin || (exports.FillOrigin = {}));
    exports.FillOrigin90 = void 0;
    (function (FillOrigin90) {
        FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
        FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
        FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
    })(exports.FillOrigin90 || (exports.FillOrigin90 = {}));
    exports.ObjectPropID = void 0;
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
    })(exports.ObjectPropID || (exports.ObjectPropID = {}));

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

    /**
     * 贴图颜色滤镜 只适用于texture
     */
    class ColorShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
        constructor(game) {
            super({
                game,
                fragShader: `
            precision mediump float;
            
            uniform sampler2D uMainSampler[%count%];
            uniform float r;
            uniform float g;
            uniform float b;
            uniform float a;
            
            varying vec2 outTexCoord;
            varying float outTexId;
            varying vec4 outTint;
            varying vec2 fragCoord;
            
            void main()
            {
                vec4 texture;
            
                %forloop%
            
                gl_FragColor = texture;
                gl_FragColor.r = r * gl_FragColor.r;
                gl_FragColor.g = g * gl_FragColor.g;
                gl_FragColor.b = b * gl_FragColor.b;
                gl_FragColor.a = a * gl_FragColor.a;
            }
            `,
                // @ts-ignore
                uniforms: [
                    'uProjectionMatrix',
                    'uMainSampler',
                    'r',
                    "g",
                    "b",
                    "a"
                ]
            });
            this.renderBoo = false;
            this._a = 0;
            this._b = 0;
            this._g = 0;
            this._r = 0;
            this.renderBoo = false;
        }
        onPreRender() {
            if (this.renderBoo)
                return;
            this.renderBoo = true;
            this.set1f("r", this._r);
            this.set1f("g", this._g);
            this.set1f("b", this._b);
            this.set1f("a", this._a);
        }
        set r(value) {
            this._r = value;
            this.renderBoo = false;
        }
        set g(value) {
            this._g = value;
            this.renderBoo = false;
        }
        set b(value) {
            this._b = value;
            this.renderBoo = false;
        }
        set a(value) {
            this._a = value;
            this.renderBoo = false;
        }
    }

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
        // color 默认是十六进制传入
        static setColorFilter(obj, color) {
            // TODO
            var tp = typeof (color);
            if (tp == "boolean") //gray
             {
                if (tp) {
                    color = "#C0C0C0";
                }
                else {
                    // 传入false，则表示不是灰色，后续操作直接return
                    return;
                }
            }
            // @ts-ignore
            const rgbStr = ToolSet.colorRgb(color);
            const rgbList = rgbStr.substring(4, rgbStr.lastIndexOf(")")).split(",");
            const renderer = GRoot.inst.scene.renderer;
            let colorPipeLine = renderer.pipelines.get(ToolSet.Color);
            if (!colorPipeLine) {
                // @ts-ignore
                colorPipeLine = renderer.pipelines.add(ToolSet.Color, new ColorShaderPipeline(GRoot.inst.scene.game));
            }
            colorPipeLine.r = parseInt(rgbList[0]) / 255;
            colorPipeLine.g = parseInt(rgbList[1]) / 255;
            colorPipeLine.b = parseInt(rgbList[2]) / 255;
            if (obj instanceof Image && obj.list && obj.list.length > 0)
                obj.list[0].setPipeline(colorPipeLine);
            // if (obj instanceof Phaser.GameObjects.Image || obj instanceof Phaser.GameObjects.Text) {
            //     (<any>obj).setTint(color);
            // }
            // console.log("todo color filter");
            // throw new Error("TODO");
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
        /**
         * rgb值转换成十六进制
         * @param rgbStr
         * @returns
         */
        static colorHex(rgbStr) {
            //十六进制颜色值的正则表达式
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 如果是rgb颜色表示
            if (/^(rgb|RGB)/.test(rgbStr)) {
                var aColor = rgbStr.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                var strHex = "#";
                for (var i = 0; i < aColor.length; i++) {
                    var hex = Number(aColor[i]).toString(16);
                    if (hex.length < 2) {
                        hex = '0' + hex;
                    }
                    strHex += hex;
                }
                if (strHex.length !== 7) {
                    strHex = rgbStr;
                }
                return strHex;
            }
            else if (reg.test(rgbStr)) {
                var aNum = rgbStr.replace(/#/, "").split("");
                if (aNum.length === 6) {
                    return rgbStr;
                }
                else if (aNum.length === 3) {
                    var numHex = "#";
                    for (var i = 0; i < aNum.length; i += 1) {
                        numHex += (aNum[i] + aNum[i]);
                    }
                    return numHex;
                }
            }
            return rgbStr;
        }
        /**
         * 十六进制转换成rgb值
         * @param colorStr
         * @returns
         */
        static colorRgb(colorStr) {
            var sColor = colorStr.toLowerCase();
            //十六进制颜色值的正则表达式
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 如果是16进制颜色
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值
                var sColorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
                }
                return "RGB(" + sColorChange.join(",") + ")";
            }
            return sColor;
        }
        ;
    }
    //
    ToolSet.Color = "color";
    new ColorMatrix();

    exports.CurveType = void 0;
    (function (CurveType) {
        CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
        CurveType[CurveType["Bezier"] = 1] = "Bezier";
        CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
        CurveType[CurveType["Straight"] = 3] = "Straight";
    })(exports.CurveType || (exports.CurveType = {}));
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
            pt.curveType = exports.CurveType.Bezier;
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
            pt.curveType = exports.CurveType.CubicBezier;
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
            if (prev.curveType == exports.CurveType.CRSpline)
                splinePoints.push(new Phaser.Geom.Point(prev.x, prev.y));
            for (var i = 1; i < cnt; i++) {
                var current = points[i];
                if (prev.curveType != exports.CurveType.CRSpline) {
                    var seg = {};
                    seg.type = prev.curveType;
                    seg.ptStart = this._points.length;
                    if (prev.curveType == exports.CurveType.Straight) {
                        seg.ptCount = 2;
                        this._points.push(new Phaser.Geom.Point(prev.x, prev.y));
                        this._points.push(new Phaser.Geom.Point(current.x, current.y));
                    }
                    else if (prev.curveType == exports.CurveType.Bezier) {
                        seg.ptCount = 3;
                        this._points.push(new Phaser.Geom.Point(prev.x, prev.y));
                        this._points.push(new Phaser.Geom.Point(current.x, current.y));
                        this._points.push(new Phaser.Geom.Point(prev.control1_x, prev.control1_y));
                    }
                    else if (prev.curveType == exports.CurveType.CubicBezier) {
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
                if (current.curveType != exports.CurveType.CRSpline) {
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
            seg.type = exports.CurveType.CRSpline;
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
                if (seg.type == exports.CurveType.Straight) {
                    result.x = ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                    result.y = ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    return result;
                }
                else if (seg.type == exports.CurveType.Bezier || seg.type == exports.CurveType.CubicBezier)
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
                    if (seg.type == exports.CurveType.Straight) {
                        result.x = ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                        result.y = ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    }
                    else if (seg.type == exports.CurveType.Bezier || seg.type == exports.CurveType.CubicBezier)
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
            if (seg.type == exports.CurveType.Straight) {
                points.push(new Phaser.Geom.Point(ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
                points.push(new Phaser.Geom.Point(ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
            }
            else {
                var func;
                if (seg.type == exports.CurveType.Bezier || seg.type == exports.CurveType.CubicBezier)
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

    class Utils {
        static toHexColor(color) {
            if (color < 0 || isNaN(color))
                return null;
            var str = color.toString(16);
            while (str.length < 6)
                str = "0" + str;
            return "#" + str;
        }
        /**
         * 必须是16进制的颜色值规范 “#xxxxxx”
         * @param color
         * @returns
         */
        static toNumColor(color) {
            return parseInt(color.replace(/^#/, ''), 16);
        }
        /**
        * 角度转弧度。
        * @param	angle 角度值。
        * @return	返回弧度值。
        */
        static toRadian(angle) {
            return angle * Utils._pi2;
        }
    }
    /**@private */
    Utils._gid = 1;
    /**@private */
    Utils._pi = 180 / Math.PI;
    /**@private */
    Utils._pi2 = Math.PI / 180;
    Utils.FPSTarget = 60;
    /**@private */
    Utils._extReg = /\.(\w+)\??/g;

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
            if (!_inited) {
                const _timeDelta = Utils.FPSTarget;
                const _updateTweenEvent = { delay: _timeDelta, callback: TweenManager.update, callbackScope: this, loop: true };
                if (!TweenManager.updateTween)
                    GRoot.inst.scene.time.addEvent(_updateTweenEvent);
                // Laya.timer.frameLoop(1, null, TweenManager.update);
                _inited = true;
            }
            var tweener;
            var cnt = _tweenerPool.length;
            if (cnt > 0) {
                tweener = _tweenerPool.pop();
            }
            else
                tweener = new GTweener();
            tweener._init();
            _activeTweens[_totalActiveTweens++] = tweener;
            return tweener;
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
            var dt = Utils.FPSTarget / 1000;
            var cnt = _totalActiveTweens;
            var freePosStart = -1;
            for (var i = 0; i < cnt; i++) {
                var tweener = _activeTweens[i];
                if (tweener == null) {
                    if (freePosStart == -1)
                        freePosStart = i;
                }
                else if (tweener._killed) {
                    tweener._reset();
                    _tweenerPool.push(tweener);
                    _activeTweens[i] = null;
                    if (freePosStart == -1)
                        freePosStart = i;
                }
                else {
                    if ((tweener._target instanceof GObject) && tweener._target.isDisposed)
                        tweener._killed = true;
                    else if (!tweener._paused)
                        tweener._update(dt);
                    if (freePosStart != -1) {
                        _activeTweens[freePosStart] = tweener;
                        _activeTweens[i] = null;
                        freePosStart++;
                    }
                }
            }
            if (freePosStart >= 0) {
                if (_totalActiveTweens != cnt) //new tweens added
                 {
                    var j = cnt;
                    cnt = _totalActiveTweens - cnt;
                    for (i = 0; i < cnt; i++)
                        _activeTweens[freePosStart++] = _activeTweens[j++];
                }
                _totalActiveTweens = freePosStart;
            }
        }
    }
    var _activeTweens = [];
    var _tweenerPool = [];
    var _totalActiveTweens = 0;
    var _inited = false;

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

    /**
     * 与controller关联，eg：一张按钮中的图片可在控制器中不同帧中表现不同
     */
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
        constructor() {
            super(...arguments);
            this._displayLockToken = 0;
        }
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
    UIConfig.modalLayerColor = "rgba(240,255,255,0.8)";
    UIConfig.buttonSoundVolumeScale = 1;
    //Scrolling step in pixels
    UIConfig.defaultScrollStep = 25;
    //Deceleration ratio of scrollpane when its in touch dragging.
    UIConfig.defaultScrollDecelerationRate = 0.967;
    //Default scrollbar display mode. Recommened visible for Desktop and Auto for mobile.
    UIConfig.defaultScrollBarDisplay = exports.ScrollBarDisplayType.Visible;
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
    DisplayObjectEvent.PULL_DOWN_RELEASE = "fui_pull_down_release";
    DisplayObjectEvent.PULL_UP_RELEASE = "fui_pull_up_release";
    class InteractiveEvent {
        /**键盘值*/
        // keyCode: number;
        /**滚轮滑动增量*/
        // delta: number;
        /**
         * 设置事件数据。
         * @param	type 事件类型。
         * @param	currentTarget 事件目标触发对象。
         * @param	target 事件当前冒泡对象。
         * @return 返回当前 Event 对象。
         */
        setTo(type, currentTarget, target) {
            this.type = type;
            this.currentTarget = currentTarget;
            this.target = target;
            return this;
        }
        /**
         * 阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
         */
        stopPropagation() {
            this._stoped = true;
        }
        /**
         * 触摸点列表。
         */
        get touches() {
            const arr = GRoot.inst.scene.input.manager.pointers;
            // if (!this.nativeEvent) return null;
            // var arr: any[] = this.nativeEvent.touches;
            // if (arr) {
            //     var stage: Stage = ILaya.stage;
            //     for (var i: number = 0, n: number = arr.length; i < n; i++) {
            //         var e: Phaser.Input.Pointer = arr[i];
            //         var point: Phaser.Geom.Point = new Phaser.Geom.Point();
            //         point.setTo(e.x, e.y);
            //         stage._canvasTransform.invertTransformPoint(point);
            //         stage.transform.invertTransformPoint(point);
            //         e.stageX = point.x;
            //         e.stageY = point.y;
            //     }
            // }
            return arr;
        }
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
            this.$event.setTo(type, target, source ? (source.target || target) : target);
            this.$event.touchId = source ? (source.touchId || 0) : 0;
            this.$event.nativeEvent = source;
            this.$event["_stoped"] = false;
            return this.$event;
        }
        static dispatch(type, target, source) {
            target.emit(type, this.createEvent(type, target, source));
            // GRoot.inst.emitter.emit(type, target);
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
            if (relationType == exports.RelationType.Size) {
                this.add(exports.RelationType.Width, usePercent);
                this.add(exports.RelationType.Height, usePercent);
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
            if (relationType == exports.RelationType.Size) {
                this.internalAdd(exports.RelationType.Width, usePercent);
                this.internalAdd(exports.RelationType.Height, usePercent);
                return;
            }
            var info = new RelationDef();
            info.percent = usePercent;
            info.type = relationType;
            info.axis = (relationType <= exports.RelationType.Right_Right || relationType == exports.RelationType.Width || relationType >= exports.RelationType.LeftExt_Left && relationType <= exports.RelationType.RightExt_Right) ? 0 : 1;
            this._defs.push(info);
        }
        remove(relationType) {
            if (relationType == exports.RelationType.Size) {
                this.remove(exports.RelationType.Width);
                this.remove(exports.RelationType.Height);
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
            this.target = source.target;
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
                    case exports.RelationType.Center_Center:
                        this._owner.x -= (0.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case exports.RelationType.Right_Center:
                    case exports.RelationType.Right_Left:
                    case exports.RelationType.Right_Right:
                        this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case exports.RelationType.Middle_Middle:
                        this._owner.y -= (0.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                    case exports.RelationType.Bottom_Middle:
                    case exports.RelationType.Bottom_Top:
                    case exports.RelationType.Bottom_Bottom:
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
                case exports.RelationType.Left_Left:
                case exports.RelationType.Left_Center:
                case exports.RelationType.Left_Right:
                case exports.RelationType.Center_Center:
                case exports.RelationType.Right_Left:
                case exports.RelationType.Right_Center:
                case exports.RelationType.Right_Right:
                    this._owner.x += dx;
                    break;
                case exports.RelationType.Top_Top:
                case exports.RelationType.Top_Middle:
                case exports.RelationType.Top_Bottom:
                case exports.RelationType.Middle_Middle:
                case exports.RelationType.Bottom_Top:
                case exports.RelationType.Bottom_Middle:
                case exports.RelationType.Bottom_Bottom:
                    this._owner.y += dy;
                    break;
                case exports.RelationType.Width:
                case exports.RelationType.Height:
                    break;
                case exports.RelationType.LeftExt_Left:
                case exports.RelationType.LeftExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth - dx;
                        this._owner.xMin = tmp + dx;
                    }
                    else
                        this._owner.width = this._owner._rawWidth - dx;
                    break;
                case exports.RelationType.RightExt_Left:
                case exports.RelationType.RightExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth + dx;
                        this._owner.xMin = tmp;
                    }
                    else
                        this._owner.width = this._owner._rawWidth + dx;
                    break;
                case exports.RelationType.TopExt_Top:
                case exports.RelationType.TopExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight - dy;
                        this._owner.yMin = tmp + dy;
                    }
                    else
                        this._owner.height = this._owner._rawHeight - dy;
                    break;
                case exports.RelationType.BottomExt_Top:
                case exports.RelationType.BottomExt_Bottom:
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
                case exports.RelationType.Left_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case exports.RelationType.Left_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Left_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case exports.RelationType.Center_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * 0.5 - pos) * delta - this._owner._rawWidth * 0.5;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Right_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case exports.RelationType.Right_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Right_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case exports.RelationType.Top_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case exports.RelationType.Top_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Top_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case exports.RelationType.Middle_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * 0.5 - pos) * delta - this._owner._rawHeight * 0.5;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Bottom_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case exports.RelationType.Bottom_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case exports.RelationType.Bottom_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case exports.RelationType.Width:
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
                case exports.RelationType.Height:
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
                case exports.RelationType.LeftExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case exports.RelationType.LeftExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case exports.RelationType.RightExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth + v;
                    this._owner.xMin = tmp;
                    break;
                case exports.RelationType.RightExt_Right:
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
                case exports.RelationType.TopExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case exports.RelationType.TopExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case exports.RelationType.BottomExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight + v;
                    this._owner.yMin = tmp;
                    break;
                case exports.RelationType.BottomExt_Bottom:
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
            if (this._target != this._owner.parent)
                this._target.on(DisplayObjectEvent.XY_CHANGED, this.__targetXYChanged, this);
            this._target.on(DisplayObjectEvent.SIZE_CHANGED, this.__targetSizeChanged, this);
            this._target.on(DisplayObjectEvent.SIZE_DELAY_CHANGE, this.__targetSizeWillChange, this);
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
        }
        __targetSizeWillChange() {
            this._owner.relations.sizeDirty = true;
        }
        releaseRefTarget() {
            if (this._target.displayObject == null)
                return;
            this._target.off(DisplayObjectEvent.XY_CHANGED, this.__targetXYChanged, this);
            this._target.off(DisplayObjectEvent.SIZE_CHANGED, this.__targetSizeChanged, this);
            this._target.off(DisplayObjectEvent.SIZE_DELAY_CHANGE, this.__targetSizeWillChange, this);
        }
        __targetXYChanged() {
            if (this._owner.relations.handling || this._owner.group && this._owner.group._updating) {
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
            if (this._owner.relations.handling) {
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
                playing: this._owner.getProp(exports.ObjectPropID.Playing),
                frame: this._owner.getProp(exports.ObjectPropID.Frame)
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
            this._owner.setProp(exports.ObjectPropID.Playing, gv.playing);
            this._owner.setProp(exports.ObjectPropID.Frame, gv.frame);
            this._owner._gearLocked = false;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                this._storage[this._controller.selectedPageId] = gv = {};
            gv.playing = this._owner.getProp(exports.ObjectPropID.Playing);
            gv.frame = this._owner.getProp(exports.ObjectPropID.Frame);
        }
    }

    class GearColor extends GearBase {
        init() {
            this._default = {
                color: this._owner.getProp(exports.ObjectPropID.Color),
                strokeColor: this._owner.getProp(exports.ObjectPropID.OutlineColor)
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
            this._owner.setProp(exports.ObjectPropID.Color, gv.color);
            this._owner.setProp(exports.ObjectPropID.OutlineColor, gv.strokeColor);
            this._owner._gearLocked = false;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                this._storage[this._controller.selectedPageId] = gv = {};
            gv.color = this._owner.getProp(exports.ObjectPropID.Color);
            gv.strokeColor = this._owner.getProp(exports.ObjectPropID.OutlineColor);
        }
    }

    class GearFontSize extends GearBase {
        constructor() {
            super(...arguments);
            this._default = 0;
        }
        init() {
            this._default = this._owner.getProp(exports.ObjectPropID.FontSize);
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
                this._owner.setProp(exports.ObjectPropID.FontSize, data);
            else
                this._owner.setProp(exports.ObjectPropID.FontSize, this._default);
            this._owner._gearLocked = false;
        }
        updateState() {
            this._storage[this._controller.selectedPageId] = this._owner.getProp(exports.ObjectPropID.FontSize);
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
        constructor(scene, type) {
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
            this._xOffset = 0;
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
            this._objectType = 0;
            this._id = "" + _gInstanceCounter++;
            this.type = type;
            this._name = "";
            // todo 优先传入scene在创建display
            this.scene = scene;
            if (this.scene)
                this.createDisplayObject();
            this._displayStyle = new DisplayStyle();
            this._relations = new Relations(this);
            this._gears = new Array(10);
        }
        resizeMask(wid, hei) {
            if (!this.displayObject)
                return;
            const childrens = this.displayObject.list;
            const cnt = childrens.length;
            for (let i = 0; i < cnt; i++) {
                const child = childrens[i];
                if (!child)
                    continue;
                let childList = child.list;
                if (!childList) {
                    continue;
                }
                let childLen = childList.length;
                // 进度条的bar只做两层层级！！！
                for (let j = 0; j < childLen; j++) {
                    const children = childList[j];
                    if (!children)
                        continue;
                    if (children instanceof Image) {
                        if (!children.curImage)
                            continue;
                        children.curImage.setCrop(new Phaser.Geom.Rectangle(0, 0, wid, hei));
                        continue;
                    }
                }
                // }
            }
        }
        set type(val) {
            this._objectType = val;
        }
        get type() {
            return this._objectType;
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
        setXY(xv, yv, force = false) {
            if (this._x != xv || this._y != yv || force) {
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
                    this.displayObject.emit(DisplayObjectEvent.XY_CHANGED);
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
                this.addRelation(r, exports.RelationType.Center_Center);
                this.addRelation(r, exports.RelationType.Middle_Middle);
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
                    else {
                        this.applyPivot();
                    }
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
                this.displayObject.emit(DisplayObjectEvent.SIZE_CHANGED);
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
                    this._displayStyle.skewX = (-sx * Math.PI) / 180;
                    this._displayStyle.skewY = (sy * Math.PI) / 180;
                    this._displayObject.skewX = this._displayStyle.skewX;
                    this._displayObject.skewY = this._displayStyle.skewY;
                    this.applyPivot();
                }
            }
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
                    sHelperPoint.x = this._pivotX * this.initWidth;
                    sHelperPoint.y = this._pivotY * this.initHeight;
                    const pt = new Phaser.Geom.Point();
                    transform.transformPoint(this._pivotX * this.initWidth, this._pivotY * this.initHeight, pt);
                    this._pivotOffsetX = this.x - pt.x;
                    this._pivotOffsetY = this.y - pt.y;
                }
                else {
                    this._pivotOffsetX = 0;
                    this._pivotOffsetY = 0;
                }
            }
        }
        applyPivot() {
            if (this._pivotX != 0 || this._pivotY != 0) {
                if (this._displayObject) {
                    if (this._touchable) {
                        this.removeInteractive();
                        this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.initWidth / this.scaleX, this.initHeight / this.scaleY), Phaser.Geom.Rectangle.Contains);
                    }
                    else {
                        this.removeInteractive();
                    }
                }
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        }
        get touchable() {
            return this._touchable;
        }
        set touchable(value) {
            if (this._touchable != value) {
                this.setTouchable(value);
            }
        }
        setTouchable(value) {
            this._touchable = value;
            this.updateGear(3);
            // if ((this instanceof GImage) || (this instanceof GMovieClip)
            //     || (this instanceof GTextField) && !(this instanceof GTextInput) && !(this instanceof GRichTextField))
            //     //Touch is not supported by GImage/GMovieClip/GTextField
            //     return;
            if (this._displayObject)
                if (this._touchable) {
                    this.removeInteractive();
                    this._displayObject.setInteractive(new Phaser.Geom.Rectangle(this.initWidth / 2, this.initHeight / 2, this.initWidth / this.scaleX, this.initHeight / this.scaleY), Phaser.Geom.Rectangle.Contains);
                }
                else {
                    this.removeInteractive();
                }
        }
        removeInteractive() {
            this._displayObject.disableInteractive();
            this._displayObject.removeInteractive();
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
                    // phaser 显示对象的rotation是弧度，angle则是角度
                    this._displayObject.rotation = this.normalizeRotation * (Math.PI / 180);
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
            return this._internalVisible && (!this._group || this._group.internalVisible);
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
                this._displayObject.off(InteractiveEvent.POINTER_OVER, this.__rollOver);
                this._displayObject.off(InteractiveEvent.POINTER_OUT, this.__rollOut);
            }
            this._tooltips = value;
            if (this._tooltips) {
                this._displayObject.on(InteractiveEvent.POINTER_OVER, this.__rollOver);
                this._displayObject.on(InteractiveEvent.POINTER_OUT, this.__rollOut);
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
            return this._displayObject !== null && this.scene !== null;
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
            if (this instanceof GRoot)
                return this;
            let p = this._parent;
            while (p) {
                if (p instanceof GRoot)
                    return p;
                p = p.parent;
            }
            return GRoot.inst;
        }
        get asCom() {
            return this;
        }
        get asButton() {
            return this;
        }
        // public get asLabel(): GLabel {
        //     return <GLabel><any>this;
        // }
        // public get asProgress(): GProgressBar {
        //     return <GProgressBar><any>this;
        // }
        get asTextField() {
            return this;
        }
        get asRichTextField() {
            return this;
        }
        get asTextInput() {
            return this;
        }
        get asLoader() {
            return this;
        }
        get asList() {
            return this;
        }
        get asTree() {
            return this;
        }
        get asGraph() {
            return this;
        }
        get asGroup() {
            return this;
        }
        // public get asSlider(): GSlider {
        //     return <GSlider><any>this;
        // }
        // public get asComboBox(): GComboBox {
        //     return <GComboBox><any>this;
        // }
        get asImage() {
            return this;
        }
        get asMovieClip() {
            return this;
        }
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
        onClick(listener, context) {
            this.on(InteractiveEvent.POINTER_DOWN, listener, context);
        }
        offClick(listener, context, once = false) {
            this.off(InteractiveEvent.POINTER_DOWN, listener, once, context);
        }
        hasClickListener() {
            return this._displayObject && this._touchable; // hasListener(InteractiveEvent.CLICK);
        }
        on(type, listener, context = this) {
            this._displayObject.on(type, listener, context);
        }
        off(type, listener, context = this, once = false) {
            this._displayObject.off(type, listener, once, context);
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
            if (!ele)
                return point;
            const worldMatrix = this._displayObject.getWorldTransformMatrix();
            // while (ele) {
            //     if (!ele.parentContainer) break;
            //     ele = ele.parentContainer;
            // }
            return new Phaser.Geom.Point(worldMatrix.tx, worldMatrix.ty);
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
            this._displayObject = this.scene.make.container(undefined, false);
            // GRoot.inst.addToStage(this._displayObject);
            // (<any>this._scene).stage.addChild(this._displayObject, 1);
            this._displayObject["$owner"] = this;
        }
        setDisplayObject(val) {
            this._displayObject = val;
            this._displayObject["$owner"] = this;
        }
        handleXYChanged() {
            var xv = this._x + this._xOffset;
            var yv = this._y + this._yOffset;
            if (this._pivotAsAnchor) {
                xv -= this._pivotX * this._width;
                yv -= this._pivotY * this._height;
            }
            if (this._pixelSnapping) {
                xv = Math.round(xv);
                yv = Math.round(yv);
            }
            this._displayObject.setPosition(xv, yv);
        }
        handleSizeChanged() {
            // (<Phaser.GameObjects.Container>this.displayObject).setDisplaySize(this._width, this._height);
            this._displayObject.setSize(this._width, this._height);
            // this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
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
                case exports.ObjectPropID.Text:
                    return this.text;
                case exports.ObjectPropID.Icon:
                    return this.icon;
                case exports.ObjectPropID.Color:
                    return null;
                case exports.ObjectPropID.OutlineColor:
                    return null;
                case exports.ObjectPropID.Playing:
                    return false;
                case exports.ObjectPropID.Frame:
                    return 0;
                case exports.ObjectPropID.DeltaTime:
                    return 0;
                case exports.ObjectPropID.TimeScale:
                    return 1;
                case exports.ObjectPropID.FontSize:
                    return 0;
                case exports.ObjectPropID.Selected:
                    return false;
                default:
                    return undefined;
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Text:
                    this.text = value;
                    break;
                case exports.ObjectPropID.Icon:
                    this.icon = value;
                    break;
            }
        }
        constructFromResource() {
            return new Promise((reslove, reject) => {
                reslove();
            });
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
            }
            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setScale(f1, f2);
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setSkew(f1, f2);
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setPivot(f1, f2, buffer.readBool());
            }
            f1 = buffer.readFloat();
            if (f1 != 1) {
                if (f1 > 1)
                    f1 = 1;
                this.alpha = f1;
            }
            f1 = buffer.readFloat();
            if (f1 != 0)
                this.rotation = f1;
            if (!buffer.readBool())
                this.visible = false;
            // console.log("visible object ===>", this);
            if (!buffer.readBool()) {
                this.touchable = false;
            }
            else {
                this.touchable = true;
            }
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
            this.setSize(this.initWidth, this.initHeight, true);
            this.setTouchable(this._touchable);
        }
        //drag support
        //-------------------------------------------------------------------
        initDrag() {
            if (this._draggable)
                this._displayObject.on(InteractiveEvent.POINTER_DOWN, this.__begin);
            else
                this._displayObject.off(InteractiveEvent.POINTER_DOWN, this.__begin);
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
            this._displayObject.on(InteractiveEvent.POINTER_MOVE, this.__moving);
            this._displayObject.on(InteractiveEvent.POINTER_UP, this.__end);
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
            this._displayObject.off(InteractiveEvent.POINTER_MOVE, this.__moving);
            this._displayObject.off(InteractiveEvent.POINTER_UP, this.__end);
        }
        __begin() {
            if (!this._dragStartPos)
                this._dragStartPos = new Phaser.Geom.Point();
            this._dragStartPos.x = this.scene.input.activePointer.x;
            this._dragStartPos.y = this.scene.input.activePointer.y;
            this._dragTesting = true;
            this._displayObject.on(InteractiveEvent.POINTER_MOVE, this.__moving);
            this._displayObject.on(InteractiveEvent.POINTER_UP, this.__end);
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
        constructor(scene, type) {
            super(scene, type);
            this._layout = 0;
            this._lineGap = 0;
            this._columnGap = 0;
            this._mainGridIndex = -1;
            this._mainGridMinSize = 50;
            this._mainChildIndex = -1;
            this._totalSize = 0;
            this._numChildren = 0;
            this._updating = 0;
            //console.log("group create", this);
        }
        dispose() {
            this._boundsChanged = false;
            super.dispose();
        }
        set touchable(value) {
            this._touchable = false;
            // if (this._touchable != value) {
            //     this.setTouchable(value);
            // }
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
            if (this._layout == exports.GroupLayoutType.Horizontal) {
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
            else if (this._layout == exports.GroupLayoutType.Vertical) {
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
            if (this._layout == exports.GroupLayoutType.None || (this._updating & 2) != 0 || !this._parent)
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
                return;
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
        constructor(scene, type) {
            super(scene, type);
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
            this._displayObject.mouseEnabled = this.touchable;
            if (this._graphics)
                this._graphics.clear();
            this._graphics = this.scene.make.graphics(undefined, false);
            var w = this.width;
            var h = this.height;
            if (w == 0 || h == 0)
                return;
            let fillColor;
            let lineColor;
            if (this._lineColor)
                lineColor = Utils.toNumColor(this._lineColor);
            // ============= rgba颜色值转换
            if ( /*Render.isWebGL &&*/ToolSet.startsWith(this._fillColor, "rgba")) {
                //webgl下laya未支持rgba格式
                var arr = this._fillColor.substring(5, this._fillColor.lastIndexOf(")")).split(",");
                var a = parseFloat(arr[3]);
                if (a == 0)
                    fillColor = null;
                else {
                    fillColor = Utils.toNumColor(Utils.toHexColor((parseInt(arr[0]) << 16) + (parseInt(arr[1]) << 8) + parseInt(arr[2])));
                    this.alpha = a;
                }
            }
            else {
                fillColor = Utils.toNumColor(this._fillColor);
            }
            this._graphics.fillStyle(fillColor, this.alpha);
            if (this._lineSize && lineColor)
                this._graphics.lineStyle(this._lineSize, lineColor);
            if (this._type == 1) {
                // 画圆角
                if (this._cornerRadius) {
                    [
                        ["moveTo", this._cornerRadius[0], 0],
                        ["lineTo", w - this._cornerRadius[1], 0],
                        ["arcTo", w, 0, w, this._cornerRadius[1], this._cornerRadius[1]],
                        ["lineTo", w, h - this._cornerRadius[3]],
                        ["arcTo", w, h, w - this._cornerRadius[3], h, this._cornerRadius[3]],
                        ["lineTo", this._cornerRadius[2], h],
                        ["arcTo", 0, h, 0, h - this._cornerRadius[2], this._cornerRadius[2]],
                        ["lineTo", 0, this._cornerRadius[0]],
                        ["arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0]],
                        ["closePath"]
                    ];
                    this._graphics.fillRoundedRect(0, 0, w, h, this._cornerRadius[0]);
                    if (this._lineSize > 0) {
                        this._graphics.strokeRoundedRect(0, 0, w, h, this._cornerRadius[0]);
                    }
                    // gr.drawPath(0, 0, paths, fillColor ? { fillStyle: fillColor } : null, this._lineSize > 0 ? { strokeStyle: lineColor, lineWidth: this._lineSize } : null);
                }
                else
                    this._graphics.fillRect(0, 0, w, h);
                if (this._lineSize > 0) {
                    this._graphics.strokeRect(0, 0, w, h);
                }
                // gr.drawRect(0, 0, w, h, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
            }
            else if (this._type == 2) {
                this._graphics.fillCircle(w / 2, h / 2, w / 2);
                if (this._lineSize > 0) {
                    this._graphics.strokeCircle(w / 2, h / 2, w / 2);
                }
                // gr.drawCircle(w / 2, h / 2, w / 2, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
            }
            else if (this._type == 3) {
                // ==== 优先处理点数据 偏移量，并以点形式保存
                this.dealWithPolyPoints(0, 0);
                // gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
            }
            else if (this._type == 4) {
                if (!this._polygonPoints)
                    this._polygonPoints = [];
                var radius = Math.min(this._width, this._height) / 2;
                this._polygonPoints.length = 0;
                var angle = Utils.toRadian(this._startAngle);
                var deltaAngle = 2 * Math.PI / this._sides;
                var dist;
                for (var i = 0; i < this._sides; i++) {
                    if (this._distances) {
                        dist = this._distances[i];
                        if (isNaN(dist))
                            dist = 1;
                    }
                    else
                        dist = 1;
                    var xv = radius + radius * dist * Math.cos(angle);
                    var yv = radius + radius * dist * Math.sin(angle);
                    this._polygonPoints.push(xv, yv);
                    angle += deltaAngle;
                }
                this.dealWithPolyPoints(0, 0);
                // gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
            }
            // this._displayObject.repaint();
            this._displayObject.addAt(this._graphics);
        }
        dealWithPolyPoints(basePosX = 0, basePosY = 0) {
            var offset = (this._lineSize >= 1 && this._lineColor) ? (this._lineSize % 2 === 0 ? 0 : 0.5) : 0;
            const points = this._polygonPoints;
            const points1 = [];
            var ci = 0;
            for (var i = 0, sz = points.length / 2; i < sz; i++) {
                var x1 = points[ci] + basePosX + offset, y1 = points[ci + 1] + basePosY + offset;
                points[ci] = x1;
                points[ci + 1] = y1;
                const point = new Phaser.Geom.Point(x1, y1);
                points1.push(point);
                ci += 2;
            }
            // ==== 开始画点路径
            this._graphics.beginPath();
            for (let i = 0; i < points1.length; i++) {
                const point = points1[i];
                this._graphics.moveTo(0, 0);
                this._graphics.lineTo(point.x, point.y);
            }
            this._graphics.fillPath();
            if (this._lineSize > 0) {
                this._graphics.strokePath();
            }
            this._graphics.closePath();
        }
        replaceMe(target) {
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
            if (!this._parent)
                throw "parent not set";
            // var index: number = this._parent.getChildIndex(this);
            // this._parent.addChildAt(target, index);
        }
        addAfterMe(target) {
            if (!this._parent)
                throw "parent not set";
            // var index: number = this._parent.getChildIndex(this);
            // index++;
            // index++;
            // this._parent.addChildAt(target, index);
        }
        setNativeObject(obj) {
            this._type = 0;
            // this._displayObject.mouseEnabled = this.touchable;
            this._displayObject.graphics.clear();
            this._displayObject.addChild(obj);
        }
        createDisplayObject() {
            super.createDisplayObject();
            this._displayObject.disableInteractive();
            this._displayObject.removeInteractive();
            // this._hitArea = new HitArea();
            // this._hitArea.hit = this._displayObject.graphics;
            // this._displayObject.hitArea = this._hitArea;
        }
        getProp(index) {
            if (index == exports.ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }
        setProp(index, value) {
            if (index == exports.ObjectPropID.Color)
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
            this._touchable = false;
        }
    }

    function fillImage(w, h, method, origin, clockwise, amount) {
        if (amount <= 0)
            return null;
        else if (amount >= 0.9999)
            return [0, 0, w, 0, w, h, 0, h];
        var points;
        switch (method) {
            case exports.FillMethod.Horizontal:
                points = fillHorizontal(w, h, origin, amount);
                break;
            case exports.FillMethod.Vertical:
                points = fillVertical(w, h, origin, amount);
                break;
            case exports.FillMethod.Radial90:
                points = fillRadial90(w, h, origin, clockwise, amount);
                break;
            case exports.FillMethod.Radial180:
                points = fillRadial180(w, h, origin, clockwise, amount);
                break;
            case exports.FillMethod.Radial360:
                points = fillRadial360(w, h, origin, clockwise, amount);
                break;
        }
        return points;
    }
    function fillHorizontal(w, h, origin, amount) {
        var w2 = w * amount;
        if (origin == exports.FillOrigin.Left || origin == exports.FillOrigin.Top)
            return [0, 0, w2, 0, w2, h, 0, h];
        else
            return [w, 0, w, h, w - w2, h, w - w2, 0];
    }
    function fillVertical(w, h, origin, amount) {
        var h2 = h * amount;
        if (origin == exports.FillOrigin.Left || origin == exports.FillOrigin.Top)
            return [0, 0, 0, h2, w, h2, w, 0];
        else
            return [0, h, w, h, w, h - h2, 0, h - h2];
    }
    function fillRadial90(w, h, origin, clockwise, amount) {
        if (clockwise && (origin == exports.FillOrigin.TopRight || origin == exports.FillOrigin.BottomLeft)
            || !clockwise && (origin == exports.FillOrigin.TopLeft || origin == exports.FillOrigin.BottomRight)) {
            amount = 1 - amount;
        }
        var v, v2, h2;
        v = Math.tan(Math.PI / 2 * amount);
        h2 = w * v;
        v2 = (h2 - h) / h2;
        var points;
        switch (origin) {
            case exports.FillOrigin.TopLeft:
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
            case exports.FillOrigin.TopRight:
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
            case exports.FillOrigin.BottomLeft:
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
            case exports.FillOrigin.BottomRight:
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
            case exports.FillOrigin.Top:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial90(w / 2, h, clockwise ? exports.FillOrigin.TopLeft : exports.FillOrigin.TopRight, clockwise, amount);
                    if (clockwise)
                        movePoints(points, w / 2, 0);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial90(w / 2, h, clockwise ? exports.FillOrigin.TopRight : exports.FillOrigin.TopLeft, clockwise, amount);
                    if (clockwise)
                        points.push(w, h, w, 0);
                    else {
                        movePoints(points, w / 2, 0);
                        points.push(0, h, 0, 0);
                    }
                }
                break;
            case exports.FillOrigin.Bottom:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial90(w / 2, h, clockwise ? exports.FillOrigin.BottomRight : exports.FillOrigin.BottomLeft, clockwise, amount);
                    if (!clockwise)
                        movePoints(points, w / 2, 0);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial90(w / 2, h, clockwise ? exports.FillOrigin.BottomLeft : exports.FillOrigin.BottomRight, clockwise, amount);
                    if (clockwise) {
                        movePoints(points, w / 2, 0);
                        points.push(0, 0, 0, h);
                    }
                    else
                        points.push(w, 0, w, h);
                }
                break;
            case exports.FillOrigin.Left:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial90(w, h / 2, clockwise ? exports.FillOrigin.BottomLeft : exports.FillOrigin.TopLeft, clockwise, amount);
                    if (!clockwise)
                        movePoints(points, 0, h / 2);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial90(w, h / 2, clockwise ? exports.FillOrigin.TopLeft : exports.FillOrigin.BottomLeft, clockwise, amount);
                    if (clockwise) {
                        movePoints(points, 0, h / 2);
                        points.push(w, 0, 0, 0);
                    }
                    else
                        points.push(w, h, 0, h);
                }
                break;
            case exports.FillOrigin.Right:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial90(w, h / 2, clockwise ? exports.FillOrigin.TopRight : exports.FillOrigin.BottomRight, clockwise, amount);
                    if (clockwise)
                        movePoints(points, 0, h / 2);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial90(w, h / 2, clockwise ? exports.FillOrigin.BottomRight : exports.FillOrigin.TopRight, clockwise, amount);
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
            case exports.FillOrigin.Top:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial180(w / 2, h, clockwise ? exports.FillOrigin.Left : exports.FillOrigin.Right, clockwise, amount);
                    if (clockwise)
                        movePoints(points, w / 2, 0);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial180(w / 2, h, clockwise ? exports.FillOrigin.Right : exports.FillOrigin.Left, clockwise, amount);
                    if (clockwise)
                        points.push(w, h, w, 0, w / 2, 0);
                    else {
                        movePoints(points, w / 2, 0);
                        points.push(0, h, 0, 0, w / 2, 0);
                    }
                }
                break;
            case exports.FillOrigin.Bottom:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial180(w / 2, h, clockwise ? exports.FillOrigin.Right : exports.FillOrigin.Left, clockwise, amount);
                    if (!clockwise)
                        movePoints(points, w / 2, 0);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial180(w / 2, h, clockwise ? exports.FillOrigin.Left : exports.FillOrigin.Right, clockwise, amount);
                    if (clockwise) {
                        movePoints(points, w / 2, 0);
                        points.push(0, 0, 0, h, w / 2, h);
                    }
                    else
                        points.push(w, 0, w, h, w / 2, h);
                }
                break;
            case exports.FillOrigin.Left:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial180(w, h / 2, clockwise ? exports.FillOrigin.Bottom : exports.FillOrigin.Top, clockwise, amount);
                    if (!clockwise)
                        movePoints(points, 0, h / 2);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial180(w, h / 2, clockwise ? exports.FillOrigin.Top : exports.FillOrigin.Bottom, clockwise, amount);
                    if (clockwise) {
                        movePoints(points, 0, h / 2);
                        points.push(w, 0, 0, 0, 0, h / 2);
                    }
                    else
                        points.push(w, h, 0, h, 0, h / 2);
                }
                break;
            case exports.FillOrigin.Right:
                if (amount <= 0.5) {
                    amount = amount / 0.5;
                    points = fillRadial180(w, h / 2, clockwise ? exports.FillOrigin.Top : exports.FillOrigin.Bottom, clockwise, amount);
                    if (clockwise)
                        movePoints(points, 0, h / 2);
                }
                else {
                    amount = (amount - 0.5) / 0.5;
                    points = fillRadial180(w, h / 2, clockwise ? exports.FillOrigin.Bottom : exports.FillOrigin.Top, clockwise, amount);
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

    exports.GRAPHICSTYPE = void 0;
    (function (GRAPHICSTYPE) {
        GRAPHICSTYPE["RECTANGLE"] = "rectangle";
        GRAPHICSTYPE["CIRCLE"] = "circle";
        GRAPHICSTYPE["POLY"] = "POLY";
        GRAPHICSTYPE["ELLIPSE"] = "ellipse";
    })(exports.GRAPHICSTYPE || (exports.GRAPHICSTYPE = {}));
    class Graphics extends Phaser.GameObjects.Graphics {
        constructor(scene) {
            super(scene);
            // 默认矩形
            this._graphicsType = exports.GRAPHICSTYPE.RECTANGLE;
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
            this._graphicsType = exports.GRAPHICSTYPE.RECTANGLE;
            this._width = width;
            this._height = height;
            return super.fillRect(x, y, width, height);
        }
        fillCircle(x, y, radius) {
            this._graphicsType = exports.GRAPHICSTYPE.CIRCLE;
            this._radius = radius;
            return super.fillCircle(x, y, radius);
        }
        fillTriangle(x0, y0, x1, y1, x2, y2) {
            // 三角形是多边形
            // todo 扩展其他正多边形
            this._graphicsType = exports.GRAPHICSTYPE.POLY;
            this._points = [new Phaser.Geom.Point(x0, y0), new Phaser.Geom.Point(x1, y1), new Phaser.Geom.Point(x2, y2)];
            return super.fillTriangle(x0, y0, x1, y1, x2, y2);
        }
        fillEllipse(x, y, width, height, smoothness) {
            this._graphicsType = exports.GRAPHICSTYPE.ELLIPSE;
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

    const patches = ["[0][0]", "[1][0]", "[2][0]", "[0][1]", "[1][1]", "[2][1]", "[0][2]", "[1][2]", "[2][2]"];
    class Image extends Phaser.GameObjects.Container {
        constructor(scene) {
            super(scene);
            this._frame = 0;
            this._sourceFrames = [];
            this._playing = true;
            this._frameCount = 0;
            this._start = 0;
            this._end = 0;
            this._times = 0;
            this._endAt = 0;
            this._status = 0; //0-none, 1-next loop, 2-ending, 3-ended
            this._frameImgs = new Map();
            this._tileGridIndice = 0;
            this._needRebuild = 0;
            this._fillMethod = 0;
            this._fillOrigin = 0;
            this._fillAmount = 0;
            this.finalXs = [];
            this.finalYs = [];
            this.tintFill = false;
            // this._renderTexture = this.scene.make.renderTexture(undefined, false);
            // this._renderTexture.setPosition(0, 0);
            // this.add(this._renderTexture);
            // this.patchKey = Math.random() * 1000 + "";
            // this.mouseEnabled = false;
            this._color = "#FFFFFF";
        }
        get curImage() {
            return this._curImg;
        }
        setTint(color) {
            const _color = Utils.toNumColor(color);
            this.list.forEach((img) => {
                if (img) {
                    img.clearTint();
                    img.setTint(_color);
                }
            });
        }
        setSize(width, height, originFrame) {
            this.width = width;
            this.height = height;
            const originWidth = this["$owner"].sourceWidth;
            const originHeight = this["$owner"].sourceHeight;
            if (this._scale9Grid) {
                const _left = this._scale9Grid.left;
                const _right = originWidth - this._scale9Grid.right;
                const _top = this._scale9Grid.top;
                const _bottom = originHeight - this._scale9Grid.bottom;
                this._scale9Grid.width; // right - left
                this._scale9Grid.height; // bottom - top
                this.finalXs = [0, _left, width - _left - _right, width];
                this.finalYs = [0, _top, height - _top - _bottom, height];
            }
            else {
                this.finalXs = [0, 0, 0, this.width];
                this.finalYs = [0, 0, 0, this.height];
            }
            // 有texture资源后再创建九宫图片
            if (!this.originFrame)
                this.originFrame = originFrame;
            if (this.originFrame) {
                this.createPatches();
                this.drawPatches();
            }
            this.markChanged(1);
            return this;
        }
        createPatches() {
            // The positions we want from the base texture
            // 保存有x轴和y轴9宫坐标信息，如果存在坐标信息相同，则表示某一部分的图片尺寸为0，需要查看原因
            const textureXs = this.finalXs; //[0, this._scale9Grid.left, this.originFrame.width - this._scale9Grid.right, this.originFrame.width];
            const textureYs = this.finalYs; //[0, this._scale9Grid.top, this.originFrame.height - this._scale9Grid.bottom, this.originFrame.height];
            let patchIndex = 0;
            for (let yi = 0; yi < 3; yi++) {
                for (let xi = 0; xi < 3; xi++) {
                    this.createPatchFrame(this.getPatchNameByIndex(patchIndex), textureXs[xi], // x
                    textureYs[yi], // y
                    textureXs[xi + 1] - textureXs[xi], // width
                    textureYs[yi + 1] - textureYs[yi] // height
                    );
                    ++patchIndex;
                }
            }
        }
        drawPatches() {
            const tintFill = this.tintFill;
            this.removeAll(true);
            if (!this._scale9Grid) {
                const patch = this._sourceTexture.frames[this.getPatchNameByIndex(8)];
                if (this._curImg) {
                    this._curImg.destroy();
                    this._curImg = null;
                }
                this._curImg = new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, patch.name);
                this._curImg.setOrigin(0);
                this._curImg.setPosition(this.finalXs[2], this.finalYs[2]);
                this._curImg.displayWidth = this.finalXs[3]; //+ (xi < 2 ? this.mCorrection : 0);
                this._curImg.displayHeight = this.finalYs[3]; //+ (yi < 2 ? this.mCorrection : 0);
                // console.log("drawImage ===>", this._curImg, this.finalXs, this.finalYs);
                this.add(this._curImg);
                if (this.internalTint)
                    this._curImg.setTint(this.internalTint);
                this._curImg.tintFill = tintFill;
                return;
            }
            let patchIndex = 0;
            for (let yi = 0; yi < 3; yi++) {
                for (let xi = 0; xi < 3; xi++) {
                    // 九宫逻辑中如果宽高为0，则不做后续处理
                    // if (this.finalXs[xi + 1] - this.finalXs[xi] <= 0 || this.finalYs[yi + 1] - this.finalYs[yi] <= 0) {
                    //     continue;
                    // }
                    const patch = this._sourceTexture.frames[this.getPatchNameByIndex(patchIndex)];
                    const patchImg = new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, patch.name);
                    patchImg.setOrigin(0);
                    patchImg.setPosition(this.finalXs[xi], this.finalYs[yi]);
                    patchImg.displayWidth = this.finalXs[xi + 1] - this.finalXs[xi]; //+ (xi < 2 ? this.mCorrection : 0);
                    patchImg.displayHeight = this.finalYs[yi + 1] - this.finalYs[yi]; //+ (yi < 2 ? this.mCorrection : 0);
                    // console.log("drawImage ===>", patchImg, this.finalXs, this.finalYs);
                    this.add(patchImg);
                    if (this.internalTint)
                        patchImg.setTint(this.internalTint);
                    patchImg.tintFill = tintFill;
                    ++patchIndex;
                }
            }
            // test position
            // if (this["$owner"]._id === "n1") return;
            // const g = this.scene.add.graphics(undefined);
            // g.clear();
            // g.fillStyle(0xFFCC00);
            // g.fillRect(0, 0, 20, 20);
            // this.add(g);
        }
        createPatchFrame(patch, x, y, width, height) {
            if (this.originFrame && !this._sourceTexture)
                this._sourceTexture = this.originFrame.texture;
            if (this._sourceTexture.frames.hasOwnProperty(patch)) {
                // console.log("patch cf", patch);
                return;
            }
            // 在texture的frames列表中添加对应增加的frame
            this._sourceTexture.add(patch, this.originFrame.sourceIndex, this.originFrame.cutX + x, this.originFrame.cutY + y, width, height);
        }
        getPatchNameByIndex(index) {
            return this.originFrame.name + patches[index] + this.patchKey;
        }
        get texture() {
            return this._sourceTexture;
        }
        set texture(value) {
            if (this._sourceTexture != value) {
                this._sourceTexture = value;
                if (this._sourceTexture)
                    this.setSize(this.width, this.height);
                else
                    this.setSize(0, 0);
                // todo 重绘
                // this.scene.add.image(0, 0, this._sourceTexture);
                // const frames = value.getFrameNames();
                // const baseFrameName = frames[0];
                // this._renderTexture.drawFrame(value.key, baseFrameName, 0, 0);
                // this.repaint();
                // this.markChanged(1);
            }
        }
        setPackItem(value) {
            if (!value || !value.texture) {
                // console.log("setpackitem ===>", value);
                return;
            }
            const _texture = value.texture;
            const name = _texture.key + "_" + value.name + "_" + this["$owner"].width + "_" + this["$owner"].height;
            this.patchKey = name;
            if (!this._scale9Grid) {
                if (this.width !== _texture.frames["__BASE"].cutWidth || this.height !== _texture.frames["__BASE"].cutHeight) {
                    // 手动将packitem数据组织成frame格式添加到大图集的frames中，内部会去重
                    _texture.add(name, 0, value.x, value.y, value.width, value.height);
                    if (!this.scene.textures.exists(name)) {
                        const canvas = this.scene.textures.createCanvas(name, value.width, value.height);
                        canvas.drawFrame(_texture.key, name, 0, 0);
                        if (canvas && this._sourceTexture != canvas) {
                            this._sourceTexture = canvas;
                            this.originFrame = this._sourceTexture.frames["__BASE"];
                            this.setSize(value.width, value.height);
                        }
                    }
                    else {
                        let texture = this.scene.textures.get(name);
                        if (texture && this._sourceTexture != texture) {
                            this._sourceTexture = texture;
                            this.originFrame = this._sourceTexture.frames["__BASE"];
                            this.setSize(value.width, value.height);
                        }
                    }
                }
                else {
                    const img = this.scene.make.image(undefined, false);
                    img.setTexture(_texture.key);
                    this.add(img);
                }
            }
            else {
                // 手动将packitem数据组织成frame格式添加到大图集的frames中，内部会去重
                _texture.add(name, 0, value.x, value.y, value.width, value.height);
                if (!this.scene.textures.exists(name)) {
                    const canvas = this.scene.textures.createCanvas(name, value.width, value.height);
                    canvas.drawFrame(_texture.key, name, 0, 0);
                    if (canvas && this._sourceTexture != canvas) {
                        this._sourceTexture = canvas;
                        this.originFrame = this._sourceTexture.frames["__BASE"];
                        this.setSize(value.width, value.height);
                    }
                }
                else {
                    let texture = this.scene.textures.get(name);
                    if (texture && this._sourceTexture != texture) {
                        this._sourceTexture = texture;
                        this.originFrame = this._sourceTexture.frames["__BASE"];
                        this.setSize(value.width, value.height);
                    }
                }
            }
            this.markChanged(1);
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
            var w = this.width;
            var h = this.height;
            // var g: Graphics = new Graphics(this.scene);
            var tex = this._sourceTexture;
            // g.clear();
            if (tex == null || w == 0 || h == 0) {
                return;
            }
            if (this._curImg) {
                this._curImg.visible = false;
            }
            let img;
            let curFrame;
            if (this._scaleByTile) {
                // todo draw texture
                curFrame = this._frames["__BASE"];
                img = this._frameImgs.get(curFrame.name);
                if (!img) {
                    img = new Phaser.GameObjects.Image(this.scene, 0, 0, tex.key);
                    img.setOrigin(0);
                    img.setPosition(curFrame.x, curFrame.y);
                    this.add(img);
                }
                else {
                    img.visible = true;
                }
                //  g.fillTexture(tex, 0, 0, w, h);
            }
            else if (this._scale9Grid) {
                this.texture = tex;
                // if (!this._sizeGrid) {
                //     var tw: number = tex.source[0].width;
                //     var th: number = tex.source[0].height;
                //     this.setSize(tw, th);
                //     var left: number = this._scale9Grid.x;
                //     var right: number = Math.max(tw - this._scale9Grid.right, 0);
                //     var top: number = this._scale9Grid.y;
                //     var bottom: number = Math.max(th - this._scale9Grid.bottom, 0);
                //     this._sizeGrid = [top, right, bottom, left, this._tileGridIndice];
                // }
                // todo draw9Grid
                //g.draw9Grid(tex, 0, 0, w, h, this._sizeGrid);
            }
            else {
                // todo drawImage
                if (this._frames) {
                    const curFrame = this._frames[this._frame];
                    const curFrameName = curFrame.name;
                    // if (!GRoot.inst.scene.textures.exists(curFrameName)) {
                    //     const canvas = GRoot.inst.scene.textures.createCanvas(curFrameName, w, h);
                    //     canvas.drawFrame(tex.key, curFrameName, 0, 0);
                    // }
                    img = new Phaser.GameObjects.Image(this.scene, 0, 0, tex.key, curFrameName);
                    img.setOrigin(0);
                    img.setPosition(this.width - img.width >> 1, this.height - img.height >> 1);
                    img.setSize(w, h);
                    this.add(img);
                }
                //g.drawImage(tex, 0, 0, w, h);
            }
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
        constructor(scene, type) {
            super(scene, type);
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
                if (this._flip == exports.FlipType.Horizontal || this._flip == exports.FlipType.Both)
                    sx = -1;
                if (this._flip == exports.FlipType.Vertical || this._flip == exports.FlipType.Both)
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
            // (<any>this._scene).stage.addChild(this._displayObject, 1);
            this._displayObject["$owner"] = this;
        }
        setSize(wv, hv, ignorePivot) {
            super.setSize(wv, hv, ignorePivot);
        }
        constructFromResource() {
            return new Promise((reslove, reject) => {
                this._contentItem = this.packageItem.getBranch();
                this.sourceWidth = this._contentItem.width;
                this.sourceHeight = this._contentItem.height;
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                this._contentItem = this._contentItem.getHighResolution();
                this._contentItem.load().then((packageItem) => {
                    // 优先九宫格，初始化九宫格各类数据，防止setpackitem时位置数据缺失
                    this.setSize(this._contentItem.width, this._contentItem.height);
                    this.image.scale9Grid = this._contentItem.scale9Grid;
                    this.image.scaleByTile = this._contentItem.scaleByTile;
                    this.image.tileGridIndice = this._contentItem.tileGridIndice;
                    this.image.setPackItem(this._contentItem);
                    // console.log("image pos", this);
                    // this.image.setPosition(this._contentItem.x, this._contentItem.y);
                    // this.setSize(this.sourceWidth, this.sourceHeight);
                    reslove();
                });
            });
        }
        handleXYChanged() {
            super.handleXYChanged();
            if (this._flip != exports.FlipType.None) {
                if (this.scaleX == -1)
                    this.image.x += this.width;
                if (this.scaleY == -1)
                    this.image.y += this.height;
            }
        }
        getProp(index) {
            if (index == exports.ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }
        setProp(index, value) {
            if (index == exports.ObjectPropID.Color)
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
            this._touchable = false;
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
        }
    }

    class MovieClip extends Image {
        // private _movieUpdateEvent: any;
        // private _movieTime: Phaser.Time.TimerEvent;
        constructor(scene) {
            super(scene);
            this.repeatDelay = 0;
            this.timeScale = 1;
            this._interval = 100;
            this._frameElapsed = 0; //当前帧延迟
            this._repeatedCount = 0;
            this._sourceWidth = 0;
            this._sourceHeight = 0;
            // this.mouseEnabled = false;
            // this.setPlaySettings();
            // this._movieUpdateEvent = { delay: this.interval, callback: this.update, callbackScope: this }
            // this.on(Laya.Event.DISPLAY, this, this.__addToStage);
            // this.on(Laya.Event.UNDISPLAY, this, this.__removeFromStage);
        }
        set interval(val) {
            this._interval = val;
            // this._movieUpdateEvent = { delay: this._interval, callback: this.update, callbackScope: this, loop: true}
        }
        get interval() {
            return this._interval;
        }
        get frames() {
            return this._frames;
        }
        set frames(value) {
            this._frames = value;
            if (value) {
                const frame = value[0];
                if (value.length > 1) {
                    const key = frame.texture.key;
                    const len = value.length;
                    const name = frame.name.split("_")[0];
                    const repeat = this._times > 0 ? this._times : -1;
                    this._curKey = key + "_mc";
                    const frameRate = 1000 / this._interval;
                    if (!this._sprite)
                        this._sprite = this.scene.make.sprite(undefined, false);
                    this._sprite.anims.create({ key: this._curKey, frames: this._sprite.anims.generateFrameNames(key, { prefix: name + "_", start: 0, end: len - 1 }), frameRate, repeat });
                    this.add(this._sprite);
                    this.checkTimer();
                }
                else {
                    const key = frame.texture.key;
                    if (!this._image) {
                        this._image = new Phaser.GameObjects.Image(this.scene, 0, 0, key, frame.name);
                    }
                    else {
                        this._image.setTexture(key, frame.name);
                    }
                    this._image.setOrigin(0.5, 0.5);
                    this._image.setPosition(0, 0);
                    this.add(this._image);
                }
            }
            else {
                if (this._sprite) {
                    this._sprite.stop();
                    this.remove(this._sprite);
                }
                if (this._image) {
                    this.remove(this._image);
                }
                this.checkTimer(false);
            }
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
                this.checkTimer(value);
            }
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        // public rewind(): void {
        //     this._frame = 0;
        //     this._frameElapsed = 0;
        //     this._reversed = false;
        //     this._repeatedCount = 0;
        //     this.drawFrame();
        // }
        // public syncStatus(anotherMc: MovieClip): void {
        //     this._frame = anotherMc._frame;
        //     this._frameElapsed = anotherMc._frameElapsed;
        //     this._reversed = anotherMc._reversed;
        //     this._repeatedCount = anotherMc._repeatedCount;
        //     this.drawFrame();
        // }
        advance(timeInMiniseconds) {
            //     var beginFrame: number = this._frame;
            //     var beginReversed: boolean = this._reversed;
            //     var backupTime: number = timeInMiniseconds;
            //     while (true) {
            //         var tt: number = this.interval + this._frames[this._frame]["addDelay"];
            //         if (this._frame == 0 && this._repeatedCount > 0)
            //             tt += this.repeatDelay;
            //         if (timeInMiniseconds < tt) {
            //             this._frameElapsed = 0;
            //             break;
            //         }
            //         timeInMiniseconds -= tt;
            //         if (this.swing) {
            //             if (this._reversed) {
            //                 this._frame--;
            //                 if (this._frame <= 0) {
            //                     this._frame = 0;
            //                     this._repeatedCount++;
            //                     this._reversed = !this._reversed;
            //                 }
            //             }
            //             else {
            //                 this._frame++;
            //                 if (this._frame > this._frameCount - 1) {
            //                     this._frame = Math.max(0, this._frameCount - 2);
            //                     this._repeatedCount++;
            //                     this._reversed = !this._reversed;
            //                 }
            //             }
            //         }
            //         else {
            //             this._frame++;
            //             if (this._frame > this._frameCount - 1) {
            //                 this._frame = 0;
            //                 this._repeatedCount++;
            //             }
            //         }
            //         if (this._frame == beginFrame && this._reversed == beginReversed) //走了一轮了
            //         {
            //             var roundTime: number = backupTime - timeInMiniseconds; //这就是一轮需要的时间
            //             timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime; //跳过
            //         }
            //     }
            //     this.drawFrame();
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        // public setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void {
        //     if (start == undefined) start = 0;
        //     if (end == undefined) end = -1;
        //     if (times == undefined) times = 0;
        //     if (endAt == undefined) endAt = -1;
        //     this._start = start;
        //     this._end = end;
        //     if (this._end == -1 || this._end > this._frameCount - 1)
        //         this._end = this._frameCount - 1;
        //     this._times = times;
        //     this._endAt = endAt;
        //     if (this._endAt == -1)
        //         this._endAt = this._end;
        //     this._status = 0;
        //     this._endHandler = endHandler;
        //     this.frame = start;
        // }
        // public update(): void {
        //     if (!this._playing || this._frameCount == 0 || this._status == 3)
        //         return;
        //     var frameRate: number = this.scene.game.config.fps.target;
        //     var dt: number = frameRate;//Laya.timer.delta;
        //     if (dt > 100)
        //         dt = 100;
        //     if (this.timeScale != 1)
        //         dt *= this.timeScale;
        //     this._frameElapsed += dt;
        //     var tt: number = this.interval + this._frames[this._frame]["addDelay"];
        //     if (this._frame == 0 && this._repeatedCount > 0)
        //         tt += this.repeatDelay;
        //     if (this._frameElapsed < tt)
        //         return;
        //     this._frameElapsed -= tt;
        //     if (this._frameElapsed > this.interval)
        //         this._frameElapsed = this.interval;
        //     if (this.swing) {
        //         if (this._reversed) {
        //             this._frame--;
        //             if (this._frame <= 0) {
        //                 this._frame = 0;
        //                 this._repeatedCount++;
        //                 this._reversed = !this._reversed;
        //             }
        //         }
        //         else {
        //             this._frame++;
        //             if (this._frame > this._frameCount - 1) {
        //                 this._frame = Math.max(0, this._frameCount - 2);
        //                 this._repeatedCount++;
        //                 this._reversed = !this._reversed;
        //             }
        //         }
        //     }
        //     else {
        //         this._frame++;
        //         if (this._frame > this._frameCount - 1) {
        //             this._frame = 0;
        //             this._repeatedCount++;
        //         }
        //     }
        //     if (this._status == 1) //new loop
        //     {
        //         this._frame = this._start;
        //         this._frameElapsed = 0;
        //         this._status = 0;
        //     }
        //     else if (this._status == 2) //ending
        //     {
        //         this._frame = this._endAt;
        //         this._frameElapsed = 0;
        //         this._status = 3; //ended
        //         //play end
        //         if (this._endHandler) {
        //             var handler = this._endHandler;
        //             this._endHandler = null;
        //             handler();
        //         }
        //     }
        //     else {
        //         if (this._frame == this._end) {
        //             if (this._times > 0) {
        //                 this._times--;
        //                 if (this._times == 0)
        //                     this._status = 2;  //ending
        //                 else
        //                     this._status = 1; //new loop
        //             }
        //             else {
        //                 this._status = 1; //new loop
        //             }
        //         }
        //     }
        //     this.drawFrame();
        // }
        drawFrame() {
            if (this._frames && this._frameCount > 0 && this._frame < this._frames.length) {
                var frame = this._frames[this._frame];
                this.texture = frame.texture;
            }
            else
                this.texture = null;
            this.rebuild();
        }
        rebuild() {
        }
        destroy() {
            // if (this._movieTime) {
            //     this._movieTime.remove(false);
            //     this._movieTime = null;
            // }
            super.destroy();
        }
        checkTimer(playBoo = true) {
            if (!this._sprite)
                return;
            if (playBoo) {
                if (this._sprite.anims.isPlaying)
                    return;
                this._sprite.play(this._curKey);
            }
            else {
                this._sprite.stop();
            }
            // if (this._playing && this._frameCount > 0 && GRoot.inst.scene != null) {
            //     if (!this._movieTime) this._movieTime = this.scene.time.addEvent(this._movieUpdateEvent);
            // } else {
            //     if (this._movieTime) {
            //         this._movieTime.remove(false);
            //         this._movieTime = null;
            //     }
            // }
            //  throw new Error("TODO");
            // if (this._playing && this._frameCount > 0 && GRoot.inst.scene != null)
            //     Laya.timer.frameLoop(1, this, this.update);
            // else
            //     Laya.timer.clear(this, this.update);
        }
    }

    class GMovieClip extends GObject {
        constructor(scene, type) {
            super(scene, type);
        }
        get color() {
            return this._movieClip.color;
        }
        set color(value) {
            this._movieClip.color = value;
        }
        createDisplayObject() {
            this._displayObject = this._movieClip = new MovieClip(this.scene);
            // this._movieClip.mouseEnabled = false;
            this._displayObject["$owner"] = this;
        }
        getChild() {
            return null;
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
        advance(timeInMiniseconds) {
            this._movieClip.advance(timeInMiniseconds);
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        setPlaySettings(start, end, times, endAt, endHandler) {
            //  this._movieClip.setPlaySettings(start, end, times, endAt, endHandler);
        }
        set touchable(value) {
            this._touchable = false;
            // if (this._touchable != value) {
            //     this.setTouchable(value);
            // }
        }
        getProp(index) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    return this.color;
                case exports.ObjectPropID.Playing:
                    return this.playing;
                case exports.ObjectPropID.Frame:
                    return this.frame;
                case exports.ObjectPropID.TimeScale:
                    return this.timeScale;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    this.color = value;
                    break;
                case exports.ObjectPropID.Playing:
                    this.playing = value;
                    break;
                case exports.ObjectPropID.Frame:
                    this.frame = value;
                    break;
                case exports.ObjectPropID.TimeScale:
                    this.timeScale = value;
                    break;
                case exports.ObjectPropID.DeltaTime:
                    this.advance(value);
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructFromResource() {
            return new Promise((reslove, reject) => {
                var displayItem = this.packageItem.getBranch();
                this.sourceWidth = displayItem.width;
                this.sourceHeight = displayItem.height;
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                displayItem = displayItem.getHighResolution();
                displayItem.load().then((packageItem) => {
                    // this._movieClip.setSize(packageItem.width, packageItem.height);
                    this._movieClip.interval = packageItem.interval;
                    this._movieClip.swing = packageItem.swing;
                    this._movieClip.repeatDelay = packageItem.repeatDelay;
                    this._movieClip.frames = packageItem.frames;
                    reslove();
                });
            });
        }
        handleSizeChanged() {
            this._displayObject.setSize(this._width, this._height);
            // this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
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
        handleXYChanged() {
            var xv = this._x + this._xOffset;
            var yv = this._y + this._yOffset;
            if (this._pivotAsAnchor) {
                xv -= this._pivotX * this._width;
                yv -= this._pivotY * this._height;
            }
            if (this._pixelSnapping) {
                xv = Math.round(xv);
                yv = Math.round(yv);
            }
            let tmpX = xv + this._pivotOffsetX + this._movieClip.frames[0].width >> 1;
            let tmpY = yv + this._pivotOffsetY + this._movieClip.frames[0].height >> 1;
            this._displayObject.setPosition(tmpX, tmpY);
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

    exports.StageOrientation = void 0;
    (function (StageOrientation) {
        StageOrientation["AUTO"] = "auto";
        StageOrientation["PORTRAIT"] = "portrait";
        StageOrientation["LANDSCAPE"] = "landscape";
    })(exports.StageOrientation || (exports.StageOrientation = {}));
    exports.StageScaleMode = void 0;
    (function (StageScaleMode) {
        StageScaleMode["NO_SCALE"] = "noScale";
        StageScaleMode["SHOW_ALL"] = "showAll";
        StageScaleMode["NO_BORDER"] = "noBorder";
        StageScaleMode["EXACT_FIT"] = "exactFit";
        StageScaleMode["FIXED_WIDTH"] = "fixedWidth";
        StageScaleMode["FIXED_HEIGHT"] = "fixedHeight";
        StageScaleMode["FIXED_AUTO"] = "fixedAuto";
    })(exports.StageScaleMode || (exports.StageScaleMode = {}));
    exports.StageAlign = void 0;
    (function (StageAlign) {
        StageAlign[StageAlign["LEFT"] = 0] = "LEFT";
        StageAlign[StageAlign["CENTER"] = 1] = "CENTER";
        StageAlign[StageAlign["RIGHT"] = 2] = "RIGHT";
        StageAlign[StageAlign["TOP"] = 3] = "TOP";
        StageAlign[StageAlign["MIDDLE"] = 4] = "MIDDLE";
        StageAlign[StageAlign["BOTTOM"] = 5] = "BOTTOM";
    })(exports.StageAlign || (exports.StageAlign = {}));
    class DefaultUIStageOptions {
        constructor() {
            this.scaleMode = exports.StageScaleMode.SHOW_ALL;
            this.orientation = exports.StageOrientation.AUTO;
            this.resolution = 1;
            this.width = 800;
            this.height = 600;
            this.x = 0;
            this.y = 0;
            this.alignV = exports.StageAlign.MIDDLE;
            this.alignH = exports.StageAlign.CENTER;
            this.fallbackWidth = 0;
            this.fallbackHeight = 0;
            this.osd = "/";
            this.res = "resources/";
            this.resUI = "resources/ui";
            this.dpr = 1;
            // [key: string]: string | number;
        }
    }
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
        constructor(scene, rootContainer) {
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
            this.rootContainer = rootContainer;
            // this.rootContainer = this.scene.add.container(0, 0);
            // this.uiContainer = this.scene.add.container(0, 0);
            // this.dialogContainer = this.scene.add.container(0, 0);
            // this.tipsContainer = this.scene.add.container(0, 0);
            // this.maskContainer = this.scene.add.container(0, 0);
            // this.rootContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, GRoot.inst.width, GRoot.inst.height), Phaser.Geom.Rectangle.Contains);
            // this.scene.sys.displayList.add(this.rootContainer);
            // this.scene.sys.displayList.add(this.uiContainer);
            // this.scene.sys.displayList.add(this.dialogContainer);
            // this.scene.sys.displayList.add(this.tipsContainer);
            // this.scene.sys.displayList.add(this.maskContainer);
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
        get displayObject() {
            return this.rootContainer;
        }
        addChild(child, type, index = -1) {
            if (index < 0) {
                this.rootContainer.add(child);
            }
            else {
                this.rootContainer.addAt(child, index);
            }
            // switch (type) {
            //     case UISceneDisplay.LAYER_ROOT:
            //         if (index < 0) {
            //             this.rootContainer.add(child);
            //         } else {
            //             this.rootContainer.addAt(child, index);
            //         }
            //         break;
            //     case UISceneDisplay.LAYER_UI:
            //         if (index < 0) {
            //             this.uiContainer.add(child);
            //         } else {
            //             this.uiContainer.addAt(child, index);
            //         }
            //         break;
            //     case UISceneDisplay.LAYER_DIALOG:
            //         if (index < 0) {
            //             this.dialogContainer.add(child);
            //         } else {
            //             this.dialogContainer.addAt(child, index);
            //         }
            //         break;
            //     case UISceneDisplay.LAYER_TOOLTIPS:
            //         if (index < 0) {
            //             this.tipsContainer.add(child);
            //         } else {
            //             this.tipsContainer.addAt(child, index);
            //         }
            //         break;
            //     case UISceneDisplay.LAYER_MASK:
            //         if (index < 0) {
            //             this.maskContainer.add(child);
            //         } else {
            //             this.maskContainer.addAt(child, index);
            //         }
            //         break;
            // }
        }
        removeChild(child, type) {
            child.removeFromUpdateList();
            child.removeFromDisplayList();
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

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
                if (type == exports.ObjectType.Component) {
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
                if (baseType == exports.ObjectType.Component && buffer.version >= 2) {
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
                    case exports.ObjectType.Text:
                    case exports.ObjectType.RichText:
                    case exports.ObjectType.InputText:
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
                    case exports.ObjectType.List:
                    case exports.ObjectType.Tree:
                        {
                            buffer.seek(curPos, 8);
                            buffer.skip(2);
                            itemCount = buffer.readShort();
                            for (j = 0; j < itemCount; j++) {
                                nextPos = buffer.readShort();
                                nextPos += buffer.position;
                                buffer.skip(2); //url
                                if (type == exports.ObjectType.Tree)
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
                    case exports.ObjectType.Label:
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
                    case exports.ObjectType.Button:
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
                    case exports.ObjectType.ComboBox:
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
                case exports.GRAPHICSTYPE.CIRCLE:
                    var d;
                    x -= g.x;
                    y -= g.y;
                    d = x * x + y * y;
                    rst = d < g.radius * g.radius;
                    break;
                case exports.GRAPHICSTYPE.POLY:
                    x -= g.x;
                    y -= g.y;
                    rst = HitArea._ptInPolygon(x, y, g.points);
                    break;
                case exports.GRAPHICSTYPE.RECTANGLE:
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
    class PixelHitTestData {
        constructor() {
        }
        load(ba) {
            ba.getInt32();
            this.pixelWidth = ba.getInt32();
            this.scale = 1 / ba.readByte();
            var len = ba.getInt32();
            this.pixels = [];
            for (var i = 0; i < len; i++) {
                var j = ba.readByte();
                if (j < 0)
                    j += 256;
                this.pixels[i] = j;
            }
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
            this.x = 0;
            this.y = 0;
            this.tx = 0;
            this.ty = 0;
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
            if (this.highResolution && GRoot.contentScaleLevel > 0) {
                var itemId = this.highResolution[GRoot.contentScaleLevel - 1];
                if (itemId)
                    return this.owner.getItemById(itemId);
            }
            return this;
        }
        toString() {
            return this.name;
        }
        load() {
            return new Promise((resolve, reject) => {
                this.owner.getItemAsset(this).then((obj) => {
                    resolve(obj);
                });
            });
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
            this._emitter = new Phaser.Events.EventEmitter;
        }
        get emitter() {
            return this._emitter;
        }
        static get inst() {
            if (!AssetProxy._inst)
                AssetProxy._inst = new AssetProxy();
            return AssetProxy._inst;
        }
        getRes(key, type) {
            return new Promise((resolve, reject) => {
                if (!this._resMap.get(key)) {
                    const url = GRoot.inst.getResUIUrl(key);
                    this.load(key, url, type, (file) => {
                        this._emitter.emit(file + "_" + type + "_complete", file);
                        resolve(file);
                        this._resMap.set(key, url);
                    }, () => {
                        reject("__DEFAULT");
                    });
                }
                else {
                    resolve(GRoot.inst.getResUIUrl(key));
                }
            });
        }
        load(key, url, type, completeCallBack, _errorCallBack) {
            this._completeCallBack = completeCallBack;
            this._errorCallBack = _errorCallBack;
            this.addListen(type, key);
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
            GRoot.inst.scene.load.start();
        }
        addListen(type, key) {
            GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_COMPLETE + "-" + type + "-" + key, this.onLoadComplete, this);
            GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_LOAD_ERROR + "-" + type + "-" + key, this.onLoadError, this);
            GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_COMPLETE + "-" + type + "-" + key, this.onLoadComplete, this);
            GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR + "-" + type + "-" + key, this.onLoadError, this);
            GRoot.inst.scene.load.on(Phaser.Loader.Events.COMPLETE, this.totalComplete, this);
        }
        removeListen() {
            GRoot.inst.scene.load.off(Phaser.Loader.Events.COMPLETE, this.totalComplete, this);
        }
        startLoad() {
            GRoot.inst.scene.load.start();
        }
        totalComplete(loader, totalComplete, totalFailed) {
        }
        onLoadComplete(key, file) {
            if (this._completeCallBack)
                this._completeCallBack(key);
        }
        onLoadError(key) {
            if (this._errorCallBack)
                this._errorCallBack();
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
                url = GRoot.inst.getResUrl(url);
                const scene = GRoot.inst.scene;
                // scene preload bytearray
                const buf = scene.cache.binary.get(resKey);
                if (!buf) {
                    scene.load.binary(resKey, url);
                    scene.load.once("complete", () => {
                        pkg = new UIPackage();
                        pkg._resKey = resKey;
                        pkg.loadPackage(new ByteBuffer(scene.cache.binary.get(resKey)));
                        const promises = [];
                        for (const item of pkg._items) {
                            if (item.type === exports.PackageItemType.Atlas) {
                                // TODO loadTexture
                                promises.push();
                            }
                            else if (item.type === exports.PackageItemType.Sound) {
                                // TODO loadSound
                                promises.push();
                            }
                        }
                        let resolve2 = () => {
                            UIPackage._instById[pkg.id] = pkg;
                            UIPackage._instByName[pkg.name] = pkg;
                            UIPackage._instById[pkg._resKey] = pkg;
                            resolve(pkg);
                        };
                        if (promises.length > 0)
                            Promise.all(promises).then(resolve2);
                        else
                            resolve2();
                    });
                    scene.load.start();
                }
                else {
                    pkg = new UIPackage();
                    pkg._resKey = resKey;
                    pkg.loadPackage(new ByteBuffer(scene.cache.binary.get(resKey)));
                    const promises = [];
                    for (const item of pkg._items) {
                        if (item.type === exports.PackageItemType.Atlas) {
                            // TODO loadTexture
                            promises.push();
                        }
                        else if (item.type === exports.PackageItemType.Sound) {
                            // TODO loadSound
                            promises.push();
                        }
                    }
                    let resolve2 = () => {
                        UIPackage._instById[pkg.id] = pkg;
                        UIPackage._instByName[pkg.name] = pkg;
                        UIPackage._instById[pkg._resKey] = pkg;
                        resolve(pkg);
                    };
                    if (promises.length > 0)
                        Promise.all(promises).then(resolve2);
                    else
                        resolve2();
                }
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
            return new Promise((reslove, reject) => {
                var pi = UIPackage.getItemByURL(url);
                if (pi) {
                    pi.owner.internalCreateObject(pi, userClass).then((g) => {
                        return reslove(g);
                    });
                }
                else {
                    return reslove(null);
                }
            });
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
                return Promise.reject(`item ${url} does not exist`);
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
                    case exports.PackageItemType.Image:
                        {
                            pi.objectType = exports.ObjectType.Image;
                            var scaleOption = buffer.readByte();
                            if (scaleOption == 1) {
                                pi.scale9Grid = new Phaser.Geom.Rectangle();
                                pi.scale9Grid.x = buffer.readInt();
                                pi.scale9Grid.y = buffer.readInt();
                                pi.scale9Grid.width = buffer.readInt();
                                pi.scale9Grid.height = buffer.readInt();
                                pi.tileGridIndice = buffer.readInt();
                            }
                            else if (scaleOption == 2)
                                pi.scaleByTile = true;
                            pi.smoothing = buffer.readBool();
                            break;
                        }
                    case exports.PackageItemType.MovieClip:
                        {
                            pi.smoothing = buffer.readBool();
                            pi.objectType = exports.ObjectType.MovieClip;
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case exports.PackageItemType.Font:
                        {
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case exports.PackageItemType.Component:
                        {
                            var extension = buffer.readByte();
                            if (extension > 0)
                                pi.objectType = extension;
                            else
                                pi.objectType = exports.ObjectType.Component;
                            pi.rawData = buffer.readBuffer();
                            // Decls.UIObjectFactory.resolvePackageItemExtension(pi);
                            Decls.UIObjectFactory.resolveExtension(pi);
                            break;
                        }
                    case exports.PackageItemType.Atlas:
                    case exports.PackageItemType.Sound:
                    case exports.PackageItemType.Misc:
                        {
                            pi.file = path + pi.file;
                            break;
                        }
                    case exports.PackageItemType.Spine:
                    case exports.PackageItemType.DragonBones:
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
                if (item.type === exports.PackageItemType.Atlas) {
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
            return new Promise((reslove, reject) => {
                const pi = this._itemsByName[resName];
                if (pi) {
                    this.internalCreateObject(pi, userClass).then((g) => {
                        return reslove(g);
                    });
                }
                else {
                    return reslove(null);
                }
            });
        }
        /**
         * 创建内部子对象
         * @param item
         * @param userClass
         * @returns
         */
        internalCreateObject(item, userClass) {
            return new Promise((reslove, reject) => {
                const g = Decls.UIObjectFactory.newObject(item, userClass);
                if (g == null) {
                    return reslove(null);
                }
                UIPackage._constructing++;
                g.constructFromResource().then(() => {
                    UIPackage._constructing--;
                    return reslove(g);
                });
            });
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
        checkHasFrame(item) {
            if (!item)
                return false;
            if (item.texture) {
                const name = item.texture.key + "_" + item.name + "_" + item.width + "_" + item.height;
                const frame = item.texture.frames[name];
                if (frame) {
                    return true;
                }
            }
            return false;
        }
        getItemAsset(item) {
            return new Promise((reslove, reject) => {
                switch (item.type) {
                    case exports.PackageItemType.Image:
                        if (!item.decoded) {
                            item.decoded = true;
                            const sprite = this._sprites[item.id];
                            if (sprite) {
                                this.getItemAsset(sprite.atlas).then((texture) => {
                                    const atlasTexture = texture;
                                    if (atlasTexture) {
                                        item.texture = atlasTexture;
                                        item.x = sprite.rect.x;
                                        item.y = sprite.rect.y;
                                        item.tx = sprite.offset.x;
                                        item.ty = sprite.offset.y;
                                        item.width = sprite.rect.width;
                                        item.height = sprite.rect.height;
                                        const name = atlasTexture.key + "_" + item.name + "_" + item.width + "_" + item.height;
                                        const frame = atlasTexture.frames[name];
                                        if (!frame) {
                                            item.texture.add(name, 0, item.x, item.y, item.width, item.height);
                                        }
                                        // Laya.Texture.create(atlasTexture,
                                        //     sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height,
                                        //     sprite.offset.x, sprite.offset.y,
                                        //     sprite.originalSize.x, sprite.originalSize.y);
                                    }
                                    else {
                                        item.texture = null;
                                    }
                                    reslove(item);
                                });
                            }
                            else {
                                item.texture = null;
                                reslove(item);
                            }
                        }
                        else {
                            const sprite = this._sprites[item.id];
                            if (!sprite) {
                                item.texture = null;
                                reslove(item);
                            }
                            else {
                                let texture = GRoot.inst.scene.textures.get(sprite.atlas.file);
                                if (texture && texture.key !== "__MISSING") {
                                    item.texture = texture;
                                    item.x = sprite.rect.x;
                                    item.y = sprite.rect.y;
                                    item.tx = sprite.offset.x;
                                    item.ty = sprite.offset.y;
                                    item.width = sprite.rect.width;
                                    item.height = sprite.rect.height;
                                    const name = texture.key + "_" + item.name + "_" + item.width + "_" + item.height;
                                    const frame = texture.frames[name];
                                    if (!frame) {
                                        item.texture.add(name, 0, item.x, item.y, item.width, item.height);
                                    }
                                    reslove(item);
                                }
                                else {
                                    AssetProxy.inst.emitter.once(sprite.atlas.file + "_image" + "_complete", (file) => {
                                        texture = GRoot.inst.scene.textures.get(file);
                                        if (texture) {
                                            item.texture = texture;
                                            item.x = sprite.rect.x;
                                            item.y = sprite.rect.y;
                                            item.tx = sprite.offset.x;
                                            item.ty = sprite.offset.y;
                                            item.width = sprite.rect.width;
                                            item.height = sprite.rect.height;
                                            reslove(item);
                                        }
                                    }, this);
                                }
                            }
                        }
                        break;
                    case exports.PackageItemType.Atlas:
                        if (!item.decoded) {
                            AssetProxy.inst.getRes(item.file, LoaderType.IMAGE).then((texturePath) => {
                                item.decoded = true;
                                const texture = GRoot.inst.scene.textures.get(texturePath);
                                item.texture = texture;
                                reslove(item.texture);
                            });
                            //     if(!fgui.UIConfig.textureLinearSampling)
                            //     item.texture.isLinearSampling = false;
                        }
                        else {
                            reslove(item.texture);
                        }
                        break;
                    case exports.PackageItemType.Font:
                        console.error("no do font");
                        // if (!item.decoded) {
                        //     item.decoded = true;
                        // this.loadFont(item);
                        // }
                        // return item.bitmapFont;
                        break;
                    case exports.PackageItemType.MovieClip:
                        if (!item.decoded) {
                            item.decoded = true;
                            this.loadMovieClip(item).then(() => {
                                reslove(item);
                                return;
                            });
                        }
                        else {
                            reslove(item);
                        }
                        break;
                    case exports.PackageItemType.Component:
                        reslove(item.rawData);
                        break;
                    case exports.PackageItemType.Misc:
                        console.error("no do misc");
                        // if (item.file)
                        //     return AssetProxy.inst.getRes(item.file);
                        // else
                        //     return null;
                        break;
                    default:
                        reslove(null);
                        break;
                }
            });
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
                case exports.PackageItemType.Spine:
                case exports.PackageItemType.DragonBones:
                // 
                default:
                    this.getItemAsset(item).then(() => {
                        onComplete(null, item);
                    });
                    break;
            }
        }
        loadMovieClip(item) {
            return new Promise((reslove, rejcet) => {
                var buffer = item.rawData;
                buffer.seek(0, 0);
                item.interval = buffer.readInt();
                item.swing = buffer.readBool();
                item.repeatDelay = buffer.readInt();
                buffer.seek(0, 1);
                var frameCount = buffer.readShort();
                item.frames = [];
                var spriteId;
                var sprite;
                const fun0 = (i) => {
                    // 超过mc的影片帧数则返回
                    if (i >= frameCount) {
                        reslove(item);
                        return;
                    }
                    //for (var i: number = index; i < frameCount; i++) {
                    var nextPos = buffer.readShort();
                    nextPos += buffer.position;
                    buffer.readInt();
                    buffer.readInt();
                    buffer.readInt(); //width
                    buffer.readInt(); //height
                    let frame = { addDelay: buffer.readInt() };
                    spriteId = buffer.readS();
                    if (spriteId != null && (sprite = this._sprites[spriteId]) != null) {
                        fun1(i, nextPos).then((resolveIndex) => {
                            item.frames[i]["addDelay"] = frame.addDelay;
                            fun0(resolveIndex + 1);
                        });
                    }
                    // else {
                    //     item.frames[i] = frame;
                    //     buffer.position = nextPos;
                    //     fun0(i + 1);
                    // }
                    // }
                };
                const fun1 = (i, nextPos) => {
                    return new Promise((resolve) => {
                        this.getItemAsset(sprite.atlas).then((texture) => {
                            const atlasTexture = texture;
                            const atlasX = this._sprites[spriteId].rect.x;
                            const atlasY = this._sprites[spriteId].rect.y;
                            const frameWid = this._sprites[spriteId].rect.width;
                            const frameHei = this._sprites[spriteId].rect.height;
                            atlasTexture.add(spriteId, 0, atlasX, atlasY, frameWid, frameHei);
                            // if (!GRoot.inst.scene.textures.exists(spriteId)) {
                            //     const canvas = GRoot.inst.scene.textures.createCanvas(spriteId, item.width, item.height);
                            //     canvas.drawFrame(atlasTexture.key, spriteId, 0, 0);
                            // }
                            const frame = atlasTexture.frames[spriteId];
                            item.frames[i] = frame;
                            buffer.position = nextPos;
                            resolve(i);
                        });
                    });
                };
                fun0(0);
            });
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
            this._timeDelta = 0.08;
            this._owner = owner;
            this._refreshTimeEvent = { delay: this._timeDelta, callback: this.refresh, callbackScope: this };
            const _tweenUp = this._timeDelta; //  / owner.scene.game.config.fps.target;
            this._tweenUpdateTimeEvent = { delay: _tweenUp, callback: this.tweenUpdate, callbackScope: this, loop: true };
            this._mask = this._owner.scene.make.graphics(undefined, false);
            this._maskContainer = this._owner.scene.make.container(undefined);
            // this._maskContainer.setPosition(this._owner.x, this._owner.y);
            this._owner.displayObject.add(this._maskContainer);
            // (<Phaser.GameObjects.Container>this._maskContainer).setMask(this._mask.createGeometryMask());
            this._container = this._owner._container;
            this._container.setPosition(0, 0);
            this._maskContainer.add(this._container);
            this._mouseWheelEnabled = true;
            this._xPos = 0;
            this._yPos = 0;
            this._aniFlag = 0;
            this._tweening = 0;
            this._loop = 0;
            this._footerLockedSize = 0;
            this._headerLockedSize = 0;
            this._scrollBarMargin = new Margin();
            this._viewSize = new Phaser.Geom.Point();
            this._contentSize = new Phaser.Geom.Point();
            this._pageSize = new Phaser.Geom.Point(1, 1);
            this._overlapSize = new Phaser.Geom.Point();
            this._tweenTime = new Phaser.Geom.Point();
            this._tweenStart = new Phaser.Geom.Point();
            this._tweenDuration = new Phaser.Geom.Point();
            this._tweenChange = new Phaser.Geom.Point();
            this._velocity = new Phaser.Geom.Point();
            this._containerPos = new Phaser.Geom.Point();
            this._beginTouchPos = new Phaser.Geom.Point();
            this._lastTouchPos = new Phaser.Geom.Point();
            this._lastTouchGlobalPos = new Phaser.Geom.Point();
            this._scrollStep = UIConfig.defaultScrollStep;
            this._mouseWheelStep = this._scrollStep * 2;
            this._decelerationRate = UIConfig.defaultScrollDecelerationRate;
            this._owner.scene.input.on("pointerdown", this.__mouseDown, this);
            // this._owner.on("wheel", this.__mouseWheel, this);
        }
        setup(buffer) {
            return new Promise((resolve, reject) => {
                this._scrollType = buffer.readByte();
                var scrollBarDisplay = buffer.readByte();
                var flags = buffer.readInt();
                if (buffer.readBool()) {
                    this._scrollBarMargin.top = buffer.readInt();
                    this._scrollBarMargin.bottom = buffer.readInt();
                    this._scrollBarMargin.left = buffer.readInt();
                    this._scrollBarMargin.right = buffer.readInt();
                }
                var vtScrollBarRes = buffer.readS();
                var hzScrollBarRes = buffer.readS();
                var headerRes = buffer.readS();
                var footerRes = buffer.readS();
                if ((flags & 1) != 0)
                    this._displayOnLeft = true;
                if ((flags & 2) != 0)
                    this._snapToItem = true;
                if ((flags & 4) != 0)
                    this._displayInDemand = true;
                if ((flags & 8) != 0)
                    this._pageMode = true;
                if (flags & 16)
                    this._touchEffect = true;
                else if (flags & 32)
                    this._touchEffect = false;
                else
                    this._touchEffect = UIConfig.defaultScrollTouchEffect;
                if (flags & 64)
                    this._bouncebackEffect = true;
                else if (flags & 128)
                    this._bouncebackEffect = false;
                else
                    this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
                if ((flags & 256) != 0)
                    this._inertiaDisabled = true;
                if ((flags & 512) == 0)
                    this.maskScrollRect = new Phaser.Geom.Rectangle(); //this._maskContainer["scrollRect"] = new Phaser.Geom.Rectangle();
                if ((flags & 1024) != 0)
                    this._floating = true;
                if ((flags & 2048) != 0)
                    this._dontClipMargin = true;
                if (scrollBarDisplay == exports.ScrollBarDisplayType.Default)
                    scrollBarDisplay = UIConfig.defaultScrollBarDisplay;
                const fun1 = () => {
                    return new Promise((resolve, reject) => {
                        if (headerRes) {
                            UIPackage.createObjectFromURL(headerRes).then((header) => {
                                this._header = header;
                                if (!this._header)
                                    throw new Error("FairyGUI: cannot create scrollPane this.header from " + headerRes);
                                resolve();
                            });
                        }
                        else {
                            resolve();
                        }
                    });
                };
                const fun2 = () => {
                    return new Promise((resolve, reject) => {
                        if (footerRes) {
                            UIPackage.createObjectFromURL(footerRes).then((footer) => {
                                this._footer = footer;
                                if (!this._footer)
                                    throw new Error("FairyGUI: cannot create scrollPane this.footer from " + footerRes);
                                resolve();
                            });
                        }
                        else {
                            resolve();
                        }
                    });
                };
                if (scrollBarDisplay != exports.ScrollBarDisplayType.Hidden) {
                    if (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) {
                        var res = vtScrollBarRes ? vtScrollBarRes : UIConfig.verticalScrollBar;
                        if (res) {
                            UIPackage.createObjectFromURL(res).then((scrollBar) => {
                                this._vtScrollBar = scrollBar;
                                if (!this._vtScrollBar)
                                    throw "cannot create scrollbar from " + res;
                                this._vtScrollBar.setScrollPane(this, true);
                                this._owner.displayObject.add(this._vtScrollBar.displayObject);
                                if (scrollBarDisplay == exports.ScrollBarDisplayType.Auto)
                                    this._scrollBarDisplayAuto = true;
                                if (this._scrollBarDisplayAuto) {
                                    if (this._vtScrollBar)
                                        this._vtScrollBar.displayObject.visible = false;
                                    if (this._hzScrollBar)
                                        this._hzScrollBar.displayObject.visible = false;
                                }
                                fun1().then(() => {
                                    fun2().then(() => {
                                        if (this._header || this._footer)
                                            this._refreshBarAxis = (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) ? "y" : "x";
                                        this.setSize(this.owner.initWidth, this.owner.initHeight);
                                        resolve();
                                    });
                                });
                            });
                        }
                        else {
                            fun1().then(() => {
                                fun2().then(() => {
                                    if (this._header || this._footer)
                                        this._refreshBarAxis = (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) ? "y" : "x";
                                    this.setSize(this.owner.initWidth, this.owner.initHeight);
                                    resolve();
                                });
                            });
                        }
                    }
                    if (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Horizontal) {
                        res = hzScrollBarRes ? hzScrollBarRes : UIConfig.horizontalScrollBar;
                        if (res) {
                            UIPackage.createObjectFromURL(res).then((scrollBar) => {
                                this._hzScrollBar = scrollBar;
                                if (!this._hzScrollBar)
                                    throw "cannot create scrollbar from " + res;
                                this._hzScrollBar.setScrollPane(this, false);
                                this._owner.displayObject.add(this._hzScrollBar.displayObject);
                                if (scrollBarDisplay == exports.ScrollBarDisplayType.Auto)
                                    this._scrollBarDisplayAuto = true;
                                if (this._scrollBarDisplayAuto) {
                                    if (this._vtScrollBar)
                                        this._vtScrollBar.displayObject.visible = false;
                                    if (this._hzScrollBar)
                                        this._hzScrollBar.displayObject.visible = false;
                                }
                                fun1().then(() => {
                                    fun2().then(() => {
                                        if (this._header || this._footer)
                                            this._refreshBarAxis = (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) ? "y" : "x";
                                        this.setSize(this.owner.initWidth, this.owner.initHeight);
                                        resolve();
                                    });
                                });
                            });
                        }
                        else {
                            fun1().then(() => {
                                fun2().then(() => {
                                    if (this._header || this._footer)
                                        this._refreshBarAxis = (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) ? "y" : "x";
                                    this.setSize(this.owner.initWidth, this.owner.initHeight);
                                    resolve();
                                });
                            });
                        }
                    }
                }
                else {
                    this._mouseWheelEnabled = false;
                    fun1().then(() => {
                        fun2().then(() => {
                            if (this._header || this._footer)
                                this._refreshBarAxis = (this._scrollType == exports.ScrollType.Both || this._scrollType == exports.ScrollType.Vertical) ? "y" : "x";
                            this.setSize(this.owner.initWidth, this.owner.initHeight);
                            resolve();
                        });
                    });
                }
            });
        }
        dispose() {
            if (ScrollPane.draggingPane == this) {
                ScrollPane.draggingPane = null;
            }
            if (this._tweening != 0) {
                if (this._tweenUpdateTime) {
                    this._tweenUpdateTime.remove(false);
                    this._tweenUpdateTime = null;
                    // console.log("remove tweenupdate");
                }
                // Laya.timer.clear(this, this.tweenUpdate);
            }
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
            this._owner.scene.input.off("pointermove", this.__mouseMove, this);
            this._owner.scene.input.off("pointerup", this.__mouseUp, this);
            // this._owner.scene.input.off("pointerout", this.__mouseUp, this);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            _gestureFlag = 0;
            this._dragged = false;
            this._maskContainer.disableInteractive();
            this._maskContainer.removeInteractive();
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
                if (this._scrollType == exports.ScrollType.Horizontal)
                    this.setCurrentPageX(c.selectedIndex, true);
                else
                    this.setCurrentPageY(c.selectedIndex, true);
            }
        }
        updatePageController() {
            if (this._pageController != null && !this._pageController.changing) {
                var index;
                if (this._scrollType == exports.ScrollType.Horizontal)
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
            var mx = 0, my = 0;
            if (this._dontClipMargin) {
                if (this._displayOnLeft && this._vtScrollBar && !this._floating)
                    mx = this._vtScrollBar.width;
            }
            else {
                if (this._displayOnLeft && this._vtScrollBar && !this._floating)
                    mx = this._owner.margin.left + this._vtScrollBar.width;
                else
                    mx = this._owner.margin.left;
                my = this._owner.margin.top;
            }
            this._maskContainer.setPosition(mx, my);
            mx = this._owner._alignOffset.x;
            my = this._owner._alignOffset.y;
            if (mx != 0 || my != 0 || this._dontClipMargin) {
                if (!this._alignContainer) {
                    this._alignContainer = this._owner.scene.make.container(undefined);
                    this._maskContainer.add(this._alignContainer);
                    this._alignContainer.add(this._container);
                }
            }
            if (this._alignContainer) {
                if (this._dontClipMargin) {
                    mx += this._owner.margin.left;
                    my += this._owner.margin.top;
                }
                this._alignContainer.setPosition(mx, my);
            }
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
            // console.log("contentsize ===>", aWidth, aHeight);
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
            if (this._displayInDemand) {
                this._vScrollNone = this._contentSize.y <= this._viewSize.y;
                this._hScrollNone = this._contentSize.x <= this._viewSize.x;
            }
            if (this._vtScrollBar) {
                if (this._contentSize.y == 0)
                    this._vtScrollBar.setDisplayPerc(0);
                else
                    this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y));
            }
            if (this._hzScrollBar) {
                if (this._contentSize.x == 0)
                    this._hzScrollBar.setDisplayPerc(0);
                else
                    this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x));
            }
            // console.log("handlesize ===>", this._owner.displayObject);
            this.updateScrollBarVisible();
            if (this.maskScrollRect) {
                var rect = new Phaser.Geom.Rectangle(); //this._maskContainer["scrollRect"];
                if (rect) {
                    rect.width = this._viewSize.x;
                    rect.height = this._viewSize.y;
                    if (this._vScrollNone && this._vtScrollBar)
                        rect.width += this._vtScrollBar.width;
                    if (this._hScrollNone && this._hzScrollBar)
                        rect.height += this._hzScrollBar.height;
                    if (this._dontClipMargin) {
                        rect.width += (this._owner.margin.left + this._owner.margin.right);
                        rect.height += (this._owner.margin.top + this._owner.margin.bottom);
                    }
                    this.maskScrollRect = rect;
                    this._maskContainer.clearMask();
                    this._mask.clear();
                    this._mask.fillStyle(0x00ff00, .4);
                    this._mask.fillRect(this._owner.x, this._owner.y, this.maskScrollRect.width, this.maskScrollRect.height);
                    this._maskContainer.setInteractive(this.maskScrollRect, Phaser.Geom.Rectangle.Contains);
                    // this._maskContainer.add(this._mask);
                    // const g = this._mask.createGeometryMask();
                    // console.log("g====>", g);
                    this._maskContainer.setMask(this._mask.createGeometryMask());
                }
            }
            if (this._scrollType == exports.ScrollType.Horizontal || this._scrollType == exports.ScrollType.Both)
                this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
            else
                this._overlapSize.x = 0;
            if (this._scrollType == exports.ScrollType.Vertical || this._scrollType == exports.ScrollType.Both)
                this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
            else
                this._overlapSize.y = 0;
            //边界检查
            this._xPos = ToolSet.clamp(this._xPos, 0, this._overlapSize.x);
            this._yPos = ToolSet.clamp(this._yPos, 0, this._overlapSize.y);
            if (this._refreshBarAxis != null) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                if (this._refreshBarAxis == "x") {
                    this._container.setPosition(ToolSet.clamp(this._container.x, -max, this._headerLockedSize), ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
                }
                else {
                    this._container.setPosition(ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), ToolSet.clamp(this._container.y, -max, this._headerLockedSize));
                }
                if (this._header) {
                    if (this._refreshBarAxis == "x")
                        this._header.height = this._viewSize.y;
                    else
                        this._header.width = this._viewSize.x;
                }
                if (this._footer) {
                    if (this._refreshBarAxis == "y")
                        this._footer.height = this._viewSize.y;
                    else
                        this._footer.width = this._viewSize.x;
                }
            }
            else {
                this._container.setPosition(ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
            }
            this.updateScrollBarPos();
            if (this._pageMode)
                this.updatePageController();
        }
        posChanged(ani) {
            if (this._aniFlag == 0)
                this._aniFlag = ani ? 1 : -1;
            else if (this._aniFlag == 1 && !ani)
                this._aniFlag = -1;
            this._needRefresh = true;
            // if (this._refreshTime) {
            //     this._refreshTime.remove(false);
            //     this._refreshTime = null;
            //     // console.log("remove refreshTime");
            // }
            // this._refreshTime = this._owner.scene.time.addEvent(this._refreshTimeEvent);
            this.refresh();
            // Laya.timer.callLater(this, this.refresh);
        }
        refresh() {
            if (!this._owner.displayObject) {
                return;
            }
            this._needRefresh = false;
            if (this._refreshTime) {
                this._refreshTime.remove(false);
                this._refreshTime = null;
                // console.log("remove refreshTime");
            }
            // Laya.timer.clear(this, this.refresh);
            if (this._pageMode || this._snapToItem) {
                sEndPos.setTo(-this._xPos, -this._yPos);
                this.alignPosition(sEndPos, false);
                this._xPos = -sEndPos.x;
                this._yPos = -sEndPos.y;
            }
            this.refresh2();
            Events.dispatch(Events.SCROLL, this._owner.displayObject);
            if (this._needRefresh) //在onScroll事件里开发者可能修改位置，这里再刷新一次，避免闪烁
             {
                this._needRefresh = false;
                if (this._refreshTime) {
                    this._refreshTime.remove(false);
                    this._refreshTime = null;
                    // console.log("remove refreshTime");
                }
                // Laya.timer.clear(this, this.refresh);
                this.refresh2();
            }
            this.updateScrollBarPos();
            this._aniFlag = 0;
        }
        refresh2() {
            if (this._aniFlag == 1 && !this._dragged) {
                var posX;
                var posY;
                if (this._overlapSize.x > 0)
                    posX = -Math.floor(this._xPos);
                else {
                    if (this._container.x != 0)
                        this._container.x = 0;
                    posX = 0;
                }
                if (this._overlapSize.y > 0)
                    posY = -Math.floor(this._yPos);
                else {
                    if (this._container.y != 0)
                        this._container.y = 0;
                    posY = 0;
                }
                if (posX != this._container.x || posY != this._container.y) {
                    this._tweenDuration.setTo(TWEEN_TIME_GO, TWEEN_TIME_GO);
                    this._tweenStart.setTo(this._container.x, this._container.y);
                    this._tweenChange.setTo(posX - this._tweenStart.x, posY - this._tweenStart.y);
                    this.startTween(1);
                }
                else if (this._tweening != 0)
                    this.killTween();
            }
            else {
                if (this._tweening != 0)
                    this.killTween();
                // console.log("refresh ===>", this._xPos, this._yPos);
                this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
                this.loopCheckingCurrent();
            }
            if (this._pageMode)
                this.updatePageController();
        }
        __mouseDown(pointer, gameobject) {
            if (!this._touchEffect)
                return;
            if ((this._vtScrollBar && this.checkInBounds(pointer, this._vtScrollBar.displayObject))
                || (this._hzScrollBar && this.checkInBounds(pointer, this._hzScrollBar.displayObject))) {
                return;
            }
            if (this._tweening != 0) {
                this.killTween();
                this._dragged = true;
            }
            else {
                this._dragged = false;
            }
            // ==== check pointer in owner.displayobject
            if (this.checkInBounds(pointer, this.owner.displayObject)) {
                var pt = new Phaser.Geom.Point(pointer.downX, pointer.downY); //this._owner.globalToLocal(pointer.worldX, pointer.worldY, s_vec2);
                this._containerPos.setTo(this._container.x, this._container.y);
                this._beginTouchPos.setTo(pt.x, pt.y);
                this._lastTouchPos.setTo(pointer.downX, pointer.downY);
                this._lastTouchGlobalPos.setTo(pointer.worldX, pointer.worldY);
                this._isHoldAreaDone = false;
                this._velocity.setTo(0, 0);
                this._velocityScale = 1;
                this._lastMoveTime = this._owner.scene.time.now; // Laya.timer.currTimer / 1000;
                this._owner.scene.input.on("pointermove", this.__mouseMove, this);
                this._owner.scene.input.on("pointerup", this.__mouseUp, this);
                // this._owner.scene.input.on("pointerout", this.__mouseUp, this);
            }
        }
        checkInBounds(pointer, gameObject) {
            if (!this.mRectangle) {
                this.mRectangle = new Phaser.Geom.Rectangle(0, 0, 0, 0);
            }
            const worldMatrix = gameObject.getWorldTransformMatrix();
            const zoom = worldMatrix.scaleX ? worldMatrix.scaleX : 1;
            this.mRectangle.left = 0;
            this.mRectangle.right = gameObject.width;
            this.mRectangle.top = 0;
            this.mRectangle.bottom = gameObject.height;
            const x = (pointer.x - worldMatrix.tx) / zoom;
            const y = (pointer.y - worldMatrix.ty) / zoom;
            // 点击在范围内
            if (this.mRectangle.left <= x && this.mRectangle.right >= x && this.mRectangle.top <= y && this.mRectangle.bottom >= y) {
                return true;
            }
            return false;
        }
        __mouseMove(pointer) {
            if (!this._touchEffect || this.owner.isDisposed)
                return;
            if (ScrollPane.draggingPane && ScrollPane.draggingPane != this || GObject.draggingObject) //已经有其他拖动
                return;
            if (!this.checkInBounds(pointer, this.owner.displayObject)) {
                // 防止出框后回弹
                // this.__mouseUp();
                return;
            }
            var sensitivity = UIConfig.touchScrollSensitivity;
            var pt = new Phaser.Geom.Point(pointer.x, pointer.y); // this._owner.globalToLocal(pointer.worldX, pointer.worldY, s_vec2);
            var diff, diff2;
            var sv, sh;
            if (this._scrollType == exports.ScrollType.Vertical) {
                if (!this._isHoldAreaDone) {
                    //表示正在监测垂直方向的手势
                    _gestureFlag |= 1;
                    diff = Math.abs(this._beginTouchPos.x - pt.y);
                    if (diff < sensitivity)
                        return;
                    if ((_gestureFlag & 2) != 0) //已经有水平方向的手势在监测，那么我们用严格的方式检查是不是按垂直方向移动，避免冲突
                     {
                        diff2 = Math.abs(this._beginTouchPos.x - pt.x);
                        if (diff < diff2) //不通过则不允许滚动了
                            return;
                    }
                }
                sv = true;
            }
            else if (this._scrollType == exports.ScrollType.Horizontal) {
                if (!this._isHoldAreaDone) {
                    _gestureFlag |= 2;
                    diff = Math.abs(this._beginTouchPos.x - pt.x);
                    if (diff < sensitivity)
                        return;
                    if ((_gestureFlag & 1) != 0) {
                        diff2 = Math.abs(this._beginTouchPos.y - pt.y);
                        if (diff < diff2)
                            return;
                    }
                }
                sh = true;
            }
            else {
                _gestureFlag = 3;
                if (!this._isHoldAreaDone) {
                    diff = Math.abs(this._beginTouchPos.y - pt.y);
                    if (diff < sensitivity) {
                        diff = Math.abs(this._beginTouchPos.x - pt.x);
                        if (diff < sensitivity)
                            return;
                    }
                }
                sv = sh = true;
            }
            var newPosX = Math.floor(this._containerPos.x + pt.x - this._beginTouchPos.x);
            var newPosY = Math.floor(this._containerPos.y + pt.y - this._beginTouchPos.y);
            if (sv) {
                if (newPosY > 0) {
                    if (!this._bouncebackEffect)
                        this._container.y = 0;
                    else if (this._header && this._header.maxHeight != 0)
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.maxHeight));
                    else
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * PULL_RATIO));
                }
                else if (newPosY < -this._overlapSize.y) {
                    if (!this._bouncebackEffect)
                        this._container.y = -this._overlapSize.y;
                    else if (this._footer && this._footer.maxHeight > 0)
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._footer.maxHeight) - this._overlapSize.y);
                    else
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._viewSize.y * PULL_RATIO) - this._overlapSize.y);
                }
                else
                    this._container.y = newPosY;
            }
            if (sh) {
                if (newPosX > 0) {
                    if (!this._bouncebackEffect)
                        this._container.x = 0;
                    else if (this._header && this._header.maxWidth != 0)
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.maxWidth));
                    else
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * PULL_RATIO));
                }
                else if (newPosX < 0 - this._overlapSize.x) {
                    if (!this._bouncebackEffect)
                        this._container.x = -this._overlapSize.x;
                    else if (this._footer && this._footer.maxWidth > 0)
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.maxWidth) - this._overlapSize.x);
                    else
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * PULL_RATIO) - this._overlapSize.x);
                }
                else
                    this._container.x = newPosX;
            }
            //更新速度
            var frameRate = Utils.FPSTarget;
            var now = this._owner.scene.time.now; // Laya.timer.currTimer / 1000;
            var deltaTime = Math.max(now - this._lastMoveTime, 1 / frameRate);
            var deltaPositionX = pt.x - this._lastTouchPos.x;
            var deltaPositionY = pt.y - this._lastTouchPos.y;
            if (!sh)
                deltaPositionX = 0;
            if (!sv)
                deltaPositionY = 0;
            if (deltaTime != 0) {
                var elapsed = deltaTime * frameRate - 1;
                if (elapsed > 1) //速度衰减
                 {
                    var factor = Math.pow(0.833, elapsed);
                    this._velocity.x = this._velocity.x * factor;
                    this._velocity.y = this._velocity.y * factor;
                }
                this._velocity.x = ToolSet.lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                this._velocity.y = ToolSet.lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
            }
            /*速度计算使用的是本地位移，但在后续的惯性滚动判断中需要用到屏幕位移，所以这里要记录一个位移的比例。
            */
            var deltaGlobalPositionX = this._lastTouchGlobalPos.x - pointer.worldX;
            var deltaGlobalPositionY = this._lastTouchGlobalPos.y - pointer.worldY;
            if (deltaPositionX != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
            else if (deltaPositionY != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
            // console.log("update v 1===>", this._velocityScale);
            this._lastTouchPos.setTo(pt.x, pt.y);
            this._lastTouchGlobalPos.setTo(pointer.worldX, pointer.worldY);
            this._lastMoveTime = now;
            //同步更新pos值
            if (this._overlapSize.x > 0)
                this._xPos = ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
            if (this._overlapSize.y > 0)
                this._yPos = ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
            //循环滚动特别检查
            if (this._loop != 0) {
                newPosX = this._container.x;
                newPosY = this._container.y;
                if (this.loopCheckingCurrent()) {
                    this._containerPos.x += this._container.x - newPosX;
                    this._containerPos.y += this._container.y - newPosY;
                }
            }
            ScrollPane.draggingPane = this;
            this._isHoldAreaDone = true;
            this._dragged = true;
            this._maskContainer.disableInteractive();
            this._maskContainer.removeInteractive();
            this.updateScrollBarPos();
            this.updateScrollBarVisible();
            if (this._pageMode)
                this.updatePageController();
            Events.dispatch(Events.SCROLL, this._owner.displayObject);
        }
        __mouseUp() {
            if (this._owner.isDisposed)
                return;
            this._owner.scene.input.off("pointermove", this.__mouseMove, this);
            this._owner.scene.input.off("pointerup", this.__mouseUp, this);
            // this._owner.scene.input.off("pointerout", this.__mouseUp, this);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            _gestureFlag = 0;
            if (!this._dragged || !this._touchEffect) {
                this._dragged = false;
                if (this.maskScrollRect)
                    this._maskContainer.setInteractive(this.maskScrollRect, Phaser.Geom.Rectangle.Contains);
                return;
            }
            this._dragged = false;
            if (this.maskScrollRect)
                this._maskContainer.setInteractive(this.maskScrollRect, Phaser.Geom.Rectangle.Contains);
            this._tweenStart.setTo(this._container.x, this._container.y);
            sEndPos.setTo(this._tweenStart.x, this._tweenStart.y);
            var flag = false;
            if (this._container.x > 0) {
                sEndPos.x = 0;
                flag = true;
            }
            else if (this._container.x < -this._overlapSize.x) {
                sEndPos.x = -this._overlapSize.x;
                flag = true;
            }
            if (this._container.y > 0) {
                sEndPos.y = 0;
                flag = true;
            }
            else if (this._container.y < -this._overlapSize.y) {
                sEndPos.y = -this._overlapSize.y;
                flag = true;
            }
            if (flag) {
                this._tweenChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
                if (this._tweenChange.x < -UIConfig.touchDragSensitivity || this._tweenChange.y < -UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    Events.dispatch(Events.PULL_DOWN_RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }
                else if (this._tweenChange.x > UIConfig.touchDragSensitivity || this._tweenChange.y > UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    Events.dispatch(Events.PULL_UP_RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }
                if (this._headerLockedSize > 0 && sEndPos[this._refreshBarAxis] == 0) {
                    sEndPos[this._refreshBarAxis] = this._headerLockedSize;
                    this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                }
                else if (this._footerLockedSize > 0 && sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    sEndPos[this._refreshBarAxis] = -max;
                    this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                }
                this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            }
            else {
                //更新速度
                if (!this._inertiaDisabled) {
                    var frameRate = Utils.FPSTarget; // Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60;
                    var now = this._owner.scene.time.now;
                    var elapsed = (now - this._lastMoveTime) * frameRate - 1;
                    if (elapsed > 1) {
                        var factor = Math.pow(0.833, elapsed);
                        this._velocity.x = this._velocity.x * factor;
                        this._velocity.y = this._velocity.y * factor;
                    }
                    //根据速度计算目标位置和需要时间
                    this.updateTargetAndDuration(this._tweenStart, sEndPos);
                }
                else
                    this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                sOldChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
                //调整目标位置
                this.loopCheckingTarget(sEndPos);
                if (this._pageMode || this._snapToItem)
                    this.alignPosition(sEndPos, true);
                this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                    this.updateScrollBarVisible();
                    return;
                }
                //如果目标位置已调整，随之调整需要时间
                if (this._pageMode || this._snapToItem) {
                    this.fixDuration("x", sOldChange.x);
                    this.fixDuration("y", sOldChange.y);
                }
            }
            this.startTween(2);
        }
        maskPosChange(x, y) {
            if (this.maskScrollRect) {
                // var rect: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle()//this._maskContainer["scrollRect"];
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
                // this.maskScrollRect = rect;
                this._maskContainer.clearMask();
                this._mask.clear();
                this._mask.fillStyle(0x00ff00, .4);
                this._mask.fillRect(x, y, this.maskScrollRect.width, this.maskScrollRect.height);
                this._maskContainer.setInteractive(this.maskScrollRect, Phaser.Geom.Rectangle.Contains);
                // this._maskContainer.add(this._mask);
                // const g = this._mask.createGeometryMask();
                // console.log("g====>", g);
                this._maskContainer.setMask(this._mask.createGeometryMask());
                //  }
            }
        }
        __click() {
            this._dragged = false;
        }
        __mouseWheel(pointer, gameObjects, deltaX, deltaY, deltaZ) {
            if (!this._mouseWheelEnabled)
                return;
            var delta = deltaY;
            delta = delta > 0 ? -1 : (delta < 0 ? 1 : 0);
            if (this._overlapSize.x > 0 && this._overlapSize.y == 0) {
                if (this._pageMode)
                    this.setPosX(this._xPos + this._pageSize.x * delta, false);
                else
                    this.setPosX(this._xPos + this._mouseWheelStep * delta, false);
            }
            else {
                if (this._pageMode)
                    this.setPosY(this._yPos + this._pageSize.y * delta, false);
                else
                    this.setPosY(this._yPos + this._mouseWheelStep * delta, false);
            }
        }
        updateScrollBarPos() {
            if (this._vtScrollBar)
                this._vtScrollBar.setScrollPerc(this._overlapSize.y == 0 ? 0 : ToolSet.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y);
            if (this._hzScrollBar)
                this._hzScrollBar.setScrollPerc(this._overlapSize.x == 0 ? 0 : ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x);
            this.checkRefreshBar();
        }
        updateScrollBarVisible() {
            if (this._vtScrollBar) {
                if (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone)
                    this._vtScrollBar.displayObject.visible = false;
                else
                    this.updateScrollBarVisible2(this._vtScrollBar);
            }
            if (this._hzScrollBar) {
                if (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone)
                    this._hzScrollBar.displayObject.visible = false;
                else
                    this.updateScrollBarVisible2(this._hzScrollBar);
            }
        }
        updateScrollBarVisible2(bar) {
            if (this._scrollBarDisplayAuto)
                GTween.kill(bar, false, "alpha");
            if (this._scrollBarDisplayAuto && this._tweening == 0 && !this._dragged && !bar.gripDragging) {
                if (bar.displayObject.visible)
                    GTween.to(1, 0, 0.5).setDelay(0.5).onComplete(this.__barTweenComplete, this).setTarget(bar, "alpha");
            }
            else {
                bar.alpha = 1;
                bar.displayObject.visible = true;
            }
        }
        __barTweenComplete(tweener) {
            var bar = (tweener.target);
            bar.alpha = 1;
            bar.displayObject.visible = false;
        }
        getLoopPartSize(division, axis) {
            return (this._contentSize[axis] + (axis == "x" ? (this._owner).columnGap : (this._owner).lineGap)) / division;
        }
        loopCheckingCurrent() {
            var changed = false;
            if (this._loop == 1 && this._overlapSize.x > 0) {
                if (this._xPos < 0.001) {
                    this._xPos += this.getLoopPartSize(2, "x");
                    changed = true;
                }
                else if (this._xPos >= this._overlapSize.x) {
                    this._xPos -= this.getLoopPartSize(2, "x");
                    changed = true;
                }
            }
            else if (this._loop == 2 && this._overlapSize.y > 0) {
                if (this._yPos < 0.001) {
                    this._yPos += this.getLoopPartSize(2, "y");
                    changed = true;
                }
                else if (this._yPos >= this._overlapSize.y) {
                    this._yPos -= this.getLoopPartSize(2, "y");
                    changed = true;
                }
            }
            if (changed)
                this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
            return changed;
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
            var setPosition = axis == "x" ? this._xPos : this._yPos;
            var changed = false;
            var v;
            if (value < 0.001) {
                value += this.getLoopPartSize(2, axis);
                if (value > setPosition) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((value - setPosition) / v) * v;
                    setPosition = ToolSet.clamp(setPosition + v, 0, this._overlapSize[axis]);
                    changed = true;
                }
            }
            else if (value >= this._overlapSize[axis]) {
                value -= this.getLoopPartSize(2, axis);
                if (value < setPosition) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((setPosition - value) / v) * v;
                    setPosition = ToolSet.clamp(setPosition - v, 0, this._overlapSize[axis]);
                    changed = true;
                }
            }
            if (changed) {
                if (axis == "x")
                    this._container.x = -Math.floor(setPosition);
                else
                    this._container.y = -Math.floor(setPosition);
            }
            return value;
        }
        alignPosition(setPosition, inertialScrolling) {
            if (this._pageMode) {
                setPosition.x = this.alignByPage(setPosition.x, "x", inertialScrolling);
                setPosition.y = this.alignByPage(setPosition.y, "y", inertialScrolling);
            }
            else if (this._snapToItem) {
                var xDir = 0;
                var yDir = 0;
                if (inertialScrolling) {
                    xDir = setPosition.x - this._containerPos.x;
                    yDir = setPosition.y - this._containerPos.y;
                }
                var pt = this._owner.getSnappingPositionWithDir(-setPosition.x, -setPosition.y, xDir, yDir, s_vec2);
                if (setPosition.x < 0 && setPosition.x > -this._overlapSize.x)
                    setPosition.x = -pt.x;
                if (setPosition.y < 0 && setPosition.y > -this._overlapSize.y)
                    setPosition.y = -pt.y;
            }
        }
        alignByPage(setPosition, axis, inertialScrolling) {
            var page;
            if (setPosition > 0)
                page = 0;
            else if (setPosition < -this._overlapSize[axis])
                page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
            else {
                page = Math.floor(-setPosition / this._pageSize[axis]);
                var change = inertialScrolling ? (setPosition - this._containerPos[axis]) : (setPosition - this._container[axis]);
                var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
                var delta = -setPosition - page * this._pageSize[axis];
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
                setPosition = -page * this._pageSize[axis];
                if (setPosition < -this._overlapSize[axis]) //最后一页未必有pageSize那么大
                    setPosition = -this._overlapSize[axis];
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
                    setPosition = -page * this._pageSize[axis];
                }
            }
            return setPosition;
        }
        updateTargetAndDuration(orignPos, resultPos) {
            resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
            resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
        }
        updateTargetAndDuration2(setPosition, axis) {
            var v = this._velocity[axis];
            var duration = 0;
            if (setPosition > 0)
                setPosition = 0;
            else if (setPosition < -this._overlapSize[axis])
                setPosition = -this._overlapSize[axis];
            else {
                //以屏幕像素为基准
                var v2 = Math.abs(v) * this._velocityScale;
                //在移动设备上，需要对不同分辨率做一个适配，我们的速度判断以1136分辨率为基准
                const isMobile = this._owner.scene.game.device.os.desktop;
                if (!isMobile)
                    this._owner.scene.game.config.width;
                v2 *= 1136 / Math.max(Number(this._owner.scene.game.config.width), Number(this._owner.scene.game.config.height)); // Math.max(Laya.stage.width, Laya.stage.height);
                //这里有一些阈值的处理，因为在低速内，不希望产生较大的滚动（甚至不滚动）
                var ratio = 0;
                if (this._pageMode || !isMobile) {
                    if (v2 > 500)
                        ratio = Math.pow((v2 - 500) / 500, 2);
                }
                else {
                    if (v2 > 1000)
                        ratio = Math.pow((v2 - 1000) / 1000, 2);
                }
                if (ratio != 0) {
                    if (ratio > 1)
                        ratio = 1;
                    v2 *= ratio;
                    v *= ratio;
                    this._velocity[axis] = v;
                    //算法：v*（_decelerationRate的n次幂）= 60，即在n帧后速度降为60（假设每秒60帧）。
                    duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
                    //计算距离要使用本地速度
                    //理论公式貌似滚动的距离不够，改为经验公式
                    //var change:number = (v/ 60 - 1) / (1 - this._decelerationRate);
                    var change = Math.floor(v * duration * 0.4);
                    setPosition += change;
                }
            }
            if (duration < TWEEN_TIME_DEFAULT)
                duration = TWEEN_TIME_DEFAULT;
            this._tweenDuration[axis] = duration;
            return setPosition;
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
            this._tweenTime.setTo(0, 0);
            this._tweening = type;
            if (!this._tweenUpdateTime)
                this._tweenUpdateTime = this._owner.scene.time.addEvent(this._tweenUpdateTimeEvent);
            // Laya.timer.frameLoop(1, this, this.tweenUpdate);
            this.updateScrollBarVisible();
        }
        killTween() {
            if (this._tweening == 1) //取消类型为1的tween需立刻设置到终点
             {
                this._container.setPosition(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
                Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }
            this._tweening = 0;
            if (this._tweenUpdateTime) {
                this._tweenUpdateTime.remove(false);
                this._tweenUpdateTime = null;
                //console.log("remove tweenupdate");
            }
            // Laya.timer.clear(this, this.tweenUpdate);
            this.updateScrollBarVisible();
            Events.dispatch(Events.SCROLL_END, this._owner.displayObject);
        }
        checkRefreshBar() {
            if (!this._header && !this._footer)
                return;
            var setPosition = this._container[this._refreshBarAxis];
            if (this._header) {
                if (setPosition > 0) {
                    if (!this._header.displayObject.parentContainer)
                        this._maskContainer.addAt(this._header.displayObject, 0);
                    var pt = s_vec2;
                    pt.setTo(this._header.width, this._header.height);
                    pt[this._refreshBarAxis] = setPosition;
                    this._header.setSize(pt.x, pt.y);
                }
                else {
                    if (this._header.displayObject.parentContainer)
                        this._maskContainer.remove(this._header.displayObject);
                }
            }
            if (this._footer) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (setPosition < -max || max == 0 && this._footerLockedSize > 0) {
                    if (!this._footer.displayObject.parentContainer)
                        this._maskContainer.addAt(this._footer.displayObject, 0);
                    pt = s_vec2;
                    pt.setTo(this._footer.x, this._footer.y);
                    if (max > 0)
                        pt[this._refreshBarAxis] = setPosition + this._contentSize[this._refreshBarAxis];
                    else
                        pt[this._refreshBarAxis] = Math.max(Math.min(setPosition + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
                    this._footer.setXY(pt.x, pt.y, true);
                    pt.setTo(this._footer.width, this._footer.height);
                    if (max > 0)
                        pt[this._refreshBarAxis] = -max - setPosition;
                    else
                        pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
                    this._footer.setSize(pt.x, pt.y);
                }
                else {
                    if (this._footer.displayObject.parentContainer)
                        this._maskContainer.remove(this._footer.displayObject);
                }
            }
        }
        tweenUpdate() {
            var nx = this.runTween("x");
            var ny = this.runTween("y");
            // console.log("scrollpane ===>", nx, ny);
            this._container.setPosition(nx, ny);
            if (this._tweening == 2) {
                if (this._overlapSize.x > 0)
                    this._xPos = ToolSet.clamp(-nx, 0, this._overlapSize.x);
                if (this._overlapSize.y > 0)
                    this._yPos = ToolSet.clamp(-ny, 0, this._overlapSize.y);
                if (this._pageMode)
                    this.updatePageController();
            }
            if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                this._tweening = 0;
                if (this._tweenUpdateTime) {
                    this._tweenUpdateTime.remove(false);
                    this._tweenUpdateTime = null;
                    // console.log("remove tweenupdate");
                }
                // Laya.timer.clear(this, this.tweenUpdate);
                this.loopCheckingCurrent();
                this.updateScrollBarPos();
                this.updateScrollBarVisible();
                Events.dispatch(Events.SCROLL, this._owner.displayObject);
                Events.dispatch(Events.SCROLL_END, this._owner.displayObject);
            }
            else {
                this.updateScrollBarPos();
                Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }
        }
        runTween(axis) {
            var newValue;
            if (this._tweenChange[axis] != 0) {
                this._tweenTime[axis] += Utils.FPSTarget / 10000; // Laya.timer.delta / 1000;
                // if (axis === "y") {
                //     console.log("runTween", axis, this._tweenTime, this._tweenDuration);
                // }
                if (this._tweenTime[axis] >= this._tweenDuration[axis]) {
                    newValue = this._tweenStart[axis] + this._tweenChange[axis];
                    this._tweenChange[axis] = 0;
                }
                else {
                    var ratio = easeFunc(this._tweenTime[axis], this._tweenDuration[axis]);
                    // if (axis === "y") {
                    //     console.log("runTween", axis, this._tweenTime, this._tweenDuration, ratio);
                    // }
                    newValue = this._tweenStart[axis] + Math.floor(this._tweenChange[axis] * ratio);
                }
                var threshold1 = 0;
                var threshold2 = -this._overlapSize[axis];
                if (this._headerLockedSize > 0 && this._refreshBarAxis == axis)
                    threshold1 = this._headerLockedSize;
                if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    threshold2 = -max;
                }
                if (this._tweening == 2 && this._bouncebackEffect) {
                    if (newValue > 20 + threshold1 && this._tweenChange[axis] > 0
                        || newValue > threshold1 && this._tweenChange[axis] == 0) //开始回弹
                     {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                        this._tweenChange[axis] = -newValue + threshold1;
                        this._tweenStart[axis] = newValue;
                    }
                    else if (newValue < threshold2 - 20 && this._tweenChange[axis] < 0
                        || newValue < threshold2 && this._tweenChange[axis] == 0) //开始回弹
                     {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                        this._tweenChange[axis] = threshold2 - newValue;
                        this._tweenStart[axis] = newValue;
                    }
                }
                else {
                    if (newValue > threshold1) {
                        newValue = threshold1;
                        this._tweenChange[axis] = 0;
                    }
                    else if (newValue < threshold2) {
                        newValue = threshold2;
                        this._tweenChange[axis] = 0;
                    }
                }
            }
            else
                newValue = this._container[axis];
            return newValue;
        }
    }
    var _gestureFlag = 0;
    const TWEEN_TIME_GO = 0.5; //调用SetPos(ani)时使用的缓动时间
    const TWEEN_TIME_DEFAULT = 0.3; //惯性滚动的最小缓动时间
    const PULL_RATIO = 0.5; //下拉过顶或者上拉过底时允许超过的距离占显示区域的比例
    var s_vec2 = new Phaser.Geom.Point();
    var s_rect = new Phaser.Geom.Rectangle();
    var sEndPos = new Phaser.Geom.Point();
    var sOldChange = new Phaser.Geom.Point();
    function easeFunc(t, d) {
        return (t = t / d - 1) * t * t + 1; //cubicOut
    }

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
                        item.value.flag = item.target.getProp(exports.ObjectPropID.Playing);
                        item.target.setProp(exports.ObjectPropID.Playing, false);
                    }
                    else
                        item.target.setProp(exports.ObjectPropID.Playing, item.value.flag);
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
                                item.target.setProp(exports.ObjectPropID.TimeScale, value);
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
                frame = target.getProp(exports.ObjectPropID.Frame);
                playStartTime = target.getProp(exports.ObjectPropID.Playing) ? 0 : -1;
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
                target.setProp(exports.ObjectPropID.Playing, playStartTime >= 0);
                target.setProp(exports.ObjectPropID.Frame, frame);
                if (playTotalTime > 0)
                    target.setProp(exports.ObjectPropID.DeltaTime, playTotalTime * 1000);
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
                    item.target.setProp(exports.ObjectPropID.Color, ToolSet.convertToHtmlColor(value.f1, false));
                    break;
                case ActionType.Animation:
                    if (value.frame >= 0)
                        item.target.setProp(exports.ObjectPropID.Frame, value.frame);
                    item.target.setProp(exports.ObjectPropID.Playing, value.playing);
                    item.target.setProp(exports.ObjectPropID.TimeScale, this._timeScale);
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
                                    case exports.CurveType.Bezier:
                                        pts.push(GPathPoint.newBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                        break;
                                    case exports.CurveType.CubicBezier:
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
            this.removeAllListeners();
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
                this.selectedIndex = homePageIndex;
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

    class GComponent extends GObject {
        constructor(scene, type) {
            super(scene, type);
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
            this._displayObject = this.scene.make.container(undefined, false);
            // GRoot.inst.addToStage(this._displayObject);
            this._displayObject["$owner"] = this;
            this._container = this._displayObject;
            const _delay = 0.001;
            this._renderEvent = { delay: _delay, callback: this.__render, callbackScope: this };
            this._buildNativeEvent = { delay: _delay, callback: this.buildNativeDisplayList, callbackScope: this };
        }
        dispose() {
            if (!this._renderTime) {
                this._renderTime.remove(false);
                this._renderTime = null;
            }
            if (!this._buildNativeTime) {
                this._buildNativeTime.remove(false);
                this._buildNativeTime = null;
            }
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
        realAddChildDisplayObject(child, index) {
            const display = child.displayObject;
            const parent = child.parent;
            if (parent) {
                const pivotX = parent._pivotX;
                const pivotY = parent._pivotY;
                if (child.type != exports.ObjectType.Loader) {
                    display.x -= display.width * pivotX;
                    display.y -= display.height * pivotY;
                }
            }
            if (index === undefined) {
                this._container.add(display);
            }
            else {
                this._container.addAt(display, index);
            }
        }
        addChild(child) {
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
            return new Promise((reslove, reject) => {
                var childIndex = this._children.indexOf(child);
                if (childIndex != -1) {
                    this.removeChildAt(childIndex, dispose);
                }
                reslove(child);
            });
        }
        removeChildAt(index, dispose) {
            return new Promise((reslove, reject) => {
                if (index >= 0 && index < this._children.length) {
                    var child = this._children[index];
                    child.parent = null;
                    if (child.sortingOrder != 0)
                        this._sortingChildCount--;
                    this._children.splice(index, 1);
                    child.group = null;
                    if (child.inContainer) {
                        child.displayObject.parentContainer.remove(child.displayObject);
                        child.displayObject.removeFromDisplayList();
                        child.displayObject.removeFromUpdateList();
                        if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Arch) {
                            if (!this._buildNativeTime)
                                this._buildNativeTime = this.scene.time.addEvent(this._buildNativeEvent);
                        }
                        //Laya.timer.callLater(this, this.buildNativeDisplayList);
                    }
                    if (dispose)
                        child.dispose();
                    this.setBoundsChangedFlag();
                    reslove(child);
                }
                else {
                    throw "Invalid child index";
                }
            });
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
                if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Ascent) {
                    for (i = 0; i < index; i++) {
                        g = this._children[i];
                        if (g.inContainer)
                            displayIndex++;
                    }
                    if (displayIndex === this._container.list.length)
                        displayIndex--;
                    this._container.addAt(child.displayObject, displayIndex);
                }
                else if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Descent) {
                    for (i = cnt - 1; i > index; i--) {
                        g = this._children[i];
                        if (g.inContainer)
                            displayIndex++;
                    }
                    if (displayIndex === this._container.list.length)
                        displayIndex--;
                    this._container.addAt(child.displayObject, displayIndex);
                }
                else {
                    if (!this._buildNativeTime)
                        this._buildNativeTime = this.scene.time.addEvent(this._buildNativeEvent);
                    //Laya.timer.callLater(this, this.buildNativeDisplayList);
                }
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
                // 没有父容器且没有上一级fairygui对象 直接添加在scene的根容器上
                if (!child.displayObject.parentContainer) {
                    var index = 0;
                    if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Ascent) {
                        for (i = 0; i < cnt; i++) {
                            g = this._children[i];
                            if (g == child)
                                break;
                            if (g.displayObject && g.displayObject.parentContainer)
                                index++;
                        }
                        if (this._container) {
                            this._container.addAt(child.displayObject, index);
                        }
                        else {
                            GRoot.inst.addToStage(child.displayObject);
                        }
                        // console.log("add display", child);
                    }
                    else if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Descent) {
                        for (i = cnt - 1; i >= 0; i--) {
                            g = this._children[i];
                            if (g == child)
                                break;
                            if (g.displayObject && g.displayObject.parentContainer)
                                index++;
                        }
                        this.realAddChildDisplayObject(child, index);
                        // this._container.addAt(child.displayObject, index);
                    }
                    else {
                        this.realAddChildDisplayObject(child);
                        if (!this._buildNativeTime)
                            this._buildNativeTime = this.scene.time.addEvent(this._buildNativeEvent);
                        // Laya.timer.callLater(this, this.buildNativeDisplayList);
                    }
                }
            }
            else {
                if (child.displayObject.parentContainer) {
                    this._container.remove(child.displayObject);
                    child.displayObject.removeFromUpdateList();
                    child.displayObject.removeFromDisplayList();
                    // console.log("remove display", child);
                    if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Arch) {
                        if (!this._buildNativeTime)
                            this._buildNativeTime = this.scene.time.addEvent(this._buildNativeEvent);
                    }
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
                case exports.ChildrenRenderOrder.Ascent:
                    {
                        for (i = 0; i < cnt; i++) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible) {
                                this.realAddChildDisplayObject(child);
                            }
                            //this._container.add(child.displayObject);
                        }
                    }
                    break;
                case exports.ChildrenRenderOrder.Descent:
                    {
                        for (i = cnt - 1; i >= 0; i--) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible)
                                this.realAddChildDisplayObject(child);
                        }
                    }
                    break;
                case exports.ChildrenRenderOrder.Arch:
                    {
                        var apex = ToolSet.clamp(this._apexIndex, 0, cnt);
                        for (i = 0; i < apex; i++) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible)
                                this.realAddChildDisplayObject(child);
                        }
                        for (i = cnt - 1; i >= apex; i--) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible)
                                this.realAddChildDisplayObject(child);
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
                        this.hitArea.setTo(this.initWidth >> 1, this.initHeight >> 1, this.initWidth, this.initHeight);
                    this._displayObject.setInteractive(this.hitArea, Phaser.Geom.Rectangle.Contains);
                }
                else {
                    if (this.hitArea instanceof Phaser.Geom.Rectangle)
                        this.hitArea = null;
                    this.removeInteractive();
                    // this._displayObject.disableInteractive();
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
                if (this._childrenRenderOrder == exports.ChildrenRenderOrder.Arch)
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
            const maskObj = new GObject(this.scene, exports.ObjectType.Graph);
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
            // if (this.hitArea instanceof PixelHitTest) {
            //     var hitTest: PixelHitTest = <PixelHitTest>(this.hitArea);
            //     if (this.sourceWidth != 0)
            //         hitTest.scaleX = this.initWidth / this.sourceWidth;
            //     if (this.sourceHeight != 0)
            //         hitTest.scaleY = this.initHeight / this.sourceHeight;
            // }
            // else 
            if (this.hitArea instanceof Phaser.Geom.Rectangle) {
                this.hitArea.setTo(this.initWidth >> 1, this.initHeight >> 1, this.initWidth, this.initHeight);
                if (this._opaque) {
                    this.removeInteractive();
                    this._displayObject.setInteractive(this.hitArea, Phaser.Geom.Rectangle.Contains);
                }
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
            return new Promise((resolve, reject) => {
                if (this._displayObject == this._container) {
                    this._container = new Phaser.GameObjects.Container(this.scene);
                    this._displayObject.add(this._container);
                }
                this._scrollPane = new ScrollPane(this);
                this._scrollPane.setup(buffer).then(() => {
                    resolve();
                });
            });
        }
        setupOverflow(overflow) {
            if (overflow == exports.OverflowType.Hidden) {
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
            if (this.hitArea) {
                this.updateHitArea();
            }
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
                if (!this._renderTime)
                    this.scene.time.addEvent(this._renderEvent);
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
            var ax = 0, ay = 0;
            var len = this._children.length;
            if (len > 0) {
                ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
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
                    tmp = child.y + child.actualHeight;
                }
            }
            this.setBounds(ax, ay, this.initWidth, this.initHeight);
        }
        setBounds(ax, ay, aw, ah) {
            this._boundsChanged = false;
            if (this._opaque) {
                this.removeInteractive();
                this.hitArea = new Phaser.Geom.Rectangle(ax + aw >> 1, ay + ah >> 1, aw, ah);
                // console.log("set bounds", aw, ah);
                this._displayObject.setInteractive(this.hitArea, Phaser.Geom.Rectangle.Contains);
                // if (this._g) {
                //     this._g.clear();
                // } else {
                //     this._g = this.scene.make.graphics(undefined, false);
                // }
                // this._g.fillStyle(0xFFCC00, .4);
                // this._g.fillRect(0, 0, aw, ah);
                //(<Phaser.GameObjects.Container>this.displayObject).add(this._g);
            }
            if (this._scrollPane)
                this._scrollPane.setContentSize(aw, ah);
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
            return new Promise((reslove, reject) => {
                this.constructFromResource2(null, 0).then(() => {
                    reslove();
                }).catch((error) => {
                    console.log(error);
                    reject();
                });
            });
        }
        constructFromResource2(objectPool, poolIndex) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((reslove, reject) => {
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
                    let i1;
                    let i2;
                    var buffer = contentItem.rawData;
                    buffer.seek(0, 0);
                    this._underConstruct = true;
                    this.sourceWidth = buffer.readInt();
                    this.sourceHeight = buffer.readInt();
                    this.initWidth = this.sourceWidth;
                    this.initHeight = this.sourceHeight;
                    if (!this.displayObject)
                        this.createDisplayObject();
                    // 必须先设置原始尺寸，否则后续relationItem的targetWidth/targetHeight值为0
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
                    // ===================
                    const fun0 = () => {
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
                        let hasAsync = false;
                        let delayNum = -1;
                        const fun = (index) => {
                            for (i = index; i < childCount; i++) {
                                if (hasAsync) {
                                    return;
                                }
                                dataLen = buffer.readShort();
                                curPos = buffer.position;
                                if (objectPool) {
                                    child = objectPool[poolIndex + i];
                                }
                                else {
                                    buffer.seek(curPos, 0);
                                    var type = buffer.readByte();
                                    var src = buffer.readS();
                                    var pkgId = buffer.readS();
                                    var pi = null;
                                    if (src != null) {
                                        var pkg;
                                        if (pkgId != null)
                                            pkg = UIPackage.getById(pkgId);
                                        else
                                            pkg = contentItem.owner;
                                        pi = pkg ? pkg.getItemById(src) : null;
                                    }
                                    if (pi) {
                                        delayNum = i;
                                        hasAsync = true;
                                        child = Decls.UIObjectFactory.newObject(pi);
                                        child.constructFromResource().then(() => {
                                            child._underConstruct = true;
                                            if (child.type == exports.ObjectType.Tree) {
                                                // @ts-ignore
                                                child.setup_beforeAdd(buffer, curPos).then(() => {
                                                    hasAsync = false;
                                                    child.parent = this;
                                                    this._children.push(child);
                                                    buffer.position = curPos + dataLen;
                                                    fun(++delayNum);
                                                });
                                            }
                                            else {
                                                hasAsync = false;
                                                child.setup_beforeAdd(buffer, curPos);
                                                child.parent = this;
                                                this._children.push(child);
                                                buffer.position = curPos + dataLen;
                                                fun(++delayNum);
                                            }
                                        });
                                        return;
                                    }
                                    else {
                                        child = Decls.UIObjectFactory.newObject(type);
                                    }
                                }
                                child._underConstruct = true;
                                if (child.type == exports.ObjectType.Tree) {
                                    delayNum = i;
                                    hasAsync = true;
                                    // @ts-ignore
                                    child.setup_beforeAdd(buffer, curPos).then(() => {
                                        hasAsync = false;
                                        child.parent = this;
                                        this._children.push(child);
                                        buffer.position = curPos + dataLen;
                                        fun(++delayNum);
                                    });
                                }
                                else {
                                    child.setup_beforeAdd(buffer, curPos);
                                    child.parent = this;
                                    this._children.push(child);
                                    buffer.position = curPos + dataLen;
                                }
                                // child.setup_beforeAdd(buffer, curPos);
                                // child.parent = this;
                                // this._children.push(child);
                                // buffer.position = curPos + dataLen;
                            }
                            if (hasAsync) {
                                return;
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
                                this._displayObject.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains);
                                this.hitArea = hitArea;
                                // console.log("hitArea", this.hitArea);
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
                                this.displayObject.on(Phaser.GameObjects.Events.ADDED_TO_SCENE, this.___added, this);
                                this.displayObject.on(Phaser.GameObjects.Events.REMOVED_FROM_SCENE, this.___removed, this);
                            }
                            this.applyAllControllers();
                            this._buildingDisplayList = false;
                            this._underConstruct = false;
                            this.buildNativeDisplayList();
                            this.setBoundsChangedFlag();
                            if (contentItem.objectType != exports.ObjectType.Component) {
                                this.constructExtension(buffer).then(() => {
                                    this.onConstruct();
                                    reslove();
                                });
                            }
                            else {
                                this.onConstruct();
                                reslove();
                            }
                        };
                        fun(0);
                    };
                    // ===================
                    var overflow = buffer.readByte();
                    if (overflow == exports.OverflowType.Scroll) {
                        var savedPos = buffer.position;
                        buffer.seek(0, 7);
                        this.setupScroll(buffer).then(() => {
                            buffer.position = savedPos;
                            fun0();
                        });
                    }
                    else {
                        this.setupOverflow(overflow);
                        fun0();
                    }
                });
            });
        }
        constructExtension(buffer) {
            return new Promise((resolve) => {
                resolve();
            });
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
        setXY(xv, yv, force = false) {
            super.setXY(xv, yv, force);
            this._children.forEach((obj) => {
                if (obj && obj instanceof GComponent) {
                    const component = obj;
                    if (component._scrollPane) {
                        component._scrollPane.maskPosChange(xv, yv);
                    }
                }
            });
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
            this._popupStack = [];
            this._justClosedPopups = [];
        }
        get emitter() {
            return this._uiStage;
        }
        static get inst() {
            if (GRoot._inst == null)
                GRoot._inst = new GRoot();
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
            Utils.FPSTarget = this._scene.game.config.fps.target || Utils.FPSTarget;
            //this.createDisplayObject();
            // todo deal stageoptions
            if (this._uiStage) {
                this.removeListen();
                // this._uiStage.removeChild(this._container, UISceneDisplay.LAYER_ROOT);
                this._uiStage.destroy();
            }
            this._stageOptions = stageOptions;
            let con = this._stageOptions.container;
            if (!con) {
                con = this.scene.add.container(this._stageOptions.x, this._stageOptions.y);
                con.setSize(this._stageOptions.width, this._stageOptions.height);
                // con.setInteractive(new Phaser.Geom.Rectangle(con.x, con.y, this._width, this._height), Phaser.Geom.Rectangle.Contains);
            }
            this._uiStage = new UIStage(scene, con);
            this._scene.stage = this._uiStage;
            this._width = stageOptions.width;
            this._height = stageOptions.height;
            // 初始化场景
            this.createDisplayObject();
            // this._uiStage.addChild(this._container, UISceneDisplay.LAYER_ROOT);
            this.addListen();
        }
        addToStage(child, type = UISceneDisplay.LAYER_ROOT, index = -1) {
            if (!this._uiStage)
                return;
            this._uiStage.addChild(child, type, index);
        }
        removeFromStage(child, type) {
            if (!this._uiStage)
                return;
            this._uiStage.removeChild(child, type);
        }
        getResUrl(key) {
            return this._stageOptions.res + key;
        }
        getResUIUrl(key) {
            return this._stageOptions.resUI + key;
        }
        getOsdRes(value) {
            if (this._stageOptions.osd) {
                return this._stageOptions.osd + value;
            }
            return value;
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
                UIPackage.createObjectFromURL(resourceURL).then((obj) => {
                    this._defaultTooltipWin = obj;
                    this._defaultTooltipWin.text = msg;
                    this.showTooltipsWin(this._defaultTooltipWin);
                });
            }
            else {
                this._defaultTooltipWin.text = msg;
                this.showTooltipsWin(this._defaultTooltipWin);
            }
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
        showWindow(win) {
            this.addChild(win);
            win.requestFocus();
            if (win.x > this.width)
                win.x = this.width - win.width;
            else if (win.x + win.width < 0)
                win.x = 0;
            if (win.y > this.height)
                win.y = this.height - win.height;
            else if (win.y + win.height < 0)
                win.y = 0;
            //  this.adjustModalLayer();
        }
        hideWindow(win) {
            win.hide();
        }
        createDisplayObject() {
            this._displayObject = this._uiStage.displayObject;
            this._displayObject["$owner"] = this;
            // this._modalLayer = new GGraph(this.scene, ObjectType.Graph);
            // this._modalLayer.setSize(this.width, this.height);
            // this._modalLayer.drawRect(0, null, UIConfig.modalLayerColor);
            // this._modalLayer.addRelation(this, RelationType.Size);
            // this.addToStage(this._modalLayer.displayObject);
            // this._displayObject = this.scene.make.container(undefined, false);
            // this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
            // this._displayObject["$owner"] = this;
            // this._displayObject.setSize(this._width, this._height);
            // this._container = this._displayObject;
            // const g = this.scene.make.graphics(undefined, false);
            // g.fillStyle(0xffcc00, 1);
            // g.fillRect(0, 0, this._width, this._height);
            // this._container.add(g);
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
            // this._container.setSize(stage.stageWidth, stage.stageHeight);
            this.updateContentScaleLevel();
        }
        updateContentScaleLevel() {
            GRoot.contentScaleLevel = this._stageOptions.dpr;
            // var mat: Phaser.GameObjects.Components.TransformMatrix = <Phaser.GameObjects.Components.TransformMatrix>(<any>Laya.stage)._canvasTransform;
            // var ss: number = Math.max(mat.getScaleX(), mat.getScaleY());
            // if (ss >= 3.5)
            //     GRoot.contentScaleLevel = 3; //x4
            // else if (ss >= 2.5)
            //     GRoot.contentScaleLevel = 2; //x3
            // else if (ss >= 1.5)
            //     GRoot.contentScaleLevel = 1; //x2
            // else
            //     GRoot.contentScaleLevel = 0;
        }
        showPopup(popup, target, dir) {
            if (this._popupStack.length > 0) {
                var k = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (var i = this._popupStack.length - 1; i >= k; i--)
                        this.removeChild(this._popupStack.pop());
                }
            }
            this._popupStack.push(popup);
            if (target) {
                var p = target;
                while (p) {
                    if (p.parent == this) {
                        if (popup.sortingOrder < p.sortingOrder) {
                            popup.sortingOrder = p.sortingOrder;
                        }
                        break;
                    }
                    p = p.parent;
                }
            }
            this.addChild(popup);
            this.adjustModalLayer();
            var pos;
            var sizeW = 0, sizeH = 0;
            if (target) {
                pos = target.localToGlobal();
                sizeW = target.width;
                sizeH = target.height;
            }
            else {
                // console.log("show 100,100");
                pos = this.globalToLocal(100, 100);
            }
            var xx, yy;
            xx = pos.x;
            if (xx + popup.width > this.width)
                xx = xx + sizeW - popup.width;
            yy = pos.y + sizeH;
            if (((dir === undefined || dir === exports.PopupDirection.Auto) && pos.y + popup.height > this.height)
                || dir === false || dir === exports.PopupDirection.Up) {
                yy = pos.y - popup.height - 1;
                // if (yy < 0) {
                //     yy = 0;
                //     xx += sizeW / 2;
                // }
            }
            popup.x = xx;
            popup.y = yy;
        }
        hidePopup(popup) {
            if (popup) {
                var k = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (var i = this._popupStack.length - 1; i >= k; i--)
                        this.closePopup(this._popupStack.pop());
                }
            }
            else {
                var cnt = this._popupStack.length;
                for (i = cnt - 1; i >= 0; i--)
                    this.closePopup(this._popupStack[i]);
                this._popupStack.length = 0;
            }
        }
        closePopup(target) {
            if (target.parent) {
                if (target instanceof Window)
                    target.hide();
                else
                    this.removeChild(target);
            }
        }
        checkPopups(clickTarget) {
            if (this._checkPopups)
                return;
            this._checkPopups = true;
            this._justClosedPopups.length = 0;
            if (this._popupStack.length > 0) {
                var mc = clickTarget;
                while (mc.parentContainer && mc) {
                    if (mc["$owner"]) {
                        var pindex = this._popupStack.indexOf(mc["$owner"]);
                        if (pindex != -1) {
                            for (var i = this._popupStack.length - 1; i > pindex; i--) {
                                var popup = this._popupStack.pop();
                                this.closePopup(popup);
                                this._justClosedPopups.push(popup);
                            }
                            return;
                        }
                    }
                    mc = mc.parentContainer;
                }
                var cnt = this._popupStack.length;
                for (i = cnt - 1; i >= 0; i--) {
                    popup = this._popupStack[i];
                    this.closePopup(popup);
                    this._justClosedPopups.push(popup);
                }
                this._popupStack.length = 0;
            }
        }
        togglePopup(popup, target, dir) {
            if (this._justClosedPopups.indexOf(popup) != -1)
                return;
            this.showPopup(popup, target, dir);
        }
        adjustModalLayer() {
            var cnt = this.numChildren;
            if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
                this.setChildIndex(this._modalWaitPane, cnt - 1);
            for (var i = cnt - 1; i >= 0; i--) {
                var g = this.getChildAt(i);
                if ((g instanceof Window) && g.modal) {
                    if (this._modalLayer.parent == null)
                        this.addChildAt(this._modalLayer, i);
                    else
                        this.setChildIndexBefore(this._modalLayer, i);
                    return;
                }
            }
            // if (this._modalLayer.parent)
            //     this.removeChild(this._modalLayer);
        }
    }
    GRoot.contentScaleLevel = 0;
    GRoot._gmStatus = new GRootMouseStatus();

    var TextType;
    (function (TextType) {
        TextType[TextType["BASIC"] = 0] = "BASIC";
        TextType[TextType["RICH"] = 1] = "RICH";
        TextType[TextType["INPUT"] = 2] = "INPUT";
    })(TextType || (TextType = {}));
    class GTextField extends GObject {
        constructor(scene, type) {
            super(scene, type);
            this._align = "left";
            this._valign = "top";
            // console.log("text create", this);
        }
        get font() {
            return this._font;
        }
        set font(value) {
            this._font = value;
        }
        get fontSize() {
            return this._fontSize;
        }
        set fontSize(value) {
            this._fontSize = value;
        }
        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
        }
        get align() {
            return this._align;
        }
        set align(value) {
            this._align = value;
            this.doAlign();
        }
        get valign() {
            return this._valign;
        }
        set valign(value) {
            this._valign = value;
            this.doAlign();
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
        setStroke(color, thickness) {
        }
        setShadowStyle(val) {
        }
        setShadowOffset(x, y) {
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
                this._widthAutoSize = this._autoSize == exports.AutoSizeType.Both;
                this._heightAutoSize = this._autoSize == exports.AutoSizeType.Both || this._autoSize == exports.AutoSizeType.Height;
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
                case exports.ObjectPropID.Color:
                    return this.color;
                case exports.ObjectPropID.OutlineColor:
                    return this.strokeColor;
                case exports.ObjectPropID.FontSize:
                    return this.fontSize;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    this.color = value;
                    break;
                case exports.ObjectPropID.OutlineColor:
                    this.strokeColor = value;
                    break;
                case exports.ObjectPropID.FontSize:
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
            let iv;
            this.font = buffer.readS();
            this.fontSize = buffer.readShort();
            this.color = buffer.readColorS();
            iv = buffer.readByte();
            this.align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
            iv = buffer.readByte();
            this.valign = iv == 0 ? "top" : (iv == 1 ? "center" : "bottom");
            this.leading = buffer.readShort();
            this.letterSpacing = buffer.readShort();
            this.ubbEnabled = buffer.readBool();
            this.autoSize = buffer.readByte();
            this.underline = buffer.readBool();
            this.italic = buffer.readBool();
            this.bold = buffer.readBool();
            this.singleLine = buffer.readBool();
            if (buffer.readBool()) {
                const strokeColor = buffer.readColorS();
                const stroke = buffer.readFloat() + 1;
                this.setStroke(strokeColor, stroke);
            }
            //shadow
            if (buffer.readBool()) {
                this.setShadowStyle(buffer.readColorS());
                this.setShadowOffset(buffer.readFloat(), buffer.readFloat());
            }
            if (buffer.readBool())
                this._templateVars = {};
            this._touchable = false;
        }
        updateSize() {
        }
        doAlign() {
        }
        typeset() {
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            buffer.seek(beginPos, 6);
            var str = buffer.readS();
            if (str != null)
                this.text = str;
        }
    }

    //  bitmask flag for GameObject.renderMask
    const _VISIBLE_FLAG = 1;
    const _ALPHA_FLAG = 2; // 0010
    const _TRANSFORM_FLAG = 4; // 0100
    class DisplayObject extends Phaser.GameObjects.GameObject {
        constructor(scene, type = "DisplayObject") {
            super(scene, type);
            this.x = 0;
            this.y = 0;
            this.width = 1;
            this.height = 1;
            this.flipX = false;
            this.flipY = false;
            this.originX = 0.5;
            this.originY = 0.5;
            this.scrollFactorX = 1;
            this.scrollFactorY = 1;
            this.autoRound = true;
            this.tintTopLeft = 0xffffff;
            this.tintTopRight = 0xffffff;
            this.tintBottomLeft = 0xffffff;
            this.tintBottomRight = 0xffffff;
            this.tintFill = false;
            this._alpha = 1;
            this._alphaTL = 1;
            this._alphaTR = 1;
            this._alphaBL = 1;
            this._alphaBR = 1;
            this._visible = true;
            this._scaleX = 1;
            this._scaleY = 1;
            this._rotation = 0;
            this._displayOriginX = 0;
            this._displayOriginY = 0;
            this._originComponent = true;
            this._blendMode = Phaser.BlendModes.NORMAL;
        }
        setOrigin(x, y) {
            if (x === undefined)
                x = 0.5;
            if (y === undefined)
                y = 0.5;
            this.originX = x;
            this.originY = y;
            return this.updateDisplayOrigin();
        }
        updateDisplayOrigin() {
            this._displayOriginX = this.originX * this.width;
            this._displayOriginY = this.originY * this.height;
            return this;
        }
        setVisible(val) {
            this.visible = val;
            return this;
        }
        setMask(mask) {
            this.mask = mask;
        }
        clearMask(destroyMask = false) {
            if (destroyMask && this.mask) {
                this.mask.destroy();
            }
            this.mask = null;
            return this;
        }
        setScale() {
        }
        setSize(w, h) {
            this.width = w;
            this.height = h;
            return this;
        }
        setPosition(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        setAlpha(topLeft, topRight, bottomLeft, bottomRight) {
            if (topLeft === undefined) {
                topLeft = 1;
            }
            if (topRight === undefined) {
                this.alpha = topLeft;
            }
            return this;
        }
        getLocalTransformMatrix(tempMatrix) {
            if (!tempMatrix) {
                tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
            }
            return tempMatrix.applyITRS(this.x, this.y, this._rotation, this.scaleX, this.scaleY);
        }
        getWorldTransformMatrix(tempMatrix, parentMatrix) {
            if (!tempMatrix) {
                tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
            }
            if (!parentMatrix) {
                parentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
            }
            let parent = this.parentContainer;
            if (!parent) {
                return this.getLocalTransformMatrix(tempMatrix);
            }
            tempMatrix.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY);
            while (parent) {
                parentMatrix.applyITRS(parent.x, parent.y, parent.rotation, parent.scaleX, parent.scaleY);
                parentMatrix.multiply(tempMatrix, tempMatrix);
                parent = parent.parentContainer;
            }
            return tempMatrix;
        }
        getLocalPoint(x, y, point, camera) {
            if (!point)
                point = new Phaser.Math.Vector2();
            if (!camera)
                camera = this.scene.sys.cameras.main;
            const csx = camera.scrollX;
            const csy = camera.scrollY;
            const px = x + (csx * this.scrollFactorX) - csx;
            const py = y + (csy * this.scrollFactorY) - csy;
            if (this.parentContainer) {
                this.getWorldTransformMatrix().applyInverse(px, py, point);
            }
            else {
                Phaser.Math.TransformXY(px, py, this.x, this.y, this._rotation, this.scaleX, this.scaleY, point);
            }
            //  Normalize origin
            if (this._originComponent) {
                point.x += this._displayOriginX;
                point.y += this._displayOriginY;
            }
            return point;
        }
        getParentRotation() {
            let rotation = 0;
            let parent = this.parentContainer;
            while (parent) {
                rotation += parent.rotation;
                parent = parent.parentContainer;
            }
            return rotation;
        }
        initPipeline(pipeline) {
            if (!pipeline) {
                pipeline = Phaser.Renderer.WebGL.Pipelines.MULTI_PIPELINE;
            }
            const renderer = this.scene.sys.renderer;
            if (!renderer) {
                return false;
            }
            const pipelines = renderer.pipelines;
            if (pipelines) {
                const instance = pipelines.get(pipeline);
                if (instance) {
                    this.defaultPipeline = instance;
                    this.pipeline = instance;
                    return true;
                }
            }
            return false;
        }
        setPipeline(pipeline, pipelineData, copyData = true) {
            const renderer = this.scene.sys.renderer;
            if (!renderer) {
                return this;
            }
            const pipelines = renderer.pipelines;
            if (pipelines) {
                const instance = pipelines.get(pipeline);
                if (instance) {
                    this.pipeline = instance;
                }
                if (pipelineData) {
                    this.pipelineData = (copyData) ? Phaser.Utils.Objects.DeepCopy(pipelineData) : pipelineData;
                }
            }
            return this;
        }
        setPipelineData(key, value) {
            const data = this.pipelineData;
            if (value === undefined) {
                delete data[key];
            }
            else {
                data[key] = value;
            }
            return this;
        }
        setBlendMode(val) {
            this.blendMode = val;
        }
        setScrollFactor(x, y) {
            if (y === undefined) {
                y = x;
            }
            this.scrollFactorX = x;
            this.scrollFactorY = y;
            return this;
        }
        renderCanvas(renderer, src, camera, parentMatrix) {
        }
        renderWebGL(renderer, src, camera, parentMatrix) {
        }
        preDestroy() {
        }
        set scale(val) {
            this._scaleX = val;
            this._scaleY = val;
            if (val === 0) {
                this.renderFlags &= ~_TRANSFORM_FLAG;
            }
            else {
                this.renderFlags |= _TRANSFORM_FLAG;
            }
        }
        get scale() {
            return (this._scaleX + this._scaleY) / 2;
        }
        get scaleX() {
            return this._scaleX;
        }
        set scaleX(val) {
            this._scaleX = val;
            if (val === 0) {
                this.renderFlags &= _TRANSFORM_FLAG;
            }
            else {
                this.renderFlags |= _TRANSFORM_FLAG;
            }
        }
        get scaleY() {
            return this._scaleY;
        }
        set scaleY(val) {
            this._scaleY = val;
            if (val === 0) {
                this.renderFlags &= _TRANSFORM_FLAG;
            }
            else {
                this.renderFlags |= _TRANSFORM_FLAG;
            }
        }
        get rotation() {
            return this._rotation;
        }
        set rotation(val) {
            this._rotation = Phaser.Math.Angle.Wrap(val);
        }
        get angle() {
            return Phaser.Math.Angle.WrapDegrees(this._rotation * Phaser.Math.RAD_TO_DEG);
        }
        set angle(val) {
            this._rotation = Phaser.Math.Angle.WrapDegrees(val) * Phaser.Math.DEG_TO_RAD;
        }
        get displayOriginX() {
            return this._displayOriginX;
        }
        set displayOriginX(val) {
            this._displayOriginX = val;
            this.originX = val / this.width;
        }
        get displayOriginY() {
            return this._displayOriginY;
        }
        set displayOriginY(val) {
            this._displayOriginY = val;
            this.originY = val / this.height;
        }
        get displayWidth() {
            return this.width * this.scaleX;
        }
        set displayWidth(val) {
            this.scaleX = val / this.width;
        }
        get displayHeight() {
            return this.height * this.scaleY;
        }
        set displayHeight(val) {
            this.scaleY = val / this.height;
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(val) {
            val = Phaser.Math.Clamp(val, 0, 1);
            this._alpha = val;
            if (val === 0) {
                this.renderFlags &= ~_ALPHA_FLAG;
            }
            else {
                this.renderFlags |= _ALPHA_FLAG;
            }
        }
        get alphaTL() {
            return this._alphaTL;
        }
        get alphaTR() {
            return this._alphaTR;
        }
        get alphaBL() {
            return this._alphaBL;
        }
        get alphaBR() {
            return this._alphaBR;
        }
        get visible() {
            return this._visible;
        }
        set visible(val) {
            this._visible = val;
            if (val) {
                this.renderFlags |= ~_VISIBLE_FLAG;
            }
            else {
                this.renderFlags &= _VISIBLE_FLAG;
            }
        }
        get blendMode() {
            return this._blendMode;
        }
        set blendMode(val) {
            val |= 0;
            if (val >= -1) {
                this._blendMode = val;
            }
        }
    }

    const GETPROP_RESULT = {
        text: null,
        prop: null
    };
    class Parser {
        constructor() {
        }
        splitText(text, isPlainTextMode = false) {
            const result = [];
            let charIdx = 0;
            while (true) {
                const arr = RE_SPLITTEXT.exec(text);
                if (!arr) {
                    break;
                }
                const match = arr[0];
                const matchStart = RE_SPLITTEXT.lastIndex - match.length;
                if (charIdx < matchStart) {
                    result.push(text.substring(charIdx, matchStart));
                }
                if (!isPlainTextMode) {
                    result.push(match);
                }
                charIdx = RE_SPLITTEXT.lastIndex;
            }
            const totalLen = text.length;
            if (charIdx < totalLen) {
                result.push(text.substring(charIdx, totalLen));
            }
            return result; // [text, ...]
        }
        tagTextToProp(text, prevProp) {
            let plainText, innerMatch;
            if (!prevProp) {
                prevProp = {};
            }
            if (prevProp.img) {
                if (prevProp.img === true) {
                    this.updateProp(prevProp, PROP_ADD, "img", text);
                }
                else {
                    this.updateProp(prevProp, PROP_REMOVE, "img");
                }
                plainText = "";
            }
            // Check if current fragment is a class tag
            if (RE_BLOD_OPEN.test(text)) {
                this.updateProp(prevProp, PROP_ADD, "b", true);
                plainText = "";
            }
            else if (RE_BLOD_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "b");
                plainText = "";
            }
            else if (RE_ITALICS_OPEN.test(text)) {
                this.updateProp(prevProp, PROP_ADD, "i", true);
                plainText = "";
            }
            else if (RE_ITALICS_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "i");
                plainText = "";
            }
            else if (RE_SIZE_OPEN.test(text)) {
                innerMatch = text.match(RE_SIZE_OPEN);
                this.updateProp(prevProp, PROP_ADD, "size", `${innerMatch[1]}px`);
                plainText = "";
            }
            else if (RE_SIZE_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "size");
                plainText = "";
            }
            else if (RE_COLOR_OPEN.test(text)) {
                innerMatch = text.match(RE_COLOR_OPEN);
                this.updateProp(prevProp, PROP_ADD, "color", innerMatch[1]);
                plainText = "";
            }
            else if (RE_COLOR_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "color");
                plainText = "";
            }
            else if (RE_UNDERLINE_OPEN.test(text)) {
                innerMatch = text.match(RE_UNDERLINE_OPEN);
                this.updateProp(prevProp, PROP_ADD, "u", true);
                plainText = "";
            }
            else if (RE_UNDERLINE_OPENC.test(text)) {
                innerMatch = text.match(RE_UNDERLINE_OPENC);
                this.updateProp(prevProp, PROP_ADD, "u", innerMatch[1]);
                plainText = "";
            }
            else if (RE_UNDERLINE_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "u");
                plainText = "";
            }
            else if (RE_SHADOW_OPEN.test(text)) {
                this.updateProp(prevProp, PROP_ADD, "shadow", true);
                plainText = "";
            }
            else if (RE_SHADOW_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "shadow");
                plainText = "";
            }
            else if (RE_STROKE_OPEN.test(text)) {
                this.updateProp(prevProp, PROP_ADD, "stroke", true);
                plainText = "";
            }
            else if (RE_STROKE_OPENC.test(text)) {
                innerMatch = text.match(RE_STROKE_OPENC);
                this.updateProp(prevProp, PROP_ADD, "stroke", innerMatch[1]);
                plainText = "";
            }
            else if (RE_STROKE_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "stroke");
                plainText = "";
            }
            else if (RE_OFFSETY_OPEN.test(text)) {
                innerMatch = text.match(RE_OFFSETY_OPEN);
                this.updateProp(prevProp, PROP_ADD, "y", parseFloat(innerMatch[1]));
                plainText = "";
            }
            else if (RE_OFFSETY_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "y");
                plainText = "";
            }
            else if (RE_IMAGE_OPEN.test(text)) {
                innerMatch = text.match(RE_IMAGE_OPEN);
                this.updateProp(prevProp, PROP_ADD, "img", true);
                plainText = "";
            }
            else if (RE_IMAGE_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "img");
                plainText = "";
            }
            else if (RE_URL_OPEN.test(text)) {
                innerMatch = text.match(RE_URL_OPEN);
                this.updateProp(prevProp, PROP_ADD, "url", innerMatch[1]);
                plainText = "";
            }
            else if (RE_URL_CLOSE.test(text)) {
                this.updateProp(prevProp, PROP_REMOVE, "url");
                plainText = "";
            }
            else {
                plainText = text;
            }
            var result = GETPROP_RESULT;
            result.text = plainText;
            result.prop = prevProp;
            return result;
        }
        propToContextStyle(defaultStyle, prop) {
            var _a, _b, _c, _d;
            const result = {};
            if (!prop.hasOwnProperty("img")) {
                result.image = null;
                // if (prop.hasOwnProperty("family")) {
                //     result.fontFamily = prop.family;
                // } else {
                //     result.fontFamily = defaultStyle.fontFamily;
                // }
                result.fontFamily = defaultStyle.fontFamily;
                result.fontSize = (_a = prop.size) !== null && _a !== void 0 ? _a : defaultStyle.fontSize;
                result.fontStyle = this.getFontStyle((_b = prop.b) !== null && _b !== void 0 ? _b : defaultStyle.bold, (_c = prop.i) !== null && _c !== void 0 ? _c : defaultStyle.italic);
                result.font = `${result.fontStyle} ${result.fontSize} ${result.fontFamily}`;
                result.fillStyle = (_d = prop.color) !== null && _d !== void 0 ? _d : defaultStyle.fillStyle;
                result.letterSpacing = defaultStyle.letterSpacing;
                result.lineSpacing = defaultStyle.lineSpacing;
                if (prop.hasOwnProperty("stroke")) {
                    result.strokeStyle = prop.stroke === true ? defaultStyle.strokeStyle : prop.stroke;
                    // if (prop.stroke === true) {
                    //     result.strokeStyle = defaultStyle.strokeStyle;
                    //     result.strokeThickness = defaultStyle.strokeThickness;
                    // } else {
                    //     result.strokeStyle = prop.stroke;
                    //     result.strokeThickness = defaultStyle.strokeThickness;
                    // }
                }
                else {
                    result.strokeStyle = defaultStyle.strokeStyle;
                }
                result.strokeThickness = defaultStyle.strokeThickness;
            }
            else {
                result.image = prop.img;
            }
            if (prop.hasOwnProperty("shadow")) {
                if (prop.shadow === true) {
                    result.shadowColor = defaultStyle.shadowColor;
                }
                else {
                    result.shadowColor = prop.shadow;
                }
                result.shadowStroke = true;
                result.shadowFill = true;
            }
            else {
                result.shadowBlur = defaultStyle.shadowBlur;
                result.shadowStroke = defaultStyle.shadowStroke;
                result.shadowFill = defaultStyle.shadowFill;
            }
            result.shadowColor = defaultStyle.shadowColor;
            result.shadowOffsetX = defaultStyle.shadowOffsetX;
            result.shadowOffsetY = defaultStyle.shadowOffsetY;
            if (prop.hasOwnProperty('u')) {
                if (typeof prop.u === "string") {
                    result.underlineColor = prop.u;
                }
                else {
                    result.underlineColor = defaultStyle.fillStyle;
                }
                result.underlineThickness = defaultStyle.underlineThickness || 2;
                result.underlineOffsetY = defaultStyle.underlineOffsetY;
            }
            else {
                result.underlineColor = defaultStyle.underlineColor;
                result.underlineThickness = defaultStyle.underlineThickness;
                result.underlineOffsetY = defaultStyle.underlineOffsetY;
            }
            if (prop.hasOwnProperty("url")) {
                result.underlineColor = defaultStyle.fillStyle;
                result.underlineThickness = 2;
                result.underlineOffsetY = 5;
            }
            result.resolution = defaultStyle.resolution;
            result.antialias = defaultStyle.antialias;
            return result;
        }
        propToTagText(text, prop, prevProp) {
            if (prevProp === undefined) {
                prevProp = EMPTYPROP;
            }
            const headers = [];
            for (const k in prevProp) {
                if (!prop.hasOwnProperty(k)) {
                    headers.push(`[/${k}]`);
                }
            }
            for (const k in prop) {
                const value = prop[k];
                if (prevProp[k] === value) {
                    continue;
                }
                switch (k) {
                    case "size":
                        headers.push(`[size=${value.replace("px", "")}]`);
                        break;
                    case "color":
                    case "stroke":
                    case "img":
                    case "url":
                    case "y":
                        headers.push(`[${k}=${value}]`);
                        break;
                    case "u":
                        if (value === true) {
                            headers.push(`[u]`);
                        }
                        else {
                            headers.push(`[u=${value}]`);
                        }
                        break;
                    default:
                        headers.push(`[${k}]`);
                        break;
                }
            }
            headers.push(text);
            return headers.join("");
        }
        updateProp(prop, op, key, value) {
            if (op === PROP_ADD) {
                prop[key] = value;
            }
            else {
                if (prop.hasOwnProperty(key)) {
                    delete prop[key];
                }
            }
        }
        getFontStyle(isBold, isItalic) {
            if (isBold && isItalic) {
                return "bold italic";
            }
            if (isBold) {
                return "bold";
            }
            if (isItalic) {
                return "italic";
            }
            return "";
        }
    }
    const RE_SPLITTEXT = /\[b\]|\[\/b\]|\[i\]|\[\/i\]|\[size=(\d+)\]|\[\/size\]|\[color=([a-z]+|#[0-9abcdef]+)\]|\[\/color\]|\[u\]|\[u=([a-z]+|#[0-9abcdef]+)\]|\[\/u\]|\[shadow\]|\[\/shadow\]|\[stroke\]|\[stroke=([a-z]+|#[0-9abcdef]+)\]|\[\/stroke\]|\[img\]|\[\/img\]|\[url=([^\]]+)\]|\[\/url\]|\[y=([-.0-9]+)\]|\[\/y\]/ig;
    const RE_BLOD_OPEN = /\[b\]/i;
    const RE_BLOD_CLOSE = /\[\/b\]/i;
    const RE_ITALICS_OPEN = /\[i\]/i;
    const RE_ITALICS_CLOSE = /\[\/i\]/i;
    const RE_SIZE_OPEN = /\[size=(\d+)\]/i;
    const RE_SIZE_CLOSE = /\[\/size\]/i;
    const RE_COLOR_OPEN = /\[color=([a-z]+|#[0-9abcdef]+)\]/i;
    const RE_COLOR_CLOSE = /\[\/color\]/i;
    const RE_UNDERLINE_OPEN = /\[u\]/i;
    const RE_UNDERLINE_OPENC = /\[u=([a-z]+|#[0-9abcdef]+)\]/i;
    const RE_UNDERLINE_CLOSE = /\[\/u\]/i;
    const RE_SHADOW_OPEN = /\[shadow\]/i;
    const RE_SHADOW_CLOSE = /\[\/shadow\]/i;
    const RE_STROKE_OPEN = /\[stroke\]/i;
    const RE_STROKE_OPENC = /\[stroke=([a-z]+|#[0-9abcdef]+)\]/i;
    const RE_STROKE_CLOSE = /\[\/stroke\]/i;
    const RE_OFFSETY_OPEN = /\[y=([-.0-9]+)\]/i;
    const RE_OFFSETY_CLOSE = /\[\/y\]/i;
    const RE_IMAGE_OPEN = /\[img\]/i;
    const RE_IMAGE_CLOSE = /\[\/img\]/i;
    const RE_URL_OPEN = /\[url=([^\]]+)\]/i;
    const RE_URL_CLOSE = /\[\/url\]/i;
    const EMPTYPROP = {};
    const PROP_REMOVE = false;
    const PROP_ADD = true;

    class Pool {
        constructor() {
            this.items = [];
        }
        pop() {
            if (this.items.length) {
                return this.items.pop();
            }
        }
        push(l) {
            this.items.push(l);
            return this;
        }
        clear() {
            this.items.length = 0;
            return this;
        }
        pushMultiple(item) {
            this.items.push.apply(this.items, item);
            item.length = 0;
            return this;
        }
        destroy() {
            this.clear();
            this.items = undefined;
        }
    }

    var WrapMode;
    (function (WrapMode) {
        WrapMode[WrapMode["none"] = 0] = "none";
        WrapMode[WrapMode["word"] = 1] = "word";
        WrapMode[WrapMode["char"] = 2] = "char";
    })(WrapMode || (WrapMode = {}));
    var NewLineMode;
    (function (NewLineMode) {
        NewLineMode[NewLineMode["none"] = 0] = "none";
        NewLineMode[NewLineMode["raw"] = 1] = "raw";
        NewLineMode[NewLineMode["wrapped"] = 2] = "wrapped";
    })(NewLineMode || (NewLineMode = {}));
    const SplitTextRegExp = /(?:\r\n|\r|\n)/;
    function WrapText(text, getTextWidthCallback, context, wrapMode, wrapWidth, offset = 0) {
        if (wrapWidth <= 0) {
            wrapMode = WrapMode.none;
        }
        let result = [];
        if (!text || !text.length) {
            return result;
        }
        let lines = text.split(SplitTextRegExp);
        let lastLineIdx = lines.length - 1;
        if (text.slice(-1) === '\n') {
            lines.length -= 1;
        }
        let remainWidth;
        for (let i = 0, lineCnt = lines.length; i < lineCnt; i++) {
            let line = lines[i];
            let newLineMode = (i === lastLineIdx) ? NewLineMode.none : NewLineMode.raw;
            if (wrapMode === WrapMode.none) {
                result.push(CreateLineInfo(line, getTextWidthCallback(line, context), newLineMode));
                continue;
            }
            if (i === 0) {
                remainWidth = wrapWidth - offset;
            }
            else {
                remainWidth = wrapWidth;
            }
            // Short string testing
            if (line.length <= 100) {
                let textWidth = getTextWidthCallback(line, context);
                if (textWidth <= remainWidth) {
                    result.push(CreateLineInfo(line, textWidth, newLineMode));
                    continue;
                }
            }
            // Character mode
            let tokenArray;
            if (wrapMode === WrapMode.word) { // Word mode            
                tokenArray = line.split(' ');
            }
            else {
                tokenArray = line;
            }
            let curLineText = '', lineText = '', lineWidth = 0;
            for (let j = 0, tokenLen = tokenArray.length; j < tokenLen; j++) {
                let token = tokenArray[j];
                if (wrapMode === WrapMode.word) {
                    curLineText += token;
                    if (j < (tokenLen - 1)) {
                        curLineText += ' ';
                    }
                }
                else {
                    curLineText += token;
                }
                let currLineWidth = getTextWidthCallback(curLineText, context);
                if (currLineWidth > remainWidth) {
                    // new line
                    if (j === 0) {
                        result.push(CreateLineInfo('', 0, NewLineMode.wrapped));
                    }
                    else {
                        result.push(CreateLineInfo(lineText, lineWidth, NewLineMode.wrapped));
                        curLineText = token;
                        if (wrapMode === WrapMode.word) {
                            if (j < (tokenLen - 1)) {
                                curLineText += ' ';
                            }
                        }
                        currLineWidth = getTextWidthCallback(curLineText, context);
                    }
                    remainWidth = wrapWidth;
                }
                lineText = curLineText;
                lineWidth = currLineWidth;
            } // For token in tokenArray
            // Flush remain text
            result.push(CreateLineInfo(lineText, lineWidth, newLineMode));
        } // For each line in lines
        return result;
    }
    let CreateLineInfo = function (text, width, newLineMode) {
        return { text: text, width: width, newLineMode: newLineMode };
    };

    class Line {
        constructor() {
            this.pens = [];
        }
        destroy() {
            this.pens.length = 0;
        }
        addPen(pen) {
            this.pens.push(pen);
            return this;
        }
        hasPen() {
            return this.pens.length > 0;
        }
        get firstPen() {
            return this.pens[0];
        }
        get lastPen() {
            return this.pens[this.pens.length - 1];
        }
        get pensCounts() {
            return this.pens.length;
        }
        get startIndex() {
            const firstPen = this.pens[0];
            return firstPen ? firstPen.startIndex : 0;
        }
        get width() {
            const lastPen = this.lastPen;
            return lastPen ? lastPen.lastX : 0;
        }
    }

    class Pen {
        constructor() {
            this.text = '';
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.ascent = 0;
            this.descent = 0;
            this.prop = {};
            this.newLineMode = NewLineMode.none;
            this.startIndex = 0;
        }
        set(text = '', x = 0, y = 0, width = 0, height = 0, ascent = 0, descent = 0, prop = {}, newLineMode = NewLineMode.none, startIndex = 0) {
            this.text = text;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.ascent = ascent;
            this.descent = descent;
            this.prop = prop;
            this.newLineMode = newLineMode;
            this.startIndex = startIndex;
            return this;
        }
        clone() {
            const result = new Pen();
            result.set(this.text, this.x, this.y, this.width, this.height, this.ascent, this.descent, Phaser.Utils.Objects.Clone(this.prop), this.newLineMode, this.startIndex);
            return result;
        }
        get plainText() {
            return (this.newLineMode === NewLineMode.raw) ? `${this.text}\n` : this.text;
        }
        get wrapText() {
            return (this.newLineMode !== NewLineMode.none) ? `${this.text}\n` : this.text;
        }
        get plainTextLength() {
            let len = this.text.length;
            if (this.newLineMode === NewLineMode.raw) {
                len += 1;
            }
            return len;
        }
        get endIndex() {
            return this.startIndex + this.plainTextLength;
        }
        get lastX() {
            return this.x + this.width;
        }
        get isTextPen() {
            return this.text !== "";
        }
        get isImagePen() {
            return Boolean(this.prop.img);
        }
        get hasAreaMarker() {
            return Boolean(this.prop.url);
        }
    }

    class PenManager {
        constructor({ penPool: penPool }) {
            this.pens = [];
            this.lines = [];
            this.penPool = penPool;
        }
        destroy() {
            this.freePens();
        }
        freePens() {
            this.penPool.pushMultiple(this.pens);
            this.lines.forEach((l) => l.destroy());
            this.lines.length = 0;
            this.maxLineWidth = 0;
            this.totalLineHeight = 0;
            return this;
        }
        getLineStartIndex(index) {
            if (index >= this.lines.length) {
                return this.getLineEndIndex(index);
            }
            const line = this.lines[index];
            return (line && line[0]) ? line[0].startIndex : 0;
        }
        getLineEndIndex(index) {
            const len = this.lines.length;
            if (index >= len) {
                index = len - 1;
            }
            for (let li = index; li >= 0; li--) {
                let line = this.lines[li];
                if (line && line.hasPen()) {
                    return line.lastPen.endIndex;
                }
            }
            return 0;
        }
        getLineWidth(index) {
            let line = this.lines[index];
            return (line) ? line.width : 0; // start from 0
        }
        getLineWidths() {
            const result = [];
            const len = this.lines.length;
            for (let i = 0; i < len; i++) {
                result.push(this.getLineWidth(i));
            }
            return result;
        }
        addTextPen(text, x, y, width, height, ascent, descent, prop, newLineMode = NewLineMode.none) {
            let pen = this.penPool.pop();
            if (!pen) {
                pen = new Pen();
            }
            pen.set(text, x, y, width, height, ascent, descent, prop, newLineMode);
            this.addPen(pen);
            return this;
        }
        addImagePen(x, y, width, height, prop) {
            this.addTextPen('', x, y, width, height, height, 0, prop, NewLineMode.none);
            return this;
        }
        addNewLinePen(newLineMode) {
            let lastPen = this.lastPen;
            if (lastPen && (lastPen.newLineMode === NewLineMode.none)) {
                lastPen.newLineMode = newLineMode;
            }
            return this;
        }
        addPen(pen) {
            let previousPen = this.lastPen;
            if (previousPen == null) {
                pen.startIndex = 0;
            }
            else {
                pen.startIndex = previousPen.endIndex;
            }
            this.pens.push(pen);
            // Maintan lines
            let line = this.lastLine;
            if (line == null) {
                line = new Line();
                this.lines.push(line);
            }
            line.addPen(pen);
            // New line, add an empty line
            if (pen.newLineMode !== NewLineMode.none) {
                line = new Line();
                this.lines.push(line);
            }
            return this;
        }
        getSliceTagText(propToTextCallback, propToTextCallbackScope, start = 0, end, wrap = false) {
            if (end === undefined) {
                let lastPen = this.lastPen;
                if (!lastPen) {
                    return "";
                }
                end = lastPen.endIndex;
            }
            let arr = [];
            let previousProp;
            for (var i = 0, len = this.pens.length; i < len; i++) {
                let pen = this.pens[i];
                let penEndIdx = pen.endIndex;
                if (penEndIdx <= start) {
                    continue;
                }
                let penTxt = (!wrap) ? pen.plainText : pen.wrapText;
                let currentProp = pen.prop;
                let penStartIdx = pen.startIndex;
                let isInRange = (penStartIdx >= start) && (penEndIdx <= end);
                if (!isInRange) {
                    penTxt = penTxt.substring(start - penStartIdx, end - penStartIdx);
                }
                if (propToTextCallbackScope) {
                    arr.push(propToTextCallback.call(propToTextCallbackScope, penTxt, currentProp, previousProp));
                }
                else {
                    arr.push(propToTextCallback(penTxt, currentProp, previousProp));
                }
                previousProp = currentProp;
                if (penEndIdx >= end) {
                    break;
                }
            }
            return arr.join();
        }
        clone(targetPenManager) {
            if (!targetPenManager) {
                targetPenManager = new PenManager({ penPool: this.penPool });
            }
            targetPenManager.freePens();
            for (const pen of this.pens) {
                targetPenManager.addPen(pen.clone());
            }
            const srcLines = this.lines;
            const targetLiens = targetPenManager.lines;
            const len = srcLines.length;
            for (let i = 0; i < len; i++) {
                const srcLine = srcLines[i];
                const targetLine = targetLiens[i];
                targetLine.y = srcLine.y;
                targetLine.height = srcLine.height;
            }
            return targetPenManager;
        }
        get lastPen() {
            return this.pens[this.pens.length - 1];
        }
        get lastLine() {
            return this.lines[this.lines.length - 1];
        }
        get linesCount() {
            return this.lines.length;
        }
        get plainText() {
            let txt = "";
            for (const pen of this.pens) {
                txt += pen.plainText;
            }
            return txt;
        }
        get rawTextLength() {
            let len = 0;
            for (const pen of this.pens) {
                len += pen.plainTextLength;
            }
            return len;
        }
    }

    function SyncFont(context, style) {
        context.font = style.font;
    }
    function SyncStyle(context, style) {
        context.textBaseline = "alphabetic";
        context.textAlign = "start";
        context.fillStyle = style.fillStyle;
        context.strokeStyle = style.strokeStyle;
        context.lineWidth = style.strokeThickness;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.imageSmoothingEnabled = true;
    }
    function SyncShadow(context, style, enable) {
        if (enable) {
            context.shadowColor = style.shadowColor;
            context.shadowBlur = style.shadowBlur;
            context.shadowOffsetX = style.shadowOffsetX;
            context.shadowOffsetY = style.shadowOffsetY;
        }
        else {
            context.shadowColor = "#000";
            context.shadowBlur = 0;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
        }
    }

    function GetTextWidth(text, context) {
        return context.measureText(text).width;
    }
    function GetTextHeightMetrics(text, context, defaultTextHeight = 0) {
        let metrics = context.measureText(text);
        let ascent = metrics.actualBoundingBoxAscent;
        let descent = metrics.actualBoundingBoxDescent;
        if ((!ascent && !descent) || text === '') {
            ascent = defaultTextHeight;
            descent = 0;
        }
        TextHeightResult.ascent = ascent;
        TextHeightResult.descent = descent;
        TextHeightResult.height = Math.ceil(Math.abs(ascent) + Math.abs(descent));
        return TextHeightResult;
    }
    let TextHeightResult = {
        ascent: 0,
        descent: 0,
        height: 0
    };

    function UpdatePenManager(penManager, text, canvasText, wrapMode, wrapWidth) {
        penManager.freePens();
        if (text === "") {
            return penManager;
        }
        const { context, parent } = canvasText;
        const matchs = canvasText.parser.splitText(text);
        let curProp;
        let wrapLines;
        let cursorX = 0;
        for (const match of matchs) {
            const result = canvasText.parser.tagTextToProp(match, curProp);
            let plainText = result.text;
            curProp = result.prop;
            if (typeof curProp.img === "string") {
                let imgWidth = 0;
                let imgHeight = 0;
                const packageItem = UIPackage.getItemByURL(curProp.img);
                if (packageItem) {
                    imgWidth = packageItem.width;
                    imgHeight = packageItem.height;
                }
                else {
                    imgWidth = 0;
                    imgHeight = 0;
                }
                penManager.addImagePen(cursorX, 0, imgWidth, imgHeight, Phaser.Utils.Objects.Clone(curProp));
                cursorX += imgWidth;
            }
            else if (plainText !== "") {
                context.save();
                const curStyle = canvasText.parser.propToContextStyle(parent.style, curProp);
                SyncFont(context, curStyle);
                SyncStyle(context, curStyle);
                let strokeThickness = curStyle.strokeThickness;
                let halfStrokeThickness = strokeThickness >> 1;
                wrapLines = WrapText(plainText, GetTextWidth, context, wrapMode, wrapWidth, cursorX);
                // Style of wrapped lines are the same, and has the same text height
                let textHeightResult = GetTextHeightMetrics('|MÉq', context);
                for (const n of wrapLines) {
                    const textHeight = textHeightResult.height + strokeThickness;
                    const ascent = textHeightResult.ascent + halfStrokeThickness;
                    const descent = textHeightResult.descent + halfStrokeThickness;
                    penManager.addTextPen(n.text, cursorX, 0, n.width, textHeight, ascent, descent, Phaser.Utils.Objects.Clone(curProp), n.newLineMode);
                    if (n.newLineMode !== NewLineMode.none) {
                        cursorX = 0;
                    }
                    else {
                        cursorX += n.width;
                    }
                }
                context.restore();
            }
        }
        // Update cursorY of each pen in each line
        // Update maxLineWidth, totalLineHeight
        let liens = penManager.lines;
        let lineSpacing = canvasText.parent.style.lineSpacing;
        let maxLineWidth = 0;
        let totalLineHeight = 0;
        for (const line of liens) {
            const pens = line.pens;
            // Get lineHeight and ascentY
            let ascent = 0;
            let descent = 0;
            for (const pen of pens) {
                ascent = Math.max(ascent, pen.ascent);
                descent = Math.max(descent, pen.descent);
            }
            const currLineHeight = ascent + descent;
            const cursorY = totalLineHeight + ascent;
            for (const pen of pens) {
                pen.y += cursorY;
            }
            line.y = cursorY;
            line.height = currLineHeight;
            maxLineWidth = Math.max(maxLineWidth, line.width);
            totalLineHeight += currLineHeight + lineSpacing;
        }
        penManager.maxLineWidth = maxLineWidth;
        penManager.totalLineHeight = totalLineHeight - lineSpacing;
        return penManager;
    }

    class HitAreaManager {
        constructor() {
            this.hitAreas = [];
        }
        destroy() {
            this.clear();
        }
        clear() {
            return this;
        }
        add(key, x, y, width, height) {
            const rectangle = new HitAreaRectangle(x, y, width, height);
            rectangle.key = key;
            this.hitAreas.push(rectangle);
            return this;
        }
        getFirstHitArea(x, y) {
            for (const area of this.hitAreas) {
                if (area.contains(x, y)) {
                    return area;
                }
            }
        }
    }
    class HitAreaRectangle extends Phaser.Geom.Rectangle {
    }

    function Draw(canvasText, drawBoundX, drawBoundY, drawBoundWidth, drawBoundHeight, textScrollX = 0, textScrollY = 0, penManager = canvasText.penManager) {
        if (canvasText.hitAreaManager) {
            canvasText.hitAreaManager.clear();
        }
        let totalLineHeight = penManager.totalLineHeight;
        if (totalLineHeight === 0) {
            return;
        }
        const clipMode = (drawBoundWidth < canvasText.textWidth) || drawBoundHeight < canvasText.textHeight;
        const context = canvasText.context;
        context.save();
        const parent = canvasText.parent;
        const style = parent.style;
        Clear(canvasText);
        if (clipMode) {
            context.beginPath();
            context.rect(drawBoundX, drawBoundY, drawBoundWidth, drawBoundHeight);
            context.clip();
        }
        const hAlign = style.halign;
        const vAlign = style.valign;
        // Shift offsetY
        let offsetY = drawBoundY - textScrollY;
        switch (vAlign) {
            case "center":
                offsetY += (drawBoundHeight - totalLineHeight) / 2;
                break;
            case "bottom":
                offsetY += drawBoundHeight - totalLineHeight - 2;
                break;
        }
        let lineTop = offsetY;
        const lines = penManager.lines;
        const drawBoundBottom = drawBoundX + drawBoundHeight;
        for (const line of lines) {
            if (lineTop > drawBoundBottom) {
                // Remainder lines are below draw bound
                break;
            }
            const lineBottom = lineTop + line.height;
            if (lineBottom < drawBoundY) {
                // Lines above draw bound
                lineTop = lineBottom;
                continue;
            }
            let lineWidth = line.width;
            if (lineWidth === 0) {
                // Line has no valid text pen
                lineTop = lineBottom;
                continue;
            }
            // Shift offsetX
            let offsetX = drawBoundX - textScrollX;
            switch (hAlign) {
                case "center":
                    offsetX += (drawBoundWidth - lineWidth) / 2;
                    break;
                case "right":
                    offsetX += drawBoundWidth - lineWidth;
                    break;
            }
            // Draw each pen in this line
            let pens = line.pens;
            for (const pen of pens) {
                DrawPen(canvasText, pen, offsetX, offsetY);
            }
            lineTop = lineBottom;
        }
        context.restore();
    }
    function DrawPen(canvasText, pen, offsetX, offsetY) {
        return __awaiter(this, void 0, void 0, function* () {
            offsetX += pen.x;
            offsetY += pen.y + (pen.prop.y || 0);
            const context = canvasText.context;
            const defaultStyle = canvasText.parent.style;
            context.save();
            const curStyle = canvasText.parser.propToContextStyle(defaultStyle, pen.prop);
            SyncFont(context, curStyle);
            SyncStyle(context, curStyle);
            // Underline
            if ((curStyle.underlineThickness > 0) && (pen.width > 0)) {
                DrawUnderline(canvasText, offsetX, offsetY, pen.width, curStyle);
            }
            // Text
            if (pen.isTextPen) {
                DrawText(canvasText, offsetX, offsetY, pen.text, curStyle);
            }
            // Image
            if (pen.isImagePen) {
                yield DrawImage(canvasText, offsetX, offsetY, pen.prop.img);
            }
            context.restore();
            if (pen.hasAreaMarker && pen.width > 0) {
                if (!canvasText.hitAreaManager) {
                    canvasText.hitAreaManager = new HitAreaManager();
                }
                canvasText.hitAreaManager.add(pen.prop.url, offsetX, offsetY, pen.width, pen.height);
            }
        });
    }
    function Clear(canvasText, style) {
        let canvas = canvasText.canvas, context = canvasText.context;
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    function DrawText(canvasText, x, y, text, style) {
        const context = canvasText.context;
        const { strokeStyle, strokeThickness, fillStyle } = style;
        if (strokeStyle && (strokeStyle !== "none" && strokeThickness > 0)) {
            SyncShadow(context, style, style.shadowFill);
            context.strokeText(text, x, y);
        }
        if (fillStyle && fillStyle !== "none") {
            SyncShadow(context, style, style.shadowFill);
            context.fillText(text, x, y);
        }
    }
    function DrawUnderline(canvasText, x, y, width, style) {
        y += (style.underlineOffsetY - style.underlineThickness / 2) * style.resolution;
        const context = canvasText.context;
        const savedLineCap = context.lineCap;
        context.lineCap = "butt";
        context.beginPath();
        context.strokeStyle = style.underlineColor;
        context.lineWidth = style.underlineThickness * style.resolution;
        context.moveTo(x, y);
        context.lineTo(x + width, y);
        context.stroke();
        context.lineCap = savedLineCap;
    }
    function DrawImage(canvasText, x, y, imgKey, style) {
        const imageManager = canvasText.imageManager;
        if (!imageManager) {
            return;
        }
        // TODO
        // const imgInfo = imageManager.get(imgKey);
        UIPackage.getItemAssetByURL(imgKey);
        // x += imgInfo.left;
        // y += imgInfo.y - imgInfo.height;
        // const context = canvasText.context;
        // context.drawImage();
    }

    class CanvasText {
        constructor(config) {
            this._parent = config.parent;
            this._context = config.context;
            this._canvas = config.canvas;
            this._parser = config.parse;
            this.defaultStyle = this._parent.style;
            this.autoRound = true;
            this.penPool = config.pensPool ? config.pensPool : new Pool();
            this._tmpPenManager = null;
            this._penManager = new PenManager({ penPool: this.penPool });
            const context = this._context;
            this.getTextWidth = function (text) {
                return context.measureText(text).width;
            };
        }
        updatePenManager(text, wrapMode, wrapWidth, penManager) {
            return UpdatePenManager(this._penManager, text, this, wrapMode, wrapWidth);
        }
        draw(x, y, width, height, textScrollX = 0, textScrollY = 0) {
            Draw(this, x, y, width, height, textScrollX, textScrollY);
            return this;
        }
        destroy() {
            this._context = undefined;
            this._canvas = undefined;
            this._parser = undefined;
            this.defaultStyle = undefined;
            if (this._penManager) {
                this._penManager.destroy();
                this._penManager = undefined;
            }
            if (this._tmpPenManager) {
                this._tmpPenManager.destroy();
                this._tmpPenManager = undefined;
            }
            if (this.hitAreaManager) {
                this.hitAreaManager.destroy();
                this.hitAreaManager = undefined;
            }
        }
        getPlainText(text, start, end) {
            let plainText;
            if (!text) {
                plainText = this._penManager.plainText;
            }
            else {
                plainText = this._parser.splitText(text, true).join("");
            }
            if ((start != null) || (end != null)) {
                if (start == null) {
                    start = 0;
                }
                if (end == null) {
                    end = plainText.length;
                }
                plainText = plainText.substring(start, end);
            }
            return plainText;
        }
        getPenManager(text, retPenManager) {
            if (!text) {
                return this.clonePenManager(retPenManager, this._penManager);
            }
            if (!retPenManager) {
                retPenManager = new PenManager({ penPool: this.penPool });
            }
            const defaultStyle = this.defaultStyle;
            this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, retPenManager);
            return retPenManager;
        }
        getText(text, start, end, wrap) {
            if (text == null) {
                return this._penManager.getSliceTagText(this._parser.propToTagText, this._parser, start, end, wrap);
            }
            const penManager = this._tmpPenManager;
            const defaultStyle = this.defaultStyle;
            this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, penManager);
            return penManager.getSliceTagText(this._parser.propToTagText, this._parser, start, end, wrap);
        }
        clonePenManager(ret, src) {
            if (src === undefined) {
                src = this._penManager;
            }
            return src.clone(ret);
        }
        getLastPen(penManager) {
            if (penManager === undefined) {
                penManager = this._penManager;
            }
            return penManager.lastPen;
        }
        setInteractive() {
            const parent = this.parent;
            if (!parent) {
                return;
            }
            parent.off(Phaser.Input.Events.POINTER_DOWN, this.pointerDownHandler, this);
            parent.off(Phaser.Input.Events.POINTER_UP, this.pointerDownHandler, this);
            parent.on(Phaser.Input.Events.POINTER_DOWN, this.pointerDownHandler, this);
            parent.on(Phaser.Input.Events.POINTER_UP, this.pointerUpHandler, this);
        }
        clear() {
            const canvas = this._canvas;
            this._context.clearRect(0, 0, canvas.width, canvas.height);
        }
        pointerDownHandler(pointer, localX, localY, event) {
            this.fireEvent("areadown", pointer, localX, localY);
        }
        pointerUpHandler(pointer, localX, localY, event) {
            this.fireEvent("areaup", pointer, localX, localY);
        }
        fireEvent(eventName, pointer, localX, localY) {
            if (!this.hitAreaManager) {
                return;
            }
            const area = this.hitAreaManager.getFirstHitArea(localX, localY);
            if (!area) {
                return;
            }
            const key = area.key;
            this.parent.emit(`${eventName}-${key}`, pointer, localX, localY);
            this.parent.emit(eventName, key, pointer, localX, localY);
        }
        get imageManager() {
            return this.parent.imageManager;
        }
        get startXOffset() {
            return this.defaultStyle.strokeThickness / 2;
        }
        get startYOffset() {
            const defaultStyle = this.defaultStyle;
            return defaultStyle.strokeThickness / 2 + defaultStyle.metrics.ascent;
        }
        get lines() {
            return this._penManager.lines;
        }
        get context() {
            return this._context;
        }
        get canvas() {
            return this._canvas;
        }
        get penManager() {
            return this._penManager;
        }
        get textWidth() {
            return this.penManager.maxLineWidth;
        }
        get textHeight() {
            return this.penManager.totalLineHeight;
        }
        get parent() {
            return this._parent;
        }
        get parser() {
            return this._parser;
        }
    }

    class ImageManager {
        constructor() {
            this.images = new Map();
        }
        add(key, config) {
            if (typeof key === "string") {
                this._add(key, config);
            }
            else if (Array.isArray(key)) {
                for (const k of key) {
                    this._add(k);
                }
            }
            else {
                const data = key;
                for (const key in data) {
                    this._add(key, data[key]);
                }
            }
            return this;
        }
        remove(key) {
            this.images.delete(key);
            return this;
        }
        get(key) {
            return this.images.get(key);
        }
        destroy() {
            this.images.clear();
        }
        getOuterWidth(key) {
            const imageInfo = this.images.get(key);
            return imageInfo ? (imageInfo.width + imageInfo.left + imageInfo.right) : 0;
        }
        getOuterHeight(key) {
            const imageInfo = this.images.get(key);
            return imageInfo ? (imageInfo.height + imageInfo.top + imageInfo.bottom) : 0;
        }
        _add(key, config) {
            // TODO add image
        }
    }

    function TextCanvasRenderer(renderer, src, camera, parentMatrix) {
        if (src.width === 0 || src.height === 0) {
            return;
        }
        camera.addToRenderList(src);
        renderer.batchSprite(src, src.frame, camera, parentMatrix);
    }

    function TextWebGLRenderer(renderer, src, camera, parentMatrix) {
        if (src.width === 0 || src.height === 0) {
            return;
        }
        camera.addToRenderList(src);
        var frame = src.frame;
        var width = frame.width;
        var height = frame.height;
        var getTint = Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlpha;
        var pipeline = renderer.pipelines.set(src.pipeline, src);
        var textureUnit = pipeline.setTexture2D(frame.glTexture);
        renderer.pipelines.preBatch(src);
        pipeline.batchTexture(src, frame.glTexture, width, height, src.x, src.y, width, height, src.scaleX, src.scaleY, src.rotation, src.flipX, src.flipY, src.scrollFactorX, src.scrollFactorY, src.displayOriginX, src.displayOriginY, 0, 0, width, height, getTint(src.tintTopLeft, camera.alpha * src.alphaTL), getTint(src.tintTopRight, camera.alpha * src.alphaTR), getTint(src.tintBottomLeft, camera.alpha * src.alphaBL), getTint(src.tintBottomRight, camera.alpha * src.alphaBR), 0, 0, 0, camera, parentMatrix, false, textureUnit);
        renderer.pipelines.postBatch(src);
    }

    const CONST = {
        // new line mode
        NO_NEWLINE: 0,
        RAW_NEWLINE: 1,
        WRAPPED_NEWLINE: 2,
        // wrap mode
        NO_WRAP: 0,
        WORD_WRAP: 1,
        CHAR_WRAP: 2,
        // split lines
        SPLITREGEXP: /(?:\r\n|\r|\n)/
    };

    class TextStyle {
        constructor(text, style) {
            this.fontFamily = UIConfig.defaultFont;
            this.fontSize = "16px";
            this.fontStyle = "";
            this.bold = false;
            this.italic = false;
            this.fillStyle = "#000";
            this.strokeStyle = "#000";
            this.strokeThickness = 0;
            // shadow
            this.shadowOffsetX = 0;
            this.shadowOffsetY = 0;
            this.shadowColor = "#000";
            this.shadowBlur = 0;
            this.shadowStroke = false;
            this.shadowFill = false;
            this.underlineThickness = 0;
            this.underlineOffsetY = 5;
            // align
            this.halign = "left";
            this.valign = "top";
            // size
            this.fixedWidth = 0;
            this.fixedHeight = 0;
            this.resolution = 1;
            this.lineSpacing = 0;
            this.letterSpacing = 0;
            this.rtl = false;
            this.antialias = true;
            this.parent = text;
            this.setStyle(style);
            const metrics = style.metrics;
            if (metrics) {
                this._metrics = {
                    ascent: metrics.ascent || 0,
                    descent: metrics.descent || 0,
                    fontSize: metrics.fontSize || 0
                };
            }
        }
        setStyle(style, updateText = true) {
            if (style && style.hasOwnProperty("wrap")) ;
            if (style && style.fontSize && typeof style.fontSize === "number") {
                style.fontSize = style.fontSize.toString() + "px";
            }
        }
        update(recalculateMetrics) {
            if (recalculateMetrics) {
                this._font = `${this.fontStyle} ${this.fontSize} ${this.fontFamily}`;
                // TODO
                // this.metrics = Phaser.GameObjects.MeasureText(this);
            }
            return this.parent.updateText(recalculateMetrics);
        }
        buildFont() {
            const newFont = this.fontStyle + " " + this.fontSize + " " + this.fontFamily;
            if (newFont !== this._font) {
                this._font = newFont;
            }
            return this;
        }
        setFont(font) {
            return this.update(true);
        }
        setFontFamily(family) {
            this.fontFamily = family;
            return this.update(true);
        }
        setFontStyle(style) {
            this.fontStyle = style;
            return this.update(true);
        }
        setFontSize(size) {
            if (typeof size === "number") {
                size = size.toString() + "px";
            }
            this.fontSize = size;
            return this.update(true);
        }
        setFixedSize(width, height) {
            this.fixedWidth = width;
            this.fixedHeight = height;
            if (width) {
                this.parent.width = width;
            }
            if (height) {
                this.parent.height = height;
            }
            return this.update(this.isWrapFitMode);
        }
        setFill(color) {
        }
        setLineSpacing(value) {
            this.lineSpacing = value;
            this.update(false);
        }
        setStroke(style, thickness) {
            this.strokeStyle = style;
            this.strokeThickness = thickness;
            // return this.update(true);
        }
        setUnderLine(color, o) {
            this.underlineColor = color;
            // this.underlineOffset = offset;
            // this.underlineThickness = thickness;
        }
        setSingleLine(value) {
        }
        get canvas() {
            return this.parent.canvasText.canvas;
        }
        get context() {
            return this.parent.canvasText.context;
        }
        get isWrapFitMode() {
            return (this.fixedWidth > 0) && (this.wrapMode !== CONST.NO_WRAP) && (this.wrapWidth === 0);
        }
        get lineHeight() {
            return this._metrics.fontSize + this.strokeThickness + this.lineSpacing;
        }
        get metrics() {
            return this._metrics;
        }
    }

    class TextField extends DisplayObject {
        constructor(scene) {
            super(scene, "TextField");
            this.renderer = scene.sys.game.renderer;
            this.canvas = Phaser.Display.Canvas.CanvasPool.create(this);
            this.context = this.canvas.getContext("2d");
            this._text = undefined;
            this.width = 1;
            this.height = 1;
            this._style = new TextStyle(this, {});
            this.dirty = false;
            this.texture = scene.sys.textures.addCanvas(null, this.canvas, true);
            this.frame = this.texture.get();
            this.frame.source.resolution = this._style.resolution;
            const webglRenderer = this.renderer;
            if (webglRenderer && webglRenderer.gl) {
                webglRenderer.deleteTexture(this.frame.source.glTexture);
                this.frame.source.glTexture = null;
            }
            this.setOrigin(0, 0);
            this.initPipeline();
            this.setPosition(0, 0);
            this.padding = new Phaser.Geom.Rectangle();
            this._canvasText = new CanvasText({
                parent: this,
                canvas: this.canvas,
                context: this.context,
                parse: new Parser(),
            });
            this.scene.sys.game.events.on(Phaser.Core.Events.CONTEXT_RESTORED, this.onContextRestored, this);
            this.on("areadown", (pointer, localX, localY, event) => {
                console.log("areadown: ", pointer, localX, localY);
            }, this);
        }
        setText(value) {
            if (!value) {
                value = "";
            }
            if (Array.isArray(value)) {
                value = value.join("\n");
            }
            if (value !== this._text) {
                this._text = value;
                this.updateText();
            }
            return this;
        }
        // public setStyle(style) {
        //     this._style.setStyle(style);
        //     return this;
        // }
        // public setFont(font) {
        //     this._style.setFont(font);
        //     return this;
        // }
        addImage(key, config) {
            this.imageManager.add(key, config);
            return this;
        }
        drawAreaBounds(graphics, color) {
            // TODO
            return this;
        }
        updateText(runWrap = true) {
            if (this._text === undefined) {
                return;
            }
            const canvasText = this.canvasText;
            const style = this._style;
            if (runWrap) {
                canvasText.updatePenManager(this._text, style.wrapMode, style.wrapWidth);
            }
            const padding = this.padding;
            let textWidth, textHeight;
            if (style.fixedWidth === 0) {
                textWidth = canvasText.textWidth;
                this.width = textWidth + padding.left + padding.right;
            }
            else {
                this.width = style.fixedWidth;
                textWidth = this.width - padding.left - padding.right;
                if (textWidth > canvasText.textWidth) {
                    textWidth = canvasText.textWidth;
                }
            }
            if (style.fixedHeight === 0) {
                textHeight = canvasText.textHeight;
                this.height = textHeight + padding.top + padding.bottom;
            }
            else {
                this.height = style.fixedHeight;
                textHeight = this.height - padding.top - padding.bottom;
                if (textHeight < canvasText.textHeight) {
                    textHeight = canvasText.textHeight;
                }
            }
            let w = this.width;
            let h = this.height;
            this.updateDisplayOrigin();
            const resolution = style.resolution;
            w *= resolution;
            h *= resolution;
            w = Math.max(Math.ceil(w), 1);
            h = Math.max(Math.ceil(h), 1);
            const canvas = this.canvas;
            const context = this.context;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                this.frame.setSize(w, h);
            }
            else {
                context.clearRect(0, 0, w, h);
            }
            context.save();
            context.scale(resolution, resolution);
            // draw
            canvasText.draw(padding.left, padding.top, textWidth, textHeight);
            context.restore();
            const webglRenderer = this.renderer;
            if (webglRenderer.gl) {
                this.frame.source.glTexture = webglRenderer.canvasToTexture(canvas, this.frame.source.glTexture, true);
                this.frame.glTexture = this.frame.source.glTexture;
            }
            this.dirty = true;
            const input = this.input;
            if (input && !input.customHitArea) {
                input.hitArea.width = this.width;
                input.hitArea.height = this.height;
            }
            return this;
        }
        setWordWrapWidth(width, useAdvancedWrap) {
            this._style.wrapMode = WrapMode.char;
            this._style.wrapWidth = width;
        }
        setSingleLine(val) {
            this._style.wrapMode = val ? WrapMode.none : WrapMode.char;
        }
        setInteractive(hitArea, callback, dropZone) {
            super.setInteractive(hitArea, callback, dropZone);
            this.canvasText.setInteractive();
            return this;
        }
        renderCanvas(renderer, src, camera, parentMatrix) {
            TextCanvasRenderer(renderer, src, camera, parentMatrix);
        }
        renderWebGL(renderer, src, camera, parentMatrix) {
            TextWebGLRenderer(renderer, src, camera, parentMatrix);
        }
        setColor(val) {
            this._style.fillStyle = val;
            this.updateText();
        }
        setAlign(val) {
            this._style.halign = val;
        }
        setVAlign(val) {
            this._style.valign = val;
        }
        setBold(val) {
            this._style.bold = val;
        }
        setItalic(val) {
            this._style.italic = val;
        }
        setUnderline(thickness = 2, style, offsetY) {
            if (!style) {
                style = this._style.fillStyle;
            }
            const _style = this._style;
            _style.underlineColor = style;
            _style.underlineThickness = thickness;
            if (offsetY)
                _style.underlineOffsetY = offsetY;
        }
        setShadowStyle(color) {
            this._style.shadowColor = color;
        }
        setShadowOffset(x, y) {
            this._style.shadowFill = (x !== 0 || y !== 0);
            this._style.shadowOffsetX = x;
            this._style.shadowOffsetY = y;
        }
        setShadowFill(val) {
            this._style.shadowFill = val;
        }
        setLetterSpacing(val) {
            this._style.letterSpacing = val;
        }
        setStroke(color, thickness) {
            this._style.setStroke(color, thickness);
        }
        setLineSpacing(val) {
            this._style.lineSpacing = val;
        }
        setFont(font) {
            this._style.fontFamily = font;
        }
        setFontSize(fontSize) {
            if (typeof fontSize === "number") {
                fontSize = fontSize + "px";
            }
            this._style.fontSize = fontSize;
        }
        setValign(val) {
            this._style.valign = val;
        }
        onContextRestored() {
            this.dirty = true;
        }
        preDestroy() {
            if (this._canvasText) {
                this._canvasText.destroy();
                this._canvasText = undefined;
            }
            if (this._imageManager) {
                this._imageManager.destroy();
                this._imageManager = undefined;
            }
            super.preDestroy();
            this.scene.sys.game.events.off(Phaser.Core.Events.CONTEXT_RESTORED, this.onContextRestored, this);
        }
        get imageManager() {
            if (!this._imageManager) {
                this._imageManager = new ImageManager();
            }
            return this._imageManager;
        }
        get canvasText() {
            return this._canvasText;
        }
        get style() {
            return this._style;
        }
        get text() {
            return this._text;
        }
        set text(val) {
            this.setText(val);
        }
    }

    class GBasicTextField extends GTextField {
        constructor(scene, type) {
            super(scene, type);
            this._letterSpacing = 0;
            this._textWidth = 0;
            this._textHeight = 0;
            // this._textField.align = "left";
            // this._textField.font = fgui.UIConfig.defaultFont;
            this._autoSize = exports.AutoSizeType.Both;
            this._widthAutoSize = this._heightAutoSize = true;
            // this._textField["_sizeDirty"] = false;
        }
        createDisplayObject() {
            this._displayObject = this._textField = new TextField(this.scene);
            this._displayObject.mouseEnabled = false;
        }
        get nativeText() {
            return this._textField;
        }
        set text(value) {
            this._text = value;
            if (this._text == null)
                this._text = "";
            if (this._bitmapFont == null) {
                if (this._widthAutoSize)
                    this._textField.width = 10000;
                var text2 = this._text;
                // if (this._templateVars)
                // text2 = this.parseTemplate(text2);
                // if (this._ubbEnabled) //laya还不支持同一个文本不同样式
                //     this._textField.text = UBBParser.inst.parse(text2, true);
                // else
                this._textField.text = text2;
            }
            else {
                this._textField.text = "";
                this._textField["setChanged"]();
            }
            if (this.parent && this.parent._underConstruct) {
                // this._textField.typeset();
                this.updateSize();
                this.doAlign();
            }
        }
        get text() {
            return this._text;
        }
        get font() {
            return this._textField.style.fontFamily;
        }
        set font(value) {
            this._font = value;
            if (this._font) {
                this._textField.setFont(this._font);
            }
            else {
                this._textField.setFont(UIConfig.defaultFont);
            }
            // if (ToolSet.startsWith(this._font, "ui://"))
            //     this._bitmapFont = <BitmapFont>UIPackage.getItemAssetByURL(this._font);
            // else
            //     delete this._bitmapFont;
            // if (this._bitmapFont) {
            //     this._textField["setChanged"]();
            // }
            // else {
            //     if (this._font)
            //         this._textField.font = this._font;
            //     else
            //         this._textField.font = fgui.UIConfig.defaultFont;
            // }
        }
        get fontSize() {
            const fontSize = this._textField.style.fontSize;
            if (typeof fontSize === "number") {
                return fontSize;
            }
            return parseInt(fontSize);
        }
        set fontSize(value) {
            this._textField.setFontSize(value);
        }
        get color() {
            return this._color;
        }
        set color(value) {
            //todo
            if (this._color != value) {
                this._color = value;
                this.updateGear(4);
                if (this.grayed)
                    this._textField.setColor("#AAAAAA");
                else
                    this._textField.setColor(this._color);
            }
        }
        get align() {
            return this._align;
        }
        set align(value) {
            this._align = value;
            this._textField.setAlign(this._align);
            this.doAlign();
        }
        get valign() {
            return this._valign;
        }
        set valign(value) {
            this._valign = value;
            this._textField.setVAlign(this._valign);
            this.doAlign();
        }
        get leading() {
            return this._textField.style.lineSpacing;
        }
        set leading(value) {
            this._textField.setLineSpacing(value);
            // this._textField.leading = value;
        }
        get letterSpacing() {
            return this._letterSpacing;
        }
        set letterSpacing(value) {
            this._letterSpacing = value;
            this._textField.setLetterSpacing(value);
        }
        get bold() {
            return this._textField.style.bold;
        }
        set bold(value) {
            // todo bold
            // this._textField.bold = value;
            this._textField.setBold(value);
        }
        get italic() {
            return this._textField.style.italic;
        }
        set italic(value) {
            this._textField.setItalic(value);
        }
        get underline() {
            return false;
        }
        set underline(value) {
            this._textField.setUnderline(value ? 2 : 0);
        }
        get singleLine() {
            return this._singleLine;
        }
        set singleLine(value) {
            this._singleLine = value;
            if (!this._widthAutoSize && !this._singleLine) {
                // 设置换行宽度，是否忽略空格
                this._textField.setWordWrapWidth(this.initWidth, true);
            }
            else {
                this._textField.setSingleLine(true);
            }
        }
        get stroke() {
            return this._textField.style.strokeThickness;
        }
        set stroke(value) {
            this._textField.setStroke(this._strokeColor, value);
        }
        get strokeColor() {
            return this._strokeColor;
        }
        set strokeColor(value) {
            if (this._strokeColor != value) {
                this._strokeColor = value;
                this._textField.setStroke(this._strokeColor, this.stroke);
                this.updateGear(4);
            }
        }
        setStroke(color, thickness) {
            if (this._strokeColor !== color || this._stroke !== thickness) {
                this._strokeColor = color;
                this._stroke = thickness;
                this._textField.setStroke(color, thickness);
            }
        }
        setShadowStyle(color) {
            this._textField.setShadowStyle(color);
        }
        setShadowOffset(x, y) {
            this._textField.setShadowOffset(x, y);
        }
        updateAutoSize() {
            if (!this._underConstruct) {
                if (!this._heightAutoSize)
                    this._textField.setSize(this.width, this.height);
                else if (!this._widthAutoSize)
                    this._textField.width = this.width;
            }
        }
        get textWidth() {
            return this._textWidth;
        }
        ensureSizeCorrect() {
            // if (!this._underConstruct && this._textField["_isChanged"])
            // this._textField.typeset();
        }
        typeset() {
            if (this._bitmapFont)
                this.renderWithBitmapFont();
            else if (this._widthAutoSize || this._heightAutoSize)
                this.updateSize();
        }
        updateSize() {
            this._textWidth = Math.ceil(this._textField.displayWidth);
            this._textHeight = Math.ceil(this._textField.displayHeight);
            var w, h = 0;
            if (this._widthAutoSize) {
                w = this._textWidth;
                if (this._textField.displayWidth != w) {
                    this._textField.displayWidth = w;
                }
            }
            else
                w = this.width;
            if (this._heightAutoSize) {
                h = this._textHeight;
                if (!this._widthAutoSize) {
                    if (this._textField.displayHeight != this._textHeight)
                        this._textField.displayHeight = this._textHeight;
                }
            }
            else {
                h = this.height;
                if (this._textHeight > h)
                    this._textHeight = h;
                if (this._textField.displayHeight != this._textHeight)
                    this._textField.displayHeight = this._textHeight;
            }
            this._updatingSize = true;
            this.setSize(w, h);
            this._updatingSize = false;
        }
        setSize(w, h) {
            super.setSize(w, h);
        }
        renderWithBitmapFont() {
            // var gr: Phaser.GameObjects.Graphics = this._displayObject.graphics;
            // gr.clear();
            // if (!this._lines)
            //     this._lines = new Array<LineInfo>();
            // else
            //     returnList(this._lines);
            // var lineSpacing: number = this.leading - 1;
            // var rectWidth: number = this.width - GUTTER_X * 2;
            // var lineWidth: number = 0, lineHeight: number = 0, lineTextHeight: number = 0;
            // var glyphWidth: number = 0, glyphHeight: number = 0;
            // var wordChars: number = 0, wordStart: number = 0, wordEnd: number = 0;
            // var lastLineHeight: number = 0;
            // var lineBuffer: string = "";
            // var lineY: number = GUTTER_Y;
            // var line: LineInfo;
            // var wordWrap: boolean = true; // ===========!this._widthAutoSize && !this._singleLine;
            // var fontSize: number = this.fontSize;
            // var fontScale: number = this._bitmapFont.resizable ? fontSize / this._bitmapFont.size : 1;
            // this._textWidth = 0;
            // this._textHeight = 0;
            // var text2: string = this._text;
            // if (this._templateVars)
            //     text2 = this.parseTemplate(text2);
            // var textLength: number = text2.length;
            // for (var offset: number = 0; offset < textLength; ++offset) {
            //     var ch: string = text2.charAt(offset);
            //     var cc: number = ch.charCodeAt(0);
            //     if (cc == 10) {
            //         lineBuffer += ch;
            //         line = borrow();
            //         line.width = lineWidth;
            //         if (lineTextHeight == 0) {
            //             if (lastLineHeight == 0)
            //                 lastLineHeight = fontSize;
            //             if (lineHeight == 0)
            //                 lineHeight = lastLineHeight;
            //             lineTextHeight = lineHeight;
            //         }
            //         line.height = lineHeight;
            //         lastLineHeight = lineHeight;
            //         line.textHeight = lineTextHeight;
            //         line.text = lineBuffer;
            //         line.y = lineY;
            //         lineY += (line.height + lineSpacing);
            //         if (line.width > this._textWidth)
            //             this._textWidth = line.width;
            //         this._lines.push(line);
            //         lineBuffer = "";
            //         lineWidth = 0;
            //         lineHeight = 0;
            //         lineTextHeight = 0;
            //         wordChars = 0;
            //         wordStart = 0;
            //         wordEnd = 0;
            //         continue;
            //     }
            //     if (cc >= 65 && cc <= 90 || cc >= 97 && cc <= 122) //a-z,A-Z
            //     {
            //         if (wordChars == 0)
            //             wordStart = lineWidth;
            //         wordChars++;
            //     }
            //     else {
            //         if (wordChars > 0)
            //             wordEnd = lineWidth;
            //         wordChars = 0;
            //     }
            //     if (cc == 32) {
            //         glyphWidth = Math.ceil(fontSize / 2);
            //         glyphHeight = fontSize;
            //     }
            //     else {
            //         var glyph: BMGlyph = this._bitmapFont.glyphs[ch];
            //         if (glyph) {
            //             glyphWidth = Math.ceil(glyph.advance * fontScale);
            //             glyphHeight = Math.ceil(glyph.lineHeight * fontScale);
            //         }
            //         else {
            //             glyphWidth = 0;
            //             glyphHeight = 0;
            //         }
            //     }
            //     if (glyphHeight > lineTextHeight)
            //         lineTextHeight = glyphHeight;
            //     if (glyphHeight > lineHeight)
            //         lineHeight = glyphHeight;
            //     if (lineWidth != 0)
            //         lineWidth += this._letterSpacing;
            //     lineWidth += glyphWidth;
            //     if (!wordWrap || lineWidth <= rectWidth) {
            //         lineBuffer += ch;
            //     }
            //     else {
            //         line = borrow();
            //         line.height = lineHeight;
            //         line.textHeight = lineTextHeight;
            //         if (lineBuffer.length == 0) {//the line cannt fit even a char
            //             line.text = ch;
            //         }
            //         else if (wordChars > 0 && wordEnd > 0) {//if word had broken, move it to new line
            //             lineBuffer += ch;
            //             var len: number = lineBuffer.length - wordChars;
            //             line.text = ToolSet.trimRight(lineBuffer.substr(0, len));
            //             line.width = wordEnd;
            //             lineBuffer = lineBuffer.substr(len);
            //             lineWidth -= wordStart;
            //         }
            //         else {
            //             line.text = lineBuffer;
            //             line.width = lineWidth - (glyphWidth + this._letterSpacing);
            //             lineBuffer = ch;
            //             lineWidth = glyphWidth;
            //             lineHeight = glyphHeight;
            //             lineTextHeight = glyphHeight;
            //         }
            //         line.y = lineY;
            //         lineY += (line.height + lineSpacing);
            //         if (line.width > this._textWidth)
            //             this._textWidth = line.width;
            //         wordChars = 0;
            //         wordStart = 0;
            //         wordEnd = 0;
            //         this._lines.push(line);
            //     }
            // }
            // if (lineBuffer.length > 0) {
            //     line = borrow();
            //     line.width = lineWidth;
            //     if (lineHeight == 0)
            //         lineHeight = lastLineHeight;
            //     if (lineTextHeight == 0)
            //         lineTextHeight = lineHeight;
            //     line.height = lineHeight;
            //     line.textHeight = lineTextHeight;
            //     line.text = lineBuffer;
            //     line.y = lineY;
            //     if (line.width > this._textWidth)
            //         this._textWidth = line.width;
            //     this._lines.push(line);
            // }
            // if (this._textWidth > 0)
            //     this._textWidth += GUTTER_X * 2;
            // var count: number = this._lines.length;
            // if (count == 0) {
            //     this._textHeight = 0;
            // }
            // else {
            //     line = this._lines[this._lines.length - 1];
            //     this._textHeight = line.y + line.height + GUTTER_Y;
            // }
            // var w: number, h: number = 0;
            // if (this._widthAutoSize) {
            //     if (this._textWidth == 0)
            //         w = 0;
            //     else
            //         w = this._textWidth;
            // }
            // else
            //     w = this.width;
            // if (this._heightAutoSize) {
            //     if (this._textHeight == 0)
            //         h = 0;
            //     else
            //         h = this._textHeight;
            // }
            // else
            //     h = this.height;
            // this._updatingSize = true;
            // this.setSize(w, h);
            // this._updatingSize = false;
            // this.doAlign();
            // if (w == 0 || h == 0)
            //     return;
            // var charX: number = GUTTER_X;
            // var lineIndent: number = 0;
            // var charIndent: number = 0;
            // rectWidth = this.width - GUTTER_X * 2;
            // var lineCount: number = this._lines.length;
            // var color: string = this._bitmapFont.tint ? this._color : null;
            // for (var i: number = 0; i < lineCount; i++) {
            //     line = this._lines[i];
            //     charX = GUTTER_X;
            //     if (this.align == "center")
            //         lineIndent = (rectWidth - line.width) / 2;
            //     else if (this.align == "right")
            //         lineIndent = rectWidth - line.width;
            //     else
            //         lineIndent = 0;
            //     textLength = line.text.length;
            //     for (var j: number = 0; j < textLength; j++) {
            //         ch = line.text.charAt(j);
            //         cc = ch.charCodeAt(0);
            //         if (cc == 10)
            //             continue;
            //         if (cc == 32) {
            //             charX += this._letterSpacing + Math.ceil(fontSize / 2);
            //             continue;
            //         }
            //         glyph = this._bitmapFont.glyphs[ch];
            //         if (glyph) {
            //             charIndent = (line.height + line.textHeight) / 2 - Math.ceil(glyph.lineHeight * fontScale);
            //             if (glyph.texture) {
            //                 gr.drawTexture(glyph.texture,
            //                     charX + lineIndent + Math.ceil(glyph.x * fontScale),
            //                     line.y + charIndent + Math.ceil(glyph.y * fontScale),
            //                     glyph.width * fontScale,
            //                     glyph.height * fontScale, null, 1, color);
            //             }
            //             charX += this._letterSpacing + Math.ceil(glyph.advance * fontScale);
            //         }
            //         else {
            //             charX += this._letterSpacing;
            //         }
            //     }//this.text loop
            // }//line loop
        }
        // protected handleSizeChanged(): void {
        // if (this._updatingSize)
        //     return;
        // if (this._underConstruct)
        //     this._textField.setSize(this._width, this._height);
        // else {
        //     if (this._bitmapFont) {
        //         if (!this._widthAutoSize)
        //             this._textField["setChanged"]();
        //         else
        //             this.doAlign();
        //     }
        //     else {
        //         if (!this._widthAutoSize) {
        //             if (!this._heightAutoSize)
        //                 this.setSize(this._width, this._height);
        //             else
        //                 this._textField.width = this._width;
        //         }
        //     }
        // }
        // }
        handleGrayedChanged() {
            super.handleGrayedChanged();
            // if (this.grayed)
            //     this._textField.color = "#AAAAAA";
            // else
            //     this._textField.color = this._color;
        }
        doAlign() {
            // 横向
            if (this.align === "left" || this._textWidth === 0) {
                this._xOffset = GUTTER_X;
            }
            else {
                let dx = this.width - this._textWidth;
                if (dx < 0)
                    dx = 0;
                if (this.align === "center") {
                    this._xOffset = Math.floor(dx / 2);
                }
                else {
                    this._xOffset = Math.floor(dx);
                }
            }
            // 纵向
            if (this.valign == "top" || this._textHeight == 0) {
                this._yOffset = GUTTER_Y;
            }
            else {
                var dh = this.height - this._textHeight;
                if (dh < 0)
                    dh = 0;
                if (this.valign == "center")
                    this._yOffset = Math.floor(dh / 2);
                else
                    this._yOffset = Math.floor(dh);
            }
            this.handleXYChanged();
        }
        flushVars() {
            this.text = this._text;
        }
    }
    const GUTTER_X = 2;
    const GUTTER_Y = 2;

    class GRichTextField extends GBasicTextField {
        constructor(scene, type) {
            super(scene, type);
            this._text = "";
        }
    }

    class InputTextField extends TextField {
        constructor(owner) {
            super(owner.scene);
            this._text2 = "";
            this.editable = true;
            this.setOrigin(0);
        }
        onFocusHandler() {
            if (!this.editable || this._editing)
                return;
            // if (!this._font)
            //     this.applyFormat();
            if (!this._element)
                this.createElement();
            this._element.setVisible(true);
            const inputElement = this._element.node;
            inputElement.value = this._text2;
            // inputElement.style.fontSize = this.style.fontSize;
            // inputElement.style.textAlign = this.style.align;
            if (this.maxLength !== undefined)
                inputElement.maxLength = this.maxLength;
            this.scene.input.on("pointerdown", this.onPointerSceneHandler, this);
            inputElement.focus();
            this.disableInteractive();
            this._editing = true;
            this.setVisible(false);
        }
        onBlurHandler() {
            this.scene.input.off("pointerdown", this.onPointerSceneHandler, this);
            this._inputNode.blur();
            this._element.setVisible(false);
            this.setInteractive();
            this._text2 = this._inputNode.value;
            this._inputNode = null;
            this._element.destroy();
            this._element = null;
            this._editing = false;
            this.updateTextField();
            this.setVisible(true);
        }
        createElement() {
            this._element = new Phaser.GameObjects.DOMElement(this.scene);
            let e;
            // if (this["$owner"].singleLine) {
            {
                e = document.createElement("input");
            }
            this._inputNode = e;
            e.style.outline = "none";
            e.style.borderWidth = "0px";
            e.style.padding = "0px";
            e.style.margin = "0px";
            e.style.position = "absolute";
            e.style.display = "none";
            e.style.background = 'transparent';
            e.style.transformOrigin = e.style["WebkitTransformOrigin"] = "0 0 0";
            e.style.width = `${this._width}px`;
            e.style.height = `${this._height}px`;
            this._element.setElement(e);
            this._element.setOrigin(this.originX, this.originY);
            this._element.setPosition(this.x, this.y);
            this.parentContainer.add(this._element);
        }
        updateTextField() {
            if (this._editing)
                this._inputNode.value = this._text2;
            else if (this._text2.length === 0 && this._promptText) ;
            else if (this.password) {
                super.setText("*".repeat(this._text2.length));
            }
            else {
                super.setText(this._text2);
            }
        }
        /**
         * Don"t propagate touch/mouse events to parent(game canvas)
         * @param element
         */
        stopPropagationTouchEvents(e) {
            const callback = function (e) {
                e.stopPropagation();
            };
            // Don't propagate touch/mouse events to parent(game canvas)
            e.addEventListener("touchstart", callback, false);
            e.addEventListener("touchmove", callback, false);
            e.addEventListener("touchend", callback, false);
            e.addEventListener("mousedown", callback, false);
            e.addEventListener("mouseup", callback, false);
            e.addEventListener("mousemove", callback, false);
        }
        routeEvents(gameObject, element, elementEvents) {
            for (let eventName in elementEvents) { // Note: Don't use `var` here
                element[elementEvents[eventName]] = function (e) {
                    gameObject.emit(eventName, gameObject, e);
                };
            }
        }
        getText() {
            if (this._editing) {
                this._text2 = this._element.node.value;
            }
            return this._text2;
        }
        setText(value) {
            this._text2 = value;
            this.updateTextField();
            if (value) {
                this.setInteractive();
                this.on("pointerup", this.onFocusHandler, this);
            }
            return this;
        }
        selectText() {
            if (this._inputNode)
                this._inputNode.select();
            return this;
        }
        get placeholder() {
            return this._promptText;
        }
        set placeholder(value) {
            // this._inputNode.placeholder = value;
            this._promptText = value;
            if (this._editing) {
                this._inputNode.placeholder = this._promptText;
            }
        }
        setPlaceholder(value) {
            this.placeholder = value;
            return this;
        }
        setEnabled(enabled) {
            if (enabled === undefined) {
                enabled = true;
            }
            this._inputNode.disabled = !enabled;
            return this;
        }
        setBlur() {
            this._inputNode.blur();
            return this;
        }
        setFocus() {
            this._inputNode.focus();
            return this;
        }
        setSize(width, height) {
            if (this.scene.scale.autoRound) {
                width = Math.floor(width);
                height = Math.floor(height);
            }
            if (this._width === width && this._height === height) {
                return;
            }
            this._width = width;
            this._height = height;
            super.setSize(width, height);
            if (this._inputNode) {
                const style = this._inputNode.style;
                style.width = `${width}px`;
                style.height = `${height}px`;
            }
            // this.updateSize();
            return this;
        }
        onPointerSceneHandler() {
            console.log("onPointerSceneHandler", this._editing);
            if (this._editing)
                this.onBlurHandler();
        }
    }

    class InputType {
    }
    /** 常规文本域。*/
    InputType.TYPE_TEXT = "text";
    /** password 类型用于密码域输入。*/
    InputType.TYPE_PASSWORD = "password";
    /** email 类型用于应该包含 e-mail 地址的输入域。*/
    InputType.TYPE_EMAIL = "email";
    /** url 类型用于应该包含 URL 地址的输入域。*/
    InputType.TYPE_URL = "url";
    /** number 类型用于应该包含数值的输入域。*/
    InputType.TYPE_NUMBER = "number";
    /**
     * <p>range 类型用于应该包含一定范围内数字值的输入域。</p>
     * <p>range 类型显示为滑动条。</p>
     * <p>您还能够设定对所接受的数字的限定。</p>
     */
    InputType.TYPE_RANGE = "range";
    /**  选取日、月、年。*/
    InputType.TYPE_DATE = "date";
    /** month - 选取月、年。*/
    InputType.TYPE_MONTH = "month";
    /** week - 选取周和年。*/
    InputType.TYPE_WEEK = "week";
    /** time - 选取时间（小时和分钟）。*/
    InputType.TYPE_TIME = "time";
    /** datetime - 选取时间、日、月、年（UTC 时间）。*/
    InputType.TYPE_DATE_TIME = "datetime";
    /** datetime-local - 选取时间、日、月、年（本地时间）。*/
    InputType.TYPE_DATE_TIME_LOCAL = "datetime-local";
    /**
     * <p>search 类型用于搜索域，比如站点搜索或 Google 搜索。</p>
     * <p>search 域显示为常规的文本域。</p>
     */
    InputType.TYPE_SEARCH = "search";
    class GTextInput extends GBasicTextField {
        constructor(scene, type) {
            super(scene, type);
        }
        createDisplayObject() {
            this._displayObject = this._textField = new InputTextField(this).setOrigin(0, 0);
            //     this._displayObject["$owner"] = this;
            //     this._displayObject.createInput();
        }
        get nativeInput() {
            return this._textField;
        }
        set text(value) {
            this._textField.text = value;
        }
        get text() {
            return this._textField.text;
        }
        get password() {
            return this.inputTextField.password;
        }
        set password(value) {
            this.inputTextField.password = value;
        }
        get keyboardType() {
            return this.inputTextField.type;
        }
        set keyboardType(value) {
            this.inputTextField.keyboardType = value;
        }
        set editable(value) {
            this.inputTextField.editable = value;
        }
        get editable() {
            return this.inputTextField.editable;
        }
        set maxLength(value) {
            this.inputTextField.maxLength = value;
            // this._input.maxChars = value;
        }
        get maxLength() {
            return this.inputTextField.maxLength;
        }
        set placeholder(value) {
            var str = UBBParser.inst.parse(value, true);
            this.inputTextField.placeholder = str;
            // if (UBBParser.inst.lastColor)
            // this._input.promptColor = UBBParser.inst.lastColor;
        }
        get placeholder() {
            return this.inputTextField.placeholder;
        }
        set restrict(value) {
            this.inputTextField.restrict = value;
        }
        get restrict() {
            return this.inputTextField.restrict;
        }
        requestFocus() {
            this.inputTextField.setFocus();
            super.requestFocus();
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 4);
            var str = buffer.readS();
            if (str != null)
                this.placeholder = str;
            str = buffer.readS();
            if (str != null)
                this.restrict = str;
            var iv = buffer.readInt();
            if (iv != 0)
                this.maxLength = iv;
            iv = buffer.readInt();
            if (iv != 0) {
                if (iv == 4)
                    this.keyboardType = InputType.TYPE_NUMBER;
                else if (iv == 3)
                    this.keyboardType = InputType.TYPE_URL;
            }
            if (buffer.readBool())
                this.password = true;
        }
        get inputTextField() {
            return this._textField;
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
            return new Promise((reslove, reject) => {
                url = UIPackage.normalizeURL(url);
                if (url == null) {
                    // console.log("getObject null", url);
                    return reslove(null);
                }
                var arr = this._pool[url];
                if (arr && arr.length > 0) {
                    this._count--;
                    // console.log("getObject arr.shift");
                    return reslove(arr.shift());
                }
                UIPackage.createObjectFromURL(url).then((obj) => {
                    // console.log("getObject create");
                    return reslove(obj);
                });
            });
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

    class GLoader extends GObject {
        constructor(scene, type) {
            super(scene, type);
            this._url = "";
            this._fill = exports.LoaderFillType.None;
            this._align = "left";
            this._valign = "top";
            this._showErrorSign = true;
        }
        createDisplayObject() {
            super.createDisplayObject();
            this._content = new MovieClip(this.scene);
            this._content["$owner"] = this;
            this._displayObject.add(this._content);
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
            return new Promise((reslove, reject) => {
                this._contentItem = UIPackage.getItemByURL(itemURL);
                if (this._contentItem) {
                    this._contentItem = this._contentItem.getBranch();
                    this.sourceWidth = this._contentItem.width;
                    this.sourceHeight = this._contentItem.height;
                    this._contentItem = this._contentItem.getHighResolution();
                    this._contentItem.load().then(() => {
                        if (this._autoSize) {
                            this.setSize(this.sourceWidth, this.sourceHeight);
                        }
                        if (this._contentItem.type == exports.PackageItemType.Image) {
                            if (!this._contentItem.texture) {
                                this.setErrorState();
                                return reject();
                            }
                            else {
                                this._content.scale9Grid = this._contentItem.scale9Grid;
                                this._content.scaleByTile = this._contentItem.scaleByTile;
                                this._content.tileGridIndice = this._contentItem.tileGridIndice;
                                this.sourceWidth = this._contentItem.width;
                                this.sourceHeight = this._contentItem.height;
                                const name = this._contentItem.texture.key + "_" + this._contentItem.name + "_" + this._contentItem.width + "_" + this._contentItem.height;
                                const frame = this._contentItem.texture.frames[name];
                                if (frame) {
                                    this._content.frames = [frame];
                                }
                                this.updateLayout();
                                return reslove();
                            }
                        }
                        else if (this._contentItem.type == exports.PackageItemType.MovieClip) {
                            this.sourceWidth = this._contentItem.width;
                            this.sourceHeight = this._contentItem.height;
                            this._content.interval = this._contentItem.interval;
                            this._content.swing = this._contentItem.swing;
                            this._content.repeatDelay = this._contentItem.repeatDelay;
                            this._content.frames = this._contentItem.frames;
                            this.updateLayout();
                            return reslove();
                        }
                        else if (this._contentItem.type == exports.PackageItemType.Component) {
                            UIPackage.createObjectFromURL(itemURL).then((obj) => {
                                if (!obj) {
                                    this.setErrorState();
                                    return reject();
                                }
                                else if (!(obj instanceof GComponent)) {
                                    obj.dispose();
                                    this.setErrorState();
                                    return reject();
                                }
                                else {
                                    this._content2 = obj.asCom;
                                    this._displayObject.add(this._content2.displayObject);
                                    this.updateLayout();
                                    return reslove();
                                }
                            });
                        }
                        else {
                            this.setErrorState();
                            return reject();
                        }
                    });
                }
                else {
                    this.setErrorState();
                    return reject();
                }
            });
        }
        loadExternal() {
            AssetProxy.inst.load(this._url, this._url, LoaderType.IMAGE, this.__getResCompleted);
            AssetProxy.inst.addListen(LoaderType.IMAGE, this._url);
            AssetProxy.inst.startLoad();
            // AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
        }
        freeExternal(texture) {
        }
        onExternalLoadSuccess(texture) {
            this._content.texture = texture;
            this._content.scale9Grid = null;
            this._content.scaleByTile = false;
            this.sourceWidth = texture.source[0].width;
            this.sourceHeight = texture.source[0].height;
            this.updateLayout();
        }
        onExternalLoadFailed() {
            this.setErrorState();
        }
        __getResCompleted(tex) {
            if (tex != null)
                this.onExternalLoadSuccess(tex);
            else
                this.onExternalLoadFailed();
            AssetProxy.inst.removeListen();
        }
        setErrorState() {
            if (!this._showErrorSign)
                return;
            if (!this._errorSign) {
                if (UIConfig.loaderErrorSign != null) {
                    GLoader._errorSignPool.getObject(UIConfig.loaderErrorSign).then((obj) => {
                        this._errorSign = obj;
                        if (this._errorSign) {
                            this._errorSign.setSize(this.width, this.height);
                            this._displayObject.add(this._errorSign.displayObject);
                        }
                    });
                }
            }
        }
        clearErrorState() {
            if (this._errorSign) {
                this._displayObject.remove(this._errorSign.displayObject);
                GLoader._errorSignPool.returnObject(this._errorSign);
                this._errorSign = null;
            }
        }
        updateLayout() {
            if (!this._content2 && !this._content.texture && !this._content.frames) {
                if (this._autoSize) {
                    this._updatingLayout = true;
                    this.setSize(50, 30);
                    this._updatingLayout = false;
                }
                return;
            }
            let cw = this.parent ? this.parent.initWidth : this.sourceWidth;
            let ch = this.parent ? this.parent.initHeight : this.sourceHeight;
            if (this._autoSize) {
                this._updatingLayout = true;
                if (cw == 0)
                    cw = 50;
                if (ch == 0)
                    ch = 30;
                this.setSize(cw, ch);
                this._updatingLayout = false;
                if (cw == this._width && ch == this._height) {
                    if (this._content2) {
                        this._content2.setXY(0, 0);
                        this._content2.setScale(1, 1);
                    }
                    else {
                        this._content.setSize(cw, ch);
                        this._content.setPosition(0, 0);
                    }
                    return;
                }
            }
            var sx = 1, sy = 1;
            if (this._fill != exports.LoaderFillType.None) {
                sx = this.initWidth / this.sourceWidth;
                sy = this.initHeight / this.sourceHeight;
                if (sx != 1 || sy != 1) {
                    if (this._fill == exports.LoaderFillType.ScaleMatchHeight)
                        sx = sy;
                    else if (this._fill == exports.LoaderFillType.ScaleMatchWidth)
                        sy = sx;
                    else if (this._fill == exports.LoaderFillType.Scale) {
                        if (sx > sy)
                            sx = sy;
                        else
                            sy = sx;
                    }
                    else if (this._fill == exports.LoaderFillType.ScaleNoBorder) {
                        if (sx > sy)
                            sy = sx;
                        else
                            sx = sy;
                    }
                    if (this._shrinkOnly) {
                        if (sx > 1)
                            sx = 1;
                        if (sy > 1)
                            sy = 1;
                    }
                    cw = this.sourceWidth * sx;
                    ch = this.sourceHeight * sy;
                }
            }
            if (this._content2)
                this._content2.setScale(sx, sy);
            else {
                this._content.setScale(sx, sy);
                // if (this._content.frames) {
                //     this._content.setSize(cw, ch, this._content.frames[0]);
                // } else {
                //     this._content.setSize(cw, ch);
                // }
            }
            var nx, ny;
            if (this._align == "center")
                nx = Math.floor((this.width - cw) / 2);
            else if (this._align == "right")
                nx = this.width - cw;
            else
                nx = 0;
            if (this._valign == "middle")
                ny = Math.floor((this.height - ch) / 2);
            else if (this._valign == "bottom")
                ny = this.height - ch;
            else
                ny = 0;
            if (this._content2)
                this._content2.setXY(nx, ny);
            else
                this._content.setPosition(nx, ny);
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
                case exports.ObjectPropID.Color:
                    return this.color;
                case exports.ObjectPropID.Playing:
                    return this.playing;
                case exports.ObjectPropID.Frame:
                    return this.frame;
                case exports.ObjectPropID.TimeScale:
                    return this._content.timeScale;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    this.color = value;
                    break;
                case exports.ObjectPropID.Playing:
                    this.playing = value;
                    break;
                case exports.ObjectPropID.Frame:
                    this.frame = value;
                    break;
                case exports.ObjectPropID.TimeScale:
                    this._content.timeScale = value;
                    break;
                case exports.ObjectPropID.DeltaTime:
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
        constructor(scene, type) {
            super(scene, type);
            this._soundVolumeScale = 0;
            this._downEffect = 0;
            this._mode = exports.ButtonMode.Common;
            this._title = "";
            this._icon = "";
            this._sound = UIConfig.buttonSound;
            this._soundVolumeScale = UIConfig.buttonSoundVolumeScale;
            this._changeStateOnClick = true;
            this._downEffectValue = 0.8;
            //console.log("button create===>", this);
        }
        createDisplayObject() {
            this._displayObject = this.scene.make.container(undefined, false);
            // GRoot.inst.addToStage(this._displayObject);
            this._displayObject["$owner"] = this;
            this._container = this._displayObject;
            this.addListener();
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
            if (this._mode == exports.ButtonMode.Common)
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
                    else if (this._mode == exports.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId)
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
                if (value == exports.ButtonMode.Common)
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
            if (this._downEffect == 1) {
                var cnt = this.numChildren;
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                    var r = this._downEffectValue * 255;
                    var color = Utils.toHexColor((r << 16) + (r << 8) + r);
                    for (var i = 0; i < cnt; i++) {
                        var obj = this.getChildAt(i);
                        if (!(obj instanceof GTextField))
                            obj.setProp(exports.ObjectPropID.Color, color);
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        obj = this.getChildAt(i);
                        if (!(obj instanceof GTextField))
                            obj.setProp(exports.ObjectPropID.Color, "#FFFFFF");
                    }
                }
            }
            else if (this._downEffect == 2) {
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                    if (!this._downScaled) {
                        this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
                        this._downScaled = true;
                    }
                }
                else {
                    if (this._downScaled) {
                        this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
                        this._downScaled = false;
                    }
                }
            }
        }
        setSize(wv, hv, ignorePivot) {
            super.setSize(wv, hv, ignorePivot);
        }
        handleSizeChanged() {
            super.handleSizeChanged();
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
                case exports.ObjectPropID.Color:
                    return this.titleColor;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case exports.ObjectPropID.FontSize:
                    return this.titleFontSize;
                case exports.ObjectPropID.Selected:
                    return this.selected;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case exports.ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                case exports.ObjectPropID.Selected:
                    this.selected = value;
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructExtension(buffer) {
            return new Promise((resolve, reject) => {
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
                if (this._mode == exports.ButtonMode.Common)
                    this.setState(GButton.UP);
                resolve();
            });
        }
        addListener() {
            this.removeListener();
            this._displayObject.on(InteractiveEvent.POINTER_OVER, this.__rollover, this);
            this._displayObject.on(InteractiveEvent.POINTER_OUT, this.__rollout, this);
            this._displayObject.on(InteractiveEvent.POINTER_DOWN, this.__mousedown, this);
            this._displayObject.on(InteractiveEvent.POINTER_UP, this.__click, this);
        }
        removeListener() {
            this._displayObject.off(InteractiveEvent.POINTER_OVER, this.__rollover, this);
            this._displayObject.off(InteractiveEvent.POINTER_OUT, this.__rollout, this);
            this._displayObject.off(InteractiveEvent.POINTER_DOWN, this.__mousedown, this);
            this._displayObject.off(InteractiveEvent.POINTER_UP, this.__click, this);
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            // const g = this.scene.make.graphics(undefined, false);
            // g.clear();
            // g.fillStyle(0xFFCC00);
            // g.fillRoundedRect(0, 0, this.initWidth, this.initHeight);
            // this._displayObject.addAt(g, 0);
            if (!buffer.seek(beginPos, 6))
                return;
            const type = buffer.readByte();
            this.addListener();
            if (type != this.packageItem.objectType)
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
            // const g = this.scene.make.graphics(undefined, false);
            // g.clear();
            // g.fillStyle(0xFFCC00);
            // g.fillRoundedRect(0, 0, this.initWidth, this.initHeight);
            // this._displayObject.addAt(g, 0);
        }
        constructFromResource2(objectPool, poolIndex) {
            const _super = Object.create(null, {
                constructFromResource2: { get: () => super.constructFromResource2 }
            });
            return __awaiter(this, void 0, void 0, function* () {
                return _super.constructFromResource2.call(this, objectPool, poolIndex);
            });
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
            this.scene.input.on(InteractiveEvent.POINTER_UP, this.__mouseup, this);
            if (this._mode == exports.ButtonMode.Common) {
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
                this.scene.input.off(InteractiveEvent.POINTER_UP, this.__mouseup, this);
                this._down = false;
                if (this._displayObject == null)
                    return;
                if (this._mode == exports.ButtonMode.Common) {
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
            if (this._mode == exports.ButtonMode.Check) {
                if (this._changeStateOnClick) {
                    this.selected = !this._selected;
                    // Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);
                }
            }
            else if (this._mode == exports.ButtonMode.Radio) {
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
        constructor(scene, type) {
            super(scene, type);
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
                case exports.ObjectPropID.Color:
                    return this.titleColor;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case exports.ObjectPropID.FontSize:
                    return this.titleFontSize;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case exports.ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case exports.ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructExtension(buffer) {
            return new Promise((resolve, reject) => {
                this._titleObject = this.getChild("title");
                this._iconObject = this.getChild("icon");
                resolve();
            });
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
                        input.placeholder = str;
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
        constructor(scene, type) {
            super(scene, type);
            this._visibleItemCount = UIConfig.defaultComboBoxVisibleItemCount;
            this._itemsUpdated = true;
            this._selectedIndex = -1;
            this._popupDirection = 0;
            this._items = [];
            this._values = [];
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
                this.displayObject.emit(DisplayObjectEvent.SIZE_CHANGED);
            }
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
                case exports.ObjectPropID.Color:
                    return this.titleColor;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case exports.ObjectPropID.FontSize:
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
                case exports.ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case exports.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case exports.ObjectPropID.FontSize:
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
            return new Promise((resolve, reject) => {
                var str;
                this._buttonController = this.getController("button");
                this._titleObject = this.getChild("title");
                this._iconObject = this.getChild("icon");
                str = buffer.readS();
                if (str) {
                    UIPackage.createObjectFromURL(str).then((obj) => {
                        this.dropdown = obj;
                        if (!this.dropdown) {
                            console.log("下拉框必须为元件");
                            return;
                        }
                        this.dropdown.name = "this._dropdownObject";
                        this._list = this.dropdown.getChild("list");
                        if (!this._list) {
                            console.log(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                            return;
                        }
                        this._list.on(Events.CLICK_ITEM, this.__clickItem, this);
                        this._list.addRelation(this.dropdown, exports.RelationType.Width);
                        this._list.removeRelation(this.dropdown, exports.RelationType.Height);
                        this.dropdown.addRelation(this._list, exports.RelationType.Height);
                        this.dropdown.removeRelation(this._list, exports.RelationType.Width);
                        // 销毁
                        this.dropdown.displayObject.on("destroy", this.__popupWinClosed, this);
                        this.addListen();
                        resolve();
                    });
                }
                else {
                    this.addListen();
                    resolve();
                }
            });
        }
        addListen() {
            this.removeListen();
            this.on("pointerover", this.__rollover, this);
            this.on("pointerout", this.__rollout, this);
            this.on("pointerdown", this.__mousedown, this);
        }
        removeListen() {
            this.off("pointerover", this.__rollover, this);
            this.off("pointerout", this.__rollout, this);
            this.off("pointerdown", this.__mousedown, this);
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
            return new Promise((resolve, reject) => {
                if (this._itemsUpdated) {
                    this._itemsUpdated = false;
                    this._list.removeChildrenToPool();
                    var cnt = this._items.length;
                    const fun0 = (i) => {
                        if (i >= cnt) {
                            this._list.resizeToFit(this._visibleItemCount);
                            this._list.selectedIndex = -1;
                            this.dropdown.width = this.width;
                            this._list.ensureBoundsCorrect();
                            var downward = null;
                            if (this._popupDirection == exports.PopupDirection.Down)
                                downward = true;
                            else if (this._popupDirection == exports.PopupDirection.Up)
                                downward = false;
                            this.root.togglePopup(this.dropdown, this, downward);
                            if (this.dropdown.parent)
                                this.setState(GButton.DOWN);
                            resolve();
                            return;
                        }
                        this._list.addItemFromPool().then((obj) => {
                            const item = obj;
                            item.name = i < this._values.length ? this._values[i] : "";
                            item.text = this._items[i];
                            item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
                            fun0(++i);
                        });
                    };
                    fun0(0);
                    // for (var i: number = 0; i < cnt; i++) {
                    //     const item: GObject = this._list.addItemFromPool();
                    //     item.name = i < this._values.length ? this._values[i] : "";
                    //     item.text = this._items[i];
                    //     item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
                    // }
                    // this._list.resizeToFit(this._visibleItemCount);
                }
                else {
                    this._list.selectedIndex = -1;
                    this.dropdown.width = this.width;
                    this._list.ensureBoundsCorrect();
                    var downward = null;
                    if (this._popupDirection == exports.PopupDirection.Down)
                        downward = true;
                    else if (this._popupDirection == exports.PopupDirection.Up)
                        downward = false;
                    this.root.togglePopup(this.dropdown, this, downward);
                    if (this.dropdown.parent)
                        this.setState(GButton.DOWN);
                    resolve();
                }
            });
        }
        __popupWinClosed() {
            if (this._over)
                this.setState(GButton.OVER);
            else
                this.setState(GButton.UP);
        }
        __clickItem(itemObject, evt) {
            this.__clickItem2(this._list.getChildIndex(itemObject), evt);
            //Laya.timer.callLater(this, this.__clickItem2, [this._list.getChildIndex(itemObject), evt])
        }
        __clickItem2(index, evt) {
            if (this.dropdown.parent instanceof GRoot)
                this.dropdown.parent.hidePopup();
            this._selectedIndex = -1;
            this.selectedIndex = index;
            Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);
        }
        __rollover() {
            this._over = true;
            if (this._down && this.dropdown)
                return;
            this.setState(GButton.OVER);
        }
        __rollout() {
            this._over = false;
            if (this._down && this.dropdown)
                return;
            this.setState(GButton.UP);
        }
        __mousedown(evt) {
            // if (evt.target instanceof Laya.Input)
            //     return;
            this._down = true;
            GRoot.inst.checkPopups(this.displayObject);
            if (this.dropdown) {
                this.showDropdown().then(() => {
                    this.scene.input.off("pointerup", this.__mouseup, this);
                    this.scene.input.on("pointerup", this.__mouseup, this);
                });
            }
        }
        __mouseup(pointer, gameObject) {
            if (this._down) {
                if (this.dropdown) {
                    // fairgui 没有处理未点击到combox时列表是否缩起的处理
                    if (!this.dropdown.parent) {
                        this._down = false;
                        this.scene.input.off("pointerup", this.__mouseup, this);
                        if (this._over) {
                            this.setState(GButton.OVER);
                        }
                        else {
                            this.setState(GButton.UP);
                        }
                    }
                }
            }
        }
    }

    class GSlider extends GComponent {
        constructor(scene, type) {
            super(scene, type);
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
            this._titleType = exports.ProgressTitleType.Percent;
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
                    case exports.ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;
                    case exports.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = this._value + "/" + this._max;
                        break;
                    case exports.ProgressTitleType.Value:
                        this._titleObject.text = "" + this._value;
                        break;
                    case exports.ProgressTitleType.Max:
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
            return new Promise((resolve, reject) => {
                buffer.seek(0, 6);
                this._titleType = buffer.readByte();
                this._reverse = buffer.readBool();
                if (buffer.version >= 2) {
                    this._wholeNumbers = buffer.readBool();
                    this.changeOnClick = buffer.readBool();
                }
                this._titleObject = this.getChild("title");
                this._barObjectH = this.getChild("bar");
                this._barObjectV = this.getChild("bar_v");
                this._gripObject = this.getChild("grip");
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
                if (this._gripObject) ;
                resolve();
                // this.displayObject.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
            });
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
        constructor(scene, type) {
            super(scene, type);
            this._min = 0;
            this._max = 0;
            this._value = 0;
            this._barMaxWidth = 0;
            this._barMaxHeight = 0;
            this._barMaxWidthDelta = 0;
            this._barMaxHeightDelta = 0;
            this._barStartX = 0;
            this._barStartY = 0;
            this._titleType = exports.ProgressTitleType.Percent;
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
                    case exports.ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;
                    case exports.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                        break;
                    case exports.ProgressTitleType.Value:
                        this._titleObject.text = "" + Math.floor(newValue);
                        break;
                    case exports.ProgressTitleType.Max:
                        this._titleObject.text = "" + Math.floor(this._max);
                        break;
                }
            }
            var fullWidth = this.width - this._barMaxWidthDelta;
            var fullHeight = this.height - this._barMaxHeightDelta;
            if (!this._reverse) {
                if (this._barObjectH) {
                    if (!this.setFillAmount(this._barObjectH, percent)) {
                        if (this._barObjectH.displayObject instanceof Image) {
                            if (!this._barObjectH.displayObject.curImage && this._barObjectH.displayObject.scale9Grid) {
                                this._barObjectH.width = Math.round(fullWidth * percent);
                            }
                            else {
                                this._barObjectH.displayObject.curImage.setCrop(new Phaser.Geom.Rectangle(0, 0, Math.round(fullWidth * percent), this._barObjectH._rawHeight));
                            }
                        }
                        else {
                            this._barObjectH.resizeMask(Math.round(fullWidth * percent), this._barObjectH._rawHeight);
                        }
                    }
                }
                if (this._barObjectV) {
                    if (!this.setFillAmount(this._barObjectV, percent)) {
                        if (this._barObjectV.displayObject instanceof Image) {
                            if (!this._barObjectV.displayObject.curImage && this._barObjectV.displayObject.scale9Grid) {
                                this._barObjectV.height = Math.round(fullHeight * percent);
                            }
                            else {
                                this._barObjectV.displayObject.curImage.setCrop(new Phaser.Geom.Rectangle(0, 0, this._barObjectV._rawWidth, Math.round(fullHeight * percent)));
                            }
                        }
                        else {
                            this._barObjectV.resizeMask(this._barObjectV._rawWidth, Math.round(fullHeight * percent));
                        }
                    }
                }
            }
            else {
                if (this._barObjectH) {
                    if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                        if (this._barObjectH.displayObject instanceof Image) {
                            if (!this._barObjectH.displayObject.curImage && this._barObjectH.displayObject.scale9Grid) {
                                this._barObjectH.width = Math.round(fullWidth * percent);
                            }
                            else {
                                this._barObjectH.displayObject.curImage.setCrop(new Phaser.Geom.Rectangle(0, 0, Math.round(fullWidth * percent), this._barObjectH._rawHeight));
                            }
                            this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                        }
                        else {
                            this._barObjectH.resizeMask(Math.round(fullWidth * percent), this._barObjectH._rawHeight);
                        }
                    }
                }
                if (this._barObjectV) {
                    if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                        if (this._barObjectV.displayObject instanceof Image) {
                            if (!this._barObjectV.displayObject.curImage && this._barObjectV.displayObject.scale9Grid) {
                                this._barObjectV.height = Math.round(fullHeight * percent);
                            }
                            else {
                                this._barObjectV.displayObject.curImage.setCrop(new Phaser.Geom.Rectangle(0, 0, this._barObjectV._rawWidth, Math.round(fullHeight * percent)));
                            }
                            this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                        }
                        else {
                            this._barObjectV.resizeMask(this._barObjectV._rawWidth, Math.round(fullHeight * percent));
                        }
                    }
                }
            }
            if (this._aniObject)
                this._aniObject.setProp(exports.ObjectPropID.Frame, Math.floor(percent * 100));
        }
        setFillAmount(bar, percent) {
            if (((bar instanceof GImage) || (bar instanceof GLoader)) && bar.fillMethod != exports.FillMethod.None) {
                bar.fillAmount = percent;
                return true;
            }
            else
                return false;
        }
        constructExtension(buffer) {
            return new Promise((resolve, reject) => {
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
                resolve();
            });
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
        constructor(scene, type) {
            super(scene, type);
            this._dragOffset = new Phaser.Geom.Point();
            this._scrollPerc = 0;
        }
        get hasDrag() {
            return this._gripDragging;
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
            if (this._vertical) {
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
            }
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
            return new Promise((resolve, reject) => {
                buffer.seek(0, 6);
                this._fixedGripSize = buffer.readBool();
                this._grip = this.getChild("grip");
                if (!this._grip) {
                    console.log("需要定义grip");
                    return;
                }
                this._bar = this.getChild("bar");
                if (!this._bar) {
                    console.log("需要定义bar");
                    return;
                }
                this._arrowButton1 = this.getChild("arrow1");
                this._arrowButton2 = this.getChild("arrow2");
                this._grip.on("pointerdown", this.__gripMouseDown, this);
                if (this._arrowButton1)
                    this._arrowButton1.on("pointerdown", this.__arrowButton1Click, this);
                if (this._arrowButton2)
                    this._arrowButton2.on("pointerdown", this.__arrowButton2Click, this);
                this.on("pointerdown", this.__barMouseDown, this);
                resolve();
            });
        }
        __gripMouseDown(pointer) {
            this._gripDragging = true;
            this._target.updateScrollBarVisible();
            this.scene.input.on("pointermove", this.__gripMouseMove, this);
            this.scene.input.on("pointerup", this.__gripMouseUp, this);
            // this.globalToLocal(pointer.x, pointer.y, this._dragOffset);
            this._dragOffset.x = pointer.worldX - this._grip.x;
            this._dragOffset.y = pointer.worldY - this._grip.y;
        }
        __gripMouseMove(pointer) {
            if (!this.onStage)
                return;
            // var pt: Phaser.Geom.Point = this.globalToLocal(pointer.x, pointer.y, s_vec2);
            if (this._vertical) {
                var curY = pointer.worldY - this._dragOffset.y;
                this._target.setPercY((curY) / (this._bar.height - this._grip.height), false);
            }
            else {
                var curX = pointer.worldX - this._dragOffset.x;
                this._target.setPercX((curX) / (this._bar.width - this._grip.width), false);
            }
        }
        __gripMouseUp(pointer) {
            if (!this.onStage)
                return;
            this.scene.input.off("pointermove", this.__gripMouseMove, this);
            this.scene.input.off("pointerup", this.__gripMouseUp, this);
            this._gripDragging = false;
            this._target.updateScrollBarVisible();
        }
        __arrowButton1Click(pointer) {
            if (this._vertical)
                this._target.scrollUp();
            else
                this._target.scrollLeft();
        }
        __arrowButton2Click(pointer) {
            if (this._vertical)
                this._target.scrollDown();
            else
                this._target.scrollRight();
        }
        __barMouseDown(pointer) {
            // var pt: Phaser.Geom.Point = this._grip.globalToLocal(pointer.x, pointer.y, s_vec2);
            if (this._vertical) {
                if (pointer.y < 0)
                    this._target.scrollUp(4);
                else
                    this._target.scrollDown(4);
            }
            else {
                if (pointer.x < 0)
                    this._target.scrollLeft(4);
                else
                    this._target.scrollRight(4);
            }
        }
    }
    // var s_vec2: Phaser.Geom.Point = new Phaser.Geom.Point();

    class GList extends GComponent {
        constructor(scene, type) {
            super(scene, type);
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
            this._timeDelta = 500;
            this.shiftKey = false;
            this.ctrlKey = false;
            this._refreshListEvent = { delay: this._timeDelta / Utils.FPSTarget, callback: this._refreshVirtualList, callbackScope: this };
            this._trackBounds = true;
            this._pool = new GObjectPool();
            this._layout = exports.ListLayoutType.SingleColumn;
            this._autoResizeItem = false;
            this._lastSelectedIndex = -1;
            this._selectionMode = exports.ListSelectionMode.Single;
            this.opaque = true;
            this.scrollItemToViewOnClick = true;
            this._align = "left";
            this._verticalAlign = "top";
            this._container = scene.make.container(undefined, false);
            this._displayObject.add(this._container);
            // todo click 优先添加监听，防止scrollpane的pointerup将参数修改，影响glist _clickItem逻辑
            this.scene.input.on("pointerup", this.__clickItem, this);
            if (this.scene.input.keyboard) {
                this.scene.input.keyboard.on('keydown', this.__keyDown, this);
                this.scene.input.keyboard.on('keyup', this.__keyUp, this);
            }
        }
        __keyDown(event) {
            switch (event.keyCode) {
                // shift
                case 16:
                    this.shiftKey = true;
                    break;
                // ctrl
                case 17:
                    this.ctrlKey = true;
                    break;
            }
            console.dir(event);
        }
        __keyUp(event) {
            switch (event.keyCode) {
                // shift
                case 16:
                    this.shiftKey = false;
                    break;
                // ctrl
                case 17:
                    this.ctrlKey = false;
                    break;
            }
        }
        dispose() {
            this.off(Events.SCROLL, this.__scrolled, this);
            this.scene.input.off("pointerup", this.__clickItem, this);
            if (this.scene.input.keyboard) {
                this.scene.input.keyboard.off('keydown', this.__keyDown, this);
                this.scene.input.keyboard.off('keyup', this.__keyUp, this);
            }
            this.shiftKey = false;
            this.ctrlKey = false;
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
                if (this._layout == exports.ListLayoutType.FlowVertical || this._layout == exports.ListLayoutType.Pagination) {
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
                if (this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.Pagination) {
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
            return new Promise((reslove, rejcet) => {
                if (!url)
                    url = this._defaultItem;
                this._pool.getObject(url).then((obj) => {
                    if (obj)
                        obj.visible = true;
                    return reslove(obj);
                });
            });
        }
        returnToPool(obj) {
            // obj.displayObject.cacheAs = "none";
            this._pool.returnObject(obj);
        }
        addChildAt(child, index) {
            super.addChildAt(child, index);
            if (child instanceof GButton) {
                child.selected = false;
                child.changeStateOnClick = false;
            }
            // // todo click
            // this.scene.input.on("pointerup", this.__clickItem, this);
            return child;
        }
        addItem(url) {
            return new Promise((reslove, reject) => {
                if (!url)
                    url = this._defaultItem;
                UIPackage.createObjectFromURL(url).then((obj) => {
                    this.addChild(obj);
                    reslove(obj);
                });
            });
        }
        addItemFromPool(url) {
            return new Promise((reslove, reject) => {
                this.getFromPool(url).then((obj) => {
                    this.addChild(obj);
                    reslove(obj);
                });
            });
        }
        removeChildAt(index, dispose) {
            return new Promise((reslove, reject) => {
                super.removeChildAt(index).then((obj) => {
                    if (dispose) {
                        obj.dispose();
                    }
                    reslove(obj);
                });
            });
        }
        removeChildToPoolAt(index) {
            super.removeChildAt(index).then((obj) => {
                this.returnToPool(obj);
            });
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
                if (this._selectionMode != exports.ListSelectionMode.Single)
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
            if (this._selectionMode == exports.ListSelectionMode.None)
                return;
            this.checkVirtualList();
            if (this._selectionMode == exports.ListSelectionMode.Single)
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
            if (this._selectionMode == exports.ListSelectionMode.None)
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
                    if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowVertical) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.Pagination) {
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
                    if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.Pagination) {
                        index++;
                        if (index < this.numItems) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == exports.ListLayoutType.FlowVertical) {
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
                    if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowVertical) {
                        index++;
                        if (index < this.numItems) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.Pagination) {
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
                    if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.Pagination) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == exports.ListLayoutType.FlowVertical) {
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
        __clickItem(pointer, gameObject) {
            if ((this._scrollPane && this._scrollPane.isDragged) || !gameObject || !gameObject[0] || pointer.downX !== pointer.upX || pointer.downY !== pointer.upY)
                return;
            let item = (gameObject[0]["$owner"]);
            // 如果clickitem的父对象为空，不可能为glist则直接跳出
            if (!item)
                return;
            let boo = false;
            let target = gameObject[0];
            while (!boo) {
                if ((item.parent && (item.parent.type === exports.ObjectType.List || item.parent.type === exports.ObjectType.Tree || item.parent.type == exports.ObjectType.ComboBox)) || item.type === exports.ObjectType.List || item.type === exports.ObjectType.Tree || item.type === exports.ObjectType.ComboBox) {
                    target = item.displayObject;
                    boo = true;
                }
                else {
                    item = item.parent;
                    if (!item || !item.parent) {
                        boo = true;
                    }
                    else {
                        boo = false;
                    }
                }
            }
            // 如果clickitem的父对象为空，不可能为glist则直接跳出
            if (!item || !item.parent)
                return;
            this.setSelectionOnEvent(item, { target });
            if (this._scrollPane && this.scrollItemToViewOnClick)
                this._scrollPane.scrollToView(item, true);
            this.dispatchItemEvent(item, Events.createEvent(Events.CLICK_ITEM, this.displayObject, { target, touchId: pointer.id }));
        }
        dispatchItemEvent(item, evt) {
            this.displayObject.emit(Events.CLICK_ITEM, item, evt);
        }
        setSelectionOnEvent(item, evt) {
            if (!(item instanceof GButton) || this._selectionMode == exports.ListSelectionMode.None)
                return;
            var dontChangeLastIndex = false;
            var index = this.childIndexToItemIndex(this.getChildIndex(item));
            if (this._selectionMode == exports.ListSelectionMode.Single) {
                if (!item.selected) {
                    this.clearSelectionExcept(item);
                    item.selected = true;
                }
            }
            else {
                if (this.shiftKey) {
                    if (!item.selected) {
                        if (this._lastSelectedIndex != -1) {
                            var min = Math.min(this._lastSelectedIndex, index);
                            var max = Math.max(this._lastSelectedIndex, index);
                            max = Math.min(max, this.numItems - 1);
                            var i;
                            if (this._virtual) {
                                for (i = min; i <= max; i++) {
                                    var ii = this._virtualItems[i];
                                    if (ii.obj instanceof GButton)
                                        ii.obj.selected = true;
                                    ii.selected = true;
                                }
                            }
                            else {
                                for (i = min; i <= max; i++) {
                                    var obj = this.getChildAt(i);
                                    if (obj instanceof GButton)
                                        obj.selected = true;
                                }
                            }
                            dontChangeLastIndex = true;
                        }
                        else {
                            item.selected = true;
                        }
                    }
                }
                else if (this.ctrlKey || this._selectionMode == exports.ListSelectionMode.Multiple_SingleClick) {
                    item.selected = !item.selected;
                }
                else {
                    if (!item.selected) {
                        this.clearSelectionExcept(item);
                        item.selected = true;
                    }
                    else
                        this.clearSelectionExcept(item);
                }
            }
            if (!dontChangeLastIndex)
                this._lastSelectedIndex = index;
            if (item.selected)
                this.updateSelectionController(index);
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
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal)
                    this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap;
                else
                    this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
            }
            else if (itemCount == 0) {
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal)
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
                    if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal)
                        this.viewHeight = minSize;
                    else
                        this.viewWidth = minSize;
                }
                else {
                    var size = 0;
                    if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
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
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
                    saved = yValue;
                    s_n = yValue;
                    const pos1 = this.getIndexOnPos1(false);
                    index = pos1 < 0 ? 0 : pos1;
                    yValue = s_n;
                    if (index < this._virtualItems.length && index < this._realNumItems) {
                        size = this._virtualItems[index].height;
                        if (this.shouldSnapToNext(yDir, saved - yValue, size))
                            yValue += size + this._lineGap;
                    }
                }
                else if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowVertical) {
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
            if (this._virtual) {
                if (this._numItems == 0)
                    return;
                this.checkVirtualList();
                if (index >= this._virtualItems.length)
                    throw new Error("Invalid child index: " + index + ">" + this._virtualItems.length);
                if (this._loop)
                    index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
                var rect;
                var ii = this._virtualItems[index];
                var pos = 0;
                var i;
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].height + this._lineGap;
                    rect = new Phaser.Geom.Rectangle(0, pos, this._itemSize.x, ii.height);
                }
                else if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowVertical) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].width + this._columnGap;
                    rect = new Phaser.Geom.Rectangle(pos, 0, ii.width, this._itemSize.y);
                }
                else {
                    var page = index / (this._curLineItemCount * this._curLineItemCount2);
                    rect = new Phaser.Geom.Rectangle(page * this.viewWidth + (index % this._curLineItemCount) * (ii.width + this._columnGap), (index / this._curLineItemCount) % this._curLineItemCount2 * (ii.height + this._lineGap), ii.width, ii.height);
                }
                if (this._scrollPane)
                    this._scrollPane.scrollToView(rect, ani, setFirst);
            }
            else {
                var obj = this.getChildAt(index);
                if (this._scrollPane)
                    this._scrollPane.scrollToView(obj, ani, setFirst);
                else if (this._parent && this._parent.scrollPane)
                    this._parent.scrollPane.scrollToView(obj, ani, setFirst);
            }
        }
        getFirstChildInView() {
            return this.childIndexToItemIndex(super.getFirstChildInView());
        }
        childIndexToItemIndex(index) {
            if (!this._virtual)
                return index;
            if (this._layout == exports.ListLayoutType.Pagination) {
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
            if (this._layout == exports.ListLayoutType.Pagination) {
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
            if (!this._virtual) {
                if (this._scrollPane == null)
                    throw new Error("Virtual list must be scrollable!");
                if (loop) {
                    if (this._layout == exports.ListLayoutType.FlowHorizontal || this._layout == exports.ListLayoutType.FlowVertical)
                        throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
                    this._scrollPane.bouncebackEffect = false;
                }
                this._virtual = true;
                this._loop = loop;
                this._virtualItems = new Array();
                this.removeChildrenToPool();
                if (this._itemSize == null) {
                    this._itemSize = new Phaser.Geom.Point();
                    this.getFromPool(null).then((obj) => {
                        if (obj == null) {
                            throw new Error("Virtual List must have a default list item resource.");
                        }
                        else {
                            this._itemSize.x = obj.width;
                            this._itemSize.y = obj.height;
                        }
                        this.returnToPool(obj);
                    });
                }
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
                    this._scrollPane.scrollStep = this._itemSize.y;
                    if (this._loop)
                        this._scrollPane._loop = 2;
                }
                else {
                    this._scrollPane.scrollStep = this._itemSize.x;
                    if (this._loop)
                        this._scrollPane._loop = 1;
                }
                this.on(Events.SCROLL, this.__scrolled, this);
                this.setVirtualListChangedFlag(true);
            }
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
            var i;
            if (this._virtual) {
                if (this.itemRenderer == null)
                    throw new Error("set itemRenderer first!");
                this._numItems = value;
                if (this._loop)
                    this._realNumItems = this._numItems * 6; //设置6倍数量，用于循环滚动
                else
                    this._realNumItems = this._numItems;
                //_virtualItems的设计是只增不减的
                var oldCount = this._virtualItems.length;
                if (this._realNumItems > oldCount) {
                    for (i = oldCount; i < this._realNumItems; i++) {
                        var ii = {
                            width: this._itemSize.x,
                            height: this._itemSize.y,
                            updateFlag: 0
                        };
                        this._virtualItems.push(ii);
                    }
                }
                else {
                    for (i = this._realNumItems; i < oldCount; i++)
                        this._virtualItems[i].selected = false;
                }
                if (this._virtualListChanged != 0) {
                    if (this._refreshListTime) {
                        this._refreshListTime.remove(false);
                        this._refreshListTime = null;
                    }
                    //Laya.timer.clear(this, this._refreshVirtualList);
                }
                //立即刷新
                this._refreshVirtualList();
            }
            else {
                var cnt = this._children.length;
                if (value > cnt) {
                    for (i = cnt; i < value; i++) {
                        if (this.itemProvider == null)
                            this.addItemFromPool();
                        else
                            this.addItemFromPool(this.itemProvider.runWith(i));
                    }
                }
                else {
                    this.removeChildrenToPool(value, cnt);
                }
                if (this.itemRenderer != null) {
                    for (i = 0; i < value; i++)
                        this.itemRenderer.runWith([i, this.getChildAt(i)]);
                }
            }
        }
        refreshVirtualList() {
            this.setVirtualListChangedFlag(false);
        }
        checkVirtualList() {
            if (this._virtualListChanged != 0) {
                this._refreshVirtualList();
                if (this._refreshListTime) {
                    this._refreshListTime.remove(false);
                    this._refreshListTime = null;
                }
                // Laya.timer.clear(this, this._refreshVirtualList);
            }
        }
        setVirtualListChangedFlag(layoutChanged) {
            if (layoutChanged)
                this._virtualListChanged = 2;
            else if (this._virtualListChanged == 0)
                this._virtualListChanged = 1;
            if (!this._refreshListTime)
                this._refreshListTime = this.scene.time.addEvent(this._refreshListEvent);
            // Laya.timer.callLater(this, this._refreshVirtualList);
        }
        _refreshVirtualList() {
            if (!this._displayObject)
                return;
            var layoutChanged = this._virtualListChanged == 2;
            this._virtualListChanged = 0;
            this._eventLocked = true;
            if (layoutChanged) {
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.SingleRow)
                    this._curLineItemCount = 1;
                else if (this._layout == exports.ListLayoutType.FlowHorizontal) {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else if (this._layout == exports.ListLayoutType.FlowVertical) {
                    if (this._lineCount > 0)
                        this._curLineItemCount = this._lineCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else //pagination
                 {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                    if (this._lineCount > 0)
                        this._curLineItemCount2 = this._lineCount;
                    else {
                        this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount2 <= 0)
                            this._curLineItemCount2 = 1;
                    }
                }
            }
            var ch = 0, cw = 0;
            if (this._realNumItems > 0) {
                var i;
                var len = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
                var len2 = Math.min(this._curLineItemCount, this._realNumItems);
                if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        ch += this._virtualItems[i].height + this._lineGap;
                    if (ch > 0)
                        ch -= this._lineGap;
                    if (this._autoResizeItem)
                        cw = this._scrollPane.viewWidth;
                    else {
                        for (i = 0; i < len2; i++)
                            cw += this._virtualItems[i].width + this._columnGap;
                        if (cw > 0)
                            cw -= this._columnGap;
                    }
                }
                else if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowVertical) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        cw += this._virtualItems[i].width + this._columnGap;
                    if (cw > 0)
                        cw -= this._columnGap;
                    if (this._autoResizeItem)
                        ch = this._scrollPane.viewHeight;
                    else {
                        for (i = 0; i < len2; i++)
                            ch += this._virtualItems[i].height + this._lineGap;
                        if (ch > 0)
                            ch -= this._lineGap;
                    }
                }
                else {
                    var pageCount = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
                    cw = pageCount * this.viewWidth;
                    ch = this.viewHeight;
                }
            }
            this.handleAlign(cw, ch);
            this._scrollPane.setContentSize(cw, ch);
            this._eventLocked = false;
            this.handleScroll(true);
        }
        __scrolled(evt) {
            this.handleScroll(false);
        }
        getIndexOnPos1(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).y;
                if (pos2 > s_n) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].height + this._lineGap);
                        if (pos2 <= s_n) {
                            s_n = pos2;
                            //console.log("0 ===>", i);
                            return i;
                        }
                    }
                    s_n = 0;
                    //console.log("1 ===>", i);
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            //console.log("2 ===>", i);
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    //console.log("3 ===>", i);
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        //console.log("4 ===>", i);
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                //console.log("5 ===>", i);
                return 0; //this._realNumItems - this._curLineItemCount;
            }
        }
        getIndexOnPos2(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).x;
                if (pos2 > s_n) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].width + this._columnGap);
                        if (pos2 <= s_n) {
                            s_n = pos2;
                            return i;
                        }
                    }
                    s_n = 0;
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        }
        getIndexOnPos3(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var viewWidth = this.viewWidth;
            var page = Math.floor(s_n / viewWidth);
            var startIndex = page * (this._curLineItemCount * this._curLineItemCount2);
            var pos2 = page * viewWidth;
            var i;
            var pos3;
            for (i = 0; i < this._curLineItemCount; i++) {
                pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
                if (pos3 > s_n) {
                    s_n = pos2;
                    return startIndex + i;
                }
                pos2 = pos3;
            }
            s_n = pos2;
            return startIndex + this._curLineItemCount - 1;
        }
        handleScroll(forceUpdate) {
            if (this._eventLocked)
                return;
            if (this._layout == exports.ListLayoutType.SingleColumn || this._layout == exports.ListLayoutType.FlowHorizontal) {
                var enterCounter = 0;
                const fun0 = () => {
                    this.handleScroll1(forceUpdate).then((boo) => {
                        if (boo) {
                            enterCounter++;
                            forceUpdate = false;
                            if (enterCounter > 20) {
                                console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            }
                            fun0();
                        }
                        else {
                            this.handleArchOrder1();
                            this._boundsChanged = false;
                        }
                    });
                };
                fun0();
                // while (this.handleScroll1(forceUpdate)) {
                //     enterCounter++;
                //     forceUpdate = false;
                //     if (enterCounter > 20) {
                //         console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                //         break;
                //     }
                // }
                // this.handleArchOrder1();
            }
            else if (this._layout == exports.ListLayoutType.SingleRow || this._layout == exports.ListLayoutType.FlowVertical) {
                enterCounter = 0;
                const fun1 = () => {
                    this.handleScroll2(forceUpdate).then((boo) => {
                        if (boo) {
                            enterCounter++;
                            forceUpdate = false;
                            if (enterCounter > 20) {
                                console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            }
                            fun1();
                        }
                        else {
                            this.handleArchOrder2();
                            this._boundsChanged = false;
                        }
                    });
                };
                fun1();
                // while (this.handleScroll2(forceUpdate)) {
                //     enterCounter++;
                //     forceUpdate = false;
                //     if (enterCounter > 20) {
                //         console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                //         break;
                //     }
                // }
                // this.handleArchOrder2();
            }
            else {
                this.handleScroll3(forceUpdate).then(() => {
                    this._boundsChanged = false;
                });
            }
        }
        handleScroll1(forceUpdate) {
            return new Promise((reslove, reject) => {
                var pos = this._scrollPane.scrollingPosY;
                var max = pos + this._scrollPane.viewHeight;
                var end = max == this._scrollPane.contentHeight; //这个标志表示当前需要滚动到最末，无论内容变化大小
                //寻找当前位置的第一条项目
                s_n = pos;
                // const singleHei = this._virtualItems[0].height * this._virtualItems.length + this._lineGap * (this._virtualItems.length - 1);
                // const viewNum = Math.floor(this._scrollPane.viewHeight / singleHei);
                const pos1 = this.getIndexOnPos1(forceUpdate);
                var newFirstIndex = pos1 < 0 ? 0 : pos1;
                pos = s_n;
                if (newFirstIndex == this._firstIndex && !forceUpdate) {
                    reslove(false);
                    return;
                }
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                var curIndex = newFirstIndex;
                var forward = oldFirstIndex > newFirstIndex;
                var childCount = this.numChildren;
                var lastIndex = oldFirstIndex + childCount - 1;
                var reuseIndex = forward ? lastIndex : oldFirstIndex;
                var curX = 0, curY = pos;
                var needRender;
                var deltaSize = 0;
                var firstItemDeltaSize = 0;
                var url = this._defaultItem;
                var ii, ii2;
                var i, j;
                var partSize = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                this.itemInfoVer++;
                const fun2 = () => {
                    // 等待数据组织完成再处理
                    childCount = this.numChildren;
                    for (i = 0; i < childCount; i++) {
                        ii = this._virtualItems[oldFirstIndex + i];
                        if (!ii)
                            continue;
                        if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                            if (ii.obj instanceof GButton)
                                ii.selected = ii.obj.selected;
                            this.removeChildToPool(ii.obj);
                            ii.obj = null;
                        }
                    }
                    childCount = this._children.length;
                    for (i = 0; i < childCount; i++) {
                        if (!this._virtualItems[newFirstIndex + i])
                            continue;
                        var obj = this._virtualItems[newFirstIndex + i].obj;
                        if (!obj)
                            continue;
                        if (this._children[i] != obj)
                            this.setChildIndex(obj, i);
                    }
                    if (deltaSize != 0 || firstItemDeltaSize != 0)
                        this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
                    if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y) //最后一页没填满！
                     {
                        reslove(true);
                    }
                    else {
                        reslove(false);
                    }
                };
                const fun1 = () => {
                    if (needRender) {
                        if (this._autoResizeItem && (this._layout == exports.ListLayoutType.SingleColumn || this._columnCount > 0))
                            ii.obj.setSize(partSize, ii.obj.height, true);
                        this.itemRenderer.runWith([curIndex % this._numItems, ii.obj]);
                        // console.log("handle1 ===>", curIndex);
                        if (curIndex % this._curLineItemCount == 0) {
                            deltaSize += Math.ceil(ii.obj.height) - ii.height;
                            if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                                //当内容向下滚动时，如果新出现的项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                                firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                            }
                        }
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                    ii.updateFlag = this.itemInfoVer;
                    ii.obj.setXY(curX, curY);
                    if (curIndex == newFirstIndex) //要显示多1条才不会穿帮
                        max += ii.height;
                    curX += ii.width + this._columnGap;
                    if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                        curX = 0;
                        curY += ii.height + this._lineGap;
                    }
                    curIndex++;
                    if (curIndex < this._realNumItems && (end || curY < max)) {
                        fun0();
                    }
                    else {
                        fun2();
                    }
                };
                const fun0 = () => {
                    ii = this._virtualItems[curIndex];
                    if (ii.obj == null || forceUpdate) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider.runWith(curIndex % this._numItems);
                            if (url == null)
                                url = this._defaultItem;
                            url = UIPackage.normalizeURL(url);
                        }
                        if (ii.obj && ii.obj.resourceURL != url) {
                            if (ii.obj instanceof GButton)
                                ii.selected = ii.obj.selected;
                            this.removeChildToPool(ii.obj);
                            ii.obj = null;
                        }
                    }
                    if (ii.obj == null) {
                        //搜索最适合的重用item，保证每次刷新需要新建或者重新render的item最少
                        if (forward) {
                            for (j = reuseIndex; j >= oldFirstIndex; j--) {
                                ii2 = this._virtualItems[j];
                                if (!ii2)
                                    continue;
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof GButton)
                                        ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex)
                                        reuseIndex--;
                                    break;
                                }
                            }
                        }
                        else {
                            for (j = reuseIndex; j <= lastIndex; j++) {
                                ii2 = this._virtualItems[j];
                                if (!ii2)
                                    continue;
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof GButton)
                                        ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex)
                                        reuseIndex++;
                                    break;
                                }
                            }
                        }
                        if (ii.obj) {
                            this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                            if (ii.obj instanceof GButton)
                                ii.obj.selected = ii.selected;
                            needRender = true;
                            fun1();
                        }
                        else {
                            this._pool.getObject(url).then((obj) => {
                                ii.obj = obj;
                                // const g = this.scene.make.graphics(undefined, false);
                                // g.clear();
                                // g.fillStyle(0xFFCC00);
                                // g.fillRoundedRect(0, 0, ii.obj.initWidth, ii.obj.initHeight - 4);
                                // (<Phaser.GameObjects.Container>ii.obj.displayObject).addAt(g, 0);
                                ii.obj.displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, ii.obj.initWidth, ii.obj.initHeight), Phaser.Geom.Rectangle.Contains);
                                if (forward)
                                    this.addChildAt(ii.obj, curIndex - newFirstIndex);
                                else
                                    this.addChild(ii.obj);
                                if (ii.obj instanceof GButton)
                                    ii.obj.selected = ii.selected;
                                needRender = true;
                                fun1();
                            });
                        }
                    }
                    else {
                        needRender = forceUpdate;
                        fun1();
                    }
                };
                if (curIndex < this._realNumItems && (end || curY < max)) {
                    fun0();
                }
                else {
                    fun2();
                }
            });
        }
        setBoundsChangedFlag() {
            if (!this._scrollPane && !this._trackBounds)
                return;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                if (!this._renderTime)
                    this.scene.time.addEvent(this._renderEvent);
                //Laya.timer.callLater(this, this.__render);
            }
        }
        handleScroll2(forceUpdate) {
            return __awaiter(this, void 0, void 0, function* () {
                var pos = this._scrollPane.scrollingPosX;
                var max = pos + this._scrollPane.viewWidth;
                var end = pos == this._scrollPane.contentWidth; //这个标志表示当前需要滚动到最末，无论内容变化大小
                //寻找当前位置的第一条项目
                s_n = pos;
                var newFirstIndex = this.getIndexOnPos2(forceUpdate);
                pos = s_n;
                console.log("pos ===>", pos, newFirstIndex);
                if (newFirstIndex == this._firstIndex && !forceUpdate)
                    return false;
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                var curIndex = newFirstIndex;
                var forward = oldFirstIndex > newFirstIndex;
                var childCount = this.numChildren;
                var lastIndex = oldFirstIndex + childCount - 1;
                var reuseIndex = forward ? lastIndex : oldFirstIndex;
                var curX = pos, curY = 0;
                var needRender;
                var deltaSize = 0;
                var firstItemDeltaSize = 0;
                var url = this._defaultItem;
                var ii, ii2;
                var i, j;
                var partSize = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                this.itemInfoVer++;
                while (curIndex < this._realNumItems && (end || curX < max)) {
                    ii = this._virtualItems[curIndex];
                    if (ii.obj == null || forceUpdate) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider.runWith(curIndex % this._numItems);
                            if (url == null)
                                url = this._defaultItem;
                            url = UIPackage.normalizeURL(url);
                        }
                        if (ii.obj && ii.obj.resourceURL != url) {
                            if (ii.obj instanceof GButton)
                                ii.selected = ii.obj.selected;
                            this.removeChildToPool(ii.obj);
                            ii.obj = null;
                        }
                    }
                    if (ii.obj == null) {
                        if (forward) {
                            for (j = reuseIndex; j >= oldFirstIndex; j--) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof GButton)
                                        ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex)
                                        reuseIndex--;
                                    break;
                                }
                            }
                        }
                        else {
                            for (j = reuseIndex; j <= lastIndex; j++) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof GButton)
                                        ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex)
                                        reuseIndex++;
                                    break;
                                }
                            }
                        }
                        if (ii.obj) {
                            this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                        }
                        else {
                            ii.obj = yield this._pool.getObject(url);
                            if (forward)
                                this.addChildAt(ii.obj, curIndex - newFirstIndex);
                            else
                                this.addChild(ii.obj);
                        }
                        if (ii.obj instanceof GButton)
                            ii.obj.selected = ii.selected;
                        needRender = true;
                    }
                    else {
                        needRender = forceUpdate;
                    }
                    if (needRender) {
                        if (this._autoResizeItem && (this._layout == exports.ListLayoutType.SingleRow || this._lineCount > 0))
                            ii.obj.setSize(ii.obj.width, partSize, true);
                        this.itemRenderer.runWith([curIndex % this._numItems, ii.obj]);
                        if (curIndex % this._curLineItemCount == 0) {
                            deltaSize += Math.ceil(ii.obj.width) - ii.width;
                            if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                                //当内容向下滚动时，如果新出现的一个项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                                firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                            }
                        }
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                    ii.updateFlag = this.itemInfoVer;
                    ii.obj.setXY(curX, curY);
                    if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                        max += ii.width;
                    curY += ii.height + this._lineGap;
                    // console.log("curY ===>", curY);
                    if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                        curY = 0;
                        curX += ii.width + this._columnGap;
                    }
                    curIndex++;
                }
                for (i = 0; i < childCount; i++) {
                    ii = this._virtualItems[oldFirstIndex + i];
                    if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                        if (ii.obj instanceof GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                childCount = this._children.length;
                for (i = 0; i < childCount; i++) {
                    var obj = this._virtualItems[newFirstIndex + i].obj;
                    if (this._children[i] != obj)
                        this.setChildIndex(obj, i);
                }
                if (deltaSize != 0 || firstItemDeltaSize != 0)
                    this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
                if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x) //最后一页没填满！
                    return true;
                else
                    return false;
            });
        }
        handleScroll3(forceUpdate) {
            return __awaiter(this, void 0, void 0, function* () {
                var pos = this._scrollPane.scrollingPosX;
                //寻找当前位置的第一条项目
                s_n = pos;
                var newFirstIndex = this.getIndexOnPos3(forceUpdate);
                pos = s_n;
                if (newFirstIndex == this._firstIndex && !forceUpdate)
                    return;
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                //分页模式不支持不等高，所以渲染满一页就好了
                var reuseIndex = oldFirstIndex;
                var virtualItemCount = this._virtualItems.length;
                var pageSize = this._curLineItemCount * this._curLineItemCount2;
                var startCol = newFirstIndex % this._curLineItemCount;
                var viewWidth = this.viewWidth;
                var page = Math.floor(newFirstIndex / pageSize);
                var startIndex = page * pageSize;
                var lastIndex = startIndex + pageSize * 2; //测试两页
                var needRender;
                var i;
                var ii, ii2;
                var col;
                var url = this._defaultItem;
                var partWidth = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                var partHeight = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
                this.itemInfoVer++;
                //先标记这次要用到的项目
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems)
                        continue;
                    col = i % this._curLineItemCount;
                    if (i - startIndex < pageSize) {
                        if (col < startCol)
                            continue;
                    }
                    else {
                        if (col > startCol)
                            continue;
                    }
                    ii = this._virtualItems[i];
                    ii.updateFlag = this.itemInfoVer;
                }
                var lastObj = null;
                var insertIndex = 0;
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems)
                        continue;
                    ii = this._virtualItems[i];
                    if (ii.updateFlag != this.itemInfoVer)
                        continue;
                    if (ii.obj == null) {
                        //寻找看有没有可重用的
                        while (reuseIndex < virtualItemCount) {
                            ii2 = this._virtualItems[reuseIndex];
                            if (ii2.obj && ii2.updateFlag != this.itemInfoVer) {
                                if (ii2.obj instanceof GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                break;
                            }
                            reuseIndex++;
                        }
                        if (insertIndex == -1)
                            insertIndex = this.getChildIndex(lastObj) + 1;
                        if (ii.obj == null) {
                            if (this.itemProvider != null) {
                                url = this.itemProvider.runWith(i % this._numItems);
                                if (url == null)
                                    url = this._defaultItem;
                                url = UIPackage.normalizeURL(url);
                            }
                            ii.obj = yield this._pool.getObject(url);
                            this.addChildAt(ii.obj, insertIndex);
                        }
                        else {
                            insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                        }
                        insertIndex++;
                        if (ii.obj instanceof GButton)
                            ii.obj.selected = ii.selected;
                        needRender = true;
                    }
                    else {
                        needRender = forceUpdate;
                        insertIndex = -1;
                        lastObj = ii.obj;
                    }
                    if (needRender) {
                        if (this._autoResizeItem) {
                            if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount)
                                ii.obj.setSize(partWidth, partHeight, true);
                            else if (this._curLineItemCount == this._columnCount)
                                ii.obj.setSize(partWidth, ii.obj.height, true);
                            else if (this._curLineItemCount2 == this._lineCount)
                                ii.obj.setSize(ii.obj.width, partHeight, true);
                        }
                        this.itemRenderer.runWith([i % this._numItems, ii.obj]);
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                }
                //排列item
                var borderX = (startIndex / pageSize) * viewWidth;
                var xx = borderX;
                var yy = 0;
                var lineHeight = 0;
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems)
                        continue;
                    ii = this._virtualItems[i];
                    if (ii.updateFlag == this.itemInfoVer)
                        ii.obj.setXY(xx, yy);
                    if (ii.height > lineHeight)
                        lineHeight = ii.height;
                    if (i % this._curLineItemCount == this._curLineItemCount - 1) {
                        xx = borderX;
                        yy += lineHeight + this._lineGap;
                        lineHeight = 0;
                        if (i == startIndex + pageSize - 1) {
                            borderX += viewWidth;
                            xx = borderX;
                            yy = 0;
                        }
                    }
                    else
                        xx += ii.width + this._columnGap;
                }
                //释放未使用的
                for (i = reuseIndex; i < virtualItemCount; i++) {
                    ii = this._virtualItems[i];
                    if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                        if (ii.obj instanceof GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
            });
        }
        handleArchOrder1() {
            if (this.childrenRenderOrder == exports.ChildrenRenderOrder.Arch) {
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
            if (this.childrenRenderOrder == exports.ChildrenRenderOrder.Arch) {
                var mid = this._scrollPane.posX + this.viewWidth / 2;
                var minDist = Number.POSITIVE_INFINITY;
                var dist = 0;
                var apexIndex = 0;
                var cnt = this.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.x - obj.width / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        }
        handleAlign(contentWidth, contentHeight) {
            var newOffsetX = 0;
            var newOffsetY = 0;
            if (contentHeight < this.viewHeight) {
                if (this._verticalAlign == "middle")
                    newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
                else if (this._verticalAlign == "bottom")
                    newOffsetY = this.viewHeight - contentHeight;
            }
            if (contentWidth < this.viewWidth) {
                if (this._align == "center")
                    newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
                else if (this._align == "right")
                    newOffsetX = this.viewWidth - contentWidth;
            }
            if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
                this._alignOffset.setTo(newOffsetX, newOffsetY);
                if (this._scrollPane)
                    this._scrollPane.adjustMaskContainer();
                else
                    this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
            }
        }
        updateBounds() {
            // if (this._virtual)
            //     return;
            var i;
            var child;
            var curX = 0;
            var curY = 0;
            var maxWidth = 0;
            var maxHeight = 0;
            var cw, ch;
            var j = 0;
            var page = 0;
            var k = 0;
            var cnt = this._children.length;
            var viewWidth = this.viewWidth;
            var viewHeight = this.viewHeight;
            var lineSize = 0;
            var lineStart = 0;
            var ratio;
            if (this._layout == exports.ListLayoutType.SingleColumn) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curY != 0)
                        curY += this._lineGap;
                    // console.log("curY 0===>", curY, i);
                    child.y = curY;
                    if (this._autoResizeItem)
                        child.setSize(viewWidth, child.height, true);
                    curY += Math.ceil(child.height);
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                }
                ch = curY;
                // console.log("curY total===>", curY);
                if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
                    viewWidth += this._scrollPane.vtScrollBar.width;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(viewWidth, child.height, true);
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                    }
                }
                cw = Math.ceil(maxWidth);
            }
            else if (this._layout == exports.ListLayoutType.SingleRow) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this._columnGap;
                    child.x = curX;
                    if (this._autoResizeItem)
                        child.setSize(child.width, viewHeight, true);
                    curX += Math.ceil(child.width);
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                }
                cw = curX;
                if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
                    viewHeight += this._scrollPane.hzScrollBar.height;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(child.width, viewHeight, true);
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                    }
                }
                ch = Math.ceil(maxHeight);
            }
            else if (this._layout == exports.ListLayoutType.FlowHorizontal) {
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = viewWidth;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = Math.ceil(maxWidth);
                }
            }
            else if (this._layout == exports.ListLayoutType.FlowVertical) {
                if (this._autoResizeItem && this._lineCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceHeight;
                        j++;
                        if (j == this._lineCount || i == cnt - 1) {
                            ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
                            curY = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                    curY += Math.ceil(child.height) + this._lineGap;
                                }
                                else {
                                    child.setSize(child.width, viewHeight - curY, true);
                                }
                                if (child.width > maxWidth)
                                    maxWidth = child.width;
                            }
                            //new line
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = viewHeight;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curY != 0)
                            curY += this._lineGap;
                        if (this._lineCount != 0 && j >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                            curY = 0;
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curY += Math.ceil(child.height);
                        if (curY > maxHeight)
                            maxHeight = curY;
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                        j++;
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = Math.ceil(maxHeight);
                }
            }
            else //pagination
             {
                var eachHeight;
                if (this._autoResizeItem && this._lineCount > 0)
                    eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (j == 0 && (this._lineCount != 0 && k >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight)) {
                            //new page
                            page++;
                            curY = 0;
                            k = 0;
                        }
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(page * viewWidth + curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this._lineCount > 0 ? eachHeight : child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                            k++;
                        }
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._autoResizeItem && this._lineCount > 0)
                            child.setSize(child.width, eachHeight, true);
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            k++;
                            if (this._lineCount != 0 && k >= this._lineCount
                                || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) //new page
                             {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                        }
                        child.setXY(page * viewWidth + curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                }
                ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
                cw = (page + 1) * viewWidth;
            }
            this.handleAlign(cw, ch);
            this.setBounds(0, 0, cw, ch);
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
            const fun0 = () => {
                if (buffer.readBool()) //clipSoftness
                    buffer.skip(8);
                if (buffer.version >= 2) {
                    this.scrollItemToViewOnClick = buffer.readBool();
                    this.foldInvisibleItems = buffer.readBool();
                }
                buffer.seek(beginPos, 8);
                this._defaultItem = buffer.readS();
                this.readItems(buffer);
            };
            var overflow = buffer.readByte();
            if (overflow == exports.OverflowType.Scroll) {
                var savedPos = buffer.position;
                buffer.seek(beginPos, 7);
                this.setupScroll(buffer).then(() => {
                    buffer.position = savedPos;
                    fun0();
                });
            }
            else {
                this.setupOverflow(overflow);
                fun0();
            }
        }
        readItems(buffer) {
            return new Promise((resolve, reject) => {
                var cnt;
                var nextPos;
                var str;
                cnt = buffer.readShort();
                const fun0 = (i) => {
                    if (i >= cnt) {
                        resolve();
                        return;
                    }
                    nextPos = buffer.readShort();
                    nextPos += buffer.position;
                    str = buffer.readS();
                    if (str == null) {
                        str = this._defaultItem;
                        if (!str) {
                            buffer.position = nextPos;
                            fun0(++i);
                            return;
                        }
                    }
                    this.getFromPool(str).then((obj) => {
                        if (obj) {
                            this.addChild(obj);
                            this.setupItem(buffer, obj);
                        }
                        buffer.position = nextPos;
                        fun0(++i);
                    });
                };
                fun0(0);
                // for (i = 0; i < cnt; i++) {
                //     nextPos = buffer.readShort();
                //     nextPos += buffer.position;
                //     str = buffer.readS();
                //     if (str == null) {
                //         str = this._defaultItem;
                //         if (!str) {
                //             buffer.position = nextPos;
                //             continue;
                //         }
                //     }
                //     this.getFromPool(str).then((obj) => {
                //         if (obj) {
                //             this.addChild(obj);
                //             this.setupItem(buffer, obj);
                //         }
                //         buffer.position = nextPos;
                //     });
                // }
                // resolve();
            });
        }
        setupItem(buffer, obj) {
            var str;
            // 自对象本生有定义资源，父对象不对其进行修改
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
            // const g = this.scene.make.graphics(undefined, false);
            // g.fillStyle(0xFFCC00, .4);
            // g.fillRect(0, 0, this.initWidth, this.initHeight);
            // (<Phaser.GameObjects.Container>this.displayObject).add(g);
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
            return new Promise((resolve, rejcet) => {
                this.addChildAt(child, this._children.length).then((treeNode) => {
                    resolve(treeNode);
                });
            });
        }
        addChildAt(child, index) {
            return new Promise((resolve, rejcet) => {
                if (!child)
                    throw new Error("child is null");
                var numChildren = this._children.length;
                if (index >= 0 && index <= numChildren) {
                    if (child._parent == this) {
                        this.setChildIndex(child, index);
                        resolve(child);
                        return;
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
                        if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) {
                            this._tree._afterInserted(child).then(() => {
                                resolve(child);
                            });
                        }
                        else {
                            resolve(child);
                        }
                    }
                    return;
                }
                else {
                    throw new RangeError("Invalid child index");
                }
            });
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
                this._tree.treeNodeWillExpand.runWith([this, true]);
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
        constructor(scene, type) {
            super(scene, type);
            this._indent = 15;
            this._rootNode = new GTreeNode(true);
            this._rootNode._setTree(this);
            this._rootNode.expanded = true;
            this.scene.input.on("gameobjectdown", this.__cellMouseDown, this);
        }
        dispose() {
            this.scene.input.off("gameobjectdown", this.__cellMouseDown, this);
            super.dispose();
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
            if (this.selectedIndex != -1)
                return this.getChildAt(this.selectedIndex)._treeNode;
            else
                return null;
        }
        getSelectedNodes(result) {
            if (!result)
                result = new Array();
            s_list.length = 0;
            super.getSelection(s_list);
            var cnt = s_list.length;
            var ret = new Array();
            for (var i = 0; i < cnt; i++) {
                var node = this.getChildAt(s_list[i])._treeNode;
                ret.push(node);
            }
            return ret;
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
            return new Promise((resolve, reject) => {
                this.getFromPool(node._resURL ? node._resURL : this.defaultItem).then((obj) => {
                    var child = obj;
                    if (!child) {
                        throw new Error("cannot create tree node object.");
                    }
                    child._treeNode = node;
                    node._cell = child;
                    var indentObj = child.getChild("indent");
                    if (indentObj)
                        indentObj.width = (node.level - 1) * this._indent;
                    var cc;
                    cc = child.getController("expanded");
                    if (cc) {
                        cc.on(Events.STATE_CHANGED, this.__expandedStateChanged, this);
                        cc.selectedIndex = node.expanded ? 1 : 0;
                    }
                    cc = child.getController("leaf");
                    if (cc)
                        cc.selectedIndex = node.isFolder ? 0 : 1;
                    // if (node.isFolder)
                    //     child.on("pointerdown", this.__cellMouseDown, this);
                    if (this.treeNodeRender)
                        this.treeNodeRender.runWith([node, child]);
                    resolve();
                });
            });
        }
        _afterInserted(node) {
            return new Promise((resolve, reject) => {
                const fun0 = () => {
                    var index = this.getInsertIndexForNode(node);
                    this.addChildAt(node._cell, index);
                    if (this.treeNodeRender)
                        this.treeNodeRender.runWith([node, node._cell]);
                    if (node.isFolder && node.expanded) {
                        this.checkChildren(node, index).then(() => {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                };
                if (!node._cell) {
                    this.createCell(node).then(() => {
                        fun0();
                    });
                }
                else {
                    fun0();
                }
            });
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
                this.treeNodeWillExpand.runWith([node, true]);
            if (!node._cell)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender.runWith([node, node._cell]);
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
                this.treeNodeWillExpand.runWith([node, false]);
            if (!node._cell)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender.runWith([node, node._cell]);
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
            return new Promise((resolve, reject) => {
                var cnt = folderNode.numChildren;
                const fun0 = (i) => {
                    if (i >= cnt) {
                        resolve(index);
                        return;
                    }
                    index++;
                    var node = folderNode.getChildAt(i);
                    if (!node._cell) {
                        this.createCell(node).then(() => {
                            fun1(node.cell, index);
                            if (node.isFolder && node.expanded) {
                                fun2(node, index).then((index) => {
                                    fun0(++i);
                                });
                            }
                            else {
                                fun0(++i);
                            }
                        });
                    }
                    else {
                        fun1(node.cell, index);
                        if (node.isFolder && node.expanded) {
                            fun2(node, index).then((index) => {
                                fun0(++i);
                            });
                        }
                        else {
                            fun0(++i);
                        }
                    }
                };
                const fun1 = (cell, index) => {
                    if (!cell.parent)
                        this.addChildAt(cell, index);
                };
                const fun2 = (node, index) => {
                    return new Promise((resolve, reject) => {
                        this.checkChildren(node, index).then((newIndex) => {
                            resolve(newIndex);
                        });
                    });
                };
                fun0(0);
            });
            // for (var i: number = 0; i < cnt; i++) {
            //     index++;
            //     var node: GTreeNode = folderNode.getChildAt(i);
            //     if (!node._cell) {
            //         this.createCell(node).then(() => {
            //             fun1();
            //         });
            //     }
            //     if (!node._cell.parent)
            //         this.addChildAt(node._cell, index);
            //     if (node.isFolder && node.expanded)
            //         index = this.checkChildren(node, index);
            // }
            // return index;
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
        __cellMouseDown(evt, curTarget) {
            const owner = GObject.cast(curTarget);
            if (!owner)
                return;
            var node = owner._treeNode;
            if (!node)
                return;
            this._expandedStatusInEvt = node.expanded;
        }
        __expandedStateChanged(cc) {
            var node = cc.parent._treeNode;
            node.expanded = cc.selectedIndex == 1;
        }
        dispatchItemEvent(item, evt) {
            if (this._clickToExpand != 0) {
                var node = item._treeNode;
                if (node && node.isFolder && this._expandedStatusInEvt == node.expanded) {
                    if (this._clickToExpand == 2) ;
                    else
                        node.expanded = !node.expanded;
                }
            }
            super.dispatchItemEvent(item, evt);
        }
        setup_beforeAdd(buffer, beginPos) {
            return new Promise((resolve, reject) => {
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
                }
                if (buffer.readBool()) {
                    this.minWidth = buffer.readInt();
                    this.maxWidth = buffer.readInt();
                    this.minHeight = buffer.readInt();
                    this.maxHeight = buffer.readInt();
                }
                if (buffer.readBool()) {
                    f1 = buffer.readFloat();
                    f2 = buffer.readFloat();
                    this.setScale(f1, f2);
                }
                if (buffer.readBool()) {
                    f1 = buffer.readFloat();
                    f2 = buffer.readFloat();
                    this.setSkew(f1, f2);
                }
                if (buffer.readBool()) {
                    f1 = buffer.readFloat();
                    f2 = buffer.readFloat();
                    this.setPivot(f1, f2, buffer.readBool());
                }
                f1 = buffer.readFloat();
                if (f1 != 1) {
                    if (f1 > 1)
                        f1 = 1;
                    this.alpha = f1;
                }
                f1 = buffer.readFloat();
                if (f1 != 0)
                    this.rotation = f1;
                if (!buffer.readBool())
                    this.visible = false;
                // console.log("visible object ===>", this);
                if (!buffer.readBool()) {
                    this.touchable = false;
                }
                else {
                    this.touchable = true;
                }
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
                const fun0 = () => {
                    if (buffer.readBool()) //clipSoftness
                        buffer.skip(8);
                    if (buffer.version >= 2) {
                        this.scrollItemToViewOnClick = buffer.readBool();
                        this.foldInvisibleItems = buffer.readBool();
                    }
                    buffer.seek(beginPos, 8);
                    this._defaultItem = buffer.readS();
                    this.readItems(buffer).then(() => {
                        buffer.seek(beginPos, 9);
                        this._indent = buffer.readInt();
                        this._clickToExpand = buffer.readByte();
                        resolve();
                    });
                };
                var overflow = buffer.readByte();
                if (overflow == exports.OverflowType.Scroll) {
                    var savedPos = buffer.position;
                    buffer.seek(beginPos, 7);
                    this.setupScroll(buffer).then(() => {
                        buffer.position = savedPos;
                        fun0();
                    });
                }
                else {
                    this.setupOverflow(overflow);
                    fun0();
                }
            });
        }
        readItems(buffer) {
            return new Promise((resolve, reject) => {
                var cnt;
                var nextPos;
                var str;
                var isFolder;
                var lastNode;
                var level;
                var prevLevel = 0;
                cnt = buffer.readShort();
                const fun0 = (i) => {
                    if (i >= cnt) {
                        resolve();
                        return;
                    }
                    nextPos = buffer.readShort();
                    nextPos += buffer.position;
                    str = buffer.readS();
                    if (str == null) {
                        str = this.defaultItem;
                        if (!str) {
                            buffer.position = nextPos;
                            fun0(++i);
                            return;
                        }
                    }
                    isFolder = buffer.readBool();
                    level = buffer.readByte();
                    var node = new GTreeNode(isFolder, str);
                    node.expanded = true;
                    if (i == 0) {
                        this._rootNode.addChild(node).then(() => {
                            lastNode = node;
                            prevLevel = level;
                            this.setupItem(buffer, node.cell);
                            buffer.position = nextPos;
                            fun0(++i);
                        });
                    }
                    else {
                        if (level > prevLevel)
                            lastNode.addChild(node).then(() => {
                                lastNode = node;
                                prevLevel = level;
                                this.setupItem(buffer, node.cell);
                                buffer.position = nextPos;
                                fun0(++i);
                            });
                        else if (level < prevLevel) {
                            for (var j = level; j <= prevLevel; j++)
                                lastNode = lastNode.parent;
                            lastNode.addChild(node).then(() => {
                                lastNode = node;
                                prevLevel = level;
                                this.setupItem(buffer, node.cell);
                                buffer.position = nextPos;
                                fun0(++i);
                            });
                        }
                        else
                            lastNode.parent.addChild(node).then(() => {
                                lastNode = node;
                                prevLevel = level;
                                this.setupItem(buffer, node.cell);
                                buffer.position = nextPos;
                                fun0(++i);
                            });
                    }
                };
                fun0(0);
                // for (i = 0; i < cnt; i++) {
                //     nextPos = buffer.readShort();
                //     nextPos += buffer.position;
                //     str = buffer.readS();
                //     if (str == null) {
                //         str = this.defaultItem;
                //         if (!str) {
                //             buffer.position = nextPos;
                //             continue;
                //         }
                //     }
                //     isFolder = buffer.readBool();
                //     level = buffer.readByte();
                //     var node: GTreeNode = new GTreeNode(isFolder, str);
                //     node.expanded = true;
                //     if (i == 0)
                //         this._rootNode.addChild(node);
                //     else {
                //         if (level > prevLevel)
                //             lastNode.addChild(node);
                //         else if (level < prevLevel) {
                //             for (var j: number = level; j <= prevLevel; j++)
                //                 lastNode = lastNode.parent;
                //             lastNode.addChild(node);
                //         }
                //         else
                //             lastNode.parent.addChild(node);
                //     }
                //     lastNode = node;
                //     prevLevel = level;
                //     this.setupItem(buffer, node.cell);
                //     buffer.position = nextPos;
                // }
            });
        }
    }
    var s_list = new Array();

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
                    this._contentPane.addRelation(this, exports.RelationType.Size);
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
                this._closeButton.offClick(this.closeEventHandler, this);
            this._closeButton = value;
            if (this._closeButton)
                this._closeButton.onClick(this.closeEventHandler, this);
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
            GRoot.inst.showWindow(this);
        }
        showOn(root) {
            root.showWindow(this);
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
                this.addRelation(r, exports.RelationType.Center_Center);
                this.addRelation(r, exports.RelationType.Middle_Middle);
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
                    UIPackage.createObjectFromURL(UIConfig.windowModalWaiting).then((obj) => {
                        this._modalWaitPane = obj;
                        this.layoutModalWaitPane();
                    });
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
        static resolveExtension(pi) {
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
                    case exports.ObjectType.Image:
                        return new GImage(GRoot.inst.scene, type);
                    case exports.ObjectType.MovieClip:
                        return new GMovieClip(GRoot.inst.scene, type);
                    case exports.ObjectType.Component:
                        return new GComponent(GRoot.inst.scene, type);
                    case exports.ObjectType.Text:
                        return new GBasicTextField(GRoot.inst.scene, type);
                    case exports.ObjectType.RichText:
                        return new GRichTextField(GRoot.inst.scene, type);
                    case exports.ObjectType.InputText:
                        return new GTextInput(GRoot.inst.scene, type);
                    case exports.ObjectType.Group:
                        return new GGroup(GRoot.inst.scene, type);
                    case exports.ObjectType.List:
                        return new GList(GRoot.inst.scene, type);
                    case exports.ObjectType.Graph:
                        return new GGraph(GRoot.inst.scene, type);
                    case exports.ObjectType.Loader:
                        // test
                        // if (UIObjectFactory.loaderType)
                        //     return new UIObjectFactory.loaderType();
                        // else
                        return new GLoader(GRoot.inst.scene, type);
                    case exports.ObjectType.Button:
                        return new GButton(GRoot.inst.scene, type);
                    case exports.ObjectType.Label:
                        return new GLabel(GRoot.inst.scene, type);
                    case exports.ObjectType.ProgressBar:
                        return new GProgressBar(GRoot.inst.scene, type);
                    case exports.ObjectType.Slider:
                        return new GSlider(GRoot.inst.scene, type);
                    case exports.ObjectType.ScrollBar:
                        return new GScrollBar(GRoot.inst.scene, type);
                    case exports.ObjectType.ComboBox:
                        return new GComboBox(GRoot.inst.scene, type);
                    case exports.ObjectType.Tree:
                        return new GTree(GRoot.inst.scene, type);
                    default:
                        return null;
                }
            }
            else {
                if (type.type == exports.PackageItemType.Component) {
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
    Decls.UIObjectFactory = UIObjectFactory;

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
                    if (pi && pi.type == exports.PackageItemType.Component)
                        di.childCount = this.collectComponentChildren(pi);
                }
                else {
                    di = { type: type };
                    if (type == exports.ObjectType.List) //list
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
                        if (pi.type == exports.PackageItemType.Component)
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

    class BitmapFont {
        constructor() {
            this.size = 0;
            this.glyphs = {};
        }
    }

    class Event {
    }

    /**
     * <p> <code>Byte</code> 类提供用于优化读取、写入以及处理二进制数据的方法和属性。</p>
     * <p> <code>Byte</code> 类适用于需要在字节层访问数据的高级开发人员。</p>
     */
    class Byte {
        /**
         * 创建一个 <code>Byte</code> 类的实例。
         * @param	data	用于指定初始化的元素数目，或者用于初始化的TypedArray对象、ArrayBuffer对象。如果为 null ，则预分配一定的内存空间，当可用空间不足时，优先使用这部分内存，如果还不够，则重新分配所需内存。
         */
        constructor(data = null) {
            /**@private 是否为小端数据。*/
            this._xd_ = true;
            /**@private */
            this._allocated_ = 8;
            /**@private */
            this._pos_ = 0;
            /**@private */
            this._length = 0;
            if (data) {
                this._u8d_ = new Uint8Array(data);
                this._d_ = new DataView(this._u8d_.buffer);
                this._length = this._d_.byteLength;
            }
            else {
                this._resizeBuffer(this._allocated_);
            }
        }
        /**
         * <p>获取当前主机的字节序。</p>
         * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。</p>
         * <p> <code>BIG_ENDIAN</code> ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。<br/>
         * <code>LITTLE_ENDIAN</code> ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
         * @return 当前系统的字节序。
         */
        static getSystemEndian() {
            if (!Byte._sysEndian) {
                var buffer = new ArrayBuffer(2);
                new DataView(buffer).setInt16(0, 256, true);
                Byte._sysEndian = (new Int16Array(buffer))[0] === 256 ? Byte.LITTLE_ENDIAN : Byte.BIG_ENDIAN;
            }
            return Byte._sysEndian;
        }
        /**
         * 获取此对象的 ArrayBuffer 数据，数据只包含有效数据部分。
         */
        get buffer() {
            var rstBuffer = this._d_.buffer;
            if (rstBuffer.byteLength === this._length)
                return rstBuffer;
            return rstBuffer.slice(0, this._length);
        }
        /**
         * <p> <code>Byte</code> 实例的字节序。取值为：<code>BIG_ENDIAN</code> 或 <code>BIG_ENDIAN</code> 。</p>
         * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。通过 <code>getSystemEndian</code> 可以获取当前系统的字节序。</p>
         * <p> <code>BIG_ENDIAN</code> ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。<br/>
         *  <code>LITTLE_ENDIAN</code> ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
         */
        get endian() {
            return this._xd_ ? Byte.LITTLE_ENDIAN : Byte.BIG_ENDIAN;
        }
        set endian(value) {
            this._xd_ = (value === Byte.LITTLE_ENDIAN);
        }
        /**
         * <p> <code>Byte</code> 对象的长度（以字节为单位）。</p>
         * <p>如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧；如果将长度设置为小于当前长度的值，将会截断该字节数组。</p>
         * <p>如果要设置的长度大于当前已分配的内存空间的字节长度，则重新分配内存空间，大小为以下两者较大者：要设置的长度、当前已分配的长度的2倍，并将原有数据拷贝到新的内存空间中；如果要设置的长度小于当前已分配的内存空间的字节长度，也会重新分配内存空间，大小为要设置的长度，并将原有数据从头截断为要设置的长度存入新的内存空间中。</p>
         */
        set length(value) {
            if (this._allocated_ < value)
                this._resizeBuffer(this._allocated_ = Math.floor(Math.max(value, this._allocated_ * 2)));
            else if (this._allocated_ > value)
                this._resizeBuffer(this._allocated_ = value);
            this._length = value;
        }
        get length() {
            return this._length;
        }
        /**@private */
        _resizeBuffer(len) {
            try {
                var newByteView = new Uint8Array(len);
                if (this._u8d_ != null) {
                    if (this._u8d_.length <= len)
                        newByteView.set(this._u8d_);
                    else
                        newByteView.set(this._u8d_.subarray(0, len));
                }
                this._u8d_ = newByteView;
                this._d_ = new DataView(newByteView.buffer);
            }
            catch (err) {
                throw "Invalid typed array length:" + len;
            }
        }
        /**
         * @private
         * <p>常用于解析固定格式的字节流。</p>
         * <p>先从字节流的当前字节偏移位置处读取一个 <code>Uint16</code> 值，然后以此值为长度，读取此长度的字符串。</p>
         * @return 读取的字符串。
         */
        getString() {
            return this.readString();
        }
        /**
         * <p>常用于解析固定格式的字节流。</p>
         * <p>先从字节流的当前字节偏移位置处读取一个 <code>Uint16</code> 值，然后以此值为长度，读取此长度的字符串。</p>
         * @return 读取的字符串。
         */
        readString() {
            return this._rUTF(this.getUint16());
        }
        /**
         * @private
         * <p>从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Float32Array</code> 对象并返回此对象。</p>
         * <p><b>注意：</b>返回的 Float32Array 对象，在 JavaScript 环境下，是原生的 HTML5 Float32Array 对象，对此对象的读取操作都是基于运行此程序的当前主机字节序，此顺序可能与实际数据的字节序不同，如果使用此对象进行读取，需要用户知晓实际数据的字节序和当前主机字节序，如果相同，可正常读取，否则需要用户对实际数据(Float32Array.buffer)包装一层 DataView ，使用 DataView 对象可按照指定的字节序进行读取。</p>
         * @param	start	开始位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Float32Array 对象。
         */
        getFloat32Array(start, len) {
            return this.readFloat32Array(start, len);
        }
        /**
         * 从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Float32Array</code> 对象并返回此对象。
         * @param	start	开始位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Float32Array 对象。
         */
        readFloat32Array(start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Float32Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        }
        /**
         * @private
         * 从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Uint8Array</code> 对象并返回此对象。
         * @param	start	开始位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Uint8Array 对象。
         */
        getUint8Array(start, len) {
            return this.readUint8Array(start, len);
        }
        /**
         * 从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Uint8Array</code> 对象并返回此对象。
         * @param	start	开始位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Uint8Array 对象。
         */
        readUint8Array(start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Uint8Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        }
        /**
         * @private
         * <p>从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Int16Array</code> 对象并返回此对象。</p>
         * <p><b>注意：</b>返回的 Int16Array 对象，在 JavaScript 环境下，是原生的 HTML5 Int16Array 对象，对此对象的读取操作都是基于运行此程序的当前主机字节序，此顺序可能与实际数据的字节序不同，如果使用此对象进行读取，需要用户知晓实际数据的字节序和当前主机字节序，如果相同，可正常读取，否则需要用户对实际数据(Int16Array.buffer)包装一层 DataView ，使用 DataView 对象可按照指定的字节序进行读取。</p>
         * @param	start	开始读取的字节偏移量位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Int16Array 对象。
         */
        getInt16Array(start, len) {
            return this.readInt16Array(start, len);
        }
        /**
         * 从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Int16Array</code> 对象并返回此对象。
         * @param	start	开始读取的字节偏移量位置。
         * @param	len		需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
         * @return  读取的 Uint8Array 对象。
         */
        readInt16Array(start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Int16Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        }
        /**
         * @private
         * 从字节流的当前字节偏移位置处读取一个 IEEE 754 单精度（32 位）浮点数。
         * @return 单精度（32 位）浮点数。
         */
        getFloat32() {
            return this.readFloat32();
        }
        /**
         * 从字节流的当前字节偏移位置处读取一个 IEEE 754 单精度（32 位）浮点数。
         * @return 单精度（32 位）浮点数。
         */
        readFloat32() {
            if (this._pos_ + 4 > this._length)
                throw "getFloat32 error - Out of bounds";
            var v = this._d_.getFloat32(this._pos_, this._xd_);
            this._pos_ += 4;
            return v;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 IEEE 754 双精度（64 位）浮点数。
         * @return 双精度（64 位）浮点数。
         */
        getFloat64() {
            return this.readFloat64();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 IEEE 754 双精度（64 位）浮点数。
         * @return 双精度（64 位）浮点数。
         */
        readFloat64() {
            if (this._pos_ + 8 > this._length)
                throw "getFloat64 error - Out of bounds";
            var v = this._d_.getFloat64(this._pos_, this._xd_);
            this._pos_ += 8;
            return v;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入一个 IEEE 754 单精度（32 位）浮点数。
         * @param	value	单精度（32 位）浮点数。
         */
        writeFloat32(value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setFloat32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入一个 IEEE 754 双精度（64 位）浮点数。
         * @param	value	双精度（64 位）浮点数。
         */
        writeFloat64(value) {
            this._ensureWrite(this._pos_ + 8);
            this._d_.setFloat64(this._pos_, value, this._xd_);
            this._pos_ += 8;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 Int32 值。
         * @return Int32 值。
         */
        getInt32() {
            return this.readInt32();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 Int32 值。
         * @return Int32 值。
         */
        readInt32() {
            if (this._pos_ + 4 > this._length)
                throw "getInt32 error - Out of bounds";
            var float = this._d_.getInt32(this._pos_, this._xd_);
            this._pos_ += 4;
            return float;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 Uint32 值。
         * @return Uint32 值。
         */
        getUint32() {
            return this.readUint32();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 Uint32 值。
         * @return Uint32 值。
         */
        readUint32() {
            if (this._pos_ + 4 > this._length)
                throw "getUint32 error - Out of bounds";
            var v = this._d_.getUint32(this._pos_, this._xd_);
            this._pos_ += 4;
            return v;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入指定的 Int32 值。
         * @param	value	需要写入的 Int32 值。
         */
        writeInt32(value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setInt32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入 Uint32 值。
         * @param	value	需要写入的 Uint32 值。
         */
        writeUint32(value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setUint32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 Int16 值。
         * @return Int16 值。
         */
        getInt16() {
            return this.readInt16();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 Int16 值。
         * @return Int16 值。
         */
        readInt16() {
            if (this._pos_ + 2 > this._length)
                throw "getInt16 error - Out of bounds";
            var us = this._d_.getInt16(this._pos_, this._xd_);
            this._pos_ += 2;
            return us;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 Uint16 值。
         * @return Uint16 值。
         */
        getUint16() {
            return this.readUint16();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 Uint16 值。
         * @return Uint16 值。
         */
        readUint16() {
            if (this._pos_ + 2 > this._length)
                throw "getUint16 error - Out of bounds";
            var us = this._d_.getUint16(this._pos_, this._xd_);
            this._pos_ += 2;
            return us;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入指定的 Uint16 值。
         * @param	value	需要写入的Uint16 值。
         */
        writeUint16(value) {
            this._ensureWrite(this._pos_ + 2);
            this._d_.setUint16(this._pos_, value, this._xd_);
            this._pos_ += 2;
        }
        /**
         * 在字节流的当前字节偏移量位置处写入指定的 Int16 值。
         * @param	value	需要写入的 Int16 值。
         */
        writeInt16(value) {
            this._ensureWrite(this._pos_ + 2);
            this._d_.setInt16(this._pos_, value, this._xd_);
            this._pos_ += 2;
        }
        /**
         * @private
         * 从字节流的当前字节偏移量位置处读取一个 Uint8 值。
         * @return Uint8 值。
         */
        getUint8() {
            return this.readUint8();
        }
        /**
         * 从字节流的当前字节偏移量位置处读取一个 Uint8 值。
         * @return Uint8 值。
         */
        readUint8() {
            if (this._pos_ + 1 > this._length)
                throw "getUint8 error - Out of bounds";
            return this._u8d_[this._pos_++];
        }
        /**
         * 在字节流的当前字节偏移量位置处写入指定的 Uint8 值。
         * @param	value	需要写入的 Uint8 值。
         */
        writeUint8(value) {
            this._ensureWrite(this._pos_ + 1);
            this._d_.setUint8(this._pos_, value);
            this._pos_++;
        }
        /**
         * @internal
         * 从字节流的指定字节偏移量位置处读取一个 Uint8 值。
         * @param	pos	字节读取位置。
         * @return Uint8 值。
         */
        //TODO:coverage
        _getUInt8(pos) {
            return this._readUInt8(pos);
        }
        /**
         * @internal
         * 从字节流的指定字节偏移量位置处读取一个 Uint8 值。
         * @param	pos	字节读取位置。
         * @return Uint8 值。
         */
        //TODO:coverage
        _readUInt8(pos) {
            return this._d_.getUint8(pos);
        }
        /**
         * @internal
         * 从字节流的指定字节偏移量位置处读取一个 Uint16 值。
         * @param	pos	字节读取位置。
         * @return Uint16 值。
         */
        //TODO:coverage
        _getUint16(pos) {
            return this._readUint16(pos);
        }
        /**
         * @internal
         * 从字节流的指定字节偏移量位置处读取一个 Uint16 值。
         * @param	pos	字节读取位置。
         * @return Uint16 值。
         */
        //TODO:coverage
        _readUint16(pos) {
            return this._d_.getUint16(pos, this._xd_);
        }
        /**
         * @internal
         * 使用 getFloat32() 读取6个值，用于创建并返回一个 Matrix 对象。
         * @return  Matrix 对象。
         */
        //TODO:coverage
        _getMatrix() {
            return this._readMatrix();
        }
        /**
         * @internal
         * 使用 getFloat32() 读取6个值，用于创建并返回一个 Matrix 对象。
         * @return  Matrix 对象。
         */
        //TODO:coverage
        _readMatrix() {
            var rst = new Phaser.GameObjects.Components.TransformMatrix(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            return rst;
        }
        /**
         * @private
         * 读取指定长度的 UTF 型字符串。
         * @param	len 需要读取的长度。
         * @return 读取的字符串。
         */
        _rUTF(len) {
            var max = this._pos_ + len, c, c2, c3, f = String.fromCharCode;
            var u = this._u8d_;
            var strs = [];
            var n = 0;
            strs.length = 1000;
            while (this._pos_ < max) {
                c = u[this._pos_++];
                if (c < 0x80) {
                    if (c != 0)
                        //v += f(c);\
                        strs[n++] = f(c);
                }
                else if (c < 0xE0) {
                    //v += f(((c & 0x3F) << 6) | (u[_pos_++] & 0x7F));
                    strs[n++] = f(((c & 0x3F) << 6) | (u[this._pos_++] & 0x7F));
                }
                else if (c < 0xF0) {
                    c2 = u[this._pos_++];
                    //v += f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[_pos_++] & 0x7F));
                    strs[n++] = f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[this._pos_++] & 0x7F));
                }
                else {
                    c2 = u[this._pos_++];
                    c3 = u[this._pos_++];
                    //v += f(((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 << 6) & 0x7F) | (u[_pos_++] & 0x7F));
                    const _code = ((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 & 0x7F) << 6) | (u[this._pos_++] & 0x7F);
                    if (_code >= 0x10000) {
                        const _offset = _code - 0x10000;
                        const _lead = 0xd800 | (_offset >> 10);
                        const _trail = 0xdc00 | (_offset & 0x3ff);
                        strs[n++] = f(_lead);
                        strs[n++] = f(_trail);
                    }
                    else {
                        strs[n++] = f(_code);
                    }
                }
            }
            strs.length = n;
            return strs.join('');
            //return v;
        }
        /**
         * @private
         * 读取 <code>len</code> 参数指定的长度的字符串。
         * @param	len	要读取的字符串的长度。
         * @return 指定长度的字符串。
         */
        //TODO:coverage
        getCustomString(len) {
            return this.readCustomString(len);
        }
        /**
         * @private
         * 读取 <code>len</code> 参数指定的长度的字符串。
         * @param	len	要读取的字符串的长度。
         * @return 指定长度的字符串。
         */
        //TODO:coverage
        readCustomString(len) {
            var v = "", ulen = 0, c, c2, f = String.fromCharCode;
            var u = this._u8d_;
            while (len > 0) {
                c = u[this._pos_];
                if (c < 0x80) {
                    v += f(c);
                    this._pos_++;
                    len--;
                }
                else {
                    ulen = c - 0x80;
                    this._pos_++;
                    len -= ulen;
                    while (ulen > 0) {
                        c = u[this._pos_++];
                        c2 = u[this._pos_++];
                        v += f((c2 << 8) | c);
                        ulen--;
                    }
                }
            }
            return v;
        }
        /**
         * 移动或返回 Byte 对象的读写指针的当前位置（以字节为单位）。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
         */
        get pos() {
            return this._pos_;
        }
        set pos(value) {
            this._pos_ = value;
            //$MOD byteOffset是只读的，这里进行赋值没有意义。
            //_d_.byteOffset = value;
        }
        /**
         * 可从字节流的当前位置到末尾读取的数据的字节数。
         */
        get bytesAvailable() {
            return this._length - this._pos_;
        }
        /**
         * 清除字节数组的内容，并将 length 和 pos 属性重置为 0。调用此方法将释放 Byte 实例占用的内存。
         */
        clear() {
            this._pos_ = 0;
            this.length = 0;
        }
        /**
         * @internal
         * 获取此对象的 ArrayBuffer 引用。
         * @return
         */
        __getBuffer() {
            //this._d_.buffer.byteLength = this.length;
            return this._d_.buffer;
        }
        /**
         * <p>将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的字为字符串添加前缀。</p>
         * <p>对应的读取方法为： getUTFBytes 。</p>
         * @param value 要写入的字符串。
         */
        writeUTFBytes(value) {
            // utf8-decode
            value = value + "";
            for (var i = 0, sz = value.length; i < sz; i++) {
                var c = value.charCodeAt(i);
                if (c <= 0x7F) {
                    this.writeByte(c);
                }
                else if (c <= 0x7FF) {
                    //优化为直接写入多个字节，而不必重复调用writeByte，免去额外的调用和逻辑开销。
                    this._ensureWrite(this._pos_ + 2);
                    this._u8d_.set([0xC0 | (c >> 6), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 2;
                }
                else if (c >= 0xD800 && c <= 0xDBFF) {
                    i++;
                    const c2 = value.charCodeAt(i);
                    if (!Number.isNaN(c2) && c2 >= 0xDC00 && c2 <= 0xDFFF) {
                        const _p1 = (c & 0x3FF) + 0x40;
                        const _p2 = c2 & 0x3FF;
                        const _b1 = 0xF0 | ((_p1 >> 8) & 0x3F);
                        const _b2 = 0x80 | ((_p1 >> 2) & 0x3F);
                        const _b3 = 0x80 | ((_p1 & 0x3) << 4) | ((_p2 >> 6) & 0xF);
                        const _b4 = 0x80 | (_p2 & 0x3F);
                        this._ensureWrite(this._pos_ + 4);
                        this._u8d_.set([_b1, _b2, _b3, _b4], this._pos_);
                        this._pos_ += 4;
                    }
                }
                else if (c <= 0xFFFF) {
                    this._ensureWrite(this._pos_ + 3);
                    this._u8d_.set([0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 3;
                }
                else {
                    this._ensureWrite(this._pos_ + 4);
                    this._u8d_.set([0xF0 | (c >> 18), 0x80 | ((c >> 12) & 0x3F), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 4;
                }
            }
        }
        /**
         * <p>将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节。</p>
         * <p>对应的读取方法为： getUTFString 。</p>
         * @param	value 要写入的字符串值。
         */
        writeUTFString(value) {
            var tPos = this.pos;
            this.writeUint16(1);
            this.writeUTFBytes(value);
            var dPos = this.pos - tPos - 2;
            //trace("writeLen:",dPos,"pos:",tPos);
            this._d_.setUint16(tPos, dPos, this._xd_);
        }
        /**
         * <p>将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 32 位整数），然后写入表示字符串字符的字节。</p>
         * @param	value 要写入的字符串值。
         */
        writeUTFString32(value) {
            var tPos = this.pos;
            this.writeUint32(1);
            this.writeUTFBytes(value);
            var dPos = this.pos - tPos - 4;
            //trace("writeLen:",dPos,"pos:",tPos);
            this._d_.setUint32(tPos, dPos, this._xd_);
        }
        /**
         * @private
         * 读取 UTF-8 字符串。
         * @return 读取的字符串。
         */
        readUTFString() {
            //var tPos:int = pos;
            //var len:int = getUint16();
            ////trace("readLen:"+len,"pos,",tPos);
            return this.readUTFBytes(this.getUint16());
        }
        /**
         * @private
         */
        readUTFString32() {
            return this.readUTFBytes(this.getUint32());
        }
        /**
         * <p>从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是一个无符号的短整型（以此字节表示要读取的长度）。</p>
         * <p>对应的写入方法为： writeUTFString 。</p>
         * @return 读取的字符串。
         */
        getUTFString() {
            return this.readUTFString();
        }
        /**
         * @private
         * 读字符串，必须是 writeUTFBytes 方法写入的字符串。
         * @param len	要读的buffer长度，默认将读取缓冲区全部数据。
         * @return 读取的字符串。
         */
        readUTFBytes(len = -1) {
            if (len === 0)
                return "";
            var lastBytes = this.bytesAvailable;
            if (len > lastBytes)
                throw "readUTFBytes error - Out of bounds";
            len = len > 0 ? len : lastBytes;
            return this._rUTF(len);
        }
        /**
         * <p>从字节流中读取一个由 length 参数指定的长度的 UTF-8 字节序列，并返回一个字符串。</p>
         * <p>一般读取的是由 writeUTFBytes 方法写入的字符串。</p>
         * @param len	要读的buffer长度，默认将读取缓冲区全部数据。
         * @return 读取的字符串。
         */
        getUTFBytes(len = -1) {
            return this.readUTFBytes(len);
        }
        /**
         * <p>在字节流中写入一个字节。</p>
         * <p>使用参数的低 8 位。忽略高 24 位。</p>
         * @param	value
         */
        writeByte(value) {
            this._ensureWrite(this._pos_ + 1);
            this._d_.setInt8(this._pos_, value);
            this._pos_ += 1;
        }
        /**
         * <p>从字节流中读取带符号的字节。</p>
         * <p>返回值的范围是从 -128 到 127。</p>
         * @return 介于 -128 和 127 之间的整数。
         */
        readByte() {
            if (this._pos_ + 1 > this._length)
                throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        }
        /**
         * @private
         * 从字节流中读取带符号的字节。
         */
        getByte() {
            return this.readByte();
        }
        /**
         * @internal
         * <p>保证该字节流的可用长度不小于 <code>lengthToEnsure</code> 参数指定的值。</p>
         * @param	lengthToEnsure	指定的长度。
         */
        _ensureWrite(lengthToEnsure) {
            if (this._length < lengthToEnsure)
                this._length = lengthToEnsure;
            if (this._allocated_ < lengthToEnsure)
                this.length = lengthToEnsure;
        }
        /**
         * <p>将指定 arraybuffer 对象中的以 offset 为起始偏移量， length 为长度的字节序列写入字节流。</p>
         * <p>如果省略 length 参数，则使用默认长度 0，该方法将从 offset 开始写入整个缓冲区；如果还省略了 offset 参数，则写入整个缓冲区。</p>
         * <p>如果 offset 或 length 小于0，本函数将抛出异常。</p>
         * @param	arraybuffer	需要写入的 Arraybuffer 对象。
         * @param	offset		Arraybuffer 对象的索引的偏移量（以字节为单位）
         * @param	length		从 Arraybuffer 对象写入到 Byte 对象的长度（以字节为单位）
         */
        writeArrayBuffer(arraybuffer, offset = 0, length = 0) {
            if (offset < 0 || length < 0)
                throw "writeArrayBuffer error - Out of bounds";
            if (length == 0)
                length = arraybuffer.byteLength - offset;
            this._ensureWrite(this._pos_ + length);
            var uint8array = new Uint8Array(arraybuffer);
            this._u8d_.set(uint8array.subarray(offset, offset + length), this._pos_);
            this._pos_ += length;
        }
        /**
         * 读取ArrayBuffer数据
         * @param	length
         * @return
         */
        readArrayBuffer(length) {
            var rst;
            rst = this._u8d_.buffer.slice(this._pos_, this._pos_ + length);
            this._pos_ = this._pos_ + length;
            return rst;
        }
    }
    /**
     * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。通过 <code>getSystemEndian</code> 可以获取当前系统的字节序。</p>
     * <p> <code>BIG_ENDIAN</code> ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。<br/>
     * <code>LITTLE_ENDIAN</code> ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
     */
    Byte.BIG_ENDIAN = "bigEndian";
    /**
     * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。通过 <code>getSystemEndian</code> 可以获取当前系统的字节序。</p>
     * <p> <code>LITTLE_ENDIAN</code> ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。<br/>
     * <code>BIG_ENDIAN</code> ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。</p>
     */
    Byte.LITTLE_ENDIAN = "littleEndian";
    /**@private */
    Byte._sysEndian = null;

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

    /**
         * <p><code>Handler</code> 是事件处理器类。</p>
         * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
         * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
         */
    class Handler {
        /**
         * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
         * @param	caller 执行域。
         * @param	method 处理函数。
         * @param	args 函数参数。
         * @param	once 是否只执行一次。
         */
        constructor(caller = null, method = null, args = null, once = false) {
            /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
            this.once = false;
            /**@private */
            this._id = 0;
            this.setTo(caller, method, args, once);
        }
        /**
         * 设置此对象的指定属性值。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
         * @return  返回 handler 本身。
         */
        setTo(caller, method, args, once = false) {
            this._id = Handler._gid++;
            this.caller = caller;
            this.method = method;
            this.args = args;
            this.once = once;
            return this;
        }
        /**
         * 执行处理器。
         */
        run() {
            if (this.method == null)
                return null;
            var id = this._id;
            var result = this.method.apply(this.caller, this.args);
            this._id === id && this.once && this.recover();
            return result;
        }
        /**
         * 执行处理器，并携带额外数据。
         * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
         */
        runWith(data) {
            if (this.method == null)
                return null;
            var id = this._id;
            let result;
            if (data == null)
                result = this.method.apply(this.caller, this.args);
            else if (!this.args && !data.unshift)
                result = this.method.call(this.caller, data);
            else if (this.args)
                result = this.method.apply(this.caller, this.args.concat(data));
            else
                result = this.method.apply(this.caller, data);
            this._id === id && this.once && this.recover();
            return result;
        }
        /**
         * 清理对象引用。
         */
        clear() {
            this.caller = null;
            this.method = null;
            this.args = null;
            return this;
        }
        /**
         * 清理并回收到 Handler 对象池内。
         */
        recover() {
            if (this._id > 0) {
                this._id = 0;
                Handler._pool.push(this.clear());
            }
        }
        /**
         * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
         * @return  返回创建的handler实例。
         */
        static create(caller, method, args = null, once = true) {
            if (Handler._pool.length)
                return Handler._pool.pop().setTo(caller, method, args, once);
            return new Handler(caller, method, args, once);
        }
    }
    /**@private handler对象池*/
    Handler._pool = [];
    /**@private */
    Handler._gid = 1;

    exports.AsyncOperation = AsyncOperation;
    exports.BitmapFont = BitmapFont;
    exports.Byte = Byte;
    exports.ByteBuffer = ByteBuffer;
    exports.ChildHitArea = ChildHitArea;
    exports.ColorMatrix = ColorMatrix;
    exports.Controller = Controller;
    exports.DOMEventManager = DOMEventManager;
    exports.DefaultUIStageOptions = DefaultUIStageOptions;
    exports.DisplayObjectEvent = DisplayObjectEvent;
    exports.DragDropManager = DragDropManager;
    exports.EaseType = EaseType;
    exports.Event = Event;
    exports.GButton = GButton;
    exports.GComboBox = GComboBox;
    exports.GComponent = GComponent;
    exports.GGraph = GGraph;
    exports.GGroup = GGroup;
    exports.GImage = GImage;
    exports.GLabel = GLabel;
    exports.GList = GList;
    exports.GLoader = GLoader;
    exports.GMovieClip = GMovieClip;
    exports.GObject = GObject;
    exports.GObjectPool = GObjectPool;
    exports.GPath = GPath;
    exports.GPathPoint = GPathPoint;
    exports.GProgressBar = GProgressBar;
    exports.GRichTextField = GRichTextField;
    exports.GRoot = GRoot;
    exports.GScrollBar = GScrollBar;
    exports.GSlider = GSlider;
    exports.GTextField = GTextField;
    exports.GTextInput = GTextInput;
    exports.GTree = GTree;
    exports.GTreeNode = GTreeNode;
    exports.GTween = GTween;
    exports.GTweener = GTweener;
    exports.Graphics = Graphics;
    exports.Handler = Handler;
    exports.HitArea = HitArea;
    exports.Image = Image;
    exports.InteractiveEvent = InteractiveEvent;
    exports.MovieClip = MovieClip;
    exports.PackageItem = PackageItem;
    exports.PixelHitTest = PixelHitTest;
    exports.PixelHitTestData = PixelHitTestData;
    exports.PopupMenu = PopupMenu;
    exports.ScrollPane = ScrollPane;
    exports.ToolSet = ToolSet;
    exports.Transition = Transition;
    exports.TranslationHelper = TranslationHelper;
    exports.TweenManager = TweenManager;
    exports.TweenValue = TweenValue;
    exports.UBBParser = UBBParser;
    exports.UIConfig = UIConfig;
    exports.UIObjectFactory = UIObjectFactory;
    exports.UIPackage = UIPackage;
    exports.UIStage = UIStage;
    exports.Window = Window;
    exports.evaluateEase = evaluateEase;
    exports.fillImage = fillImage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fairygui.js.map
