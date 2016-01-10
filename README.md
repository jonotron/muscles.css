muscles.css
===========

A flexbox based modular layout css toolkit. Easily add flexbox layouts to your
app or site without having to write css.

Inspired by [inuitcss layout](https://github.com/inuitcss/objects.layout) and
inuit style css.

**Disclaimer**: This is very much a work in progress and I do not recommend
using it in production just yet.

Goals
-----

The goals of this are to provide a simple, flexible, modular set of classes
that can be quickly added to your html. 

* be as easy to use as any common grid system
* require very little superfluous markup (ideally none) allowing for style on 
  flex containers and items when possible
* be usable for general page/app layout and specific ui/component layout
* use modular approach to css class names

Examples
--------

See the documentation: http://jonotron.github.io/muscles.css/styleguide/

Recommended Reading
-------------------

[Building and shipping functional CSS](https://blog.colepeters.com/building-and-shipping-functional-css/) is a great overview of the value of functional, single purpose CSS classes including several real world examples and objective stats.

[More transparent UI code with namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) introduces the concept of CSS class namespaces (e.g. the utility namespace used frequently in muscles.css)

Todo
----

Obviously this needs more documentation, but you can try it out by including
the `dist/muscles.css` file in your html page (see `example/index.html`) for
some usage examples.
