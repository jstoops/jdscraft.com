import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('known content defects', () => {
  it.fails('gives every image an accessible name', () => {
    render(<App />);
    const images = Array.from(document.querySelectorAll('img'));
    const missing = images
      .filter((image) => !image.getAttribute('alt')?.trim())
      .map((image) => image.getAttribute('src'));
    expect(missing).toEqual([]);
  });

  it.fails('uses unique element ids', () => {
    render(<App />);
    const ids = Array.from(document.querySelectorAll('[id]')).map((element) => element.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect([...new Set(duplicates)]).toEqual([]);
  });

  it.fails('protects new-tab links against tabnabbing', () => {
    render(<App />);
    const unsafe = Array.from(document.querySelectorAll('a[target="_blank"]'))
      .filter((link) => !link.getAttribute('rel')?.includes('noopener'))
      .map((link) => link.getAttribute('href'));
    expect(unsafe).toEqual([]);
  });

  it.fails('lists navigation items in the same order as the page sections', () => {
    render(<App />);
    const navOrder = Array.from(document.querySelectorAll('.nav-link')).map((link) =>
      link.getAttribute('href'),
    );
    const sectionOrder = Array.from(document.querySelectorAll('section.resume-section')).map(
      (section) => `#${section.id}`,
    );
    expect(navOrder).toEqual(sectionOrder);
  });

  it.fails('renders SVG presentation attributes React understands', () => {
    render(<App />);
    const invalid = document.querySelectorAll('[stop-color], [clip-rule], [fill-rule]');
    expect(invalid.length).toBe(0);
  });
});
