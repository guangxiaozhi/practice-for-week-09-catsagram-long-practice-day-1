// Your code here
const fetchimage = async ()=>{
  try{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const url = data[0].url;
    console.log("url", url);
    // document.querySelector('img').src = url;
    return url;
  }catch{
    console.log("Failed to fetch.")
  }
}

async function addCat(){
  console.log("start");
  const url = await fetchimage();
  console.log(url);
  const h1 = document.createElement("h1");
  h1.innerText = "Kitten Pic";
  const image = document.createElement("img");
  // image.setAttribute("src", "https://thecatapi.com/");
  image.src = url;

  document.body.append(h1, image);
}



window.onload = addCat;
