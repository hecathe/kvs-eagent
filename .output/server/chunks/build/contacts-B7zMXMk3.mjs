import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  props: {
    wide: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-c0fea245>`);
  if ($props.wide) {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  } else {
    _push(`<div class="container" data-v-c0fea245>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  }
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c0fea245"]]);
const _sfc_main$1 = {
  props: {
    manager: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "manager-card" }, _attrs))} data-v-482e6c09><div class="manager-card__image" data-v-482e6c09><img${ssrRenderAttr("src", $props.manager.img)} alt="" data-v-482e6c09></div><div class="manager-card__info" data-v-482e6c09><div class="manager-card__wrap" data-v-482e6c09><div class="manager-card__name" data-v-482e6c09>${ssrInterpolate($props.manager.name)}</div><div class="manager-card__role" data-v-482e6c09>${ssrInterpolate($props.manager.role)}</div></div><div class="manager-card__wrap" data-v-482e6c09><a class="manager-card__link"${ssrRenderAttr("href", `tel:${$props.manager.phone_mobile}`)} data-v-482e6c09>${ssrInterpolate($props.manager.phone_mobile)}</a><a class="manager-card__link"${ssrRenderAttr("href", `tel:${$props.manager.phone_office}`)} data-v-482e6c09>${ssrInterpolate($props.manager.phone_office)}, \u0434\u043E\u0431. ${ssrInterpolate($props.manager.phone_office_add)}</a></div><div class="manager-card__wrap" data-v-482e6c09><a class="manager-card__link manager-card__link_mail manager-card__link_arrow"${ssrRenderAttr("href", `mailto:${$props.manager.email}`)} data-v-482e6c09><span data-v-482e6c09>${ssrInterpolate($props.manager.email)}</span><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-482e6c09><path d="M4.375 2.125L9.09369 6.84369L4.375 11.5624" stroke="#F4691B" stroke-width="2" data-v-482e6c09></path></svg></a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ManagerCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-482e6c09"]]);
const _sfc_main = {
  data() {
    return {
      managers: [
        {
          name: "\u042E\u0440\u0447\u0435\u043D\u043A\u043E \u0415\u0432\u0433\u0435\u043D\u0438\u044F",
          role: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u043E\u0442\u0434\u0435\u043B\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0430\u0436",
          phone_mobile: "+7 900 123 1234",
          phone_office: "8 812 210 3800",
          phone_office_add: "000",
          email: "a.brel@kvsspb.ru",
          img: "/kvs-eagent/images/manager.jpg"
        },
        {
          name: "\u0413\u043E\u0440\u043B\u043E\u0432\u0430 \u042E\u043B\u0438\u044F",
          role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043E\u0442\u0434\u0435\u043B\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0430\u0436",
          phone_mobile: "+7 900 123 1234",
          phone_office: "8 812 210 3800",
          phone_office_add: "000",
          email: "a.brel@kvsspb.ru",
          img: "/kvs-eagent/images/manager.jpg"
        },
        {
          name: "\u0413\u0443\u0440\u044C\u044F\u043D\u043E\u0432\u0430 \u041D\u0430\u0442\u0430\u043B\u044C\u044F",
          role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043E\u0442\u0434\u0435\u043B\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0430\u0436",
          phone_mobile: "+7 900 123 1234",
          phone_office: "8 812 210 3800",
          phone_office_add: "000",
          email: "a.brel@kvsspb.ru",
          img: "/kvs-eagent/images/manager.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheSection = __nuxt_component_0;
  const _component_ManagerCard = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main contacts" }, _attrs))} data-v-83dca5a0>`);
  _push(ssrRenderComponent(_component_TheSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="title-h1" data-v-83dca5a0${_scopeId}>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 Agent \u041A\u0412\u0421</h1><ul class="contacts__list manager-list" data-v-83dca5a0${_scopeId}><!--[-->`);
        ssrRenderList($data.managers, (manager, index) => {
          _push2(`<li class="manager-list__item" data-v-83dca5a0${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ManagerCard, { manager }, null, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          createVNode("h1", { class: "title-h1" }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 Agent \u041A\u0412\u0421"),
          createVNode("ul", { class: "contacts__list manager-list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.managers, (manager, index) => {
              return openBlock(), createBlock("li", {
                class: "manager-list__item",
                key: index
              }, [
                createVNode(_component_ManagerCard, { manager }, null, 8, ["manager"])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TheSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="title-h2" data-v-83dca5a0${_scopeId}>\u041E\u0431\u0449\u0430\u044F \u043F\u043E\u0447\u0442\u0430 \u043E\u0442\u0434\u0435\u043B\u0430</h2><a class="link-gey" href="mailto:an@kvsspb.ru" data-v-83dca5a0${_scopeId}>an@kvsspb.ru</a>`);
      } else {
        return [
          createVNode("h2", { class: "title-h2" }, "\u041E\u0431\u0449\u0430\u044F \u043F\u043E\u0447\u0442\u0430 \u043E\u0442\u0434\u0435\u043B\u0430"),
          createVNode("a", {
            class: "link-gey",
            href: "mailto:an@kvsspb.ru"
          }, "an@kvsspb.ru")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-83dca5a0"]]);

export { contacts as default };
//# sourceMappingURL=contacts-B7zMXMk3.mjs.map
