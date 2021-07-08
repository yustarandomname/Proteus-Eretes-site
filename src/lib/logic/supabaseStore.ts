import { writable } from 'svelte/store';
import { createClient, SupabaseClient } from '@supabase/supabase-js'

function createSupabase() {
  let dummySupabase: SupabaseClient;
	const { subscribe, set } = writable(dummySupabase);

	return {
		subscribe,
		init: (url, key) => {
			const supabase = createClient(url, key);
			dummySupabase = supabase; 
			return set(supabase)
		},
	};
}

export default createSupabase();