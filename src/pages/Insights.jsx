import {
  PieChart,
  Music2,
  CreditCard,
  House,
  TrendingUp,
  Brain,
  Sparkles,
} from "lucide-react";

import PageShell from "../components/PageShell";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import SectionTitle from "../components/SectionTitle";

import data from "../data/lifeData.json";

import { getLifeBalance } from "../utils/calculations";
import { number, money } from "../utils/formatters";

import LifeDataAI from "../components/LifeDataAI";

export default function Insights() {
  const balance = getLifeBalance(data);

  return (
    <PageShell title="Insights">

      <div className="mx-auto max-w-7xl">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-7">

          <p className="text-xs text-slate-500">
            Patterns. Habits. Connections.
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-white">
            Insights
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Discover patterns across the different signals in
            your digital-life data and explore the connections
            hidden inside them.
          </p>

        </div>


        {/* ==================================================
            TOP STATS
        ================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          <StatCard
            icon={Music2}
            label="Your Soundtrack"
            value={number(data.music.events)}
            sub={`${number(data.music.artists)} artists • ${number(
              data.music.tracks
            )} tracks`}
          />

          <StatCard
            icon={CreditCard}
            label="Your Spending"
            value={number(data.spending.transactions)}
            sub={`${money(data.spending.total)} across transactions`}
            accent="mint"
          />

          <StatCard
            icon={House}
            label="Your Everyday"
            value={number(data.daily.transactions)}
            sub={`${number(data.daily.categories.length)} major categories`}
            accent="violet"
          />

        </div>


        {/* ==================================================
            CHART + LIFE BALANCE
        ================================================== */}

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.5fr_1fr]">

          <ChartCard
            title="How your life moves"
            data={data.trend}
            keys={["music", "spending", "daily"]}
            type="line"
          />

          <div className="glass rounded-2xl p-5">

            <SectionTitle title="Life Balance" />

            <div className="flex items-center gap-6 py-6">

              {/* DONUT */}

              <div
                className="grid h-36 w-36 shrink-0 place-items-center rounded-full"
                style={{
                  background: `conic-gradient(
                    #b7ff4a 0 ${balance[0].percent}%,
                    #35e0b3 ${balance[0].percent}% ${
                    balance[0].percent + balance[1].percent
                  }%,
                    #9b8cff ${
                      balance[0].percent + balance[1].percent
                    }% 100%
                  )`,
                }}
              >

                <div className="grid h-24 w-24 place-items-center rounded-full bg-panel text-center">

                  <PieChart
                    size={18}
                    className="text-slate-500"
                  />

                  <span className="text-[9px] text-slate-500">
                    moments
                  </span>

                </div>

              </div>


              {/* LEGEND */}

              <div className="w-full space-y-3">

                {balance.map((item, index) => (

                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-xs"
                  >

                    <span
                      className={`h-2 w-2 rounded-full ${
                        [
                          "bg-lime",
                          "bg-mint",
                          "bg-violet-400",
                        ][index]
                      }`}
                    />

                    <span className="text-slate-300">
                      {item.name}
                    </span>

                    <span className="ml-auto text-slate-500">
                      {item.percent}%
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            STRONGEST PATTERNS
        ================================================== */}

        <section className="mt-8">

          <SectionTitle
            eyebrow="What stands out"
            title="Your strongest patterns"
          />

          <div className="grid gap-4 md:grid-cols-3">

            <Pattern
              icon={TrendingUp}
              title="Most active music era"
              text={`${
                data.music.yearly.reduce(
                  (a, b) =>
                    a.events > b.events ? a : b
                ).year
              } has your highest listening count.`}
            />

            <Pattern
              icon={Music2}
              title="Signature artist"
              text={`${
                data.music.topArtists[0].name
              } appears ${
                number(data.music.topArtists[0].count)
              } times in your listening history.`}
            />

            <Pattern
              icon={CreditCard}
              title="Spending habit"
              text={`${
                data.spending.categories[0].name
              } is your most frequent transaction category.`}
            />

          </div>

        </section>


        {/* ==================================================
            LIFE DATA AI
        ================================================== */}

        <section className="mt-12">

          {/* SECTION INTRO */}

          <div className="mb-5 flex items-end justify-between gap-4">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime/10 text-lime">
                  <Brain size={14} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lime">
                  Explore with AI
                </span>

              </div>

              <h2 className="text-xl font-semibold text-white">
                Ask your life data
              </h2>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                Explore specific questions about the patterns
                and relationships found in your dataset.
              </p>

            </div>

            <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 sm:flex">

              <Sparkles
                size={12}
                className="text-lime"
              />

              <span className="text-[10px] text-slate-500">
                Data-grounded
              </span>

            </div>

          </div>


          {/* AI COMPONENT */}

          <LifeDataAI />

        </section>


        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">

          <div className="max-w-2xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
              Keep exploring
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Your data has more to tell.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore the connections between different signals
              and see how individual moments become part of a
              larger story.
            </p>

          </div>

        </section>

      </div>

    </PageShell>
  );
}


/* ==========================================================
   PATTERN CARD
========================================================== */

function Pattern({ icon: Icon, title, text }) {
  return (
    <div className="glass rounded-2xl p-5">

      <div className="grid h-9 w-9 place-items-center rounded-xl bg-lime/10 text-lime">
        <Icon size={16} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>

    </div>
  );
}