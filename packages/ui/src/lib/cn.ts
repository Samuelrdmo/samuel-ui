import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Class joiner for every component here. Later arguments win conflicts, which
 * is what lets a consumer's `className` override a component's own styles.
 *
 * DS-GUARD: twMerge only dedupes utilities it can classify. Custom keys from
 * our Tailwind preset (`shadow-focus`, `rounded-md`, ...) are NOT recognised as
 * members of their group — `shadow-focus` in particular reads as a shadow
 * *color*, so it will not cancel out an arbitrary `shadow-[...]`. Both classes
 * survive and plain stylesheet order picks the winner, which is unstable.
 *
 * Practical rule: never put a utility in a cva base string expecting a variant
 * to override it, unless it is a stock Tailwind utility. Declare it per variant
 * instead. See the focus rings in components/button/Button.tsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
