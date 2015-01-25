---
title: "Javascript: It is All Good Parts"
layout: "post"
date: 2015-01-23 19:25:00 -8
author: "JT"
tags: "Javascript, Good Parts, Programming"
featureImage: "javascript-it-is-all-good-parts.png"
---

Here is just a few of the issues people have with Javascript and why I think they are all good parts.

## Number Type

So I pick the hardest one first, as a programmer I do sometimes enjoy having many different types of number types that I can use in a language. There are many advantages to it especially when it comes down to decimal types vs floating type. I just feel like in the end it really isn't needed and does make learning the language harder.

Javascript has just one type, floating point. The advantage to one type is you don't have to worry about the math changing because you mixed the types. You also don't have to learn any other types. You do have to learn how floating points work, 0.1 + 0.2 does not equal 0.3 in floating point arithmetic. So please learn how they work.

<iframe width="560" height="315" class="youtube-iframe" src="//www.youtube.com/embed/MqHDDtVYJRI" frameborder="0" allowfullscreen></iframe>

So since floating points have rounding errors there are some tricks to getting around this depending on the math you are doing. You can just use whole numbers and then add the decimal place on display, as long as they are not too big. You can also just use numbers represented in exponential notation or use any one of the many decimal libraries out there. There are many options. Writing tests really does help with this.

So I find this first one to be more of an advantage than a disadvantage.

## Global Variables

Global variables are not a good thing. Most have all learned this at one point in our programming career. The reason why I think they are a good thing in Javascript is it points out how insecure and bad they are from the beginning. Many other languges have ways of creating global variables but hiding them away as static or shared variable or function. So it isn't just a Javascript issue.

Globals are bad no matter how you look at it. The fix I think is far easier in Javascript and that is by using closures. Javascript has function scoped variables, not block scope. So if you look at the example below you can see that because I am returning a function that is called right away the variables will stay local and all the methods will have access to it.

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
You should also be using tools like [JSLint](http://www.jslint.com/) or [JSHint](http://jshint.com/about/) to check for these. Leaking stuff to globals, outside of tests, is never good and these tools help with many of the hard-to-find errors in Javascript.

## Type Inference (0 == '') Returns True

This trips up new Javascript programmers. Actually, this gets many senior programmers as well. The simple answer is you should be using === not == most of the time. Double equals can be good if you know what you are doing as sometimes you want it to infere the type for you. Again, the advantage is you have that flexibility, though in this case be very careful! It isn't just a loaded gun pointing at your foot but a tank pointing at your head. Use == and != with caution.

## No Types

This is probably the most controversial part of the language. Many people believe that types save you errors. I would agree to some degree but they limit you on what you can do with the language as well. Types make you have to use inheritance trees or jump through hoops to add flexibility to objects. Again you can use JSLint or JSHint to check your code for changing types but then get the flexibility of objects that can change at runtime. I actually think this and object literals are the best parts of the language and why it will stay the top language for me for a long time.

## Prototypical Inheritance

This is hard for people and lots of people don't understand it. The easiest way to understand it is this: there are no classes in JavaScript, no types, just objects. So you can inherit from objects but not classes. You can have two different user classes and inherit from either at runtime. I find this a huge strength as it makes it extremely flexible and you tend to write far less code because of it. Javascript is the only language to take advantage of this instead of using the classical object oriented approach.

<iframe width="560" height="315" class="youtube-iframe" src="//www.youtube.com/embed/lKCCZTUx0sI" frameborder="0" allowfullscreen></iframe>

## Conclusion

In conclusion, I think most developers don't like Javascript for one of two reasons. One, they never learned it and because they program in other languages like Java and the C's that look the same, so they assume it will work the same. When it doesn't they get mad and even will go as far as to write whole other languages that compile down to it so they don't have to learn it (cough cough CoffeeScript, TypeScript).

Two, unlearning their bad habits is hard. We all pick up bad habits when the languages just catch the issues early on, but as I have discussed, in doing so limits the developer and makes them spend far more time implementing features. Take the time to unlearn. I did and it has opened my eyes to a whole new world.

> “When there is freedom from mechanical conditioning, there is simplicity. The classical man is just a bundle of routine, ideas and tradition. If you follow the classical pattern, you are understanding the routine, the tradition, the shadow - you are not understanding yourself.” *- Bruce Lee*

Javascript is here to stay so please learn it and unlearn those bad habits. It really is one of the freest languages to develop applications in.
