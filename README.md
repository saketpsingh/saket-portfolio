# 💼 Saket Singh - Personal Portfolio

Welcome to the official source code of [Saket Singh's Portfolio](https://saket-portfolio-one.vercel.app/) - a modern, fast, and responsive personal website to showcase projects, professional experience, research publications, and more.

![image](https://github.com/user-attachments/assets/fbc52bc3-bc83-4b29-b186-b0f8666580d0)

---

## 🛠️ Tech Stack

This project is built with a modern development stack optimized for performance and maintainability:

- **Framework:** [Next.js 15.3.2](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Routing:** Next.js App Router
- **Image Optimization:** `next/image`
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Folder Structure

```
saket-portfolio/
├── app/                     # App Router based pages
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/              # UI Components (Hero, Projects, Resume, etc.)
├── public/                  # Static files (images, PDFs, favicon, etc.)
├── styles/                  # Optional global CSS (if any)
├── utils/                   # Data files and helpers
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── package.json             # Project metadata and scripts
```

---

## ✨ Features

- ⚡ **Performance-first** using lazy loading and image optimization
- 📱 **Responsive** across mobile, tablet, and desktop
- 🧑‍💻 **Component-driven** development
- 🖼️ **Animated UI** using Framer Motion
- 📄 **Resume section** with embedded PDF viewer
- 🧩 **Modular design** to easily customize content

---

## 🚀 Getting Started

Follow the steps below to run the portfolio locally:

### 1. Clone the Repository

```bash
git clone https://github.com/saketpsingh/saket-portfolio.git
cd saket-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Customization

You can personalize the portfolio by editing content in the following files:

| Section         | File Path                                       |
|-----------------|--------------------------------------------------|
| Hero Section    | `components/Hero/HeroData.js`                   |
| Projects        | `components/Projects/ProjectsData.js`          |
| Experience      | `components/Experience/ExperienceTabData.js`   |
| Publications    | `components/Publications/PublicationData.js`   |
| Resume PDF      | `public/resume.pdf` or any file you upload      |

For images, add them to the `public/images` folder and update the respective image paths in your data/config files.

---

## 📦 Production Build

To generate an optimized production build:

```bash
npm run build
npm run start
```

---

## 🧪 Linting & Formatting

```bash
npm run lint       # Check for lint issues
npm run format     # Prettier formatting (if configured)
```

---

## 🌐 Deployment

This project is deployed via **Vercel**. To deploy:

1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import the repository
4. Configure build settings if needed (default should work)
5. Deploy 🚀

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/saketpsingh/saket-portfolio/blob/main/LICENSE).

---

## 👤 Author

**Saket Singh**

- Portfolio: [saketpsingh.vercel.app](https://saketpsingh.vercel.app/)
- GitHub: [@saketpsingh](https://github.com/saketpsingh)
- LinkedIn: [linkedin.com/in/saketpsingh](https://linkedin.com/in/saketpsingh)

---

> Built with Next.js, styled with Tailwind, animated with Framer Motion — deployed to the world with Vercel 🌍.
