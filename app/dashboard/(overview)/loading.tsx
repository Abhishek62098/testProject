import React from 'react'
import DashboardSkeleton from '@/app/ui/skeletons';
const loading = () => {
  return (
    <div className='text-center'>
         <span className="loading loading-infinity loading-lg my-48"></span>
        <DashboardSkeleton />
    
    </div>
  )
}

export default loading
