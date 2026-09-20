import { useMemo, useState } from "react";
import {
  Brain,
  ChevronRight,
  Sparkles,
  Music2,
  Link2,
  CalendarDays,
  BarChart3,
  Receipt,
  User,
  Database,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

import data from "../data/lifeData.json";

import {
  findYearlyConnections,
  getConnectionsBySource,
} from "../utils/calculations";

const questions = [
  {
    id: "patterns",
    text: "What are the biggest patterns?",
    icon: BarChart3,
  },
  {
    id: "music-spending",
    text: "What connects music and spending?",
    icon: Link2,
  },
  {
    id: "music-daily",
    text: "What connects music and daily life?",
    icon: Link2,
  },
  {
    id: "multiple-signals",
    text: "Which years have multiple signals?",
    icon: CalendarDays,
  },
  {
    id: "music",
    text: "What is the top music insight?",
    icon: Music2,
  },
  {
    id: "story",
    text: "Summarize this digital journey.",
    icon: Receipt,
  },
];

export default function LifeDataAI() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isThinking, setIsThinking] = useState(false);

  const connections = useMemo(() => {
    return findYearlyConnections(data.trend);
  }, []);

  const musicSpending = useMemo(() => {
    return getConnectionsBySource(
      connections,
      "Music",
      "Spending"
    );
  }, [connections]);

  const musicDaily = useMemo(() => {
    return getConnectionsBySource(
      connections,
      "Music",
      "Daily Life"
    );
  }, [connections]);

  const multipleSignalYears = useMemo(() => {
    return connections.map((connection) => connection.year);
  }, [connections]);

  const handleQuestion = (questionId) => {
    setSelectedQuestion(null);
    setIsThinking(true);

    setTimeout(() => {
      setSelectedQuestion(questionId);
      setIsThinking(false);
    }, 650);
  };

  const getAnswer = (questionId) => {
    switch (questionId) {
      case "patterns":
        return {
          title: "Your biggest patterns",
          answer: (
            <>
              Your dataset contains three major signals:
              <strong> Music, Spending, and Daily Life.</strong>{" "}
              Looking across the yearly data, two cross-dataset
              patterns stand out.
            </>
          ),
          evidence: [
            "Music + Daily Life overlap during 2015–2018.",
            "Music + Spending overlap during 2022–2024.",
            `${data.music.events.toLocaleString()} music records are represented in the dataset.`,
            `${data.spending.transactions.toLocaleString()} spending records are represented.`,
          ],
        };

      case "music-spending":
        return {
          title: "Music × Spending",
          answer: (
            <>
              Music and spending activity appear together across{" "}
              <strong>
                {musicSpending.length} yearly data point
                {musicSpending.length !== 1 ? "s" : ""}
              </strong>
              .
            </>
          ),
          evidence:
            musicSpending.length > 0
              ? [
                  `Overlapping years: ${musicSpending
                    .map((item) => item.year)
                    .join(", ")}.`,
                  "Both datasets contain recorded activity during these years.",
                  "This represents yearly overlap, not proof that events happened at the same time.",
                ]
              : [
                  "No overlapping years were found in the available trend data.",
                ],
        };

      case "music-daily":
        return {
          title: "Music × Daily Life",
          answer: (
            <>
              Music and daily-life activity appear together across{" "}
              <strong>
                {musicDaily.length} yearly data point
                {musicDaily.length !== 1 ? "s" : ""}
              </strong>
              .
            </>
          ),
          evidence:
            musicDaily.length > 0
              ? [
                  `Overlapping years: ${musicDaily
                    .map((item) => item.year)
                    .join(", ")}.`,
                  "Both datasets contain recorded activity during these years.",
                  "This is a yearly data relationship, not proof of simultaneous events.",
                ]
              : [
                  "No overlapping years were found in the available trend data.",
                ],
        };

      case "multiple-signals":
        return {
          title: "Years with multiple signals",
          answer: (
            <>
              There are{" "}
              <strong>
                {multipleSignalYears.length} years
              </strong>{" "}
              where at least two different data sources contain
              recorded activity.
            </>
          ),
          evidence:
            multipleSignalYears.length > 0
              ? [
                  `Years: ${multipleSignalYears.join(", ")}.`,
                  "Each of these years contains activity from at least two datasets.",
                ]
              : [
                  "No years with multiple active signals were found.",
                ],
        };

      case "music":
        return {
          title: "Your top music insight",
          answer: (
            <>
              Your dataset contains{" "}
              <strong>
                {data.music.events.toLocaleString()}
              </strong>{" "}
              music listening records, covering approximately{" "}
              <strong>
                {data.music.hours.toLocaleString()}
              </strong>{" "}
              hours.
            </>
          ),
          evidence: [
            `Top artist: ${data.music.topArtists[0].name}.`,
            `${data.music.topArtists[0].count.toLocaleString()} listening moments are associated with the top artist.`,
            `${data.music.tracks.toLocaleString()} tracks are represented.`,
          ],
        };

      case "story":
        return {
          title: "Your digital journey",
          answer: (
            <>
              Your dataset spans{" "}
              <strong>2013–2024</strong> and brings together
              music, spending, and daily-life activity. Across
              that period, different signals overlap at different
              points, creating a changing picture of the digital
              journey.
            </>
          ),
          evidence: [
            "2015–2018: Music + Daily Life overlap.",
            "2022–2024: Music + Spending overlap.",
            `${data.music.events.toLocaleString()} music records.`,
            `${data.spending.transactions.toLocaleString()} spending records.`,
            `${data.daily.transactions.toLocaleString()} daily-life records.`,
          ],
        };

      default:
        return null;
    }
  };

  const answer = selectedQuestion
    ? getAnswer(selectedQuestion)
    : null;

  return (
    <section className="mt-10">

      {/* ==================================================
          AI HEADER
      ================================================== */}

      <div className="mb-6">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-lime">
          <Sparkles size={13} />
          Life Data AI
        </div>

        <div className="flex items-start gap-3">

          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime/10 text-lime">
            <Brain size={20} />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_10px_rgba(190,242,100,0.8)]" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              Ask Your Life Data
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
              Ask about your data and get evidence-backed answers
              from the LifeReceipt dataset.
            </p>
          </div>

        </div>
      </div>


      {/* ==================================================
          CHAT CONTAINER
      ================================================== */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f13] shadow-2xl">

        {/* CHAT TOP BAR */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/10 text-lime">
              <Brain size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                LifeReceipt AI
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                <span className="text-[10px] text-slate-500">
                  Connected to your dataset
                </span>
              </div>
            </div>

          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 sm:flex">
            <Database size={12} className="text-slate-500" />
            <span className="text-[10px] text-slate-500">
              Data-grounded
            </span>
          </div>

        </div>


        {/* ==================================================
            CHAT MESSAGES
        ================================================== */}

        <div className="min-h-[260px] space-y-5 p-5 md:p-6">

          {/* EMPTY STATE */}

          {!selectedQuestion && !isThinking && (
            <div className="py-5 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime/10 text-lime">
                <Sparkles size={23} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-white">
                Discover something hidden in your data
              </h3>

              <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-500">
                Choose one of the questions below. LifeReceipt
                will analyze the available dataset and show the
                evidence behind the answer.
              </p>

            </div>
          )}


          {/* USER MESSAGE */}

          {selectedQuestion && (
            <div className="flex justify-end">

              <div className="flex max-w-[85%] items-end gap-2">

                <div className="rounded-2xl rounded-br-md border border-lime/20 bg-lime/[0.08] px-4 py-3">
                  <p className="text-sm leading-6 text-slate-200">
                    {
                      questions.find(
                        (question) =>
                          question.id === selectedQuestion
                      )?.text
                    }
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-slate-400">
                  <User size={14} />
                </div>

              </div>

            </div>
          )}


          {/* THINKING */}

          {isThinking && (
            <div className="flex items-end gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                <Brain size={14} />
              </div>

              <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.03] px-4 py-3">

                <div className="flex items-center gap-1.5">

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime"
                    style={{ animationDelay: "0ms" }}
                  />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime"
                    style={{ animationDelay: "120ms" }}
                  />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime"
                    style={{ animationDelay: "240ms" }}
                  />

                  <span className="ml-2 text-[10px] text-slate-500">
                    Analyzing your data...
                  </span>

                </div>

              </div>

            </div>
          )}


          {/* AI RESPONSE */}

          {answer && !isThinking && (
            <div className="flex items-start gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
                <Brain size={14} />
              </div>

              <div className="min-w-0 max-w-[90%]">

                {/* AI MESSAGE */}

                <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.03] px-4 py-4">

                  <div className="mb-2 flex items-center gap-2">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
                      LifeReceipt AI
                    </span>

                    <CheckCircle2
                      size={12}
                      className="text-lime"
                    />

                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {answer.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {answer.answer}
                  </p>

                </div>


                {/* EVIDENCE */}

                <div className="mt-3 rounded-2xl border border-lime/10 bg-lime/[0.02] p-4">

                  <div className="mb-3 flex items-center gap-2">

                    <Database
                      size={13}
                      className="text-lime"
                    />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Evidence from your data
                    </p>

                  </div>

                  <div className="space-y-2">

                    {answer.evidence.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 rounded-xl border border-white/5 bg-black/10 px-3 py-2.5"
                      >

                        <span className="mt-0.5 shrink-0 text-[10px] font-bold text-lime">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-xs leading-5 text-slate-400">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>


                {/* SOURCE NOTE */}

                <p className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-600">
                  <CheckCircle2 size={11} />
                  Answer generated from LifeReceipt dataset
                </p>

              </div>

            </div>
          )}

        </div>


        {/* ==================================================
            SUGGESTED QUESTIONS
        ================================================== */}

        <div className="border-t border-white/10 p-5 md:p-6">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Suggested questions
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Choose a question to explore your data
              </p>
            </div>

            {selectedQuestion && (
              <button
                onClick={() => {
                  setSelectedQuestion(null);
                  setIsThinking(false);
                }}
                className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500 transition hover:text-lime"
              >
                <RotateCcw size={12} />
                New question
              </button>
            )}

          </div>


          <div className="grid gap-2 md:grid-cols-2">

            {questions.map((question) => {

              const Icon = question.icon;

              const isSelected =
                selectedQuestion === question.id;

              return (
                <button
                  key={question.id}
                  onClick={() =>
                    handleQuestion(question.id)
                  }
                  className={`group flex items-center justify-between rounded-2xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? "border-lime/30 bg-lime/[0.06]"
                      : "border-white/10 bg-white/[0.02] hover:border-lime/20 hover:bg-white/[0.04]"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                        isSelected
                          ? "bg-lime text-ink"
                          : "bg-white/[0.04] text-slate-400 group-hover:text-lime"
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    <span
                      className={`text-xs font-medium ${
                        isSelected
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {question.text}
                    </span>

                  </div>

                  <ChevronRight
                    size={15}
                    className={`transition ${
                      isSelected
                        ? "text-lime"
                        : "text-slate-600 group-hover:text-slate-300"
                    }`}
                  />

                </button>
              );
            })}

          </div>

        </div>

      </div>


      {/* ==================================================
          FOOTNOTE
      ================================================== */}

      <div className="mt-4 flex items-center justify-center gap-2 text-center">

        <Database
          size={11}
          className="text-slate-600"
        />

        <p className="text-[10px] leading-5 text-slate-600">
          LifeReceipt AI only answers questions using patterns
          represented in the provided dataset.
        </p>

      </div>

    </section>
  );
}