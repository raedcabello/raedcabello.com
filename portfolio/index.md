---
layout: page
title: Work
permalink: /portfolio/
bodyClass: work
---

Below is a sampling of work that will cross several disciplines: Visual, interaction, branding, research, and UI design.

<ul class="work-list">
  {% for work in site.work reversed %}
  <li>
    <h5>{{ work.name }}: {{ work.involvement }}</h5>
    <ul>
      {% for item in work.workItems %}
      <li>
      {% if item.url %}
        <a href="{{ item.url }}">{{ item.name }}</a>
      {% else %}
        {{ item }}
      {% endif %}
      </li>
      {% endfor %}
    </ul>
  </li>
  {% endfor %}
  <li>
    <h5><a href="rae-cabello-resume.pdf">Rae D. Cabello Resume</a></h5>
  </li>
</ul>
