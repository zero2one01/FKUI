const Elm = (key)=>document.getElementById(key);      
    
    const CrtEl =(el)=> {return document.createElement(el)};
    const QuSel = (sl)=> {return document.querySelector(sl)};
    const QuSal  = (sl)=> {return document.querySelectorAll(sl)};
    const SetLocal = (keyName,keyVal)=>{return localStorage.setItem(keyName,keyVal)};
    const GetLocal = (keyName)=>{return localStorage.getItem(keyName)};
    const DelLocal = (keyName)=>{return localStorage.removeItem(keyName)};
    const SetSess = (keyName,keyVal)=>{return sessionStorage.setItem(keyName,keyVal)};
    const GetSess = (keyName)=>{return sessionStorage.getItem(keyName)};
    const DelSess = (keyName)=>{return sessionStorage.removeItem(keyName)};
    const txtDis = (id,text,next)=>{
    let i=0;
    let txt = text;
    let speed=50;
    Elm(id).innerHTML = '';
    let typeWriterHandler =()=>{
          if (i < txt.length) {
          Elm(id).innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriterHandler,speed);
          }else{
          try{setTimeout(next(),(speed*10))}catch(e){}  
          }
        }
        typeWriterHandler();
    }
    
    const funcTrg =(key,params)=>{
      window[key](params);
    }
    
    const GAS = (func,storage,parameters)=>{
      google.script.run.withSuccessHandler(function(res){    
      window[storage] = res;
      })[func](parameters)
    }
    
    const getIdList=()=>{
      let elements = document.getElementsByTagName("*");
      // Create an array to store the IDs
      let ids = [];
      // Iterate through each element and retrieve its ID
      for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      let id = element.id;
      // Check if the element has an ID
      if (id) { ids.push(id) }
      }
      // Output the array of IDs
      console.log(ids);
    }
