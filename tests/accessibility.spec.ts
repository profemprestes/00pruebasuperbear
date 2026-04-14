import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('home page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    // Wait for password screen to load
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    // Log violations for debugging
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Accessibility violations:');
      accessibilityScanResults.violations.forEach(violation => {
        console.log(`- ${violation.id}: ${violation.description}`);
        console.log(`  Impact: ${violation.impact}`);
        console.log(`  Nodes: ${violation.nodes.length}`);
      });
    }
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('interactive elements should be accessible', async ({ page }) => {
    await page.goto('/');
    
    // Wait for password screen
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    
    // Check input has accessible name
    const inputLabel = await passwordInput.getAttribute('aria-label');
    expect(inputLabel).toBeTruthy();
    
    // Check buttons are accessible
    const buttons = page.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
    
    // Verify first button is accessible
    if (count > 0) {
      const firstButton = buttons.first();
      const buttonText = await firstButton.textContent();
      expect(buttonText).toBeTruthy();
    }
  });
});
