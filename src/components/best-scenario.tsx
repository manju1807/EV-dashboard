import { Ellipsis } from 'lucide-react'
import React from 'react'

const BestScenario: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-[#BFFF00] text-lg font-medium mb-4">Best Scenario Results</h2>
      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 flex flex-row justify-between items-center">
          <p className="transition-colors duration-200 text-sm">
            The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
          </p>
          <Ellipsis size={16} className='text-primary' />
        </div>
        <div className="p-4 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 flex flex-row justify-between items-center">
          <p className="transition-colors duration-200 text-sm">
            The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
          </p>
          <Ellipsis size={16} className='text-primary' />
        </div>
      </div>
    </section>
  )
}

export default BestScenario