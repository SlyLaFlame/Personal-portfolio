# Dynamic React Portfolio

A modern, dynamic portfolio website built with React, Tailwind CSS, and Framer Motion animations. This is an upgraded version of the static HTML/CSS portfolio with enhanced interactivity and modern development practices.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Components**: Dynamic tabs, hover effects, and modal dialogs
- **Modern UI/UX**: Clean, professional design with dark theme
- **Performance Optimized**: Built with Vite for fast development and builds
- **Contact Form**: Integrated Google Sheets API for form submissions
- **SEO Friendly**: Semantic HTML and optimized structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **React Router** - For potential future routing needs

## 📁 Project Structure

```
react-portfolio/
├── public/
│   └── Images/          # Your existing images
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Navigation and hero section
│   │   ├── About.jsx    # About me with interactive tabs
│   │   ├── Services.jsx # Services with hover animations
│   │   ├── Portfolio.jsx # Portfolio with modal details
│   │   └── Contact.jsx  # Contact form and social links
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles with Tailwind
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Navigate to the React portfolio directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy your images:**
   - Copy your `Images` folder from the original portfolio to `react-portfolio/public/Images/`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Colors and Styling

The theme uses custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#ff004f',    // Your brand red color
  dark: '#080808',       // Background color
  light: '#ababab',      // Light text color
}
```

### Animations

Framer Motion is used throughout for smooth animations. You can customize animation timings and effects in each component.

### Content Updates

- **Personal Info**: Update the data in each component file
- **Images**: Replace images in `public/Images/`
- **Links**: Update social media and project links in the components
- **Contact Form**: The form submits to your existing Google Sheets script

## 🔧 Advanced Features

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Header.jsx`

### Backend Integration (Optional)

For a full-stack experience, you can add a Node.js backend:

```bash
# In a separate directory
npx express-generator backend
cd backend
npm install
```

This would allow for:
- Dynamic content loading
- API endpoints for projects/blog posts
- User authentication
- Database integration

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Smooth scrolling on mobile devices

## 🌟 Performance Features

- **Lazy Loading**: Components load as they enter the viewport
- **Optimized Images**: Consider using next-gen formats (WebP)
- **Code Splitting**: Vite automatically splits code for better loading
- **Minimal Bundle Size**: Only includes used dependencies

## 🔍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support (as per modern React standards)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design and content by Shem Aberi
- Built with modern React ecosystem tools
- Icons from React Icons and Font Awesome
- Animations powered by Framer Motion

---

**Built with ❤️ by Shem Aberi**

For questions or suggestions, feel free to reach out via the contact form or social media links in the portfolio!
