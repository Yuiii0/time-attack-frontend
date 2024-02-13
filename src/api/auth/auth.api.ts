import { coreclient } from "..";

async function signUp(dto: { email: string; password: string }) {
  const response = await coreclient.post("/auth/sign-up", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  return accessToken;
}

async function logIn(dto: { id: string; pw: string }) {
  const response = await coreclient.post("/auth/log-in", dto);
  const { user } = response.data;

  const token = response.headers["set-cookie"];

  res.setHeader("Set-Cookie", `token=${token}; path=/;`);
  res.status(200).json(user);
}

// async function refreshToken(params: type) {}

const auth = {
  signUp,
  logIn,
};

export default auth;
