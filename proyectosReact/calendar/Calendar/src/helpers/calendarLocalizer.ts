import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'
import { es } from 'date-fns/locale'
import { dateFnsLocalizer } from 'react-big-calendar';

// 1. Configuración de idioma español
const locales = {
  'es': es,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
