import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Skills from './Skills';

describe('Skills', () => {
  it('renders the skills section and technology categories', () => {
    render(<Skills />);
    expect(document.getElementById('skills')).toHaveClass('resume-section');
    expect(screen.getByRole('heading', { level: 2, name: 'Skills' })).toBeInTheDocument();

    for (const category of [
      'Programming Languages',
      'Databases',
      'Runtimes',
      'Tools',
      'IDEs',
      'Frameworks',
      'Models',
      'Cloud & Hosting Platforms',
    ]) {
      expect(screen.getByText(category)).toBeInTheDocument();
    }
  });

  it('lists the development approaches and the summary checks', () => {
    render(<Skills />);
    expect(
      screen.getByText(
        'Software Development Life Cycles (SDLC) and Development Approaches',
      ),
    ).toHaveClass('subheading');
    for (const approach of ['Waterfall', 'Agile', 'Pragmatic agile', 'Vibing']) {
      expect(screen.getByText(approach)).toBeInTheDocument();
    }
    expect(screen.getByText('Summary')).toHaveClass('subheading');
    expect(document.querySelectorAll('#skills .fa-ul .fa-check').length).toBe(8);
  });

  it('renders the icon strip used by the skills layout', () => {
    render(<Skills />);
    const icons = document.querySelector('#skills .dev-icons');
    expect(icons).toBeInTheDocument();
    expect(icons!.querySelectorAll('.list-inline-item').length).toBeGreaterThan(10);
  });
});
