// state.js
import { proxy } from "valtio"

export const state = proxy({
  current: null,
  items: {
    laces: "#fff",
    mesh: "#fff",
    caps: "#fff",
    inner: "#fff",
    sole: "#fff",
    stripes: "#fff",
    band: "#fff",
    patch: "#fff",
  },
})
// 👈 exportamos el proxy para usarlo en otros archivos