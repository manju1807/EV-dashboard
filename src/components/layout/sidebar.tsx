import { Home, Bell, ShoppingBag, User, Settings, Menu } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

interface SidebarButtonProps {
  icon: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, isActive, className }) => (
  <Button
    variant="ghost"
    className={`
      w-10 h-10 
      rounded-lg
      ${isActive
        ? 'bg-primary/20 text-primary border-primary/50'
        : 'bg-card/40 text-muted-foreground border-border/40'
      }
      border
      hover:bg-card/60 
      transition-all duration-200
      flex items-center justify-center
      hover:text-foreground
      ${className}
    `}
  >
    {icon}
  </Button>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="w-16 bg-background border-r border-border/40 flex flex-col items-center py-4 gap-6">
      <SidebarButton icon={<Menu size={20} />} />
      <SidebarButton icon={<Home size={20} />} isActive={true} />
      <SidebarButton icon={<Bell size={20} />} />
      <SidebarButton icon={<ShoppingBag size={20} />} />
      <SidebarButton icon={<User size={20} />} />
      <div className="mt-auto">
        <SidebarButton icon={<Settings size={20} />} />
      </div>
    </aside>
  );
};

export default Sidebar;