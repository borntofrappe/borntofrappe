---
title: Jotting things down
layout: "layout/home.njk"
---

Welcome to my own website

{% for post in collections.blog %} - [{{post.data.title}}]({{post.url}})
{% endfor %}
