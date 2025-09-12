# 🚀 Elite Full-Stack Developer Portfolio (Vite + Express Edition)

Welcome to the definitive README for a high-performance, decoupled full-stack portfolio. This project is engineered with a lightning-fast **Vite + React** frontend and a robust **Node.js + Express** backend. It's designed for a professional, scalable developer experience and optimized for deployment on Vercel with a heavy focus on SEO and performance.

**[Live Demo](https://gaurish-todi.vercel.app/) | [My LinkedIn](https://www.linkedin.com/in/gaurish-todi-89745229b/)**

---

## ✨ Core Features & Technical Excellence

This portfolio is built on a decoupled architecture, showcasing a modern separation of concerns between the client and server.

* **Instant Frontend:** A blazing-fast frontend powered by **Vite**, offering an instantaneous development experience and an optimized production build.
* **Robust API Backend:** A dedicated backend using **Express.js** to handle business logic, data processing, and secure, server-side operations.
* **Resend-Powered Contact Form:** A professional email delivery system for contact inquiries, ensuring you never miss an opportunity.
* **Pixel-Perfect, Animated UI:** A stunning user interface built with **`shadcn/ui`** and brought to life with silky-smooth animations from **Framer Motion**.
* **Advanced Form Validation:** Bulletproof, client-side form validation using **React Hook Form** and **Zod**.
* **Optimized for Search Engines:** A comprehensive SEO strategy tailored for Vercel deployment and seamless integration with the **Google Search Console**.

---

## 🏛️ Architecture: The Decoupled Approach

This project is not a monolith. It consists of two separate, independently runnable applications: a frontend client and a backend server. They communicate via a REST API. This architecture is highly scalable and mirrors the microservice patterns used in top tech companies.



1.  **The Frontend (Vite + React):** A Single Page Application (SPA) that runs in the user's browser. It's responsible for all things UI/UX. It makes API calls to the backend to send or receive data.
2.  **The Backend (Node.js + Express):** A headless server that has no UI. Its only job is to provide API endpoints, process requests, and communicate with external services like the Resend API.

---

## 🛠️ The Tech Stack

This project is built on a foundation of best-in-class technologies, chosen for performance, developer experience, and scalability.

### Frontend (Client)

| Category        | Technology                                                                                                  |
| :-------------- | :---------------------------------------------------------------------------------------------------------- |
| **Build Tool** | [**Vite**](https://vitejs.dev/)                                                                             |
| **Framework** | [**React 18**](https://react.dev/)                                                                          |
| **Language** | [**TypeScript**](https://www.typescriptlang.org/)                                                           |
| **Styling** | [**Tailwind CSS**](https://tailwindcss.com/)                                                                |
| **UI Library** | [**`shadcn/ui`**](https://ui.shadcn.com/) (built on Radix UI)                                                 |
| **Animations** | [**Framer Motion**](https://www.framer.com/motion/)                                                         |
| **Form Handling** | [**React Hook Form**](https://react-hook-form.com/) & [**Zod**](https://zod.dev/)                            |

### Backend (Server)

| Category        | Technology                                                                                                  |
| :-------------- | :---------------------------------------------------------------------------------------------------------- |
| **Runtime** | [**Node.js**](https://nodejs.org/)                                                                          |
| **Framework** | [**Express.js**](https://expressjs.com/)                                                                    |
| **Language** | **TypeScript** (or JavaScript)                                                                              |
| **Email Service** | [**Resend**](https://resend.com/)                                                                           |
| **Middleware** | [**CORS**](https://expressjs.com/en/resources/middleware/cors.html), [**`dotenv`**](https://www.npmjs.com/package/dotenv) |

---

## 🎨 UI Component Library Showcase (30+ Elements)

This portfolio is built upon a modular and reusable component library, demonstrating a deep understanding of UI engineering and design systems.

1.  **Layouts:** `Container`, `Grid`, `SectionWrapper`, `Header`, `Footer`, `Sidebar`
2.  **Navigation:** `Navbar`, `NavLinks`, `MobileMenu`, `Breadcrumbs`, `SkipToContentLink`
3.  **Core Elements:** `Button`, `IconButton`, `Link`, `Logo`, `Badge`, `Tag`
4.  **Data Display:** `Card`, `ProjectCard`, `Testimonial`, `MetricDisplay`, `Timeline`
5.  **Forms:** `Input`, `Textarea`, `Label`, `FormErrorMessage`, `SubmitButton`
6.  **Feedback:** `Spinner`, `ToastNotification`, `Modal`, `Alert`, `ProgressBar`
7.  **Typography:** `Heading`, `Subheading`, `Paragraph`
8.  **Interactive:** `Accordion`, `Tabs`, `Tooltip`

---

## 🚀 Deployment & Google Search Console Integration

Deploying a two-part project to **Vercel** is an advanced topic that showcases strong DevOps skills. Here’s how to do it professionally.

### Step 1: Configure Your Project for Vercel

1.  **Move Backend to an `api/` folder:** Vercel automatically detects an `api` folder in the root of your project and treats files inside as serverless functions. Move your entire Express backend into a folder named `api`. Your main server file should be `api/index.js` (or `.ts`).

2.  **Create `vercel.json`:** In the root of your project, create a `vercel.json` file. This is the key to making everything work. It tells Vercel to build your frontend and then route all `/api/...` requests to your Express server.

    ```json
    {
      "version": 2,
      "builds": [
        {
          "src": "api/index.js",
          "use": "@vercel/node"
        },
        {
          "src": "package.json",
          "use": "@vercel/static-build",
          "config": { "distDir": "dist" }
        }
      ],
      "rewrites": [
        {
          "source": "/api/(.*)",
          "destination": "/api/index.js"
        },
        {
          "source": "/(.*)",
          "destination": "/index.html"
        }
      ]
    }
    ```

### Step 2: Deploy to Vercel

1.  **Push to Git:** Push your complete project (with the new `api/` folder and `vercel.json`) to a GitHub repository.
2.  **Import Project on Vercel:** Import your project into Vercel. It will use the `vercel.json` file for build instructions.
3.  **Add Environment Variables:** In your Vercel project dashboard, go to **Settings -> Environment Variables**. Add your backend secrets:
    * `RESEND_API_KEY`: Your API key from the Resend dashboard.
    * `MY_PERSONAL_EMAIL`: The email address where you want to receive messages.

### Step 3: Verify Your Domain with Google Search Console

1.  **Add Property:** Go to [Google Search Console](https://search.google.com/search-console/about) and add your custom domain using the **"Domain"** option.
2.  **Get DNS Record:** Google will give you a **TXT record** (e.g., `google-site-verification=...`). Copy this value.
3.  **Add TXT Record in Vercel:**
    * In your Vercel project dashboard, go to **Settings -> Domains**.
    * Select your domain and go to its DNS Records settings.
    * Create a **new record**:
        * **Type:** `TXT`
        * **Name:** `@`
        * **Value:** Paste the verification code from Google.
    * Save the record.
4.  **Verify on Google:** Go back to Google Search Console and click **"Verify"**. It may take a few minutes to a few hours for DNS changes to propagate.

**Congratulations!** Your high-performance, decoupled application is now live and fully integrated with Google's search ecosystem.
