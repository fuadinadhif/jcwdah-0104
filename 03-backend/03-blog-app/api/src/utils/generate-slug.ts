export function generateSlug(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace at start and end
    .replace(/[^\w\s-]/g, "") // Remove non-word characters (letters, numbers, _)
    .replace(/[\s_-]+/g, "-") // Replace spaces, underscores, and repeated dashes with single dash
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}
