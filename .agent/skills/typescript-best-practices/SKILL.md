---
name: typescript-best-practices
description: Guidelines and professional standards for TypeScript development in this backend project.
---

# TypeScript Best Practices Skill

Use this skill to ensure all code written in this repository follows high-quality, professional TypeScript standards.

## Core Principles

### 1. Type Safety
- **Strict Mode**: Always keep `strict: true` in `tsconfig.json`.
- **Avoid `any`**: Never use `any`. Use `unknown` if the type is truly dynamic, and use type guards or casting only when safe.
- **Explicit Types**: Prefer type inference for simple declarations, but use explicit return types for functions to improve readability and catch logic errors.

### 2. Modern Features
- **ES Modules**: Use `import`/`export` syntax.
- **Async/Await**: Prefer `async`/`await` over raw Promises. 
- **Optional Chaining & Nullish Coalescing**: Use `?.` and `??` for cleaner code.

### 3. Error Handling
- **Never Silent**: Don't use empty `catch` blocks.
- **Typed Errors**: When catching, use `instanceof Error` to narrow down the `unknown` error type.
- **Result Pattern**: Consider using a Result/Either pattern for complex operations that can fail in predictable ways.

### 4. Clean Code
- **Small Functions**: Keep functions focused on a single responsibility.
- **Naming**: Use descriptive names. Avoid abbreviations.
- **Interfaces vs Types**: Prefer `interface` for structural contracts and `type` for unions, intersections, or aliases.

## Examples

### Proper Error Handling
```typescript
try {
  await performAction();
} catch (error) {
  if (error instanceof Error) {
    logger.error(`Error performing action: ${error.message}`);
  } else {
    logger.error('An unknown error occurred');
  }
}
```

### Using `unknown`
```typescript
function processData(input: unknown) {
  if (typeof input === 'string') {
    return input.trim();
  }
  return '';
}
```
