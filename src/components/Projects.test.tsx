import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';

const projectCards = [
  {
    title: 'LLM Engineering Lab',
    href: 'https://github.com/jstoops/llm-engineer-lab',
  },
  {
    title: 'Product Pricing Agent',
    href: 'https://github.com/jstoops/product-pricing-agent',
  },
  {
    title: 'AI Voice Assistant',
    href: 'https://github.com/jstoops/ai-voice-assistant',
  },
  { title: 'Blog Standard AI SaaS', href: 'https://github.com/jstoops/blog-standard' },
  { title: 'PropertyPulse', href: 'https://github.com/jstoops/next-property' },
  { title: 'Prostore', href: 'https://github.com/jstoops/prostore' },
  { title: 'Proshop', href: 'https://github.com/jstoops/proshop' },
];

describe('Projects', () => {
  it('renders the AI Agents and Modern Web Apps groups', () => {
    render(<Projects />);
    expect(document.getElementById('projects')).toHaveClass('resume-section');
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument();
    expect(screen.getAllByText('AI Agents')[0]).toHaveClass('subheading');
    expect(screen.getByText('Modern Web Apps')).toHaveClass('subheading');
  });

  it('renders a card and GitHub link for each published project', () => {
    render(<Projects />);
    for (const project of projectCards) {
      expect(screen.getByRole('heading', { level: 5, name: project.title })).toBeInTheDocument();
    }
    const githubLinks = screen.getAllByRole('link', { name: 'GitHub' });
    expect(githubLinks.map((link) => link.getAttribute('href'))).toEqual(
      projectCards.map((project) => project.href),
    );
    for (const link of githubLinks) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveClass('btn', 'btn-primary');
    }
  });

  it('does not link live demos from the project cards', () => {
    render(<Projects />);
    expect(screen.queryByRole('link', { name: 'Demo' })).not.toBeInTheDocument();
  });

  it('keeps project cards in a wrapping row with a fixed card width', () => {
    render(<Projects />);
    const rows = document.querySelectorAll('#projects .d-flex.row');
    expect(rows).toHaveLength(2);
    const cards = document.querySelectorAll('#projects .card');
    expect(cards.length).toBeGreaterThanOrEqual(projectCards.length);
    for (const card of cards) {
      expect(card).toHaveClass('col-12', 'mx-2', 'mb-1');
      expect((card as HTMLElement).style.width).toMatch(/rem$/);
    }
  });
});
