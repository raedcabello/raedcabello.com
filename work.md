---
layout: page
title: Work
permalink: /work/
bodyClass: work
---

Below is a sampling of work that will cross several disciplines: Visual, interaction, branding, research, and UI design.

<ul class="work-list">
  {% for work in site.work reversed %}
  <li><a href="{{ work.url }}">{{ work.name }}</a>: {{ work.involvement }}</li>
  {% endfor %}
</ul>
