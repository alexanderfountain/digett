---
templateKey: blog-post
title: Programming Fundamentals part 2
author: Alexander Fountain
image: /assets/pexels-photo-574071.jpeg
date: 2019-02-26T23:20:13.690Z
description: >-
  Part 2 of programming fundamentals. Time to get dirty and dig into some
  Javascript examples!
tags:
  - Programming
  - Fundamentals
  - Tutorial
  - Javascript
  - JS
---
I'll be using Javascript for my examples as it's a language I'm trying to better learn my self and we can easily play with examples right in the development console of most browsers. I'll be using chrome.

Let's start by opening your browser. Type about:blank into the address bar, and make sure your developer console is open. In chrome you can open your developer tools with the shortcut Command+Option+i. 

Type this code in and see what happens. Remember that as soon as you hit enter the Javascript will run. To add new lines you must hold shift and enter at the same time.

```js
b = 11;
c = b + 19;
console.log( c );
```

You should see the value "30" printed in your developer console.

![Javascript programming fundamentals console.log()](/assets/screen-shot-2019-02-27-at-10.40.58-am.png "Javascript programming fundamentals console.log()")

So far we have seen how to output values, but how about input? Normally you would get input values from form values. For learning purposes let's use prompt(..) for our input values.

```js
year = prompt( "What year were you born?" );
console.log( year );
```

![Javascript programming fundamentals prompt(..)](/assets/screen-shot-2019-02-27-at-10.51.59-am.png "Javascript programming fundamentals prompt(..)")

This should output something like this:

![Javascript programming fundamentals year log](/assets/screen-shot-2019-02-27-at-10.51.32-am.png "Javascript programming fundamentals year log")

## Operators

Earlier we saw that `+` and `=` are operators. 

`+` performs mathematic addition. 

`=` is used for assignment. We first calculate the value on the right and then assign the value to the variable on the left of `=`

`var` is not an operator, but it is how you declare variables.

You should assign variables before they are used, but only once while in scope.

```js
var b = 30;  
b = b + 1;  
b = b * 2;
console.log( b );  
```

This should log `62`
