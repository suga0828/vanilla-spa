export const parseRequestURL = (url: string): any => {
  const [, resource, id, verb] = url.split('/');

  return { resource, id: id, verb: verb ? `/${verb}` : '' };
};
