import { _ as __nuxt_component_0 } from './TheSection-B7VR-KVm.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-ec53b814><input class="input__field"${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("type", $props.type)} data-v-ec53b814><label class="${ssrRenderClass([{ "not-empty": $props.value !== "" }, "input__label"])}"${ssrRenderAttr("for", $props.id)} data-v-ec53b814>${ssrInterpolate($props.label)}</label></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ec53b814"]]);
const _sfc_main$1 = {
  props: {
    table: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<table${ssrRenderAttrs(mergeProps({ class: "table" }, _attrs))} data-v-0fba712b><thead class="table__head" data-v-0fba712b><tr class="table__row" data-v-0fba712b><!--[-->`);
  ssrRenderList($props.table.thead, (item, index) => {
    _push(`<th class="table__cell table__cell_head" data-v-0fba712b>${ssrInterpolate(item)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody class="table__body" data-v-0fba712b><!--[-->`);
  ssrRenderList($props.table.clients, (client, index) => {
    _push(`<tr class="table__row" data-v-0fba712b><!--[-->`);
    ssrRenderList(client, (clientInfo, index2) => {
      _push(`<td class="table__cell" data-v-0fba712b>${ssrInterpolate(clientInfo)}</td>`);
    });
    _push(`<!--]--></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0fba712b"]]);
const _sfc_main = {
  data() {
    return {
      table: {
        thead: [
          "\u0418\u043C\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
          "\u0417\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D \u0434\u043E",
          "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          "\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
          "\u0441\u0442\u0430\u0442\u0443\u0441 \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
          "\u0434\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u0438",
          "\u0430\u0433\u0435\u043D\u0442"
        ],
        clients: [
          {
            name: "\u0438\u043C\u044F 1",
            fixed: "10/10",
            phone: "7900",
            birth: "1/1/2",
            fixed_status: "1/1/2",
            fixed_first: "112/1/2",
            agent: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C.\u043C"
          },
          {
            name: "\u0438\u043C\u044F 1",
            fixed: "10/10",
            phone: "7900",
            birth: "1/1/2",
            fixed_status: "1/1/2",
            fixed_first: "112/1/2",
            agent: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C.\u043C"
          },
          {
            name: "\u0438\u043C\u044F 1",
            fixed: "10/10",
            phone: "7900",
            birth: "1/1/2",
            fixed_status: "1/1/2",
            fixed_first: "112/1/2",
            agent: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C.\u043C"
          },
          {
            name: "\u0438\u043C\u044F 1",
            fixed: "10/10",
            phone: "7900",
            birth: "1/1/2",
            fixed_status: "1/1/2",
            fixed_first: "112/1/2",
            agent: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C.\u043C"
          },
          {
            name: "\u0438\u043C\u044F 1",
            fixed: "10/10",
            phone: "7900",
            birth: "1/1/2",
            fixed_status: "1/1/2",
            fixed_first: "112/1/2",
            agent: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C.\u043C"
          }
        ]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheSection = __nuxt_component_0;
  const _component_AppInput = __nuxt_component_1;
  const _component_AppTable = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main clients" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="title-h1"${_scopeId}>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</h1><form${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppInput, {
          id: "fio",
          label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F *"
        }, null, _parent2, _scopeId));
        _push2(`</form>`);
      } else {
        return [
          createVNode("h1", { class: "title-h1" }, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"),
          createVNode("form", null, [
            createVNode(_component_AppInput, {
              id: "fio",
              label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F *"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TheSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppTable, { table: $data.table }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AppTable, { table: $data.table }, null, 8, ["table"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clients = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { clients as default };
//# sourceMappingURL=clients-khcagcKS.mjs.map
