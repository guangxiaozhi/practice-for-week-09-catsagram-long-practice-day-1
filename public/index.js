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
  image.src = url;
  image.style.width = "800px"



  document.body.append(h1, image);
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center"


}



window.onload = addCat;
