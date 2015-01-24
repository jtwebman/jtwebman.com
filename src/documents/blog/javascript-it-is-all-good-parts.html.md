---
title: "Javascript: It is All Good Parts"
layout: "post"
date: 2015-01-23 19:25:00 -8
author: "JT"
tags: "Javascript, Good Parts, Programming"
featureImage: "javascript-it-is-all-good-parts.png"
---

Here is just a few of the issues people have with Javascript and why I think they are strengths and are part of the Javascript goodness.

## Only 1 Number Type

So I pick the hardest one for first. As a programmer I do sometimes enjoy having many different types of number types that I can use in a language. There are many advantages to it especially when it comes down to decimal types vs floating type. I just feel like in the end it really isn't needed.

The advantage to one type is you don't have to worry about the math changing because you mixed the types. You also don't have to learn any other types but you do have to learn how floating points work. 0.1 + 0.2 does not equal 0.3 in floating point arithmetic. So please learn how they work.

So since floating points have rounding errors there are some tricks to getting around this depending on the math you are doing. You can just use whole numbers and then add the decimal place on display. You can also just use numbers represented in exponential notation or use any one of the many decimal libraries out there. There are many options and right tests really does help with this. The other advantage is it is easy to represent 1/3 just as early as 0.3.

## Global Variables are the Devil

Global variables are not a good thing. We have all learned this at one point in our programming career. The reason why I think they are a good thing in Javascript is it points out how unsecure and bad they are from the beginning. Many other languges have ways of creating global variables but hiding them away as oh that is just a static or shared variable or function. So it isn't just a Javascript issue.

Globals are bad no matter how you look at it. The fix I think is far easier in Javascript and that is using closures. Javascript has function scoped variables not block scope. So if you look at the example below you can see that because I am returning a function that is called right away the variables will stay local and all the methods will have access to it.

```javascript
'use strict';

var user = (function (fName, lName) {
  var firstName = fName,
  lastName = lName;

  this.getHello = function () {
    return 'Hello' + firstName + ' ' + lastName;
  };
}());
```

## Type Inference (0 == '') Returns True

This gets new programmers to Javascript actually this gets many senor programmers s well. The simple answer is you should be using === not == most of the time. Unless you right many test sticking to that is the best advice. This can be good if you know what you are doing as some times you want it to infere the type for you. Again the advantage is you have that flexibility though in this case be very careful! It isn't just a loaded gun pointing at your foot but a full on tan pointing at your head. Use with caution.

## No Types

This is probably the most controversial part of the language. Many people believe that types save you on errors. I would agree to some degree but they limit you on what you can do with the language as well. Types make you have to use crazy inheritance trees or jump through hopes to add flexibility to data. Javascript you can use JSLint or JSHint to check your code for changing types but then get the flexibility of objects that can change at runtime. I actually think this and object literals are the best parts of the language and why it will stay the top for a long time to come.

## Prototypical Inheritance

This is hard for people. Lots of people don't understand it. The easiest way to understand it is there are no classes in JavaScript, no types, just objects. So you can inherit form objects but not classes. You can have two different user classes and inherit from ether at runtime. I find this a huge strength as it makes it extremely flexible and you tend to wright far less code because of it. Javascript is the only language I know of like this so you are just going to have to learn it.

## Conclusion

In conclusion I think most developers don't like Javascript one of two reasons.
One, they never learned it and because they program in other languages like Java and the C's that look the same they assume it will work the same. When it doesn't they get mad and even will go as far as to write whole other languages that compile down to it so they don't have to learn it (cough cough CoffeeScript, TypeScript).

Two, unlearning their bad habits is hard. We all pick up bad habits when the languages just catch the issues early on but as I have outline in doing so limits the developer and makes them spend far more time implementing features. Take the time to unlearn, I did and it has opened my eyes to a whole new world.

In the end my motos isn't keep it simple stupid but rather keep it small stupid. Write small modules that talk to each other. They are always easier to test and refactor as the requirements change. This goes for any language including Javascript.
