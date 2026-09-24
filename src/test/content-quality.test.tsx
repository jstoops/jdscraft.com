import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

describe('content quality', () => {
  it('gives every image an accessible name', () => {
    render(<App />);
    const images = Array.from(document.querySelectorAll('img'));
    const missing = images
      .filter((image) => !image.getAttribute('alt')?.trim())
      .map((image) => image.getAttribute('src'));
    expect(missing).toEqual([]);
  });

  it('uses unique element ids', () => {
    render(<App />);
    const ids = Array.from(document.querySelectorAll('[id]')).map((element) => element.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect([...new Set(duplicates)]).toEqual([]);
  });

  it('protects new-tab links against tabnabbing', () => {
    render(<App />);
    const unsafe = Array.from(document.querySelectorAll('a[target="_blank"]'))
      .filter((link) => !link.getAttribute('rel')?.includes('noopener'))
      .map((link) => link.getAttribute('href'));
    expect(unsafe).toEqual([]);
  });

  it('lists navigation items in the same order as the page sections', () => {
    render(<App />);
    const navOrder = Array.from(document.querySelectorAll('.nav-link')).map((link) =>
      link.getAttribute('href'),
    );
    const sectionOrder = Array.from(document.querySelectorAll('section.resume-section')).map(
      (section) => `#${section.id}`,
    );
    expect(navOrder).toEqual(sectionOrder);
  });

  it('applies SVG presentation attributes without React warnings', () => {
    const errors: string[] = [];
    const spy = vi.spyOn(console, 'error').mockImplementation((message) => {
      errors.push(String(message));
    });
    render(<App />);
    spy.mockRestore();
    expect(errors.filter((message) => message.includes('Invalid DOM property'))).toEqual([]);
    expect(document.querySelectorAll('stop[stop-color]').length).toBeGreaterThan(0);
    expect(document.querySelector('[clip-rule="evenodd"]')).toBeTruthy();
  });
});
