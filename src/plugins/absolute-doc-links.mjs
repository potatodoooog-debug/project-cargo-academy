import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_BASE = '/project-cargo-academy/';
const DOCS_MARKER = `${path.sep}src${path.sep}content${path.sep}docs${path.sep}`;

function docsRootFrom(filePath) {
  const index = filePath.indexOf(DOCS_MARKER);
  if (index < 0) return null;
  return filePath.slice(0, index + DOCS_MARKER.length - 1);
}

function isSiteRelative(url) {
  if (!url || url.startsWith('#') || url.startsWith('/')) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return false;
  return true;
}

function splitSuffix(url) {
  const hash = url.indexOf('#');
  const query = url.indexOf('?');
  let cut = url.length;
  if (hash >= 0) cut = Math.min(cut, hash);
  if (query >= 0) cut = Math.min(cut, query);
  return { pathname: url.slice(0, cut), suffix: url.slice(cut) };
}

function pageExists(docsRoot, slug) {
  if (slug === '') {
    return ['index.md', 'index.mdx'].some((name) => fs.existsSync(path.join(docsRoot, name)));
  }
  const base = path.join(docsRoot, ...slug.split('/'));
  return [base + '.md', base + '.mdx', path.join(base, 'index.md'), path.join(base, 'index.mdx')].some(
    (candidate) => fs.existsSync(candidate),
  );
}

function toAbsolute(filePath, url) {
  const docsRoot = docsRootFrom(filePath);
  if (!docsRoot) {
    throw new Error(`absolute-doc-links: ${url} is outside src/content/docs (${filePath})`);
  }
  const { pathname, suffix } = splitSuffix(url);
  const resolved = path.resolve(path.dirname(filePath), pathname);
  const relative = path.relative(docsRoot, resolved);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`absolute-doc-links: ${url} in ${filePath} leaves src/content/docs`);
  }
  let slug = relative.split(path.sep).join('/');
  slug = slug.replace(/\.mdx?$/, '');
  if (slug === 'index') slug = '';
  else if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
  if (!pageExists(docsRoot, slug)) {
    throw new Error(`absolute-doc-links: ${url} in ${filePath} does not match a docs page`);
  }
  return (slug === '' ? SITE_BASE : `${SITE_BASE}${slug}/`) + suffix;
}

export function absoluteDocLinks({ fileURL } = {}) {
  if (fileURL && !docsRootFrom(fileURLToPath(fileURL))) return false;
  return {
    name: 'absolute-doc-links',
    link(node, ctx) {
      if (!isSiteRelative(node.url)) return;
      const source = ctx.fileURL ?? fileURL;
      if (!source) {
        throw new Error(`absolute-doc-links: relative link "${node.url}" has no fileURL`);
      }
      ctx.setProperty(node, 'url', toAbsolute(fileURLToPath(source), node.url));
    },
  };
}
