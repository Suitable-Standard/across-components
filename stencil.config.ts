import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
// import { vueOutputTarget } from '@stencil/vue-output-target';

const componentCorePackage = '@cosmosreverse/cosmos';

// 编译到外部 React 目录中
// @todo: Vue以及其他框架编译目录
const parent = '../build-source';
const directivesProxyFile = (name: string) => `${parent}/${name}/index.ts`;

export const config: Config = {
  // https://github.com/ionic-team/stencil/blob/master/src/declarations/stencil-public-compiler.ts
  enableCache: true,
  hashFileNames: false,
  autoprefixCss: false,
  minifyCss: true,
  preamble: 'Built by CosmosReverse',
  hashedFileNameLength: 8,

  globalStyle: 'src/global/main.css',

  plugins: [sass()],

  extras: {
    // Support for IE11 and old Edge
    cssVarsShim: true,
    dynamicImportShim: true,
    // Don't need show shadow DOM
    shadowDomShim: false,

    /**
     * - Safari 10支持使用<script type =“module”>，但是，它没有实现<script nomodule>。
     * - 设置为TRUE时，由于其缺乏编制标准支持，运行时将为SAFARI 10进行补贴。默认为false。
     */
    safari10: false,
    // For fix a Angular specific performance issue:
    initializeNextTick: true,
    // Don’t need any of these so setting them to “false”:
    scriptDataOpts: false,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: false,
  },

  buildEs5: 'prod',

  // - 此处的值会影响到 src/index.html 中的文件编译
  // - 9 & 10行的script src的值需要和 namespace 一致
  namespace: 'cosmos-reverse',
  taskQueue: 'async',

  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: `${parent}/src/index.ts`,
    }),
    // vueOutputTarget({
    //   componentCorePackage,
    //   proxiesFile: directivesProxyFile('vue'),
    //   componentModels: [],
    // }),
    // svelteOutputTarget({
    //   componentCorePackage,
    //   proxiesFile: directivesProxyFile('svelte'),
    // }),

    // custom element, no polifil
    {
      type: 'dist-custom-elements-bundle',
      dir: 'custom-element',
      empty: true,
    },
    // lazy loading
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      // disable service workers
      serviceWorker: null,
    },
  ],
};
