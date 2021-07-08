import supabase from "$lib/logic/supabaseStore"
import {get} from "svelte/store"

interface User {
  userid: string,
  name: string,
  surname: string,
  street: string,
  street_number?: number,
  street_zip: string,
  city: string,
  bank_abbriviated: string,
  phone: number,
  phonePublic: boolean
  sport_card?: number
}

const getSupabase = () => get(supabase)

export const getUser = async (uid: string, select?: string, ): Promise<User> => {
  const {data} = await getSupabase().from<User>("Users").select(select).eq("userid", uid).single()
  return data
}

export const signIn = async (email: string, password: string) => {
  return await getSupabase().auth.signIn({email, password})
}