import type { User } from "@supabase/supabase-js";
import { writable } from "svelte/store"


function createUser() {
  let dummyUser: User
  const {subscribe, set} = writable(dummyUser);

  return {
    subscribe,
    set
  }
}

export default createUser()