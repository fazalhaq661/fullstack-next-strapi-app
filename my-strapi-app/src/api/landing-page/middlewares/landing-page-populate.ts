/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
     blocks:{
       on: {
         "blocks.hero":{
            populate: {
                links: true,
                image:{
                    fields: ["alternativeText", "url"]
                }
            }
         },
         "blocks.section-heading": true,
         "blocks.card-grid":{
            populate: {
              cards : true,
            }
         }
       }
     }
   }
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query.populate = populate
    await next();
  };
};
