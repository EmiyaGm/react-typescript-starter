class AddTimestampPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('add-timestamp-plugin', c => {
      c.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'add-timestamp-plugin',
        data => {
          const timestamp = `<i style="display:none">${new Date().toLocaleString()}</i></body>`;
          data.html = data.html.replace(
            '</body>',
            timestamp
          );
        }
      );
    });
  }
}

module.exports = AddTimestampPlugin;
