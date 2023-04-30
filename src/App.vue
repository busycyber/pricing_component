<script setup lang="ts">
import { Card, PricingSwitcher } from '@/components';
</script>

<template>
  <div class="px-5 desktop:px-[195px]">
    <PricingSwitcher />
    <div class="mt-20 mb-[71px] flex flex-col gap-8 desktop:flex-row desktop:gap-0">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>|