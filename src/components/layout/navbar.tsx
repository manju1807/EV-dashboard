import { Search } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
// import { ModeToggle } from '../mode-toggle';

const Navbar: React.FC = () => {
  return (
    <header className="h-auto md:h-16 border-b border-border flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 md:py-0">
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        {/* Navigation Tabs */}
        <nav className="flex flex-wrap gap-2">
          <Button variant="secondary" className="bg-secondary text-foreground">
            Charging Stations
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:bg-primary/20 hover:border hover:text-primary hover:border-primary/50"
          >
            Fleet Sizing
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:bg-primary/20 hover:border hover:text-primary hover:border-primary/50"
          >
            Parking
          </Button>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto mt-2 md:mt-0 px-2 md:px-0">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-secondary/50 border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        {/* Uncomment ModeToggle if needed */}
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

export default Navbar;