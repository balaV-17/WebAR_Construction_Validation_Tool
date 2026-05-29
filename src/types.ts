export interface ARState {
  scale: number;
  opacity: number;
  rotation: number;
  positionY: number;
  activeStoreys: {
    GroundFloor: boolean;
    Level_01: boolean;
    Level_02: boolean;
    Level_03: boolean;
    Level_04: boolean;
    'OK Attika': boolean;
    Roof: boolean;
    zeHGW: boolean;
  };
  isArMode: boolean;
  isPlaced: boolean;
  showAllStoreys: boolean;
  activeCategories: {
    structure: boolean;
    openings: boolean;
    circulation: boolean;
    mep: boolean;
  };
  showSpaces: boolean;
}

export interface SpaceData {
  guid: string | null;
  type: string;
  name: string;
  long_name: string;
  storey: string;
  area: number | null;
  volume: number | null;
  center?: number[];
  elevation?: number;
}

export type ActionLog = {
  id: string;
  timestamp: string;
  message: string;
};