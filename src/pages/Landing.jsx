import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music2,
  CreditCard,
  House,
  Sparkles,
  CalendarDays,
  Database,
  GitBranch,
  BookOpen,
  Search,
  TrendingUp,
  ChevronDown,
  MousePointer2,
  Layers3,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import data from "../data/lifeData.json";
import { number } from "../utils/formatters";
import Logo from "../components/Logo";

export default function Landing() {
  const totalMoments =
    data.music.events +
    data.spending.transactions +
    data.daily.transactions;

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white grid-bg">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#070b0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 text-xs text-slate-400 md:flex">
            <a
              href="#story"
              className="transition hover:text-lime"
            >
              Story
            </a>

            <a
              href="#features"
              className="transition hover:text-lime"
            >
              Features
            </a>

            <Link
              to="/dashboard"
              className="transition hover:text-lime"
            >
              Dashboard
            </Link>

            <Link
              to="/explorer"
              className="transition hover:text-lime"
            >
              Data Explorer
            </Link>
          </nav>

          <Link
            to="/dashboard"
            className="group flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-xs font-bold text-ink shadow-[0_0_25px_rgba(174,255,47,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(174,255,47,0.25)]"
          >
            Get Started
            <ArrowRight
              size={14}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[450px] w-[450px] rounded-full bg-lime/[0.04] blur-[120px]" />

          <div className="relative z-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-lime"
            >
              <Sparkles size={13} />
              Your personal data story
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            >
              Your Life Has a{" "}
              <span className="relative text-lime">
                Receipt.
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-lime/40" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-7 max-w-xl text-lg leading-8 text-slate-400"
            >
              Every song. Every purchase. Every ordinary moment.
              Turn years of personal data into one beautiful story
              you can actually explore.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/dashboard"
                className="group flex items-center gap-3 rounded-xl bg-lime px-5 py-3.5 text-sm font-bold text-ink shadow-[0_0_30px_rgba(174,255,47,0.12)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(174,255,47,0.25)]"
              >
                Discover My Story
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/explorer"
                className="group flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:border-lime/30 hover:bg-white/[0.04] hover:text-white"
              >
                <Search size={16} />
                Explore the data
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur"
            >
              <MiniStat
                icon={CalendarDays}
                value="11+"
                label="Years of data"
              />

              <MiniStat
                icon={Music2}
                value={number(data.music.events)}
                label="Listening moments"
              />

              <MiniStat
                icon={Database}
                value={number(totalMoments)}
                label="Total moments"
              />
            </motion.div>

            {/* Scroll hint */}
            <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
              <MousePointer2 size={13} />
              Scroll to uncover the story
              <ChevronDown size={13} className="animate-bounce" />
            </div>
          </div>

          {/* RECEIPT SIDE */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute inset-10 rounded-full bg-lime/[0.08] blur-[80px]" />

            {/* Floating music card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-1 top-10 z-20 hidden rounded-2xl border border-white/10 bg-[#0b1219] p-4 shadow-2xl sm:block"
            >
              <Music2 size={20} className="text-lime" />
              <p className="mt-2 text-[10px] text-slate-500">
                Soundtrack
              </p>
              <p className="mt-1 text-xs font-semibold">
                {number(data.music.events)}
              </p>
            </motion.div>

            {/* Floating connection card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 bottom-24 z-20 hidden rounded-2xl border border-lime/20 bg-[#0b1219] p-4 shadow-2xl sm:block"
            >
              <GitBranch size={20} className="text-lime" />
              <p className="mt-2 text-[10px] text-slate-500">
                Connection
              </p>
              <p className="mt-1 text-xs font-semibold">
                Music × Spending
              </p>
            </motion.div>

            {/* RECEIPT */}
            <motion.div
              initial={{ rotate: 4, y: 30, opacity: 0 }}
              animate={{ rotate: -3, y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              whileHover={{
                rotate: 0,
                scale: 1.025,
              }}
              className="receipt-paper relative mx-auto w-72 cursor-pointer px-7 py-9 shadow-2xl transition sm:w-80"
            >
              <p className="text-center text-2xl font-black tracking-tight">
                LIFE RECEIPT
              </p>

              <p className="mt-1 text-center text-[10px]">
                Your life, in numbers.
              </p>

              <div className="my-6 border-y border-black/15 py-2 text-center text-[10px]">
                2013 → 2024
              </div>

              {/* MUSIC */}
              <ReceiptRow
                icon="♫"
                title="MUSIC"
                label="Listening moments"
                value={number(data.music.events)}
              />

              <div className="my-5 border-t border-dashed border-black/20" />

              {/* SPENDING */}
              <ReceiptRow
                icon="▣"
                title="SPENDING"
                label="Transactions"
                value={number(data.spending.transactions)}
              />

              <div className="my-5 border-t border-dashed border-black/20" />

              {/* DAILY */}
              <ReceiptRow
                icon="⌂"
                title="DAILY LIFE"
                label="Daily moments"
                value={number(data.daily.transactions)}
              />

              <div className="mt-7 border-t-2 border-dashed border-black/20 pt-4 text-center">
                <p className="text-[9px]">TOTAL MOMENTS</p>

                <p className="text-2xl font-black">
                  {number(totalMoments)}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-1 text-[8px] text-black/40">
                <Sparkles size={10} />
                DATA → STORY
                <Sparkles size={10} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* DATA JOURNEY */}
        <section
          id="story"
          className="border-y border-white/[0.06] bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-lime">
                The LifeReceipt Method
              </p>

              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                From raw data to your story.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                LifeReceipt doesn't just show your data.
                It finds patterns, connects moments and turns
                them into something you can explore.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-4">

              <ProcessCard
                number="01"
                icon={Database}
                title="Collect"
                text="Bring together the available signals from your digital life."
              />

              <ProcessCard
                number="02"
                icon={TrendingUp}
                title="Discover"
                text="Find patterns and activity that stand out across time."
              />

              <ProcessCard
                number="03"
                icon={GitBranch}
                title="Connect"
                text="Link moments across different datasets and dates."
                featured
              />

              <ProcessCard
                number="04"
                icon={BookOpen}
                title="Tell the story"
                text="Turn those discoveries into chapters you can explore."
              />

            </div>
          </div>
        </section>

        {/* DATASETS */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-lime">
                Three datasets. One story.
              </p>

              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Because a life is more than one metric.
              </h2>
            </div>

            <Link
              to="/explorer"
              className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-lime"
            >
              Explore all data
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <Feature
              icon={Music2}
              title="Your Soundtrack"
              value={number(data.music.events)}
              label="listening moments"
              text={`${number(data.music.artists)} artists and ${number(
                data.music.tracks
              )} tracks across ${number(data.music.hours)}+ listening hours.`}
              color="lime"
            />

            <Feature
              icon={CreditCard}
              title="Your Spending"
              value={number(data.spending.transactions)}
              label="transactions"
              text="Financial activity becomes another signal in the larger story."
              color="mint"
            />

            <Feature
              icon={House}
              title="Your Everyday"
              value={number(data.daily.transactions)}
              label="daily moments"
              text="Routine activity gives the story another layer beyond music and spending."
              color="blue"
            />

          </div>
        </section>

        {/* CONNECTION PREVIEW */}
        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-lime/10 bg-[#0a1116] p-8 sm:p-12">

            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-lime/[0.05] blur-[80px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-lime">
                  <Zap size={12} />
                  Core discovery
                </div>

                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  What happens when your moments{" "}
                  <span className="text-lime">
                    connect?
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
                  A song is just a song. A transaction is just a
                  transaction. But when activity overlaps across
                  datasets, a bigger pattern can appear.
                </p>

                <Link
                  to="/connections"
                  className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-lime px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-1"
                >
                  Connect the Dots
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Connection visual */}
              <div className="relative mx-auto h-[270px] w-full max-w-md">

                <ConnectionNode
                  icon={Music2}
                  title="Music"
                  position="left"
                />

                <ConnectionNode
                  icon={CreditCard}
                  title="Spending"
                  position="right"
                />

                <ConnectionNode
                  icon={House}
                  title="Everyday"
                  position="bottom"
                />

                <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime/30 bg-lime/[0.08] shadow-[0_0_50px_rgba(174,255,47,0.08)]">
                  <GitBranch
                    size={28}
                    className="text-lime"
                  />
                </div>

                {/* connecting lines */}
                <div className="absolute left-[30%] top-[48%] h-px w-[22%] rotate-[25deg] bg-gradient-to-r from-lime/10 to-lime/50" />

                <div className="absolute right-[30%] top-[48%] h-px w-[22%] -rotate-[25deg] bg-gradient-to-l from-lime/10 to-lime/50" />

                <div className="absolute bottom-[28%] left-1/2 h-[24%] w-px -translate-x-1/2 bg-gradient-to-b from-lime/50 to-lime/10" />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center">

            <Sparkles
              size={25}
              className="mx-auto text-lime"
            />

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your data has a story.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Stop looking at isolated numbers.
              Start discovering the connections between them.
            </p>

            <Link
              to="/dashboard"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-lime px-6 py-3.5 text-sm font-bold text-ink shadow-[0_0_35px_rgba(174,255,47,0.12)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(174,255,47,0.25)]"
            >
              Generate My Life Receipt
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function MiniStat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-4 sm:px-4">
      <Icon size={15} className="shrink-0 text-lime" />

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">
          {value}
        </p>

        <p className="truncate text-[9px] text-slate-600">
          {label}
        </p>
      </div>
    </div>
  );
}

function ReceiptRow({ icon, title, label, value }) {
  return (
    <div className="group cursor-default">
      <p className="text-[10px] font-bold">
        {icon} {title}
      </p>

      <p className="mt-2 text-[10px]">
        {label}
      </p>

      <p className="font-bold transition group-hover:text-lime">
        {value}
      </p>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  value,
  label,
  text,
  color = "lime",
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/15 hover:bg-white/[0.04]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-lime/[0.03] blur-3xl transition group-hover:bg-lime/[0.07]" />

      <div className="relative">

        <div className="flex items-center justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime/10 text-lime">
            <Icon size={19} />
          </div>

          <ArrowRight
            size={16}
            className="text-slate-700 transition group-hover:translate-x-1 group-hover:text-lime"
          />
        </div>

        <h3 className="mt-6 font-semibold">
          {title}
        </h3>

        <div className="mt-4 flex items-end gap-2">
          <p className="text-2xl font-semibold">
            {value}
          </p>

          <p className="mb-1 text-[10px] text-slate-600">
            {label}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>
    </motion.div>
  );
}

function ProcessCard({
  number,
  icon: Icon,
  title,
  text,
  featured = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-2xl border p-6 transition ${
        featured
          ? "border-lime/25 bg-lime/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center justify-between">

        <div
          className={`grid h-10 w-10 place-items-center rounded-xl ${
            featured
              ? "bg-lime text-ink"
              : "bg-white/[0.05] text-lime"
          }`}
        >
          <Icon size={17} />
        </div>

        <span className="text-[10px] font-mono text-slate-700">
          {number}
        </span>
      </div>

      <h3 className="mt-6 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </motion.div>
  );
}

function ConnectionNode({ icon: Icon, title, position }) {
  const positionClasses = {
    left: "left-[4%] top-[35%]",
    right: "right-[4%] top-[35%]",
    bottom: "bottom-[2%] left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${positionClasses[position]} flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d151b] px-4 py-3 shadow-xl`}
    >
      <Icon size={15} className="text-lime" />
      <span className="text-xs font-medium">
        {title}
      </span>
    </motion.div>
  );
}