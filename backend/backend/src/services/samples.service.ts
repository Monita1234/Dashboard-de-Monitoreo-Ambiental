import samplesData from "../data/environmental-samples.json";
import { Sample } from "../models/sample.model";

interface Filters {
  zone?: any;
  sampleType?: any;
  status?: any;
  fromDate?: any;
  toDate?: any;
  operator?: any;
}

const LIMIT = 10;

export function getSamples(filters: Filters, page: number) {
  let data: Sample[] = samplesData as Sample[];

  if (filters.zone) data = data.filter(s => s.zone === filters.zone);
  if (filters.sampleType) data = data.filter(s => s.sampleType === filters.sampleType);
  if (filters.status) data = data.filter(s => s.status === filters.status);

  if (filters.operator) {
    data = data.filter(s =>
      s.operator.toLowerCase().includes(String(filters.operator).toLowerCase())
    );
  }

  if (filters.fromDate) {
    data = data.filter(s => new Date(s.collectionDate) >= new Date(filters.fromDate));
  }

  if (filters.toDate) {
    data = data.filter(s => new Date(s.collectionDate) <= new Date(filters.toDate));
  }

  const total = data.length;
  const start = (page - 1) * LIMIT;

  return {
    data: data.slice(start, start + LIMIT),
    pagination: {
      page,
      limit: LIMIT,
      total,
      totalPages: Math.ceil(total / LIMIT)
    }
  };
}
