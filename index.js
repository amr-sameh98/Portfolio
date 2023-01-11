function copyText(btnClass, inputClass) {
  let btnCopy = document.querySelector(btnClass);
  btnCopy.addEventListener("click", function () {
    let input = document.querySelector(inputClass);
    input.select();
    document.execCommand("copy");
    btnCopy.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      btnCopy.classList.remove("active");
    }, 2500);
  });
}

copyText(".phone-copy", ".phone-num");
copyText(".email-copy", ".email");
