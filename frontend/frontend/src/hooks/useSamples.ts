import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSamples } from "../services/samplesApi";

export function useSamples() {
  const [params] = useSearchParams();
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchSamples(`?${params.toString()}`)
      .then(res => {
        setData(res.data);
        setPagination(res.pagination);
      })
      .finally(() => setLoading(false));
  }, [params]);

  return { data, pagination, loading };
}
