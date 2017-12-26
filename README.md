# postcss-bootstrap-4-grid

Generates [Bootstrap 4-style grid classes](http://getbootstrap.com/docs/4.0/layout/grid/) with PostCSS.

## Install

```
npm install --dev postcss-bootstrap-4-grid
```

OR

```
yarn add --dev postcss-boostrap-4-grid
```

## Usage

In your pre-processed CSS, place the following at-rule where you want your grid glasses to be generated.

```CSS
@bootstrap-4-grid;
```

Add this plugin to your PostCSS config:

```Javascript
module.exports = {
  plugins: {
    'postcss-bootstrap-4-grid': {
      // Your options, or empty to use the defaults.
    },
  },
};
```

### Options

#### Schema

```JSON
{
  "gridColumns": {
    "description": "The number of column units to generate CSS for.",
    "type": "number",
    "minimum": 2,
    "maximum": 48
  },
  "gridGutterWidth": {
    "description": "A CSS value (with a unit) representing the distance between columns.",
    "type": "string",
    "maxLength": 128
  },
  "containerMaxWidths": {
    "description": "The maximum widths of a container at a set of breakpoints.",
    "type": "object"
  },
  "gridBreakpoints": {
    "description": "A set of breakpoints for generating different layouts at differing view widths.",
    "type": "object"
  },
  "doOrderClasses": {
    "description": "Set to true to generate the classes that handle flexbox order.",
    "type": "boolean"
  },
  "doOffsetClasses": {
    "description": "Set to true to generate the classes handling column offsets.",
    "type": "boolean"
  }
}
```

#### Defaults

```Javascript
{
    gridColumns: 12,
    gridGutterWidth: '2rem',
    containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
    },
    gridBreakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
    },
    doOrderClasses: true,
    doOffsetClasses: true
}
```
