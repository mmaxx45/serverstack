import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

export default function ConfirmModal({ title, message, onConfirm, onCancel, danger = false }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onCancel}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative w-full max-w-sm rounded-2xl p-6 animate-fade-in"
        style={{ background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg shrink-0" style={{ background: danger ? '#7f1d1d' : 'var(--color-surface-overlay)' }}>
            <AlertTriangle size={20} style={{ color: danger ? '#f87171' : 'var(--color-warning)' }} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{message}</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
            style={{ color: 'var(--color-text-muted)' }}>
            {t('actions.cancel')}
          </button>
          <button onClick={onConfirm}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            style={{ background: danger ? 'var(--color-danger)' : 'var(--color-primary)' }}>
            {t('actions.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
}
