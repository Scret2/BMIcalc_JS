$(function () {
  $("#button_push").click(function () {
    let inputtarget = parseInt($("#heighttarget").val());
    let inputtarget_2 = parseInt($("#weighttarget").val());
    if (isNaN(inputtarget) || isNaN(inputtarget_2)) {
      alert("半角数字のみを入力");
      console.log(typeof inputtarget);
      return;
    }
    if (inputtarget < 0 || inputtarget_2 < 0) {
      alert("-が入力されています");
      return;
    }
    //税込価格で計算する
    let total = Math.round((inputtarget_2 / (inputtarget / 100) ** 2) * 10) / 10;
    $("#total").val(total);
  });
});
