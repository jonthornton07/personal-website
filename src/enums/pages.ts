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

let hiddenActivePages = [home, profile]

if (process.env.NODE_ENV == 'development') {
    hiddenActivePages = [...hiddenActivePages, blogs]
}

export const activePages = hiddenActivePages