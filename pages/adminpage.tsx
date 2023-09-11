import * as React from 'react';
import SlideShow from '@/app/components/SlideShow';
import Welcome from '@/app/components/Welcome';


const AdminPage = () => {
  return (
    <div className="flex flex-col">
      <SlideShow/>
      <Welcome/>
    </div>
  )
}
export default AdminPage