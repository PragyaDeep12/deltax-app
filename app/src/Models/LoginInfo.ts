export default interface LoginInfo {
  user?: { email?: string | null } | null;
  isLoggedIn?: boolean | null;
  city?: string | null;
}
