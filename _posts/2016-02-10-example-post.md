---
layout: post
title: Example Post
date: 2016-02-10
---
This is example post for learning [Jekyll](http://jekyllrb.com/) blog aware.

## <u>This is an image</u>
![My helpful screenshot](/assets/screenshot.jpg)

## <u>Index of posts</u>
<ol>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ol>

## <u>Post excerpts</u>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>


## <u>Highlight code snippets</u>
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}


## <u>With number of lines</u>
{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}