import qs from 'query-string';

const basicOptions: RequestInit = {
    mode: 'cors',
    headers: {},
};

export const GET = (url: RequestInfo) => fetch(url, { method: 'GET', ...basicOptions }).then(r => r.json());
export const GETQuery = (query: {}) => (url: string) => fetch(qs.stringifyUrl({ url, query }), { method: 'GET', ...basicOptions }).then(r => r.json());

export const POST = (url: RequestInfo, body: object) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    ...basicOptions
}).then(r => r.json());

export const PUT = (url: RequestInfo, body: object) => fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...basicOptions
}).then(r => r.json());

export const DELETE = (url: RequestInfo) => fetch(url, {
    method: 'DELETE',
    ...basicOptions
}).then(r => r.json());