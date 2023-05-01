<script setup lang="ts">
import { usePlanSelectionStore } from '@/stores/planSelection'
defineProps<{
    name: string
    priceMonthly: number
    priceAnnually: number
    features: string[],
    top?: boolean
    index: number
}>()
const planSelectionState = usePlanSelectionStore();
</script>

<template>
    <div class="px-[29px] py-[31px] w-full shadow-[0px_20px_40px_rgba(212,210,244,0.5)] " :class="{
        'bg-gradient-to-br from-primary-light to-primary-dark desktop:h-[501px] desktop:py-[55px] rounded-[10px]': top,
        'bg-white rounded-[10px] desktop:rounded-none': !top,
        '  desktop:rounded-s-[10px]': !top && index === 0,
        '  desktop:rounded-e-[10px]': !top && index === 2,
    }">
        <h2 class="text-lg leading-7 text-center" :class="{ 'text-white': top, 'text-neutral-medium': !top }">
            {{ name }}
        </h2>
        <div class="mt-[24px] flex items-center justify-center gap-2">
            <span class="text-[40px] leading-[49px]" :class="{ 'text-white': top, 'text-neutral-dark': !top }">$</span>
            <span class="text-7xl leading-[71px] tracking-[-2.16px]"
                :class="{ 'text-white': top, 'text-neutral-dark': !top }">
                {{ planSelectionState.plan === 'monthly' ? priceMonthly : priceAnnually }}
            </span>
        </div>
        <ul class="my-8 border-b-[1px] border-opacity-25 text-center"
            :class="{ 'border-white': top, 'border-neutral-medium ': !top }">
            <li :key="feature" v-for="feature in features"
                class="border-t-[1px] border-opacity-25 py-3 text-[15px] leading-7"
                :class="{ 'border-white text-white': top, 'border-neutral-medium text-neutral-medium': !top }">
                {{ feature }}
            </li>
        </ul>
        <button class="rounded-[6px] py-[14px] w-full text-[13px] tracking-[1.39286px] border" :class="{
                'bg-white text-[#6D72DE] hover:bg-transparent  hover:border-white hover:text-white': top,
                'bg-gradient-to-br from-primary-light to-primary-dark text-white hover:bg-gradient-to-br hover:from-transparent hover:to-transparent  hover:text-[#6D72DE] hover:border-[#6D72DE]': !top
            }">
            LEARN MORE
        </button>
    </div>
</template>