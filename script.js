var sch;
var url = "https://lp-staging.devlabs.id/";
var client = new ClientJS();
let videoArray = [];
let audioArray = [];
var dfp;
var dataAll;
var passwordLogin = "baktiaksi";
var username = "bakti";
// var unencryptedPassword = chapId + passwordLogin + chapChallenge;
// var encryptedPassword = hexMD5(chapId + passwordLogin + chapChallenge);
var encryptedPassword = hexMD5(passwordLogin);
let formatsVideo = {
  ogg: 'video/ogg; codecs="theora"',
  h264: 'video/mp4; codecs="avc1.42E01E"',
  webm: 'video/webm; codecs="vp8, vorbis"',
  webm_opus: 'video/webm; codecs="opus"',
  vp9: 'video/webm; codecs="vp9"',
  hls: 'application/x-mpegURL; codecs="avc1.42E01E"',
};
let formatsAudio = {
  mp3: "audio/mpeg",
  mp4: "audio/mp4",
  aif: "audio/x-aiff",
  flac: "audio/flac",
  aac: "audio/aac",
  ogg_flac: 'audio/ogg; codecs="flac"',
  ogg_vorbis: 'audio/ogg; codecs="vorbis"',
  ogg_opus: ' audio/ogg; codecs="opus"',
  wav: 'audio/wav; codecs="1"',
  webm_vorbis: 'audio/webm; codecs="vorbis"',
  webm_opus: 'audio/webm; codecs="opus"',
};
function supportsVideoType(type) {
  let video;

  // Allow user to create shortcuts, i.e. just "webm"

  if (!video) {
    video = document.createElement("video");
  }

  return video.canPlayType(formatsVideo[type] || type);
}
// Usage
if (supportsVideoType("webm") === "probably") {
  videoArray.push(formatsVideo.webm + " : probably");
} else if (supportsVideoType("webm") === "maybe") {
  videoArray.push(formatsVideo.webm + " : maybe");
} else {
}
if (supportsVideoType("ogg") === "probably") {
  videoArray.push(formatsVideo.ogg + " : probably");
} else if (supportsVideoType("ogg") === "maybe") {
  videoArray.push(formatsVideo.ogg + " : maybe");
} else {
}
if (supportsVideoType("h264") === "probably") {
  videoArray.push(formatsVideo.h264 + " : probably");
} else if (supportsVideoType("h264") === "maybe") {
  videoArray.push(formatsVideo.h264 + " : maybe");
} else {
}
if (supportsVideoType("vp9") === "probably") {
  videoArray.push(formatsVideo.vp9 + " : probably");
} else if (supportsVideoType("vp9") === "maybe") {
  videoArray.push(formatsVideo.vp9 + " : maybe");
} else {
}
if (supportsVideoType("hls") === "probably") {
  videoArray.push(formatsVideo.hls + " : probably");
} else if (supportsVideoType("hls") === "maybe") {
  videoArray.push(formatsVideo.hls + " : maybe");
} else {
}

function supportsAudioType(type) {
  let audio;

  if (!audio) {
    audio = document.createElement("audio");
  }

  return audio.canPlayType(formatsAudio[type] || type);
}

