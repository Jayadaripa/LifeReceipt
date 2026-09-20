import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, CalendarDays, Link2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageShell from "../components/PageShell";
import data from "../data/lifeData.json";
import MomentCard from "../components/MomentCard";

import {
  findYearlyConnections,
  getConnectionsBySource,
} from "../utils/calculations";

const filters = ["All", "Music", "Spending", "Daily Life"];

export default function Timeline() {
  const [filter, setFilter] = useState("All");

  // --------------------------------------------------
  // FILTER EVENTS
  // --------------------------------------------------

  const events = useMemo(() => {
    if (filter === "All") {
      return data.allEvents;
    }

    return data.allEvents.filter(
      (event) => event.type === filter
    );
  }, [filter]);

  // --------------------------------------------------
  // FIND YEARLY CONNECTIONS
  // --------------------------------------------------

  const connections = useMemo(() => {
    return findYearlyConnections(data.trend);
  }, []);

  const musicDailyConnections = useMemo(() => {
    return getConnectionsBySource(
      connections,
      "Music",
      "Daily Life"
    );
  }, [connections]);

  const musicSpendingConnections = useMemo(() => {
    return getConnectionsBySource(
      connections,
      "Music",
      "Spending"
    );
  }, [connections]);

  // --------------------------------------------------
  // GET YEAR RANGES
  // --------------------------------------------------

  const getYearRange = (items) => {
    if (!items.length) {
      return null;
    }

    const years = items
      .map((item) => item.year)
      .sort((a, b) => a - b);

    return {
      start: years[0],
      end: years[years.length - 1],
    };
  };

  const musicDailyRange = getYearRange(
    musicDailyConnections
  );

  const musicSpendingRange = getYearRange(
    musicSpendingConnections
  );

  // --------------------------------------------------
  // YEARLY CONNECTION CARD
  // --------------------------------------------------

  const StoryConnection = ({
    icon,
    eyebrow,
    title,
    description,
    range,
    connectionCount,
    accent = "lime",
  }) => {
    if (!range) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
      >
        {/* Glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl ${
            accent === "violet"
              ? "bg-violet-500/10"
              : "bg-lime/10"
          }`}
        />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  accent === "violet"
                    ? "bg-violet-400/10 text-violet-300"
                    : "bg-lime/10 text-lime"
                }`}
              >
                {icon}
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {eyebrow}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {title}
                </h3>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400">
              {connectionCount} overlapping year
              {connectionCount !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-3xl font-bold tracking-tight text-white">
                {range.start}
                {range.start !== range.end && (
                  <>
                    <span className="mx-2 text-slate-600">—</span>
                    {range.end}
                  </>
                )}
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CalendarDays size={14} />
              <span>Yearly activity overlap</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <PageShell title="Your Story">
      <div className="mx-auto max-w-6xl">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 md:px-10 md:py-14">

          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-lime/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
              <Sparkles size={13} />
              Your data story
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Your life,
              <br />
              <span className="text-lime">told through data.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Your data is made of thousands of separate moments.
              This story brings those signals together and shows
              where different parts of your digital life overlap.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#connections"
                className="inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-xs font-bold text-ink transition hover:brightness-110"
              >
                Explore your story
                <ArrowDown size={14} />
              </a>

              <Link
                to="/connections"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06]"
              >
                Open connections
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            STORY INTRO
        ================================================== */}

        <section
          id="connections"
          className="mt-10"
        >
          <div className="mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
              The story behind the data
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Two periods stand out
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Looking across the yearly activity in your datasets,
              different signals appear together during different
              periods.
            </p>
          </div>

          <div className="space-y-4">

            {/* MUSIC + DAILY LIFE */}

            <StoryConnection
              icon={<Link2 size={19} />}
              eyebrow="Connection 01"
              title="Music × Daily Life"
              description="Music and daily-life data both contain recorded activity across the 2015–2018 period. This represents a yearly overlap between two different signals in the dataset."
              range={musicDailyRange}
              connectionCount={musicDailyConnections.length}
            />

            {/* MUSIC + SPENDING */}

            <StoryConnection
              icon={<Link2 size={19} />}
              eyebrow="Connection 02"
              title="Music × Spending"
              description="Music and spending data both contain recorded activity across the later 2022–2024 period, creating another cross-dataset connection."
              range={musicSpendingRange}
              connectionCount={musicSpendingConnections.length}
              accent="violet"
            />

          </div>
        </section>

        {/* ==================================================
            STORY LINE
        ================================================== */}

        <section className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                <CalendarDays size={18} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  The journey
                </p>

                <h2 className="text-lg font-semibold text-white">
                  From one signal to another
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              {/* START */}

              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-xs font-semibold text-slate-500">
                  2013 — 2014
                </p>

                <h3 className="mt-2 text-base font-semibold text-white">
                  The beginning
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Your available data begins building the digital
                  record that follows.
                </p>
              </div>

              {/* FIRST CONNECTION */}

              <div className="rounded-2xl border border-lime/20 bg-lime/[0.03] p-5">
                <p className="text-xs font-semibold text-lime">
                  2015 — 2018
                </p>

                <h3 className="mt-2 text-base font-semibold text-white">
                  Music × Daily Life
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Two different datasets show recorded activity
                  during the same years.
                </p>
              </div>

              {/* SECOND CONNECTION */}

              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.03] p-5">
                <p className="text-xs font-semibold text-violet-300">
                  2022 — 2024
                </p>

                <h3 className="mt-2 text-base font-semibold text-white">
                  Music × Spending
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  A different cross-dataset overlap appears in
                  the later period.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            EVENT EXPLORER
        ================================================== */}

        <section className="mt-12">

          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
                Explore the moments
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                Your timeline
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Browse the individual records behind the story.
              </p>
            </div>

            {/* FILTERS */}

            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-xl px-3 py-2 text-xs transition ${
                    filter === item
                      ? "bg-lime font-bold text-ink"
                      : "border border-white/10 text-slate-400 hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

          </div>

          {/* RESULT COUNT */}

          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-300">
                {Math.min(events.length, 60)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-300">
                {events.length}
              </span>{" "}
              moments
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
              {filter === "All"
                ? "All signals"
                : filter}
            </p>
          </div>

          {/* TIMELINE */}

          <div className="relative">

            {/* CENTER LINE */}

            <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2" />

            <div className="space-y-5">

              {events.slice(0, 60).map((event, index) => (

                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.02, 0.2),
                  }}
                  className={`relative md:flex ${
                    index % 2
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* TIMELINE DOT */}

                  <div className="absolute left-[10px] top-5 h-3 w-3 rounded-full bg-lime ring-4 ring-lime/10 md:left-1/2 md:-translate-x-1/2" />

                  {/* EVENT CARD */}

                  <div className="ml-10 w-full md:ml-0 md:w-[46%]">
                    <MomentCard event={event} />
                  </div>

                </motion.div>

              ))}

            </div>
          </div>

          {/* EMPTY STATE */}

          {events.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
              <p className="text-sm font-semibold text-white">
                No moments found
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Try selecting another data source.
              </p>
            </div>
          )}

        </section>

        {/* ==================================================
            STORY CTA
        ================================================== */}

        <section className="mt-12 overflow-hidden rounded-3xl border border-lime/20 bg-lime/[0.03] p-7 md:p-10">

          <div className="max-w-2xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
              Keep exploring
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              The moments are only the beginning.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Explore the relationships between your datasets,
              discover more patterns, and see how disconnected
              records become a bigger story.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                to="/connections"
                className="inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-xs font-bold text-ink transition hover:brightness-110"
              >
                Explore connections
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/insights"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06]"
              >
                View insights
                <ArrowRight size={14} />
              </Link>

            </div>

          </div>

        </section>

      </div>
    </PageShell>
  );
}