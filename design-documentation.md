# SparkCreatives Inc. Design Documentation

## 1. Design Principles & Brand Identity

### 1.1 Core Design Philosophy
- **Elegant Minimalism with Creative Precision**: Balance simplicity with thoughtful details
- **Empathy-Driven Design**: Center user needs while conveying emotional impact
- **Accessible Sophistication**: Premium feel without sacrificing inclusivity
- **Purposeful Animation**: Motion that enhances understanding, not distracts

### 1.2 Brand Identity

#### Logo Usage
- Primary logo: Full color on white/light backgrounds
- Reversed logo: White on dark backgrounds or photos
- Minimum size: 120px width for desktop, 80px for mobile
- Clear space: Maintain padding equal to 25% of logo height on all sides

#### Brand Voice
- Compassionate but not pitying
- Optimistic but realistic
- Professional but warm
- Action-oriented but patient

## 2. Visual Specifications

### 2.1 Color System

#### Primary Colors
```css
--brand-blue: #2563EB;     /* Primary actions, links, key highlights */
--brand-teal: #06B6D4;     /* Secondary actions, accents, success states */
--brand-orange: #F97316;   /* Warnings, attention-grabbing elements */
--brand-purple: #8B5CF6;   /* Special features, premium elements */
--brand-green: #10B981;    /* Success states, positive indicators */
```

#### Neutral Colors
```css
--gray-50: #F9FAFB;        /* Background, light mode */
--gray-100: #F3F4F6;       /* Card backgrounds, alternating rows */
--gray-200: #E5E7EB;       /* Borders, dividers, separators */
--gray-300: #D1D5DB;       /* Disabled elements */
--gray-400: #9CA3AF;       /* Placeholder text */
--gray-500: #6B7280;       /* Secondary text */
--gray-600: #4B5563;       /* Body text */
--gray-700: #374151;       /* Headings */
--gray-800: #1F2937;       /* High-emphasis text */
--gray-900: #111827;       /* Highest emphasis text */
```

#### Semantic Colors
```css
--success: #10B981;        /* Success messages, completed states */
--warning: #F97316;        /* Warning messages, alerts */
--error: #EF4444;          /* Error messages, destructive actions */
--info: #3B82F6;           /* Information messages, neutral alerts */
```

#### Gradients
```css
--gradient-blue-teal: linear-gradient(135deg, var(--brand-blue), var(--brand-teal));
--gradient-purple-blue: linear-gradient(135deg, var(--brand-purple), var(--brand-blue));
--gradient-orange-red: linear-gradient(135deg, var(--brand-orange), #EF4444);
```

#### Opacity Variants
Each brand color has opacity variants at 5%, 10%, 20%, 30%, 50%, and 70% for backgrounds, overlays, and subtle UI elements.

### 2.2 Typography

#### Font Family
```css
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

#### Font Sizes
```css
--font-size-xs: 0.75rem;    /* 12px - Fine print, captions */
--font-size-sm: 0.875rem;   /* 14px - Secondary text, UI elements */
--font-size-base: 1rem;     /* 16px - Body text */
--font-size-lg: 1.125rem;   /* 18px - Large body text, small headings */
--font-size-xl: 1.25rem;    /* 20px - Section headings */
--font-size-2xl: 1.5rem;    /* 24px - Subsection headings */
--font-size-3xl: 1.875rem;  /* 30px - Page headings */
--font-size-4xl: 2.25rem;   /* 36px - Major headings */
--font-size-5xl: 3rem;      /* 48px - Hero headings */
--font-size-6xl: 3.75rem;   /* 60px - Display headings */
```

#### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

#### Line Heights
```css
--line-height-tight: 1.25;     /* Headings */
--line-height-snug: 1.375;     /* Short paragraphs */
--line-height-normal: 1.5;     /* Body text */
--line-height-relaxed: 1.625;  /* Longer reading */
--line-height-loose: 2;        /* Spacious text */
```

#### Heading Styles
- **H1**: 3rem (48px), font-weight-bold, line-height-tight, letter-spacing: -0.025em
- **H2**: 2.25rem (36px), font-weight-bold, line-height-tight, letter-spacing: -0.025em
- **H3**: 1.875rem (30px), font-weight-semibold, line-height-tight
- **H4**: 1.5rem (24px), font-weight-semibold, line-height-tight
- **H5**: 1.25rem (20px), font-weight-semibold, line-height-tight
- **H6**: 1.125rem (18px), font-weight-semibold, line-height-tight

### 2.3 Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
--space-48: 12rem;    /* 192px */
--space-56: 14rem;    /* 224px */
--space-64: 16rem;    /* 256px */
```

