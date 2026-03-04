// src/plugins/tools.ts
import type { App } from 'vue'

interface ToolsPluginOptions {
  cutTextLength?: number
}

const ToolsPlugin = {
  install(app: App, options: ToolsPluginOptions = {}) {
    const config: Required<ToolsPluginOptions> = {
      cutTextLength: 100,
      ...options,
    }

    app.mixin({
      methods: {
        dateToDB(date: string): string | null {
          if (!date) return null
          const [day, month, year] = date.split('/')
          return `${year}-${month}-${day}`
        },

        dbDateToFr(date: string): string | null {
          if (!date) return null
          const [year, month, day] = date.substring(0, 10).split('-')
          return `${day}/${month}/${year}`
        },

        dbDateHourToFr(date: string): string | null {
          if (!date) return null
          const [year, month, day] = date.substring(0, 10).split('-')
          const time = date.substring(11, 16)
          return `${day}/${month}/${year} ${time}`
        },

        formatAmount(amount: number | string): string | null {
          if (amount === null || amount === undefined || amount === '') return null
          return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(Number(amount))
        },

        cutText(text: string, maxLength?: number): string {
          if (!text) return text
          const limit = maxLength ?? config.cutTextLength
          if (text.length <= limit) return text
          return text.substring(0, limit) + '…'
        },
      },
    })

    app.directive('focus', {
      mounted(el: HTMLElement) {
        el.focus()
      },
    })
  },
}

export default ToolsPlugin
