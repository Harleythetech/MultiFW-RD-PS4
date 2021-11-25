async function testkit(){
    alert("PS4 [8.xx] FontFace bug | Vulnerability test");
 
    var a = {};
 
    alert("Bug is about to happen!");
 
     // 1st stage : bug happens here
   
    var fontFace1 = new FontFace("font1","",a);
 
     // for debugging purposes | to check if the doesn't work anymore 
 
    alert("1st stage : bug doesn't work");
 
     // 2nd stage
    var fontFaceSet = new FontFaceSet([fontFace1]); 
 
    alert("2nd stage : bug is no longer working");
     
    // 3rd stage
    fontFace1.family = "";
    alert("3rd stage : bug stopped working");
 
    // if the bug is patched 
    alert("ps4 patched ");
 
   }