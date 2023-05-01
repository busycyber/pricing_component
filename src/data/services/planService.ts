import axiosHttp from "@/config/network/axiosHttp";
import type { PlanModel } from "@/data/models";

const planService = {
    getPlans: async () => {
        return await axiosHttp.get<PlanModel[]>("/plans.json");
    }
}

export default planService;