#### Spacing Application Guidelines
- **Component Internal Padding**: Use --space-4 to --space-6 for most components
- **Component Margins**: Use --space-6 to --space-8 between components
- **Section Padding**: Use --space-12 to --space-24 for vertical section padding
- **Grid Gutters**: Use --space-4 to --space-8 depending on content density

### 2.4 Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Small devices (mobile landscape) */
--breakpoint-md: 768px;   /* Medium devices (tablets) */
--breakpoint-lg: 1024px;  /* Large devices (desktops) */
--breakpoint-xl: 1280px;  /* Extra large devices (large desktops) */
--breakpoint-2xl: 1536px; /* Extra extra large devices */
```

#### Responsive Behavior Guidelines
- **Mobile-first approach**: Base styles are for mobile, then enhance for larger screens
- **Critical breakpoints**: Focus on --breakpoint-md and --breakpoint-lg for most layout changes
- **Container behavior**:
  - Max-width: 1280px (--breakpoint-xl)
  - Horizontal padding: 1rem on mobile, 2rem on tablet, 4rem on desktop

### 2.5 Shadows & Elevation

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
--shadow-glow: 0 0 15px rgba(59, 130, 246, 0.5);
--shadow-glow-teal: 0 0 15px rgba(20, 184, 166, 0.5);
```

#### Elevation Guidelines
- **Level 0**: No shadow (flat elements, backgrounds)
- **Level 1**: --shadow-sm (subtle elements, cards at rest)
- **Level 2**: --shadow (cards, dropdowns)
- **Level 3**: --shadow-md (floating elements, popovers)
- **Level 4**: --shadow-lg (modals, dialogs)
- **Level 5**: --shadow-xl (important notifications, spotlight elements)
- **Special**: --shadow-glow (focused or active primary elements)

### 2.6 Border Radius

```css
--radius-none: 0;
--radius-sm: 0.125rem;    /* 2px */
--radius-default: 0.25rem; /* 4px */
--radius-md: 0.375rem;     /* 6px */
--radius-lg: 0.5rem;       /* 8px */
--radius-xl: 0.75rem;      /* 12px */
--radius-2xl: 1rem;        /* 16px */
--radius-3xl: 1.5rem;      /* 24px */
--radius-full: 9999px;     /* Fully rounded (circles, pills) */
```

#### Border Radius Application
- **Buttons**: --radius-lg (8px)
- **Input fields**: --radius-lg (8px)
- **Cards**: --radius-xl (12px)
- **Chips/Tags**: --radius-full
- **Modals/Dialogs**: --radius-2xl (16px)
- **Tooltips**: --radius-md (6px)

## 3. Component Documentation

### 3.1 Button Component

#### Variants
1. **Default**: Blue background, white text
2. **Primary**: Blue background with shadow, white text
3. **Gradient**: Blue-to-teal gradient background, white text
4. **Outline**: Transparent with border, dark text
5. **Ghost**: Transparent background, dark text
6. **Link**: No background, blue text with underline on hover
7. **Secondary**: Light gray background, dark text

#### Sizes
1. **Small (sm)**: Height 36px, padding 12px, font-size-sm
2. **Medium (md)**: Height 40px, padding 16px, font-size-base
3. **Large (lg)**: Height 48px, padding 24px, font-size-lg

