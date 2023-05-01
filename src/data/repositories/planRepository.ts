import planServices from "../services/planService";

const planRepository = {
    getPlans: () => {
        return planServices.getPlans();
    }
}

export default planRepository;