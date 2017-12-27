#!/usr/bin/env node

const inviteList = require('../dist/index').default;

inviteList()
  .then((result) => {
    console.log(`Found ${result.length} results`);
    console.log(result);
  })
  .catch(console.error);
