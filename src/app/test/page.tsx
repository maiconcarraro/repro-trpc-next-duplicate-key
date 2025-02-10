export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { caller } from '~/server/routers/_app';

export async function generateMetadata(): Promise<Metadata> {
  const list = await caller.post.list({});

  return {
    title: `Posts ${list.length}`,
  };
}

export default async function Page() {
  const list = await caller.post.list({});

  return <div>Posts {list.length}</div>;
}
