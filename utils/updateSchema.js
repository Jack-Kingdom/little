"use strict";

import fs from 'fs'
import path from 'path'
import fetchSchema from 'fetch-graphql-schema'
import config from '../config'

const schemaPath = path.resolve(__dirname, '../graphql.schema.json');
fetchSchema(config.backend_url + '/api/graphql').then(schemaJSON => fs.writeFileSync(schemaPath, schemaJSON));

console.log('Wrote ' + schemaPath);

