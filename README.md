<div align="center">

# 🧾 LifeReceipt

### **Your Life. Your Data. Your Receipt.**

**Turn scattered personal data into a visual story of your life.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_LifeReceipt-black?style=for-the-badge)](https://life-receipt-rho.vercel.app/)
[![GitHub](https://img.shields.io/badge/💻_Source_Code-GitHub-181717?style=for-the-badge\&logo=github)](https://github.com/Jayadaripa/LifeReceipt)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge\&logo=vercel)](https://vercel.com/)

<br/>

### 🌐 **[LIVE DEMO →](https://life-receipt-rho.vercel.app/)**

</div>

---

## ✨ What is LifeReceipt?

**LifeReceipt** is a data-driven web application that transforms raw personal datasets into an interactive **receipt of your life**.

Instead of looking at thousands of rows of disconnected data, LifeReceipt turns them into:

> 📊 **Statistics** · 📈 **Trends** · 🧾 **A Life Receipt** · 📅 **Timelines** · 💡 **Insights**

The idea is simple:

### **What if your life could be summarized like a receipt?**

Your music, spending, and everyday activities become one visual story.

---

## 🎯 The Problem

Personal data is everywhere.

🎵 Music platforms record what we listen to.
💳 Financial datasets record what we spend.
🏠 Household data records everyday activities.

But raw datasets are difficult to understand.

Thousands of rows of data don't immediately tell us:

* What patterns exist?
* Where does most of our money go?
* What do we spend our time on?
* How do our habits change?
* What does all this data say about our lifestyle?

### 💡 Our Solution

**LifeReceipt converts raw data into human-readable insights.**

```text
              RAW DATA
                 │
                 ▼
        ┌─────────────────┐
        │ Data Processing │
        │ & Aggregation   │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ Privacy-Aware   │
        │ Data Layer      │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ Visualization   │
        │ & Insights      │
        └────────┬────────┘
                 │
                 ▼
           🧾 LIFE RECEIPT
```

---

# 📊 Data Behind the Experience

LifeReceipt works with **three different datasets**.

| Dataset                         |     Records | What We Extract                     |
| ------------------------------- | ----------: | ----------------------------------- |
| 🎵 Spotify History              | **149,860** | Listening patterns & music activity |
| 💳 Augmented India Transactions |  **10,267** | Spending patterns & categories      |
| 🏠 Daily Household Transactions |   **2,461** | Household activity & trends         |

### 📦 Total Records Processed

# **162,588+**

individual records transformed into a compact visual experience.

---

# 🧠 How It Works

```text
Spotify Data ─────────┐
                      │
Transactions ─────────┼──► Data Processing ──► Aggregation
                      │                            │
Household Data ───────┘                            ▼
                                         Sanitized JSON Dataset
                                                  │
                                                  ▼
                                         React Application
                                                  │
                           ┌──────────────────────┼──────────────────────┐
                           ▼                      ▼                      ▼
                       Dashboard              Timeline              Insights
                           │                      │                      │
                           └──────────────────────┼──────────────────────┘
                                                  ▼
                                           🧾 LifeReceipt
```

---

# 🚀 Features

### 📊 Interactive Dashboard

Get a quick overview of important statistics and discover patterns from your data.

---

### 🧾 Life Receipt

A receipt-style summary that turns your personal data into a visual representation of your life.

**Designed to be printable and downloadable.**

---

### 📅 Combined Timeline

Explore activity across multiple datasets through a unified timeline.

Filter and discover important moments over time.

---

### 💡 Insights & Trends

Turn numbers into meaningful observations.

Discover:

* Spending trends
* Listening patterns
* Activity patterns
* Life balance indicators

---

### 🔎 Data Explorer

Explore aggregated data through a searchable interface.

Instead of manually going through thousands of records, users can quickly find relevant information.

---

### 📱 Responsive Experience

Designed for both desktop and mobile screens so the experience remains accessible across devices.

---

# 🖥️ Application Pages

| Page            | Purpose                   |
| --------------- | ------------------------- |
| 🏠 `/`          | Landing experience        |
| 📊 `/dashboard` | Overview & quick insights |
| 🧾 `/receipt`   | Life receipt              |
| 📅 `/timeline`  | Combined timeline         |
| 💡 `/insights`  | Trends & life balance     |
| 🔎 `/explorer`  | Data exploration          |

---

# 🔐 Privacy First

Personal datasets can contain extremely sensitive information.

LifeReceipt follows a **privacy-aware data processing approach**.

Sensitive fields such as:

```text
❌ Card Numbers
❌ Names
❌ Street Addresses
❌ Dates of Birth
❌ Precise Coordinates
```

are deliberately excluded from the frontend dataset.

Instead, the application works with **sanitized and aggregated information**.

### 🔒 Privacy Principle

> **Show insights, not identities.**

---

# 🛠️ Tech Stack

<div align="center">

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| ⚛️ React        | UI & application architecture |
| ⚡ Vite          | Development & build tooling   |
| 🎨 Tailwind CSS | Styling & responsive design   |
| 📊 JSON         | Sanitized aggregate data      |
| 🐙 GitHub       | Version control               |
| ▲ Vercel        | Deployment                    |

</div>

---

# 📁 Project Structure

```text
LifeReceipt/
│
├── 📂 src/
│   │
│   ├── 📂 components/
│   │   ├── ChartCard.jsx
│   │   ├── InsightCard.jsx
│   │   ├── Logo.jsx
│   │   ├── MomentCard.jsx
│   │   ├── MobileNav.jsx
│   │   ├── PageShell.jsx
│   │   ├── Receipt.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   └── Topbar.jsx
│   │
│   ├── 📂 data/
│   │   └── lifeData.json
│   │
│   ├── 📂 pages/
│   │   ├── DataExplorer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Insights.jsx
│   │   ├── Landing.jsx
│   │   ├── ReceiptPage.jsx
│   │   └── Timeline.jsx
│   │
│   ├── 📂 utils/
│   │   ├── calculations.js
│   │   └── formatters.js
│   │
│   ├──
```
