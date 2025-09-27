# ZeroBot - Premium Gaming Solutions

A modern web application for premium gaming solutions, built with Next.js, TypeScript, and Clerk authentication.

## Features

- **Landing Page**: Beautiful dark-themed homepage with purple accents
- **Authentication**: Secure sign-in/sign-up functionality powered by Clerk
- **Dashboard**: User dashboard with stats and quick actions
- **Settings**: Comprehensive settings page for account management
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean, professional design with smooth transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zerobot
```

2. Install dependencies:
```bash
npm install
```

3. Set up Clerk authentication:
   - Create a Clerk account at [clerk.com](https://clerk.com)
   - Create a new application in your Clerk dashboard
   - Copy your publishable key and secret key

4. Create environment variables:
   Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
zerobot/
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── sign-in/           # Sign-in page
│   ├── sign-up/           # Sign-up page
│   ├── settings/          # Settings page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
├── public/               # Static assets
├── package.json
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **Lucide React** - Beautiful icons

## Features Overview

### Landing Page
- Hero section with welcome message
- Statistics showcase (10+ Games, 99.9% Uptime, 24/7 Support)
- Call-to-action buttons for sign-up and sign-in
- Responsive navigation with logo and menu items

### Authentication
- Modal-based sign-in and sign-up forms
- Custom styled Clerk components to match the dark theme
- Automatic redirect to dashboard after authentication

### Dashboard
- Personalized welcome message
- Statistics cards showing user activity
- Quick action buttons for common tasks
- Account management shortcuts

### Settings Page
- Profile information display
- Notification preferences
- Security settings
- Appearance customization options

## Customization

### Colors
The purple theme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#a855f7', // Main purple
    600: '#9333ea', // Darker purple for hover states
    // ... other shades
  }
}
```

### Content
- Update the welcome message and statistics in `app/page.tsx`
- Modify dashboard content in `app/dashboard/page.tsx`
- Customize settings options in `app/settings/page.tsx`

## Deployment

The application can be deployed to any platform that supports Next.js:

1. **Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**:
   ```bash
   npm run build
   # Upload the .next folder to Netlify
   ```

3. **Docker**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
