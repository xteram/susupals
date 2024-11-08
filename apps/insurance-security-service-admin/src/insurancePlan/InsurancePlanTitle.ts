import { InsurancePlan as TInsurancePlan } from "../api/insurancePlan/InsurancePlan";

export const INSURANCEPLAN_TITLE_FIELD = "id";

export const InsurancePlanTitle = (record: TInsurancePlan): string => {
  return record.id?.toString() || String(record.id);
};
