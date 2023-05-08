import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PATHNAME } from './utils/constants';

export const client = sanityClient({
  projectId: (() => {
    if (PATHNAME === '/') {
      return process.env.REACT_APP_SANITY_PROJECT_ID;
    }
    if (PATHNAME === '/test') {
      return process.env.REACT_APP_SANITY_PROJECT_ID_TEST;
    }
    if (PATHNAME === '/testt') {
      return process.env.REACT_APP_SANITY_PROJECT_ID_TEST;
    }
    return null;
  })(),
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: (() => {
    if (PATHNAME === '/') {
      return process.env.REACT_APP_SANITY_TOKEN;
    }
    if (PATHNAME === '/test') {
      return process.env.REACT_APP_SANITY_TOKEN_TEST;
    }
    if (PATHNAME === '/testt') {
      return process.env.REACT_APP_SANITY_TOKEN_TEST;
    }
    return null;
  })(),
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
