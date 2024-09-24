function threeValueMulti(id1, id2) {
  return 0.5 * id1 * id2;
}
function twoValueMulti(id1, id2) {
  return id1 * id2;
}
function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}

function commonFunction(id1, id2) {
  const b = getInputValue(id1);
  const h = getInputValue(id2);
  if (isNaN(b, h)) {
    return;
  }

  return threeValueMulti(b, h);
}

//Triangle

document.getElementById("btn-Triangle").addEventListener("click", function () {
  // const b = getInputValue("b-inp-Triangle");
  //const h = getInputValue("h-inp-Triangle");
  // if (isNaN(b, h)) {
  //   alert("please type a Number");
  //   return;
  // }
  const result = commonFunction("b-inp-Triangle", "h-inp-Triangle");
  //const result = threeValueMulti(b, h);
  if (!result) {
    alert("please type a Number");
    return;
  }
  document.getElementById("value-Triangle").innerText = result;

  document.getElementById("b-inp-Triangle").value = "";
  document.getElementById("h-inp-Triangle").value = "";
});

//Rectangle
document.getElementById("btn-Rectangle").addEventListener("click", function () {
  const w = getInputValue("w-inp-Rectangle");
  const i = getInputValue("i-inp-Rectangle");
  if (isNaN(w, i)) {
    alert("please type a Number");
    return;
  }
  const result = twoValueMulti(w, i);
  document.getElementById("value-Rectangle").innerText = result;

  document.getElementById("w-inp-Rectangle").value = "";
  document.getElementById("i-inp-Rectangle").value = "";
});

//Parallelogram
document
  .getElementById("btn-Parallelogram")
  .addEventListener("click", function () {
    const b = getInputValue("b-inp-Parallelogram");
    const h = getInputValue("h-inp-Parallelogram");
    if (isNaN(b, h)) {
      alert("please type a Number");
      return;
    }
    const result = twoValueMulti(b, h);
    document.getElementById("value-Parallelogram").innerText = result;

    document.getElementById("b-inp-Parallelogram").value = "";
    document.getElementById("h-inp-Parallelogram").value = "";
  });

//Rhombus
document.getElementById("btn-Rhombus").addEventListener("click", function () {
  const d1 = getInputValue("d1-inp-Rhombus");
  const d2 = getInputValue("d2-inp-Rhombus");
  if (isNaN(d1, d2)) {
    alert("please type a Number");
    return;
  }
  const result = threeValueMulti(d1, d2);
  document.getElementById("value-Rhombus").innerText = result;

  document.getElementById("d1-inp-Rhombus").value = "";
  document.getElementById("d2-inp-Rhombus").value = "";
});

//Pentagon
document.getElementById("btn-Pentagon").addEventListener("click", function () {
  const p = getInputValue("p-inp-Pentagon");
  const b = getInputValue("b-inp-Pentagon");
  if (isNaN(p, b)) {
    alert("please type a Number");
    return;
  }
  const result = threeValueMulti(p, b);
  document.getElementById("value-Pentagon").innerText = result;

  document.getElementById("p-inp-Pentagon").value = "";
  document.getElementById("b-inp-Pentagon").value = "";
});

//Ellipse
document.getElementById("btn-Ellipse").addEventListener("click", function () {
  const a = getInputValue("a-inp-Ellipse");
  const b = getInputValue("b-inp-Ellipse");
  if (isNaN(a, b)) {
    alert("please type a Number");
    return;
  }
  let result = twoValueMulti(a, b);
  result = result * 3.1416;
  document.getElementById("value-Ellipse").innerText = result;

  document.getElementById("a-inp-Ellipse").value = "";
  document.getElementById("b-inp-Ellipse").value = "";
});
