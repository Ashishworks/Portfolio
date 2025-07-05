# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, animations, and a beautiful UI inspired by ReactBits.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 🌙 **Dark Mode**: Toggle between light and dark themes (defaults to dark)
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized with React and Tailwind CSS
- 🎭 **Animations**: Smooth animations using Framer Motion
- 🎯 **Interactive**: Hover effects and micro-interactions throughout

## Sections

- **Home**: Hero section with introduction and stats
- **Projects**: Showcase of 3 sample projects with filtering
- **Skills**: Categorized skills with progress bars (Frontend, Backend, Tools, Databases)
- **Experience**: Timeline of work experience
- **Contact**: Contact form and information

## Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Dock.js            # Dock navigation component
│   ├── Home.js            # Hero section
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Skills with progress bars
│   ├── Experience.js      # Work experience timeline
│   └── Contact.js         # Contact form
├── App.js                 # Main app component
├── App.css               # Tailwind CSS imports
└── index.js              # Entry point
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `primary` color palette.

### Content
Update the content in each component file to match your information:
- Personal details in `Home.js`
- Projects in `Projects.js`
- Skills in `Skills.js`
- Experience in `Experience.js`
- Contact information in `Contact.js`

### Styling
All styling is done with Tailwind CSS classes. You can modify the classes in each component to change the appearance.

## Build for Production

```bash
npm run build
```

This creates a `build` folder with the production-ready files.

## Deployment

The app can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Features from ReactBits

This portfolio incorporates design patterns and effects inspired by [ReactBits](https://reactbits.dev/):

- Card hover effects
- Smooth transitions
- Modern button styles
- Progress bars with animations
- Timeline layouts
- Responsive navigation
- Dark mode implementation

## License

This project is open source and available under the [MIT License](LICENSE). 