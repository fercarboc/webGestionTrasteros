import { supabase } from './supabaseClient';

export const testSupabaseConnection = async () => {
  console.log("🔍 Probando conexión con Supabase…");

  console.log("URL:", import.meta.env.VITE_SUPABASE_URL);
  console.log("KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);

  const { data, error } = await supabase
    .from("TrasStorageUnits")
    .select("unitNumber, size, price, status")
    .limit(5);

  if (error) {
    console.error("❌ ERROR en consulta:", error);
  } else {
    console.log("✅ Datos recibidos de Supabase:", data);
  }
};
