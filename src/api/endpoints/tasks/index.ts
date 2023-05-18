import { getPortalEndpoint } from '../shared-urls';

export const getTasksEndpoint = (): string => `${getPortalEndpoint()}/tasks`;
