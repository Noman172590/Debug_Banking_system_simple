function getInputFieldValueById(inputFieldId) {
  
  const inputField = document.getElementById(inputFieldId);
  
  const inputFieldValueString = inputField.value;
  
  
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
  inputField.value = "";
}

function getTextElementValueById(elementId) {
  
  const textElement =document.getElementById(elementId);
  
  const textElementValueString = textElement.innerText;

  const textElementValue =parseInt(textElementValueString)  ;
  
  return textElementValue;
} 

function setTextElementValueById1(elementId, newValue) {
  
  elementId.innerText=newValue
}
function setTextElementValueById(elementId, newValue) {
  
  const textElement = document.getElementById(elementId);

 
  textElement.innerText = newValue;
}
