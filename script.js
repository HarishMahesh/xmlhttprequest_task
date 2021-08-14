// get all countries with population more than 10cr

const getapiData = ()=> {
  
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://restcountries.eu/rest/v2/all')
    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = ()=> {
        let data = xhr.response;
        
        getfilterdCounties(data);
    }
 
   
}

getapiData();

function getfilterdCounties(data)
{
  
    let mappedarray = data.map(obj => {
        const {name,population} = obj;
        return {name,population};
    });

    let filteredarray = mappedarray.filter(obj => obj.population > 10000000)
    console.log(filteredarray);

   
}

