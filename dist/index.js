function esc(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
function dim(value) {
    if (value === undefined || value === "")
        return "";
    return typeof value === "number" ? String(value) : value;
}
export function createImage(config) {
    if (!config || typeof config.src !== "string" || config.src.length === 0) {
        throw new TypeError("[obix-component-image] createImage: `src` is required");
    }
    if (typeof config.alt !== "string") {
        throw new TypeError("[obix-component-image] createImage: `alt` is required (use \"\" for decorative images)");
    }
    const state = {
        src: config.src,
        alt: config.alt,
        width: dim(config.width),
        height: dim(config.height),
        loading: config.loading ?? "lazy",
        decoding: config.decoding ?? "auto",
        aspectRatio: config.aspectRatio ?? "",
        objectFit: config.objectFit ?? "cover",
        sizes: config.sizes ?? "",
        srcSet: config.srcSet ?? "",
        loaded: false,
        errored: false,
    };
    const actions = {
        setLoading: (s, eager) => ({
            ...s,
            loading: eager ? "eager" : "lazy",
        }),
        updateSrc: (s, src) => ({ ...s, src, loaded: false, errored: false }),
        updateAlt: (s, alt) => ({ ...s, alt }),
        onLoad: (s) => ({ ...s, loaded: true, errored: false }),
        onError: (s) => ({ ...s, loaded: false, errored: true }),
    };
    const render = (s) => {
        const style = [
            s.aspectRatio && `aspect-ratio:${s.aspectRatio}`,
            `object-fit:${s.objectFit}`,
        ]
            .filter(Boolean)
            .join(";");
        const attrs = [
            `src="${esc(s.src)}"`,
            `alt="${esc(s.alt)}"`,
            s.width && `width="${esc(s.width)}"`,
            s.height && `height="${esc(s.height)}"`,
            `loading="${s.loading}"`,
            `decoding="${s.decoding}"`,
            s.srcSet && `srcset="${esc(s.srcSet)}"`,
            s.sizes && `sizes="${esc(s.sizes)}"`,
            style && `style="${style}"`,
            s.alt === "" && `role="presentation"`,
        ].filter(Boolean);
        return `<img ${attrs.join(" ")}>`;
    };
    return { name: "ObixImage", state, actions, render };
}
export function renderImage(config, overrides = {}) {
    const image = createImage(config);
    return image.render({ ...image.state, ...overrides });
}
//# sourceMappingURL=index.js.map