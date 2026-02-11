import Contentstack, { Region } from "@contentstack/delivery-sdk";

const environment = process.env.CONTENTSTACK_ENVIRONMENT || "production";

const apiKey = process.env.CONTENTSTACK_API_KEY || "";
const deliveryToken =
  environment === "dev"
    ? process.env.CONTENTSTACK_DELIVERY_TOKEN_DEV || ""
    : process.env.CONTENTSTACK_DELIVERY_TOKEN_PRODUCTION || "";

// Only initialise the SDK when credentials are actually present.
// During CI/CD builds without env vars this avoids the
// "Delivery token for Stack is required" crash.
const stack =
  apiKey && deliveryToken
    ? Contentstack.stack({
        apiKey,
        deliveryToken,
        environment,
        region: Region.EU,
      })
    : null;

export { environment };
export default stack;