#### States
1. **Default**: Base styling
2. **Hover**: Slightly darker background, shadow increase
3. **Focus**: Ring outline (2px, offset 2px)
4. **Active**: Scale down slightly (98%), darker background
5. **Disabled**: 50% opacity, no hover effects, not clickable
6. **Loading**: Show spinner icon, maintain width, disable clicks

#### Properties
- `variant`: Determines visual style
- `size`: Controls button dimensions
- `fullWidth`: Boolean to make button fill container width
- `isLoading`: Boolean to show loading state
- `leftIcon`: Optional icon before text
- `rightIcon`: Optional icon after text
- `disabled`: Boolean to disable button

#### Accessibility
- Minimum touch target size: 44px × 44px
- Color contrast ratio: 4.5:1 minimum
- Focus visible indicator required
- Aria-disabled when in disabled state
- Aria-busy when in loading state

### 3.2 Card Component

#### Variants
1. **Default**: White background, light shadow
2. **Elevated**: White background, medium shadow
3. **Outline**: White background, border
4. **Glass**: Semi-transparent white, backdrop blur
5. **Gradient**: Subtle gradient background

#### Sub-components
1. **CardHeader**: Top section, typically contains title and description
2. **CardTitle**: Heading element, typically h3
3. **CardDescription**: Secondary text below title
4. **CardContent**: Main content area
5. **CardFooter**: Bottom section, typically contains actions

#### States
1. **Default**: Base styling
2. **Hover**: Optional shadow increase and slight upward movement
3. **Focus-within**: Subtle highlight when child elements are focused

#### Properties
- `variant`: Determines visual style
- `hoverEffect`: Boolean to enable hover animation
- `className`: For custom styling

#### Usage Guidelines
- Maintain consistent padding (24px) inside cards
- Limit content to maintain readability
- Use appropriate heading levels for card titles
- Group related actions in card footer
- Maintain consistent spacing between cards (32px)

### 3.3 Input Component

#### Variants
1. **Default**: Border with rounded corners
2. **Outline**: Thicker border, transparent background
3. **Filled**: Light gray background, border on focus
4. **Underlined**: Bottom border only

#### States
1. **Default**: Base styling
2. **Focus**: Border color change, ring outline
3. **Disabled**: Reduced opacity, not editable
4. **Error**: Red border, error message below
5. **With Icon**: Left or right icon positioning

#### Properties
- `variant`: Determines visual style
- `fullWidth`: Boolean to make input fill container width
- `leftIcon`: Optional icon at start of input
- `rightIcon`: Optional icon at end of input
- `error`: Optional error message string
- `disabled`: Boolean to disable input

#### Accessibility
- Label association required (either visible label or aria-label)
- Error messages linked via aria-describedby
- Sufficient color contrast for placeholder text
- Focus visible indicator required

### 3.4 Header Component

#### Layout
- Fixed position at top of viewport
- Full width with max-width container
- Height: 80px on desktop, 64px on mobile
- Logo on left, navigation in center, actions on right
- Mobile: Logo on left, hamburger menu on right

#### Responsive Behavior
- Desktop (>= 1024px): Full horizontal navigation
- Mobile (< 1024px): Hamburger menu with slide-in drawer

#### States
1. **Default**: Solid white background
2. **Scrolled**: Add shadow for depth
3. **Mobile Open**: Menu drawer visible

#### Interactions
- Smooth transition for menu opening/closing
- Dropdown menus for nested navigation
- Active state for current page

### 3.5 Footer Component

#### Layout
- Multi-column grid on desktop
- Single column stacked on mobile
- Logo and tagline in first column
- Navigation links grouped by category
- Newsletter signup form
- Social media links
- Copyright and legal links at bottom

#### Responsive Behavior
- Desktop (>= 1024px): 4-column grid
- Tablet (>= 768px, < 1024px): 2-column grid
- Mobile (< 768px): Single column

