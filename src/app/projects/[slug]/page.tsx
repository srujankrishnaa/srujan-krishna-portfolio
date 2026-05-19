"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, BookOpenText } from "lucide-react";

/* ──────────────────────────────────────────────────────
   Project data — curated descriptions from each README
   ────────────────────────────────────────────────────── */

interface ProjectData {
  title: string;
  github: string;
  deployed?: string;
  blog?: string;
  tagline: string;
  tech: string[];
  highlights: string[];
  overview: string[];
  architecture?: string[];
}

const projects: Record<string, ProjectData> = {
  "bioscope-ai": {
    title: "BioscopeAI",
    github: "https://github.com/srujankrishnaa/BioscopeAI",
    deployed: "https://bioscope-ai.vercel.app/",
    tagline:
      "Real-time urban biomass analysis platform powered by deep learning and satellite data.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "TensorFlow",
      "Google Earth Engine",
      "Tailwind CSS",
    ],
    highlights: [
      "92.3% accuracy with ground-truth correlation",
      "10 m per-pixel resolution via Sentinel-2 imagery",
      "< 60 seconds per-region analysis time",
      "45+ Indian cities with pan-India coverage",
      "85% cache hit rate for repeated queries",
    ],
    overview: [
      "BioscopeAI is an advanced geospatial analysis platform that combines a hybrid CNN + LSTM deep learning architecture with real-time satellite imagery from Google Earth Engine to predict Above Ground Biomass (AGB) in urban environments.",
      "The system provides comprehensive vegetation analysis, carbon sequestration forecasting, and environmental insights for sustainable city planning. Users select from 45+ pre-configured Indian cities, pick a specific region (North, South, East, West, Centre), and receive real-time satellite imagery processed into actionable environmental metrics.",
      "The platform delivers current AGB estimates (total biomass, canopy cover, and carbon storage) alongside 1-year, 3-year, and 5-year forecasting with growth-rate modelling. Urban metrics include Environmental Performance Index (EPI) scores, cooling potential calculations, green-space ratios, and AI-generated sustainability recommendations.",
      "Visualisation is powered by high-resolution interactive heatmaps showing biomass distribution, comparative overlays of satellite imagery versus biomass data, and technical metrics including resolution, cloud coverage, and processing time, all rendered in a polished React + TypeScript dashboard.",
    ],
    architecture: [
      "Frontend (React / TypeScript / Tailwind / Vite) — Region selection, progress UI, heatmap rendering, and results dashboard.",
      "Backend (FastAPI) — ML model inference, Google Earth Engine integration, response caching, and REST API endpoints.",
      "External APIs — Sentinel-2 (10 m optical), MODIS (NDVI, EVI, LAI), and Landsat for historical vegetation data.",
      "ML Pipeline — Hybrid CNN layers for spatial feature extraction → LSTM layers for temporal analysis → Dense regression layers → AGB prediction output.",
    ],
  },

  "financial-signals": {
    title: "Financial Signals Dashboard",
    github: "https://github.com/srujankrishnaa/Alphavision",
    tagline:
      "AI-powered financial signals agent with real-time stock analysis, sentiment tracking, and alpha signal generation.",
    tech: [
      "Python",
      "Strands Agent SDK",
      "AWS Bedrock",
      "Ollama",
      "Streamlit",
      "Plotly",
      "Bright Data MCP",
    ],
    highlights: [
      "Hybrid model architecture - AWS Bedrock for technicals, Ollama for sentiment",
      "Real-time BUY / SELL / HOLD signals with confidence scores",
      "RSI, moving averages, and position-size recommendations",
      "Social media sentiment radar across Twitter, Reddit, and StockTwits",
      "Supports US (AAPL, TSLA …) and Indian NSE/BSE tickers",
    ],
    overview: [
      "Alphavision is a real-time financial signals agent built on the Strands Agent SDK with Bright Data MCP integration. It collects live data from financial sources to analyse stocks and generate actionable alpha signals for investment decisions.",
      "The system runs two parallel analysis threads: a Financial Analysis thread powered by AWS Bedrock (Nova Premier) for structured technical extraction (price, RSI, moving-average parsing), and a Sentiment Analysis thread powered by a local Ollama model (Qwen 2.5 7B) for synthesising market sentiment from news and social media.",
      "The interactive Streamlit dashboard presents signal direction gauges (BUY / SELL / HOLD), confidence-score gauges with colour-coded zones, risk-reward comparison charts, price-vs-moving-averages bar charts, RSI gauges, and position-size recommendations. The sentiment tab includes a 7-day sentiment trend chart, social media radar across Twitter / Reddit / StockTwits, and news-source sentiment breakdowns.",
      "The agentic loop (observe → think → act) is handled automatically by the Strands SDK. Results are saved via file-based thread communication, and the UI auto-updates with interactive Plotly visualisations when analysis completes.",
    ],
    architecture: [
      "Strands Agent SDK — Agent framework managing the reasoning and tool-selection loop.",
      "Bright Data MCP — Web-scraping and financial data collection via MCP protocol.",
      "AWS Bedrock (Nova Premier) — Powers technical indicator extraction.",
      "Ollama (Qwen 2.5 7B) — Local model for sentiment synthesis.",
      "Streamlit + Plotly — Interactive dashboard with real-time updates.",
    ],
  },

  "ecommerce-analytics": {
    title: "Real-Time E-Commerce Analytics Pipeline",
    github: "https://github.com/srujankrishnaa/Ecommerce_Analytics",
    blog: "https://medium.com/@srujankrishnac1/building-a-real-time-e-commerce-analytics-pipeline-923f5abad7e9",
    tagline:
      "Production-grade streaming pipeline implementing Bronze → Silver → Gold medallion architecture with Kafka, Spark, and Snowflake.",
    tech: [
      "Apache Kafka",
      "Apache Spark",
      "Snowflake",
      "Python",
      "Docker",
      "PySpark",
      "SQL",
    ],
    highlights: [
      "~500–600 events/sec Kafka ingestion throughput",
      "~650–900 events/sec Spark Silver processing (sustained)",
      "< 30 s end-to-end latency from ingestion to Snowflake Gold tables",
      "~95 %+ valid events after Silver-layer data quality validation",
      "5 dashboard-ready analytical views for BI consumption",
    ],
    overview: [
      "This project demonstrates how Kafka is actually used in real systems, including message keys, partitioning, streaming data validation, offset management, and warehouse-first analytics, not just basic producers and consumers.",
      "The pipeline implements a complete Medallion Architecture: the Bronze layer ingests raw e-commerce clickstream events (page_view, add_to_cart, purchase) into Kafka. The Silver layer uses PySpark Structured Streaming to clean, validate, and deduplicate data with exactly-once semantics via checkpointing. The Gold layer aggregates clean events by customer and date into business-ready metrics streamed directly to Snowflake.",
      "The system uses startingOffsets = 'earliest' on the first Bronze → Silver load to ingest all existing data, then relies on Spark checkpoints so subsequent runs only read new messages, ensuring incremental, idempotent processing without full reprocessing.",
      "Five analytical views are created in Snowflake: event funnels (conversion analysis), daily customer revenue, real-time customer metrics, top-customer segmentation, and hourly trend monitoring. These are directly consumable by Snowsight dashboards, Tableau, Power BI, or any SQL client.",
    ],
    architecture: [
      "Event Producer (Python) — Generates synthetic e-commerce events with realistic clickstream patterns.",
      "Bronze Layer (Kafka) — Raw event ingestion into the raw_events topic with 3 partitions.",
      "Silver Layer (PySpark Streaming) — Data cleaning, validation, and deduplication → clean_events topic.",
      "Gold Layer (PySpark → Snowflake) — Stateful aggregation by customer + date, micro-batch writes via Spark-Snowflake connector with RSA key-pair auth.",
      "Analytics Layer (Snowflake SQL) — 5 BI-ready views for dashboards and ad-hoc analysis.",
    ],
  },

  "weather-etl": {
    title: "Automated Weather Data ETL Pipeline",
    github:
      "https://github.com/srujankrishnaa/weather-data-automated-etl-pipeline",
    tagline:
      "End-to-end containerised pipeline ingesting live NOAA weather data from AWS S3, transforming with dbt, and visualising via Apache Superset.",
    tech: [
      "Python",
      "Apache Airflow",
      "dbt",
      "PostgreSQL",
      "Apache Superset",
      "Docker",
      "AWS S3 (NOAA)",
    ],
    highlights: [
      "Hourly automated ingestion via Airflow DAG (3-task orchestration)",
      "26 dbt data-quality tests, all passing (not_null, unique, accepted_values)",
      "Zero API keys needed - reads from NOAA ISD public S3 bucket via anonymous boto3",
      "3-layer dbt model: staging → daily_average → analytics_reports",
      "Auto-refreshing Superset dashboards with live weather metrics",
    ],
    overview: [
      "This project is a fully containerised data pipeline that ingests real weather observations from the NOAA ISD public dataset on AWS S3 every hour, loads them into PostgreSQL, transforms and models the data using dbt, and visualises results through Apache Superset dashboards.",
      "The Airflow DAG runs a 3-task chain on an hourly schedule: the ingest task uses boto3 for anonymous S3 reads, parses the ISD fixed-width format, applies sentinel validation, and inserts records into PostgreSQL with a deduplication guard. The transform task runs dbt models where staging handles null coalescing, deduplication, and data-quality flagging; the mart layer produces daily averages (temperature + wind per city/day) and focused reporting tables.",
      "Data quality is enforced at every layer. The staging model tags each row with a data_quality_flag ('clean' or 'fixed: <field> null') for trend monitoring. 26 dbt tests run automatically after every transform, covering not_null constraints on all columns, uniqueness checks on IDs, and accepted_values validation on quality flags.",
      "The entire stack (Airflow, PostgreSQL, dbt, Superset, and Redis) is orchestrated via a single docker-compose command. Superset dashboards auto-refresh every 5 minutes with live weather metrics from New York JFK and Central Park stations.",
    ],
    architecture: [
      "Extract — Python + boto3 anonymous S3 reads from NOAA ISD public bucket (s3://noaa-isd-pds/).",
      "Load — PostgreSQL stores raw ingested data (dev.raw_weather_data).",
      "Transform — dbt models: stg_weather_data → daily_average → weather_analytics_reports.",
      "Validate — dbt test runs 26 automated quality checks after every transform.",
      "Orchestrate — Apache Airflow schedules all steps hourly (weather-api-dbt-orchestrator DAG).",
      "Report — Apache Superset renders live, auto-refreshing dashboards.",
    ],
  },

  "cascade-lakehouse": {
    title: "Cascade Lakehouse",
    github: "https://github.com/srujankrishnaa/Cascade-Lakehouse",
    tagline:
      "Production-grade Data Lakehouse on Kubernetes with Spark, Iceberg, Nessie, MinIO, and Trino, implementing the full Medallion Architecture.",
    tech: [
      "Apache Spark",
      "Apache Iceberg",
      "Project Nessie",
      "MinIO",
      "Trino",
      "Kubernetes",
      "Docker",
      "Python",
    ],
    highlights: [
      "MERGE-based idempotency for exactly-once semantics (safe batch replay)",
      "Dimension table JOINs replace per-row Python UDFs for 10x+ performance",
      "Iceberg time travel + concurrent-read safety via immutable snapshots",
      "Bucket + month partitioning for efficient MERGE and analytical queries",
      "rewrite_data_files compaction (target: 512 MB) to prevent small-file problem",
    ],
    overview: [
      "Cascade Lakehouse is a production-grade Data Lakehouse implementation using the Medallion Architecture (Bronze → Silver → Gold) deployed on Kubernetes. It demonstrates how modern open table formats and git-like data catalogs work together for reliable, scalable analytics.",
      "The Bronze layer generates synthetic e-commerce events (page views at 10/sec and click events at 30/sec) and writes raw data to Iceberg tables with bucket(3, event_id) partitioning, deduplicating within each micro-batch using row_number() window functions.",
      "The Silver layer implements streaming MERGE INTO for cross-batch deduplication on event_id, guaranteeing exactly-once semantics even if a Spark job crashes and replays the same batch. Data enrichment happens via dimension table JOINs against dim_products and dim_users, replacing per-row Python UDFs for dramatically better performance at scale.",
      "The Gold layer aggregates Silver data into fact_product_metrics with per-minute granularity and runs Iceberg rewrite_data_files for file compaction (targeting 512 MB files). Trino provides the SQL query engine for interactive analytics across all layers.",
    ],
    architecture: [
      "Storage (MinIO) — S3-compatible object storage for Parquet data files.",
      "Table Format (Apache Iceberg) — ACID transactions, schema evolution, and time travel.",
      "Catalog (Project Nessie) — Git-like branching for data versioning with atomic pointer swaps.",
      "Compute (Apache Spark 3.5) — Distributed processing via Spark Structured Streaming with foreachBatch.",
      "Query Engine (Trino) — Interactive SQL analytics on Iceberg tables across all medallion layers.",
      "Orchestration (Kubernetes + Spark Operator) — Pod scheduling, lifecycle management, and wave-by-wave pipeline execution.",
    ],
  },
};

