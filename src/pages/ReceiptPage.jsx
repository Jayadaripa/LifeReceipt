import { useRef } from "react";
import { Download, Receipt, Sparkles } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import PageShell from "../components/PageShell";
import data from "../data/lifeData.json";

import {
  findYearlyConnections,
  getConnectionsBySource,
} from "../utils/calculations";

import { number, money } from "../utils/formatters";

export default function ReceiptPage() {
  const receiptRef = useRef(null);

  const connections = findYearlyConnections(data.trend);

  const musicDaily = getConnectionsBySource(
    connections,
    "Music",
    "Daily Life"
  );

  const musicSpending = getConnectionsBySource(
    connections,
    "Music",
    "Spending"
  );

  const downloadPDF = async () => {
    if (!receiptRef.current) return;

    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        backgroundColor: "#080b11",
        useCORS: true,
      });

      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;

      const imageWidth = pageWidth;
      const imageHeight =
        (canvas.height * imageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(
        imageData,
        "PNG",
        0,
        position,
        imageWidth,
        imageHeight
      );

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;

        pdf.addPage();

        pdf.addImage(
          imageData,
          "PNG",
          0,
          position,
          imageWidth,
          imageHeight
        );

        heightLeft -= pageHeight;
      }

      pdf.save("LifeReceipt.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <PageShell title="Life Receipt">

      <div className="mx-auto max-w-4xl">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lime">
              Your data story
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white">
              Life Receipt
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              A summary of the patterns and connections found
              across your digital-life data.
            </p>
          </div>

          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-xs font-bold text-ink transition hover:brightness-110"
          >
            <Download size={15} />
            Download PDF
          </button>

        </div>


        {/* ==================================================
            RECEIPT
        ================================================== */}

        <div
          ref={receiptRef}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#080b11] p-6 text-white shadow-2xl md:p-10"
        >

          {/* Receipt header */}

          <div className="border-b border-dashed border-white/15 pb-7 text-center">

            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime/10 text-lime">
              <Receipt size={22} />
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
              Digital Life Receipt
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              2013 — 2024
            </h2>

            <p className="mt-2 text-xs text-slate-500">
              One dataset. Hundreds of moments. One story.
            </p>

          </div>


          {/* ==================================================
              DATA SUMMARY
          ================================================== */}

          <div className="border-b border-dashed border-white/15 py-7">

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
              Your Data
            </p>

            <div className="space-y-4">

              <ReceiptRow
                label="Music moments"
                value={number(data.music.events)}
              />

              <ReceiptRow
                label="Listening hours"
                value={`${number(data.music.hours)} hrs`}
              />

              <ReceiptRow
                label="Spending events"
                value={number(data.spending.transactions)}
              />

              <ReceiptRow
                label="Total transaction value"
                value={money(data.spending.total)}
              />

              <ReceiptRow
                label="Daily-life moments"
                value={number(data.daily.transactions)}
              />

            </div>

          </div>


          {/* ==================================================
              MUSIC
          ================================================== */}

          <div className="border-b border-dashed border-white/15 py-7">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
              Soundtrack
            </p>

            <div className="mt-4 flex items-end justify-between gap-4">

              <div>
                <p className="text-xs text-slate-500">
                  Top artist
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {data.music.topArtists[0].name}
                </p>
              </div>

              <p className="text-sm text-slate-400">
                {number(data.music.topArtists[0].count)} moments
              </p>

            </div>

          </div>


          {/* ==================================================
              CONNECTIONS
          ================================================== */}

          <div className="border-b border-dashed border-white/15 py-7">

            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-lime" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                Connections
              </p>
            </div>

            <div className="mt-5 space-y-4">

              {/* Music + Daily */}

              {musicDaily.length > 0 && (
                <ConnectionRow
                  title="Music × Daily Life"
                  years={`${musicDaily[0].year} — ${
                    musicDaily[musicDaily.length - 1].year
                  }`}
                />
              )}

              {/* Music + Spending */}

              {musicSpending.length > 0 && (
                <ConnectionRow
                  title="Music × Spending"
                  years={`${musicSpending[0].year} — ${
                    musicSpending[musicSpending.length - 1].year
                  }`}
                />
              )}

            </div>

          </div>


          {/* ==================================================
              STORY
          ================================================== */}

          <div className="border-b border-dashed border-white/15 py-7">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
              Your Story
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Your digital life is made up of multiple signals.
              Across the available data, different signals overlap
              during different periods, revealing connections
              between music, spending, and everyday activity.
            </p>

          </div>


          {/* ==================================================
              FOOTER
          ================================================== */}

          <div className="pt-7 text-center">

            <p className="text-xs font-semibold text-slate-300">
              YOUR DATA. YOUR STORY.
            </p>

            <p className="mt-2 text-[10px] leading-5 text-slate-600">
              Generated from the available LifeReceipt datasets.
              Connections represent yearly activity overlap and
              do not imply simultaneous events.
            </p>

            <div className="mx-auto mt-5 h-8 w-32 opacity-30">
              <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#fff_0,#fff_2px,transparent_2px,transparent_5px)]" />
            </div>

          </div>

        </div>

      </div>

    </PageShell>
  );
}


/* ==========================================================
   RECEIPT ROW
========================================================== */

function ReceiptRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-200">
        {value}
      </span>

    </div>
  );
}


/* ==========================================================
   CONNECTION ROW
========================================================== */

function ConnectionRow({ title, years }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">

      <div>
        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-500">
          Yearly activity overlap
        </p>
      </div>

      <span className="text-xs font-semibold text-lime">
        {years}
      </span>

    </div>
  );
}