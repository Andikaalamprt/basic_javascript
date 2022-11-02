/*
Alert, Prompt, Confirm
315 Comments
The Alert Box
JavaScript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes.
Alert Box
An alert box is used when you want to ensure that information gets through to the user.
When an alert box pops up, the user must click OK to proceed.
The alert function takes a single parameter, which is the text displayed in the popup box.
*/

// Prompt Box A prompt box is often used to have the user input a value before entering a page.
var user = prompt("user");
alert(user);

/*
Confirm Box
A confirm box is often used to have the user verify or accept something.
When a confirm box pops up, the user must click either OK or Cancel to proceed.
*/
var result = confirm("do you really want to leave this page?");
if (result == true) {
  alert("thanks for visiting");
} else {
  alert("thanks for staying with us");
}