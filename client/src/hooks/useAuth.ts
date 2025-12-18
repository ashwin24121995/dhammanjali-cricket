import { trpc } from "@/lib/trpc";

export function useAuth() {
  // Check if token exists in localStorage
  const hasToken = typeof window !== "undefined" && !!localStorage.getItem("auth_token");
  
  // Only query if token exists
  const { data, isLoading, error } = trpc.auth.me.useQuery(undefined, {
    enabled: hasToken,
  });

  return {
    user: data?.user || null,
    loading: isLoading,
    error,
    isAuthenticated: !!data?.user,
  };
}
