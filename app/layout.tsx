import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZeroBot',
  description: 'Welcome to ZeroBot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: 'bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg',
          card: 'bg-black border border-gray-800 shadow-2xl',
          modalContent: 'bg-black border border-gray-800 shadow-2xl rounded-lg',
          modalCloseButton: 'text-white hover:text-gray-300 transition-colors',
          headerTitle: 'text-white text-2xl font-bold',
          headerSubtitle: 'text-white text-sm',
          formFieldInput: 'bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg py-3 px-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all',
          formFieldLabel: 'text-white font-medium mb-2',
          socialButtonsBlockButton: 'bg-gray-900 border border-gray-700 text-white hover:bg-gray-800 rounded-lg py-3 px-4 transition-all',
          footerActionLink: 'text-primary-400 hover:text-primary-300 font-medium transition-colors',
          footerActionText: 'text-white',
          identityPreviewText: 'text-white',
          identityPreviewEditButton: 'text-primary-400 hover:text-primary-300',
          dividerLine: 'bg-gray-700',
          dividerText: 'text-white text-sm',
          formHeaderTitle: 'text-white text-xl font-semibold',
          formHeaderSubtitle: 'text-white text-sm',
          formFieldErrorText: 'text-red-400 text-sm',
          formFieldSuccessText: 'text-green-400 text-sm',
          formFieldWarningText: 'text-yellow-400 text-sm',
          formFieldInputShowPasswordButton: 'text-white hover:text-gray-300 transition-colors',
          formFieldInputShowPasswordIcon: 'text-white',
          formFieldRow: 'mb-4',
          formField: 'mb-6',
          formFooter: 'text-white',
          formFooterActionText: 'text-white',
          formFooterActionLink: 'text-primary-400 hover:text-primary-300',
          modalBackdrop: 'bg-black/80',
          modal: 'flex items-center justify-center',
          modalContentWrapper: 'flex items-center justify-center p-4',
          rootBox: 'w-full h-full',
        },
        variables: {
          colorPrimary: '#a855f7',
          colorBackground: '#000000',
          colorInputBackground: '#1f2937',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
          colorTextSecondary: '#d1d5db',
        },
        signUp: {
          afterSignUpUrl: '/dashboard'
        },
        signIn: {
          afterSignInUrl: '/dashboard'
        },
        userProfile: {
          elements: {
            // Hide all tabs completely
            tabsList: 'hidden !important',
            // Hide unwanted sections with more aggressive selectors
            '[data-clerk-element="securitySection"]': 'hidden !important',
            '[data-clerk-element="connectedAccountsSection"]': 'hidden !important',
            '[data-clerk-element="activeDevicesSection"]': 'hidden !important',
            '[data-clerk-element="emailAddressesSection"]': 'hidden !important',
            // Hide specific Clerk sections
            '.cl-securitySection': 'hidden !important',
            '.cl-connectedAccountsSection': 'hidden !important',
            '.cl-activeDevicesSection': 'hidden !important',
            '.cl-emailAddressesSection': 'hidden !important',
            // Style the profile section
            profileSectionTitle: 'text-white',
            profileSectionContent: 'text-white',
            formFieldInput: 'bg-gray-800 border-gray-700 text-white',
            formFieldLabel: 'text-white',
            formButtonPrimary: 'bg-primary-500 hover:bg-primary-600 text-white',
            avatarBox: 'relative group cursor-pointer',
            avatarImage: 'rounded-full border-2 border-gray-600 group-hover:border-primary-500 transition-colors',
            // Force show only profile fields
            '.cl-profileSection': 'block !important',
            '.cl-usernameField': 'block !important',
            '.cl-passwordField': 'block !important',
            '.cl-profileImageField': 'block !important',
          }
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
