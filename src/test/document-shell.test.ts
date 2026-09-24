import html from '../../index.html?raw';
import { describe, expect, it } from 'vitest';

describe('document shell', () => {
  it('sets the page language, title, and viewport', () => {
    expect(html).toMatch(/<html lang="en">/);
    expect(html).toContain('<title>JDSCraft</title>');
    expect(html).toContain('name="viewport"');
    expect(html).toContain('width=device-width, initial-scale=1, shrink-to-fit=no');
  });

  it('mounts the React app and loads the resume theme scripts', () => {
    expect(html).toContain('<div id="root"></div>');
    expect(html).toContain('<script type="module" src="/src/main.tsx"></script>');
    expect(html).toContain('jquery/3.5.1/jquery.min.js');
    expect(html).toContain('bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js');
    expect(html).toContain('jquery-easing/1.4.1/jquery.easing.min.js');
    expect(html).toContain('src="js/scripts.js"');
  });

  it('loads the resume fonts and a favicon', () => {
    expect(html).toContain('family=Saira+Extra+Condensed:500,700');
    expect(html).toContain('family=Muli:400,400i,800,800i');
    expect(html).toContain('rel="shortcut icon" href="/favicon.ico"');
    expect(html).toContain('You need to enable JavaScript to run this app.');
  });
});
