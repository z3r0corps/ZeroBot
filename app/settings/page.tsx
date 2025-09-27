'use client'

import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { Settings, ArrowLeft, User, Bell, Shield, Palette } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function SettingsPage() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
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
        {/* Logo and Back Button */}
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="p-2 text-white hover:text-primary-400 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="text-white text-2xl font-bold">
            <span className="text-white">Z</span>
            <span className="text-primary-500">B</span>
          </div>
        </div>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Main Settings Content */}
      <main className="px-8 py-8 max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center space-x-3">
            <Settings className="text-primary-500" size={40} />
            <span>Settings</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your account preferences and security settings
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Profile Settings */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-primary-500" size={24} />
              <h2 className="text-2xl font-semibold">Profile Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Username</label>
                <input 
                  type="text" 
                  value={user?.username || 'Not set'} 
                  readOnly
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  value={user?.emailAddresses[0]?.emailAddress || ''} 
                  readOnly
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">User ID</label>
                <input 
                  type="text" 
                  value={user?.id || ''} 
                  readOnly
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white text-xs"
                />
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              Profile information is managed through your Clerk account. Click the user button in the top right to edit your username, email, and password.
            </p>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="text-primary-500" size={24} />
              <h2 className="text-2xl font-semibold">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Email Notifications</h3>
                  <p className="text-gray-400 text-sm">Receive updates about your subscriptions and downloads</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Push Notifications</h3>
                  <p className="text-gray-400 text-sm">Get notified about new features and updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-primary-500" size={24} />
              <h2 className="text-2xl font-semibold">Security</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
                  Enable
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Login Sessions</h3>
                  <p className="text-gray-400 text-sm">Manage your active login sessions</p>
                </div>
                <button className="px-4 py-2 border border-gray-600 hover:bg-gray-800 text-white rounded-md transition-colors">
                  View Sessions
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="text-primary-500" size={24} />
              <h2 className="text-2xl font-semibold">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Theme</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white">
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="system">System</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Accent Color</label>
                <div className="flex space-x-3">
                  <button className="w-8 h-8 bg-primary-500 rounded-full border-2 border-white"></button>
                  <button className="w-8 h-8 bg-blue-500 rounded-full border-2 border-transparent"></button>
                  <button className="w-8 h-8 bg-green-500 rounded-full border-2 border-transparent"></button>
                  <button className="w-8 h-8 bg-red-500 rounded-full border-2 border-transparent"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
