export type ImageLoading = "eager" | "lazy";
export type ImageDecoding = "sync" | "async" | "auto";
export type ImageObjectFit = "contain" | "cover" | "fill";
export interface ImageConfig {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    loading?: ImageLoading;
    decoding?: ImageDecoding;
    aspectRatio?: string;
    objectFit?: ImageObjectFit;
    sizes?: string;
    srcSet?: string;
}
export interface ImageState {
    src: string;
    alt: string;
    width: string;
    height: string;
    loading: ImageLoading;
    decoding: ImageDecoding;
    aspectRatio: string;
    objectFit: ImageObjectFit;
    sizes: string;
    srcSet: string;
    loaded: boolean;
    errored: boolean;
}
export type Action<S> = (state: S, ...args: any[]) => S;
export interface DOPComponent<S> {
    name: string;
    state: S;
    actions: Record<string, Action<S>>;
    render: (state: S) => string;
}
//# sourceMappingURL=types.d.ts.map