/* ──────────────────────────────
   Section sub-component
   ────────────────────────────── */
function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mt-14"
    >
      <h2 className="mb-5 text-2xl font-black md:text-3xl">{title}</h2>
      {children}
    </motion.section>
  );
}

/* ──────────────────────────────
   Main Page
   ────────────────────────────── */
export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f2]">
        <div className="text-center">
          <h1 className="text-4xl font-black">Project not found</h1>
          <Link
            href="/#projects"
            className="mt-4 inline-block text-blue-700 underline"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 opacity-70 [background-image:linear-gradient(rgba(0,0,0,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.07)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-16">
        {/* Back button */}
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 border-2 border-black bg-[#8ef1d1] px-4 py-2 font-black uppercase shadow-[4px_4px_0_#000] transition hover:shadow-[6px_6px_0_#000]"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Back to projects
        </Link>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-black/70">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 font-black uppercase text-white shadow-[5px_5px_0_#333] transition hover:shadow-[7px_7px_0_#333]"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            {project.deployed && (
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black bg-blue-700 px-5 py-3 font-black uppercase text-white shadow-[5px_5px_0_#000] transition hover:shadow-[7px_7px_0_#000]"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </a>
            )}
            {project.blog && (
              <a
                href={project.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black bg-[#FF6F00] px-5 py-3 font-black uppercase text-white shadow-[5px_5px_0_#000] transition hover:shadow-[7px_7px_0_#000]"
              >
                <BookOpenText className="h-5 w-5" />
                Read Blog
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Overview ── */}
        <Section title="Overview" delay={0.15}>
          <div className="space-y-4 border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] md:p-10">
            {project.overview.map((paragraph, i) => (
              <p key={i} className="text-sm leading-7 text-black/80 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        {/* ── Key Highlights ── */}
        <Section title="Key Highlights" delay={0.25}>
          <ul className="grid gap-3 md:grid-cols-2">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-start gap-3 border-2 border-black bg-white p-4 shadow-[4px_4px_0_#000]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-[#8ef1d1] text-xs font-black">
                  {i + 1}
                </span>
                <span className="text-sm font-medium leading-6">{h}</span>
              </motion.li>
            ))}
          </ul>
        </Section>

        {/* ── Architecture ── */}
        {project.architecture && (
          <Section title="Architecture" delay={0.35}>
            <div className="space-y-3 border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] md:p-10">
              {project.architecture.map((line, i) => {
                const [label, ...rest] = line.split(" — ");
                return (
                  <div key={i} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-blue-700" />
                    <p className="text-sm leading-7 text-black/80 md:text-base">
                      <strong className="font-black text-black">{label}</strong>
                      {rest.length > 0 && ` — ${rest.join(" — ")}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* ── Footer ── */}
        <div className="mt-20 border-t-4 border-black pt-8 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-black/50 transition hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
