---
templateKey: blog-post
title: Programming Fundamentals Part 4 Values & Types
author: Alexander Fountain
image: /assets/pexels-photo-577585.jpeg
date: 2019-02-27T22:44:41.114Z
description: >-
  Part 4 of our programming fundamentals. Values & Types. You can do a lot of
  things with values while programming, but what you do with it might just
  determine the type of value it is!
tags:
  - Programming
  - React
  - GatsbyJS
  - Javascript
  - JS
  - Tutorial
  - Fundamentals
---
What you plan on doing with your values will determine the types of values you will be setting.

Use `Number` if you need to do math with the value.

Use `String` if you need to print out a string of characters. 

If a yes or no / true or false decision needs to be made use `Boolean`.

Values included directly in your code are literal values. String literals are surrounded by quotes I.E `"My String Value"`. Literal numbers and booleans are included without quotes I.E `26`, or `true`.

Some Javascript examples are:

```js
26;
"Your most excellent string";
'Single quotes work too!';
false;
true;
```

Besides those 3 value types some other common types would be functions, arrays, objects, and more! I will talk about these other types later on.

## Converting Between Types

Sometimes you're in a situation where you need to convert value types so you can use them in a different manner. 

If you have a string, but need to do math with it you can convert it to a number. If you have a number, but need to print it out you can convert it to a string. In Javascript this is called coercion. 

Below are some Javascript examples of coercing between types.

```js
var b = "26";
var c = Number( b );
console.log( b );	// "26"
console.log( c );	// 26
```

`Number(..)` is a built in Javascript function. It is an explicit coercion from one type to the number type. Sometimes though you want to compare different types of values because they can mean the same thing I.E: `"26"` and `26`. This is called implicit coercion, and Javascript will sometimes help you by automatically converting the value in your statement. 

Notice the example below. If we loose equals the string and number we get `true`. If we strict equals the string and number we get `false`.

```js
b = 26;
c = "26";
if(b == c){
    console.log('b does equal c.');
}
if(b !== c){
    console.log('b does not equal c');
}
```

![Programming fundamentals values and types strict and loose equals](/assets/screen-shot-2019-02-28-at-10.30.36-am.png "Programming fundamentals values and types strict and loose equals")
