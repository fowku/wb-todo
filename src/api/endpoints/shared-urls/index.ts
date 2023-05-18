import { ENDPOINT_PORTAL_DEV, ENDPOINT_PORTAL_PROD } from './urls';

export const getPortalEndpoint = (): string =>
  process.env.NODE_ENV !== 'production'
    ? ENDPOINT_PORTAL_DEV
    : ENDPOINT_PORTAL_PROD;

export const translationsEndpoint = `${getPortalEndpoint()}/I18N`;
