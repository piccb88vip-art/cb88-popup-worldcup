(function () {
  function showCB88Popup() {
    var banners = [
      "https://plcl.me/images/x3TZP.jpg",
      "https://plcl.me/images/wUi2j.jpg"
    ].filter(Boolean);

    var currentSlide = 0;
    var generateURL = "https://click-lynk.com/AI-CLICKBET88";
    var adminURL = "https://click-lynk.com/LIVECHAT_CLICKBET88WL";

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
          clip-path:polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 calc(100% - 20px),0 20px);
          border:1px solid rgba(76,183,255,.65);
          box-shadow:
            0 0 0 1px rgba(255,255,255,.08),
            0 20px 58px rgba(0,0,0,.88);
          animation:cbPop .35s cubic-bezier(.18,.9,.28,1.12);
        }

        #cb88Popup *{cursor:default;}
        #cb88Popup a,#cb88Popup button{cursor:pointer;}

        #cb88Popup:before{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:5;
          box-shadow:inset 0 0 14px rgba(255,255,255,.10);
        }

        .cb88Corner{
          position:absolute;
          width:42px;
          height:42px;
          z-index:7;
          pointer-events:none;
          opacity:.88;
        }

        .cb88C1{top:9px;left:9px;border-top:3px solid #68dcff;border-left:3px solid #68dcff;}
        .cb88C2{top:9px;right:9px;border-top:3px solid #ffd65a;border-right:3px solid #ffd65a;}
        .cb88C3{bottom:9px;left:9px;border-bottom:3px solid #ffd65a;border-left:3px solid #ffd65a;}
        .cb88C4{bottom:9px;right:9px;border-bottom:3px solid #68dcff;border-right:3px solid #68dcff;}

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
          padding:11px;
          background:linear-gradient(180deg,rgba(3,8,20,.97),rgba(5,11,24,.99));
          border-top:1px solid rgba(104,220,255,.25);
          position:relative;
          z-index:6;
        }

        .cb88Btn{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          min-height:56px;
          border-radius:13px;
          text-decoration:none;
          color:#fff;
          font-weight:900;
          letter-spacing:.3px;
          text-align:left;
          position:relative;
          overflow:hidden;
          background:
            linear-gradient(135deg,rgba(12,31,65,.98),rgba(4,9,20,.99) 58%,rgba(20,15,6,.96));
          transition:.18s ease;
          cursor:pointer;
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
          font-size:26px;
          z-index:2;
          pointer-events:none;
        }

        .cb88Text{
          display:flex;
          flex-direction:column;
          line-height:1.08;
          z-index:2;
          pointer-events:none;
        }

        .cb88Main{font-size:15px;}
        .cb88Sub{
          font-size:12px;
          margin-top:4px;
          font-weight:800;
          color:#fff;
        }

        #cb88Generate{
          border:1px solid rgba(0,195,255,.95);
          box-shadow:inset 0 0 10px rgba(0,195,255,.12),0 3px 10px rgba(0,0,0,.36);
        }

        #cb88Generate .cb88Main{color:#7cddff;}

        #cb88Claim{
          border:1px solid rgba(255,194,55,.95);
          box-shadow:inset 0 0 10px rgba(255,194,55,.14),0 3px 10px rgba(0,0,0,.36);
          background:linear-gradient(135deg,rgba(75,45,3,.98),rgba(17,15,10,.99) 54%,rgba(7,25,52,.98));
        }

        #cb88Claim .cb88Main{color:#ffe27a;}

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
            grid-template-columns:1fr;
            gap:8px;
            padding:9px;
          }

          .cb88Btn{
            min-height:50px;
            border-radius:11px;
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
            bottom:132px;
          }

          .cb88Icon{font-size:24px}
          .cb88Main{font-size:14px}
          .cb88Sub{font-size:11px}

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

        <button id="cb88CloseX" type="button" aria-label="Tutup popup">×</button>

        <button id="cb88Prev" type="button" aria-label="Banner sebelumnya">‹</button>
        <img id="cb88PopupImg" src="${banners[currentSlide]}" alt="CLICKBET88">
        <button id="cb88Next" type="button" aria-label="Banner berikutnya">›</button>

        <div id="cb88Dots"></div>

        <div id="cb88Action">
          <a id="cb88Generate" class="cb88Btn" href="${generateURL}" target="_blank" rel="noopener">
            <span class="cb88Icon">🤖</span>
            <span class="cb88Text">
              <span class="cb88Main">GENERATE AI</span>
              <span class="cb88Sub">PREDICTION</span>
            </span>
          </a>

          <a id="cb88Claim" class="cb88Btn" href="${adminURL}" target="_blank" rel="noopener">
            <span class="cb88Icon">💬</span>
            <span class="cb88Text">
              <span class="cb88Main">HUBUNGI ADMIN</span>
              <span class="cb88Sub">LIVECHAT 24 JAM</span>
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
