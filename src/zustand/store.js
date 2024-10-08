import create from 'zustand';

const useStore = create((set, get) => ({
  roadmap: [],
  selectedRoadmap: null,
  
  
  fetchRoadmap: async () => {
    const response = await fetch('localhost:8080/api/v1/getroadmap');
    const data = await response.json();
    set({ roadmap: data });
  },




  
}));

export default useStore;
