import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a fixed primary navbar with a labeled menu toggle', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');

    expect(nav).toHaveAttribute('id', 'sideNav');
    expect(nav).toHaveClass(
      'navbar',
      'navbar-expand-lg',
      'navbar-dark',
      'bg-primary',
      'fixed-top',
    );
    expect(
      screen.getByRole('button', { name: 'Toggle navigation' }),
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('brands the mobile bar and links the profile back to the top', () => {
    render(<Navigation />);
    expect(screen.getByText('JDSCraft')).toHaveClass('d-block', 'd-lg-none');
    const brand = document.querySelector('.navbar-brand') as HTMLAnchorElement;
    expect(brand).toHaveAttribute('href', '#page-top');
    expect(brand.querySelector('img')).toHaveAttribute('src', 'img/avatar.jpg');
    expect(brand.querySelector('.d-none.d-lg-block')).toBeInTheDocument();
  });

  it('credits Vite and React with external logos', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: 'Vite logo' })).toHaveAttribute(
      'href',
      'https://vitejs.dev',
    );
    expect(screen.getByRole('link', { name: 'React logo' })).toHaveAttribute(
      'href',
      'https://react.dev',
    );
    expect(screen.getByText('Built using Vite + React')).toBeInTheDocument();
  });
});
