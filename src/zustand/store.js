import { Description } from '@mui/icons-material';
import { create } from 'zustand';

const useStore = create((set, get) => ({
    roadmap: ["Software Development",
        "Marketing",
        "Support",
        "Sales",
        "Others",],
    selectedRoadmap: null,
    index: 0,
    activeStep: 0,
    textarea: "",
    hastag: "",
    Description: "",
    startdate: null,
    endDate: null,
    starttime: null,
    endtime: null,
    projectintophase: null,
    setupworkflow: null,
    sameworkflow: false,
    phases: [],

    fetchRoadmap: async () => {
        const response = await fetch('localhost:8080/api/v1/getroadmap');
        const data = await response.json();
        set({ roadmap: data });
    },

    incrementStep: (activeStep) => {
        console.log(activeStep);
        set({ activeStep: activeStep + 1 });
    },
    decrementStep: (activeStep) => {
        set({ activeStep: activeStep - 1 });
    },

    setSelectedRoadmap: (selectedRoadmap) => {
        set({ selectedRoadmap });
    },
    textAreachange: (textarea) => {
        set({ textarea });
    },
    hastagchange: (hastag) => {
        set({ hastag });
    },
    Descriptionchange: (Description) => {
        set({ Description });
    },
    setstartdate: (startdate) => {
        set({ startdate });
    },
    setEndDate: (endDate) => {
        set({ endDate });
    },
    setstarttime: (starttime) => {
        set({ starttime });
    },
    setendtime: (endtime) => {
        set({ endtime });
    },
    setprojectintophase: (projectintophase) => {
        set({ projectintophase })
    },
    setworkflowbool: (setupworkflow) => {
        set({ setupworkflow })
    },
    setsameworkflow: (sameworkflow) => {
        set({ sameworkflow })
    },
    addPhases: (phase) => {
        set((state) => ({
            phases: [...state.phases, phase]
        }));
    },
    removePhase: (phaseId) => {
        set((state) => ({
            phases: state.phases.filter(phase => phase.id !== phaseId)
        }));
    }
}));

export default useStore;