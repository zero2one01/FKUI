        let  thisDate = new Date();
        let  thisYear =  thisDate.getFullYear();
        let  thisMonth =  thisDate.getMonth();
    
    function calendar(){   
        let display = {};
        display.month = ["一月January","二月February","三月March","四月April","五月May","六月June","七月July","八月August","九月September","十月October","十一月November","十二月December"];
        display.currMonth = document.getElementById("calendar_currMonth");
        display.content = document.getElementById("calendar_content");

        let data = {};
        data.month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        data.dayone = new Date(thisYear,thisMonth,1).getDay();
        data.lastdate = new Date(thisYear, thisMonth + 1, 0).getDate();
        data.dayend = new Date(thisYear, thisMonth, data.lastdate).getDay();
        data.monthlastdate = new Date(thisYear, thisMonth, 0).getDate();

        let content = "";
        
        for (let i = data.dayone; i > 0; i--) {
        content+=`<li class="inactive">${data.monthlastdate - i + 1}</li>`;
        }
    
        for (let i=1; i <= data.lastdate; i++) {
        content+=`<li class="" id="${thisYear+"_"+data.month[thisMonth]+"_"+i}" onclick="dateClick(this.id)" ><b>${i}</b></li>`;
        }
    
        for (let i = data.dayend; i < 6; i++) {
        content+=`<li class="inactive" id="">${i - data.dayend + 1}</li>`
        }
        display.currMonth.innerText=`${display.month[thisMonth]} ${thisYear}`;
        display.content.innerHTML=content;
      
      }


    function monthSwitch(id){
        console.log(id)
        thisMonth = id==="calendar_navigation_prev" ?  thisMonth - 1 :  thisMonth + 1;
        // Check if the month is out of range
        if (thisMonth < 0 || thisMonth > 11) {
        // Set the date to the first day of the month with the new year
        thisDate = new Date(thisYear, thisMonth, new Date().getDate());
        // Set the year to the new year
        thisYear =  thisDate.getFullYear();
        // Set the month to the new month
        thisMonth =  thisDate.getMonth();
        }else{
        // Set the date to the current date
        thisDate=new Date();
        }
        // Call the manipulate function to update the calendar display
        calendar();
    }



  function dateClick(val){
    console.log(val);
  }


  