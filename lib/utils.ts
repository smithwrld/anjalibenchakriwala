import { type ClassValue } from "clsx";

/**
 * Utility function to merge class names
 * This is a simplified version that doesn't require clsx dependency
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
}
