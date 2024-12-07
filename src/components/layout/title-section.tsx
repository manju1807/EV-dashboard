import { Share2, History } from 'lucide-react'
import React from 'react'
import EditVariablesSheet from '../edit-variable'
import { Button } from '../ui/button'

const TitleSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 p-2 rounded-md">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-sm text-nowrap md:text-2xl font-semibold">Charging Station</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-card/40 border border-border/40 hover:bg-card/60 transition-colors"
        >
          <History size={16} className="text-muted-foreground" />
        </Button>

        <EditVariablesSheet />

        <Button
          variant="ghost"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-card/40 border border-border/40 hover:bg-card/60 transition-colors"
        >
          <Share2 size={14} className="text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}

export default TitleSection
