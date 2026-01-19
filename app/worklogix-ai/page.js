import React from 'react'
import WorklogixLanding from '../components/workLogix/WorklogixLanding';
import WorklogixAi from '../components/workLogix/WorklogixAi';


const page = () => {
  return (
    <div className="bg-secondary text-primary">
        <WorklogixLanding/>
        <WorklogixAi/>
    </div>
  )
}

export default page;
