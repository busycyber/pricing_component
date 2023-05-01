export default interface PlanModel {
    id: number;
    name: string;
    description: string;
    priceMonthly: number;
    priceAnnually: number;
    features: string[];
    top?: boolean;
}