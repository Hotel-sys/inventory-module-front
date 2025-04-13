type IRoute = {
  path: string | ((id: string) => string);
};

const ENDPOINTS: Record<string, IRoute> = {
  USERS_LIST: {
    path: '/users',
  },
  USER_BY_ID: {
    path: (id) => `/users/${id}`,
  },
  COMPANY_LIST: {
    path: '/company',
  },
  DEPARTMENTS_LIST: {
    path: '/department',
  },
};

export function buildEndpoint(baseRoute: string, key: keyof typeof ENDPOINTS, id?: string) {
  if (id) {
    if (typeof ENDPOINTS[key].path === 'function') {
      return baseRoute.concat(ENDPOINTS[key].path(id));
    } else {
      throw new Error('cannot have id with endpoint that does not require id');
    }
  }

  return baseRoute.concat(ENDPOINTS[key].path as string);
}
