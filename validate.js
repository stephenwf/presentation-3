const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const Ajv = require("ajv");
const YAML = require("yamljs");
const argv = require("yargs").argv;
const chalk = require("chalk");

const presentation3 = YAML.load(path.join(process.cwd(), "presentation3.yaml"));

const ajv = new Ajv({
  allErrors: true
});

ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"));

const validator = ajv.compile(presentation3);

function validate(data) {
  const valid = validator(data);
  if (!valid) {
    if (argv.verbose) {
      console.log(JSON.stringify(validator.errors, null, 2));
    }
    validator.errors.map(err => {
      console.log(
        `${chalk.yellow(err.dataPath)} >> ${chalk.green(err.keyword)} field ${
          err.message
        }"`
      );
    });
    process.exit(1);
  }
  console.log("🎉   All appears valid!");
  process.exit(0);
}

if (argv.path) {
  try {
    validate(require(path.resolve(path.join(process.cwd(), argv.path))));
  } catch (e) {
    validate(JSON.parse(fs.readFileSync(path.resolve(argv.path))));
  }
}

if (argv.url) {
  fetch(argv.url)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      validate(data);
    });
}