#### Content Sections
1. **Brand**: Logo, tagline, brief description
2. **Navigation Groups**: 2-3 columns of categorized links
3. **Connect**: Newsletter signup, social media links
4. **Legal**: Copyright, terms, privacy policy

## 4. User Flows

### 4.1 Donation Flow

#### Step 1: Initiation
- Entry points: "Donate" button in header, CTA buttons throughout site
- Action: Click on donation CTA
- Transition: Smooth page scroll or navigation to donation form

#### Step 2: Donation Form
- Layout: Multi-step form with progress indicator
- Fields:
  - Donation amount (predefined options + custom)
  - Frequency (one-time, monthly, annual)
  - Donor information (name, email, address)
  - Payment information
- Validation: Inline, real-time validation with clear error messages
- Accessibility: Form fields properly labeled and grouped

#### Step 3: Confirmation
- Summary of donation details
- Payment processing indicator
- Success message with animation
- Option to receive email receipt
- Suggested next actions (share, learn more)

#### Error Handling
- Payment failure: Clear error message with retry option
- Validation errors: Inline indicators with specific guidance
- Session timeout: Auto-save progress, prompt to continue

### 4.2 Newsletter Signup Flow

#### Step 1: Form Completion
- Location: Footer, dedicated popup, or embedded in content
- Fields: Email (required), Name (optional), Interests (optional)
- Validation: Real-time email format validation
- Submit: Clear CTA button with loading state

#### Step 2: Confirmation
- Success message with animation
- Instructions to check email
- Suggested content to explore

#### Step 3: Email Verification (External)
- Verification email sent
- One-click verification link
- Welcome email after verification

#### Error Handling
- Invalid email: Inline error message
- Already subscribed: Friendly notification with alternative actions
- Submission failure: Error message with retry option

### 4.3 Content Exploration Flow

#### Step 1: Entry
- Primary navigation categories
- Featured content cards on homepage
- Search functionality in header

#### Step 2: Category/Section Pages
- Header with section title and description
- Filterable grid of content cards
- Pagination or infinite scroll for additional content

#### Step 3: Detail Pages
- Hero section with title, image, and key information
- Rich content area with multimedia support
- Related content suggestions
- Sharing options
- Next/previous navigation

#### Navigation Patterns
- Breadcrumbs for hierarchical navigation
- "Back to top" button on long pages
- Sticky header for persistent navigation access
- Related content cross-linking

## 5. Accessibility Requirements

### 5.1 Compliance Level
- Target: WCAG 2.1 Level AA compliance
- Priority areas: Navigation, forms, dynamic content

### 5.2 Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators for all interactive elements
- Logical tab order following visual layout
- Keyboard shortcuts for power users (with documentation)
- Skip links for bypassing repetitive navigation

### 5.3 Screen Reader Compatibility
- Semantic HTML structure with appropriate landmarks
- Proper heading hierarchy (h1-h6)
- Alt text for all images (descriptive, contextual)
- ARIA labels for interactive elements without visible text
- ARIA roles, states, and properties for custom components
- Live regions for dynamic content updates

### 5.4 Visual Accessibility
- Minimum text contrast ratio: 4.5:1 (AA standard)
- Minimum UI component contrast ratio: 3:1
- Text resizable up to 200% without loss of functionality
- No information conveyed by color alone
- Focus indicators with minimum 3:1 contrast ratio
- Support for reduced motion preferences

### 5.5 Form Accessibility
- Explicit label association with form controls
- Error messages linked to respective fields
- Form validation errors must be announced to screen readers
- Required fields clearly indicated (both visually and programmatically)
- Sufficient time to complete forms (no aggressive timeouts)

## 6. Design Patterns & Reusable Elements

### 6.1 Navigation Patterns
- **Primary Navigation**: Horizontal menu with dropdowns
- **Mobile Navigation**: Off-canvas drawer with accordion submenus
- **Breadcrumbs**: For deep hierarchical navigation
- **Pagination**: For multi-page content
- **Tabs**: For switching between related content sections

