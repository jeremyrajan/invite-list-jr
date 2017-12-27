#!/usr/bin/env node

const inviteList = require('../dist/index').default;
const Table = require('cli-table');
const ALLOWED_COLS = ['user_id', 'name', 'inKm'];

/**
 * Initialize the cli-table, with allowed cols or all.
 * @param {Array<String>} cols 
 * @return {Object} table instance and cols which will be displayed.
 */
const initTable = (cols) => {
  cols = ALLOWED_COLS || cols;
  const table = new Table({
    head: cols
  });

  return {
    table, cols
  };
};

/**
 * Creates the table data
 * @param {Object} table cli table instance
 * @param {Array} cols Array of cols which will be displayed
 * @param {Array<object>} list Array of results from processing module
 * @return {String} Table string which will be logged.
 */
const createTableData = (table, cols, list) => {
  // for each item in the result set, push a table row
  // as per the allowed cols defined earlier.
  list.forEach(element => { table.push(cols.map(c => element[c])) });
  return table.toString();
};

// process and display.
inviteList()
  .then((result) => {
    const { table, cols } = initTable(Object.keys(result[0]));
    const tableString = createTableData(table, cols, result);
    console.log(`\nFound ${result.length} results.`);
    console.log(tableString);
  })
  .catch(console.error);
