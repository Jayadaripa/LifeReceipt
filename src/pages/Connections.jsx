import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Music2,
  CreditCard,
  House,
  GitBranch,
  Sparkles,
  Database,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

import data from "../data/lifeData.json";
import { number } from "../utils/formatters";

export default function Connections() {
  const totalMoments =
    data.music.events +
    data.spending.transactions +
    data.daily.transactions;

  const connections = [
    {
      id: 1,
      title: "Music × Spending",
      description:
        "Two different parts of your digital life can be explored together: listening activity and financial activity.",
      left: {
        icon: Music2,
        label: "Music",
        value: number(data.music.events),
        unit: "listening moments",
      },
      right: {
        icon: CreditCard,
        label: "Spending",
        value: number(data.spending.transactions),
        unit: "transactions",
      },
      explanation:
        "This connection compares activity from the music and transaction datasets.",
    },

    {
      id: 2,
      title: "Music × Everyday Life",
      description:
        "Your soundtrack is one of the largest signals in the dataset, while daily records provide another view of everyday activity.",
      left: {
        icon: Music2,
        label: "Music",
        value: number(data.music.events),
        unit: "listening moments",
      },
      right: {
        icon: House,
        label: "Everyday",
        value: number(data.daily.transactions),
        unit: "daily records",
      },
      explanation:
        "This connection brings listening activity and everyday records into the same story.",
    },

    {
      id: 3,
      title: "Spending × Everyday Life",
      description:
        "Financial activity and routine activity provide two different perspectives on the same period of life.",
      left: {
        icon: CreditCard,
        label: "Spending",
        value: number(data.spending.transactions),
        unit: "transactions",
      },
      right: {
        icon: House,
        label: "Everyday",
        value: number(data.daily.transactions),
        unit: "daily records",
      },
      explanation:
        "This connection compares the transaction dataset with the daily household dataset.",
    },
  ];

  return (
    <div className="min-h-screen bg-ink text-white grid-bg">

      {/* HEADER */}
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <Link
            to="/receipt"
            className="rounded-xl bg-lime px-4 py-2 text-xs font-bold text-ink transition hover:-translate-y-0.5"
          >
            View Receipt
          </Link>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        {/* HERO */}
        <section className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.05] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-lime">
            <GitBranch size={13} />
            Data Connections
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Connect the{" "}
            <span className="text-lime">Dots.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Your data is made of thousands of individual moments.
            LifeReceipt brings different signals together to reveal
            the bigger picture.
          </p>

        </section>

        {/* OVERVIEW */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">

          <Stat
            icon={Database}
            value={number(totalMoments)}
            label="Total moments"
          />

          <Stat
            icon={GitBranch}
            value="3"
            label="Data sources"
          />

          <Stat
            icon={Sparkles}
            value="3"
            label="Core connections"
          />

        </section>

        {/* HOW CONNECTIONS WORK */}
        <section className="mt-16">

          <div className="mb-7">
            <p className="text-xs uppercase tracking-[0.25em] text-lime">
              How it works
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              From separate records to connected signals
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <Step
              number="01"
              title="Collect"
              text="Music, transaction and everyday-life records are treated as separate signals."
            />

            <Step
              number="02"
              title="Compare"
              text="LifeReceipt compares the activity represented by each available dataset."
            />

            <Step
              number="03"
              title="Connect"
              text="Related signals are presented together so you can explore the larger story."
              active
            />

          </div>

        </section>

        {/* CONNECTION CARDS */}
        <section className="mt-20">

          <div className="flex items-end justify-between gap-4">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-lime">
                Explore relationships
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Your data connections
              </h2>
            </div>

            <span className="hidden text-xs text-slate-600 sm:block">
              3 available signals
            </span>

          </div>

          <div className="mt-8 grid gap-5">

            {connections.map((connection, index) => (
              <ConnectionCard
                key={connection.id}
                connection={connection}
                index={index}
              />
            ))}

          </div>

        </section>

        {/* IMPORTANT EXPLANATION */}
        <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

          <div className="flex gap-4">

            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime">
              <Info size={18} />
            </div>

            <div>

              <h3 className="font-semibold">
                How LifeReceipt defines a connection
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500">
                A connection in LifeReceipt represents a relationship
                between activity signals from different datasets. The
                current view compares the available music, spending and
                everyday-life records without making assumptions about
                what a person was actually doing.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-lime/10 bg-lime/[0.03] p-8 text-center sm:p-12">

          <Sparkles
            size={24}
            className="mx-auto text-lime"
          />

          <h2 className="mt-5 text-3xl font-semibold">
            Ready to explore the bigger story?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Move from individual connections to the complete story
            hidden inside your data.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              to="/timeline"
              className="group flex items-center gap-2 rounded-xl bg-lime px-5 py-3 text-sm font-bold text-ink"
            >
              Explore Your Story
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/explorer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04]"
            >
              Explore Raw Data
            </Link>

          </div>

        </section>

      </main>
    </div>
  );
}


/* ---------------- COMPONENTS ---------------- */

function Stat({ icon: Icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime">
        <Icon size={18} />
      </div>

      <p className="mt-5 text-2xl font-semibold">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-600">
        {label}
      </p>
    </motion.div>
  );
}


function Step({ number, title, text, active }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        active
          ? "border-lime/20 bg-lime/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center justify-between">

        <span
          className={`grid h-9 w-9 place-items-center rounded-lg text-xs font-bold ${
            active
              ? "bg-lime text-ink"
              : "bg-white/[0.05] text-lime"
          }`}
        >
          {number}
        </span>

      </div>

      <h3 className="mt-6 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}


function ConnectionCard({ connection, index }) {
  const LeftIcon = connection.left.icon;
  const RightIcon = connection.right.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-lime/20"
    >

      <div className="p-6 sm:p-8">

        {/* TITLE */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <div className="flex items-center gap-2">

              <GitBranch
                size={16}
                className="text-lime"
              />

              <h3 className="text-xl font-semibold">
                {connection.title}
              </h3>

            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              {connection.description}
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-wider text-slate-600">
            Connected signal
          </span>

        </div>

        {/* CONNECTION VISUAL */}
        <div className="mt-8 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">

          <Signal
            icon={LeftIcon}
            label={connection.left.label}
            value={connection.left.value}
            unit={connection.left.unit}
          />

          <div className="relative hidden md:block">

            <div className="h-px w-24 bg-gradient-to-r from-lime/10 via-lime/50 to-lime/10" />

            <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime/20 bg-[#0b1218]">
              <GitBranch
                size={15}
                className="text-lime"
              />
            </div>

          </div>

          <div className="flex justify-center md:hidden">
            <GitBranch
              size={20}
              className="rotate-90 text-lime"
            />
          </div>

          <Signal
            icon={RightIcon}
            label={connection.right.label}
            value={connection.right.value}
            unit={connection.right.unit}
          />

        </div>

        {/* WHY */}
        <div className="mt-7 border-t border-white/[0.06] pt-5">

          <div className="flex gap-3">

            <Info
              size={15}
              className="mt-0.5 shrink-0 text-slate-600"
            />

            <p className="text-xs leading-6 text-slate-600">
              {connection.explanation}
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}


function Signal({ icon: Icon, label, value, unit }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1218] p-5">

      <div className="flex items-center gap-3">

        <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime">
          <Icon size={18} />
        </div>

        <div>
          <p className="text-xs font-medium">
            {label}
          </p>

          <p className="mt-1 text-[10px] text-slate-600">
            {unit}
          </p>
        </div>

      </div>

      <p className="mt-5 text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
}