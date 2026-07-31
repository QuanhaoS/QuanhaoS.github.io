<h2 id="publications">Publications</h2>

{% if site.publications_note %}
<p class="pub-note">{{ site.publications_note }}</p>
{% endif %}

{% include pub-list.html items=site.data.publications.main %}

{% if site.data.publications.abstracts and site.data.publications.abstracts.size > 0 %}
<h2 id="conference-abstracts">Conference Abstracts</h2>

{% include pub-list.html items=site.data.publications.abstracts %}
{% endif %}
