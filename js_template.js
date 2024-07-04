
template = {};
template.fkui=(id,topup)=>{
  let content =
  `<div class="container py-4" id="app"><!--App-->
  <header class="pb-3 mb-4 border-bottom sticky-top" id="app_head"><!--App Heading-->
    <span class="fs-4 text-primary">
      <h1><b>FK</b><b class="text-secondary">U</b><b class="text-warning">I</b></h1>
    </span>
    <h5 class="text-secondary">
      <b>BE PROACTIVE | BE DIFFERENT</b>
    </h5>
  </header><!--App Heading END--> 
  <div class="p-5 mb-4 bg-body-tertiary rounded-3" id="app_container"><!--App body-->
    <div class="container-fluid py-5" id="app_body"><!--App Main-->
    <h1 class="display-5 fw-bold text-center">
      <b><a id="app_username" type="button"  data-bs-toggle="modal" 
      data-bs-target="#aboutMe" value="aboutMeTemplate"onclick="funcTrg(this)">你好!</a></b>
    </h1>
    <p class="col-md-8 fs-4 text-center">
      <b id="app_content"></b>
    </p>
      <div id="app_selection">
      <button onclick="modal.login()">Login</button>
      <button onclick="modal.calendar()">Calendar</button>
      <button onclick="modal.newReg()">newReg</button>
      <button onclick="modal.open()">open</button>
      <button onclick="test1()">GAS</button>
      </div>    
    </div><!--App Main END-->`
  if(topup===true){Elm(id).innerHTML+=content}else{Elm(id).innerHTML=content};
}

template.offcanvas=(id,topup)=>{
 let content =
 `<button class="btn btn-primary hidden" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas_trigger" id="offcanvas_trigger">
  offcanvas_trigger
  </button>
  <div class="offcanvas offcanvas-top" data-bs-backdrop="static" tabindex="-1" id="offcanvas" aria-labelledby="offcanvas_triggerLabel">
  <div class="offcanvas-header">
  </div><!--offcanvas-header END-->
    <div class="offcanvas-body">
      <div id="offcanvas_body">
      </div><!--offcanvas_body END-->
    </div>
  </div>`;
  if(topup===true){Elm(id).innerHTML+=content}else{Elm(id).innerHTML=content};
}

template.modal=(id,topup)=>{
let content =
`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary hidden" data-bs-toggle="modal" data-bs-target="#modal" id="modal_trigger">
Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="modal" 
tabindex="-1"
data-bs-backdrop="static"
data-bs-keyboard="false"
aria-labelledby="modalLabel"
aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="modal_close"></button>
</div>
<div class="modal-body" id="modal_body">
...
</div>
<div class="modal-footer">
</div>
</div>
</div>
</div>`;
if(topup===true){Elm(id).innerHTML+=content}else{Elm(id).innerHTML=content};

}

let modal = {};
modal.target = "modal_body";
modal.open =()=>{Elm("modal_trigger").click()};
modal.aboutme=(topup)=>{ 
  let content = 
  `<label for="fname">電話號碼</label>
  <input type="text" id="aboutMe_phone"value=${staff.phone} disabled><br>
  <label for="fname">員工姓名</label>
  <input type="text" id="aboutMe_name"value=${staff.name} disabled><br>
  <label for="fname">員工狀態</label>
  <input type="text" id="aboutMe_status"value=${staff.status} disabled><br>
  <label for="fname">員工性別</label>
  <input type="text" id="aboutMe_sex"value=${staff.sex} disabled><br>
  <label for="fname">入職日期</label>
  <input type="text" id="aboutMe_entry"value=${staff.entry} disabled><br>
  <label for="fname">工作部門</label>
  <input type="text" id="aboutMe_department"value=${staff.workDep} disabled><br>
    <label for="fname">工作時間</label>
  <input type="text" id="aboutMe_department"value=${staff.timeslot} disabled><br>`
  if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};  
  };

modal.userIdentify=(topup)=>{
  let content =
  ``;
  if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};
  modal.open();
};


modal.registration=(topup)=>{
  let content = ``;

  if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};
  modal.open();
}

modal.login=(topup)=>{
  let content =
  `<form onsubmit="return false;" id="login">
  <div><h1 class="text-secondary"><b id="login_header">員 工 登 入</b></h1></div>
  <div class="form-floating">
  <input type="number" class="form-control" id="login_id">
  <label for="floatingInput">員工編號</label>
  </div>
  <br>
  <div class="form-floating">
  <input type="password" class="form-control" id="login_phone">
  <label for="floatingPassword">電話號碼</label>
  </div>
  <br>
  <button class="btn btn-primary w-100 py-2" type="submit" id="login_submit" value="login" onclick="funcTrg(this.value)">登入</button>
  </form>`;
  if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};
  modal.open();
};

