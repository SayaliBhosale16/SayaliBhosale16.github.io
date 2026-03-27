import { createContext, useContext, useState, type ReactNode } from "react";
import type { Pillar } from "../data/pillars";

type ActivePillar = Pillar | null;

interface PillarContextType {
  activePillar: ActivePillar;
  setActivePillar: (pillar: ActivePillar) => void;
}

const PillarContext = createContext<PillarContextType>({
  activePillar: null,
  setActivePillar: () => {},
});

export function PillarProvider({ children }: { children: ReactNode }) {
  const [activePillar, setActivePillar] = useState<ActivePillar>(null);
  return (
    <PillarContext.Provider value={{ activePillar, setActivePillar }}>
      {children}
    </PillarContext.Provider>
  );
}

export function usePillar() {
  return useContext(PillarContext);
}
