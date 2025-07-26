---
layout: page
title: Portfolio
image: assets/images/pic01.jpg
nav-menu: true
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
    <div class="inner">
        <header class="major">
            <h1>Portfolio</h1>
        </header>

        <!-- Portfolio Items -->
        {% assign items = "Project One,Project Two,Project Three,Project Four,Project Five,Project Six,Project Seven,Project Eight,Project Nine,Project Ten" | split: "," %}
        {% for item in items %}
        {% assign index = forloop.index0 %}
        {% assign image = index | modulo: 5 | plus: 8 | prepend: 'assets/images/pic0' | append: '.jpg' %}
        <p>
            {% if index | modulo: 2 == 0 %}
            <span class="image left"><img src="{% link {{ image }} %}" alt="{{ item }}" /></span>
            {% else %}
            <span class="image right"><img src="{% link {{ image }} %}" alt="{{ item }}" /></span>
            {% endif %}
            <strong>{{ item }}</strong><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod, nisi vel consectetur interdum, nisl nisi vehicula nisl, vitae placerat justo nisl in nunc. Suspendisse potenti. Integer nec odio a diam elementum fringilla non in massa.
        </p>
        {% endfor %}

    </div>
</section>

</div>
