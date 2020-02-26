function GetPhoneNo() {
  var phoneNoRaw = document.getElementById("phone").value
  /* var phoneNo = FormatPhoneNumber(phoneNoRaw); */
  var phoneNo = phoneNoRaw;
  return phoneNo;
}
function OpenLink() {
  window.open("https://api.whatsapp.com/send?phone=" + GetPhoneNo(), '_blank');
}