import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';

export function getSlug() {
  const filesPath = path.join(process.cwd(), 'src/guildlines');
  const paths = sync(`${filesPath}/**/*.mdx`);

  return paths.map((filePath) => {
    const pathContent = filePath.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export async function getMdx(slug: string) {
  const file = path.join(process.cwd(), `src/guildlines/${slug}.mdx`);
  console.log(file);
  const source = fs.readFileSync(file, 'utf-8');

  const { content, data } = matter(source);

  return {
    data,
    content,
  };
}

export async function getAllMdx() {
  const filesPath = path.join(process.cwd(), 'src/guildlines');
  const files = fs.readdirSync(filesPath, 'utf-8');
  return files.map((fileName: string) => {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), 'src/guildlines', fileName),
      'utf-8',
    );
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace('.mdx', ''),
      data,
    };
  });
}
