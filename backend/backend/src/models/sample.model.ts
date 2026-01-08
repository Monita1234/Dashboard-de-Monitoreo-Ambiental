export type Zone = "industrial" | "residential" | "rural";
export type SampleType = "air" | "water" | "soil";
export type SampleStatus = "normal" | "warning" | "critical";

export interface HeavyMetals {
  lead: number;
  mercury: number;
  arsenic: number;
}

export interface Parameters {
  pH?: number;
  temperature?: number;
  conductivity?: number;
  turbidity?: number;
  dissolvedOxygen?: number;
  heavyMetals?: HeavyMetals;
  vocs?: number;
  pm25?: number;
  pm10?: number;
  noiseLevel?: number;
}

export interface Sample {
  sampleId: string;
  location: string;
  zone: Zone;
  sampleType: SampleType;
  collectionDate: string;
  parameters: Parameters;
  status: SampleStatus;
  operator: string;
  labCode: string;
  notes?: string;
}
