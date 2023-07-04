var flag=1;
function resetForm() {
  document.forms["studentForm"].reset();
}

function validateForm() {
    var name = document.forms["studentForm"]["name"].value.trim();
    var email = document.forms["studentForm"]["email"].value;
    var website = document.forms["studentForm"]["website"].value;
    var imageLink = document.forms["studentForm"]["imageLink"].value;
    var gender = document.forms["studentForm"]["gender"].value;
    var html = document.forms["studentForm"]["html"].checked;
    var css = document.forms["studentForm"]["css"].checked;
    var java = document.forms["studentForm"]["java"].checked;
    flag=1;
    if (name == "") {
      alert("Please enter a name");
      return false;
    }
    if (email == "") {
      alert("Please enter an email");
      return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if (reg.test(email) == false)
    {
    alert('Invalid Email Address');
    return false;
    }
    
    if (website == "") {
      alert("Please enter a website");
      return false;
    }
    if (imageLink == "") {
      alert("Please enter an image link");
      return false;
    }
    if (gender == "") {
      alert("Please select a gender");
      return false;
    }
    if (!html && !css && !java) {
      alert("Please select at least one skill");
      return false;
    }
    flag=0;
    addStudentToList();
    resetForm();
    return true;
  }
  
function addStudentToList() {
  if(flag==0)
    {
    var name = document.forms["studentForm"]["name"].value;
    var email = document.forms["studentForm"]["email"].value;
    var website = document.forms["studentForm"]["website"].value;
    var imageLink = document.forms["studentForm"]["imageLink"].value;
    var gender = document.forms["studentForm"]["gender"].value;
    const skills = [];
    var l=0;
    if (document.forms["studentForm"]["html"].checked) {
      skills[l]= "HTML";
      l=l+1;
    }
    if (document.forms["studentForm"]["css"].checked) {
      skills[l]= "CSS";
      l=l+1;
    }
    if (document.forms["studentForm"]["java"].checked) {
      skills[l]= "Java";
      l=l+1;
    }
  var studentTable = document.getElementById("studentTable");
  var newRow = studentTable.insertRow(-1);
//   var nameCell = newRow.insertCell(0);
  var detailsCell = newRow.insertCell(0);
  var imageCell = newRow.insertCell(1);
 
//   nameCell.innerHTML = name;
  detailsCell.innerHTML = "<b>"+name+"</b>"+ "<br>" + gender + "<br>" + email + "<br>" +"<a href='"+website+"' target='_blank'>"+ website +"</a>"+ "<br>Skills: " + skills;
  imageCell.innerHTML ="<center>"+ "<img src='" + imageLink + "' alt='" + name + "' width='100' height='100'>"+"</center>";
}

 
}