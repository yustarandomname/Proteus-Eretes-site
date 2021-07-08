import supabase from "$lib/logic/supabaseStore"
import {get} from "svelte/store"

const getSupabase = () => get(supabase)

export const getProfile = async (uid: string): Promise<string> => {
  try {
    const {data, error} = await getSupabase().storage
      .from("profiles")
      .download("740fdde5-fa2f-4cc6-9534-f3543069dd1e.jpg")

    if (error) return "./assets/dummyfoto.jpg"

    return URL.createObjectURL(data)
  } catch (error) {
    return "./assets/dummyfoto.jpg"
  }
}