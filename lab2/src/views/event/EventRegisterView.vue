<script setup lang="ts">
import type { Event } from '@/type';
import EventService from '@/services/EventService';
import { ref, onMounted, toRefs } from 'vue';
import EventCard from '@/components/EventCard.vue'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import type { AxiosResponse } from 'axios';

const props = defineProps<{
    event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
    //
}


</script>

<template>
    <button @click="register">Register</button>
</template>