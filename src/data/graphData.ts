import { GraphData } from '../types/graph';

export const initialGraphData: GraphData = {
  nodes: [
    { id: 'Physics', group: 0 },
    { id: 'Mathematics', group: 1 },
    { id: 'Philosophy', group: 2 },
    { id: 'Art', group: 3 },
    { id: 'Biology', group: 4 },
    { id: 'Quantum', group: 0 },
    { id: 'Relativity', group: 0 },
    { id: 'Algebra', group: 1 },
    { id: 'Geometry', group: 1 },
    { id: 'Logic', group: 2 },
    { id: 'Ethics', group: 2 },
    { id: 'Painting', group: 3 },
    { id: 'Sculpture', group: 3 },
    { id: 'Genetics', group: 4 },
    { id: 'Evolution', group: 4 }
  ],
  links: [
    { source: 'Physics', target: 'Quantum' },
    { source: 'Physics', target: 'Relativity' },
    { source: 'Mathematics', target: 'Algebra' },
    { source: 'Mathematics', target: 'Geometry' },
    { source: 'Philosophy', target: 'Logic' },
    { source: 'Philosophy', target: 'Ethics' },
    { source: 'Art', target: 'Painting' },
    { source: 'Art', target: 'Sculpture' },
    { source: 'Biology', target: 'Genetics' },
    { source: 'Biology', target: 'Evolution' },
    { source: 'Physics', target: 'Mathematics' },
    { source: 'Philosophy', target: 'Mathematics' },
    { source: 'Biology', target: 'Physics' },
    { source: 'Art', target: 'Mathematics' }
  ]
};