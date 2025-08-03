---
layout: default
title: Blog
permalink: /blog/
---

<div class="posts-container">
  <h1>部落格</h1>
  <ul class="post-list">
    {% for post in site.posts %}
      <li class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="post-meta">
          {{ post.date | date: "%Y年%m月%d日" }}
        </div>
        <p class="post-excerpt">{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
