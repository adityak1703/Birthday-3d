# Security Policy

## 🔒 Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## 🐛 Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### Where to Report

Please **DO NOT** create a public GitHub issue for security vulnerabilities.

Instead:
1. **Email**: Contact the maintainer directly at the email associated with the GitHub account
2. **GitHub Security**: Use GitHub's private vulnerability reporting feature
   - Go to the repository's Security tab
   - Click "Report a vulnerability"

### What to Include

Please provide:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)
- Your contact information

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 1-7 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

## 🛡️ Security Best Practices

When using this project:

### Environment Variables
- ✅ Never commit `.env` files to version control
- ✅ Use `.env.example` as a template only
- ✅ Keep sensitive information in environment variables
- ✅ Use different credentials for development and production

### Deployment
- ✅ Use HTTPS for production deployments
- ✅ Keep dependencies up to date
- ✅ Review environment variables on hosting platforms
- ✅ Consider password protection for private birthday sites

### Photos and Personal Data
- ✅ Be mindful of privacy when adding photos
- ✅ Consider using private repositories for personal deployments
- ✅ Don't include sensitive information in photos
- ✅ Use appropriate privacy settings on hosting platforms

## 🔄 Security Updates

We regularly update dependencies to patch known vulnerabilities:

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

## 📋 Vulnerability Disclosure

When a security issue is fixed:
1. We'll update affected versions
2. Create a security advisory on GitHub
3. Credit the reporter (if they wish)
4. Notify users through release notes

## 🙏 Thank You

We appreciate security researchers and users who report vulnerabilities responsibly.

---

Last updated: December 2025
