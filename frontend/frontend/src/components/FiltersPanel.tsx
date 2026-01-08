import { useSearchParams } from "react-router-dom";

export default function FiltersPanel() {
  const [params, setParams] = useSearchParams();

  function updateParam(key: string, value: string) {
    if (value) params.set(key, value);
    else params.delete(key);
    params.set("page", "1");
    setParams(params);
  }

  function resetFilters() {
    setParams({});
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 grid grid-cols-1 md:grid-cols-6 gap-4">
      <select className="border rounded px-2 py-1"
        value={params.get("zone") || ""}
        onChange={e => updateParam("zone", e.target.value)}>
        <option value="">All zones</option>
        <option value="industrial">Industrial</option>
        <option value="residential">Residential</option>
        <option value="rural">Rural</option>
      </select>

      <select className="border rounded px-2 py-1"
        value={params.get("sampleType") || ""}
        onChange={e => updateParam("sampleType", e.target.value)}>
        <option value="">All types</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
        <option value="soil">Soil</option>
      </select>

      <select className="border rounded px-2 py-1"
        value={params.get("status") || ""}
        onChange={e => updateParam("status", e.target.value)}>
        <option value="">All status</option>
        <option value="normal">Normal</option>
        <option value="warning">Warning</option>
        <option value="critical">Critical</option>
      </select>

      <input type="date" className="border rounded px-2 py-1"
        value={params.get("fromDate") || ""}
        onChange={e => updateParam("fromDate", e.target.value)} />

      <input type="date" className="border rounded px-2 py-1"
        value={params.get("toDate") || ""}
        onChange={e => updateParam("toDate", e.target.value)} />

      <button onClick={resetFilters}
        className="border rounded px-2 py-1 bg-gray-100 hover:bg-gray-200">
        Reset
      </button>
    </div>
  );
}
