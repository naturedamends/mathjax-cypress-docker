const crypto = require('crypto')

const routes = [
    "/post/emoji-support/",
    "/post/markdown-syntax/",
    "/post/math-typesetting/",
    "/post/placeholder-text/",
    "/post/rich-content/",
    "/"
]

const routeToHash = (route)  =>
    crypto.createHash('md5').update(route).digest('hex');

describe('Visuals', () => {
    routes.map(r => ({
        name: r,
        hash: routeToHash(r),
    })).forEach(r => it(r.hash + r.name, () => {
        cy.visit(r.name)
        const retryOptions = {
            limit: 5,
            delay: 500
        }
        cy.compareSnapshot(r.hash + r.name.replaceAll('/', '-'), 0, retryOptions)
    }))
})
