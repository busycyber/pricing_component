import { defineStore } from 'pinia'

interface PlanSelectionState {
    plan: 'monthly' | 'annually'
}

export const usePlanSelectionStore = defineStore('planSelection', {
    state: (): PlanSelectionState => ({
        plan: 'monthly'
    }),
    actions: {
        setPlan(plan: 'monthly' | 'annually') {
            this.plan = plan
        }
    }
})