---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with Croak and Bloom for custom orders, wholesale inquiries, or to say hello.
eyebrow: Say Hello
nav-menu: true
---

We'd love to hear from you. For custom orders, wholesale inquiries, collaborations, or just a question about a piece, send a note below and we'll get back to you within a few days.

{% if site.forms.zoho_embed_url and site.forms.zoho_embed_url != "" %}
<div class="embed embed--form" markdown="0">
  <iframe
    src="{{ site.forms.zoho_embed_url }}"
    title="Contact form"
    width="100%"
    height="840"
    frameborder="0"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allowtransparency="true"></iframe>
</div>
<p class="muted text-center mt-4" style="font-size:var(--fs-xs);">
  Prefer email? Write to <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.
</p>
{% else %}
<form class="form" action="{{ site.forms.contact_endpoint | default: 'https://api.web3forms.com/submit' }}" method="POST" aria-label="Contact form" markdown="0" data-thanks="{{ '/thanks/' | relative_url }}">
  <input type="hidden" name="access_key" value="{{ site.forms.web3forms_key }}">
  <input type="hidden" name="subject" value="New enquiry from croakandbloom.com">
  <input type="hidden" name="from_name" value="Croak and Bloom website">
  <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">
  <div class="form__row form__row--2">
    <div class="field">
      <label for="name">Your name</label>
      <input id="name" name="name" type="text" required autocomplete="name">
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required autocomplete="email">
    </div>
  </div>

  <div class="field">
    <label for="subject">What can we help with?</label>
    <select id="subject" name="subject" required>
      <option value="">Choose one…</option>
      <option>Custom order</option>
      <option>Wholesale inquiry</option>
      <option>Collaboration / press</option>
      <option>Question about a piece</option>
      <option>Something else</option>
    </select>
  </div>

  <div class="field">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
    <p class="field__hint">For custom and wholesale, please include quantities, timeline, and any reference imagery.</p>
  </div>

  <div class="form__actions">
    <button type="submit" class="btn btn--accent">Send Message</button>
    <span class="muted">Or email <a href="mailto:anna@croakandbloom.com">anna@croakandbloom.com</a></span>
  </div>
</form>
{%- endif -%}

## Wholesale & Custom

Croak and Bloom welcomes wholesale inquiries, custom orders, and creative collaborations. Whether you're a retailer, restaurant, event planner, or fellow maker, we'd love to work with you.

- **Wholesale pottery:** mugs, bowls, vases, and giftware for retail shops and boutiques.
- **Custom pieces:** branded mugs for cafés, wedding favors, corporate gifts, and more.
- **Collaborations:** partnering with local florists, designers, and makers on special collections.

Past collaborations include **The Artisan Collection** with Humble Bouquet and custom tableware for local restaurants and cafés.

We typically respond within 2–3 business days.
