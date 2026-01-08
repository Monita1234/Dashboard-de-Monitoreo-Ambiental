import StatusBadge from "./StatusBadge";

export default function SamplesTable({ samples }: { samples: any[] }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b text-left text-sm text-gray-600">
          <th className="py-2">ID</th>
          <th>Location</th>
          <th>Zone</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {samples.map(s => (
          <tr key={s.sampleId} className="border-b hover:bg-gray-50">
            <td className="py-2">{s.sampleId}</td>
            <td>{s.location}</td>
            <td>{s.zone}</td>
            <td>{s.sampleType}</td>
            <td><StatusBadge status={s.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
