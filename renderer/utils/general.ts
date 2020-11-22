export const isProd: boolean = process.env.NODE_ENV === 'production';
export const processRoute = function (route) {
    if (isProd) {
        return `app:// .${route}`;
    }
    return route;
}