import { router } from "./router";

const redirectTo = (path, ...params) => router.redirectTo(path, ...params);

export { redirectTo };
