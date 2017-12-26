#!/usr/bin/env node

const inviteList = require('../dist/index').default;

inviteList()
  .then(console.log)
  .catch(console.error);
