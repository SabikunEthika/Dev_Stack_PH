import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyExplorer from './components/sections/TechnologyExplorer';
import Footer from './components/Footer';
import type { Technology } from './types';

export default function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    if (selectedStack.some((t) => t.id === tech.id)) {
      toast.warning(`⚠️ ${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`✓ ${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  const handleRemoveFromStack = (id: string) => {
    const tech = selectedStack.find((t) => t.id === id);
    setSelectedStack(selectedStack.filter((t) => t.id !== id));
    if (tech) {
      toast.info(`✕ ${tech.name} removed from your stack`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('❌ All technologies removed from your stack', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <TechnologyExplorer
        selectedStack={selectedStack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}