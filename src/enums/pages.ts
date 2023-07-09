export interface Page {
    route: string,
    name: string
}

export const home: Page = {
    route: "/",
    name : "HOME"
}

export const profile: Page = {
    route: "/profile",
    name : "PROFILE"
}

export const blogs: Page = {
    route: "/blogs",
    name : "BLOGS"
}

export const activePages = [home, profile, blogs]