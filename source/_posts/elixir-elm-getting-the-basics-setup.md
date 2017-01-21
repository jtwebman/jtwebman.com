---
title: Elixir & Elm — Getting the basics setup
date: 2016-06-06 08:35:53
categories:
  - Programming
tags:
  - Elixir
  - Elm
  - Phoenix
author: JT Turner
comments: true
---
I am bummed that I still haven’t been able to convince work that Elixir is the perfect language to solve their problem, probably because I haven’t really built anything in production with it yet. So my next posts are going to be building my personal blog and site using it. My personal site has been down for the last couple of months now as I never finished moving it over to Ghost. I want to build something in Elixir and Elm so here we go. This blog is going to be a full Elixir site with Elm running the backend admin UI. It will be completely [open source](https://github.com/jtwebman/jtwebman_com).

I have a little head start as I have read most of the [Programming Elixir](http://www.amazon.com/gp/product/1937785580/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1937785580&linkCode=as2&tag=beproduinves-20&linkId=HEHR3SGHZMZFAQ47) book. It was a great book but I don’t think it is what I need to get started. If you want you probably can just work through the [Introduction](http://elixir-lang.org/getting-started/introduction.html) on the Elixir site and if you have been programming awhile you might get away with only doing a few of the pages on there. I like to learn from building stuff as opposed to reading books and introductory sites. So I hope this post serious helps you out as well. I do assume though that you have built websites before in other server side technologies. If not it is going to be a steep learning curve but I am sure you will learn as you go.

Let’s get started. Since, I have no site at all right now, the first step is to just get a basic Elixir site running with the blog posts as pages looking like my old site. This alone will probably be a few posts.

To get started you should have Erlang and Elixir already installed, if not follow the [install page](http://elixir-lang.org/install.html). Now run the Elixir [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) to make sure it is on the same version as me or higher.

{% codeblock lang:bash %}
iex

Erlang/OTP 18 [erts-7.3] [source-d2a6d81] [64-bit] [smp:4:4] [async-threads:10] [hipe] [kernel-poll:false]

Interactive Elixir (1.2.4) — press Ctrl+C to exit (type h() ENTER for help)

iex(1)>
{% endcodeblock %}

Ctrl-c Ctrl-c to exit. Notice the first line shows the Erlang version Erlang/OTP 18 then a few lines down you can see the Elixir version, Elixir (1.2.4). If you have lower versions some of what I build might not work. So try to stay on the latest.

Also I run Linux Mint 17.3 (Ubuntu 14.04 clone) for an OS. I would expect everything will be the same on Mac OS as well but windows is a different story. If you are on windows you might want to install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and make a [Linux Mint](https://www.linuxmint.com/download.php) VM to work on as not all the tools I use like SSH will be on windows. ** Update 2017-01-12: I have switch back to using MacOS **

The next thing we will need is the Phoenix framework as well as Hex package manager. The [Phoenix Install page](http://www.phoenixframework.org/docs/installation) is a good detailed walk through but to do it quickly here are the commands I ran.

Install or upgrade Hex to the latest:

{% codeblock lang:bash %}
mix local.hex
{% endcodeblock %}

Get the latest Phoenix mix tasks:

{% codeblock lang:bash %}
mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez
{% endcodeblock %}

Now we need to be running PostgreSQL on our local for later on when we start setting up a database though this is Erlang so maybe later we will move this part out of the Phoenix application and use a simple key value store, [mnesia database](https://en.wikipedia.org/wiki/Mnesia), or maybe another interface to store it in any database. I just wanted to try out the default way first.

On mac just use the [Postgres.app](http://postgresapp.com/). On Ubuntu 14.04 clone you would run the following commands to install the latest Postgres 9.4 version as that is what is required to use the [Ecto Elixir library](https://github.com/elixir-lang/ecto) that comes default with Phoenix library.

{% codeblock lang:bash %}
echo “deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main” >> /etc/apt/sources.list.d/pgdg.list
wget — quiet -O — https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get install postgresql-9.4 postgresql-client-9.4 pgadmin3
{% endcodeblock %}

Now on Ubuntu you will need to give the postgres user a password so you can login.

{% codeblock lang:bash %}
sudo -u postgres psql postgres

psql (9.4.8)
Type “help” for help.
postgres=# \password postgres
Enter new password: postgres
Enter it again: postgres
postgres=# \q
{% endcodeblock %}

Let’s make sure you have the latest Node.js installed as Phoenix uses a tool called Brunch to build the frontend assets. Run the following on the command line.

{% codeblock lang:bash %}
node --version
v6.2.0
{% endcodeblock %}

If you don’t get a version higher then v5.x.x or get an error you will need to install the latest node. On Mac I would just use [Homebrew](http://brew.sh/) to install it but on Ubuntu 14.04 I would run the following to get the latest.

{% codeblock lang:bash %}
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
{% endcodeblock %}

Now last but only if you are on Linux you will need to install the inotify-tools. This is so the live reload will work. On a Mac and windows machine this isn’t needed.

{% codeblock lang:bash %}
sudo apt-get install inotify-tools
{% endcodeblock %}

Now we have everything we need to get started with our first Phoenix app. I now navigate to my projects folder. You don’t have to do this but I find it easier than doing it directly in the user home folder. To create a new folder with a new Phoenix app in it run the following command.

{% codeblock lang:bash %}
mix phoenix.new mysite_com
* creating mysite_com/config/config.exs
* creating mysite_com/config/dev.exs
* creating mysite_com/config/prod.exs
…
Fetch and install dependencies? [Yn] y
* running mix deps.get
* running npm install && node node_modules/brunch/bin/brunch build
…
cd mysite_com
mix ecto.create
Shall I install rebar? [Yn] y
Compiled …
The database for MysiteCom.Repo has been created.
{% endcodeblock %}

If you don’t get the database created message at the end run:

{% codeblock lang:bash %}
psql -h localhost -U postgres -W
{% endcodeblock %}

This will try to login to the Postgres database with a password. If it can’t connect search for the error on Google. Postgres can be a pain sometimes to get all the config settings correct.

Now we are ready to run the basic Phoenix site. Run the following on the command line.

{% codeblock lang:bash %}
mix phoenix.server
{% endcodeblock %}

You should now be able to point your browser to localhost:4000 and see this:

![Phoenix Welcome Screen](/images/phoenix-welcome-screen.png)

Awesome we have a running elixir website. We are going to stop here for the first post. In the next post we will get it to look like my old blog site by including sass, bootstrap, font-awesome, and updating the layout files. See you then!

Make sure to follow me on social media to get notification when my next post is live.

## Update 2017-01-17

I have decided to just make my personal blog a static site. I am planning on picking up this blog series on a new blog called [http://learnfunctional.com/](http://learnfunctional.com/) which isn't live yet but should be soon.
