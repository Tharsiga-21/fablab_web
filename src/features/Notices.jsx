// Notices section rendering official announcements from data/notices.js with a "Read more" toggle for long text.

import { useState } from 'react';
import { ChevronDown, ChevronUp, Bell } from 'lucide-react';
import { notices } from '../data/notices';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const PREVIEW_CHAR_LIMIT = 240;

function NoticeCard({ notice }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = notice.body.length > PREVIEW_CHAR_LIMIT;

  const displayedText =
    !isLong || expanded
      ? notice.body
      : `${notice.body.slice(0, PREVIEW_CHAR_LIMIT).trim()}...`;

  return (
    <Card className="p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Date badge and category metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF8C00]/12 px-3 py-1 text-xs font-semibold text-[#E67E00]">
            <Bell className="w-3.5 h-3.5" />
            <span>{notice.date}</span>
          </span>
          {notice.category && (
            <span className="text-xs text-[#1A1F36]/60">{notice.category}</span>
          )}
        </div>

        {/* Notice Title */}
        <h3 className="text-xl font-bold text-[#1A1F36] leading-snug mb-3">
          {notice.title}
        </h3>

        {/* Notice Body */}
        <div className="text-sm sm:text-base text-[#1A1F36]/80 leading-relaxed whitespace-pre-line">
          {displayedText}
        </div>
      </div>

      {/* Read more / Show less toggle button */}
      {isLong && (
        <div className="mt-5 pt-4 border-t border-[#4169E1]/10">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4169E1] hover:text-[#2A4BB8] transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Show less' : 'Read more'}</span>
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
    </Card>
  );
}

export default function Notices() {
  return (
    <section id="notices" className="py-16 lg:py-24 bg-[#F4F7FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Notices & Announcements"
          subtitle="Stay updated with the latest workflow guidelines, form updates, and scheduling announcements from the LICET FabLab team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </section>
  );
}
