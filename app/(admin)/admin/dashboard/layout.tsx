import React from 'react'
import AdminDashboard from '../components/AdminDashboard'
import '../../../globals.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <AdminDashboard/>
    <div id='admin-content'>
      {children}
    </div>
  </div>
}