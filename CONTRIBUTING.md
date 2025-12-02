# Contributing to Birthday 3D

Thank you for considering contributing to Birthday 3D! We welcome contributions from everyone.

## 🎯 Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Add new themes or visual elements
- 🔧 Fix issues
- ⭐ Star the repository

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Birthday-3d.git
   cd Birthday-3d
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Copy `.env.example` to `.env` and configure it
6. Start the development server:
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components modular and reusable

### Component Structure

```jsx
// Good component structure
import { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

function MyComponent({ prop1, prop2 }) {
  // State and hooks first
  const [state, setState] = useState()
  
  // Effects
  useEffect(() => {
    // ...
  }, [])
  
  // Frame updates
  useFrame(() => {
    // ...
  })
  
  // Render
  return (
    <group>
      {/* Component JSX */}
    </group>
  )
}

export default MyComponent
```

### Environment Variables

- Always use `import.meta.env.VITE_*` for configuration
- Provide sensible defaults for optional values
- Update `.env.example` with new variables
- Document new variables in README.md

### Testing Your Changes

1. Test in development mode (`npm run dev`)
2. Test production build (`npm run build && npm run preview`)
3. Test with different configurations in `.env`
4. Test on different screen sizes
5. Check browser console for errors

## 🐛 Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: If applicable
- **Environment**:
  - OS: [e.g., Windows 11, macOS 14]
  - Browser: [e.g., Chrome 120, Firefox 121]
  - Node version: [e.g., 18.17.0]

## 💡 Suggesting Features

Feature requests are welcome! Please include:

- **Clear description** of the feature
- **Use case**: Why this feature would be useful
- **Mockups or examples**: If applicable
- **Implementation ideas**: If you have any thoughts

## 📝 Pull Request Process

1. **Update documentation**: If you add/change features
2. **Test thoroughly**: Make sure everything works
3. **Follow code style**: Match the existing patterns
4. **Write clear commit messages**:
   ```
   feat: add particle effects to candles
   fix: resolve photo loading issue on Safari
   docs: update installation instructions
   ```
5. **Create a clear PR description**:
   - What changes did you make?
   - Why did you make them?
   - Any breaking changes?
   - Screenshots (if UI changes)

### Commit Message Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

## 🎨 Adding New Features

### Adding New 3D Components

1. Create component in `src/components/`
2. Import and use in `src/scenes/BirthdayScene.jsx`
3. Make it configurable via environment variables
4. Document the component in README.md

### Adding New Animations

1. Use `useFrame` for render-loop animations
2. Use `framer-motion` for UI animations
3. Ensure animations perform well (60fps target)
4. Make animations configurable if possible

## 🔍 Code Review Process

- Maintainers will review your PR
- Feedback may be provided for improvements
- Once approved, your PR will be merged
- Your contribution will be credited

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Not Acceptable

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Unprofessional conduct

## 🙏 Recognition

Contributors will be:
- Listed in the project's contributors page
- Credited in release notes for significant contributions
- Thanked in the community

## 📧 Questions?

Feel free to open an issue for any questions about contributing!

---

Thank you for contributing to Birthday 3D! 🎉
