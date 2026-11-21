// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

(() => {
    const darkThemes = ['ayu', 'navy', 'coal'];
    const lightThemes = ['light', 'rust'];

    const classList = document.getElementsByTagName('html')[0].classList;

    let lastThemeWasLight = true;
    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

    const theme = lastThemeWasLight ? 'default' : 'dark';
    // Mermaid sizes each box from its label as measured when it renders. Use the book's own
    // font rather than mermaid's default (whichever of Trebuchet MS, Verdana or Arial the
    // system has), and render once it has loaded, so the boxes fit the text as drawn.
    // Labels are SVG text rather than HTML in a fixed-size box, which clips any text that
    // renders wider than measured (browser zoom, a minimum font size).
    mermaid.initialize({
        startOnLoad: false,
        theme,
        fontFamily: '"Open Sans", sans-serif',
        flowchart: { htmlLabels: false },
    });
    document.fonts.ready.then(() => mermaid.run());

    // Simplest way to make mermaid re-render the diagrams in the new theme is via refreshing the page

    for (const darkTheme of darkThemes) {
        document.getElementById('mdbook-theme-' + darkTheme).addEventListener('click', () => {
            if (lastThemeWasLight) {
                window.location.reload();
            }
        });
    }

    for (const lightTheme of lightThemes) {
        document.getElementById('mdbook-theme-' + lightTheme).addEventListener('click', () => {
            if (!lastThemeWasLight) {
                window.location.reload();
            }
        });
    }
})();
