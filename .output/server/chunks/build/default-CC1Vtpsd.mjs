import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Dgb6-tnq.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';

const _sfc_main$a = {
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-user" }, _attrs))} data-v-d7192621><span class="header-user__name" data-v-d7192621>${ssrInterpolate($props.user.name)}</span><span class="header-user__title" data-v-d7192621>${ssrInterpolate($props.user.title)}</span></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderUser.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-d7192621"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.9997 2.625C14.333 2.625 16.1664 4.45833 16.1664 6.79166V7.625C16.1664 9.95833 14.333 11.7917 11.9997 11.7917C9.66635 11.7917 7.83301 9.95833 7.83301 7.625V6.79166C7.83301 4.45833 9.66635 2.625 11.9997 2.625ZM19.9164 17.125C19.1664 15.375 17.833 13.9583 16.1664 13.0416C15.083 14.0416 13.6664 14.7083 11.9997 14.7083C10.333 14.7083 8.91635 14.0416 7.83301 13.0416C6.16635 13.9583 4.83301 15.375 4.08301 17.125C5.74968 19.7083 8.66635 21.375 11.9997 21.375C15.333 21.375 18.2497 19.7083 19.9164 17.125Z" fill="var(--currentColor, #FFFFFF)"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/User.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="logout"><g id="Group 1"><path id="Vector" d="M21.8602 11.1442L21.8664 11.136C21.8766 11.1232 21.8864 11.1102 21.8957 11.0969C21.9012 11.0883 21.9063 11.0797 21.9114 11.0712C21.9164 11.0626 21.9215 11.0544 21.9262 11.0458C21.9309 11.0372 21.9379 11.0223 21.9434 11.0106C21.9489 10.9989 21.9493 10.9981 21.952 10.9915C21.9582 10.977 21.9633 10.9626 21.968 10.9481L21.9727 10.9348C21.9785 10.9162 21.9833 10.8973 21.9871 10.8782C22.0083 10.7767 22.0038 10.6715 21.9741 10.5721C21.9445 10.4728 21.8905 10.3823 21.8172 10.309L18.6921 7.18388C18.5748 7.06665 18.4158 7.00081 18.2499 7.00085C18.0841 7.00088 17.9251 7.06679 17.8079 7.18407C17.6907 7.30135 17.6248 7.4604 17.6249 7.62622C17.6249 7.79204 17.6908 7.95106 17.8081 8.06829L19.8675 10.125H13.4583C13.2925 10.125 13.1336 10.1909 13.0163 10.3081C12.8991 10.4253 12.8333 10.5843 12.8333 10.75C12.8333 10.9158 12.8991 11.0748 13.0163 11.192C13.1336 11.3092 13.2925 11.3751 13.4583 11.3751H19.8648L17.8073 13.4326C17.7468 13.4901 17.6985 13.5591 17.6651 13.6356C17.6318 13.712 17.6141 13.7944 17.613 13.8778C17.612 13.9612 17.6277 14.044 17.6591 14.1213C17.6906 14.1986 17.7372 14.2687 17.7962 14.3277C17.8553 14.3867 17.9255 14.4332 18.0028 14.4646C18.0801 14.496 18.1629 14.5116 18.2463 14.5105C18.3297 14.5094 18.412 14.4916 18.4885 14.4582C18.5649 14.4248 18.6339 14.3764 18.6913 14.3159L21.8114 11.1962C21.8286 11.1798 21.8449 11.1625 21.8602 11.1442Z" fill="var(--currentColor, #FFFFFF)"></path><path id="Vector_2" d="M15.7081 12.8337C15.5423 12.8337 15.3834 12.8995 15.2661 13.0167C15.1489 13.1339 15.0831 13.2929 15.0831 13.4587V17.2088C15.0827 17.4849 14.9728 17.7496 14.7776 17.9448C14.5824 18.14 14.3177 18.2499 14.0416 18.2503H11.3333V5.33375C11.3321 4.98434 11.2222 4.64396 11.0188 4.35989C10.8154 4.07581 10.5285 3.86213 10.1981 3.74853L8.70311 3.24968H14.0416C14.3178 3.2501 14.5825 3.36001 14.7777 3.55531C14.973 3.75062 15.0828 4.01537 15.0831 4.29152V8.04166C15.0831 8.20743 15.1489 8.3664 15.2661 8.48362C15.3834 8.60083 15.5423 8.66668 15.7081 8.66668C15.8739 8.66668 16.0329 8.60083 16.1501 8.48362C16.2673 8.3664 16.3331 8.20743 16.3331 8.04166V4.29152C16.3327 3.68387 16.0912 3.10122 15.6615 2.67151C15.2319 2.2418 14.6493 2.00015 14.0416 1.99963H4.66623C4.22428 2.00015 3.80059 2.176 3.48815 2.48858C3.17572 2.80116 3.00007 3.22494 2.99976 3.66689V18.6675C3.00095 19.0168 3.11085 19.357 3.31421 19.641C3.51756 19.925 3.80428 20.1387 4.13457 20.2523L9.15 21.9223C9.31716 21.9745 9.49131 22.0008 9.66643 22.0004C10.1083 21.9999 10.532 21.8241 10.8445 21.5116C11.157 21.1992 11.3328 20.7755 11.3333 20.3336V19.5003H14.0416C14.6492 19.4998 15.2318 19.2582 15.6614 18.8286C16.091 18.399 16.3326 17.8164 16.3331 17.2088V13.4587C16.3331 13.2929 16.2673 13.1339 16.1501 13.0167C16.0329 12.8995 15.8739 12.8337 15.7081 12.8337Z" fill="var(--currentColor, #FFFFFF)"></path></g></g></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/Logout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_SvgUser = __nuxt_component_1$2;
  const _component_SvgLogout = __nuxt_component_2$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-user-actions" }, _attrs))} data-v-962191d7><li class="header-user-actions__item" data-v-962191d7>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "header-user-actions__link header-user-actions__link_orange",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SvgUser, null, null, _parent2, _scopeId));
        _push2(`<span class="header-user-actions__description" data-v-962191d7${_scopeId}>\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</span>`);
      } else {
        return [
          createVNode(_component_SvgUser),
          createVNode("span", { class: "header-user-actions__description" }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="header-user-actions__item" data-v-962191d7>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "header-user-actions__link",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SvgLogout, null, null, _parent2, _scopeId));
        _push2(`<span class="header-user-actions__description" data-v-962191d7${_scopeId}>\u0412\u044B\u0439\u0442\u0438</span>`);
      } else {
        return [
          createVNode(_component_SvgLogout),
          createVNode("span", { class: "header-user-actions__description" }, "\u0412\u044B\u0439\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderUserActions.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-962191d7"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slogan" }, _attrs))} data-v-9440d503><span class="slogan__item slogan__item_primary" data-v-9440d503>\u0410\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \xAB\u041A\u0412\u0421\xBB. </span><span class="slogan__item" data-v-9440d503>\u0421\u0442\u0440\u043E\u0438\u043C \u043C\u0438\u0440 \u2014 \u0441\u0442\u0440\u043E\u0438\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F!</span></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slogan.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-9440d503"]]);
const _sfc_main$5 = {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-menu-main" }, _attrs))} data-v-6d91df26><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<li class="header-menu-main__item" data-v-6d91df26>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "header-menu-main__link",
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderMenuMain.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-6d91df26"]]);
const _sfc_main$4 = {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-menu-top" }, _attrs))} data-v-8bf3a069><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<li class="header-menu-top__item" data-v-8bf3a069>`);
    if (item.icon) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "header-menu-top__link",
        to: item.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-8bf3a069${_scopeId}> ${ssrInterpolate(item.title)}`);
          } else {
            return [
              createVNode("img", {
                src: item.icon,
                alt: item.title
              }, null, 8, ["src", "alt"]),
              createTextVNode(" " + toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "header-menu-top__link",
        to: item.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderMenuTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-8bf3a069"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='104'%20height='93'%20viewBox='0%200%20104%2093'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20clip-path='url(%23clip0_4002_3646)'%3e%3cpath%20d='M0%200L103.363%2046.1291L0%2092.5239V0Z'%20fill='%23191B1E'%20/%3e%3cpath%20d='M33.1537%2072.9053L23.6434%2077.1568L15.9654%2056.1654V80.6111L4.7832%2085.6264V6.78125L15.9654%2011.7911V33.8454L22.4698%2014.7029L32.888%2019.3473L39.0493%2058.5291L44.4189%2024.49L68.3831%2035.2016V40.1505L54.5382%2033.9671L53.9625%2037.6262L68.3831%2044.0864V57.0954L49.5505%2065.5816L51.2666%2054.6984L60.6663%2050.4414L49.5505%2045.4648L46.135%2067.0818L33.4527%2072.767L25.7525%2032.9154L21.9827%2043.71L33.1537%2072.9053Z'%20fill='white'%20/%3e%3cpath%20d='M72.374%2036.9897L92.8396%2046.1181L72.374%2055.2797V36.9897Z'%20fill='%23F4691B'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4002_3646'%3e%3crect%20width='103.518'%20height='93'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_1 = "" + buildAssetsURL("eagent.Cc24yuK4.svg");
const _sfc_main$3 = {
  data() {
    return {
      opened: false,
      menu_top: [
        {
          title: "\u0411\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u0438\u0439",
          link: "#"
        },
        {
          title: "\u0410\u043A\u0446\u0438\u0438",
          link: "#"
        },
        {
          title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
          link: "#"
        },
        {
          title: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
          link: "#"
        },
        {
          title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
          link: "#"
        },
        {
          icon: "icons/school.svg",
          link: "#"
        },
        {
          icon: "icons/telegram-black.svg",
          link: "#"
        }
      ],
      menu_bottom: [
        {
          title: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435",
          link: "#"
        },
        {
          title: "\u0428\u0430\u0445\u043C\u0430\u0442\u043A\u0430",
          link: "#"
        },
        {
          title: "\u041C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
          link: "#"
        },
        {
          title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u043A\u0430\u0437",
          link: "#"
        },
        {
          title: "\u041C\u043E\u0438 \u0441\u0434\u0435\u043B\u043A\u0438",
          link: "#"
        }
      ],
      user: {
        name: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u0432 \u041A\u043E\u043D\u0442\u0435\u043D\u0442",
        title: "STAFF KVS"
      }
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_AppHeaderUser = __nuxt_component_1$3;
  const _component_AppHeaderUserActions = __nuxt_component_2;
  const _component_Slogan = __nuxt_component_3;
  const _component_AppHeaderMenuMain = __nuxt_component_4;
  const _component_AppHeaderMenuTop = __nuxt_component_5;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-266410ce>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "header__logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-266410ce${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header__mobile-wrap" data-v-266410ce>`);
  _push(ssrRenderComponent(_component_AppHeaderUser, { user: $data.user }, null, _parent));
  _push(`<button class="${ssrRenderClass([{ open: $data.opened }, "header__burger"])}" data-v-266410ce><span data-v-266410ce></span></button></div>`);
  if ($data.opened) {
    _push(`<div class="header__mobile-menu" data-v-266410ce>`);
    _push(ssrRenderComponent(_component_AppHeaderUserActions, null, null, _parent));
    _push(ssrRenderComponent(_component_Slogan, null, null, _parent));
    _push(`<div class="header__mobile-lists" data-v-266410ce>`);
    _push(ssrRenderComponent(_component_AppHeaderMenuMain, { list: $data.menu_bottom }, null, _parent));
    _push(ssrRenderComponent(_component_AppHeaderMenuTop, { list: $data.menu_top }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="header__top" data-v-266410ce><div class="header__wrapper" data-v-266410ce>`);
  _push(ssrRenderComponent(_component_AppHeaderMenuTop, { list: $data.menu_top }, null, _parent));
  _push(ssrRenderComponent(_component_Slogan, null, null, _parent));
  _push(`</div></div><div class="header__bottom" data-v-266410ce><div class="header__wrapper" data-v-266410ce>`);
  _push(ssrRenderComponent(_component_AppHeaderMenuMain, { list: $data.menu_bottom }, null, _parent));
  _push(`<div class="header__user-wrap" data-v-266410ce><img class="header__eagent"${ssrRenderAttr("src", _imports_1)} alt="" data-v-266410ce>`);
  _push(ssrRenderComponent(_component_AppHeaderUser, { user: $data.user }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeaderUserActions, null, null, _parent));
  _push(`</div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-266410ce"]]);
const _sfc_main$2 = {
  props: {
    socials: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "social-list" }, _attrs))} data-v-393192c5><!--[-->`);
  ssrRenderList($props.socials, (item, index) => {
    _push(`<li class="social-list__item" data-v-393192c5>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "social-list__link",
      to: item.link,
      target: "_blank",
      style: { backgroundImage: `url(${item.icon})` }
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-393192c5"]]);
const _sfc_main$1 = {
  data() {
    return {
      social: [
        {
          link: "#",
          icon: "icons/telegram-white.svg"
        },
        {
          link: "#",
          icon: "icons/youtube.svg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_SocialList = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-e913981e><div class="container" data-v-e913981e><div class="footer__item" data-v-e913981e>2020, \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u041A\u0412\u0421\xBB</div><div class="footer__item" data-v-e913981e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "footer__link",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__item" data-v-e913981e>`);
  _push(ssrRenderComponent(_component_SocialList, { socials: $data.social }, null, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e913981e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CC1Vtpsd.mjs.map
