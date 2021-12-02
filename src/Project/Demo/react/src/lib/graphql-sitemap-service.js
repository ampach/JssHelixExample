import { GraphQLSitemapService } from '@sitecore-jss/sitecore-jss-react';
import config from '../temp/config';

const graphQLSitemapService = new GraphQLSitemapService({
  endpoint: config.graphqlEndpoint,
});

export { graphQLSitemapService };
