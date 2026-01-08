const API_URL = "http://localhost:3001/api/samples";

export async function fetchSamples(query: string) {
  const res = await fetch(`${API_URL}${query}`);
  if (!res.ok) throw new Error("Failed to fetch samples");
  return res.json();
}
