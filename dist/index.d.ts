import type { ImageConfig, ImageState, DOPComponent } from "./types.js";
export type { Action, DOPComponent, ImageConfig, ImageDecoding, ImageLoading, ImageObjectFit, ImageState, } from "./types.js";
export declare function createImage(config: ImageConfig): DOPComponent<ImageState>;
export declare function renderImage(config: ImageConfig, overrides?: Partial<ImageState>): string;
//# sourceMappingURL=index.d.ts.map