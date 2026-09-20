import {
  Music2,
  CreditCard,
  House,
  Trophy,
  ShoppingBag,
  Utensils,
  ArrowUpRight,
  GitBranch,
  Sparkles,
  BookOpen,
  Search,
  TrendingUp,
  ArrowRight,
  Download,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import data from "../data/lifeData.json";

import PageShell from "../components/PageShell";
import StatCard from "../components/StatCard";
import InsightCard from "../components/InsightCard";
import ChartCard from "../components/ChartCard";
import MomentCard from "../components/MomentCard";
import SectionTitle from "../components/SectionTitle";

import { number, money } from "../utils/formatters";

export default function Dashboard() {
  const recent = data.allEvents.slice(0, 5);

  const totalMoments =
    data.music.events +
    data.spending.transactions +
    data.daily.transactions;

  return (
    <PageShell title="Dashboard">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime">
              <Sparkles size={13} />
              Your data story
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Good morning, Jaya! 👋
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Here's what your data reveals at a glance.
            </p>
          </div>

          {/* HEADER ACTIONS */}

          <div className="flex flex-wrap items-center gap-3">

            <select className="rounded-xl border border-white/10 bg-panel px-3 py-3 text-xs text-slate-300 outline-none">
              <option>2013 – 2024</option>
            </select>

            <Link
              to="/receipt"
              className="group inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-3 text-xs font-bold text-ink shadow-lg shadow-lime/10 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <Download size={16} />

              Download Life Receipt

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </div>
        </div>


        {/* =====================================================
            TOP STATS
        ====================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          <StatCard
            icon={Music2}
            label="Listening"
            value={number(data.music.events)}
            sub={`≈ ${number(data.music.hours)} hours`}
          />

          <StatCard
            icon={CreditCard}
            label="Spending"
            value={number(data.spending.transactions)}
            sub={`${money(data.spending.total)} total`}
            accent="mint"
          />

          <StatCard
            icon={House}
            label="Daily Life"
            value={number(data.daily.transactions)}
            sub="household moments"
            accent="violet"
          />

        </div>


        {/* =====================================================
            BIGGEST DISCOVERY
        ====================================================== */}

        <section className="mt-8">

          <div className="relative overflow-hidden rounded-3xl border border-lime/15 bg-gradient-to-br from-lime/[0.07] via-white/[0.025] to-transparent p-6 sm:p-8">

            {/* Glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-lime/[0.06] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-lime">
                  <Sparkles size={12} />
                  Biggest discovery
                </div>

                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight">
                  Your life is made of more than isolated moments.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  LifeReceipt brings together your music, spending and
                  everyday activity so you can explore how different
                  parts of your digital life relate to each other.
                </p>

                <Link
                  to="/connections"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-3 text-xs font-bold text-ink transition hover:-translate-y-0.5"
                >
                  Discover your connections

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

              </div>


              {/* RIGHT VISUAL */}

              <div className="relative mx-auto h-52 w-full max-w-sm">

                <DataNode
                  icon={Music2}
                  label="Music"
                  value={number(data.music.events)}
                  position="left"
                />

                <DataNode
                  icon={CreditCard}
                  label="Spending"
                  value={number(data.spending.transactions)}
                  position="right"
                />

                <DataNode
                  icon={House}
                  label="Everyday"
                  value={number(data.daily.transactions)}
                  position="bottom"
                />


                {/* CENTER */}

                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime/25 bg-lime/[0.07] shadow-[0_0_45px_rgba(174,255,47,0.08)]"
                >
                  <GitBranch
                    size={25}
                    className="text-lime"
                  />
                </motion.div>


                {/* CONNECTION LINES */}

                <div className="absolute left-[27%] top-[47%] h-px w-[25%] rotate-[25deg] bg-gradient-to-r from-transparent via-lime/40 to-lime/10" />

                <div className="absolute right-[27%] top-[47%] h-px w-[25%] -rotate-[25deg] bg-gradient-to-l from-transparent via-lime/40 to-lime/10" />

                <div className="absolute bottom-[26%] left-1/2 h-[24%] w-px -translate-x-1/2 bg-gradient-to-b from-lime/40 to-transparent" />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            STRONGEST CONNECTION
        ====================================================== */}

        <section className="mt-8">

          <SectionTitle
            eyebrow="Connect the dots"
            title="Explore relationships in your data"
            action={
              <Link
                to="/connections"
                className="flex items-center gap-1 text-xs text-lime transition hover:text-white"
              >
                View all
                <ArrowUpRight size={13} />
              </Link>
            }
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">

            <ConnectionPreview
              firstIcon={Music2}
              firstName="Music"
              firstValue={number(data.music.events)}
              secondIcon={CreditCard}
              secondName="Spending"
              secondValue={number(data.spending.transactions)}
              title="Music × Spending"
              text="Explore the relationship between your listening activity and financial activity."
            />

            <ConnectionPreview
              firstIcon={Music2}
              firstName="Music"
              firstValue={number(data.music.events)}
              secondIcon={House}
              secondName="Everyday"
              secondValue={number(data.daily.transactions)}
              title="Music × Everyday Life"
              text="Compare your soundtrack with the everyday activity recorded in your data."
            />

          </div>

        </section>


        {/* =====================================================
            QUICK INSIGHTS
        ====================================================== */}

        <section className="mt-10">

          <SectionTitle
            eyebrow="What stands out?"
            title="Quick insights"
          />

          <div className="mt-4 grid gap-4 md:grid-cols-3">

            <InsightCard
              icon={Trophy}
              label="Top Artist"
              title={data.music.topArtists[0].name}
              value={`${number(
                data.music.topArtists[0].count
              )} listening moments`}
            />

            <InsightCard
              icon={ShoppingBag}
              label="Top Spending Category"
              title={data.spending.categories[0].name}
              value={`${number(
                data.spending.categories[0].count
              )} transactions`}
            />

            <InsightCard
              icon={Utensils}
              label="Most Common Habit"
              title={data.daily.categories[0].name}
              value={`${number(
                data.daily.categories[0].count
              )} transactions`}
            />

          </div>

        </section>


        {/* =====================================================
            CHART + ACTIVITY
        ====================================================== */}

        <div className="mt-10 grid gap-4 xl:grid-cols-[1.6fr_1fr]">

          <ChartCard
            title="Your activity over time"
            data={data.trend}
            keys={["music", "spending", "daily"]}
            type="line"
          />


          <div className="glass rounded-2xl p-4">

            <SectionTitle
              title="Recent moments"
              action={
                <Link
                  to="/timeline"
                  className="flex items-center gap-1 text-xs text-lime"
                >
                  View all
                  <ArrowUpRight size={13} />
                </Link>
              }
            />

            <div className="mt-3 space-y-2">

              {recent.map((event) => (
                <MomentCard
                  key={event.id}
                  event={event}
                />
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            YOUR STORY
        ====================================================== */}

        <section className="mt-10">

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div className="flex gap-4">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime">
                  <BookOpen size={20} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-lime">
                    Your story
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    {number(totalMoments)} moments.
                    One bigger picture.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Explore your activity as chapters instead of
                    isolated records.
                  </p>

                </div>

              </div>


              <Link
                to="/timeline"
                className="group flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-medium text-slate-300 transition hover:border-lime/20 hover:bg-white/[0.04] hover:text-white"
              >
                Explore Your Story

                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            DATA EXPLORER CTA
        ====================================================== */}

        <section className="mt-6 pb-8">

          <Link
            to="/explorer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.015] p-5 transition hover:border-lime/15 hover:bg-white/[0.03]"
          >

            <div className="flex items-center gap-4">

              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-slate-400 transition group-hover:text-lime">
                <Search size={17} />
              </div>

              <div>

                <p className="text-sm font-medium">
                  Want to investigate the data yourself?
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  Search, filter and explore individual records.
                </p>

              </div>

            </div>

            <ArrowRight
              size={16}
              className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-lime"
            />

          </Link>

        </section>

      </div>
    </PageShell>
  );
}


/* ============================================================
   DATA NODE
============================================================ */

function DataNode({
  icon: Icon,
  label,
  value,
  position,
}) {
  const positions = {
    left: "left-0 top-[27%]",
    right: "right-0 top-[27%]",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${positions[position]} z-10 rounded-xl border border-white/10 bg-[#0b1218] px-3 py-2.5 shadow-xl`}
    >

      <div className="flex items-center gap-2">

        <div className="grid h-8 w-8 place-items-center rounded-lg bg-lime/10 text-lime">
          <Icon size={14} />
        </div>

        <div>

          <p className="text-[10px] font-medium">
            {label}
          </p>

          <p className="text-[9px] text-slate-600">
            {value}
          </p>

        </div>

      </div>

    </motion.div>
  );
}


/* ============================================================
   CONNECTION PREVIEW
============================================================ */

function ConnectionPreview({
  firstIcon: FirstIcon,
  firstName,
  firstValue,
  secondIcon: SecondIcon,
  secondName,
  secondValue,
  title,
  text,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-lime/20"
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-xs font-medium">

          <GitBranch
            size={14}
            className="text-lime"
          />

          {title}

        </div>

        <Link
          to="/connections"
          className="text-slate-700 transition group-hover:text-lime"
        >
          <ArrowUpRight size={15} />
        </Link>

      </div>


      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">

        <MiniConnection
          icon={FirstIcon}
          name={firstName}
          value={firstValue}
        />

        <div className="grid h-8 w-8 place-items-center rounded-full border border-lime/20 bg-lime/[0.05]">
          <GitBranch
            size={13}
            className="text-lime"
          />
        </div>

        <MiniConnection
          icon={SecondIcon}
          name={secondName}
          value={secondValue}
        />

      </div>

      <p className="mt-5 text-xs leading-5 text-slate-600">
        {text}
      </p>

    </motion.div>
  );
}


/* ============================================================
   MINI CONNECTION
============================================================ */

function MiniConnection({
  icon: Icon,
  name,
  value,
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#0b1218] p-3">

      <Icon
        size={15}
        className="text-lime"
      />

      <p className="mt-2 text-xs font-medium">
        {name}
      </p>

      <p className="mt-1 text-[10px] text-slate-600">
        {value}
      </p>

    </div>
  );
}