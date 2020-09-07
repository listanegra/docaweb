import 'vue'
import { Service } from '@/modules/api-service'

declare module 'vue/types/vue' {

    interface Vue {

        readonly $service: Service;

    }

}