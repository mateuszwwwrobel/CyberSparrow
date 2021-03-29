(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([[0], {
    46: function (e, t, a) {
    }, 72: function (e, t, a) {
        "use strict";
        a.r(t);
        var s = a(1), c = a.n(s), n = a(39), i = a.n(n), o = (a(46), a(3)), r = a(6), l = a(8), d = a(0),
            m = function () {
                var e = Object(l.b)({marginLeft: 0, from: {marginLeft: -2500}});
                return Object(d.jsx)("nav", {
                    className: "navbar sticky-top navbar-expand-md navbar-light bg-yellow",
                    children: Object(d.jsxs)("div", {
                        className: "container-fluid",
                        children: [Object(d.jsx)(o.b, {
                            className: "nav-link",
                            "aria-current": "page",
                            exact: !0,
                            to: "/",
                            children: Object(d.jsx)("img", {
                                className: "img-fluid",
                                src: "/static/img/logo_sparrow_small.png",
                                alt: "logo"
                            })
                        }), Object(d.jsx)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNav",
                            "aria-controls": "navbarNav",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: Object(d.jsx)("span", {className: "navbar-toggler-icon"})
                        }), Object(d.jsx)(l.a.div, {
                            style: e,
                            className: "collapse navbar-collapse",
                            id: "navbarNav",
                            children: Object(d.jsxs)("ul", {
                                className: "navbar-nav",
                                children: [Object(d.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(d.jsx)(o.c, {
                                        className: "nav-link active",
                                        "aria-current": "page",
                                        exact: !0,
                                        to: "/",
                                        children: "Home"
                                    })
                                }), Object(d.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(d.jsx)(o.c, {
                                        className: "nav-link",
                                        exact: !0,
                                        to: "/about",
                                        children: "About Me"
                                    })
                                }), Object(d.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(d.jsx)(o.c, {
                                        className: "nav-link",
                                        exact: !0,
                                        to: "/portfolio",
                                        children: "Portfolio"
                                    })
                                }), Object(d.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(d.jsx)(o.c, {
                                        className: "nav-link",
                                        exact: !0,
                                        to: "/blog",
                                        children: "Blog"
                                    })
                                }), Object(d.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(d.jsx)(o.c, {
                                        className: "nav-link",
                                        exact: !0,
                                        to: "/contact",
                                        children: "Contact"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }, b = a(17), h = a(5), j = function () {
                return Object(d.jsx)("div", {
                    className: "text-dark text-center bg-yellow mt-5 pt-3", children: Object(d.jsxs)("div", {
                        className: "row",
                        children: [Object(d.jsxs)("div", {
                            className: "col-12",
                            children: [Object(d.jsx)(o.b, {
                                target: "_blank",
                                to: {pathname: "https://www.facebook.com/mateusz.wrobel.796", state: {fromDashboard: !0}},
                                className: "mx-3 text-navy",
                                children: Object(d.jsx)(b.a, {icon: h.c, size: "lg", transform: "grow-4"})
                            }), Object(d.jsx)(o.b, {
                                target: "_blank",
                                to: {pathname: "https://github.com/mateuszwwwrobel", state: {fromDashboard: !0}},
                                className: "text-navy mx-3",
                                children: Object(d.jsx)(b.a, {icon: h.d, size: "lg", transform: "grow-4"})
                            }), Object(d.jsx)(o.b, {
                                target: "_blank",
                                to: {
                                    pathname: "https://www.youtube.com/channel/UCqbh_cQEJo81E6RvjHllU5w/videos",
                                    state: {fromDashboard: !0}
                                },
                                className: "text-navy mx-3",
                                children: Object(d.jsx)(b.a, {icon: h.i, size: "lg", transform: "grow-4"})
                            }), Object(d.jsx)(o.b, {
                                target: "_blank",
                                to: {pathname: "https://www.linkedin.com/in/mateusz-wrobel/", state: {fromDashboard: !0}},
                                className: "mx-3 text-navy",
                                children: Object(d.jsx)(b.a, {icon: h.f, size: "lg", transform: "grow-4"})
                            })]
                        }), Object(d.jsx)("div", {
                            className: "col-12 mt-3",
                            children: Object(d.jsx)("p", {children: "Created by: Mateusz Wrobel"})
                        })]
                    })
                })
            }, p = function (e) {
                return Object(d.jsxs)("div", {children: [Object(d.jsx)(m, {}), e.children, Object(d.jsx)(j, {})]})
            }, u = function () {
                var e = Object(l.b)({opacity: 1, from: {opacity: 0}, config: {delay: 1e3, duration: 1500}});
                return Object(d.jsx)("div", {
                    className: "container text-white", children: Object(d.jsxs)("div", {
                        className: "bg-navy mt-5 px-5 py-5",
                        children: [Object(d.jsxs)("h1", {
                            children: ["Hi, my name is ", Object(d.jsx)("span", {
                                className: "animate-name",
                                children: "Mateusz Wrobel"
                            })]
                        }), Object(d.jsx)("p", {
                            className: "lead",
                            children: "I am Junior Python Developer."
                        }), Object(d.jsx)("p", {
                            className: "lead text-justify",
                            children: "First of all, thank you for visiting my website! It consists of several sections."
                        }), Object(d.jsx)("p", {
                            className: "lead text-justify",
                            children: "If you want to know something more about me, have a look at About Me section."
                        }), Object(d.jsx)(o.b, {
                            to: "/about",
                            children: Object(d.jsx)(l.a.span, {
                                style: e,
                                className: "border btn btn-yellow btn-lg text-dark",
                                children: "About Me"
                            })
                        }), Object(d.jsx)("p", {
                            className: "lead text-justify mt-2",
                            children: "You can find some of my projects in Portfolio section."
                        }), Object(d.jsx)(o.b, {
                            to: "/portfolio",
                            children: Object(d.jsx)(l.a.span, {
                                style: e,
                                className: "border btn btn-yellow btn-lg text-dark",
                                children: "Portfolio"
                            })
                        }), Object(d.jsx)("hr", {className: "my-4"}), Object(d.jsx)("p", {children: "Read posts on my Blog to get familiar with my passions."}), Object(d.jsx)(o.b, {
                            to: "/blog",
                            role: "button",
                            children: Object(d.jsx)(l.a.span, {
                                style: e,
                                className: "border btn btn-lg btn-yellow",
                                children: "Check out my Blog"
                            })
                        })]
                    })
                })
            }, x = a(16), g = a.n(x), y = a(19), f = a(13), v = a(20), O = a.n(v), w = function () {
                var e = Object(s.useState)([]), t = Object(f.a)(e, 2), a = t[0], c = t[1], n = Object(s.useState)([]),
                    i = Object(f.a)(n, 2), r = i[0], m = i[1];
                Object(s.useEffect)((function () {
                    (function () {
                        var e = Object(y.a)(g.a.mark((function e() {
                            var t;
                            return g.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, O.a.get("".concat("http://localhost:8000", "/api/blog/featured/"));
                                    case 3:
                                        t = e.sent, m(t.data[0]), e.next = 9;
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
                }), []), Object(s.useEffect)((function () {
                    (function () {
                        var e = Object(y.a)(g.a.mark((function e() {
                            var t;
                            return g.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, O.a.get("".concat("http://localhost:8000", "/api/blog/"));
                                    case 3:
                                        t = e.sent, c(t.data), e.next = 9;
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
                var b = Object(l.b)({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -3500}}),
                    h = Object(l.b)({opacity: 1, from: {opacity: 0}, config: {delay: 1e3, duration: 1e3}});
                return Object(d.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(d.jsx)(l.a.div, {
                        style: h,
                        className: "nav-scroller py-1 mb-2",
                        children: Object(d.jsxs)("nav", {
                            className: "nav d-flex justify-content-between",
                            children: [Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/world",
                                children: "World"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/modelling",
                                children: "Modelling"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/technology",
                                children: "Technology"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/history",
                                children: "History"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/science",
                                children: "Science"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/python",
                                children: "Python"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/travel",
                                children: "Travel"
                            })]
                        })
                    }), Object(d.jsx)("div", {
                        className: "p-4 p-md-5 mb-4 text-white rounded bg-navy",
                        children: Object(d.jsxs)(l.a.div, {
                            style: b,
                            className: "col-md-6 px-0",
                            children: [Object(d.jsx)("h1", {
                                className: "display-4 fst-italic",
                                children: r.title
                            }), Object(d.jsx)("p", {
                                className: "lead my-3",
                                children: r.excerpt
                            }), Object(d.jsx)("p", {
                                className: "lead mb-0",
                                children: Object(d.jsx)(o.b, {
                                    to: "/blog/".concat(r.slug),
                                    className: "text-white fw-bold",
                                    children: "Continue reading..."
                                })
                            })]
                        })
                    }), function () {
                        var e = [], t = [];
                        a.map((function (t) {
                            return e.push(Object(d.jsxs)("div", {
                                className: "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",
                                children: [Object(d.jsxs)("div", {
                                    className: "col p-4 d-flex flex-column position-static",
                                    children: [Object(d.jsx)("strong", {
                                        className: "d-inline-block mb-2 text-primary",
                                        children: (a = t.category, a ? a.charAt(0).toUpperCase() + a.slice(1) : "")
                                    }), Object(d.jsx)("h3", {
                                        className: "mb-0",
                                        children: t.title
                                    }), Object(d.jsxs)("div", {
                                        className: "mb-1 text-muted",
                                        children: [t.day, " ", t.month, " ", t.year]
                                    }), Object(d.jsx)("p", {
                                        className: "card-text mb-auto",
                                        children: t.excerpt
                                    }), Object(d.jsx)(o.b, {
                                        to: "/blog/".concat(t.slug),
                                        className: "stretched-link",
                                        children: "Continue reading"
                                    })]
                                }), Object(d.jsx)("div", {
                                    className: "col-auto d-none d-lg-block",
                                    children: Object(d.jsx)("img", {
                                        width: "200",
                                        height: "250",
                                        src: t.thumbnail,
                                        alt: t.thumbnail_description
                                    })
                                })]
                            }));
                            var a
                        }));
                        for (var s = 0; s < e.length; s += 2) t.push(Object(d.jsxs)("div", {
                            className: "row mb-2",
                            children: [Object(d.jsx)("div", {
                                className: "col-md-6",
                                children: e[s]
                            }), Object(d.jsx)("div", {className: "col-md-6", children: e[s + 1] ? e[s + 1] : null})]
                        }, s));
                        return t
                    }()]
                })
            }, N = function (e) {
                var t = Object(s.useState)({}), a = Object(f.a)(t, 2), c = a[0], n = a[1];
                Object(s.useEffect)((function () {
                    var t = e.match.params.id;
                    (function () {
                        var e = Object(y.a)(g.a.mark((function e() {
                            var a;
                            return g.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, O.a.get("".concat("http://localhost:8000", "/api/blog/").concat(t));
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
                var i;
                return Object(d.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(d.jsx)("h1", {
                        className: "display-2",
                        children: c.title
                    }), Object(d.jsxs)("h2", {
                        className: "text-muted mt-3",
                        children: [(i = c.category, i ? i.charAt(0).toUpperCase() + i.slice(1) : ""), " "]
                    }), Object(d.jsxs)("h4", {children: [c.month, " ", c.day]}), Object(d.jsx)("div", {
                        className: "my-5",
                        dangerouslySetInnerHTML: {__html: c.content}
                    }), Object(d.jsx)("hr", {}), Object(d.jsx)("p", {
                        className: "lead mb-5",
                        children: Object(d.jsx)(o.b, {
                            to: "/blog",
                            className: "font-weight-bold",
                            children: "Back to Blogs"
                        })
                    })]
                })
            }, k = function (e) {
                var t = Object(s.useState)([]), a = Object(f.a)(t, 2), c = a[0], n = a[1], i = Object(s.useState)([]),
                    r = Object(f.a)(i, 2), l = r[0], m = r[1];
                Object(s.useEffect)((function () {
                    var t = e.match.params.id;
                    m(b(t));
                    var a = {headers: {"Content-type": "application/json"}};
                    (function () {
                        var e = Object(y.a)(g.a.mark((function e() {
                            var s;
                            return g.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, O.a.post("".concat("http://localhost:8000", "/api/blog/category/"), {category: t}, a);
                                    case 3:
                                        s = e.sent, n(s.data), e.next = 9;
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
                var b = function (e) {
                    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
                };
                return Object(d.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(d.jsxs)("h3", {
                        className: "display-4",
                        children: [l, " Category"]
                    }), Object(d.jsx)("div", {
                        className: "nav-scroller py-1 mb-2",
                        children: Object(d.jsxs)("nav", {
                            className: "nav d-flex justify-content-between",
                            children: [Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/world",
                                children: "World"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/modelling",
                                children: "Modelling"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/technology",
                                children: "Technology"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/history",
                                children: "History"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/science",
                                children: "Science"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/python",
                                children: "Python"
                            }), Object(d.jsx)(o.b, {
                                className: "p-2 link-secondary",
                                to: "/category/travel",
                                children: "Travel"
                            })]
                        })
                    }), function () {
                        var e = [], t = [];
                        c.map((function (t) {
                            return e.push(Object(d.jsxs)("div", {
                                className: "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",
                                children: [Object(d.jsxs)("div", {
                                    className: "col p-4 d-flex flex-column position-static",
                                    children: [Object(d.jsx)("strong", {
                                        className: "d-inline-block mb-2 text-primary",
                                        children: b(t.category)
                                    }), Object(d.jsx)("h3", {
                                        className: "mb-0",
                                        children: t.title
                                    }), Object(d.jsxs)("div", {
                                        className: "mb-1 text-muted",
                                        children: [t.month, " ", t.day]
                                    }), Object(d.jsx)("p", {
                                        className: "card-text mb-auto",
                                        children: t.excerpt
                                    }), Object(d.jsx)(o.b, {
                                        to: "/blog/".concat(t.slug),
                                        className: "stretched-link",
                                        children: "Continue reading"
                                    })]
                                }), Object(d.jsx)("div", {
                                    className: "col-auto d-none d-lg-block",
                                    children: Object(d.jsx)("img", {
                                        width: "200",
                                        height: "250",
                                        src: t.thumbnail,
                                        alt: t.thumbnail_description
                                    })
                                })]
                            }))
                        }));
                        for (var a = 0; a < e.length; a += 2) t.push(Object(d.jsxs)("div", {
                            className: "row mb-2",
                            children: [Object(d.jsx)("div", {
                                className: "col-md-6",
                                children: e[a]
                            }), Object(d.jsx)("div", {className: "col-md-6", children: e[a + 1] ? e[a + 1] : null})]
                        }, a));
                        return t
                    }()]
                })
            }, _ = a(74), S = a(18), C = [{
                title: "Ca\u0142kiem Nowy Cz\u0142owiek",
                description: "Website created to promote a newly released album. Allow user to listen all the songs and make an order for a physical copy.",
                technologies: "Django, Allauth, Bootstrap, Sendgrid(to deal with order confirmation), deployed on Heroku.",
                icons: [h.g, h.b, S.b, h.a],
                demo_link: "https://kwl-nowy-czlowiek.herokuapp.com/",
                github_link: "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
                image: "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek/blob/main/static/img/preview.png?raw=true",
                demo: "Demo"
            }, {
                title: "Bootcamp project - Tic Tac Toe Game",
                description: "An online based TicTacToe multiplayer game created during python bootcamp.",
                technologies: "Django, Django REST framework, AJAX, Allauth, Bootstrap.",
                icons: [h.g, h.b, S.b, h.e, h.a],
                demo_link: "https://kwl-nowy-czlowiek.herokuapp.com/",
                github_link: "https://github.com/infoshareacademy/jpydzr1-dkmap-django",
                image: "http://www.dunstableroadrunners.org/wp-content/uploads/2019/04/image-coming-soon.jpg",
                demo: "Demo"
            }, {
                title: "Tasty News",
                description: "Website scrapes data from several other websites and shows the titles of the articles with link to main article. In addition it store all articles in database and show some statistics in subpage.",
                technologies: "Django, BeautifulSoup, deployed on Heroku.",
                icons: [h.g, h.b, S.b, h.a],
                demo_link: "https://tasty-news.herokuapp.com/",
                github_link: "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
                image: "https://github.com/mateuszwwwrobel/Tasty_News/raw/master/static/img/preview_1.png",
                demo: "Demo"
            }, {
                title: "Checkers Game",
                description: "Game of Checkers created with python using Kivy framework, ready to be deploy on android device.",
                technologies: "Python and Kivy.",
                icons: [h.g],
                github_link: "https://github.com/mateuszwwwrobel/CheckersGame",
                image: "https://github.com/mateuszwwwrobel/CheckersGame/raw/main/img/screen.png"
            }, {
                title: "March Stones of Aberdeen City",
                description: "A website about March Stones of Aberdeen City. The page displays all march stones on the map, allow user to search by number.",
                technologies: "Django, Bootstrap, JS, Google Map API, deployed on Heroku.",
                demo_link: "https://tasty-news.herokuapp.com/",
                icons: [h.e, h.g, h.b, h.a],
                github_link: "https://march-stones-aberdeen.herokuapp.com/",
                image: "https://github.com/mateuszwwwrobel/March_Stones_Aberdeen/raw/master/static/img/preview.png",
                demo: "Demo"
            }, {
                title: "Personal Website",
                description: "It is a website you are at. Create to share my passions and knowledge on blog and well as an online CV.",
                technologies: "Django, Django REST framework, React, Allauth, Bootstrap.",
                demo_link: "",
                icons: [h.h, h.g, S.b, h.a, h.e],
                github_link: "https://github.com/mateuszwwwrobel/PersonalWebsite-django-backend",
                image: "http://www.dunstableroadrunners.org/wp-content/uploads/2019/04/image-coming-soon.jpg",
                demo: "It is a website you are looking at. Feel free to explore it."
            }], z = function () {
                var e = function (e) {
                    var t = [];
                    return e.forEach((function (e) {
                        t.push(Object(d.jsx)(b.a, {className: "mx-2 spiral", icon: e, size: "lg"}))
                    })), t
                };
                return Object(d.jsx)("div", {
                    className: "container mt-3", children: function () {
                        var t = [];
                        return C.map((function (a) {
                            return t.push(Object(d.jsxs)("div", {
                                className: "text-white bg-navy row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",
                                children: [Object(d.jsxs)("div", {
                                    className: "col p-4 d-flex flex-column position-static",
                                    children: [Object(d.jsx)("div", {children: e(a.icons)}), Object(d.jsx)("h3", {
                                        className: "mb-0 btn-yellow",
                                        children: a.title
                                    }), Object(d.jsx)("p", {
                                        className: "card-text my-4",
                                        children: a.description
                                    }), Object(d.jsx)("strong", {children: "Build with:"}), Object(d.jsx)("p", {
                                        className: "card-text",
                                        children: a.technologies
                                    }), Object(d.jsx)(o.b, {
                                        className: "w-75 btn-yellow text-justify",
                                        target: "_blank",
                                        to: {pathname: a.demo_link, state: {fromDashboard: !0}},
                                        children: a.demo
                                    }), Object(d.jsx)(o.b, {
                                        className: "w-50 btn-yellow",
                                        target: "_blank",
                                        to: {pathname: a.github_link, state: {fromDashboard: !0}},
                                        children: "Github repo"
                                    })]
                                }), Object(d.jsx)(_.a.div, {
                                    transition: {type: "spring", stiffness: 150},
                                    whileHover: {scale: 1.5, transition: {duration: .5}},
                                    className: "col-md-6 d-none d-lg-block p-3",
                                    children: Object(d.jsx)("img", {
                                        className: "image-fit-projects",
                                        src: a.image,
                                        alt: "project preview"
                                    })
                                })]
                            }))
                        })), t
                    }()
                })
            }, D = function () {
                var e = c.a.useState(!1), t = Object(f.a)(e, 2), a = t[0], s = t[1];
                return Object(d.jsx)(_.a.div, {
                    whileHover: {scale: 1.1},
                    whileTap: {scale: .9},
                    style: {x: -250, y: -100},
                    className: "contact-box",
                    onClick: function () {
                        return s(!a)
                    },
                    animate: {x: 0, y: 0, backgroundColor: "#14213D", boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)"},
                    transition: {type: "spring", damping: 10, stiffness: 10},
                    children: Object(d.jsxs)("div", {
                        className: "btn-yellow",
                        children: [Object(d.jsx)("h4", {children: "Feel free to contact with me via email address specify below:"}), Object(d.jsx)("p", {children: "mateusz.wwwrobel@gmail.com"})]
                    })
                })
            }, A = [{
                title: "Junior Python Developer",
                school: "InfoShare Academy",
                start_date: "Aug 2020",
                finish_date: "Mar 2021",
                final_project: "",
                description: "The training comprised 240 workshop hours. It provided knowledge and practical skills in the field of: Python, Django, REST API, Docker, Jenkins, SQL, Scrum."
            }, {
                title: "Web Design",
                school: "North East Scotland College",
                start_date: "Sep 2019",
                finish_date: "Mar 2020",
                description: "The training provided knowledge and practical skills in the field of: HTML, CSS, basic JavaScript."
            }, {
                title: "MSc Drilling and Geoengineering",
                school: "AGH University of Science and Technology",
                start_date: "Feb 2016",
                finish_date: "Jun 2017",
                final_project: "Diploma thesis: \u201cSurfactants in completion and workover fluids.\u201d",
                description: "Postgraduate studies whose program included issues related to oil, geothermal and geoengineering drilling as well as different "
            }, {
                title: "BSc Mining and Geology",
                school: "AGH University of Science and Technology",
                start_date: "Oct 2012",
                finish_date: "Feb 2016",
                final_project: "Diploma thesis: `Alternative method of using a baryte from drilling mud`",
                description: "Undergraduate engineering studies. The studies covered general issues in the field of engineering(fluid mechanics, thermodynamics, maths, geophysics), geology, construction, as well as the design of drilling works."
            }], T = [{
                title: "Freelance Software Developer",
                company: "MW Software Development Services",
                start_date: "Jan 2021",
                finish_date: "now",
                description: "Web application development. Process automation."
            }, {
                title: "Field and Laboratory Technician",
                company: "Raeburn Drilling and Geotechnical",
                start_date: "Jan 2020",
                finish_date: "now",
                description: "Field based and laboratory soil and rock tests."
            }, {
                title: "Sub-Contractor",
                company: "MW Construction",
                start_date: "Jun 2018",
                finish_date: "Jan 2020",
                description: "Construction of detached, semi-detached houses as well as brick walls."
            }, {
                title: "Assistant Engineering Surveyor",
                company: "G79 Geodesy",
                start_date: "Jan 2018",
                finish_date: "Jun 2018",
                description: "Land surveys for updating maps, boundary surveys, inventory surveys, setting out and as-built surveys."
            }], M = function () {
                var e = c.a.useState(!1), t = Object(f.a)(e, 2),
                    a = (t[0], t[1], Object(l.b)({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -3500}}));
                return Object(d.jsxs)("div", {
                    className: "container mt-3",
                    children: [Object(d.jsx)("div", {
                        className: "p-4 p-md-5 mb-4 text-white rounded bg-navy",
                        children: Object(d.jsxs)("div", {
                            className: "row px-0",
                            children: [Object(d.jsxs)("div", {
                                className: "col-md-6",
                                children: [Object(d.jsx)(l.a.h1, {
                                    style: a,
                                    className: "display-4 fst-italic",
                                    children: "Every day brings new choices."
                                }), Object(d.jsx)(l.a.p, {
                                    style: a,
                                    className: "lead my-3",
                                    children: "`All things are diffucult before they are easy.`"
                                })]
                            }), Object(d.jsx)("div", {
                                className: "col-md-6 d-none d-md-block",
                                children: Object(d.jsx)("img", {
                                    className: "image-fit",
                                    src: "https://www.w3schools.com/w3css/img_lights.jpg",
                                    alt: "myself"
                                })
                            })]
                        })
                    }), Object(d.jsx)("div", {
                        className: "row", children: Object(d.jsxs)("div", {
                            className: "col-md-12",
                            children: [Object(d.jsx)("h3", {
                                className: "text-center",
                                children: "About Me"
                            }), Object(d.jsx)("p", {
                                className: "text-justify",
                                children: "My objectives are to develop myself as an employee as well as a freelancer, learn new technologies and improve quality of my products. As a junior developer, I constantly work on various projects, learning new solutions and developing myself in programming. It is my great passion that I have discovered in myself and I plan to pursue it."
                            }), Object(d.jsx)("p", {
                                className: "text-justify",
                                children: "I am open-minded, hardworking and reliable person with a strong technical education, who possesses self-discipline, ability to work as a team member, good communication skills. I am well organized what is one of my greatest advantages."
                            }), Object(d.jsx)("p", {
                                className: "text-justify",
                                children: "I like video editing. I prefer to edit a film of my adventures or vacations than take hundreds of pictures. You can see some of my videos on my Youtube channel."
                            }), Object(d.jsx)("p", {
                                className: "text-justify",
                                children: "I really like sports especially football, hiking and mountain biking. Maybe it is time for another ride..."
                            }), Object(d.jsx)("p", {
                                className: "text-justify",
                                children: "If you need any further information, please do not hesitate to contact me."
                            })]
                        })
                    }), Object(d.jsxs)("div", {
                        className: "row",
                        children: [Object(d.jsxs)("div", {
                            className: "col-md-6",
                            children: [Object(d.jsx)("h3", {
                                className: "text-center",
                                children: "Experience"
                            }), function () {
                                var e = [];
                                return T.map((function (t) {
                                    return e.push(Object(d.jsxs)("div", {
                                        className: "card mb-3 bg-yellow",
                                        children: [Object(d.jsx)("h5", {
                                            className: "card-header",
                                            children: t.title
                                        }), Object(d.jsxs)("div", {
                                            className: "card-body text-white bg-navy",
                                            children: [Object(d.jsx)("h6", {
                                                className: "card-title",
                                                children: t.company
                                            }), Object(d.jsxs)("p", {
                                                className: "text-muted",
                                                children: [t.start_date, " - ", t.finish_date]
                                            }), Object(d.jsxs)("div", {
                                                className: "expand w-50 mb-2",
                                                children: [Object(d.jsx)(b.a, {
                                                    className: "mx-1",
                                                    icon: S.a,
                                                    size: "lg"
                                                }), "Expand description"]
                                            }), Object(d.jsx)("div", {
                                                className: "expandable",
                                                children: Object(d.jsx)("p", {
                                                    className: "card-text",
                                                    children: t.description
                                                })
                                            })]
                                        })]
                                    }))
                                })), e
                            }()]
                        }), Object(d.jsxs)("div", {
                            className: "col-md-6",
                            children: [Object(d.jsx)("h3", {className: "text-center", children: "Education"}), function () {
                                var e = [];
                                return A.map((function (t) {
                                    return e.push(Object(d.jsxs)("div", {
                                        className: "card mb-3 bg-yellow",
                                        children: [Object(d.jsx)("h5", {
                                            className: "card-header",
                                            children: t.title
                                        }), Object(d.jsxs)("div", {
                                            className: "card-body text-white bg-navy",
                                            children: [Object(d.jsx)("h6", {
                                                className: "card-title",
                                                children: t.school
                                            }), Object(d.jsxs)("p", {
                                                className: "text-muted",
                                                children: [t.start_date, " - ", t.finish_date]
                                            }), Object(d.jsxs)("div", {
                                                className: "expand w-50 mb-2",
                                                children: [Object(d.jsx)(b.a, {
                                                    className: "mx-1",
                                                    icon: S.a,
                                                    size: "lg"
                                                }), "Expand description"]
                                            }), Object(d.jsxs)("div", {
                                                className: "expandable",
                                                children: [Object(d.jsx)("p", {
                                                    className: "card-text",
                                                    children: t.description
                                                }), Object(d.jsx)("p", {className: "card-text", children: t.final_project})]
                                            })]
                                        })]
                                    }))
                                })), e
                            }()]
                        })]
                    })]
                })
            }, I = function () {
                return Object(d.jsx)(o.a, {
                    children: Object(d.jsx)(p, {
                        children: Object(d.jsxs)(r.c, {
                            children: [Object(d.jsx)(r.a, {
                                exact: !0,
                                path: "/",
                                component: u
                            }), Object(d.jsx)(r.a, {exact: !0, path: "/blog", component: w}), Object(d.jsx)(r.a, {
                                exact: !0,
                                path: "/category/:id",
                                component: k
                            }), Object(d.jsx)(r.a, {
                                exact: !0,
                                path: "/blog/:id",
                                component: N
                            }), Object(d.jsx)(r.a, {
                                exact: !0,
                                path: "/portfolio",
                                component: z
                            }), Object(d.jsx)(r.a, {
                                exact: !0,
                                path: "/contact",
                                component: D
                            }), Object(d.jsx)(r.a, {exact: !0, path: "/about", component: M})]
                        })
                    })
                })
            };
        i.a.render(Object(d.jsx)(c.a.StrictMode, {children: Object(d.jsx)(I, {})}), document.getElementById("root"))
    }
}, [[72, 1, 2]]]);
//# sourceMappingURL=main.fbbf5bd4.chunk.js.map