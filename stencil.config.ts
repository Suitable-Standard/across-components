import { Config } from '@stencil/core';
// import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
// import { svelteOutputTarget } from '@stencil/svelte-output-target';

const componentCorePackage = '@cosmosreverse/cosmos';

// 编译为一个独立的项目中
const parent = '../cosmosreverse';
const directivesProxyFile = (name: string) => `${parent}/${name}/src/index.ts`;

export const config: Config = {
  // https://github.com/ionic-team/stencil/blob/master/src/declarations/stencil-public-compiler.ts
  enableCache: true,
  hashFileNames: false,
  autoprefixCss: false,
  minifyCss: true,
  preamble: 'Built by CosmosReverse',
  hashedFileNameLength: 8,

  globalStyle: 'src/global/variables.css',

  extras: {
    // We need the following for IE11 and old Edge:
    cssVarsShim: true,
    dynamicImportShim: true,
    // We don’t use shadow DOM so this is not needed:
    shadowDomShim: false,
    // Setting the below option to “true” will actually break Safari 10 support:
    safari10: false,
    // This is to tackle an Angular specific performance issue:
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

  // proxies
  outputTargets: [
    // angularOutputTarget({
    //   componentCorePackage,
    //   directivesProxyFile: directivesProxyFile('angular', `proxies/${entry}`),
    //   valueAccessorConfigs: [],
    // }),
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: directivesProxyFile('react'),
      // includeDefineCustomElements: true
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: directivesProxyFile('vue'),
      componentModels: [],
    }),
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
      // copy: [{ src: 'utilsExternal' }],
      serviceWorker: null, // disable service workers
    },
  ],
};