### 6.2 Data Display Patterns
- **Cards**: For displaying content previews
- **Lists**: For sequential information
- **Tables**: For structured data comparison
- **Stats**: For highlighting key metrics
- **Timeline**: For chronological information

### 6.3 Form Patterns
- **Input Groups**: Label, input, helper text, error message
- **Selection Controls**: Checkboxes, radio buttons, toggles
- **Multi-step Forms**: Progress indicator, step navigation
- **Search**: Input with clear button and suggestions
- **Filters**: Applied filters with clear indicators

### 6.4 Feedback Patterns
- **Toasts**: For temporary notifications
- **Alerts**: For important persistent messages
- **Progress Indicators**: For long operations
- **Empty States**: For zero-data conditions
- **Error States**: For system or user errors

### 6.5 Layout Patterns
- **Hero Sections**: Full-width with background image/video
- **Feature Grids**: 2-4 columns of feature highlights
- **Split Screens**: 50/50 or 60/40 content divisions
- **Z-Pattern**: For marketing content flow
- **Card Grids**: Responsive grid of card components

## 7. Technical Constraints & Integration

### 7.1 Technology Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icon System**: Lucide React
- **Utility Libraries**: clsx, tailwind-merge

### 7.2 Performance Requirements
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Total Bundle Size**: < 200KB (compressed)

### 7.3 Browser Support
- **Modern Browsers**: Latest 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Minimum Support**: IE11 with graceful degradation

### 7.4 Integration Points
- **Analytics**: Google Analytics 4 event tracking
- **Forms**: Custom form handling with validation
- **Media**: Optimized image loading with lazy loading
- **Third-party Services**: Newsletter integration

### 7.5 Development Constraints
- Component-based architecture
- Atomic design methodology
- Mobile-first responsive approach
- Accessibility-first implementation
- Performance budgets enforced

## 8. Asset Management

### 8.1 Image Guidelines
- **Formats**:
  - Photos: WebP with JPEG fallback
  - Icons: SVG (inline for critical, external for others)
  - Illustrations: SVG or WebP
- **Sizing**:
  - Hero images: 1920×1080px source, responsive serving
  - Thumbnails: 400×300px minimum
  - Icons: 24×24px standard, provided at 1x and 2x
- **Optimization**:
  - Compression: 80-85% quality for photos
  - SVG optimization: Remove unnecessary metadata
  - Responsive images: srcset and sizes attributes

### 8.2 File Organization
- **Directory Structure**:
  ```
  /assets
    /images
      /photos      # Photographic content
      /icons       # UI icons
      /illustrations # Decorative illustrations
      /backgrounds # Background patterns/images
    /fonts         # Web font files
    /videos        # Video content
  ```
- **Naming Convention**:
  - All lowercase
  - Hyphen-separated words
  - Descriptive names (e.g., hero-donation-mobile.webp)
  - Size suffixes where applicable (e.g., logo-sm.svg)

### 8.3 Icon System
- **Implementation**: Lucide React for consistent styling
- **Custom Icons**: SVG format, 24×24px viewBox
- **Usage Pattern**: Import individual icons to minimize bundle size
- **Accessibility**: Provide aria-label for standalone icons

## 9. Animation & Transition Specifications

### 9.1 Timing & Easing
- **Duration Guidelines**:
  - Ultra-fast (subtle): 100-150ms
  - Fast (UI feedback): 150-200ms
  - Medium (transitions): 200-300ms
  - Slow (emphasis): 300-500ms
  - Very slow (special): 500-1000ms
- **Easing Functions**:
  - Standard: cubic-bezier(0.4, 0, 0.2, 1)
  - Entrance: cubic-bezier(0, 0, 0.2, 1)
  - Exit: cubic-bezier(0.4, 0, 1, 1)
  - Emphasis: cubic-bezier(0.4, 0, 0.6, 1)

