import React, { useState } from 'react';
import { Trophy, History, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils/cn';

type Round = {
  team1: number;
  team2: number;
  bid: string;
};

const BID_VALUES = [4, 7, 8, 9, 10, 11, 12, 13];

function App() {
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [history, setHistory] = useState<Round[]>([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  
  // Hand/Pair counter (পাইড়)
  const [hands, setHands] = useState(0);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (team1Name.trim() && team2Name.trim()) {
      setIsStarted(true);
    }
  };

  const addScore = (team: 1 | 2, points: number, label: string) => {
    if (team === 1) {
      setScore1(prev => prev + points);
      setHistory(prev => [{ team1: points, team2: 0, bid: `${team1Name}: ${label}` }, ...prev]);
    } else {
      setScore2(prev => prev + points);
      setHistory(prev => [{ team1: 0, team2: points, bid: `${team2Name}: ${label}` }, ...prev]);
    }
  };

  const incrementHand = () => {
    setHands(prev => prev + 1);
    setHistory(prev => [{ team1: 0, team2: 0, bid: `পাইড় +1` }, ...prev]);
  };

  const decrementHand = () => {
    if (hands > 0) {
      setHands(prev => prev - 1);
      setHistory(prev => [{ team1: 0, team2: 0, bid: `পাইড় -1` }, ...prev]);
    }
  };

  const undoLast = () => {
    if (history.length === 0) return;
    const last = history[0];
    
    // Check if it was a hand adjustment or score
    if (last.bid.includes('পাইড়')) {
      const isPlus = last.bid.includes('+1');
      setHands(prev => Math.max(0, prev + (isPlus ? -1 : 1)));
    } else {
      setScore1(prev => prev - last.team1);
      setScore2(prev => prev - last.team2);
    }
    
    setHistory(prev => prev.slice(1));
  };

  const resetGame = () => {
    if (confirm('আপনি কি নিশ্চিত যে খেলাটি রিসেট করবেন?')) {
      setScore1(0);
      setScore2(0);
      setHands(0);
      setHistory([]);
      setIsStarted(false);
      setTeam1Name('');
      setTeam2Name('');
    }
  };

  const clearHistory = () => {
    if (confirm('পয়েন্ট রিল মুছে ফেলবেন? মোট স্কোর থাকবে।')) {
      setHistory([]);
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">তাশ খেলার পয়েন্ট কাউন্টার</h1>
            <p className="text-slate-400">খেলার শুরুতে দুই দলের নাম দিন</p>
          </div>
          
          <form onSubmit={handleStart} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <User size={16} /> প্রথম দলের নাম
              </label>
              <input
                required
                type="text"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="যেমন: কিং স্টার"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <User size={16} /> দ্বিতীয় দলের নাম
              </label>
              <input
                required
                type="text"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="যেমন: সুপার লিজেন্ডস"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-900/20"
            >
              START (শুরু করুন)
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Side (3/4) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top: Score Display */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-2xl border-l-8 border-blue-500 shadow-xl flex flex-col items-center relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-blue-500/20 px-3 py-1 rounded-bl-xl text-[10px] font-bold text-blue-300 uppercase tracking-tighter">
                মোট পয়েন্ট
              </div>
              <h2 className="text-xl font-bold text-blue-400 mb-2 truncate max-w-full uppercase">{team1Name}</h2>
              <div className="text-6xl font-black tabular-nums">{score1}</div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border-r-8 border-purple-500 shadow-xl flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-purple-500/20 px-3 py-1 rounded-br-xl text-[10px] font-bold text-purple-300 uppercase tracking-tighter">
                মোট পয়েন্ট
              </div>
              <h2 className="text-xl font-bold text-purple-400 mb-2 truncate max-w-full uppercase">{team2Name}</h2>
              <div className="text-6xl font-black tabular-nums">{score2}</div>
            </div>
          </div>

          {/* Single Central Pair Box */}
          <div className="flex justify-center">
            <div className="bg-slate-900 px-10 py-6 rounded-3xl border border-slate-800 flex flex-col items-center shadow-2xl">
              <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">কত পাইড় হইছে</span>
              <button 
                onContextMenu={(e) => { e.preventDefault(); decrementHand(); }}
                onClick={incrementHand} 
                className="h-20 w-40 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-5xl font-black shadow-lg shadow-emerald-900/30 active:scale-95 transition-all"
              >
                {hands}
              </button>
              <span className="text-[10px] text-slate-600 mt-4 font-bold uppercase italic">Click to +1 | Right click to -1</span>
            </div>
          </div>

          {/* Point Buttons */}
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-4 bg-slate-900 p-6 rounded-3xl border border-slate-800">
               <h4 className="text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{team1Name} পয়েন্ট দিন</h4>
               <div className="grid grid-cols-4 gap-3">
                 {BID_VALUES.map(val => (
                   <div key={`t1-btn-${val}`} className="flex flex-col gap-2">
                     <button 
                        onClick={() => addScore(1, val, `${val}+`)}
                        className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-lg shadow-green-900/10"
                      >
                        {val}+
                     </button>
                     <button 
                        onClick={() => addScore(1, -val, `${val}-`)}
                        className="bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-lg shadow-red-900/10"
                      >
                        {val}-
                     </button>
                   </div>
                 ))}
               </div>
             </div>

             <div className="space-y-4 bg-slate-900 p-6 rounded-3xl border border-slate-800">
               <h4 className="text-center text-[10px] font-black text-purple-500 uppercase tracking-[0.2em]">{team2Name} পয়েন্ট দিন</h4>
               <div className="grid grid-cols-4 gap-3">
                 {BID_VALUES.map(val => (
                   <div key={`t2-btn-${val}`} className="flex flex-col gap-2">
                     <button 
                        onClick={() => addScore(2, val, `${val}+`)}
                        className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-lg shadow-green-900/10"
                      >
                        {val}+
                     </button>
                     <button 
                        onClick={() => addScore(2, -val, `${val}-`)}
                        className="bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-lg shadow-red-900/10"
                      >
                        {val}-
                     </button>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Footer Controls */}
          <div className="flex justify-between items-center py-4 px-2">
            <div className="flex gap-3">
              <button onClick={undoLast} disabled={history.length === 0} className="text-xs font-bold text-slate-500 hover:text-white disabled:opacity-20 uppercase">Undo Last</button>
              <button onClick={resetGame} className="text-xs font-bold text-slate-500 hover:text-red-400 uppercase">New Game</button>
            </div>
            <div className="text-[10px] text-slate-600 font-mono tracking-tighter">CARD GAME POINT COUNTER PRO</div>
          </div>
        </div>

        {/* Reel Sidebar (1/4) */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 flex flex-col h-[600px] lg:h-auto overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
              <History size={16} className="text-emerald-400" /> পয়েন্ট রিল
            </h3>
            <button onClick={clearHistory} className="text-[10px] text-slate-500 hover:text-white uppercase font-bold">Clear</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {history.length === 0 && (
              <div className="text-center py-20 text-slate-600 text-xs italic uppercase tracking-widest">Empty Reel</div>
            )}
            <AnimatePresence initial={false}>
              {history.map((round, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={history.length - idx}
                  className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                    <span className="text-[9px] font-black text-slate-600 uppercase">রাউন্ড {history.length - idx}</span>
                    <Trophy size={10} className={cn(round.team1 > round.team2 ? "text-blue-500" : round.team2 > round.team1 ? "text-purple-500" : "opacity-0")} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-blue-500 uppercase font-bold truncate max-w-[60px]">{team1Name}</span>
                      <span className={cn("text-lg font-black tabular-nums", round.team1 > 0 ? "text-green-400" : round.team1 < 0 ? "text-red-400" : "text-slate-500")}>
                        {round.team1 > 0 ? `+${round.team1}` : round.team1}
                      </span>
                    </div>
                    <div className="w-px h-6 bg-slate-800" />
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] text-purple-500 uppercase font-bold truncate max-w-[60px]">{team2Name}</span>
                      <span className={cn("text-lg font-black tabular-nums", round.team2 > 0 ? "text-green-400" : round.team2 < 0 ? "text-red-400" : "text-slate-500")}>
                        {round.team2 > 0 ? `+${round.team2}` : round.team2}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
