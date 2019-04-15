

function generatePrime()
{
  
  var primenumber = document.getElementById('primeno')
  if (primenumber.value==""){
    fetch("/api/genp?bits=256")
    .then((res) => res.json())
    .then(res => {
      primenumber.value=res.prime
    });
  }
}

function nextGenerator(){
  
  var generatorvalue = document.getElementById('generator')
  if (generatorvalue.value==""){
    fetch("/api/geng?bits=256")
    .then((res) => res.json())
    .then(res => {
      generatorvalue.value=res.generator
    });
  }
}
function nextKeyA()
{
  var primenumber = document.getElementById('primeno')
  var Keybox1 = document.getElementById('keyA')
  if (Keybox1.value==""){
    fetch("/api/private_key?prime="+primenumber.value)
    .then((res) => res.json())
    .then(res => {
      Keybox1.value=res.private_key
    });
  }
}
function nextKeyB()
{
  var primenumber = document.getElementById('primeno')
  var Keybox2 = document.getElementById('keyB')
  if (Keybox2.value==""){
    fetch("/api/private_key?prime="+primenumber.value)
    .then((res) => res.json())
    .then(res => {
      Keybox2.value=res.private_key
    });
  }
}

function calculateGA()
{
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var gabox = document.getElementById('encryptA')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    gabox.value=res.Ga
  });
}
function calculateGB()
{
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var gbbox = document.getElementById('encryptB')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    gbbox.value=res.Gb
  });
}
function sendA()
{
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var recB = document.getElementById('receivedB')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    recB.value=res.Ga
  });
}
function sendB(){
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var recA = document.getElementById('receivedA')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    recA.value=res.Gb
  });
}
function calculateGAB(){
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var gabtext = document.getElementById('encryptAB')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    gabtext.value=res.Gab
  });
}
function calculateGBA(){
  var primenumber = document.getElementById('primeno')
  var generatorvalue = document.getElementById('generator')
  var Keybox1 = document.getElementById('keyA')
  var Keybox2 = document.getElementById('keyB')
  var gabtext = document.getElementById('encryptBA')
  fetch("/api/calg?p="+primenumber.value+"&a="+Keybox1.value+"&b="+Keybox2.value+"&g="+generatorvalue.value)
  .then((res) => res.json())
  .then(res => {
    gabtext.value=res.Gba
  });
}
