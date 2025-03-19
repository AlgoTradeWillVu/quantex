import { useState, useEffect } from "react";

const LANG = {
  vi: {
    heroTitle: "Biến kỹ năng giao dịch cá nhân của bạn thành một Quỹ đầu tư thực thụ",
    heroDesc: "Giải pháp Web3 giúp bạn thu hút khách hàng, vận hành hiệu quả và mở rộng toàn cầu.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("vi");
  const t = LANG[lang];

  useEffect(() => {
    const canvas = document.createElement("div");
    canvas.className = "fixed inset-0 -z-10 overflow-hidden pointer-events-none";
    canvas.innerHTML = `<div class='coin-bg'></div>`;
    document.body.appendChild(canvas);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen text-center p-10">
      <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
      <p className="text-lg opacity-80">{t.heroDesc}</p>
    </div>
  );
}
