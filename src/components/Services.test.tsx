import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Services from './Services';

describe('Services', () => {
  it('renders the services section and the three offerings', () => {
    render(<Services />);

    const section = document.getElementById('services');
    expect(section).toHaveClass('resume-section');
    expect(
      screen.getByRole('heading', { level: 2, name: 'AI & LLM Services' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'AI Adoption Planning' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'AI Integration Services' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Architecture Services for AI in the Cloud',
      }),
    ).toBeInTheDocument();
  });

  it('describes the planning deliverables and integration work', () => {
    render(<Services />);
    expect(
      screen.getByText(
        'Deliver an AI adoption plan with key performance indicators (KPIs) to measure success',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Write AI policies for acceptable use, data handling, and accountability',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Develop security plans for safely adopting and operating AI systems',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Facilitate AI governance committees so leadership can review risk and approve use',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Retrieval-Augmented Generation (RAG) pipeline development'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Establish common capabilities, processes, and tools'),
    ).toBeInTheDocument();
  });
});
