# DevShowcase

A modern, responsive portfolio website built with React and Tailwind CSS. This template features a sleek dark theme with cyan accents, smooth animations, and a professional layout perfect for showcasing your work and skills.

## Features

- **Modern Design**: Sleek dark theme with gradient accents and smooth hover effects
- **Responsive Layout**: Works beautifully on all device sizes
- **Interactive Elements**: Smooth scrolling navigation and animated components
- **Customizable**: Easy to modify with your own information and branding
- **Performance Optimized**: Lightweight and fast loading

## Technologies Used

- React 19
- Tailwind CSS
- CRACO (Create React App Configuration Override)
- Lucide React Icons
- Shadcn UI Components

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kawalis98/DevShowcase.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. Edit the content in `src/pages/Portfolio.jsx`:
   - Replace "Kawalis" with your name
   - Update the biography and expertise sections
   - Modify the contact information
   - Update the experience section with your work history
   - Adjust the skills/technologies list

2. Replace the profile image:
   - Place your image in `public/images/`
   - Update the `src` attribute in the img tag in `Portfolio.jsx`

3. Update social links:
   - Modify the URLs in the navigation and contact sections
   - Update the email address

### Styling

- Colors can be customized in `src/App.css` and `src/index.css`
- The cyan accent color (`#0cc0df`) can be changed to match your preference
- Adjust the gradient effects in the CSS files

## Deployment

### GitHub Pages

1. Install the GitHub Pages CLI:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://kawalis98.github.io/DevShowcase",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Other Platforms

The project can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder or connect your GitHub repository
- **Vercel**: Connect your GitHub repository and deploy automatically
- **Firebase Hosting**: Use `firebase deploy` after running `npm run build`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

---

Built with ❤️ using React and Tailwind CSS"# DevShowcase" 
