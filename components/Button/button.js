import { useRouter } from "next/router";

export default function Button({ text }) {
  const router = useRouter();
  return <button onClick={() => router.back()}>{text}</button>;
}
