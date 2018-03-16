addepar-toolbox
==============================================================================

This addon contains most of the CSS used in Addepar's component library (better name TBD).
Each addon in our component library will import specific CSS "modules" from this toolbox.

As a general rule, this toolbox is for standardized, well-designed, reusable UI styles
and components. One-off styling or "hacks" should live directly within your application.

The UI in this toolbox was created to be framework agnostic. It does not function without
code yet- it is pure styling, with selector hooks for interactivity.
It is up to the developer to create fully functioning UI in their own projects.
So for example, if you want to use a fully working dropdown component with Ember,
you would use our ember-addon version of that component (ice-pop/ice-dropdown).

Installation
------------------------------------------------------------------------------

```
ember install addepar-toolbox
```


Usage
------------------------------------------------------------------------------

Once installed, you can start importing the Sass files directly into your own CSS.

For example, assuming your app has the typical styles directory setup, you can
include all of the toolbox in your `app/styles/app.scss` file:
```
@import 'addepar-toolbox';
```

Or for a more specific UI piece:
```
@import 'addepar-toolbox/elements/button/index';
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd addepar-toolbox`
* `yarn install`

### Linting

* `./node_modules/sass-lint/bin/sass-lint.js -vq`

### Running tests

* Tests TBD, this is purely CSS with no JS

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
