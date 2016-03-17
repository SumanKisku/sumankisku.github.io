---
layout: post
title: Creating A Simple Navigation Bar
date: 2016-03-17
image: assets/images/postimages/navigation-bar.png
imgalt: Navigation Bar
---
Actually this is my first blog post. In the first post I am writing about a simple navigation bar as my start.

In websites navigation bar is a set of links, which helps the visitors (or users) to browse through the site. The target of a navigation bar is to help the visitor to find the information he/she wants to know as quick as he/she can.

In web design there are various types of navigation bars. In this tutorial I am going to create a simple ‘top-nav’  navigation bar. So, let’s get started.

## The HTML

{% highlight html linenos %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigation Bar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <ul class="navigation">
            <li class="logo left"><a href="#">Navigation</a></li>
            <ul class="nav-links right">
                <li><a href="#">About</a></li>
                <li><a href="#" class="active">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </ul>
    </nav>
</body>
</html>

{% endhighlight %}

So, here I create <code><nav></nav></code> as a container of the navigation. And use an unordered list for thle list of links.
The first <code><li></li></code> item for the logo of our nav. Then create a second unordered list for the main navigation links.

## The CSS

{% highlight css linenos %}

body,ul {
    margin: 0;
    padding: 0;
    color: #fff;
    font: 14px sans-serif;
}
nav {
    width: 100%;
    height: 60px;
    position: fixed; /* Nav will stick to the top on scrolling */
    top: 0;
    left: 0;
    background-color: #2c2c2c;
    text-align: center;
}
ul.navigation {
    width: 90%;
    margin: 0 auto;
    list-style-type: none;
}
ul li {
    display: inline;
    line-height: 60px;
}
ul li a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
}
.nav-links a {
    width: 120px;
    height: 56px;
    text-transform: uppercase;
}
.nav-links a:hover {
    border-bottom: 4px solid #fff;
}
.left {
    float: left;
}
.right {
    float: right;
}
.logo {
    font-size: 28px;
}
.active {
    border-bottom: 4px solid #fff;
}

{% endhighlight %}

## Conclusion:

Here is an example of very simple navigation bar, this is just for beginner learners to web design.

Here will coming very interesting stuff for web design. Keep coming!