"use client"; // Add this line at the top to mark the component as a Client Component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useEditor } from '@/providers/editor-provider';

const Page = () => {
  const router = useRouter();
  const { state } = useEditor();

  useEffect(() => {
    // If the user has a workflow, redirect to it
    if (state.editor.elements.length > 0) {
      const firstWorkflowId = state.editor.elements[0].id; // Get the ID of the first workflow
      router.push(`/workflow/${firstWorkflowId}`);
    } else {
      // If no workflows exist, redirect the user to create a new one
      router.push('/create-new-workflow');
    }
  }, [router, state.editor.elements]);

  return null; // Render nothing after the redirect
};

export default Page;
