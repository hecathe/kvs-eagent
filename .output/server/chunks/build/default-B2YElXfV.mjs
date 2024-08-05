import { _ as __nuxt_component_0$1 } from './nuxt-link-Dgb6-tnq.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';

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
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-menu-top" }, _attrs))} data-v-1e23d5b7><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<li class="header-menu-top__item" data-v-1e23d5b7>`);
    if (item.icon) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "header-menu-top__link",
        to: item.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-1e23d5b7${_scopeId}> ${ssrInterpolate(item.title)}`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/HeaderMenuTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-1e23d5b7"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slogan" }, _attrs))} data-v-b5a847bd><span class="slogan__item slogan__item_primary" data-v-b5a847bd>\u0410\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \xAB\u041A\u0412\u0421\xBB.</span><span class="slogan__item" data-v-b5a847bd>\u0421\u0442\u0440\u043E\u0438\u043C \u043C\u0438\u0440 \u2014 \u0441\u0442\u0440\u043E\u0438\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F!</span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slogan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b5a847bd"]]);
const _sfc_main$2 = {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-menu-main" }, _attrs))} data-v-0eeadb18><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<li class="header-menu-main__item" data-v-0eeadb18>`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/HeaderMenuMain.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0eeadb18"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='104'%20height='93'%20viewBox='0%200%20104%2093'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20clip-path='url(%23clip0_4002_3646)'%3e%3cpath%20d='M0%200L103.363%2046.1291L0%2092.5239V0Z'%20fill='%23191B1E'%20/%3e%3cpath%20d='M33.1537%2072.9053L23.6434%2077.1568L15.9654%2056.1654V80.6111L4.7832%2085.6264V6.78125L15.9654%2011.7911V33.8454L22.4698%2014.7029L32.888%2019.3473L39.0493%2058.5291L44.4189%2024.49L68.3831%2035.2016V40.1505L54.5382%2033.9671L53.9625%2037.6262L68.3831%2044.0864V57.0954L49.5505%2065.5816L51.2666%2054.6984L60.6663%2050.4414L49.5505%2045.4648L46.135%2067.0818L33.4527%2072.767L25.7525%2032.9154L21.9827%2043.71L33.1537%2072.9053Z'%20fill='white'%20/%3e%3cpath%20d='M72.374%2036.9897L92.8396%2046.1181L72.374%2055.2797V36.9897Z'%20fill='%23F4691B'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4002_3646'%3e%3crect%20width='103.518'%20height='93'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$1 = {
  data() {
    return {
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
          icon: "/icons/school.svg",
          link: "#"
        },
        {
          icon: "/icons/telegram.svg",
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
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_AppHeaderMenuTop = __nuxt_component_1;
  const _component_Slogan = __nuxt_component_2;
  const _component_AppHeaderMenuMain = __nuxt_component_3;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-4b74646c>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "header__logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4b74646c${_scopeId}>`);
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
  _push(`<div class="header__top" data-v-4b74646c>`);
  _push(ssrRenderComponent(_component_AppHeaderMenuTop, { list: $data.menu_top }, null, _parent));
  _push(ssrRenderComponent(_component_Slogan, null, null, _parent));
  _push(`</div><div class="header__bottom" data-v-4b74646c>`);
  _push(ssrRenderComponent(_component_AppHeaderMenuMain, { list: $data.menu_bottom }, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4b74646c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
//# sourceMappingURL=default-B2YElXfV.mjs.map
