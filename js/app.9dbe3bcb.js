;(function () {
  'use strict'
  var e = {
      612: function (e, t, n) {
        var r = n(751),
          o = n(641)
        function a(e, t, n, r, a, i) {
          const c = (0, o.g2)('CubesContainer')
          return (0, o.uX)(), (0, o.Wv)(c)
        }
        var i = { name: 'App' },
          c = n(262)
        const s = (0, c.A)(i, [['render', a]])
        var u = s,
          d = n(33)
        const l = { class: 'cube colored-corners' },
          b = { class: 'cube__side top' }
        function v(e, t, n, r, a, i) {
          return (
            (0, o.uX)(),
            (0, o.CE)('div', l, [
              (0, o.Lk)('div', b, (0, d.v_)(n.index), 1),
              t[0] ||
                (t[0] = (0, o.Fv)(
                  '<div class="cube__side front" data-v-27ce577e></div><div class="cube__side right" data-v-27ce577e></div><div class="cube__side left" data-v-27ce577e></div><div class="cube__side bottom" data-v-27ce577e></div><div class="cube__side back" data-v-27ce577e></div>',
                  5
                ))
            ])
          )
        }
        var p = { name: 'Cube', props: { index: void 0 | Number } }
        const f = (0, c.A)(p, [
          ['render', v],
          ['__scopeId', 'data-v-27ce577e']
        ])
        var h = f
        const _ = { class: 'cubes-container__rotate-panel' },
          m = { class: 'cubes-container__rotate-label' },
          g = { class: 'cubes-container__rotate-label' },
          y = { class: 'cubes-container__rotate-label' }
        function x(e, t, n, a, i, c) {
          const s = (0, o.g2)('Cube')
          return (
            (0, o.uX)(),
            (0, o.CE)(
              'div',
              {
                class: 'cubes-container',
                style: (0, d.Tr)({
                  '--cube-side-length': e.cubeSideLength + 'px',
                  '--cube-transition-duration': e.intervalTime / 2 + 'ms'
                })
              },
              [
                (0, o.Lk)('div', _, [
                  (0, o.Lk)('label', m, [
                    t[3] || (t[3] = (0, o.eW)(' x= ', -1)),
                    (0, o.bo)(
                      (0, o.Lk)(
                        'input',
                        {
                          'onUpdate:modelValue': t[0] || (t[0] = t => (e.rotate.x = t)),
                          type: 'number',
                          class: 'cubes-container__rotate-input'
                        },
                        null,
                        512
                      ),
                      [[r.Jo, e.rotate.x]]
                    ),
                    t[4] || (t[4] = (0, o.eW)(' ° ', -1))
                  ]),
                  (0, o.Lk)('label', g, [
                    t[5] || (t[5] = (0, o.eW)(' y= ', -1)),
                    (0, o.bo)(
                      (0, o.Lk)(
                        'input',
                        {
                          'onUpdate:modelValue': t[1] || (t[1] = t => (e.rotate.y = t)),
                          type: 'number',
                          class: 'cubes-container__rotate-input'
                        },
                        null,
                        512
                      ),
                      [[r.Jo, e.rotate.y]]
                    ),
                    t[6] || (t[6] = (0, o.eW)(' ° ', -1))
                  ]),
                  (0, o.Lk)('label', y, [
                    t[7] || (t[7] = (0, o.eW)(' z= ', -1)),
                    (0, o.bo)(
                      (0, o.Lk)(
                        'input',
                        {
                          'onUpdate:modelValue': t[2] || (t[2] = t => (e.rotate.z = t)),
                          type: 'number',
                          class: 'cubes-container__rotate-input'
                        },
                        null,
                        512
                      ),
                      [[r.Jo, e.rotate.z]]
                    ),
                    t[8] || (t[8] = (0, o.eW)(' ° ', -1))
                  ])
                ]),
                (0, o.Lk)(
                  'div',
                  {
                    class: 'cubes-container__plane',
                    style: (0, d.Tr)(
                      `transform: rotateX(${e.rotate.x}deg) rotateY(${e.rotate.y}deg) rotateZ(${e.rotate.z}deg)`
                    )
                  },
                  [
                    ((0, o.uX)(!0),
                    (0, o.CE)(
                      o.FK,
                      null,
                      (0, o.pI)(
                        c.currentCoordinates,
                        (e, t) => (
                          (0, o.uX)(),
                          (0, o.Wv)(s, { key: t, style: (0, d.Tr)(e), index: t }, null, 8, ['style', 'index'])
                        )
                      ),
                      128
                    ))
                  ],
                  4
                )
              ],
              4
            )
          )
        }
        var k = {
          name: 'CubesContainer',
          data: () => ({
            cubeSideLength: 100,
            rotate: { x: 55, y: 0, z: 25 },
            coordinates: [
              [
                [-0.5, -0.5],
                [0.5, -0.5],
                [-0.5, 0.5],
                [0.5, 0.5]
              ],
              [
                [0, -0.5],
                [1, -0.5],
                [-1, 0.5],
                [0, 0.5]
              ],
              [
                [0, -0.5],
                [1, 0.5],
                [-1, -0.5],
                [0, 0.5]
              ],
              [
                [0.5, -0.5],
                [0.5, 0.5],
                [-0.5, -0.5],
                [-0.5, 0.5]
              ],
              [
                [0.5, -0.5, -0.5],
                [0.5, 0.5, 0.5],
                [-0.5, -0.5, 0.5],
                [-0.5, 0.5, -0.5]
              ],
              [
                [-0.5, -0.5, -0.5],
                [0.5, -0.5, 0.5],
                [-0.5, 0.5, 0.5],
                [0.5, 0.5, -0.5]
              ]
            ],
            styles: [],
            coordinatesIndex: 0,
            intervalTime: 1e3
          }),
          mounted() {
            this.coordinates.length > 1 &&
              (this.interval = setInterval(() => {
                this.coordinatesIndex = (this.coordinatesIndex + 1) % this.coordinates.length
              }, this.intervalTime))
          },
          computed: {
            currentCoordinates() {
              let e = []
              for (const t of this.coordinates[this.coordinatesIndex])
                e.push(
                  `transform: translate3d(\n          ${t[0] ? this.cubeSideLength * t[0] + 'px' : 0},\n          ${
                    t[1] ? this.cubeSideLength * t[1] + 'px' : 0
                  },\n          ${t[2] ? this.cubeSideLength * t[2] + 'px' : 0})`
                )
              return e
            }
          }
        }
        const C = (0, c.A)(k, [
          ['render', x],
          ['__scopeId', 'data-v-56205ec8']
        ])
        var L = C
        const O = (0, r.Ef)(u)
        O.component('CubesContainer', L), O.component('Cube', h), O.mount('#app')
      }
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var a = (t[r] = { exports: {} })
    return e[r](a, a.exports, n), a.exports
  }
  ;(n.m = e),
    (function () {
      var e = []
      n.O = function (t, r, o, a) {
        if (!r) {
          var i = 1 / 0
          for (d = 0; d < e.length; d++) {
            ;(r = e[d][0]), (o = e[d][1]), (a = e[d][2])
            for (var c = !0, s = 0; s < r.length; s++)
              (!1 & a || i >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[s])
              })
                ? r.splice(s--, 1)
                : ((c = !1), a < i && (i = a))
            if (c) {
              e.splice(d--, 1)
              var u = o()
              void 0 !== u && (t = u)
            }
          }
          return t
        }
        a = a || 0
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1]
        e[d] = [r, o, a]
      }
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
      }
    })(),
    (function () {
      n.g = (function () {
        if ('object' === typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' === typeof window) return window
        }
      })()
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
    })(),
    (function () {
      var e = { 524: 0 }
      n.O.j = function (t) {
        return 0 === e[t]
      }
      var t = function (t, r) {
          var o,
            a,
            i = r[0],
            c = r[1],
            s = r[2],
            u = 0
          if (
            i.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o])
            if (s) var d = s(n)
          }
          for (t && t(r); u < i.length; u++) (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0)
          return n.O(d)
        },
        r = (self['webpackChunkcubes-3D'] = self['webpackChunkcubes-3D'] || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
  var r = n.O(void 0, [504], function () {
    return n(612)
  })
  r = n.O(r)
})()
//# sourceMappingURL=app.9dbe3bcb.js.map
