import { reactive, computed, readonly } from "vue";
import { supabase } from "./supabase";

let user = reactive({ ...supabase.auth.user() });
const isAuthenticated = computed<boolean>(() => Object.keys(user).length > 0);

const auth = (() => {
  const login = async (email: string, password?: string) => {
    if (password) {
      return await supabase.auth.signIn({ email, password });
    }

    return await supabase.auth.signIn({ email });
  };

  const register = async (email: string, password?: string) => {
    if (password) {
      return await supabase.auth.signUp({ email, password });
    }
    return await supabase.auth.signUp({ email });
  };

  const logout = async () => await supabase.auth.signOut();

  return { login, register, logout };
})();

const image = (() => {
  const upload = async (file: File) => new Promise((resolve, reject) => true);
  const get = async (id?: string) => supabase.storage.from("profiles").download(`${id || user.id}.jpg`);

  return { upload, get };
})();

supabase.auth.onAuthStateChange((_, session) => {
  if (session?.user != null) {
    user = session.user;
  } else {
    user = {};
  }
});

export default {
  props: readonly(user),
  isAuthenticated,
  auth,
  image,
};
