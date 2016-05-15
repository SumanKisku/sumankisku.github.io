---
layout: post
title: Styling tables with :nth-child()
subtitle: Web Design
date: 2016-05-15
author: "Suman Kisku"
header-img: 
---

Ago, I used to styling table with class <code>.alt</code>. Like...

{% highlight html %}
<tr>
    <th>Name</th>
    <th>City</th>
    <th>Phone no.</th>
</tr>
<tr class="alt">
    <td>Suman Kisku</td>
    <td>Jhargram</td>
    <td>0123456789</td>
</tr>
{% endhighlight %}

And the CSS...

{% highlight css %}
.alt {
    background-color: #24A8C5;
    color: #fff;
}
{% endhighlight %}

Hope you also do it. But after reading this post, you will never need to add a class <code>.alt</code> to every single <code>&lt;tr&gt;</code>.

### HTML

{% highlight html %}
<table>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>Phone no.</th>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
</table>
{% endhighlight %}

#### Preview

<table>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>Phone no.</th>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
</table>

Simple table, no classes like <code>.alt</code>.

### CSS

{% highlight css %}
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
table, tr, th, td {
    border-collapse: collapse;
    padding: 15px;
}
table {
    margin: auto;
    width: 40%;
    text-align: center;
}
tr:nth-child(odd) { /* odd = 1,3,5 even = 2,4,6 */
    background-color: #24A8C5;
    color: #fff;
}
{% endhighlight %}

#### Preview

<table>
    <tr style="background-color: #24A8C5; color: #fff;">
        <th>Name</th>
        <th>City</th>
        <th>Phone no.</th>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr style="background-color: #24A8C5; color: #fff;">
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr>
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
    <tr style="background-color: #24A8C5; color: #fff;">
        <td>Suman Kisku</td>
        <td>Jhargram</td>
        <td>0123456789</td>
    </tr>
</table>

Just simple.

<a class="btn-download" href="{{ site.baseurl}}/assets/downloads/colourful-table.zip">Download Source File</a>