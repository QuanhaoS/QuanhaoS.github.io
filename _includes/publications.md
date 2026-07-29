<h2 id="publications">Publications</h2>

{% if site.publications_note %}
<p class="pub-note">{{ site.publications_note }}</p>
{% endif %}

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-card">

  {% if link.image %}
  <div class="pub-thumb">
    <img src="{{ link.image }}" alt="{{ link.title }} teaser" loading="lazy">
    {% if link.conference_short %}
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  {% endif %}

  <div class="pub-body">
    <div class="title">
      {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
    </div>

    <div class="author">{{ link.authors }}</div>

    <div class="pub-meta">
      <div class="pub-venue">
        {{ link.conference }}
        {% if link.notes %}<span class="pub-award">({{ link.notes }})</span>{% endif %}
      </div>

      <div class="pub-links">
        {% if link.pdf %}
        <a href="{{ link.pdf }}" target="_blank" rel="noopener"><i class="fa-regular fa-file-lines" aria-hidden="true"></i>Paper</a>
        {% endif %}
        {% if link.page %}
        <a href="{{ link.page }}" target="_blank" rel="noopener"><i class="fa-solid fa-globe" aria-hidden="true"></i>Website</a>
        {% endif %}
        {% if link.code %}
        <a href="{{ link.code }}" target="_blank" rel="noopener"><i class="fa-brands fa-github" aria-hidden="true"></i>Code</a>
        {% endif %}
        {% if link.bibtex %}
        <a href="{{ link.bibtex }}" target="_blank" rel="noopener"><i class="fa-solid fa-quote-right" aria-hidden="true"></i>BibTeX</a>
        {% endif %}
        {% if link.others %}{{ link.others }}{% endif %}
      </div>
    </div>
  </div>

</div>
</li>

{% endfor %}

</ol>
</div>
