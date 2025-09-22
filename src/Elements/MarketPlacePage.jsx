
import { HashRouter, Routes, Route, Link } from "react-router-dom";


import nftImage from "../NFT_status.png";
import Header from "./Header.jsx"


import React, { useMemo, useState } from "react";
import "./MarketPlacePage.css";
import "../App.css";
import "./SubElements/DarkVeil.css"
import DarkVeil from "./SubElements/DarkVeil.jsx";
/** Tiny sparkline component (inline SVG) */
function Sparkline({ data = [], width = 84, height = 28 }) {
  if (!data.length) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const norm = (v) =>
    height - ((v - min) / (max - min || 1)) * (height - 2) - 1;

  const step = width / (data.length - 1 || 1);
  const d = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step},${norm(v)}`)
    .join(" ");

  return (
    <svg className="spark" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** Mock data (replace with API later) */
const MOCK = [
        {
          name: "Moonbirds",
          verified: true,
          floor: 3.12,
          change1d: 12.3,
          offer: 3.05,
          vol1d: 412.5,
          sales1d: 152,
          owners: 5620,
          supply: 9999,
          spark: [12, 12.2, 12.5, 13, 13.5, 14, 13.8, 14.2, 14.5, 15],
        },
        {
          name: "DX Terminal",
          verified: true,
          floor: 0.0041,
          change1d: -15.7,
          offer: 0.0039,
          vol1d: 289.4,
          sales1d: 64500,
          owners: 6520,
          supply: 36000,
          spark: [7, 6.8, 6.7, 6.4, 6.2, 6.5, 6.1, 5.9, 6.0, 5.8],
        },
        {
          name: "Pudgy Penguins",
          verified: true,
          floor: 10.55,
          change1d: 3.2,
          offer: 10.4,
          vol1d: 210.3,
          sales1d: 25,
          owners: 4900,
          supply: 8888,
          spark: [9, 9.5, 9.7, 10, 10.2, 10.6, 10.5, 10.7, 10.8, 11],
        },
        {
          name: "CryptoPunks",
          verified: true,
          floor: 47.9,
          change1d: -0.5,
          offer: 47.6,
          vol1d: 165.2,
          sales1d: 5,
          owners: 3820,
          supply: 9994,
          spark: [48, 48.2, 48.1, 47.8, 47.9, 48.0, 47.7, 47.6, 47.9, 48.1],
        },
        {
          name: "Bored Ape Yacht Club",
          verified: true,
          floor: 9.85,
          change1d: 6.5,
          offer: 9.7,
          vol1d: 130.6,
          sales1d: 17,
          owners: 5480,
          supply: 10000,
          spark: [8.5, 8.7, 8.9, 9.2, 9.6, 9.4, 9.8, 10.1, 9.9, 10.0],
        },
        {
          name: "Meebits",
          verified: true,
          floor: 0.92,
          change1d: 18.1,
          offer: 0.9,
          vol1d: 48.7,
          sales1d: 51,
          owners: 6420,
          supply: 20000,
          spark: [0.7, 0.8, 0.75, 0.82, 0.85, 0.9, 0.95, 0.92, 0.91, 0.93],
        },
        {
          name: "FARWORLD Creatures",
          verified: true,
          floor: 0.0031,
          change1d: 28.4,
          offer: 0.0030,
          vol1d: 115.7,
          sales1d: 38500,
          owners: 3480,
          supply: 19000,
          spark: [0.001, 0.002, 0.0025, 0.003, 0.0028, 0.0032, 0.0031, 0.0034, 0.0035, 0.0036],
        },
        {
          name: "BasePaint",
          verified: true,
          floor: 0.0015,
          change1d: 11.2,
          offer: 0.0014,
          vol1d: 34.2,
          sales1d: 25600,
          owners: 35750,
          supply: 262500,
          spark: [0.001, 0.0012, 0.0011, 0.0013, 0.0014, 0.0016, 0.0015, 0.0017, 0.0016, 0.0018],
        },
        {
          name: "Mutant Ape Yacht Club",
          verified: true,
          floor: 1.34,
          change1d: 1.1,
          offer: 1.32,
          vol1d: 27.9,
          sales1d: 20,
          owners: 11780,
          supply: 19550,
          spark: [1.2, 1.25, 1.22, 1.3, 1.28, 1.31, 1.33, 1.34, 1.35, 1.36],
        },
        {
          name: "Gas Wars",
          verified: false,
          floor: 0.45,
          change1d: 5.7,
          offer: 0.44,
          vol1d: 24.6,
          sales1d: 72,
          owners: 326,
          supply: 500,
          spark: [0.3, 0.32, 0.35, 0.37, 0.4, 0.42, 0.43, 0.46, 0.44, 0.45],
    },
        
    {
        name: "CloneX",
        verified: true,
        floor: 6.25,
        change1d: -3.8,
        offer: 6.1,
        vol1d: 88.4,
        sales1d: 12,
        owners: 8400,
        supply: 20000,
        spark: [7, 6.8, 6.7, 6.5, 6.3, 6.2, 6.25, 6.3, 6.1, 6.2],
      },
      {
        name: "Azuki",
        verified: true,
        floor: 4.55,
        change1d: 9.2,
        offer: 4.5,
        vol1d: 120.6,
        sales1d: 30,
        owners: 9500,
        supply: 10000,
        spark: [4.0, 4.1, 4.3, 4.4, 4.5, 4.6, 4.55, 4.7, 4.6, 4.65],
      },
      {
        name: "Doodles",
        verified: true,
        floor: 2.85,
        change1d: 1.4,
        offer: 2.82,
        vol1d: 60.1,
        sales1d: 18,
        owners: 7500,
        supply: 10000,
        spark: [2.7, 2.75, 2.8, 2.9, 3.0, 2.95, 2.9, 2.87, 2.85, 2.88],
      },
      {
        name: "World of Women",
        verified: true,
        floor: 1.75,
        change1d: 14.6,
        offer: 1.72,
        vol1d: 44.3,
        sales1d: 26,
        owners: 5500,
        supply: 10000,
        spark: [1.2, 1.3, 1.35, 1.5, 1.55, 1.65, 1.7, 1.75, 1.78, 1.8],
      },
      {
        name: "Cool Cats",
        verified: true,
        floor: 0.92,
        change1d: -6.3,
        offer: 0.91,
        vol1d: 22.7,
        sales1d: 15,
        owners: 4800,
        supply: 9999,
        spark: [1.1, 1.05, 1.0, 0.98, 0.95, 0.93, 0.92, 0.91, 0.92, 0.93],
      },
      {
        name: "Goblins",
        verified: false,
        floor: 0.045,
        change1d: 33.1,
        offer: 0.044,
        vol1d: 12.3,
        sales1d: 520,
        owners: 3000,
        supply: 10000,
        spark: [0.02, 0.025, 0.03, 0.035, 0.038, 0.04, 0.043, 0.045, 0.047, 0.05],
      },
      {
        name: "Invisible Friends",
        verified: true,
        floor: 1.05,
        change1d: 4.7,
        offer: 1.02,
        vol1d: 38.5,
        sales1d: 21,
        owners: 4100,
        supply: 5000,
        spark: [0.9, 0.95, 1.0, 1.02, 1.05, 1.07, 1.06, 1.04, 1.05, 1.08],
      },
      {
        name: "OnChainMonkeys",
        verified: true,
        floor: 0.65,
        change1d: -2.2,
        offer: 0.63,
        vol1d: 15.6,
        sales1d: 19,
        owners: 3200,
        supply: 10000,
        spark: [0.7, 0.68, 0.66, 0.64, 0.65, 0.63, 0.64, 0.65, 0.66, 0.65],
      },
      {
        name: "CyberKongz",
        verified: true,
        floor: 2.15,
        change1d: 7.9,
        offer: 2.1,
        vol1d: 72.4,
        sales1d: 10,
        owners: 2800,
        supply: 4000,
        spark: [1.8, 1.9, 2.0, 2.05, 2.1, 2.2, 2.15, 2.18, 2.2, 2.25],
      },
      {
        name: "Deadfellaz",
        verified: true,
        floor: 0.48,
        change1d: -9.5,
        offer: 0.47,
        vol1d: 9.8,
        sales1d: 32,
        owners: 3100,
        supply: 10000,
        spark: [0.55, 0.53, 0.5, 0.48, 0.49, 0.47, 0.46, 0.48, 0.47, 0.46],
      },
      
      
  
];

const CATEGORIES = [
  "All",
  "Art",
  "Gaming",
  "Memberships",
  "Music",
  "PFPs",
  "Photography",
  "Domain Names",
  "Sports Collectibles",
  "Virtual Worlds",
];

const CHAINS = [
    "All",
    "Ethereum",
    "Polygon",
    "Arbitrum",
    "Base",
    "Optimism",
    "Avalanche",
    "Flow",
    "Solana",
    "Binance Smart Chain",
    "Fantom",
    "Harmony",
    "Tezos",
    "Near",
    "Tron",
    "WAX",
    "Klaytn",
    "StarkNet",
    "ZkSync",
    "Linea",
    "Celo",
    "Moonbeam",
    "Aptos",
    "Sui",
    "Cardano",
    "Polkadot",
    "Immutable X",
    "Cronos",
  ];
  

export default function MarketPlacePage() {
  const [tab, setTab] = useState("Top"); // "Top" | "Trending" | "Watchlist"
  const [category, setCategory] = useState("All");
  const [chain, setChain] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "floor", dir: "desc" });

  const data = useMemo(() => {
    let out = [...MOCK];
    // simple search
    if (search.trim()) {
      out = out.filter((r) =>
        r.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    // category & chain are placeholders (extend when you have real fields)
    // sort
    out.sort((a, b) => {
      const k = sort.key;
      const av = a[k] ?? -Infinity;
      const bv = b[k] ?? -Infinity;
      const res = av > bv ? 1 : av < bv ? -1 : 0;
      return sort.dir === "asc" ? res : -res;
    });
    return out;
  }, [search, category, chain, sort]);

  const toggleSort = (key) => {
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" }
    );
  };

    return (
        
    <div className="mp-page">
       <DarkVeil />
    
      {/* ✅ 顶部导航栏（和首页一致） */}
      <Header/>
            
      <div className="mp-body">
      {/* Left sidebar: filters */}
      <aside className="mp-sidebar">
        <div className="side-section">
          <div className="side-title">Category</div>
          <div className="chip-list">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`chip ${c === category ? "active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="side-section">
          <div className="side-title">Chains</div>
          <input
            className="side-search"
            placeholder="Search for chains"
            onChange={(e) => {}}
          />
          <div className="chip-list">
            {CHAINS.map((c) => (
              <button
                key={c}
                className={`chip ${c === chain ? "active" : ""}`}
                onClick={() => setChain(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="side-section">
          <label className="toggle">
            <input type="checkbox" onChange={() => {}} />
            <span className="tkn" /> Is Verified
          </label>
        </div>
      </aside>

      {/* Main content */}
      <main className="mp-main">
        {/* Tabs + search */}
        <div className="mp-topbar">
          <div className="tabs">
            {["Top", "Trending", "Watchlist"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`tab ${t === tab ? "active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mp-actions">
            <input
              className="mp-search"
              placeholder="Search collections"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="mp-table">
          <div className="thead">
            <div className="th name">Collection</div>
            <button className="th num" onClick={() => toggleSort("floor")}>
              Floor Price
              <span className={`carets ${sort.key === "floor" ? sort.dir : ""}`} />
            </button>
            <button className="th num" onClick={() => toggleSort("change1d")}>
              1D Change
              <span className={`carets ${sort.key === "change1d" ? sort.dir : ""}`} />
            </button>
            <div className="th num">Top Offer</div>
            <button className="th num" onClick={() => toggleSort("vol1d")}>
              1D Vol
              <span className={`carets ${sort.key === "vol1d" ? sort.dir : ""}`} />
            </button>
            <div className="th num">1D Sales</div>
            <div className="th num">Owners</div>
            <div className="th num">Supply</div>
            <div className="th spark-h">Last 7D</div>
          </div>

          {data.map((r, i) => (
            <div key={r.name} className="trow">
              <div className="td name">
                <span className="rank">{i + 1}</span>
                <div className="avt">{r.name.slice(0, 2)}</div>
                <div className="cname">
                  {r.name} {r.verified && <span className="veri">✔</span>}
                </div>
              </div>

              <div className="td num">{r.floor?.toLocaleString()} ETH</div>

              <div className={`td num ${r.change1d > 0 ? "up" : r.change1d < 0 ? "down" : ""}`}>
                {r.change1d > 0 ? "+" : ""}
                {r.change1d}%
              </div>

              <div className="td num">
                {r.offer ? `${r.offer} WETH` : "—"}
              </div>

              <div className="td num">{r.vol1d} ETH</div>
              <div className="td num">{r.sales1d?.toLocaleString()}</div>
              <div className="td num">{r.owners?.toLocaleString()}</div>
              <div className="td num">{r.supply?.toLocaleString()}</div>
              <div className="td spark-h">
                <Sparkline data={r.spark} />
              </div>
            </div>
          ))}
        </div>
                </main>
                </div>
    </div>
  );
}
