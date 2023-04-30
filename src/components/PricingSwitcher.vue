<script setup lang="ts">
import { ref } from 'vue';

const isMonthly = ref(false);

const toggleSwitcher = () => {
    isMonthly.value = !isMonthly.value;
}
</script>
<template>
    <div class="mt-16 flex flex-col items-center gap-10">
        <h1 class="text-[32px] leading-[39px] text-center text-neutral-medium">Our Pricing</h1>
        <div class="flex items-center gap-6">
            <span class="text-[15px] leading-7 text-neutral-medium opacity-[0.5]">Annually</span>
            <label for="toggle" class="flex items-center">
                <input type="checkbox" id="toggle" :checked="isMonthly" @click="toggleSwitcher" class="hidden" />
                <div
                    class="relative flex items-center w-14 h-8 rounded-[16px] bg-gradient-to-br from-primary-light to-primary-dark">
                    <div class="w-6 h-6 rounded-full bg-white transition-all duration-300 ease-in-out mr-[26px] ml-[6px] my-[4px]"
                        :class="{ 'translate-x-[20px]': isMonthly }"></div>
                </div>
            </label>
            <span class="text-[15px] leading-7 text-neutral-medium opacity-[0.5]">Monthly</span>
        </div>
    </div>
</template>