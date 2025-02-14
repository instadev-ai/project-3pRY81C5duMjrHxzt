import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bold, Italic, Code, List } from 'lucide-react';

interface NoteEditorProps {
  className?: string;
  content: string;
  onChange: (value: string) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  className,
  content,
  onChange,
}) => {
  const insertMarkdown = (syntax: string) => {
    // TODO: Implement markdown syntax insertion
  };

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className="border-b p-2 flex gap-2">
        <Button variant="ghost" size="sm" onClick={() => insertMarkdown('**')}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => insertMarkdown('*')}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => insertMarkdown('`')}>
          <Code className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => insertMarkdown('- ')}>
          <List className="h-4 w-4" />
        </Button>
      </div>
      <Textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 resize-none p-4 font-mono"
        placeholder="Start writing your note..."
      />
    </div>
  );
};

export default NoteEditor;