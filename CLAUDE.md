# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**大声画画的孩子** (Loud Drawing Kids) — an online art education platform targeting children ages 3–12 and their parents. This repository is currently in the **design phase** (v0.1 Draft, awaiting review).

Current files:
- `产品设计文档.md` — Full product design specification in Chinese (v0.1)
- `wireframe.html` — Interactive low-fidelity prototype; open directly in a browser to preview

## Planned Tech Stack (not yet implemented)

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, SSG for SEO) |
| Styling | Tailwind CSS |
| Animation | Framer Motion (scroll-triggered fade-ins, hover effects) |
| Images | `next/image` (auto WebP, lazy loading) |
| Deployment | Vercel |
| Lead capture (MVP) | 腾讯文档 / 飞书多维表格 (no-code form integration) |

## Design System

**Colors:**
- Primary: `#FFB020` (orange-yellow) — buttons, brand accents
- Accent Red: `#FF4D4D` — badges, promotions
- Accent Blue: `#4DBEFF` — icons, illustrations
- Accent Green: `#52C41A` — achievements
- Background: `#FFFBF2` (warm off-white)
- Text: `#1A1A1A` / `#666666`

**Spacing:** 8px grid (8/16/24/32/48/64px)
**Border radius:** Buttons `50px` (pill), Cards `16px`
**Typography:** Alibaba PingFang / Source Han Sans; H1 48px→28px, H2 32px→22px (desktop→mobile)

**Animation:** Scroll-triggered `translateY(20px)→0` + `opacity 0→1`, 400ms ease-out. Disable hover effects on mobile.

## Page Architecture

The site is a single marketing page (homepage + registration landing) with 12 sections in order:

1. **Nav** — Fixed header, CTA "免费试课" always visible; mobile hamburger → full-screen drawer
2. **Hero** — Left: slogan + dual CTA + social proof; Right: main illustration
3. **Why Us** — 4 value proposition cards
4. **Course System** — Tab switcher for 3 age tiers (3–5, 6–9, 10–12)
5. **Teaching Method** — 3-step horizontal process flow
6. **Student Works** — Horizontally scrollable artwork gallery
7. **Teachers** — Grid of teacher profile cards
8. **Pricing** — 3-tier pricing table (¥9.9 / ¥599 / ¥1,999 — placeholder values)
9. **Parent Reviews** — Testimonial carousel
10. **FAQ** — Accordion, 6–8 questions
11. **Sticky Footer Bar** — Mobile-only, full-width CTA button
12. **Footer** — Logo, links, WeChat QR, ICP filing

**Primary conversion flow:** Hero CTA → modal form (parent name, phone, child age) → submit → 24h customer follow-up

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768px | Single column, hero image below text |
| Tablet | 768–1024px | 2-column, simplified blocks |
| Desktop | > 1024px | Full layout |

## Pending Decisions (review needed before implementation)

See `产品设计文档.md` Section 六 for the full checklist. Key blockers for development:
- Brand mascot design (TBD)
- Confirmed pricing
- Real teacher/student content assets
- Primary conversion goal: lead capture vs. direct purchase
- MVP scope: homepage-only or full multi-page site
