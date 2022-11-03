const url = `http://localhost:3000/`;
const options = { 
  headers: new Headers({ "Content-Type": "application/json" }),
};




async function getData(){
  try{
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    data.forEach(x => {
      addToList(x.description, x._id);
    });
  } catch (err){
    console.log('error');
  }
}

getData();



async function postData(x){
  try{
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      }      
    });
  } catch (err){
    console.log('error');
  }
}

async function deleteData(x){
  try{
    await fetch(url+x, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }      
    });
  } catch (err){
    console.log('error');
  }
}


async function putData(a, b){
  try{
    await fetch(url+a, {
      method: "PUT",
      body: JSON.stringify(b),
      headers: {
        "Content-Type": "application/json",
      }     
    });
  } catch (err){
    console.log('error');
  }
}






