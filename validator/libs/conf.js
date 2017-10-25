/* provide functions to support the  the data model validator */

'use strict';

var nconf = require('nconf');
var fs = require('fs');
var schema = require('./schema.js');

var ignoreWarnings = false;
var failWarnings = false;
var failErrors = true;
var ajvOptions = {};

module.exports = {
  /* export variables */
  nconf: nconf,
  ignoreWarnings: ignoreWarnings,
  failWarnings: failWarnings,
  failErrors: failErrors,
  ajvOptions: ajvOptions,

  /* load configuration from arg and config.json file (if any)*/
  load: function() {
    nconf.argv({
      'i': {
        alias: 'dmv:importSchemas',
        describe: 'Additional schemas that will be included' +
          ' during validation. Default imported schemas are: ' +
          ' common-schema.json, geometry-schema.json',
        type: 'array',
      },
      'w' : {
        alias: 'dmv:warnings',
        describe: 'How to handle FIWARE Data Models checks warnings.\n' +
          'true (default) - print warnings, but does not fail. \n' +
          'ignore -  do nothing and do not print warnings.\n' +
          ' fail - print warnings, and fails.',
        type: 'string',
      },
      'p' : {
        alias: 'dmv:path',
        describe: 'The path of FIWARE Data Model(s) to be validated ' +
          '(if recursion enabled, it will be the starting point of recursion)',
        demand: false,
        type: 'string',
      },
      'h' : {
        alias: 'help',
        describe: 'Print the help message',
        demand: false,
      },
    },'Usage: validate -p DataModel -w ignore ' +
        '-i [common-schema.json,geometry-schema.json]').file('config.json');
  },

  /* load default values
  TODO: fix issues with nconf.default */
  defaults: function() {
    if (nconf.get('dmv:importSchemas') == null) {
      nconf.set('dmv:importSchemas',
        [
          'common-schema.json',
          'geometry-schema.json'
        ]);
    }
    if (nconf.get('dmv:warnings') == null) {
      nconf.set('dmv:warnings', 'true');
    }
    if (nconf.get('dmv:warningChecks') == null) {
      nconf.set('dmv:warningChecks',
        [
          'schemaExist',
          'docExist',
          'docFolderExist',
          'exampleExist',
          'modelNameValid',
          'readmeExist'
        ]);
    }
    if (nconf.get('dmv:recursiveScan') == null) {
      nconf.set('dmv:recursiveScan', true);
    }
    if (nconf.get('dmv:validateExamples') == null) {
      nconf.set('dmv:validateExamples', true);
    }
    if (nconf.get('dmv:loadModelCommonSchemas') == null) {
      nconf.set('dmv:loadModelCommonSchemas', true);
    }
    if (nconf.get('dmv:importExternalSchemaFolders') == null) {
      nconf.set('dmv:importExternalSchemaFolders', true);
    }
    if (nconf.get('dmv:resolveRemoteSchemas') == null) {
      nconf.set('dmv:resolveRemoteSchemas', false);
    }
    if (nconf.get('dmv:ignoreFolders') == null) {
      nconf.set('dmv:ignoreFolders', ['harvest', 'auxiliary',]);
    }
    if (nconf.get('dmv:docFolders') == null) {
      nconf.set('dmv:docFolders', ['doc',]);
    }
    if (nconf.get('dmv:externalSchemaFolders') == null) {
      nconf.set('dmv:externalSchemaFolders', ['externalSchema',]);
    }
    if (nconf.get('ajv:missingRefs') == null) {
      nconf.set('ajv:missingRefs', 'true');
    }
    if (nconf.get('ajv:extendRefs') == null) {
      nconf.set('ajv:extendRefs', 'fail');
    }
    if (nconf.get('ajv:allErrors') == null) {
      nconf.set('ajv:allErrors', true);
    }
    nconf.set('dmv:ignoreFolders',
      nconf.get('dmv:ignoreFolders')
        .concat(['.git', 'node_modules', 'validator']));

    /* error and warnings management configuration */
    ignoreWarnings = (nconf.get('dmv:warnings') == 'ignore');
    failWarnings = (nconf.get('dmv:warnings') == 'fail');
    failErrors = (!nconf.get('ajv:allErrors'));
    /* set ajv options */
    ajvOptions = {
      // validation and reporting options:
      allErrors: nconf.get('ajv:allErrors'),
      schemas: {},
      // referenced schema options:
      missingRefs: nconf.get('ajv:missingRefs'),
      extendRefs: nconf.get('ajv:extendRefs'),
      loadSchema: schema.loadSchema,
    };
  },

  help: function() {
    if (nconf.get('h')) {
      nconf.stores.argv.showHelp();
      return;
    }
  },

  validate: function() {
    /* Check configuration validity */
    try {
      nconf.required(['dmv:path',]);
    } catch (err) {
      process.exitCode = -1;
      console.error('\n Invalid Configuration:' + err.message + '\n');
      nconf.stores.argv.showHelp();
      return;
    }
    /* Check if path is valid */
    try {
      // Query the entry
      var stats = fs.lstatSync(nconf.get('dmv:path'));

      // Is it a directory?
      if (!stats.isDirectory()) {
        throw new Error('The path passed must be a directory');
      }
    }
    catch (err) {
      process.exitCode = -1;
      console.error('\n Invalid Path: ' + err.message + '\n');
      return;
    }
  },
};
