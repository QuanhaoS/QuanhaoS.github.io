// Manual light/dark toggle.
//
// The <html data-theme> attribute is set by a tiny inline script in <head> so
// the stored choice applies before first paint. This file only wires up the
// button. With no stored choice, data-theme is absent and the CSS falls back to
// the visitor's prefers-color-scheme setting.
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';

  function currentTheme() {
    var explicit = document.documentElement.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Private browsing or storage disabled — the toggle still works for this
      // page view, it just won't be remembered.
    }
    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  function init() {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    apply(currentTheme());
    button.addEventListener('click', function () {
      apply(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
