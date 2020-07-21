function thai() {}
thai = new thai();
number = 0;

// textArray
thai[number++] = "หิว <br>餓";
thai[number++] = "ขอโทษ <br>對不起、不好意思";
thai[number++] = "เรื่อย ๆ <br>一直、持續不斷";
thai[number++] = "ผอม <br>瘦";
thai[number++] = "แก้ม <br>臉頰";
thai[number++] = "วันนี้ <br>今天";
thai[number++] = "พรุ่งนี้ <br>明天";
thai[number++] = "อวานนี้ <br>昨天";
thai[number++] = "ไม่เป็นไร <br>沒關係";
thai[number++] = "ลักยิ้ม <br>酒窩";
thai[number++] = "สู้ๆนะ <br>加油";
thai[number++] = "ไดอารี่ <br>日記";
thai[number++] = "สุขสันต์วันวาเลนไทน์ <br>情人節快樂";
// keep adding items here...
increment = Math.floor(Math.random() * number);
document.write(thai[increment]);

//energy box
var sentence = document.getElementsByClassName("sentence")[0];
var touch = document.getElementsByClassName("touch")[0];
touch.onclick = function () {
  sentence.style.display = "block";
};
