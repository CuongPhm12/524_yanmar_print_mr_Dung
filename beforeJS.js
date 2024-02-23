$("#" + itmobj1["prod_type1_ser"]).select2();
$("#" + itmobj1["carcass_cd_ser"]).select2();

setItemDefaultValue(
  $(`#${itmobj1["start_ym_ser"]}`),
  moment().format("YYYY-MM-01")
);
setItemDefaultValue(
  $(`#${itmobj1["end_ym_ser"]}`),
  moment().format("YYYY-MM-DD")
);
$("#reset_btn")
  .after(`<div class="right-tap-btn ajaxset" id="print_btn_custom" style="">
									<span class="right-btn-text">출력</span></div>`);

$("#search_btn").trigger("click");

$(".div-detail").after(
  '<div id="editer-content-sub" class="editer-content1" style="width: 100%; margin-top:20px;"></div>'
);

$(".form-titlex").hide();
$(".ITEM000017887-ITEM").height(130);
$(".ITEM000017885-ITEM").height(130);
$(".ITEM000017883-ITEM").height(130);
$(".ITEM000017881-ITEM").height(130);
$(".ITEM000017888-ITEM").height(130);
$(".ITEM000017886-ITEM").height(130);
$(".ITEM000017884-ITEM").height(130);
$(".ITEM000017882-ITEM").height(130);
$("#ITEM000017888_IMG").css("visibility", "hidden");
$("#ITEM000017886_IMG").css("visibility", "hidden");
$("#ITEM000017884_IMG").css("visibility", "hidden");
$("#ITEM000017882_IMG").css("visibility", "hidden");

$("." + itmobj1["image1_1"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image2_1"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image3_1"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image4_1"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image1"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image2"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image3"] + "-ITEM").appendTo("#editer-content-sub");
$("." + itmobj1["image4"] + "-ITEM").appendTo("#editer-content-sub");

$("#print_btn_custom").on("click", function () {
  let checkedRow = grid1.getCheckedRows();
  if (checkedRow.length == 1) {
    $("#print_btn").trigger("click");
  } else {
    msg("한 건만 선택 가능합니다");
    return;
  }
});
