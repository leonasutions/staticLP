// var sch;
// var url = "https://lp-staging.devlabs.id/";
// window.onload = getJadwal().then((data) => {
//   demo = false;
//   if (demo){

//   }else{

//   }
// });
// function reply_click(clicked_id) {
//   if (clicked_id === "videoButton") {
//     $("#labelVideo").text(sch.video.details.title);
//     var video = document.getElementById("videoPlayer");
//     video.src = url + "video/" + sch.video._id + "/" + "144";
//   } else if (clicked_id === "bannerButton") {
//     $("#labelBanner").text(sch.banner.details.title);
//     var image = $("#imageBanner").attr("src");
//     if (image != url + sch.banner.details.url) {
//       $("#imageBanner").attr("src", url + sch.banner.details.url);
//     }
//   } else if (clicked_id === "beritaButton") {
//     $("#labelBerita").text(sch.news.title);
//     $("#asd").text(sch.news.title);
//     $("#sinopsisBerita").text(sch.news.sinopsis);
//     var domain = new URL(sch.news.link);
//     $("#sumber").text(domain.hostname.split(".")[1]);
//     var image = $("#imageBerita").attr("src");
//     if (image != url + sch.news.details.url) {
//       $("#imageBerita").attr("src", url + sch.news.details.url);
//     }
//   }
// }
// $(document).ready(function () {
//   $("#resolusilower").click(function (e) {
//     $("#dropdownMenuButton1").text("Kualitas 144p");
//     var video = document.getElementById("videoPlayer");
//     video.src = url + "video/" + sch.video._id + "/" + "144";
//   });
//   $("#resolusilow").click(function (e) {
//     $("#dropdownMenuButton1").text("Kualitas 240p");
//     var video = document.getElementById("videoPlayer");
//     video.src = url + "video/" + sch.video._id + "/" + "240";
//   });
//   $("#resolusihigh").click(function (e) {
//     $("#dropdownMenuButton1").text("Kualitas 360p");
//     var video = document.getElementById("videoPlayer");
//     video.src = url + "video/" + sch.video._id + "/" + "360";
//   });
// });

// function getContent() {
//   var settings = {
//     cache: false,
//     crossDomain: true,
//     url: "https://lp-staging.devlabs.id/get/jadwal/",
//     method: "GET",
//     headers: {
//       "Access-Control-Allow-Credentials": true,
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET",
//       "Access-Control-Allow-Headers": "application/json",
//     },
//   };
//   $.ajax(settings).done(function (json) {
//     sch = json.schedule;
//     $("#judulBanner").text(
//       json.schedule.banner.details.title
//         ? json.schedule.banner.details.title
//         : "-"
//     );
//     $("#judulVideo").text(json.schedule.video.details.title);
//     $("#judulBerita").text(json.schedule.news.title);
//     $("#textCount").text("1/" + (json.questionsLength + 5));
//     var barWidth =
//       ((1 / (json.questionsLength + 5)) * 100) %
//       console.log(barWidth)
//       $("#bar").css("width", barWidth + "%");
//   });
//   //   fetch('https://lp-staging.devlabs.id/get/jadwal',)
//   //       .then(response => response.json())
//   //       .then(json => {
//   //           sch = json.schedule
//   //           $("#judulBanner").text(json.schedule.banner.details.title ? json.schedule.banner.details.title : '-')
//   //           $("#judulVideo").text(json.schedule.video.details.title)
//   //           $("#judulBerita").text(json.schedule.news.title)
//   //           $("#textCount").text('1/' + (json.questionsLength + 5))
//   //           var barWidth = (1 / (json.questionsLength + 5)) * 100 %
//   //               $("#bar").css("width", barWidth + '%')
//   //       })
// }

// function getJadwal() {
//   return fetch("https://lp-staging.devlabs.id/get/jadwal")
//     .then((response) => response.json())
//     .then((rsp) => {
//       sch = rsp.schedule;
//       $("#judulBanner").text(
//         rsp.schedule.banner.details.title
//           ? rsp.schedule.banner.details.title
//           : "-"
//       );
//       $("#judulVideo").text(rsp.schedule.video.details.title);
//       $("#judulBerita").text(rsp.schedule.news.title);
//       $("#textCount").text("1/" + (rsp.questionsLength + 5));
//       var barWidth =
//         ((1 / (rsp.questionsLength + 5)) * 100) %
//         $("#bar").css("width", barWidth + "%");
//       return rsp;
//     })
//     .catch((err) => console.log("Error", err));
// }

// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// var max = new Date().getFullYear();
// var min = max - 80;

// $("#yearsDropdown").append($("<option></option>").text("Tahun"));
// $("#monthsDropdown").append($("<option></option>").text("Bulan"));
// $("#daysDropdown").append($("<option></option>").text("Tanggal"));

// for (var i = max; i >= min; i--) {
//   $("#yearsDropdown").append($("<option></option>").attr("value", i).text(i));
// }

// const months = new Array();
// months[0] = "01";
// months[1] = "02";
// months[2] = "03";
// months[3] = "04";
// months[4] = "05";
// months[5] = "06";
// months[6] = "07";
// months[7] = "08";
// months[8] = "09";
// months[9] = "10";
// months[10] = "11";
// months[11] = "12";

// for (var i = 0; i < months.length; i++) {
//   $("#monthsDropdown").append(
//     $("<option></option>").attr("value", months[i]).text(months[i])
//   );
// }

// for (var i = 1; i <= 31; i++) {
//   const counter = i < 10 ? "0" + i : i;
//   $("#daysDropdown").append(
//     $("<option></option>").attr("value", counter).text(counter)
//   );
// }

// function showTab(n) {
//   // This function will display the specified tab of the form...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   //... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == x.length - 1) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Selanjutnya";
//   }
//   //... and run a function that will display the correct step indicator:
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form...
//   if (currentTab >= x.length) {
//     // ... the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x,
//     y,
//     i,
//     valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     // document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }
