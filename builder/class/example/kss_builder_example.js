'use strict';

/**
 * The `kss/builder/class/example` module loads the kssBuilderExample
 * class, a `{@link KssBuilder}` using no templating.
 * ```
 * const kssBuilderExample = require('kss/builder/class/example');
 * ```
 * @module kss/builder/class/example
 */

// Import the KssBuilder class. We will extend it to scaffold our builder.
const KssBuilder = require('kss/builder'),
  path = require('path');

// Define "KssBuilderExample" as the name of our example builder class.
//
// Our builder is an instance of the KssBuilder object with additional
// functionality added by overriding the parent methods.
//
// See the docs for KssBuilder() for info about its parameters.
class KssBuilderExample extends KssBuilder {

  /**
   * Create a KssBuilderExample object.
   *
   * ```
   * const KssBuilderExample = require('kss/builder/class/example');
   * const builder = new KssBuilderExample();
   * ```
   *
   * @param {object} options The Yargs-like options this builder has.
   *   See https://github.com/bcoe/yargs/blob/master/README.md#optionskey-opt
   */
  constructor(options) {
    super(options);

    // Store the version of the builder API that the builder instance is
    // expecting; we will verify this in checkBuilder().
    this.API = '3.0';

    this.options['example-option'] = {
      alias: 'u',
      string: true,
      description: 'This is a custom command-line option used by this Builder.'
    };
  }

  /**
   * Clone a builder's files.
   *
   * The KssBuilder.clone() method is a simple and functional implementation; it
   * copies one directory to the specified location. An instance of KssBuilder
   * does not need to override this method, but it can if it needs to do something
   * more complicated.
   *
   * @param {string} builderPath Path to the builder to clone.
   * @param {string} destinationPath Path to the destination of the newly cloned
   *   builder.
   * @returns {Promise} A `Promise` object.
   */
  clone(builderPath, destinationPath) {
    // Note that, at this point, kssBuilderExample.init() has not been called.
    this.log('Example builder cloned to ' + destinationPath + '! (not really.)');

    return Promise.resolve();
  }

  /**
   * Initialize the style guide creation process.
   *
   * This method can be set by any KssBuilder sub-class to do any custom tasks
   * before the style guide is built.
   *
   * @returns {Promise} A `Promise` object resolving to `null`.
   */
  init() {
    // This example builder hard-codes the demo source.
    this.config.source = [path.resolve('..', 'demo')];

    // A real builder should initialize the templating system being used by this
    // builder. For example, kssBuilderHandlebars loads and initializes the
    // Handlebars templating system.
    this.warning = ' (not really.)';

    return Promise.resolve();
  }

  /**
   * Build the HTML files of the style guide given a KssStyleGuide object.
   *
   * @param {KssStyleGuide} styleGuide The KSS style guide in object format.
   * @returns {Promise} A `Promise` object.
   */
  build(styleGuide) {
    styleGuide.sections();
    this.log('...Building the demo style guide.' + this.warning);

    return Promise.resolve();
  }
}

// Export our "kssBuilderExample" object.
module.exports = KssBuilderExample;
