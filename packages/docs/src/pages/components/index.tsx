import { GetStaticPropsContext } from 'next';

import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { LayoutDocs } from '../../components/layout';
import { getAllMdx, getMdx } from '../../utils/mdx';
import { Page } from '../../components/page';

type SlugsProps = {
  [key: string]: any;
};

type SlugsPageProps = {
  slug: string;
  data?: SlugsProps;
};

export default function Components(props: any) {
  const { data, content, slug, sidebar } = props;
  const { title, discription } = data;

  return (
    <LayoutDocs menu={sidebar}>
      <Page title={title} page={slug} legend={discription}>
        <MDXRemote {...content} />
      </Page>
    </LayoutDocs>
  );
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
