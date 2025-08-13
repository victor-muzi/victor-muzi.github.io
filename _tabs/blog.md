---
layout: page
icon: fas fa-pen
order: 3
permalink: /blog/
title: Blog
---

<div id="post-list" class="flex-grow-1">
  {% for post in site.posts %}
    <article class="card-wrapper card mb-4">
      <a href="{{ post.url | relative_url }}" class="post-preview">
        <div class="card-body">
          <h2 class="card-title">{{ post.title }}</h2>
          
          <div class="card-text content mt-2 mb-3">
            <p>
              {% if post.description %}
                {{ post.description }}
              {% else %}
                {{ post.content | strip_html | truncate: 200 }}
              {% endif %}
            </p>
          </div>

          <div class="post-meta">
            <i class="far fa-calendar fa-fw me-1"></i>
            {{ post.date | date: "%b %d, %Y" }}
            
            {% if post.tags.size > 0 %}
              <i class="fas fa-tags fa-fw ms-3 me-1"></i>
              {% for tag in post.tags %}
                <span class="badge bg-secondary">{{ tag }}</span>
              {% endfor %}
            {% endif %}
          </div>
        </div>
      </a>
    </article>
  {% endfor %}
</div>
