---
title: "5 Reasons Enterprise Software Projects Fail"
layout: "post"
date: 2015-01-30 17:27:00 -8
author: "JT"
tags: "Enterprise, Software, Project, Fail"
featureImage: ""
ignore: true
---
This week lets talk about 5 reasons enteprise software fails. I have worked for many big companies now and seen many projects get to the point where every time we fix one thing 10 other things break. I have even been a part of their design, so I am not saying I am not a part of it. I still feel bad if anyone that has to maintain the code I wrote 10 years ago. I just want to point how they got this way and help you find a way to get the projects back on track.

## Wasn't Designed To Do What It Does

This is just a product of doing business. Processes change and so does the software we write. I also think most programmers know this. It is why we over engineer trying to make a feature more adjustable. The issues is we tend to get this wrong and in doing so add more logic we have to maintain.

Over engineering isn't the only reason though. There is always a few times in a product when it has change so much that it might be time to do a serous refactoring of the code. This is were the wheels start to fall off. If you have designed the system well you can do it and not effect too much. If you have design the system poorly ether because of lack of time, pressure from upper management, or any other reason you might be in trouble.

Now imagine this has happen a few times in the products lifetime and management or the programmers have decided not to refactor, this is how software gets to the point of when you change one thing you break 10 things.

One way to fix this is to try and sell a refactor of the whole system. I have tried this many times before but most of the time will get shot down. This is for good reason. It isn't the way to fix the problem.

Another choice would be pull a small portion of the application out. Take the whole section all the way to the database from the UI and just refactor that section. Make sure both versions do the same thing so if another section is dependent on the data being is a place it is and still works. I call this siloing and it is one of the easiest way to fix a legacy application.

## Big Frameworks

Many teams end up build huge big frameworks that do everything. This is just crazy. Yes it does save time at the beginning of the project but what happens when something needs to change? Normally you just go and change it but if you have 30 different sections in your app using that same framework. You end up being very limited in what you can change because changing it might break some of them.

Some programmers will cry wolf here and say well that is why I write unit tests. Yes they might save you as long as you have thought of every possible thing but I know I am not that smart so I wouldn't trust this. Even if I was that smart I want the code I write to be readable and modifiable by other programmers as well so it might not stay that way for long.

Instead I find building smaller modules much easier. Make sure they are not dependent on anything if you can and if not keep the dependencies on light interfaces or a light service layer. If you follow the advice above and silo sections of your application. Then one part of the system should be able to replace any one of their modules or even written in a different language and the rest of the system will not care. This will take more time at the beginning but the more you do it the quicker you will get at it. 

Also don't go overboard on this, there can be to many modules as well, it just takes time to learn the correct balance and it can be different depending on the team and languages used.

## Reinventing the Wheel

This is one of the saddest reasons. There are many awesome highly tested open source projects that do many different things in the language of your choice but so many enteprise companies don't allow open source. Even worse we as programmers think they can do it better. This is almost never the case. I am guilty of this. Some companies also think they will end up supporting the software as there is no one they can call up when it breaks. This is just not the case. If you break things into smaller modules, and something doesn't work, the team can always just replace that part.

If it isn't allowed at all know that it will be a slow process but do your best to sell management and the lawyers on how it will better the customer and their bottom line to allow for open source. Keep in mind also that there are some open source licenses that make it very hard for a company to use them but there are many that don't. Most only require that you include the license in your software as well for their code. It don't mean you have to make your code open source as well. [Wikipedia](http://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses) has a great article with tables on what you can and can't do with many licenses so do you best to educate yourself and management as it really can save you many hours of development and bug fixes.

## Not Open to Change

I have seen it so many times before. Sometimes it is a programmer that has been on the teams since day one. Sometimes it is a manager who thinks they know best. Once there is one person on the team that isn't open to change it hurts the whole team and company. Programming is a changing world. We don't build applications the same way we did 3 years ago, let alone how we built them 13 years ago. It is actually why I like programming. I love learning new ways to do things but not everyone is like me.

The best way to fix this is to show you are not the only one. Convince others on the team that we should change. Sometimes you just need to ask them why they feel that way because maybe you both believe in the same thing you just say it differently. You can also share articles written by others on it but be easy on this. Sometimes people have to come to the conclusion on their own before they are willing to change so have patience. If you don't you will only make things worse, I know I have done it the wrong way many times.

## 10 Managers To Sign Off

The title says it all. Big companies means many managers. As a manager you are their to make sure the product gets out the door and in good condition. You should be looking out for the employees you have under you and the customer. It is also your job to push back and say no sometimes. No we can't do feature A unless we change the date or we need to take out feature B if you want to get in feature A. I know it is possible I have work many of these managers in the past. They understand the condition their project is in and make sure it is known farther up the latter. If you are a VP or Director and you have a manager under you that never says no then you might have an issue.

There are times when programmers have to step it up and get something out the door on a hard to hit deadline but this shouldn't be a every release thing for a project that is 10+ years old. Most programmers work hard to get the best product they can out the door but if everything take many managers approval it is less likely to happen. Give us some autonomy and I guarantee it will come back 10 fold to help the customer and the product.

## In Closing

For legal reasons I need to say this is my view and not my current, past, or future companies view or issues. I just feel big enterprise companies have their own issues and most of them can be fixed even if it seems like it can't right now.

The real goal though is to make awesome, ever changing, bug free software that customers love. To do that you might need to change as well as convince others to change. This isn't going to be easy and sometimes will not work. In those cases it might just be better to move on, you can't save them all.
