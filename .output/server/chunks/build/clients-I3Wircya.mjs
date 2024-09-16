import { _ as __nuxt_component_0 } from './TheSection-B7VR-KVm.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    border: {
      type: Boolean,
      default: false
    },
    threeColumns: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({
    class: ["form", {
      "form_border": $props.border,
      "form_grid-3": $props.threeColumns
    }]
  }, _attrs))} data-v-0e0cfc43>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-0e0cfc43"]]);
const _sfc_main$3 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-94d564ac><input class="input__field"${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("type", $props.type)} data-v-94d564ac><label class="${ssrRenderClass([{ "not-empty": $props.value !== "" }, "input__label"])}"${ssrRenderAttr("for", $props.id)} data-v-94d564ac>${ssrInterpolate($props.label)}</label></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Input.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-94d564ac"]]);
const _sfc_main$2 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: this.value,
      opened: false
    };
  },
  methods: {
    toggleOpenClose() {
      this.opened ? this.close : this.open;
    },
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["select", { "select_opened": $data.opened }]
  }, _attrs))} data-v-450a7d60><div class="select__field" data-v-450a7d60><div class="select__label" data-v-450a7d60>${ssrInterpolate($props.label)}</div><div class="select__value" data-v-450a7d60>${ssrInterpolate($props.value)}</div></div><ul class="select__options" data-v-450a7d60><!--[-->`);
  ssrRenderList($props.options, (option, index) => {
    _push(`<li class="select__option" data-v-450a7d60>${ssrInterpolate(option)}</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-450a7d60"]]);
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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0fba712b"]]);
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
      },
      regions: [
        "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
        "\u041C\u043E\u0441\u043A\u0432\u0430",
        "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433"
      ],
      selected: this.regions
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheSection = __nuxt_component_0;
  const _component_AppForm = __nuxt_component_1;
  const _component_AppInput = __nuxt_component_2;
  const _component_AppSelect = __nuxt_component_3;
  const _component_AppTable = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main clients" }, _attrs))} data-v-d0cacbba>`);
  _push(ssrRenderComponent(_component_TheSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="title-h1" data-v-d0cacbba${_scopeId}>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</h1>`);
        _push2(ssrRenderComponent(_component_AppForm, {
          border: true,
          "three-columns": true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "lastname",
                label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "name",
                label: "\u0418\u043C\u044F"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "fname",
                label: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "phone",
                label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                type: "tel"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "add-phone",
                label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                type: "tel"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "add-phone-2",
                label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D 2",
                type: "tel"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppInput, {
                id: "date-birth",
                label: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
                type: "text"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_AppSelect, {
                class: "form__field form__field_span-2",
                options: $data.regions,
                label: "\u0420\u0435\u0433\u0438\u043E\u043D"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AppInput, {
                  id: "lastname",
                  label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"
                }),
                createVNode(_component_AppInput, {
                  id: "name",
                  label: "\u0418\u043C\u044F"
                }),
                createVNode(_component_AppInput, {
                  id: "fname",
                  label: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
                }),
                createVNode(_component_AppInput, {
                  id: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  type: "tel"
                }),
                createVNode(_component_AppInput, {
                  id: "add-phone",
                  label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                  type: "tel"
                }),
                createVNode(_component_AppInput, {
                  id: "add-phone-2",
                  label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D 2",
                  type: "tel"
                }),
                createVNode(_component_AppInput, {
                  id: "date-birth",
                  label: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
                  type: "text"
                }),
                createVNode(_component_AppSelect, {
                  class: "form__field form__field_span-2",
                  options: $data.regions,
                  label: "\u0420\u0435\u0433\u0438\u043E\u043D"
                }, null, 8, ["options"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("h1", { class: "title-h1" }, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"),
          createVNode(_component_AppForm, {
            border: true,
            "three-columns": true
          }, {
            default: withCtx(() => [
              createVNode(_component_AppInput, {
                id: "lastname",
                label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"
              }),
              createVNode(_component_AppInput, {
                id: "name",
                label: "\u0418\u043C\u044F"
              }),
              createVNode(_component_AppInput, {
                id: "fname",
                label: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
              }),
              createVNode(_component_AppInput, {
                id: "phone",
                label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                type: "tel"
              }),
              createVNode(_component_AppInput, {
                id: "add-phone",
                label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                type: "tel"
              }),
              createVNode(_component_AppInput, {
                id: "add-phone-2",
                label: "\u0414\u043E\u043F. \u0442\u0435\u043B\u0435\u0444\u043E\u043D 2",
                type: "tel"
              }),
              createVNode(_component_AppInput, {
                id: "date-birth",
                label: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
                type: "text"
              }),
              createVNode(_component_AppSelect, {
                class: "form__field form__field_span-2",
                options: $data.regions,
                label: "\u0420\u0435\u0433\u0438\u043E\u043D"
              }, null, 8, ["options"])
            ]),
            _: 1
          })
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
const clients = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d0cacbba"]]);

export { clients as default };
//# sourceMappingURL=clients-I3Wircya.mjs.map
