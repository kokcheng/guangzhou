import React from 'react';
import { X, Sparkles, AlertCircle, CreditCard, Plane, DollarSign, CheckSquare, Smartphone, ShieldCheck } from 'lucide-react';

export default function TipsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 text-slate-100 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-teal-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-500/20 shrink-0">
            💡
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">Guangzhou Travel Tips & Booking Guide</h2>
            <p className="text-xs text-slate-400">Essential preparations for your Jan 13 – Jan 17 trip</p>
          </div>
        </div>

        <div className="space-y-5 text-xs sm:text-sm">

          {/* Critical WeChat Booking Requirements */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-center gap-2 font-bold text-amber-400 mb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Mandatory Ticket Bookings (WeChat Mini-Programs)</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Guangdong Museum (Day 3):</strong> Entrance is <span className="text-emerald-400 font-bold">FREE</span>, but WeChat mini-program booking is strictly required <span className="underline decoration-amber-400">3 to 7 days ahead</span>. Slots fill up extremely quickly!
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Chen Clan Academy (Day 2):</strong> <span className="text-amber-300 font-bold">10 RMB</span> per ticket. Book via official WeChat account ahead of time to avoid long ticket queues.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Pearl River Night Cruise (Day 2):</strong> Tickets cost <span className="text-amber-300 font-bold">80–150 RMB</span>. Reserve online or at Tianzi Pier earlier in the day.
                </div>
              </li>
            </ul>
          </div>

          {/* Payment & Connectivity */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-teal-400 mb-2">
              <CreditCard className="w-4 h-4 shrink-0" />
              <span>Payments & Mobile Apps in Guangzhou</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <Smartphone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Alipay & WeChat Pay:</strong> Add your Visa/Mastercard to Alipay or WeChat Pay before departure. Cash is rarely used.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Metro QR Code:</strong> In Alipay, activate "Guangzhou Metro Transport Code" (广州地铁乘车码) to scan directly at turnstiles.
                </div>
              </li>
            </ul>
          </div>

          {/* Airport Departure Transit Guide */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-blue-400 mb-2">
              <Plane className="w-4 h-4 shrink-0" />
              <span>Day 5 Airport Route (CZ351 Flight)</span>
            </div>
            <p className="text-slate-300 mb-2">
              Leave Hotel Kspace by <strong className="text-white">15:30</strong> for your 18:50 flight:
            </p>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
              Hotel Kspace ➔ Walk to Beijing Rd Metro ➔ Line 6 to Gongyuanqian ➔ Line 3 North to Airport North Station (Terminal 2) (~55 min, ~8 RMB)
            </div>
          </div>

          {/* Estimated Ticket & Sightseeing Budget */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-emerald-400 mb-2">
              <DollarSign className="w-4 h-4 shrink-0" />
              <span>Estimated Entry Ticket Costs</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span>Chen Clan Academy</span>
                <strong className="text-emerald-400">10 RMB</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span>Guangdong Museum</span>
                <strong className="text-emerald-400">FREE</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span>Pearl River Cruise</span>
                <strong className="text-amber-400">80–150 RMB</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span>Canton Tower (Deck)</span>
                <strong className="text-amber-400">~150 RMB</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg transition active:scale-95"
          >
            Got it, ready to explore!
          </button>
        </div>

      </div>
    </div>
  );
}
