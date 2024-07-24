import type{MessageState} from '@/type'
import {defineStore} from 'pinia'
export const useMessageStore = defineStore('message' ,{
    state: (): MessageState => ({
message: ''
    })
})