import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EmptyState({ icon: Icon, title, description, actionLabel, actionTo }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}>
        <Icon size={28} style={{ color: 'var(--color-text-muted)', opacity: 0.4 }} />
      </div>
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      {description && <p className="text-xs mb-4" style={{ color: 'var(--color-text-muted)' }}>{description}</p>}
      {actionLabel && actionTo && (
        <Link to={actionTo}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02]"
          style={{ background: 'var(--color-primary)' }}>
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
