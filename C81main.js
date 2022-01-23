canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width = 2;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  radius = document.getElementById("radius").value;
  width = document.getElementById("width").value;
  mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  console.log("X = " + mouse_x + " ,Y = " + mouse_y);
  circle(mouse_x, mouse_y, radius);
}
function circle(mouse_x, mouse_y, radius) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.arc(mouse_x, mouse_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}
function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