// Usage
if (supportsAudioType("mp3") === "probably") {
  audioArray.push(formatsAudio.mp3 + " : probably");
} else if (supportsAudioType("mp3") === "maybe") {
  audioArray.push(formatsAudio.mp3 + " : maybe");
} else {
}
if (supportsAudioType("mp4") === "probably") {
  audioArray.push(formatsAudio.mp4 + " : probably");
} else if (supportsAudioType("mp4") === "maybe") {
  audioArray.push(formatsAudio.mp4 + " : maybe");
} else {
}
if (supportsAudioType("aif") === "probably") {
  audioArray.push(formatsAudio.aif + " : probably");
} else if (supportsAudioType("aif") === "maybe") {
  audioArray.push(formatsAudio.aif + " : maybe");
} else {
}
if (supportsAudioType("flac") === "probably") {
  audioArray.push(formatsAudio.flac + " : probably");
} else if (supportsAudioType("flac") === "maybe") {
  audioArray.push(formatsAudio.flac + " : maybe");
} else {
}
if (supportsAudioType("aac") === "probably") {
  audioArray.push(formatsAudio.aac + " : probably");
} else if (supportsAudioType("aac") === "maybe") {
  audioArray.push(formatsAudio.aac + " : maybe");
} else {
}
if (supportsAudioType("ogg_flac") === "probably") {
  audioArray.push(formatsAudio.ogg_flac + " : probably");
} else if (supportsAudioType("ogg_flac") === "maybe") {
  audioArray.push(formatsAudio.ogg_flac + " : maybe");
} else {
}
if (supportsAudioType("ogg_vorbis") === "probably") {
  audioArray.push(formatsAudio.ogg_vorbis + " : probably");
} else if (supportsAudioType("ogg_vorbis") === "maybe") {
  audioArray.push(formatsAudio.ogg_vorbis + " : maybe");
} else {
}
if (supportsAudioType("ogg_opus") === "probably") {
  audioArray.push(formatsAudio.ogg_opus + " : probably");
} else if (supportsAudioType("ogg_opus") === "maybe") {
  audioArray.push(formatsAudio.ogg_opus + " : maybe");
} else {
}
if (supportsAudioType("wav") === "probably") {
  audioArray.push(formatsAudio.wav + " : probably");
} else if (supportsAudioType("wav") === "maybe") {
  audioArray.push(formatsAudio.wav + " : maybe");
} else {
}
if (supportsAudioType("webm_vorbis") === "probably") {
  audioArray.push(formatsAudio.webm_vorbis + " : probably");
} else if (supportsAudioType("webm_vorbis") === "maybe") {
  audioArray.push(formatsAudio.webm_vorbis + " : maybe");
} else {
}
if (supportsAudioType("webm_opus") === "probably") {
  audioArray.push(formatsAudio.webm_opus + " : probably");
} else if (supportsAudioType("webm_opus") === "maybe") {
  audioArray.push(formatsAudio.webm_opus + " : maybe");
} else {
}

const audioData = audioArray.join();
const videoData = videoArray.join();

var mediaDeviceArray = [];
var mac =
  document.getElementById("mac").value == "$(mac)"
    ? "3C:22:FB:BD:9A:CB"
    : document.getElementById("mac").value;
var ipLocal =
  document.getElementById("ipLocal").value == "$(ip)"
    ? "192.168.22.138"
    : document.getElementById("ipLocal").value;
let formData = {
  font: client.getFonts() || "-",
  resolution: client.getAvailableResolution() || "-",
  plugins: client.getPlugins() || "-",
  videoData: videoData || "-",
  audioData: audioData || "-",
  // ipAddressHardcode: ipAddress,
  ipLocal,
  // ipOrig:ipOrig||'-',
  mediaDevice: [],
  macAddress: mac,
};

window.onload = getJadwal();
// window.onload = getJadwal().then((data) => {

// });

function reply_click(clicked_id) {
  if (clicked_id === "videoButton") {
    $("#labelVideo").text(sch.video.details.title);
    var video = document.getElementById("videoPlayer");
    video.src = url + "video/" + sch.video._id + "/" + "144";
  } else if (clicked_id === "bannerButton") {
    $("#labelBanner").text(sch.banner.details.title);
    var image = $("#imageBanner").attr("src");
    if (image != url + sch.banner.details.url) {
      $("#imageBanner").attr("src", url + sch.banner.details.url);
    }
  } else if (clicked_id === "beritaButton") {
    $("#labelBerita").text(sch.news.title);
    $("#asd").text(sch.news.title);
    $("#sinopsisBerita").text(sch.news.sinopsis);
    var domain = new URL(sch.news.link);
    $("#sumber").text('sumber : '+domain.hostname.split(".")[1]);
    var image = $("#imageBerita").attr("src");
    if (image != url + sch.news.details.url) {
      $("#imageBerita").attr("src", url + sch.news.details.url);
    }
  }
}

