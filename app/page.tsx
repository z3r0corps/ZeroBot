import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span className="text-white">Z</span>
          <span className="text-primary-500">B</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  userButtonPopoverCard: 'bg-gray-900 border-gray-800',
                  userButtonPopoverActionButton: 'text-white hover:bg-gray-800',
                  userButtonPopoverActionButtonText: 'text-white',
                  userButtonPopoverActionButtonIcon: 'text-gray-400',
                  userButtonPopoverFooter: 'hidden'
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="text-white">Zero</span>
            <span className="text-primary-500">Bot</span>
          </h1>
        </div>

        {/* Call to Action Buttons */}
        <SignedOut>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <SignUpButton mode="modal">
              <button className="px-8 py-4 bg-primary-500 text-white text-xl font-semibold rounded-md hover:bg-primary-600 transition-colors w-full md:w-auto">
                Get Started
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-8 py-4 border border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
        
        <SignedIn>
          <RedirectToDashboard />
        </SignedIn>
      </main>
    </div>
  )
}

function RedirectToDashboard() {
  redirect('/dashboard')
}