modal.calendar=(topup)=>{
  date = new Date();
  year =  date.getFullYear();
  month =  date.getMonth();
  let content=
  ` <header class="calendar-header" id="calendar_header">
    <b><p class="calendar-current-date" id="calendar_currMonth"></p></b>
    <div class="calendar-navigation" id="calendar_navigation">
    <span id="calendar_navigation_prev" class="material-symbols-rounded" onclick="monthSwitch(this.id)">chevron_left</span>
    <span id="calendar_navigation_next" class="material-symbols-rounded" onclick="monthSwitch(this.id)">chevron_right</span>
    </div>
    </header>
    <div class="calendar-body" id="calendar_body">
    <ul class="calendar-weekdays" id="calendar_weekdays">
    <li>日</li>
    <li>一</li>
    <li>二</li>
    <li>三</li>
    <li>四</li>
    <li>五</li>
    <li>六</li>
    </ul>
    <ul class="calendar-dates" id="calendar_content"></ul>
    <div id="calendar_button_group">
      <button class="btn btn-primary" id="calendar_submit" onclick="submitToBase()">提交</button>
      <button class="btn btn-primary" id="calendar_reset" onclick="reset()">重置</button>
    </div>
    </div>`
  if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};
  let arr = ["2024_JUN_6","2024_JUN_7","2024_JUN_10","2024_JUN_13","2024_JUL_12"];
  calendar(arr);
  Elm("modal_trigger").click();
}

modal.newReg=(topup)=>{
  let content= 
  `
 <form onsubmit="return false;">
 <h1><b>新入職登記</b></h1>
  <div class="mb-3 col-12">
  <label for="newReg_name_cn" class="form-label">中文名CineseName</label>
  <input type="text" class="form-control" id="newReg_ChineseName" placeholder="e.g.陳大文" required>
  </div>
  <div class="mb-3 col-12">
  <label for="newReg_surname_en" class="form-label">英文姓Surname</label>
  <input type="text" class="form-control" id="newReg_surname_en" placeholder="e.g.CHAN" required>
  </div>
  <div class="mb-3 col-12">
  <label for="newReg_name_en" class="form-label">英文名Name</label>
  <input type="text" class="form-control" id="newReg_name_en" placeholder="e.g.TAI MAN" required>
  </div>
  <div class="mb-3 col-12">
  <label for="newReg_othername_en" class="form-label">英文別名Othername</label>
  <input type="text" class="form-control" id="newReg_othername_en" placeholder="e.g.PETER">
  </div>
  <div class="mb-3 col-12">
  <label for="newReg_phone" class="form-label">電話Phone</label>
  <input type="number" class="form-control" id="newReg_phone" placeholder="e.g.12345678" required>
  </div>
   <div class="mb-3 col-12">
  <label for="newReg_birth" class="form-label">出生日期Birthday</label>
  <input type="date" class="form-control" id="newReg_birth" placeholder="e.g.1/1/1991" required>
  </div>
  <div class="mb-3 col-12">
  <label for="newReg_hkid" class="form-label">身份證號碼HKID</label>
  <input type="text" class="form-control" id="newReg_hkid" placeholder="e.g.Y1234567" required>
  </div>
    <div class="mb-3 col-12">
    <label for="newReg_sex" class="form-label">性別Gender</label>
    <select class="form-select" id="newReg_sex" required>
      <option selected disabled value="">請選擇性別</option>
      <option value="M">男士</option>
      <option value="F">女士</option>
    </select>
  </div>
      <div class="mb-3 col-12">
    <label for="newReg_marital" class="form-label">婚姻狀態MaritalStatus</label>
    <select class="form-select" id="newReg_marital" required>
      <option selected disabled value="">請選擇婚姻狀態</option>
      <option value="M">已婚</option>
      <option value="S">未婚</option>
    </select>
  </div>
  <div class="mb-3 col-12">
    <label for="newReg_address">地址Address</label>
  <textarea class="form-control" placeholder="居住地址" id="newReg_address"></textarea>
</div>
  <div class="mb-3 row col-12">
  <div class="col"><input type="text" id="newReg_emgname" class="form-control" placeholder="緊急聯絡人姓名" aria-label="newReg_emgname"></div>
  <div class="col"><input type="text" id="newReg_emgphone" class="form-control" placeholder="緊急聯絡人電話" aria-label="newReg_emgphone"></div>
  </div>
  <br>
  <div class="mb-3 col-12">
    <button class="btn btn-primary" type="submit" onclick="newReg_submit()">提交</button>
    <button class="btn btn-secondary" type="submit" onclick="newReg_clear()">清除</button>
  </div>
  </form>
  `
   if(topup===true){Elm(modal.target).innerHTML+=content}else{Elm(modal.target).innerHTML=content};
  Elm("modal_trigger").click();
}

function check_core(){
  let i = 0  
}

let offcanvas = {};
offcanvas.target = "offcanvas_body"

let speechReg = {};
speechReg.button =(id,topup)=>{
  let content = 
  `<div class="sticky-bottom text-center" id="speechReg_triggerBtn">
    <button class="btn btn-primary speech-btn-circle speech" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
  </svg></button>
  </div>`;
  if(topup===true){Elm(id).innerHTML+=content}else{Elm(id).innerHTML=content};
}