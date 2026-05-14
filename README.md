# H2S Hackathon Website

A modern, interactive React + Vite website showcasing the H2S (Code the Future) hackathon — featuring participant eligibility information, hackathon details, challenges, schedules, rewards, FAQs, and an interactive timeline slider.

## 🌟 Features

- **Hero Section**: Eye-catching banner with rotating hero image and call-to-action
- **Interactive Timeline Slider**: Engage with hackathon schedule events through a smooth slider interface
- **Participant Information**: Clear details on who can participate and eligibility requirements
- **Challenge Showcase**: Browse 12 diverse real-world challenges across AI, web, NLP, IoT, and more
- **Dynamic Animations**: Hover effects on images, wave animations behind astronaut, and pulsing orbit rings
- **Responsive Design**: Fully responsive layout with adaptive typography and spacing
- **Professional UI**: Dark theme with gradient backgrounds, glass morphism effects, and smooth transitions
- **Astronaut Visualization**: Rotated astronaut image with animated circular rings and wave effects
- **Brain Image Background**: Subtle blended background image in the FAQ section
- **Decorative Elements**: Ball image and footer branding for visual appeal

## 📋 Project Structure

```
website/
├── src/
│   ├── App.jsx          # Main component with schedule slider
│   ├── App.css          # All styling including animations
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/
│       ├── model_img.png      # Hero model image
│       ├── astronaut.png      # Astronaut image (rotated -18.39°)
│       ├── brain_img.jpg      # FAQ section background
│       ├── ball.jpg           # Decorative ball element
│       ├── footer_img.png     # Footer branding
│       ├── bg_img.jpg         # Background image
│       └── [svg icons]
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**:

   ```bash
   cd H2S_assignment/website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Key Components

### Schedule Slider

Interactive React component that lets users explore hackathon timeline events. Uses useState for active slide management with visual feedback through animated tick indicators.

### Image Animations

All images (model, astronaut, brain, ball, footer) feature:

- Smooth hover lift and scale effects (`translateY(-6px) scale(1.03)`)
- Brightness adjustment on hover
- 260ms transition timing

### Orbit Animation

The astronaut section includes:

- Pulsing orbit rings with `orbitPulse` animation
- Wave effect with `orbitWave` animation
- 6s and 4s durations respectively
- Astronaut image rotated -18.39° for dynamic tilt

## 📱 Responsive Design

The site uses CSS Grid and modern responsive techniques:

- Fluid typography with `clamp()`
- Adaptive layouts for mobile, tablet, and desktop
- Touch-friendly interactive elements

## 🎯 Hackathon Details

- **Timeline Events**: Registration, Problem Statement sessions, Mentor connections
- **Challenges**: 12 real-world problems spanning AI, web, mobile, and IoT domains
- **Eligibility**: Undergraduates, graduates, postgraduates, and PhD students from Indian institutions
- **Benefits**: Mentorship, networking, internship opportunities, real-world impact

## 📦 Technologies

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **CSS3**: Styling with animations and gradients
- **JavaScript ES6+**: Modern JavaScript features

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📄 License

This project is for the H2S Hackathon initiative.

## 👥 Support

For questions or issues with the website, please refer to the hackathon organizers or check the FAQ section for common questions.
