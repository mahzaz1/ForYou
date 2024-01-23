var i = 0;
var txt1 =
" Riffu My Love💜...!!!! <<              Kaise bataoon main tumhe <<        Mere liye tum kaun ho   <<        Kaise bataoon main tumhe         >        Tum dhadkanon ka geet ho ❤ <<        Jeevan ka tum sangeet ho 😍<<        Tum zindagi, tum bandagi💙 <<          Tum roshni, tum taazgi ❣ <<       Tum har khushi, tum pyaar ho💞 <<          Tum preet ho, manmeet ho🥰          >        Saanson mein tum, aahon mein tum 🤩 <<         Neendon mein tum, khwaabon mein tum 🥰 <<           Tum ho meri har baat mein 💘 <<           Tum ho mere din raat mein 🌙 <<          Tum subah mein, tum shaam mein 🌄 <<          Tum soch mein, tum kaam mein 😋       >       Riffuuuu Kesy btauuu 😉    <<        Mere liye pana bhi tum 😘  <<             Mere liye khona bhi tum 💗  <<        Mere liye hansna bhi tum 💝 <<         Mere liye rona bhi tum 💛<<       Aur jagaana sona bhi tum 💞           >   Jaaoon kahin, dekhoon kahin 🙄 <<       Tum ho wahan, tum ho wahin 💘 <<          Kaise bataoon main tumhe 💕 <<          Tum bin to main kuchh bhi nahi 💜 <<     Kaise bataoon main tumhe 🥰 <<          Tum bin to main kuchh bhi nahi 💝   ";
var speed = 100;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
