import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import Sidebar from '@/components/Sidebar/Sidebar';
import NoteEditor from '@/components/Editor/NoteEditor';
import NotePreview from '@/components/Preview/NotePreview';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const NotesApp: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <MainLayout>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={15}>
          <Sidebar />
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel defaultSize={40} minSize={30}>
          <NoteEditor
            content={content}
            onChange={setContent}
            className="h-screen"
          />
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel defaultSize={40} minSize={30}>
          <NotePreview
            content={content}
            className="h-screen overflow-auto"
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </MainLayout>
  );
};

export default NotesApp;