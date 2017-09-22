'use strict';

module.exports = function scenariosForTest(test) {
  test.scenario = 'default';

  if (!test.attrs.flags.onlyStrict &&
      !test.attrs.flags.noStrict &&
      !test.attrs.flags.raw) {

    test.strictMode = false;

    const copy = Object.assign({}, test);
    copy.attrs = Object.assign({}, test.attrs);
    copy.attrs.description += ' (Strict Mode)'
    copy.contents = `"use strict";\n ${copy.contents}`;
    copy.scenario = 'strict mode';
    // test both modes
    return [test, copy];
  } else {
    return [test];
  }
};

