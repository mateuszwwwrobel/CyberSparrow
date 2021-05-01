(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[0], {
    41: function (e, t, a) {
    }, 70: function (e, t, a) {
        "use strict";
        a.r(t);
        var c = a(1), s = a.n(c), n = a(35), r = a.n(n), l = (a(41), a(4)), i = a(5), o = a(16), b = a(0),
            d = function () {
                var e = Object(o.b)({opacity: 1, from: {opacity: 0}, config: {delay: 1e3, duration: 1e3}});
                return Object(b.jsx)("nav", {
                    className: "navbar sticky-top navbar-expand-lg navbar-light bg-yellow",
                    children: Object(b.jsxs)("div", {
                        className: "container-fluid",
                        children: [Object(b.jsx)(l.b, {
                            className: "nav-link",
                            "aria-current": "page",
                            exact: !0,
                            to: "/",
                            children: Object(b.jsx)("img", {
                                className: "img-fluid",
                                src: "/staticfiles/img/logo_sparrow_small.png",
                                alt: "logo"
                            })
                        }), Object(b.jsx)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNav",
                            "aria-controls": "navbarNav",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: Object(b.jsx)("span", {className: "navbar-toggler-icon"})
                        }), Object(b.jsx)(o.a.div, {
                            style: e,
                            className: "collapse navbar-collapse",
                            id: "navbarNav",
                            children: Object(b.jsxs)("ul", {
                                className: "navbar-nav",
                                children: [Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/boardgames",
                                        children: "Board Games"
                                    })
                                }), Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/modelling",
                                        children: "Modelling"
                                    })
                                }), Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/world",
                                        children: "World"
                                    })
                                }), Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/science",
                                        children: "Science"
                                    })
                                }), Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/python",
                                        children: "Python"
                                    })
                                }), Object(b.jsx)("li", {
                                    className: "nav-item btn btn-navy",
                                    children: Object(b.jsx)(l.b, {
                                        className: "p-2 link-secondary",
                                        to: "/category/travel",
                                        children: "Travel"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }, j = a(18), m = a(20), h = function () {
                return Object(b.jsx)("div", {
                    className: "text-dark text-center bg-yellow mt-5 pt-3", children: Object(b.jsxs)("div", {
                        className: "row",
                        children: [Object(b.jsxs)("div", {
                            className: "col-12",
                            children: [Object(b.jsx)(l.b, {
                                target: "_blank",
                                to: {pathname: "https://www.facebook.com/mateusz.wrobel.796", state: {fromDashboard: !0}},
                                className: "mx-3 text-navy",
                                children: Object(b.jsx)(j.a, {icon: m.a, size: "lg", transform: "grow-4"})
                            }), Object(b.jsx)(l.b, {
                                target: "_blank",
                                to: {pathname: "https://github.com/mateuszwwwrobel", state: {fromDashboard: !0}},
                                className: "text-navy mx-3",
                                children: Object(b.jsx)(j.a, {icon: m.b, size: "lg", transform: "grow-4"})
                            }), Object(b.jsx)(l.b, {
                                target: "_blank",
                                to: {
                                    pathname: "https://www.youtube.com/channel/UCqbh_cQEJo81E6RvjHllU5w/videos",
                                    state: {fromDashboard: !0}
                                },
                                className: "text-navy mx-3",
                                children: Object(b.jsx)(j.a, {icon: m.d, size: "lg", transform: "grow-4"})
                            }), Object(b.jsx)(l.b, {
                                target: "_blank",
                                to: {pathname: "https://www.linkedin.com/in/mateusz-wrobel/", state: {fromDashboard: !0}},
                                className: "mx-3 text-navy",
                                children: Object(b.jsx)(j.a, {icon: m.c, size: "lg", transform: "grow-4"})
                            })]
                        }), Object(b.jsx)("div", {
                            className: "col-12 mt-3",
                            children: Object(b.jsxs)("p", {children: ["\xa9 Copyright ", (new Date).getFullYear(), ", Wrobel Mateusz"]})
                        })]
                    })
                })
            }, x = function (e) {
                return Object(b.jsxs)("div", {children: [Object(b.jsx)(d, {}), e.children, Object(b.jsx)(h, {})]})
            }, p = a(11), u = a.n(p), O = a(13), v = a(12), g = a(14), f = a.n(g), N = function () {
                var e = Object(c.useState)([]), t = Object(v.a)(e, 2), a = t[0], s = t[1], n = Object(c.useState)([]),
                    r = Object(v.a)(n, 2), i = r[0], d = r[1];
                Object(c.useEffect)((function () {
                    (function () {
                        var e = Object(O.a)(u.a.mark((function e() {
                            var t;
                            return u.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.a.get("".concat("https://mateuszwrobel.herokuapp.com", "/api/blog/featured/"));
                                    case 3:
                                        t = e.sent, d(t.data[0]), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 7]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []), Object(c.useEffect)((function () {
                    (function () {
                        var e = Object(O.a)(u.a.mark((function e() {
                            var t;
                            return u.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.a.get("".concat("https://mateuszwrobel.herokuapp.com", "/api/blog/"));
                                    case 3:
                                        t = e.sent, s(t.data), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 7]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                var j = Object(o.b)({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -3500}});
                return Object(b.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(b.jsx)("div", {
                        className: "p-4 p-md-5 mb-4 text-white rounded bg-navy",
                        children: Object(b.jsxs)(o.a.div, {
                            style: j,
                            className: "col-md-6 px-0",
                            children: [Object(b.jsx)("h1", {
                                className: "display-4 fst-italic",
                                children: i.title
                            }), Object(b.jsx)("p", {
                                className: "lead my-3",
                                children: i.excerpt
                            }), Object(b.jsx)("p", {
                                className: "lead mb-0",
                                children: Object(b.jsx)(l.b, {
                                    to: "/blog/".concat(i.slug),
                                    className: "text-white fw-bold",
                                    children: "Continue reading..."
                                })
                            })]
                        })
                    }), function () {
                        var e = [], t = [];
                        a.map((function (t) {
                            return e.push(Object(b.jsxs)("div", {
                                className: "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",
                                children: [Object(b.jsxs)("div", {
                                    className: "col p-4 d-flex flex-column position-static",
                                    children: [Object(b.jsx)("strong", {
                                        className: "d-inline-block mb-2 text-primary",
                                        children: (a = t.category, a ? a.charAt(0).toUpperCase() + a.slice(1) : "")
                                    }), Object(b.jsx)("h3", {
                                        className: "mb-0",
                                        children: t.title
                                    }), Object(b.jsxs)("div", {
                                        className: "mb-1 text-muted",
                                        children: [t.day, " ", t.month, " ", t.year]
                                    }), Object(b.jsx)("p", {
                                        className: "card-text mb-auto",
                                        children: t.excerpt
                                    }), Object(b.jsx)(l.b, {
                                        to: "/blog/".concat(t.slug),
                                        className: "stretched-link",
                                        children: "Continue reading"
                                    })]
                                }), Object(b.jsx)("div", {
                                    className: "col-auto d-none d-lg-block",
                                    children: Object(b.jsx)("img", {
                                        width: "200",
                                        height: "250",
                                        src: t.thumbnail,
                                        alt: t.thumbnail_description
                                    })
                                })]
                            }));
                            var a
                        }));
                        for (var c = 0; c < e.length; c += 2) t.push(Object(b.jsxs)("div", {
                            className: "row mb-2",
                            children: [Object(b.jsx)("div", {
                                className: "col-md-6",
                                children: e[c]
                            }), Object(b.jsx)("div", {className: "col-md-6", children: e[c + 1] ? e[c + 1] : null})]
                        }, c));
                        return t
                    }()]
                })
            }, y = function (e) {
                var t = Object(c.useState)({}), a = Object(v.a)(t, 2), s = a[0], n = a[1];
                Object(c.useEffect)((function () {
                    var t = e.match.params.id;
                    (function () {
                        var e = Object(O.a)(u.a.mark((function e() {
                            var a;
                            return u.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.a.get("".concat("https://mateuszwrobel.herokuapp.com", "/api/blog/").concat(t));
                                    case 3:
                                        a = e.sent, n(a.data), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 7]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [e.match.params.id]);
                var r;
                return Object(b.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(b.jsx)("h1", {
                        className: "display-2",
                        children: s.title
                    }), Object(b.jsxs)("h2", {
                        className: "text-muted mt-3",
                        children: [(r = s.category, r ? r.charAt(0).toUpperCase() + r.slice(1) : ""), " "]
                    }), Object(b.jsxs)("h4", {children: [s.month, " ", s.day]}), Object(b.jsx)("div", {
                        className: "my-5",
                        dangerouslySetInnerHTML: {__html: s.content}
                    }), Object(b.jsx)("hr", {}), Object(b.jsx)("p", {
                        className: "lead mb-5",
                        children: Object(b.jsx)(l.b, {to: "/", className: "font-weight-bold", children: "Back to Blogs"})
                    })]
                })
            }, w = function (e) {
                var t = Object(c.useState)([]), a = Object(v.a)(t, 2), s = a[0], n = a[1], r = Object(c.useState)([]),
                    i = Object(v.a)(r, 2), o = i[0], d = i[1];
                Object(c.useEffect)((function () {
                    var t = e.match.params.id;
                    d(j(t));
                    var a = {headers: {"Content-type": "application/json"}};
                    (function () {
                        var e = Object(O.a)(u.a.mark((function e() {
                            var c;
                            return u.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.a.post("".concat("https://mateuszwrobel.herokuapp.com", "/api/blog/category/"), {category: t}, a);
                                    case 3:
                                        c = e.sent, n(c.data), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 7]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [e.match.params.id]);
                var j = function (e) {
                    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
                };
                return Object(b.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(b.jsxs)("h3", {
                        className: "display-4",
                        children: [o, " Category"]
                    }), Object(b.jsx)("hr", {}), function () {
                        var e = [], t = [];
                        s.map((function (t) {
                            return e.push(Object(b.jsxs)("div", {
                                className: "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",
                                children: [Object(b.jsxs)("div", {
                                    className: "col p-4 d-flex flex-column position-static",
                                    children: [Object(b.jsx)("strong", {
                                        className: "d-inline-block mb-2 text-primary",
                                        children: j(t.category)
                                    }), Object(b.jsx)("h3", {
                                        className: "mb-0",
                                        children: t.title
                                    }), Object(b.jsxs)("div", {
                                        className: "mb-1 text-muted",
                                        children: [t.month, " ", t.day]
                                    }), Object(b.jsx)("p", {
                                        className: "card-text mb-auto",
                                        children: t.excerpt
                                    }), Object(b.jsx)(l.b, {
                                        to: "/blog/".concat(t.slug),
                                        className: "stretched-link",
                                        children: "Continue reading"
                                    })]
                                }), Object(b.jsx)("div", {
                                    className: "col-auto d-none d-lg-block",
                                    children: Object(b.jsx)("img", {
                                        width: "200",
                                        height: "250",
                                        src: t.thumbnail,
                                        alt: t.thumbnail_description
                                    })
                                })]
                            }))
                        }));
                        for (var a = 0; a < e.length; a += 2) t.push(Object(b.jsxs)("div", {
                            className: "row mb-2",
                            children: [Object(b.jsx)("div", {
                                className: "col-md-6",
                                children: e[a]
                            }), Object(b.jsx)("div", {className: "col-md-6", children: e[a + 1] ? e[a + 1] : null})]
                        }, a));
                        return t
                    }()]
                })
            }, k = function () {
                return Object(b.jsx)(l.a, {
                    children: Object(b.jsx)(x, {
                        children: Object(b.jsxs)(i.c, {
                            children: [Object(b.jsx)(i.a, {
                                exact: !0,
                                path: "/",
                                component: N
                            }), Object(b.jsx)(i.a, {
                                exact: !0,
                                path: "/category/:id",
                                component: w
                            }), Object(b.jsx)(i.a, {exact: !0, path: "/blog/:id", component: y})]
                        })
                    })
                })
            };
        r.a.render(Object(b.jsx)(s.a.StrictMode, {children: Object(b.jsx)(k, {})}), document.getElementById("root"))
    }
}, [[70, 1, 2]]]);
//# sourceMappingURL=main.cb10832b.chunk.js.map