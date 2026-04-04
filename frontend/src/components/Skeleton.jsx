/**
 * Reusable skeleton loading primitives.
 * Uses Tailwind animate-pulse with dark theme colors.
 */

export function SkeletonLine({ width = 'w-full', height = 'h-4' }) {
  return <div className={`${width} ${height} rounded animate-pulse`} style={{ background: 'var(--color-surface-overlay)' }} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}>
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <SkeletonLine width="w-2/3" height="h-4" />
          <SkeletonLine width="w-1/2" height="h-3" />
        </div>
        <SkeletonLine width="w-16" height="h-6" />
      </div>
      <div className="space-y-1.5">
        <SkeletonLine width="w-3/4" height="h-3" />
        <SkeletonLine width="w-1/2" height="h-3" />
      </div>
      <div className="flex gap-3">
        <SkeletonLine width="w-16" height="h-3" />
        <SkeletonLine width="w-16" height="h-3" />
        <SkeletonLine width="w-16" height="h-3" />
      </div>
    </div>
  );
}

export function SkeletonStatCard() {
  return (
    <div className="rounded-xl p-5 space-y-2" style={{ background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}>
      <SkeletonLine width="w-24" height="h-3" />
      <SkeletonLine width="w-16" height="h-7" />
      <SkeletonLine width="w-32" height="h-3" />
    </div>
  );
}

export function SkeletonList({ rows = 5 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ background: 'var(--color-surface)' }}>
          <SkeletonLine width="w-1/3" height="h-4" />
          <div className="flex-1" />
          <SkeletonLine width="w-20" height="h-4" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SkeletonLine width="w-40" height="h-7" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => <SkeletonStatCard key={i} />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl p-5 space-y-3" style={{ background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}>
            <SkeletonLine width="w-32" height="h-4" />
            <SkeletonList rows={3} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonServerGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
