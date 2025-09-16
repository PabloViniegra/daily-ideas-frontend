# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.3 frontend application for a daily ideas tracker, built with TypeScript, React 19, and Tailwind CSS. The project uses shadcn/ui components and follows a modern Next.js App Router architecture.

## Key Commands

- **Development**: `npm run dev` or `pnpm dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` (uses Turbopack)
- **Start production**: `npm start`
- **Lint**: `npm run lint` (ESLint with Next.js rules, enforces single quotes and no semicolons)

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components organized by category:
  - `ui/` - shadcn/ui base components
  - `shared/` - Shared application components
  - `server/` - Server-side components
  - `ai-elements/` - AI-related UI elements
  - `animate-ui/` - Animation components
- `src/lib/` - Utility functions and configurations
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions
- `src/consts/` - Application constants

### Component System

The project uses shadcn/ui with the "new-york" style variant. Components are configured with:

- Path aliases: `@/components`, `@/lib/utils`, `@/ui`, `@/hooks`
- Tailwind CSS with CSS variables
- Shadcn UI components for accessible components

### Styling

- Tailwind CSS v4 with PostCSS
- Dark mode support via `next-themes`
- CSS variables for theming
- Use the global styles defined in `globals.css`

### Development Tools

- TypeScript with strict mode
- ESLint with Next.js rules (single quotes, no semicolons)
- Turbopack for fast development and builds
- Motion library for animations
- Lenis for smooth scrolling

## Key Dependencies

- **UI**: Radix UI primitives, Lucide React icons, class-variance-authority
- **Styling**: Tailwind CSS, tailwind-merge, clsx
- **Animation**: Motion library, Lenis smooth scroll
- **Themes**: next-themes for dark/light mode

### Things you MUST do

- Follow user's requirements carefully & to the letter.
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
- Confirm, then write the code!
- Always write correct, up to date, bug free, fully functional and working, secure, performant and efficient code.
- Focus on readability over performant.
- Fully implement all requested functionality.
- Leave NO Todo's, placeholders and missing pieces.
- Be sure to reference filenames.
- Be concise. Minimize any other prose.
- If you think there might not be a correct answer, you say so. If you don't know the answer, say so instead of guessing.
