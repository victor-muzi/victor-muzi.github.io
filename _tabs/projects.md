---
layout: page
icon: fas fa-file-lines
order: 1
---

<div class="projects-grid">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
    <div class="project-card">
      <div class="project-image">
        {% if project.image %}
          <img src="{{ project.image.path | default: project.image }}" alt="{{ project.image.alt | default: project.title }}">
        {% else %}
          <div class="project-placeholder">
            <i class="fas fa-project-diagram"></i>
          </div>
        {% endif %}
      </div>
      <div class="project-content">
        <h3 class="project-title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h3>
        {% if project.subtitle %}
          <p class="project-subtitle">{{ project.subtitle }}</p>
        {% endif %}
        {% if project.description %}
          <p class="project-description">{{ project.description | truncate: 201 }}</p>
        {% endif %}
        {% if project.tech_stack and project.tech_stack.size > 0 %}
          <div class="project-tech">
            {% for tech in project.tech_stack limit: 3 %}
              <span class="tech-badge">{{ tech }}</span>
            {% endfor %}
            {% if project.tech_stack.size > 3 %}
              <span class="tech-badge-more">+{{ project.tech_stack.size | minus: 3 }} more</span>
            {% endif %}
          </div>
        {% endif %}
        <div class="project-links">
          {% if project.github_url %}
            <a href="{{ project.github_url }}" class="project-link github" target="_blank" title="View Code">
              <i class="fab fa-github"></i>
            </a>
          {% endif %}
          {% if project.demo_url %}
            <a href="{{ project.demo_url }}" class="project-link demo" target="_blank" title="Live Demo">
              <i class="fas fa-external-link-alt"></i>
            </a>
          {% endif %}
          <a href="{{ project.url | relative_url }}" class="project-link details" title="View Details">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
