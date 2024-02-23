$("#hidden_table").hide();
function getData() {
  let itemCode = $("#itemCode").text().trim();
  let prod_type1 = $("#prod_type1").text().trim();
  const data_Send = {};
  data_Send.menucode = "M000000524";
  data_Send.type = "get_data";
  data_Send.header = JSON.stringify({ itemCode: itemCode });
  $.ajax({
    type: "post",
    url: "/ajax.do",
    data: data_Send,
    async: false,
    success: function (response, status, request) {
      const { print_data, sql3 } = JSON.parse(response.trim());
      console.log({ print_data });

      var is_completee_last_page = "";
      for (let k = 0; k < print_data.length; k++) {
        let item = print_data[k];
        console.log(item);

        let check_title = item.check_title || "";
        let check_item = item.check_item || "";
        let content = item.content || "";
        let remark = item.remark || "";

        let newRow = `
                                  <tr class="rowsrepeat"  style="height: 40px;">
                                        <td style="width: 57.775px; height: 35px; text-align: center;">${check_title}</td>
                                        <td style="width: 198.288px; height: 35px;">${check_item}</td>
                                        <td style="width: 505.95px; height: 35px;">${content}</td>
                                        <td style="width: 122.162px; height: 35px; text-align: center;">${remark}</td>
                                        <td style="width: 101.625px; height: 35px;"></td>
                                        <td style="width: 101.625px; height: 35px;"></td>
                                    </tr>
                                    `;

        is_completee_last_page += newRow;
        //  }
        // }
      }
      $("#last_tr").after(is_completee_last_page);
      $("#prod_type1_text").text(prod_type1 + " CHECK SHEET");
    },
    error: function (xmlHttpRequest, txtStatus, errorThrown) {
      console.log("erorr");
    },
  });
}
getData();

//adding blank row to full of 9 rows
const count_tr_selector = $("#data_tbl tbody tr");

let string = "";

for (let i = 1; i < 25 - count_tr_selector.length; i++) {
  string += `<tr class="rowsrepeat" style="height: 40px;text-align: center;">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>`;
}
// const test = $("#data_tbl tbody tr:last-child")
// const test = $("#last_tr");
// console.log(count_tr_selector.length)
$("#lastest_tr").before(string);
