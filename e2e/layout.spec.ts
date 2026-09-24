import { expect, test } from '@playwright/test';

test.describe('resume layout', () => {
  test('shows the primary sections and does not overflow horizontally', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('JDSCraft');

    for (const id of ['about', 'projects', 'skills', 'services']) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeVisible();
      await expect(section).toHaveClass(/resume-section/);
    }

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('uses the fixed side navigation on desktop and the top bar on small screens', async ({
    page,
  }) => {
    await page.goto('/');
    const width = page.viewportSize()?.width ?? 0;
    const sideNav = page.locator('#sideNav');
    const position = await sideNav.evaluate((element) => getComputedStyle(element).position);
    const brand = page.locator('.navbar-brand .d-lg-none');
    const profile = page.locator('.navbar-brand img');

    if (width >= 992) {
      expect(position).toBe('fixed');
      const box = await sideNav.boundingBox();
      expect(box?.x).toBe(0);
      expect(box?.width).toBeGreaterThan(250);
      expect(box?.width).toBeLessThan(290);
      const bodyPadding = await page.evaluate(() => getComputedStyle(document.body).paddingLeft);
      expect(bodyPadding).toBe('272px');
      await expect(profile).toBeVisible();
      await expect(brand).toBeHidden();
    } else {
      expect(position).toBe('fixed');
      await expect(brand).toBeVisible();
      await expect(brand).toHaveText('JDSCraft');
      await expect(profile).toBeHidden();
      const bodyPadding = await page.evaluate(() => getComputedStyle(document.body).paddingLeft);
      expect(bodyPadding).toBe('0px');
    }
  });

  test('keeps section headings uppercase and social icons circular', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('#about h1');
    await expect(heading).toBeVisible();
    const transform = await heading.evaluate((element) => getComputedStyle(element).textTransform);
    expect(transform).toBe('uppercase');

    const icon = page.locator('.social-icon').first();
    const iconBox = await icon.boundingBox();
    expect(iconBox?.width).toBeCloseTo(56, 0);
    expect(iconBox?.height).toBeCloseTo(56, 0);
  });

  test('scrolls to a section when its navigation link is used', async ({ page }) => {
    await page.goto('/');
    const width = page.viewportSize()?.width ?? 0;
    if (width < 992) {
      await page.getByRole('button', { name: 'Toggle navigation' }).click();
    }
    await page.locator('.nav-link[href="#skills"]').click();
    await expect(page.locator('#skills')).toBeInViewport();
  });
});
