import axios from "axios";

export async function GET(request: Request) {
  try {
    await axios.get(process.env.SERVER_URL + "/healthz");
    return new Response("healthz", { status: 200 });
  } catch (error) {
    return new Response("not healthz", { status: 500 });
  }
}
