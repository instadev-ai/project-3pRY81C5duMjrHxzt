import React from 'react';
import { cn } from '@/lib/utils';
import { Folder, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn(
      'w-64 border-r bg-muted/40 h-screen flex flex-col',
      className
    )}>
      <div className="p-4 space-y-4">
        <Input
          type="search"
          placeholder="Search notes..."
          className="w-full"
        />
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Folder className="mr-2 h-4 w-4" />
            All Notes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Tag className="mr-2 h-4 w-4" />
            Tags
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold">Folders</h2>
          {/* Folder list will go here */}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;