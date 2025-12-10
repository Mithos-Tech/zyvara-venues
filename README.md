# ZYVARA | Premium Venue Booking Platform

> "Wedding in the loft for love."

ZYVARA is a high-end, single-page application (SPA) designed to showcase and book exclusive architectural venues for weddings and corporate events in Lima, Peru. Built with a "Cinematic First" philosophy, it abandons traditional scrolling in favor of immersive, app-like interactions.

## 🌟 Key Features

*   **Cinematic Single-Screen Experience:** Each view (Home, Venues, Detail) is treated as a full-screen slide, providing a focused and clutter-free experience.
*   **Infinite Film Strip Carousel:** A custom-built horizontal venue selector that mimics a physical film strip with magnetic snapping.
*   **Immersive Zoom:** A shared-layout animation system that seamlessly expands venue thumbnails into full-screen immersive galleries.
*   **Architectural Grid System:** A rigorous "Master Grid" layout ensures all elements align perfectly across different views, evoking the precision of architectural blueprints.
*   **Performance First:** 
    *   Critical assets (Hero Image) are preloaded with `fetchpriority="high"`.
    *   Route-based code splitting via `React.lazy`.
    *   Next-Gen image formats (AVIF/WebP) via automatic Cloudinary transforms (`f_auto,q_auto`).
    *   Preloader for transitions.
*   **Mobile Optimized:** 
    *   Responsive layouts with specific "Safe Area" handling for iPhone notches.
    *   High-resolution branding (Apple Touch Icons & Adaptive Favicons).
*   **SEO Optimized:** Full meta tags, Open Graph data, and JSON-LD structured data for Local Business entities.

## 🛠️ Tech Stack

*   **Framework:** React 19 (TypeScript)
*   **Styling:** Tailwind CSS (Custom "Merlot & Stone" luxury palette)
*   **Animation:** Framer Motion (Complex shared layout, parallax, and gesture animations)
*   **Routing:** React Router v7 (HashRouter for broad compatibility)
*   **Icons:** Lucide React

## 📂 Project Structure

*   `pages/Home.tsx` - The "Hero" landing page with preload strategies.
*   `pages/Venues.tsx` - Horizontal infinite scroll venue selector.
*   `pages/VenueDetail.tsx` - Split-screen detail view with "Living Canvas" effects and interactive Inquiry system.
*   `components/Navbar.tsx` - Adaptive glassmorphism navigation.

## 🚀 Optimization Highlights

*   **LCP (Largest Contentful Paint):** The hero image is explicitly preloaded.
*   **CLS (Cumulative Layout Shift):** All containers use strict aspect ratios or fixed heights (`100dvh`).
*   **TTI (Time to Interactive):** Code splitting ensures only the necessary Javascript is loaded.
*   **PWA Ready:** Includes manifest-ready icon sizes (192, 512, Apple Touch).

---

**© 2026 ZYVARA by Inspyrio. All rights reserved.**