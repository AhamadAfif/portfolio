# Ahamad Afif - Portfolio Website

A modern, minimalistic portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Clean and minimalistic design
- 🌓 Dark mode support
- 📱 Fully responsive
- 🎨 Smooth animations with Motion (Framer Motion)
- 🎯 Sections: Hero, About, Skills, Certifications, Projects, Resume, Contact
- 🔗 Social links (LinkedIn, GitHub, Email)
- 📄 Resume download/view functionality

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AhamadAfif/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

This project is configured for easy deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Your site will be live!

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📝 Customization

### Update Personal Information

- **Skills:** Edit `/data/skills.ts`
- **Projects:** Edit `/data/projects.ts`
- **Certifications:** Edit `/data/certifications.ts`
- **Resume Link:** Update in `/components/Resume.tsx`
- **Contact Info:** Update in `/components/Contact.tsx`, `/components/Hero.tsx`, and `/components/Footer.tsx`

### Add New Sections

Create new component files in `/components` and import them in `App.tsx`.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahamad Afif**
- GitHub: [@AhamadAfif](https://github.com/AhamadAfif)
- LinkedIn: [ahamad-afif](https://www.linkedin.com/in/ahamad-afif-11b751398)
- Email: ahamadafifofficial@gmail.com

---

Built with ❤️ by Ahamad Afif
