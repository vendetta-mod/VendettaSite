// https://docs.astro.build/en/core-concepts/layouts/#markdownmdx-layouts

export default (props: any) => new Proxy(props, { get: (target, prop) => target[prop] ?? target.frontmatter?.[prop] });