import { Sample } from "../types/sample";

const API_URL = "http://localhost:3001/api/samples";

export async function fetchSamples(query: string) {
  const res = await fetch(`${API_URL}${query}`);
  if (!res.ok) throw new Error("Error fetching samples");
  return res.json() as Promise<{
    data: Sample[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  }>;
}
