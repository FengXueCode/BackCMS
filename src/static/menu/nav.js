
import { createPinia } from "pinia";
import { useMainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const pinia = createPinia();
const store = useMainStore(pinia);
const { userName } = storeToRefs(store);
const nav = {
  logo: {
    img: "",
    path: "/"
  },
  url: [
    {
      title: userName.value,
      path: '/',
      icon: '',
      child: [
        {
          title: '退出',
          path: '/login',
          icon: '',
          child: []
        },
      ]
    },
  ]
}
export default nav