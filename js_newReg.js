let newReg_idList = ["newReg_ChineseName","newReg_surname_en","newReg_name_en","newReg_othername_en","newReg_phone","newReg_birth","newReg_hkid","newReg_sex","newReg_marital","newReg_address","newReg_emgname","newReg_emgphone"];

function newReg_submit(){
  let obj = {};
  obj.base = data.base;
  obj.sheet = "newReg";
  newReg_idList.forEach(function(r){
    obj[r] = Elm(r).value;
  })
  console.log(obj);
  google.script.run.withSuccessHandler(function(){alert("success")}).newReg(obj);
}
function newReg_clear(){
  newReg_idList.forEach(function(r){Elm(r).value = ""})
}