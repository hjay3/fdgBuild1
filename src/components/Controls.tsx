import React from 'react';
import { Camera, RotateCcw } from 'lucide-react';

interface ControlsProps {
  onReset: () => void;
  onScreenshot: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ onReset, onScreenshot }) => (
  <div className="absolute top-4 right-4 flex gap-2">
    <button 
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      onClick={onReset}
      title="Reset View"
    >
      <RotateCcw className="w-5 h-5 text-white" />
    </button>
    <button 
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      onClick={onScreenshot}
      title="Take Screenshot"
    >
      <Camera className="w-5 h-5 text-white" />
    </button>
  </div>
);