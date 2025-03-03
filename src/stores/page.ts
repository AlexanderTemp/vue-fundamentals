// page-store: unique key for the store
export const usePageStore = defineStore('page-store', () => {
  const pageData = ref({
    title: '',
  })
  return {
    pageData,
  }
})

//pinia.vuejs.org/cookbook/hot-module-replacement.html
/*
HMR (Hot Module Replacement) en Pinia permite actualizar los stores sin recargar la página, manteniendo el estado actual. Esto es útil en desarrollo porque puedes modificar los stores y ver los cambios en tiempo real sin perder datos.
*/
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
