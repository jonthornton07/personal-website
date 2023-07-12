export interface Page {
    route: string,
    name: string
}

export const home: Page = {
    route: "/",
    name : "HOME"
}

export const profile: Page = {
    route: "/resume",
    name : "Resume"
}

export const blogs: Page = {
    route: "/blogs",
    name : "BLOGS"
}

export const activePages = [home, profile, blogs]