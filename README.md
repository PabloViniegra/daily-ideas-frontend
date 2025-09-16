# Daily Ideas Frontend

A modern Next.js 15.5.3 frontend application for tracking and generating daily project ideas. Built with TypeScript, React 19, and Tailwind CSS 4, featuring a beautiful stacking card interface and smooth animations.

## 🚀 Features

- **Daily Project Generation**: Get fresh project ideas every day across multiple categories
- **Interactive Stacking Cards**: Beautiful scroll-based card stacking animation with Lenis smooth scrolling
- **Responsive Design**: Fully responsive interface that works perfectly on all devices
- **Technology Matching**: Smart technology suggestions with fuzzy matching and icon display
- **Copy to Clipboard**: Easy copying of project ideas for quick reference
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Modern Tech Stack**: Built with the latest versions of Next.js, React, and Tailwind CSS

## 🛠️ Tech Stack

### Framework & Language

- **Next.js 15.5.3** with App Router
- **React 19.1.0**
- **TypeScript 5**
- **Turbopack** for fast development and builds

### Styling & UI

- **Tailwind CSS 4** with CSS variables for theming
- **shadcn/ui** components (New York style variant)
- **Radix UI** primitives for accessibility
- **Lucide React** for icons
- **next-themes** for dark/light mode

### Animation & Interaction

- **Motion** library for smooth animations
- **Lenis** for smooth scrolling
- **class-variance-authority** for component variants

### Development Tools

- **ESLint** with Next.js rules
- **Prettier** for code formatting
- **TypeScript** with strict mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Base shadcn/ui components
│   ├── shared/            # Shared application components
│   ├── server/            # Server-side components
│   ├── ai-elements/       # AI-related UI elements
│   └── animate-ui/        # Animation components
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── consts/               # Application constants
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (mandatory)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd daily-ideas-frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production with Turbopack
- `pnpm lint` - Run ESLint for code quality checks

## 🎨 Component System

The project uses shadcn/ui with the "new-york" style variant, configured with:

- **Path aliases**: `@/components`, `@/lib/utils`, `@/ui`, `@/hooks`
- **Tailwind CSS** with CSS variables for consistent theming
- **Responsive design** principles throughout all components

### Key Components

- **ScrollStack**: Advanced stacking card animation component with Lenis integration
- **ProjectCards**: Main project display component with responsive design
- **TechnologyTag**: Smart technology display with icon matching
- **RegenerateMenu**: Project regeneration interface

## 🎯 Key Features Deep Dive

### Stacking Cards Animation

The centerpiece of the application is a sophisticated stacking cards interface that:

- Uses scroll-based animations for smooth interactions
- Implements perspective and 3D transforms
- Provides responsive scaling across all device sizes
- Includes blur and rotation effects for depth perception

### Technology Matching System

- Fuzzy matching algorithm for technology suggestions
- Dynamic icon loading with fallbacks
- Confidence scoring for match quality
- Smart canonical name resolution

### Responsive Design

- Mobile-first approach with Tailwind CSS breakpoints
- Adaptive spacing and typography scaling
- Touch-optimized interactions
- Cross-device compatibility

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=your-api-url
```

### Tailwind Configuration

The project uses Tailwind CSS 4 with PostCSS.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for all new components
- Ensure responsive design for all UI changes
- Test across different screen sizes
- Follow the established component patterns

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🔮 Future Enhancements

- [ ] Project favoriting system
- [ ] Export functionality (PDF, JSON)
- [ ] Categories filtering
- [ ] Search functionality
- [ ] User preferences storage
- [ ] Project complexity analysis
- [ ] Time tracking integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
