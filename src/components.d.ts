/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BmAnchor {
        "variant": string;
    }
    interface BmBadge {
        "variant": string;
    }
    interface BmButton {
        "size": string;
        "variant": string;
    }
    interface BmCard {
    }
    interface BmHeader {
        "headerAriaAttributes": {};
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `6`.
         */
        "level": number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center';
    }
    interface BmList {
        "variant": string;
    }
    interface BmParagraph {
        "fontSize": 'small' | 'medium' | 'large';
        "textAlign": 'left' | 'right' | 'center';
    }
    interface BmRadioButtonGroup {
        "name": any;
    }
    interface BmRadioButtonItem {
        "value": any;
    }
    interface BmStack {
        "gap": 'large' | 'small' | 'none';
        "orientation": Orientation;
    }
    interface BmTab {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface BmTabList {
    }
    interface BmTabPanel {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface BmTabPanels {
    }
    interface BmTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex": number;
    }
    interface HsTextInput {
        "fontStyle": 'normal' | 'italic' | 'oblique' | 'inherit';
    }
}
export interface BmButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBmButtonElement;
}
export interface BmTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBmTabElement;
}
declare global {
    interface HTMLBmAnchorElement extends Components.BmAnchor, HTMLStencilElement {
    }
    var HTMLBmAnchorElement: {
        prototype: HTMLBmAnchorElement;
        new (): HTMLBmAnchorElement;
    };
    interface HTMLBmBadgeElement extends Components.BmBadge, HTMLStencilElement {
    }
    var HTMLBmBadgeElement: {
        prototype: HTMLBmBadgeElement;
        new (): HTMLBmBadgeElement;
    };
    interface HTMLBmButtonElement extends Components.BmButton, HTMLStencilElement {
    }
    var HTMLBmButtonElement: {
        prototype: HTMLBmButtonElement;
        new (): HTMLBmButtonElement;
    };
    interface HTMLBmCardElement extends Components.BmCard, HTMLStencilElement {
    }
    var HTMLBmCardElement: {
        prototype: HTMLBmCardElement;
        new (): HTMLBmCardElement;
    };
    interface HTMLBmHeaderElement extends Components.BmHeader, HTMLStencilElement {
    }
    var HTMLBmHeaderElement: {
        prototype: HTMLBmHeaderElement;
        new (): HTMLBmHeaderElement;
    };
    interface HTMLBmListElement extends Components.BmList, HTMLStencilElement {
    }
    var HTMLBmListElement: {
        prototype: HTMLBmListElement;
        new (): HTMLBmListElement;
    };
    interface HTMLBmParagraphElement extends Components.BmParagraph, HTMLStencilElement {
    }
    var HTMLBmParagraphElement: {
        prototype: HTMLBmParagraphElement;
        new (): HTMLBmParagraphElement;
    };
    interface HTMLBmRadioButtonGroupElement extends Components.BmRadioButtonGroup, HTMLStencilElement {
    }
    var HTMLBmRadioButtonGroupElement: {
        prototype: HTMLBmRadioButtonGroupElement;
        new (): HTMLBmRadioButtonGroupElement;
    };
    interface HTMLBmRadioButtonItemElement extends Components.BmRadioButtonItem, HTMLStencilElement {
    }
    var HTMLBmRadioButtonItemElement: {
        prototype: HTMLBmRadioButtonItemElement;
        new (): HTMLBmRadioButtonItemElement;
    };
    interface HTMLBmStackElement extends Components.BmStack, HTMLStencilElement {
    }
    var HTMLBmStackElement: {
        prototype: HTMLBmStackElement;
        new (): HTMLBmStackElement;
    };
    interface HTMLBmTabElement extends Components.BmTab, HTMLStencilElement {
    }
    var HTMLBmTabElement: {
        prototype: HTMLBmTabElement;
        new (): HTMLBmTabElement;
    };
    interface HTMLBmTabListElement extends Components.BmTabList, HTMLStencilElement {
    }
    var HTMLBmTabListElement: {
        prototype: HTMLBmTabListElement;
        new (): HTMLBmTabListElement;
    };
    interface HTMLBmTabPanelElement extends Components.BmTabPanel, HTMLStencilElement {
    }
    var HTMLBmTabPanelElement: {
        prototype: HTMLBmTabPanelElement;
        new (): HTMLBmTabPanelElement;
    };
    interface HTMLBmTabPanelsElement extends Components.BmTabPanels, HTMLStencilElement {
    }
    var HTMLBmTabPanelsElement: {
        prototype: HTMLBmTabPanelsElement;
        new (): HTMLBmTabPanelsElement;
    };
    interface HTMLBmTabsElement extends Components.BmTabs, HTMLStencilElement {
    }
    var HTMLBmTabsElement: {
        prototype: HTMLBmTabsElement;
        new (): HTMLBmTabsElement;
    };
    interface HTMLHsTextInputElement extends Components.HsTextInput, HTMLStencilElement {
    }
    var HTMLHsTextInputElement: {
        prototype: HTMLHsTextInputElement;
        new (): HTMLHsTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "bm-anchor": HTMLBmAnchorElement;
        "bm-badge": HTMLBmBadgeElement;
        "bm-box": HTMLBmBoxElement;
        "bm-button": HTMLBmButtonElement;
        "bm-card": HTMLBmCardElement;
        "bm-flex": HTMLBmFlexElement;
        "bm-header": HTMLBmHeaderElement;
        "bm-list": HTMLBmListElement;
        "bm-paragraph": HTMLBmParagraphElement;
        "bm-radio-button-group": HTMLBmRadioButtonGroupElement;
        "bm-radio-button-item": HTMLBmRadioButtonItemElement;
        "bm-stack": HTMLBmStackElement;
        "bm-tab": HTMLBmTabElement;
        "bm-tab-list": HTMLBmTabListElement;
        "bm-tab-panel": HTMLBmTabPanelElement;
        "bm-tab-panels": HTMLBmTabPanelsElement;
        "bm-tabs": HTMLBmTabsElement;
        "hs-text-input": HTMLHsTextInputElement;
    }
}
declare namespace LocalJSX {
    interface BmAnchor {
        "variant"?: string;
    }
    interface BmBadge {
        "variant"?: string;
    }
    interface BmButton {
        "onClicked"?: (event: BmButtonCustomEvent<any>) => void;
        "size"?: string;
        "variant"?: string;
    }
    interface BmCard {
    }
    interface BmHeader {
        "headerAriaAttributes"?: {};
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `6`.
         */
        "level"?: number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center';
    }
    interface BmList {
        "variant"?: string;
    }
    interface BmParagraph {
        "fontSize"?: 'small' | 'medium' | 'large';
        "textAlign"?: 'left' | 'right' | 'center';
    }
    interface BmRadioButtonGroup {
        "name"?: any;
    }
    interface BmRadioButtonItem {
        "value"?: any;
    }
    interface BmStack {
        "gap"?: 'large' | 'small' | 'none';
        "orientation"?: Orientation;
    }
    interface BmTab {
        "onTabClick"?: (event: BmTabCustomEvent<any>) => void;
    }
    interface BmTabList {
    }
    interface BmTabPanel {
    }
    interface BmTabPanels {
    }
    interface BmTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex"?: number;
    }
    interface HsTextInput {
        "fontStyle"?: 'normal' | 'italic' | 'oblique' | 'inherit';
    }
    interface IntrinsicElements {
        "bm-anchor": BmAnchor;
        "bm-badge": BmBadge;
        "bm-button": BmButton;
        "bm-card": BmCard;
        "bm-header": BmHeader;
        "bm-list": BmList;
        "bm-paragraph": BmParagraph;
        "bm-radio-button-group": BmRadioButtonGroup;
        "bm-radio-button-item": BmRadioButtonItem;
        "bm-stack": BmStack;
        "bm-tab": BmTab;
        "bm-tab-list": BmTabList;
        "bm-tab-panel": BmTabPanel;
        "bm-tab-panels": BmTabPanels;
        "bm-tabs": BmTabs;
        "hs-text-input": HsTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bm-anchor": LocalJSX.BmAnchor & JSXBase.HTMLAttributes<HTMLBmAnchorElement>;
            "bm-badge": LocalJSX.BmBadge & JSXBase.HTMLAttributes<HTMLBmBadgeElement>;
            "bm-button": LocalJSX.BmButton & JSXBase.HTMLAttributes<HTMLBmButtonElement>;
            "bm-card": LocalJSX.BmCard & JSXBase.HTMLAttributes<HTMLBmCardElement>;
            "bm-header": LocalJSX.BmHeader & JSXBase.HTMLAttributes<HTMLBmHeaderElement>;
            "bm-list": LocalJSX.BmList & JSXBase.HTMLAttributes<HTMLBmListElement>;
            "bm-paragraph": LocalJSX.BmParagraph & JSXBase.HTMLAttributes<HTMLBmParagraphElement>;
            "bm-radio-button-group": LocalJSX.BmRadioButtonGroup & JSXBase.HTMLAttributes<HTMLBmRadioButtonGroupElement>;
            "bm-radio-button-item": LocalJSX.BmRadioButtonItem & JSXBase.HTMLAttributes<HTMLBmRadioButtonItemElement>;
            "bm-stack": LocalJSX.BmStack & JSXBase.HTMLAttributes<HTMLBmStackElement>;
            "bm-tab": LocalJSX.BmTab & JSXBase.HTMLAttributes<HTMLBmTabElement>;
            "bm-tab-list": LocalJSX.BmTabList & JSXBase.HTMLAttributes<HTMLBmTabListElement>;
            "bm-tab-panel": LocalJSX.BmTabPanel & JSXBase.HTMLAttributes<HTMLBmTabPanelElement>;
            "bm-tab-panels": LocalJSX.BmTabPanels & JSXBase.HTMLAttributes<HTMLBmTabPanelsElement>;
            "bm-tabs": LocalJSX.BmTabs & JSXBase.HTMLAttributes<HTMLBmTabsElement>;
            "hs-text-input": LocalJSX.HsTextInput & JSXBase.HTMLAttributes<HTMLHsTextInputElement>;
        }
    }
}
