import { InsuranceProvider as TInsuranceProvider } from "../api/insuranceProvider/InsuranceProvider";

export const INSURANCEPROVIDER_TITLE_FIELD = "id";

export const InsuranceProviderTitle = (record: TInsuranceProvider): string => {
  return record.id?.toString() || String(record.id);
};
