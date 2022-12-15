/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BmBadge {
        "variant": string;
    }
    interface BmButton {
        "size": string;
        "variant": string;
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
    interface BmStack {
        "gap": 'large' | 'small' | 'none';
        "orientation": Orientation;
    }
    interface HsTextInput {
        "fontStyle": 'normal' | 'italic' | 'oblique' | 'inherit';
    }
}
export interface BmButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBmButtonElement;
}
declare global {
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
    interface HTMLBmHeaderElement extends Components.BmHeader, HTMLStencilElement {
    }
    var HTMLBmHeaderElement: {
        prototype: HTMLBmHeaderElement;
        new (): HTMLBmHeaderElement;
    };
    interface HTMLBmStackElement extends Components.BmStack, HTMLStencilElement {
    }
    var HTMLBmStackElement: {
        prototype: HTMLBmStackElement;
        new (): HTMLBmStackElement;
    };
    interface HTMLHsTextInputElement extends Components.HsTextInput, HTMLStencilElement {
    }
    var HTMLHsTextInputElement: {
        prototype: HTMLHsTextInputElement;
        new (): HTMLHsTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "bm-badge": HTMLBmBadgeElement;
        "bm-button": HTMLBmButtonElement;
        "bm-header": HTMLBmHeaderElement;
        "bm-stack": HTMLBmStackElement;
        "hs-text-input": HTMLHsTextInputElement;
    }
}
declare namespace LocalJSX {
    interface BmBadge {
        "variant"?: string;
    }
    interface BmButton {
        "onClicked"?: (event: BmButtonCustomEvent<any>) => void;
        "size"?: string;
        "variant"?: string;
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
    interface BmStack {
        "gap"?: 'large' | 'small' | 'none';
        "orientation"?: Orientation;
    }
    interface HsTextInput {
        "fontStyle"?: 'normal' | 'italic' | 'oblique' | 'inherit';
    }
    interface IntrinsicElements {
        "bm-badge": BmBadge;
        "bm-button": BmButton;
        "bm-header": BmHeader;
        "bm-stack": BmStack;
        "hs-text-input": HsTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bm-badge": LocalJSX.BmBadge & JSXBase.HTMLAttributes<HTMLBmBadgeElement>;
            "bm-button": LocalJSX.BmButton & JSXBase.HTMLAttributes<HTMLBmButtonElement>;
            "bm-header": LocalJSX.BmHeader & JSXBase.HTMLAttributes<HTMLBmHeaderElement>;
            "bm-stack": LocalJSX.BmStack & JSXBase.HTMLAttributes<HTMLBmStackElement>;
            "hs-text-input": LocalJSX.HsTextInput & JSXBase.HTMLAttributes<HTMLHsTextInputElement>;
        }
    }
}
