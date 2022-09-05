<script setup lang="ts">
import { getFlagClass } from '../helpers/country';

const props = defineProps<{
  country: string
}>();

const className = !!props.country ? getFlagClass(props.country) : "";
</script>

<template>
  <span v-if="className" :class="className"></span>
</template>