import { onMounted, onUnmounted } from 'vue'

export function useMountAndUnmountHook() {
    onMounted(()=>{
        console.log("Logging onMounted");
    })

    onUnmounted(()=>{
        console.log("Logging onUnmounted");
        
    })
}