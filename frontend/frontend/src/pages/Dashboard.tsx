import { useSearchParams } from "react-router-dom";
import { useSamples } from "../hooks/useSamples";
import SamplesTable from "../components/SamplesTable";
import Pagination from "../components/Pagination";
import FiltersPanel from "../components/FiltersPanel";

export default function Dashboard() {
  const { data, pagination, loading } = useSamples();
  const [params, setParams] = useSearchParams();

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">
         Prueba Técnica: Dashboard de Monitoreo Ambiental

        </h1>
        <p className="text-gray-600">
          Desarrollar una aplicación web completa (frontend + backend) para visualizar y analizar datos de puntos de toma de muestras ambientales.
        </p>
      </header>

      <FiltersPanel />

      <section className="bg-white rounded-lg shadow p-4">
        <SamplesTable samples={data} />
        {pagination && (
          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            onChange={(page: number) => {
              params.set("page", String(page));
              setParams(params);
            }}
          />
        )}
      </section>
    </div>
  );
}