function shortChar(char) { 

  var newChars = char
  if(char.length > 50) { 
    newChars = char.slice(0,50)+" ... "
  }

  return newChars
}

$(document).ready(function () {
  $("#resolusilower").click(function (e) {
    $("#dropdownMenuButton1").text("Kualitas 144p");
    var video = document.getElementById("videoPlayer");
    video.src = url + "video/" + sch.video._id + "/" + "144";
  });
  $("#resolusilow").click(function (e) {
    $("#dropdownMenuButton1").text("Kualitas 240p");
    var video = document.getElementById("videoPlayer");
    video.src = url + "video/" + sch.video._id + "/" + "240";
  });
  $("#resolusihigh").click(function (e) {
    $("#dropdownMenuButton1").text("Kualitas 360p");
    var video = document.getElementById("videoPlayer");
    video.src = url + "video/" + sch.video._id + "/" + "360";
  });

  // var judulVideo = $("#judulVideo").html()
  // $("#judulVideo").html(shortChar(judulVideo))

  // var judulBanner = $("#judulBanner").html()
  // $("#judulBanner").html(shortChar(judulBanner))

  // var judulBanner = $("#judulBanner").html()
  // $("#judulBanner").html(shortChar(judulBanner))
});

function getJadwal() {
  var hubungButon = document.getElementById("hubungButton");
  hubungButon.hidden = true;
  var hubungButon2 = document.getElementById("hubungButton2");
  hubungButon2.hidden = true;

  $.ajax({
    type: "POST",
    dataType: "json",
    data: formData,
    url: "https://lp-staging.devlabs.id/get/jadwal/",
    success: function (data) {
      var timeLeft = 45;

      var elem = document.getElementById("textCountdown");
      var elem2 = document.getElementById("textCountdown2");

      dfp = data.dfp._id;
      sch = data.schedule;
      dataAll = data;
      demoId = data.demoId;
      $("#judulBanner").text(
        data.schedule.banner.details.title
          ? shortChar(data.schedule.banner.details.title)
          : "-"
      );
      $("#judulVideo").text(data.schedule.video.details.title ? shortChar(data.schedule.video.details.title) : "");
      $("#judulBerita").text(data.schedule.news.title ? shortChar(data.schedule.news.title) : "");
      
      $("#judulBanner").attr("title",data.schedule.banner.details.title
          ? data.schedule.banner.details.title
          : "-"
      )
      $("#judulVideo").attr("title",data.schedule.video.details.title ? data.schedule.video.details.title : "");
      $("#judulBerita").attr("title",data.schedule.news.title ? data.schedule.news.title : "");

      demo = data.demo;
      survey = data.survey;
      //   console.log(document.getElementById("mac").value);
      if (demo && survey) {

        elem.hidden = true;
        elem2.hidden = true;

        hubungButon.hidden = false;
        hubungButon2.hidden = false;

        $("#bar").css("width", 100 + "%");
        $(`#doneSurvey`).append(
          `<h2>Terima kasih ${data.name}, telah berpartisipasi di survey BAKTI ONLINE</h2>`
        );
        $("#doneSurvey").css("display", "block");

        document.getElementById("hubungButton").disabled = false;
        document.getElementById("hubungButton2").disabled = false;

        $("#textCount").text(
          data.questionsLength + 5 + "/" + (data.questionsLength + 5)
        );

      } else if (demo == true && survey == false) {
        var timerId = setInterval(countdown, 1000);
        function countdown() {
          if (timeLeft == -1) {
            clearTimeout(timerId);

            elem.hidden = "true";
            elem2.hidden = "true";

            hubungButon.hidden = false;
            hubungButon2.hidden = false;

            konekInternet();

          } else {
            elem.innerHTML =
              "Anda akan terhubung ke internet setelah " +
              timeLeft +
              " detik, atau selesaikan survey dan klik tombol hubungkan ke internet";
            elem2.innerHTML =
              "Anda akan terhubung ke internet setelah " +
              timeLeft +
              " detik, atau selesaikan survey dan klik tombol hubungkan ke internet";

            timeLeft--;
          }
        }
        var barWidth = (5 / (data.questionsLength + 5)) * 100;
        $("#textCount").text("6" + "/" + (data.questionsLength + 5));
        $("#bar").css("width", barWidth + "%");
        $("#regForm").css("display", "block");
        var x = document.getElementsByClassName("tab");
        lenFor = x.length;
        for (var i = 0; i < lenFor; i++) {
          x[0].remove();
        }
        counterQuestion = 0;
        data.questions.forEach((question) => {
          counterOpsi = 0;
          if (question.type == "radio") {
            $("#formulir").append(
              ` <div class='tab' style='text-align:left' id=${question._id}>
                  <p style="text-align: center;">${question.question} </p>
              </div>`
            );
            question.option.forEach((opsi) => {
              $(`#${question._id}`).append(
                `<div class="form-check">
                    <input class="form-check-input" type="radio" name="${question._id}" id="surv-${counterQuestion}-${counterOpsi}" value="${opsi}">
                    <label class="form-check-label" for="surv-${counterQuestion}-${counterOpsi}">${opsi}</label>
                  </div>`
              );
              counterOpsi++;
            });
          } else if (question.type == "checkbox") {
            $("#formulir").append(
              ` <div class='tab' style="text-align:left" id=${question._id}>
                  <p style="text-align: center;">${question.question} </p>
              </div>`
            );

            question.option.forEach((opsi) => {
              $(`#${question._id}`).append(
                `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="${opsi}" name="${question._id}" id="surv-${counterQuestion}-${counterOpsi}">
                <label class="form-check-label" for="surv-${counterQuestion}-${counterOpsi}">
                  ${opsi}
                </label>
              </div>`
              );
              counterOpsi++;
            });
          }
          counterQuestion++;
        });
        x[0].style.display = "block";
      } else {
        var timerId = setInterval(countdown, 1000);
        function countdown() {
          if (timeLeft == -1) {
            clearTimeout(timerId);

            elem.hidden = "true";
            elem2.hidden = "true";

            hubungButon.hidden = false;
            hubungButon2.hidden = false;

            konekInternet();
          } else {
            elem.innerHTML =
              "Anda akan terhubung ke internet setelah " +
              timeLeft +
              " detik, atau selesaikan survey dan klik tombol hubungkan ke internet";
            
            elem2.innerHTML =
              "Anda akan terhubung ke internet setelah " +
              timeLeft +
              " detik, atau selesaikan survey dan klik tombol hubungkan ke internet";

            timeLeft--;
          }
        }
        var barWidth = (1 / (data.questionsLength + 5)) * 100;
        $("#bar").css("width", barWidth + "%");
        $("#textCount").text("1" + "/" + (data.questionsLength + 5));
        $("#regForm").css("display", "block");
        counterQuestion = 0;
        data.questions.forEach((question) => {
          counterOpsi = 0;
          if (question.type == "radio") {
            $("#formulir").append(
              ` <div class='tab' style="text-align:left" id=${question._id}>
                  <p style="text-align: center;">${question.question} </p>
              </div>`
            );
            question.option.forEach((opsi) => {
              $(`#${question._id}`).append(
                `<div class="form-check">
                      <input class="form-check-input" type="radio" name="${question._id}" id="surv-${counterQuestion}-${counterOpsi}" value="${opsi}">
                      <label class="form-check-label" for="surv-${counterQuestion}-${counterOpsi}">${opsi}</label>
                  </div>`
              );
              counterOpsi++;
            });
          } else if (question.type == "checkbox") {
            $("#formulir").append(
              ` <div class='tab' style="text-align:left" id=${question._id}>
                <p style="text-align: center;">${question.question} </p> 
              </div>`
            );
            question.option.forEach((opsi) => {
              $(`#${question._id}`).append(
                `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="${opsi}" name="${question._id}" id="surv-${counterQuestion}-${counterOpsi}">
                <label class="form-check-label" for="surv-${counterQuestion}-${counterOpsi}">
                  ${opsi}
                </label>
              </div>`
              );
              counterOpsi++;
            });
          }
          counterQuestion++;
        });
      }
    },
    error: function (request, status, error) {
      alert("err", error);
    },
  });
}



