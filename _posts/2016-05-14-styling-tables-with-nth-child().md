---
layout: post
title: Styling tables with :nth-child()
subtitle: Web Design
date: 2016-05-14
author: "Suman Kisku"
header-img: 
---

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

Just simple table, no classes like <code>.alt</code>.

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

Just simple.

<a class="btn-download" href="{{ site.baseurl}}/assets/downloads/colourful-table.zip">Download Source File</a>