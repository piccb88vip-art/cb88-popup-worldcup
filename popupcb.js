(function () {
  var bannerURL = "https://plcl.me/images/xyW2C.png";
  var generateURL = "https://click-lynk.com/AI-CLICKBET88";
  var claimURL = "https://click-lynk.com/LIVECHAT_CLICKBET88WL";

  var path = window.location.pathname.toLowerCase();
  if (path !== "/" && path !== "/home" && path !== "/home/" && path !== "/index.html") return;
  if (document.getElementById("cb88PopupWrap")) return;

  var delayKey = "cb88_popup_worldcup_6h";
  var delayTime = 6 * 60 * 60 * 1000;
  var lastShow = Number(localStorage.getItem(delayKey) || 0);
  if (lastShow && Date.now() - lastShow < delayTime) return;

  var style = document.createElement("style");
  style.innerHTML = `
    #cb88PopupWrap{
      position:fixed;inset:0;z-index:2147483647;
      background:rgba(0,0,0,.70);
      backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
      display:flex;align-items:center;justify-content:center;
      padding:12px;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;
      animation:cb88Fade .25s ease;
    }
    #cb88Popup{
      position:relative;width:100%;max-width:590px;background:#030814;
      border-radius:16px;overflow:hidden;border:1px solid rgba(76,183,255,.95);
      box-shadow:0 0 26px rgba(0,153,255,.65),0 14px 40px rgba(0,0,0,.75);
      animation:cb88Pop .34s cubic-bezier(.18,.9,.28,1.15);
    }
    #cb88Popup:before{
      content:"";position:absolute;inset:0;pointer-events:none;z-index:3;
      box-shadow:inset 0 0 22px rgba(0,195,255,.35);
    }
    #cb88PopupImg{width:100%;display:block;height:auto}
    #cb88CloseX{
      position:absolute;top:8px;right:8px;width:30px;height:30px;border-radius:50%;
      border:1px solid rgba(255,255,255,.55);background:rgba(0,20,60,.78);
      color:#fff;font-size:22px;line-height:26px;cursor:pointer;z-index:6;
      box-shadow:0 0 12px rgba(0,153,255,.65);
    }
    #cb88Action{
      display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px;
      background:linear-gradient(180deg,#030814,#050b18);
    }
    .cb88Btn{
      display:flex;align-items:center;justify-content:center;gap:8px;
      min-height:56px;border-radius:13px;text-decoration:none;color:#fff;
      font-weight:900;letter-spacing:.3px;text-align:left;position:relative;overflow:hidden;
      background:linear-gradient(135deg,#050505,#111,#050505);
      transition:.18s ease;
    }
    .cb88Btn:before{
      content:"";position:absolute;top:-40%;left:-90%;width:55%;height:180%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);
      transform:skewX(-22deg);animation:cb88Shine 3.2s infinite;
    }
    .cb88Btn:after{
      content:"›";position:absolute;right:16px;top:50%;transform:translateY(-50%);
      font-size:34px;font-weight:900;opacity:.9;
    }
    .cb88Icon{font-size:26px;z-index:2}
    .cb88Text{display:flex;flex-direction:column;line-height:1.08;z-index:2}
    .cb88Main{font-size:15px}
    .cb88Sub{font-size:12px;margin-top:4px;font-weight:800;color:#fff}

    #cb88Generate{
      border:1px solid rgba(0,195,255,.95);
      box-shadow:inset 0 0 18px rgba(0,195,255,.18),0 0 16px rgba(0,153,255,.45);
    }
    #cb88Generate .cb88Main{color:#7cddff}

    #cb88Claim{
      border:1px solid rgba(255,194,55,.95);
      box-shadow:inset 0 0 18px rgba(255,194,55,.22),0 0 16px rgba(255,194,55,.42);
    }
    #cb88Claim .cb88Main{color:#ffe27a}

    .cb88Btn:hover{transform:translateY(-2px);filter:brightness(1.12)}
    @keyframes cb88Fade{from{opacity:0}to{opacity:1}}
    @keyframes cb88Pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    @keyframes cb88Shine{0%{left:-90%}45%,100%{left:130%}}

    @media(max-width:520px){
      #cb88Popup{max-width:94vw;border-radius:14px}
      #cb88Action{grid-template-columns:1fr;gap:8px;padding:9px}
      .cb88Btn{min-height:50px;border-radius:11px}
      .cb88Icon{font-size:24px}
      .cb88Main{font-size:14px}
      .cb88Sub{font-size:11px}
      #cb88CloseX{width:28px;height:28px;font-size:21px;line-height:24px}
    }
  `;
  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.id = "cb88PopupWrap";

  wrap.innerHTML = `
    <div id="cb88Popup">
      <button id="cb88CloseX" type="button">×</button>
      <img id="cb88PopupImg" src="${bannerURL}" alt="CLICKBET88 World Cup 2026">
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
  localStorage.setItem(delayKey, Date.now());

  function closePopup() {
    wrap.remove();
  }

  document.getElementById("cb88CloseX").onclick = closePopup;
  wrap.onclick = function (e) {
    if (e.target === wrap) closePopup();
  };
})();
