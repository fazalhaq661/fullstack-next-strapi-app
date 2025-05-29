/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
         topNav: {
           populate:{
             logo: {
               populate: {
                 image:{
                   fields: ["alternativeText", "url"]
                 }
               }
             },
             links: true,
             cta: true,
           } 
          
         }
        }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');
    await next();
  };
};
