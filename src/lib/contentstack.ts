import Contentstack, { Region } from "@contentstack/delivery-sdk";

const environment = process.env.CONTENTSTACK_ENVIRONMENT || "production";

// Pick the delivery token matching the active environment
const deliveryToken =
  environment === "dev"
    ? process.env.CONTENTSTACK_DELIVERY_TOKEN_DEV || ""
    : process.env.CONTENTSTACK_DELIVERY_TOKEN_PRODUCTION || "";

const stack = Contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY || "",
  deliveryToken,
  environment,
  region: Region.EU,
});

export { environment };
export default stack;
