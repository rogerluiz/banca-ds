import type { GetStaticPropsContext } from 'next';

import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import * as BancaComponents from '@banca-ds/ui';

import { LayoutDocs } from '../../components/layout';
import { getAllMdx, getMdx } from '../../utils/mdx';
import { Page } from '../../components/page';
import { Stack } from '../../components/stack';
import { PropTable } from '../../components/prop-table';

type SlugsProps = {
  [key: string]: any;
};

type SlugsPageProps = {
  slug: string;
  data?: SlugsProps;
};

const components = {
  ...BancaComponents,
  Stack,
  PropTable,
};

export default function Components(props: any) {
  const { data, content, slug, sidebar } = props;
  const { title, discription } = data;

  return (
    <LayoutDocs menu={sidebar}>
      <Page title={title} page={slug} legend={discription}>
        <MDXRemote {...content} components={components} />
      </Page>
    </LayoutDocs>
  );
}

export async function getStaticPaths() {
  const mdxs = await getAllMdx();
  const paths = mdxs.map((mdx: any) => ({
    params: {
      slug: mdx.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params || { slug: 'start' };
  const { data, content } = await getMdx(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeCodeTitles],
    },
  });

  const files: SlugsPageProps[] = await getAllMdx();
  const sidebarList = files.map(
    ({ slug: fileSlug, data: fileData }: SlugsPageProps) => ({
      slug: fileSlug,
      label: fileData?.title,
      nav: fileData?.nav,
      path: `/components/${fileSlug}`,
    }),
  );

  return {
    props: {
      data,
      content: mdxSource,
      slug,
      sidebar: [...sidebarList].sort(),
    },
  };
}
