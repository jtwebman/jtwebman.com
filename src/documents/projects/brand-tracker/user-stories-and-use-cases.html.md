---
title: "User Stories & Use Cases"
layout: "project-detail"
project: "Brand Tracker"
sort: 2
---

## List of Actors

1. User
1. The System
1. Twitter
1. Facebook
1. Instagram
1. Pintrest
1. Youtube

## User Stories

- As a user I want to add brands so that I can track there follower counts over time.
- As a user I want to add buckets so that I can track brands in different buckets for different reasons that I select.
- As a user I want to be able to remove brands from buckets I have put them in so that I can control what is in the bucket and how I track them.
- As a user I want to be able to remove a brand so that I can stop seeing it in my list and buckets if I don't want to track it anymore.
- As a user I want to sort brands by percent changed so that I can find the brands that are moving up the most.
- As a user I want to be able to select the percent change time so that I can track the percent of change over different time periods based on my needs to find which brand would be best for a partnership.
- as a user I want to be able to search so that if my list of brands is more then fits on a page that I can find them easly.
- As a user I want to be able to login so that I can keep the brands and information private to just me.
- As a user I want to be able to register so that I can login and keep the brands and information I am tracking private.
- As the system I want to track followers daily so that I can report the counts over time and their percent of change.

## Use Cases

**Title:** Register as a new user  
**Actor:** User  
**Scenario:** When the users comes to the application and doesn't already have an account they can register for an account. They will need to provide their email address, name, and a password repeated twice.

---

**Title:** Add a new brand  
**Actor:** User  
**Scenario:** When a user adds a new brand they will fill in the brands main website url. The system will go out and parse the webpage and fill in the rest of the fields if they they were found. If not the user will be able to fill it out manually or change and of the fields. The only required fields will be brand url, and brand name. Brand email, brand address, the buckets they are in, and all the social media feed usernames will be optional. Once they complete adding the brand we will go out and get the counts for today if the system didn't already have them from another user's brand. Then we will take them to their dashboard that shows all brands they are tracking.

---

**Title:** Edit a brand  
**Actor:** User  
**Scenario:** A user should be able to edit a brand. They should be able to update all of the fields. If they change a username to any of the social media feeds we should go get the numbers as well a validate that it is valid. Keep in mind if they do change usernames they will lose the history unless they add that username back. The system will never remove history but the user will only see what accounts they are tracking.

---

**Title:** View brand by selecting the time range  
**Actor:** User  
**Precondition:** User has at least added one brand  
**Scenario:**  The user should be able to see a list of brands and their percent of change over time. This percent of change over time will be calculated based on what the user selects. This will help them see what brands are moving up as well as how many followers they have.

---

**Title:** Add a brand into a bucket  
**Actor:** User  
**Scenario:** The user when looking at the brand list should be able to add brands to buckets. Then they should be able to select that bucket and see only the brands in that bucket.

---

**Title:** Remove a brand from a bucket  
**Actor:** User  
**Scenario:** The user when looking at their brands in a bucket should be able to remove a brand from the bucket. This will still keep tracking the brand but just not have it in this bucket anymore.

---

**Title:** Remove a brand  
**Actor:** User  
**Scenario:** The user should be able to remove a brand all together. When they do this the system will stop showing the brand to the user but will keep tracking the social media numbers just in case another user or this user wants to track them later.

---

**Title:** Track daily follower counts  
**Actor:** The System  
**Secondary Actors:** Twitter, Facebook, Instagram, Pintrest, and Youtube  
**Scenario:** The system will keep track of all the different social media usernames it needs to track. Each day it will go out to each of the social media sites API's and find the total followers or likes that they have. It will then store them so that they can be used to track they brands changes over time.
