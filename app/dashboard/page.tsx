'use client'

import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { Settings, LogOut, Gamepad2, Key, Download, Activity, Headphones } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Loading Dashboard...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span className="text-white">Z</span>
          <span className="text-primary-500">B</span>
        </div>
        
        {/* Centered Tabs */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <div className="text-primary-500 text-lg font-medium border-b-2 border-primary-500 pb-1">Dashboard</div>
          <div className="text-white text-lg font-medium hover:text-primary-400 transition-colors cursor-pointer">Paper Trading</div>
        </div>
        
        {/* User Button */}
        <div className="flex items-center space-x-4">
          <UserButton 
            appearance={{
              elements: {
                userButtonPopoverCard: 'bg-black border border-gray-700 shadow-2xl rounded-lg',
                userButtonPopoverActionButton: 'text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors',
                userButtonPopoverActionButtonText: 'text-white font-medium',
                userButtonPopoverActionButtonIcon: 'text-primary-400',
                userButtonPopoverFooter: 'hidden',
                userButtonPopoverMain: 'bg-black',
                userButtonPopoverHeader: 'bg-black border-b border-gray-700',
                userButtonPopoverBody: 'bg-black',
                // Hide security and account tabs, only show profile
                tabsList: 'hidden',
                profileSectionTitle: 'text-white font-semibold',
                profileSectionContent: 'text-white',
                // Only show username, password, and profile picture
                formFieldInput: 'bg-gray-800 border-gray-700 text-white rounded-md',
                formFieldLabel: 'text-white font-medium',
                formButtonPrimary: 'bg-primary-500 hover:bg-primary-600 text-white rounded-md',
                avatarBox: 'relative group cursor-pointer',
                avatarImage: 'rounded-full border-2 border-primary-500',
                // Add pencil icon overlay for profile picture
                avatarBoxActions: 'absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity',
                // Style the user button itself
                userButtonTrigger: 'bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors',
                userButtonAvatarBox: 'w-8 h-8',
              }
            }}
          />
        </div>
      </nav>

      {/* Main Dashboard Content - Removed */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <h1 className="text-6xl font-bold text-white">Dashboard</h1>
      </main>
    </div>
  )
}
