var i = 0;

var fwUA = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple'));
function ConsoleCheck() {
  let PS4C = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 ('), navigator.userAgent.indexOf(') Apple'));
  //alert(PS4C);
  if (PS4C.includes("5.0 (Play") ) {
  //alert("ps4 detect");
  document.getElementById("pc").style.display = "none";
  document.getElementById("ps4").style.display = "none";
  document.getElementById("ButtonCredit").style.display = "none";
  document.getElementById("ButtonJailbreak").style.display = "none";


  const params = new URLSearchParams(document.location.search);
  const J = params.get("J");
  if (J == "J") {
      document.getElementById("pc").style.display = "none";
      document.getElementById("ps4").style.display = "none";
      //document.getElementById("PSTitle").style.display = "none";
      //window.location = "./GoldHen/755.html";
  } else if (J == "P") {
      document.getElementById("pc").style.display = "block";
      document.getElementById("ps4").style.display = "none";
      document.getElementById("psip").style.visibility = "hidden";
      document.getElementById("psip").value = "127.0.0.1";
      document.getElementById("cb").style.visibility = "hidden";
      removeOptions(document.getElementById("cb"));
      addOption(document.getElementById("cb"), fwUA, fwUA);
      //alert(fwUA);
      //document.getElementById("cb").value = fwUA;
      document.getElementById("ButtonCredit").style.display = "block";
      document.getElementById("ButtonCredit").style.width = "10%";
      document.getElementById("ButtonCredit").style.marginLeft = "30%";
      document.getElementById("ButtonJailbreak").style.display = "block";
  }
  if (fwUA == "5.05" || fwUA == "6.72" || fwUA == "7.02" || fwUA == "7.50" || fwUA == "7.51" || fwUA == "7.55") {
    OSDetect(`OS : Playstation 4 <br> FW : ${fwUA}`, "success");
  } else if (fwUA == "5.50" || fwUA == "5.53" || fwUA == "5.55" || fwUA == "5.56" || fwUA == "6.00" || fwUA == "6.02" || fwUA == "6.20" || fwUA == "6.50" || fwUA == "6.51" || fwUA == "6.70" || fwUA == "6.71") {
    OSDetect(`OS : Playstation 4 <br> FW : ${fwUA}<br> Please update to 6.72 !`, "warning");
  } else if (fwUA == "7.00" || fwUA == "7.01") {
    OSDetect(`OS : Playstation 4 <br> FW : ${fwUA} <br> Please update to 7.02 !`, "warning");
  } else if (fwUA == "8.00" || fwUA == "8.01" || fwUA == "8.03" || fwUA == "8.50" || fwUA == "8.52" || fwUA == "9.00") {
    OSDetect(`OS : Playstation 4 <br> FW : ${fwUA} <br> You cannot jailbreak for now !`, "error");
  } else {
    OSDetect(`OS : Playstation 4 <br> FW : N/A <br> Can't detect firmware !`, "warning");
  }
  } else {
    document.getElementById("pc").style.display = "block";
    if (PS4C.includes("Windows")) {
      OSDetect(`OS : Windows`, "success");
    } else if (PS4C.includes("(PS4;")) {
      OSDetect(`OS : PS4`, "success");
    } else if (PS4C.includes("(iPhone;")) {
      OSDetect(`OS : iPhone`, "success");
    } else if (PS4C.includes("Android")) {
      OSDetect(`OS : Android`, "success");
    } else if (PS4C.includes("iPad")) {
      OSDetect(`OS : iPad`, "success");
    } else if (PS4C.includes("Mac OS")) {
      OSDetect(`OS : MacOS`, "success");
    } else if (PS4C.includes("Linux")) {
      OSDetect(`OS : Linux`, "success");
    } else {
      OSDetect(`OS : N/A <br> Can't detect OS`, "warning");
    }
       
  }
}


function addOption(selectbox,text,value )

  {var optn = document.createElement("OPTION");

  optn.text = text;

  optn.value = value;

  selectbox.options.add(optn);

}

function removeOptions(selectElement) {
  var i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
     selectElement.remove(i);
  }
}
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          document.getElementById(element).style.display = 'none';
      }
      document.getElementById(element).style.opacity = op;
      document.getElementById(element).style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 1;
  }, 0);
}
function unfade(element) {
  var op = 0.1;  // initial opacity
  document.getElementById(element).style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      document.getElementById(element).style.opacity = op;
      document.getElementById(element).style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 1;
  }, 0);
}

function SucessNotif() {
  new Notify({
    status: 'success',
    title: 'Sucess',
    text: "Payload Loaded !",
    effect: 'slide',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: false,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 500,
    gap: 25,
    distance: 35,
    type: 2,
    position: 'top right'
  })
}

function ErrorNotif() {
  new Notify({
    status: 'Error',
    title: 'Error',
    text: "Can't send the payload !",
    effect: 'slide',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: false,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 500,
    gap: 25,
    distance: 35,
    type: 3,
    position: 'top right'
  })
}

function ErrorNotif2() {
  new Notify({
    status: 'Error',
    title: 'Error',
    text: "Payload Not Found !",
    effect: 'slide',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 500,
    gap: 25,
    distance: 35,
    type: 3,
    position: 'top right'
  })
}

function ErrorNotif3() {
  new Notify({
    status: 'Error',
    title: 'Error',
    text: "Server busy !",
    effect: 'slide',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 500,
    gap: 25,
    distance: 35,
    type: 3,
    position: 'top right'
  })
}

function PleaseWait() {
  new Notify({
    status: 'warning',
    title: 'PLEASE WAIT',
    text: "If nothing happend check if you have activated the 'BinLoader Server' in the setting !",
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: false,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 1000,
    gap: 25,
    distance: 35,
    type: 3,
    position: 'top right'
  })
}

function ServerStatus(str) {
  new Notify({
    status: 'warning',
    title: 'Server Status',
    text: str,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: false,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 1000,
    gap: 25,
    distance: 35,
    type: 2,
    position: 'top right'
  })
}


function OSDetect(str,tpe) {
  new Notify({
    status: tpe,
    title: "Operating System Detected",
    text: str,
    effect: 'slide',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: false,
    showCloseButton: false,
    autoclose: true,
    autotimeout : 10000,
    gap: 25,
    distance: 35,
    type: 1,
    position: 'top right'
  })
}
