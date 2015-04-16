Grimple.gs
===

Dead simple, customizable, lightweight, cross-browser responsive grid system.

**@version 0.1.0**

Drop-in the grid by picking up the stylesheet in `dist/` or include the `scss` files located under `src/`.

By default, Grimple has three grid states:

- desktop default (unprefixed column classes)
- tablet (768px and under)
- phone (640px and under)

Grimple is built as a desktop-first grid sytem. Columns are built with percentages with % gutters as margins, which ensures compatibility with IE7 and lower.

### Contributing

To start developing on your own, just run (assuming you have [Node.js](https://nodejs.org/) installed)

```
$ npm install           // installs the build dependencies
$ grunt dev             // automatically regenerate the files on save
```

You can easily customize your grid in the `grimple.variables.scss` by changinging the following variables:

```scss
$number-of-columns:     12;
$gutter:                1%;

$breakpoints: (
	(desktop),
	(tablet, 768px),
	(phone, 640px)
);
```

Remember that Grimple is a fluid system. It uses margins to separate column blocks; therefore, you _must_ provide a percentage as a gutter.

By default, the Grindle is setup as a desktop-first framework (considering lack of `@media` support in older browsers). You can change that behavior by switching the `mquery` mixin from `max-width` to `min-width`.