# Euxton Methodist Scouts Website

A modern, responsive website for the Euxton Methodist Scout Group, built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with scout-themed colors and imagery
- **Responsive Layout**: Mobile-first design that works on all devices
- **Section Pages**: Dedicated pages for each scout section (Squirrels, Beavers, Cubs, Scouts)
- **Contact Form**: Easy way for parents to get in touch about joining
- **Fast Performance**: Built with Next.js for optimal performance

## Scout Sections

- **Squirrels**: Ages 4-6 years
- **Beavers**: Ages 6-8 years  
- **Cubs**: Ages 8-10½ years
- **Scouts**: Ages 10½-14 years

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript/JavaScript
- **Font**: Nunito Sans (Google Fonts)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── about/                 # About page and section pages
│   ├── sections/         # Individual scout section pages
│   │   ├── beavers/      # Beavers section (6-8 years)
│   │   ├── cubs/         # Cubs section (8-10½ years)
│   │   ├── scouts/       # Scouts section (10½-14 years)
│   │   └── squirrels/    # Squirrels section (4-6 years)
│   └── page.js           # Main about page
├── contact/              # Contact page
├── globals.css           # Global styles
├── layout.tsx            # Root layout with navigation
└── page.tsx              # Homepage
```

## Customization

### Colors
The website uses the official Scouts UK brand colors as specified in the July 2024 Brand Guidelines:
- **Core Color**: Scouts Purple (#7413dc) - Our primary brand color
- **Secondary**: Scouts Teal (#088486) - For accents and secondary elements
- **Supporting Colors**: Scouts Red (#ed3f23), Scouts Blue (#006ddf), Scouts Green (#25b755)
- **Additional Colors**: Scouts Navy (#003982), Scouts Forest Green (#205b41), Scouts Orange (#ff912a), Scouts Yellow (#ffe627)

### Images
Scout section logos are stored in the `public/images/` directory:
- `beavers-logo-multi-colour.png`
- `cubs-logo-green.png`
- `scouts-logo-green.png`
- `squirrels-primary-logo-red-png-rgb.png`

## Deployment

This website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## Contact

For questions about the website or to join our scout group, please visit the contact page or get in touch through the provided contact information.

---

Built with ❤️ for the Euxton Methodist Scout Group