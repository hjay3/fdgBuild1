import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './Header';
import { Controls } from './Controls';
import { LoadingSpinner } from './LoadingSpinner';
import { initialGraphData } from '../data/graphData';
import * as THREE from 'three';

const CosmicKnowledgeNetwork = () => {
  const [graph, setGraph] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const initGraph = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      const ForceGraph3D = (await import('3d-force-graph')).default;
      
      const graphInstance = ForceGraph3D({ controlType: 'orbit' })
        (containerRef.current)
        .backgroundColor('#000020')
        .nodeColor(() => '#4f46e5')
        .linkColor(() => '#ffffff')
        .linkOpacity(0.2)
        .linkWidth(1)
        .nodeRelSize(6)
        .linkDirectionalParticles(2)
        .linkDirectionalParticleWidth(2)
        .linkDirectionalParticleSpeed(0.006)
        .graphData(initialGraphData);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      const pointLight = new THREE.PointLight(0xffffff, 0.4, 0);
      pointLight.position.set(200, 200, 200);
      graphInstance.scene().add(ambientLight);
      graphInstance.scene().add(pointLight);

      // Set initial camera position
      graphInstance.cameraPosition({ x: 0, y: 0, z: 400 });

      // Handle window resize
      const handleResize = () => {
        graphInstance
          .width(window.innerWidth)
          .height(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      setGraph(graphInstance);
      setIsLoading(false);

      return () => {
        window.removeEventListener('resize', handleResize);
        graphInstance._destructor();
      };
    } catch (error) {
      console.error('Failed to initialize graph:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Wait for the DOM to be ready
    const timeoutId = setTimeout(initGraph, 100);
    return () => clearTimeout(timeoutId);
  }, [initGraph]);

  const handleReset = () => {
    if (graph) {
      graph.cameraPosition(
        { x: 0, y: 0, z: 400 },
        { x: 0, y: 0, z: 0 },
        2000
      );
    }
  };

  const handleScreenshot = () => {
    if (graph) {
      const canvas = graph.renderer().domElement;
      const link = document.createElement('a');
      link.download = 'cosmic-knowledge-network.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-screen h-screen bg-[#000020] overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />
      <Header />
      <Controls onReset={handleReset} onScreenshot={handleScreenshot} />
    </div>
  );
};

export default CosmicKnowledgeNetwork;