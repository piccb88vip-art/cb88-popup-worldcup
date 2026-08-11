(function () {
  function showCB88Popup() {
    var banners = [
      "https://plcl.me/images/idKbK.jpg",
      "https://plcl.me/images/fRvwn.jpg"
    ].filter(Boolean);

    var currentSlide = 0;
    var eventURL = "https://click-lynk.com/MINIGAMES-CLICKBET88";
    var rtpURL = "https://click-lynk.com/RTP_GACOR_CLICKBET88WL";
    var groupURL = "https://click-lynk.com/GROUP-TELEGRAM";
    var adminURL = "https://click-lynk.com/TELEGRAM_OFFCIAL_CLICKBET88WL";

    var path = window.location.pathname.toLowerCase();
    if (path !== "/" && path !== "/home" && path !== "/home/" && path !== "/index.html") return;
    if (document.getElementById("cb88PopupWrap")) return;

    if (!document.getElementById("cb88PopupStyle")) {
      var style = document.createElement("style");
      style.id = "cb88PopupStyle";
      style.innerHTML = `
        #cb88PopupWrap{
          position:fixed;
          inset:0;
          z-index:2147483647;
          background:rgba(0,3,10,.38);
          -webkit-backdrop-filter:blur(3px) saturate(.96);
          backdrop-filter:blur(3px) saturate(.96);
          display:flex;
          align-items:center;
          justify-content:center;
          padding:12px;
          box-sizing:border-box;
          font-family:Arial,Helvetica,sans-serif;
          overflow:hidden;
          cursor:pointer;
          isolation:isolate;
          animation:cbBackdropIn .22s ease-out both;
        }

        #cb88Popup{
          position:relative;
          width:100%;
          max-width:590px;
          background:linear-gradient(155deg,#061126 0%,#020711 48%,#07101f 100%);
          overflow:hidden;
          z-index:2;
          cursor:default;
          pointer-events:auto;
          clip-path:polygon(22px 0,calc(100% - 22px) 0,100% 22px,100% calc(100% - 22px),calc(100% - 22px) 100%,22px 100%,0 calc(100% - 22px),0 22px);
          border:2px solid #ffe7a3;
          box-shadow:
            0 0 0 2px #7e0715,
            0 0 0 5px #fff8e8,
            0 0 0 8px #c90d28,
            0 0 0 10px #f4bf45,
            0 0 28px rgba(255,32,56,.58),
            0 22px 60px rgba(0,0,0,.9);
          animation:cbPop .35s cubic-bezier(.18,.9,.28,1.12);
        }

        #cb88Popup *{cursor:default;}
        #cb88Popup a,#cb88Popup button{cursor:pointer;}

        #cb88Popup:before{
          content:"";
          position:absolute;
          inset:2px;
          pointer-events:none;
          z-index:14;
          border:7px solid transparent;
          border-image:linear-gradient(
            135deg,
            #8b0717 0%,#f0263f 12%,#fff6df 23%,#d20b29 36%,
            #ffc94f 50%,#fff8e7 61%,#d20b29 76%,#ff5266 88%,#8b0717 100%
          ) 10;
          box-shadow:
            inset 0 0 0 1px rgba(255,226,131,.9),
            inset 0 0 12px rgba(255,255,255,.16);
        }

        #cb88Popup:after{
          content:"🇮🇩  GEBYAR 17 AGUSTUS  🇮🇩";
          position:absolute;
          top:8px;
          left:50%;
          transform:translateX(-50%);
          z-index:16;
          padding:7px 18px 8px;
          border:2px solid #fff;
          border-radius:0 0 14px 14px;
          background:linear-gradient(180deg,#f22b3e,#a80013);
          color:#fff;
          font-size:12px;
          font-weight:1000;
          letter-spacing:1px;
          text-shadow:0 2px 3px rgba(0,0,0,.65);
          box-shadow:0 5px 16px rgba(0,0,0,.5),0 0 16px rgba(255,36,55,.45);
          white-space:nowrap;
          pointer-events:none;
        }

        .cb88Corner{
          position:absolute;
          width:52px;
          height:52px;
          z-index:15;
          pointer-events:none;
          opacity:1;
          filter:drop-shadow(0 2px 3px rgba(0,0,0,.75));
        }

        .cb88Corner:before,
        .cb88Corner:after{
          content:"";
          position:absolute;
          display:block;
        }

        .cb88Corner:before{
          inset:0;
          border-radius:16px 3px 16px 3px;
          border-top:5px solid #ffd76b;
          border-left:5px solid #b50b22;
          box-shadow:inset 3px 3px 0 #fff8e4;
        }

        .cb88Corner:after{
          width:16px;
          height:16px;
          top:6px;
          left:6px;
          transform:rotate(45deg);
          background:linear-gradient(135deg,#fff9d7,#ffcb45 38%,#ce102c 40%,#7f0012 100%);
          border:1px solid #ffe9a3;
          box-shadow:0 0 8px rgba(255,202,69,.72);
        }

        .cb88C1{top:5px;left:5px;}
        .cb88C2{top:5px;right:5px;transform:rotate(90deg);}
        .cb88C3{bottom:5px;left:5px;transform:rotate(-90deg);}
        .cb88C4{bottom:5px;right:5px;transform:rotate(180deg);}

        .cb88Ribbon{
          position:absolute;
          left:18px;
          right:18px;
          height:7px;
          z-index:15;
          pointer-events:none;
          border-top:1px solid rgba(255,233,157,.95);
          border-bottom:1px solid rgba(115,0,17,.9);
          background:repeating-linear-gradient(
            115deg,
            #b80720 0 18px,
            #f22b43 18px 30px,
            #fff9ea 30px 44px,
            #e8c370 44px 48px
          );
          box-shadow:0 1px 6px rgba(0,0,0,.7),0 0 7px rgba(255,210,82,.28);
        }

        .cb88RibbonTop{top:3px;}
        .cb88RibbonBottom{bottom:3px;transform:scaleX(-1);}

        #cb88PopupImg{
          width:100%;
          display:block;
          height:auto;
          transition:opacity .22s ease;
        }

        #cb88Prev,
        #cb88Next{
          position:absolute;
          top:44%;
          transform:translateY(-50%);
          width:34px;
          height:48px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.55);
          background:rgba(0,20,60,.78);
          color:#fff;
          font-size:34px;
          font-weight:900;
          line-height:40px;
          z-index:12;
          cursor:pointer;
          box-shadow:0 3px 12px rgba(0,0,0,.58);
        }

        #cb88Prev{left:8px;}
        #cb88Next{right:8px;}

        #cb88Dots{
          position:absolute;
          left:0;
          right:0;
          bottom:78px;
          display:flex;
          justify-content:center;
          gap:6px;
          z-index:12;
          pointer-events:none;
        }

        .cb88Dot{
          width:7px;
          height:7px;
          border-radius:50%;
          background:rgba(255,255,255,.45);
          box-shadow:0 0 8px rgba(255,255,255,.5);
        }

        .cb88Dot.active{
          background:#ffd65a;
          box-shadow:0 0 10px rgba(255,214,90,1);
        }

        #cb88CloseX{
          position:absolute;
          top:8px;
          right:8px;
          width:40px;
          height:40px;
          border-radius:50%;
          border:2px solid #fff;
          background:#c71936;
          color:#fff;
          font-size:28px;
          font-weight:900;
          line-height:1;
          cursor:pointer;
          z-index:20;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 0 3px;
          box-shadow:0 0 0 3px rgba(0,0,0,.48),0 5px 16px rgba(0,0,0,.72);
          transition:transform .16s ease,background .16s ease;
        }

        #cb88CloseX:hover{
          transform:scale(1.08);
          background:#ee2949;
        }

        #cb88Action{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
          padding:38px 11px 11px;
          background:linear-gradient(180deg,rgba(3,8,20,.97),rgba(5,11,24,.99));
          border-top:1px solid rgba(104,220,255,.25);
          position:relative;
          z-index:6;
        }

        #cb88Action:before{
          content:"AKSES CEPAT CLICKBET88";
          position:absolute;
          top:11px;
          left:50%;
          transform:translateX(-50%);
          color:rgba(255,255,255,.72);
          font-size:10px;
          font-weight:900;
          letter-spacing:1.8px;
          white-space:nowrap;
        }

        .cb88Btn{
          display:flex;
          align-items:center;
          justify-content:flex-start;
          gap:9px;
          min-height:54px;
          border-radius:12px;
          text-decoration:none;
          color:#fff;
          font-weight:900;
          letter-spacing:.2px;
          text-align:left;
          position:relative;
          overflow:hidden;
          background:
            linear-gradient(135deg,rgba(12,31,65,.98),rgba(4,9,20,.99) 58%,rgba(20,15,6,.96));
          transition:.18s ease;
          cursor:pointer;
          padding:8px 34px 8px 10px;
          isolation:isolate;
        }

        .cb88Btn:before{
          content:"";
          position:absolute;
          inset:1px 1px auto;
          height:46%;
          border-radius:10px 10px 50% 50%;
          background:linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,0));
          pointer-events:none;
          z-index:0;
        }

        .cb88Btn:after{
          content:"›";
          position:absolute;
          right:16px;
          top:50%;
          transform:translateY(-50%);
          font-size:34px;
          font-weight:900;
          opacity:.95;
          pointer-events:none;
        }

        .cb88Icon{
          position:relative;
          width:34px;
          height:34px;
          flex:0 0 34px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:10px;
          border:1px solid rgba(255,255,255,.42);
          background:linear-gradient(145deg,rgba(255,255,255,.23),rgba(255,255,255,.04));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.36),
            inset 0 -4px 8px rgba(0,0,0,.3),
            0 4px 8px rgba(0,0,0,.45);
          z-index:2;
          pointer-events:none;
        }

        .cb88Icon svg{
          width:25px;
          height:25px;
          display:block;
          overflow:visible;
          filter:drop-shadow(0 2px 2px rgba(0,0,0,.62));
        }

        .cb88Text{
          display:flex;
          flex-direction:column;
          line-height:1.08;
          z-index:2;
          pointer-events:none;
        }

        .cb88Main{
          font-size:13px;
          white-space:nowrap;
        }
        .cb88Sub{
          font-size:10px;
          margin-top:3px;
          font-weight:800;
          color:rgba(255,255,255,.9);
          white-space:nowrap;
        }

        #cb88Event{
          border:1px solid rgba(255,72,72,.95);
          box-shadow:inset 0 0 12px rgba(255,42,42,.15),inset 0 -3px 0 rgba(100,0,14,.55),0 4px 10px rgba(0,0,0,.42);
          background:linear-gradient(135deg,rgba(91,12,22,.98),rgba(22,8,15,.99) 56%,rgba(35,12,8,.98));
        }

        #cb88Event .cb88Main{color:#ff8585;}

        #cb88Rtp{
          border:1px solid rgba(255,194,55,.95);
          box-shadow:inset 0 0 10px rgba(255,194,55,.14),inset 0 -3px 0 rgba(105,68,0,.55),0 4px 10px rgba(0,0,0,.42);
          background:linear-gradient(135deg,rgba(75,45,3,.98),rgba(17,15,10,.99) 54%,rgba(7,25,52,.98));
        }

        #cb88Rtp .cb88Main{color:#ffe27a;}

        #cb88Group{
          border:1px solid rgba(0,195,255,.95);
          box-shadow:inset 0 0 10px rgba(0,195,255,.12),inset 0 -3px 0 rgba(0,74,120,.58),0 4px 10px rgba(0,0,0,.42);
        }

        #cb88Group .cb88Main{color:#7cddff;}

        #cb88Admin{
          border:1px solid rgba(51,224,154,.95);
          box-shadow:inset 0 0 10px rgba(51,224,154,.14),inset 0 -3px 0 rgba(0,93,64,.58),0 4px 10px rgba(0,0,0,.42);
        }

        #cb88Admin .cb88Main{color:#73ffc3;}

        .cb88Btn:hover{
          transform:translateY(-2px) scale(1.025);
          filter:brightness(1.14);
        }

        @keyframes cbBackdropIn{from{opacity:0}to{opacity:1}}
        @keyframes cbPop{from{opacity:0;transform:scale(.88) translateY(18px)}to{opacity:1;transform:scale(1) translateY(0)}}

        @media(max-width:520px){
          #cb88PopupWrap{
            padding:10px;
            -webkit-backdrop-filter:blur(2px) saturate(.98);
            backdrop-filter:blur(2px) saturate(.98);
          }

          #cb88Popup{
            max-width:94vw;
            max-height:94vh;
            clip-path:polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px);
          }

          #cb88Action{
            grid-template-columns:1fr 1fr;
            gap:8px;
            padding:34px 8px 8px;
          }

          .cb88Btn{
            min-height:52px;
            border-radius:11px;
            padding:7px 26px 7px 8px;
          }

          .cb88Corner{
            width:30px;
            height:30px;
          }

          #cb88Prev,
          #cb88Next{
            width:30px;
            height:42px;
            font-size:30px;
            top:39%;
          }

          #cb88Dots{
            bottom:156px;
          }

          .cb88Icon{width:29px;height:29px;flex-basis:29px;border-radius:8px}
          .cb88Icon svg{width:21px;height:21px}
          .cb88Main{font-size:10px}
          .cb88Sub{font-size:8px}
          .cb88Btn:after{right:9px;font-size:24px}

          #cb88Popup:after{
            top:6px;
            padding:5px 12px 6px;
            font-size:9px;
            letter-spacing:.6px;
          }

          #cb88CloseX{
            width:36px;
            height:36px;
            font-size:26px;
          }
        }
      `;

      document.head.appendChild(style);
    }

    var wrap = document.createElement("div");
    wrap.id = "cb88PopupWrap";

    wrap.innerHTML = `
      <div id="cb88Popup">
        <span class="cb88Corner cb88C1"></span>
        <span class="cb88Corner cb88C2"></span>
        <span class="cb88Corner cb88C3"></span>
        <span class="cb88Corner cb88C4"></span>
        <span class="cb88Ribbon cb88RibbonTop"></span>
        <span class="cb88Ribbon cb88RibbonBottom"></span>

        <button id="cb88CloseX" type="button" aria-label="Tutup popup">×</button>

        <button id="cb88Prev" type="button" aria-label="Banner sebelumnya">‹</button>
        <img id="cb88PopupImg" src="${banners[currentSlide]}" alt="CLICKBET88">
        <button id="cb88Next" type="button" aria-label="Banner berikutnya">›</button>

        <div id="cb88Dots"></div>

        <div id="cb88Action">
          <a id="cb88Event" class="cb88Btn" href="${eventURL}" target="_blank" rel="noopener noreferrer">
            <span class="cb88Icon">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <linearGradient id="cbGameBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#fff4df"/><stop offset=".42" stop-color="#d9dde7"/><stop offset="1" stop-color="#596476"/>
                  </linearGradient>
                </defs>
                <path d="M9.2 9.2h13.6c3.2 0 5.5 2.1 6.1 5.3l1 5.7c.8 4.5-3.8 6.9-6.6 3.5l-2.4-2.9h-9.8l-2.4 2.9c-2.8 3.4-7.4 1-6.6-3.5l1-5.7c.6-3.2 2.9-5.3 6.1-5.3Z" fill="url(#cbGameBody)" stroke="#ffe09a" stroke-width="1.2"/>
                <path d="M9.5 13.2v6M6.5 16.2h6" stroke="#c20d28" stroke-width="2.2" stroke-linecap="round"/>
                <circle cx="22.7" cy="14.2" r="1.7" fill="#f1b936"/><circle cx="25.8" cy="18" r="1.7" fill="#df1431"/>
                <path d="M12.7 20.8h6.6" stroke="#758399" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="cb88Text">
              <span class="cb88Main">EVENT AGUSTUS</span>
              <span class="cb88Sub">MAIN &amp; MENANG</span>
            </span>
          </a>

          <a id="cb88Rtp" class="cb88Btn" href="${rtpURL}" target="_blank" rel="noopener noreferrer">
            <span class="cb88Icon">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <linearGradient id="cbRobotBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#f9fbff"/><stop offset=".52" stop-color="#9bacbf"/><stop offset="1" stop-color="#3a475a"/>
                  </linearGradient>
                </defs>
                <path d="M16 4v4" stroke="#ffd45e" stroke-width="1.8"/><circle cx="16" cy="3.6" r="2" fill="#e8213c" stroke="#ffe18b"/>
                <rect x="5.5" y="8" width="21" height="17" rx="5" fill="url(#cbRobotBody)" stroke="#ffe093" stroke-width="1.1"/>
                <rect x="8.5" y="11" width="15" height="8" rx="3" fill="#071628"/>
                <circle cx="12.5" cy="15" r="1.8" fill="#38e8ff"/><circle cx="19.5" cy="15" r="1.8" fill="#38e8ff"/>
                <path d="M12 22h8" stroke="#d41631" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M5.5 14H3.7v5h1.8M26.5 14h1.8v5h-1.8" fill="none" stroke="#9eafc1" stroke-width="1.5"/>
              </svg>
            </span>
            <span class="cb88Text">
              <span class="cb88Main">RTP AI</span>
              <span class="cb88Sub">CEK RTP HARI INI</span>
            </span>
          </a>

          <a id="cb88Group" class="cb88Btn" href="${groupURL}" target="_blank" rel="noopener noreferrer">
            <span class="cb88Icon">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <linearGradient id="cbTgPlane" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#7eeaff"/><stop offset=".48" stop-color="#1aaee8"/><stop offset="1" stop-color="#075ba9"/>
                  </linearGradient>
                </defs>
                <path d="M28.2 5.2 3.8 14.7c-1.7.7-1.7 1.7-.3 2.1l6.3 2 2.4 7.4c.3.9.2 1.3 1.1 1.3.7 0 1-.3 1.4-.7l3.1-3 6.5 4.8c1.2.7 2.1.3 2.4-1.1l4.1-19.4c.4-1.8-.7-2.7-2.6-1.9Z" fill="url(#cbTgPlane)" stroke="#d9f8ff" stroke-width="1"/>
                <path d="m10 18.5 14.7-9.2-11.5 11.2-.4 5.1" fill="#e9fcff" opacity=".9"/>
              </svg>
            </span>
            <span class="cb88Text">
              <span class="cb88Main">GRUP TELEGRAM</span>
              <span class="cb88Sub">INFO TERBARU</span>
            </span>
          </a>

          <a id="cb88Admin" class="cb88Btn" href="${adminURL}" target="_blank" rel="noopener noreferrer">
            <span class="cb88Icon">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <linearGradient id="cbAdminHead" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#d8fff0"/><stop offset=".5" stop-color="#45d89e"/><stop offset="1" stop-color="#087b5b"/>
                  </linearGradient>
                </defs>
                <circle cx="16" cy="12" r="5.2" fill="url(#cbAdminHead)" stroke="#e9fff6" stroke-width="1"/>
                <path d="M7 25.8c.8-5.3 4-8 9-8s8.2 2.7 9 8" fill="url(#cbAdminHead)" stroke="#dfffee" stroke-width="1"/>
                <path d="M7.1 13.2a8.9 8.9 0 0 1 17.8 0" fill="none" stroke="#f4d36b" stroke-width="2.2" stroke-linecap="round"/>
                <rect x="4.6" y="12" width="4.2" height="7.5" rx="2" fill="#f1bd45"/><rect x="23.2" y="12" width="4.2" height="7.5" rx="2" fill="#f1bd45"/>
                <path d="M25.2 19c0 3-2 4.2-5.2 4.2" fill="none" stroke="#f1bd45" stroke-width="1.8" stroke-linecap="round"/><circle cx="19.3" cy="23.2" r="1.4" fill="#fff0ac"/>
              </svg>
            </span>
            <span class="cb88Text">
              <span class="cb88Main">HUBUNGI ADMIN</span>
              <span class="cb88Sub">BANTUAN 24 JAM</span>
            </span>
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(wrap);

    var popup = document.getElementById("cb88Popup");
    var closeBtn = document.getElementById("cb88CloseX");
    var img = document.getElementById("cb88PopupImg");
    var prevBtn = document.getElementById("cb88Prev");
    var nextBtn = document.getElementById("cb88Next");
    var dotsBox = document.getElementById("cb88Dots");
    var previousBodyOverflow = document.body.style.overflow;
    var previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (banners.length < 2) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      dotsBox.style.display = "none";
    }

    function renderDots() {
      dotsBox.innerHTML = "";
      banners.forEach(function (_, i) {
        var dot = document.createElement("span");
        dot.className = "cb88Dot" + (i === currentSlide ? " active" : "");
        dotsBox.appendChild(dot);
      });
    }

    function updateSlide() {
      img.style.opacity = "0";
      setTimeout(function () {
        img.src = banners[currentSlide];
        img.style.opacity = "1";
        renderDots();
      }, 120);
    }

    function closeOnEscape(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    function closePopup() {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", closeOnEscape);

      if (wrap && wrap.parentNode) {
        wrap.parentNode.removeChild(wrap);
      }
    }

    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      currentSlide = (currentSlide - 1 + banners.length) % banners.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      currentSlide = (currentSlide + 1) % banners.length;
      updateSlide();
    });

    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closePopup();
    });

    document.addEventListener("keydown", closeOnEscape);

    wrap.addEventListener("click", function (e) {
      if (popup && !popup.contains(e.target)) {
        closePopup();
      }
    });

    popup.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    renderDots();
  }

  showCB88Popup();

  var lastURL = location.href;

  setInterval(function () {
    if (location.href !== lastURL) {
      lastURL = location.href;

      setTimeout(function () { 
        showCB88Popup();
      }, 300);
    }
  }, 500);

  window.addEventListener("popstate", function () {
    setTimeout(showCB88Popup, 300);
  });

  document.addEventListener("click", function (e) {
    var el = e.target.closest("a,button,[role='button']");
    if (!el) return;

    var text = (el.innerText || el.textContent || "").toLowerCase();
    var href = (el.getAttribute("href") || "").toLowerCase();

    if (
      text.includes("home") ||
      text.includes("beranda") ||
      href === "/" ||
      href.includes("/home")
    ) {
      setTimeout(showCB88Popup, 500);
    }
  });
})();
