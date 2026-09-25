import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import About from './About';

describe('About', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-24T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the name, role, and year counts from the fixed start dates', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 1, name: 'JDS Craft' })).toBeInTheDocument();
    expect(screen.getByText('IT Consultant')).toHaveClass('subheading');
    expect(
      screen.getByText(
        'Over 28 years in IT developing technical solutions and over 10 years of experience as an IT leader.',
      ),
    ).toBeInTheDocument();
  });

  it('lists what he enjoys and the experience bullets', () => {
    render(<About />);
    expect(screen.getByText('What I enjoy:')).toBeInTheDocument();
    expect(screen.getByText('What I have experience doing:')).toBeInTheDocument();
    expect(
      screen.getByText('leading the transformation of IT organizations'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'full-stack development, LLM/ML/data engineering, software architecture',
      ),
    ).toBeInTheDocument();
  });

  it('links the social profiles', () => {
    render(<About />);
    const links = document.querySelectorAll('.social-icons a');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/jstoops/');
    expect(links[1]).toHaveAttribute('href', 'https://github.com/jstoops');
    expect(links[2]).toHaveAttribute('href', 'https://medium.com/@john.stoops');
    expect(links[0].querySelector('.fa-linkedin-in')).toBeTruthy();
    expect(links[1].querySelector('.fa-github')).toBeTruthy();
    expect(links[2].querySelector('.fa-medium')).toBeTruthy();
    expect(links[0]).toHaveClass('social-icon');
  });
});
