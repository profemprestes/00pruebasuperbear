import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Enable safe area insets for iOS and Android
  viewportFit: 'cover',
  // Prevent zoom on input focus (iOS)
  maximumScale: 1,
  userScalable: false,
  // Theme color for mobile browsers
  themeColor: '#87CEEB',
};
