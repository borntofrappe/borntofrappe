---
title: Up and Running
list:
  - apples
  - oranges
  - grapes
  - tangerines
  - passion fruit
tags: blog
---

The title of this page is **{{title}}**

{% for item in list %} - {{item | crazycase }}
{% endfor %}
