import { TFunction } from 'I18next';
import { useTranslation } from 'react-I18next';

export function useI18n(): TFunction {
  const { t } = useTranslation();
  return t;
}
