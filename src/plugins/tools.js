const toolsPlugin = {
  install(app, options = {}) {
    const config = {
      cutTextLength: 100, // default max characters for cutText
      ...options,
    };

    app.mixin({
      methods: {
        dateToDB(date) {
          const [day, month, year] = date.split('/');
          return `${year}-${month}-${day}`;
          },

        dbDateToFr(date) {
          const [year, month, day] = date.split('-');
          return `${day}/${month}/${year}`;
        },

        formatAmount(amount) {
          return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(amount);
        },

        cutText(text) {
          if (text.length > config.cutTextLength) {
            return text.substring(0, config.cutTextLength) + '...';
          }
          return text;
        },
      },
  });

    app.directive('focus', {
      mounted(el) {
        el.focus();
      },
    });
  },
};
