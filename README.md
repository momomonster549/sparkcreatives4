# SparkCreatives Inc. - Clothing Donation Platform

A React-based web platform for SparkCreatives Inc., a nonprofit organization focused on clothing donations for underserved communities in the Philippines.

## Project Overview

This platform serves as the digital presence for SparkCreatives Inc., facilitating clothing donations, volunteer recruitment, and community engagement. The design follows the principles of "Elegant Minimalism with Creative Precision" to create an impactful and accessible user experience.

## Design System

The project implements a comprehensive design system with the following key components:

### Core Design Elements

- **Color System**: Brand colors (blue, teal, orange, purple, green) with semantic variations
- **Typography**: Inter font family with a comprehensive type scale
- **Spacing**: Consistent spacing scale for layout and component spacing
- **Shadows & Elevation**: Layered shadow system for depth and hierarchy
- **Border Radius**: Consistent rounding for UI elements

### Component Library

- **Button**: Multiple variants (default, primary, gradient, outline, ghost, link, secondary)
- **Card**: Flexible container with header, content, and footer sub-components
- **Input**: Form controls with various states and validation
- **Header**: Responsive navigation with dropdown menus
- **Footer**: Multi-column layout with navigation and social links
- **Hero**: Impactful landing section with background and call-to-action
- **Section Components**: Mission, Impact, Donation Process, Testimonials, etc.

### Animation & Transitions

- Subtle micro-interactions for UI feedback
- Page transitions and scroll-triggered animations
- Loading states and feedback animations

## Technical Implementation

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Build Tool**: Vite
- **Utility Libraries**: clsx, tailwind-merge for class name handling
- **Icons**: Lucide React for consistent iconography

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- ARIA attributes for interactive elements
- Color contrast compliance
- Focus indicators for interactive elements

## Performance Considerations

- Optimized image loading
- Component-level code splitting
- CSS optimization via Tailwind
- Responsive design for all device sizes

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
/src
  /assets        # Images, icons, and other static assets
  /components
    /ui          # Reusable UI components (Button, Card, Input)
    /layout      # Layout components (Header, Footer)
    /home        # Page-specific components
  /lib           # Utility functions and helpers
  App.tsx        # Main application component
  main.tsx       # Application entry point
```

## Design Documentation

For detailed design specifications, refer to the design-documentation.md file in the project root.
