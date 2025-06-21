# TEDxCUSAT 2025 - Reimagining Tomorrow

A modern, responsive landing page for TEDxCUSAT 2025 built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, professional design following TEDx brand guidelines
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful scroll-triggered animations and interactions
- **Speaker Showcase**: Interactive speaker carousel with detailed profiles
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **SEO Ready**: Proper meta tags, structured data, and social media optimization
- **Accessibility**: WCAG compliant with proper focus states and reduced motion support

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/tedx-cusat-2025.git
cd tedx-cusat-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📱 Project Structure

```
tedx-cusat-2025/
├── public/
│   └── (static assets)
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Custom styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary Red**: #DC2626 (TEDx Brand Red)
- **Background**: Black (#000000)
- **Text**: White and Gray variants
- **Accents**: Red gradients and highlights

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- Smooth scroll-triggered animations
- Hover effects and micro-interactions
- Speaker carousel transitions
- Background pulse effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Speakers

Edit the `speakers` array in `App.jsx`:

```javascript
const speakers = [
  {
    name: "Speaker Name",
    title: "Professional Title",
    topic: "Talk Title",
    image: "image-url",
    bio: "Speaker biography"
  },
  // Add more speakers...
];
```

### Modifying Colors

Update the Tailwind config in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'tedx-red': '#DC2626',
      // Add custom colors...
    }
  }
}
```

### Custom Animations

Add new animations in `src/App.css`:

```css
@keyframes customAnimation {
  /* Animation keyframes */
}

.animate-custom {
  animation: customAnimation 1s ease-in-out;
}
```

## 🌟 Performance Optimizations

- **Image Optimization**: Optimized images from Unsplash
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Intersection Observer for scroll animations
- **Font Loading**: Optimized Google Fonts loading
- **CSS Purging**: Unused CSS removal in production

## 🔍 SEO Features

- Meta tags for social media sharing
- Structured data for search engines
- Proper heading hierarchy
- Alt text for images
- Semantic HTML structure

## ♿ Accessibility

- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email tedx@cusat.ac.in or create an issue in this repository.

## 🙏 Acknowledgments

- TEDx for the amazing platform and brand guidelines
- CUSAT for hosting the event
- All the speakers and organizers
- The open-source community for the fantastic tools

---

**Note**: This is an independent TEDx event operated under license from TED.