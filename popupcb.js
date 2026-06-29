(function () {
  function showCB88Popup() {
    var banners = [
      "https://plcl.me/images/4ykja.png",
      "https://plcl.me/images/E77ud.png"
    ];

    var currentSlide = 0;
    var generateURL = "https://click-lynk.com/AI-CLICKBET88";
    var claimURL = "https://click-lynk.com/LIVECHAT_CLICKBET88WL";

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
          background:rgba(0,0,0,.45);
          display:flex;
          align-items:center;
          justify-content:center;
          padding:12px;
          box-sizing:border-box;
          font-family:Arial,Helvetica,sans-serif;
          overflow:hidden;
          cursor:pointer;
        }

        .cb88Particle{
          position:absolute;
          width:4px;
          height:4px;
          border-radius:50%;
          background:rgba(255,215,95,.95);
          box-shadow:0 0 12px rgba(255,215,95,.9);
          animation:cbParticle 7s linear infinite;
          opacity:.75;
          pointer-events:none;
        }

        .cb88Particle:nth-child(1){left:12%;top:100%;animation-delay:0s;}
        .cb88Particle:nth-child(2){left:22%;top:100%;animation-delay:1.2s;background:#62d9ff;box-shadow:0 0 12px #62d9ff;}
        .cb88Particle:nth-child(3){left:38%;top:100%;animation-delay:2.1s;}
        .cb88Particle:nth-child(4){left:55%;top:100%;animation-delay:.6s;background:#62d9ff;box-shadow:0 0 12px #62d9ff;}
        .cb88Particle:nth-child(5){left:72%;top:100%;animation-delay:1.8s;}
        .cb88Particle:nth-child(6){left:86%;top:100%;animation-delay:3s;background:#62d9ff;box-shadow:0 0 12px #62d9ff;}

        #cb88PopupWrap:before,
        #cb88PopupWrap:after{
          content:"";
          position:absolute;
          width:280px;
          height:280px;
          border-radius:50%;
          filter:blur(65px);
          opacity:.45;
          animation:cbOrb 6s ease-in-out infinite;
          pointer-events:none;
        }

        #cb88PopupWrap:before{
          background:#009dff;
          left:14%;
          top:13%;
        }

        #cb88PopupWrap:after{
          background:#ffbd2e;
          right:14%;
          bottom:13%;
          animation-delay:1.4s;
        }

        #cb88Popup{
          position:relative;
          width:100%;
          max-width:590px;
          background:#030814;
          overflow:hidden;
          z-index:2;
          cursor:default;
          pointer-events:auto;
          clip-path:polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 calc(100% - 20px),0 20px);
          border:1px solid rgba(76,183,255,.65);
          box-shadow:0 0 32px rgba(0,153,255,.72),0 0 20px rgba(255,190,40,.26),0 16px 46px rgba(0,0,0,.88);
          animation:cbPop .45s cubic-bezier(.18,.9,.28,1.18),cbFloat 4.6s ease-in-out infinite .45s;
        }

        #cb88Popup *{cursor:default;}
        #cb88Popup a,#cb88Popup button{cursor:pointer;}

        #cb88Popup:before{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:5;
          box-shadow:inset 0 0 26px rgba(0,195,255,.42),inset 0 0 8px rgba(255,210,75,.22);
          animation:cbBorderPulse 2.5s ease-in-out infinite;
        }

        #cb88Popup:after{
          content:"";
          position:absolute;
          inset:-140%;
          z-index:4;
          pointer-events:none;
          background:linear-gradient(120deg,transparent 43%,rgba(255,255,255,.25) 50%,transparent 57%);
          animation:cbScan 5s linear infinite;
        }

        .cb88Corner{
          position:absolute;
          width:42px;
          height:42px;
          z-index:7;
          pointer-events:none;
          filter:drop-shadow(0 0 8px rgba(0,195,255,.95));
          opacity:.95;
        }

        .cb88C1{top:9px;left:9px;border-top:3px solid #68dcff;border-left:3px solid #68dcff;animation:cbCornerBlue 2.2s ease-in-out infinite;}
        .cb88C2{top:9px;right:9px;border-top:3px solid #ffd65a;border-right:3px solid #ffd65a;animation:cbCornerGold 2.2s ease-in-out infinite .35s;}
        .cb88C3{bottom:9px;left:9px;border-bottom:3px solid #ffd65a;border-left:3px solid #ffd65a;animation:cbCornerGold 2.2s ease-in-out infinite .7s;}
        .cb88C4{bottom:9px;right:9px;border-bottom:3px solid #68dcff;border-right:3px solid #68dcff;animation:cbCornerBlue 2.2s ease-in-out infinite 1.05s;}

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
          box-shadow:0 0 14px rgba(0,153,255,.8);
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
          top:9px;
          right:9px;
          width:30px;
          height:30px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.55);
          background:rgba(0,20,60,.82);
          color:#fff;
          font-size:22px;
          line-height:26px;
          cursor:pointer;
          z-index:15;
          box-shadow:0 0 12px rgba(0,153,255,.75);
        }

        #cb88Action{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
          padding:10px;
          background:linear-gradient(180deg,#030814,#050b18);
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
          background:linear-gradient(135deg,rgba(8,18,38,.96),rgba(15,15,15,.98));
          transition:.18s ease;
          cursor:pointer;
        }

        .cb88Btn:before{
          content:"";
          position:absolute;
          top:-40%;
          left:-90%;
          width:55%;
          height:180%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.58),transparent);
          transform:skewX(-22deg);
          animation:cbShine 3.2s infinite;
          pointer-events:none;
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
          animation:cbIcon 2.8s ease-in-out infinite;
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
          box-shadow:inset 0 0 18px rgba(0,195,255,.18),0 0 16px rgba(0,153,255,.48);
          animation:cbBlue 2.6s ease-in-out infinite;
        }

        #cb88Generate .cb88Main{color:#7cddff;}

        #cb88Claim{
          border:1px solid rgba(255,194,55,.95);
          box-shadow:inset 0 0 18px rgba(255,194,55,.22),0 0 16px rgba(255,194,55,.45);
          animation:cbGold 2.6s ease-in-out infinite .4s;
        }

        #cb88Claim .cb88Main{color:#ffe27a;}

        .cb88Btn:hover{
          transform:translateY(-2px) scale(1.025);
          filter:brightness(1.14);
        }

        @keyframes cbPop{from{opacity:0;transform:scale(.88) translateY(18px)}to{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes cbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes cbShine{0%{left:-90%}45%,100%{left:130%}}
        @keyframes cbBorderPulse{0%,100%{opacity:.55}50%{opacity:1}}
        @keyframes cbScan{from{transform:translateX(-100%) rotate(18deg)}to{transform:translateX(100%) rotate(18deg)}}
        @keyframes cbOrb{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
        @keyframes cbIcon{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}

        @keyframes cbBlue{
          0%,100%{box-shadow:inset 0 0 18px rgba(0,195,255,.18),0 0 16px rgba(0,153,255,.48)}
          50%{box-shadow:inset 0 0 24px rgba(0,195,255,.32),0 0 24px rgba(0,195,255,.75)}
        }

        @keyframes cbGold{
          0%,100%{box-shadow:inset 0 0 18px rgba(255,194,55,.22),0 0 16px rgba(255,194,55,.45)}
          50%{box-shadow:inset 0 0 24px rgba(255,194,55,.35),0 0 24px rgba(255,194,55,.78)}
        }

        @keyframes cbParticle{
          0%{transform:translateY(0) scale(.8);opacity:0}
          12%{opacity:.85}
          100%{transform:translateY(-110vh) scale(1.4);opacity:0}
        }

        @keyframes cbCornerBlue{
          0%,100%{opacity:.45;filter:drop-shadow(0 0 4px rgba(0,195,255,.55))}
          50%{opacity:1;filter:drop-shadow(0 0 14px rgba(0,195,255,1))}
        }

        @keyframes cbCornerGold{
          0%,100%{opacity:.45;filter:drop-shadow(0 0 4px rgba(255,210,75,.55))}
          50%{opacity:1;filter:drop-shadow(0 0 14px rgba(255,210,75,1))}
        }

        @media(max-width:520px){
          #cb88Popup{
            max-width:94vw;
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
            width:28px;
            height:28px;
            font-size:21px;
            line-height:24px;
          }
        }
      `;

      document.head.appendChild(style);
    }

    var wrap = document.createElement("div");
    wrap.id = "cb88PopupWrap";

    wrap.innerHTML = `
      <span class="cb88Particle"></span>
      <span class="cb88Particle"></span>
      <span class="cb88Particle"></span>
      <span class="cb88Particle"></span>
      <span class="cb88Particle"></span>
      <span class="cb88Particle"></span>

      <div id="cb88Popup">
        <span class="cb88Corner cb88C1"></span>
        <span class="cb88Corner cb88C2"></span>
        <span class="cb88Corner cb88C3"></span>
        <span class="cb88Corner cb88C4"></span>

        <button id="cb88CloseX" type="button">×</button>

        <button id="cb88Prev" type="button">‹</button>
        <img id="cb88PopupImg" src="${banners[currentSlide]}" alt="CLICKBET88">
        <button id="cb88Next" type="button">›</button>

        <div id="cb88Dots"></div>

        <div id="cb88Action">
          <a id="cb88Generate" class="cb88Btn" href="${generateURL}" target="_blank" rel="noopener">
            <span class="cb88Icon">🤖</span>
            <span class="cb88Text">
              <span class="cb88Main">GENERATE AI</span>
              <span class="cb88Sub">PREDICTION</span>
            </span>
          </a>

          <a id="cb88Claim" class="cb88Btn" href="${claimURL}" target="_blank" rel="noopener">
            <span class="cb88Icon">🎁</span>
            <span class="cb88Text">
              <span class="cb88Main">CLAIM EVENT</span>
              <span class="cb88Sub">WORLD CUP BONUS</span>
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

    function closePopup() {
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
