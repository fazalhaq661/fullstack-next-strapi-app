import Image from "next/image";

async function loader(){

  const path = "/api/global";
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  const response = await fetch(url.href);
  const data = await response.json();

  console.log(data)
  return {...data.data};

}

export default async function Home() {
  const data = await loader();
  console.log(data)

  return <div>
    <h1>{data.topNav.logo.lable}</h1>
    <h1>fkdadjfkdk</h1>
  </div>
}
