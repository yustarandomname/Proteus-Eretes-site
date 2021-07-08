import supabase from "$lib/logic/supabaseStore"
import {get} from "svelte/store"

interface User {
  userid: string,
  name: string,
  surname: string,
  street: string,
  streetnumber: string,
  streetzip: string,
  city: string,
  bank: string,
  phone: string,
  phonePublic: boolean
  profile: string
}

const getSupabase = () => get(supabase)

export const getUser = async (uid: string, select?: string, ) => {
  return getSupabase().from<User>("Users").select(select).eq("userid", uid)
}

export const signIn = async (email: string, password: string) => {
  return await getSupabase().auth.signIn({email, password})
}