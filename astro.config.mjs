import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { absoluteDocLinks } from './src/plugins/absolute-doc-links.mjs';

export default defineConfig({
  site: 'https://potatodoooog-debug.github.io',
  base: '/project-cargo-academy/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: '工程物流项目经理学习站',
      description: '面向工程物流 / 项目货（Project Cargo）新人的可持续迭代学习资料',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      head: [
        {
          tag: 'script',
          content: `(()=>{let opened=[];window.addEventListener('beforeprint',()=>{opened=[];document.querySelectorAll('details.pca-recall-answer:not([open])').forEach(d=>{d.open=true;opened.push(d);});});window.addEventListener('afterprint',()=>{opened.forEach(d=>{d.open=false;});opened=[];});})();`,
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '岗位认知与学习地图', items: [{ autogenerate: { directory: '00-overview' } }] },
        { label: '国际贸易与物流基础', items: [{ autogenerate: { directory: '01-trade-basics' } }] },
        { label: '货代业务', items: [{ autogenerate: { directory: '02-freight-forwarding' } }] },
        { label: '工程物流核心', items: [{ autogenerate: { directory: '03-project-cargo' } }] },
        { label: '储能柜出海专题', items: [{ autogenerate: { directory: '04-energy-storage' } }] },
        { label: '商务与销售', items: [{ autogenerate: { directory: '05-sales-business' } }] },
        { label: '英语与术语', items: [{ autogenerate: { directory: '06-english-terms' } }] },
        { label: '案例库', items: [{ autogenerate: { directory: '07-case-library' } }] },
        { label: '资源与工具', items: [{ autogenerate: { directory: '08-resources' } }] },
      ],
    }),
    {
      name: 'absolute-doc-links',
      hooks: {
        'astro:config:setup'({ config }) {
          const plugins = config.markdown?.processor?.options?.mdastPlugins;
          if (!Array.isArray(plugins)) {
            throw new Error(
              'absolute-doc-links: markdown processor has no mdastPlugins array',
            );
          }
          plugins.push(absoluteDocLinks);
        },
      },
    },
  ],
});
