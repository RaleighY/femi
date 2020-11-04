System.register(["react", "react-dom"], function(_export, _context) {
  "use strict"

  var React, ReactDOM, Index
  return {
    setters: [
      function(_react) {
        React = _react.default
      },
      function(_reactDom) {
        ReactDOM = _reactDom.default
      },
    ],
    execute: function() {
      System.import("/Component.css")

      ;(function() {
        const systemPrototype = System.constructor.prototype
        const originalInstantiate = systemPrototype.instantiate

        systemPrototype.instantiate = function() {
          // const loader = this;
          const url = arguments[0]

          if (url.slice(-4) === ".css") {
            return new Promise(function(resolve, reject) {
              if (
                document.querySelector('link[href="' + url + '"]') ||
                document.querySelector(
                  'link[href="' +
                    url.replace(location.protocol + "//" + location.hostname, "") +
                    '"]'
                )
              ) {
                reject(Error("Style " + url + " has already been loaded using another way."))
                return
              }

              let link = document.createElement("link")
              link.type = "text/css"
              link.rel = "stylesheet"
              link.href = url
              document.head.appendChild(link)

              link.onload = function() {
                // console.log('%c Style '+url+' has been loaded', 'color: green');
                resolve([
                  [],
                  function() {
                    return {}
                  },
                ])
              }

              link.onerror = function(e) {
                let href = document.querySelector('link[href="' + url + '"]')

                if (href) {
                  href.parentElement.removeChild(href)
                }

                reject(e)
              }
            })
          } else {
            return originalInstantiate.apply(this, arguments)
          }
        }
      })()

      _export(
        "Index",
        (Index = () => {
          return /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "container",
            },
            /*#__PURE__*/ React.createElement("button", null, "A button created by React"),
            ";"
          )
        })
      )
    },
  }
})
//# sourceMappingURL=Component.js.map
