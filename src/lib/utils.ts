// ============================================================================
// CR AUDIOVIZ AI - GAMES HUB
// Utility Functions
// ============================================================================

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { DifficultyLevel, GameCategory } from '@/types';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number with K, M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

/**
 * Format credits with proper display
 */
export function formatCredits(credits: number): string {
  return credits.toLocaleString();
}

/**
 * Get relative time string
 */
export function getRelativeTime(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}

/**
 * Get difficulty color based on level
 */
export function getDifficultyColor(level: DifficultyLevel): string {
  if (level <= 2) return 'text-green-400';
  if (level <= 4) return 'text-emerald-400';
  if (level <= 6) return 'text-yellow-400';
  if (level <= 8) return 'text-orange-400';
  return 'text-red-400';
}

/**
 * Get category color
 */
export function getCategoryColor(category: GameCategory): string {
  const colors: Record<GameCategory, string> = {
    action: '#ff2d55',
    strategy: '#5856d6',
    puzzle: '#ffcc00',
    racing: '#ff9500',
    rpg: '#af52de',
    simulation: '#30d158',
    shooter: '#ff3b30',
    card: '#007aff',
    multiplayer: '#00c7be',
    ai: '#bf5af2',
  };
  return colors[category];
}

/**
 * Get category gradient class
 */
export function getCategoryGradient(category: GameCategory): string {
  const gradients: Record<GameCategory, string> = {
    action: 'from-red-500 to-pink-600',
    strategy: 'from-indigo-500 to-purple-600',
    puzzle: 'from-yellow-400 to-orange-500',
    racing: 'from-orange-500 to-red-500',
    rpg: 'from-purple-500 to-pink-500',
    simulation: 'from-green-500 to-emerald-600',
    shooter: 'from-red-600 to-orange-500',
    card: 'from-blue-500 to-cyan-500',
    multiplayer: 'from-teal-500 to-cyan-500',
    ai: 'from-purple-600 to-violet-600',
  };
  return gradients[category];
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Sleep/delay function
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clamp number between min and max
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Lerp (linear interpolation)
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Random number in range
 */
export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Random integer in range
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(randomRange(min, max + 1));
}

/**
 * Shuffle array
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Check if device supports touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Get viewport dimensions
 */
export function getViewport(): { width: number; height: number } {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Request fullscreen
 */
export function requestFullscreen(element: HTMLElement): Promise<void> {
  if (element.requestFullscreen) {
    return element.requestFullscreen();
  }
  return Promise.resolve();
}

/**
 * Exit fullscreen
 */
export function exitFullscreen(): Promise<void> {
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  }
  return Promise.resolve();
}

/**
 * Check if in fullscreen
 */
export function isFullscreen(): boolean {
  if (typeof document === 'undefined') return false;
  return !!document.fullscreenElement;
}

/**
 * Play sound effect
 */
export function playSound(src: string, volume: number = 1): void {
  if (typeof window === 'undefined') return;
  const audio = new Audio(src);
  audio.volume = clamp(volume, 0, 1);
  audio.play().catch(() => {});
}

/**
 * Vibrate device
 */
export function vibrate(pattern: number | number[]): void {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return;
  navigator.vibrate(pattern);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Local storage helpers
 */
export const storage = {
  get<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or unavailable
    }
  },
  remove(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
};

/**
 * Format duration from seconds
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate star rating display
 */
export function getStarRating(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}