var currentTab = 0;
showTab(currentTab);

var maxDate = new Date().getFullYear();
var min = maxDate - 80;


for (var i = maxDate; i >= min; i--) {
  $("#yearsDropdown").append($("<option></option>").attr("value", i).text(i));
}

const months = new Array();
months[0] = "01";
months[1] = "02";
months[2] = "03";
months[3] = "04";
months[4] = "05";
months[5] = "06";
months[6] = "07";
months[7] = "08";
months[8] = "09";
months[9] = "10";
months[10] = "11";
months[11] = "12";

for (var i = 0; i < months.length; i++) {
  $("#monthsDropdown").append(
    $("<option></option>").attr("value", months[i]).text(months[i])
  );
}

for (var i = 1; i <= 31; i++) {
  const counter = i < 10 ? "0" + i : i;
  $("#daysDropdown").append(
    $("<option></option>").attr("value", counter).text(counter)
  );
}

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Selanjutnya";
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  if (n == 1) {
    var isiForm = $("#formulir").serialize();
    if (currentTab + 1 < x.length) {
      var text = document.getElementById("textCount").innerHTML;
      min = parseInt(text.split("/")[0]) + 1;
      max = parseInt(text.split("/")[1]);
      var barWidth = (min / max) * 100;
      $("#textCount").text(min + "/" + max);
      $("#bar").css("width", barWidth + "%");
    }
  } else {
    var text = document.getElementById("textCount").innerHTML;
    min = parseInt(text.split("/")[0]) - 1;
    max = parseInt(text.split("/")[1]);
    var barWidth = (min / max) * 100;
    $("#textCount").text(min + "/" + max);
    $("#bar").css("width", barWidth + "%");
  }
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    var paramObj = {};
    $.each($("#formulir").serializeArray(), function (_, kv) {
      if (paramObj.hasOwnProperty(kv.name)) {
        paramObj[kv.name] = $.makeArray(paramObj[kv.name]);
        paramObj[kv.name].push(kv.value);
      } else {
        paramObj[kv.name] = kv.value;
      }
    });
    paramObj["templateId"] = sch.survey._id;
    paramObj["dfpId"] = dfp;
    paramObj["demoId"] = demoId;
    $.ajax({
      type: "POST",
      url: "https://lp-staging.devlabs.id/lite/addsurvey",
      data: JSON.stringify(paramObj),
      success: function () {},
      dataType: "json",
      contentType: "application/json",
    });
    $("#regForm").css("display", "none");
    if (paramObj.fname == undefined) {
      paramObj.fname = dataAll.name.split(" ")[0];
      paramObj.lname = dataAll.name.split(" ")[1];
    }
    $(`#doneSurvey`).append(
      `<h2>Terima kasih ${paramObj.fname} ${paramObj.lname}, telah berpartisipasi di survey BAKTI ONLINE</h2>`
    );
    $("#doneSurvey").css("display", "block");

    document.getElementById("hubungButton").disabled = false;
    document.getElementById("hubungButton2").disabled = false;

    var elem = document.getElementById("textCountdown");
    elem.hidden = true;
    var elem2 = document.getElementById("textCountdown2");
    elem2.hidden = true;

    document.getElementById("hubungButton").hidden = false;
    document.getElementById("hubungButton2").hidden = false;

    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  selectOption = x[currentTab].getElementsByTagName("select");
  if (selectOption.length > 0) {
    for (i = 0; i < selectOption.length; i++) {
      if (selectOption[i].value == "") {
        selectOption[i].className += " invalid";
        valid = false;
      }
    }
  } else {
    var radioCheck = false;
    for (i = 0; i < y.length; i++) {
      if (y[i].type == "radio" || y[i].type == "checkbox") {
        if (y[i].checked == true) {
          radioCheck = true;
        }
      }
      if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
      }
    }
    if ("type" in y[0]) {
      if (y[0].type == "radio" || y[0].type == "checkbox") {
        if (!radioCheck) {
          valid = false;
        }
      }
    }
  }
  var ageValid= true
  // console.log(output);
  if(maxDate-parseInt(document.getElementById("yearsDropdown").value)<8){
    ageValid=false
    valid=false
  }
  if (!valid && !ageValid) {
    var exampleEl = document.getElementById("nextBtn");
    exampleEl.title="Silahkan isi umur anda minimal 8 tahun"
    var tooltip = new bootstrap.Tooltip(exampleEl);
    tooltip.show();
    setTimeout(function () {
      tooltip.dispose();
    }, 2000);
    
  }
  else if(!valid){
    var exampleEl = document.getElementById("nextBtn");
    exampleEl.title="Silahkan Mengisi Jawaban diatas sebelum melanjutkan"
    var tooltip = new bootstrap.Tooltip(exampleEl);
    tooltip.show();
    setTimeout(function () {
      tooltip.dispose();
    }, 2000);
  }
  return valid;
}
function konekInternet() {
  // var passwordLogin = "baktiaksi";
  // var username = "bakti";
  // $("#userInput").val(username);
  // $("#passwordInput").val(encryptedPassword);
  var form = document.getElementById("log");

  form.submit();
}
$("#submitHubungi").click(function (event) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let $this = $(this);
  event.preventDefault();
  if (
    $("#nama").val().trim() === "" ||
    $("#notelp").val().trim() === "" ||
    $("#email").val().trim() === "" ||
    $("#pesan").val().trim() === "" ||
    $("#kategori").find(":selected").val() === ""
  ) {
    $this.tooltip({
      title: "Silahkan lengkapi form di atas sebelum melanjutkan",
      placement: "top",
      trigger: "manual",
    });
    $this.tooltip("show");
    setTimeout(() => {
      $this.tooltip("hide");
    }, 1000);
  } else if ($("#notelp").val().length < 10 || $("#notelp").val().length > 13) {
    $this.tooltip("dispose");
    $this.tooltip({
      title: "Silahkan lengkapi form telepon dengan benar",
      placement: "top",
      trigger: "manual",
    });
    $this.tooltip("show");
    setTimeout(() => {
      $this.tooltip("hide");
    }, 1000);
  } else if (!$("#email").val().match(re)) {
    $this.tooltip("dispose");
    $this.tooltip({
      title: "Silahkan lengkapi form email dengan benar",
      placement: "top",
      trigger: "manual",
    });
    $this.tooltip("show");
    setTimeout(() => {
      $this.tooltip("hide");
    }, 1000);
  } else {
    const data = {
      name: $("#nama").val().trim(),
      phone: $("#notelp").val().trim(),
      email: $("#email").val().trim(),
      message: $("#pesan").val().trim(),
      kategori: $("#kategori").val(),
    };
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: url + "ticketing",
      data: JSON.stringify(data),
      dataType: "json",
      success: function () {
        $("#nama").val("");
        $("#notelp").val("");
        $("#email").val("");
        $("#pesan").val("");
        $("#success-alert")
          .fadeTo(2000, 500)
          .slideUp(500, function () {
            $("#success-alert").slideUp(500);
          });
      },
      error: function (request, status, error) {
        alert(error);
        // $(".demoName").text("Halo, " + $("#survey-q1-input").val())
      },
    });
  }
});
$("#modalVideo").on("hide.bs.modal", function(e) {
  $("#videoPlayer").attr("src", "");
});