
var Members=["My Family Book","My Father","My Mother","My Brother"];
var Names_of_Family_Members=["Atharv Jogi","Suresh Jogi","Akshata Jogi","Aaditya Jogi"];
var images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
var i=1;
var no_of_family_members=4;
function next()
{    

UpdateName =Names_of_Family_Members[i];
Updateimg=images[i];
UpdateMember=Members[i];
document.getElementById("member").innerHTML=UpdateMember;
document.getElementById("name").innerHTML =UpdateName;
document.getElementById("img").src=Updateimg;
i++;
   if(i >= no_of_family_members)
   {
      i=0;
   }
}