### 9.2 Micro-interactions
- **Button Hover**: Scale to 102%, shadow increase
- **Button Active**: Scale to 98%, background darkens
- **Card Hover**: Translate Y by -4px, shadow increase
- **Input Focus**: Border color change, subtle glow effect
- **Checkbox/Toggle**: Smooth state transition with color change

### 9.3 Page Transitions
- **Page Entry**: Fade in (opacity 0 to 1), slight upward movement
- **Section Reveal**: Staggered fade-in for sequential elements
- **Modal Open/Close**: Fade + scale (from 95% to 100%)
- **Drawer Open/Close**: Slide from edge with overlay fade

### 9.4 Content Animations
- **Loading States**: Pulsing animation for skeleton loaders
- **Data Updates**: Subtle highlight for changed values
- **Success Feedback**: Check mark animation with success color
- **Error Feedback**: Gentle shake animation for invalid inputs
- **Scroll-triggered Animations**: Fade and slide in from bottom

### 9.5 Performance Considerations
- Use CSS transforms and opacity for smooth performance
- Limit animations on mobile devices
- Respect reduced-motion preferences
- Avoid layout thrashing by batching DOM reads/writes
- Use will-change sparingly and only when needed

## 10. Design System Implementation

### 10.1 Component Architecture
- **Atomic Design Methodology**:
  - Atoms: Buttons, inputs, icons, typography
  - Molecules: Form groups, cards, navigation items
  - Organisms: Forms, headers, footers, sections
  - Templates: Page layouts, grid systems
  - Pages: Complete page implementations

### 10.2 Tailwind Implementation
- **Custom Theme Extension**:
  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          'brand-blue': '#2563EB',
          'brand-teal': '#06B6D4',
          // Additional colors...
        },
        // Additional theme extensions...
      }
    }
  }
  ```
- **Custom Utilities**:
  - Gradient text: `.gradient-text`
  - Animated underlines: `.animated-underline`
  - Card hover effects: `.hover-lift`

### 10.3 CSS Variables Integration
- **Root Variables**:
  ```css
  :root {
    --brand-blue: #2563EB;
    --brand-teal: #06B6D4;
    /* Additional variables... */
  }
  ```
- **Dark Mode Variables**:
  ```css
  @media (prefers-color-scheme: dark) {
    :root {
      --brand-blue: #3B82F6;
      /* Adjusted colors for dark mode... */
    }
  }
  ```

### 10.4 Component Props API
- **Consistent Pattern**:
  - variant: Visual style variant
  - size: Component size
  - className: For custom styling
  - children: For component content
  - Additional component-specific props

### 10.5 Theming Support
- **Color Modes**: Light/dark mode support via CSS variables
- **Theme Switching**: React context for theme state management
- **User Preferences**: Respect prefers-color-scheme media query
- **Persistence**: Store user preference in localStorage

## 11. Performance Guidelines

### 11.1 Image Optimization
- Use WebP format with JPEG fallback
- Implement responsive images with srcset and sizes
- Lazy load images below the fold
- Specify image dimensions to prevent layout shift
- Use appropriate image resolution for display size

### 11.2 JavaScript Optimization
- Code splitting for route-based chunking
- Tree shaking to eliminate unused code
- Defer non-critical JavaScript
- Use React.lazy for component-level code splitting
- Implement proper memoization for expensive calculations

### 11.3 CSS Optimization
- Purge unused styles in production
- Minimize CSS specificity
- Avoid large animation libraries
- Use CSS variables for runtime theme switching
- Implement critical CSS for above-the-fold content

### 11.4 Font Loading Strategy
- Use system font stack as fallback
- Preload critical fonts
- Implement font-display: swap
- Subset fonts to include only necessary characters
- Limit font weight variations

### 11.5 Performance Monitoring
- Implement Core Web Vitals monitoring
- Set up performance budgets in build process
- Regular Lighthouse audits
- Real User Monitoring (RUM) for field data
- Performance regression testing in CI/CD pipeline
