# TrapeCSSoid
CSS-based trapezoid blocks<br>
**Demo: http://mirumee.github.io/trapecssoid/**

Instalation
-----------
Via Bower:
```shell
bower install trapecssoid --save-dev
```

Usage
-----
Import mixin into your project:
```scss
@import 'lib/trapecssoid';
```

Additional wrapper around your block is needed:

```html
<div class="trapecssoid">
    <div>Lorem ipsum</div>
</div>
```

Use the mixin:

```scss
.trapecssoid {
    @include trapecssoid($border: left, $peak: top, $angle: 15, $color: #3498DB);
}
```

Et voilà:

![alt text](https://raw.githubusercontent.com/mirumee/trapecssoid/master/static/usage-1.png)

Some other examples:

```html
<a href="#" class="trapecssoid">
    <span>Lorem ipsum</span>
</a>
```

```scss
.trapecssoid {
    @include trapecssoid(left, top, 15, #E67E22, $color-hover: lighten(#E67E22, 10%), $child-selector: span);
    @include trapecssoid(right, bottom, 15, #E67E22, lighten(#E67E22, 10%), span, $second: true);
}
```

![alt text](https://raw.githubusercontent.com/mirumee/trapecssoid/master/static/usage-2.png)

```html
<div href="#" class="trapecssoid">
    <div>Lorem ipsum</div>
</div>
```

```scss
.trapecssoid {
    @include trapecssoid(top, left, 3, white, $inset: true);
    @include trapecssoid(bottom, left, 1, white, $inset: true, $second: true);
    background: url("https://placekitten.com/g/1000/300") no-repeat;
    background-size: cover;
}
```

![alt text](https://raw.githubusercontent.com/mirumee/trapecssoid/master/static/usage-3.png)

More of these can be found on the **[demo](http://mirumee.github.io/trapecssoid/)** page
