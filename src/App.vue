<script setup lang="ts">
import { Card, PricingSwitcher } from '@/components';
import { planRepository } from '@/data/repositories';
import { onMounted, ref } from 'vue';
import type { PlanModel } from './data/models';

const plansData = ref<PlanModel[]>([]);

onMounted(async () => {
  await planRepository.getPlans()
    .then((response) => plansData.value = response)
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="container">
    <div class="px-5 desktop:px-[195px]">
      <PricingSwitcher />
      <div class="mt-20 mb-[71px] flex flex-col gap-8 items-center desktop:flex-row desktop:gap-0">
        <Card v-for="(plan, index) in plansData" :key="plan.id" :index="index" :name="plan.name"
          :priceMonthly="plan.priceMonthly" :priceAnnually="plan.priceAnnually" :features="plan.features"
          :top="plan.top" />
      </div>
    </div>
  </div>
</template>