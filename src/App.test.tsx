import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

const sectionIds = ['about', 'projects', 'skills', 'services'] as const;

describe('App content layout', () => {
  it('renders the page shell and the four resume sections in document order', () => {
    render(<App />);

    expect(document.getElementById('page-top')).toBeInTheDocument();
    const sections = sectionIds.map((id) => document.getElementById(id));
    for (const section of sections) {
      expect(section).toHaveClass('resume-section');
    }

    const positions = sections.map((section) =>
      section!.compareDocumentPosition(sections[0]!),
    );
    expect(
      sections.map((section) => section!.id),
    ).toEqual(['about', 'projects', 'skills', 'services']);
    expect(positions[0]).toBe(0);
    for (let index = 1; index < sections.length; index += 1) {
      expect(
        sections[index - 1]!.compareDocumentPosition(sections[index]!),
      ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    }
  });

  it('points every navigation link at a rendered section', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    const links = Array.from(nav.querySelectorAll('a.nav-link'));

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'About',
      'Services',
      'Projects',
      'Skills',
    ]);

    for (const link of links) {
      const href = link.getAttribute('href');
      expect(href).toMatch(/^#/);
      expect(document.querySelector(href!)).toBeInTheDocument();
    }
  });
});
